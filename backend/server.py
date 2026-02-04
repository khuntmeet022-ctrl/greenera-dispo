from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class QuoteRequestCreate(BaseModel):
    businessName: str
    contactName: str
    email: EmailStr
    phone: str
    businessType: Optional[str] = ""
    category: Optional[str] = ""
    specificProducts: Optional[str] = ""
    quantity: Optional[str] = ""
    deliveryLocation: Optional[str] = ""
    additionalNotes: Optional[str] = ""

class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    businessName: str
    contactName: str
    email: str
    phone: str
    businessType: str = ""
    category: str = ""
    specificProducts: str = ""
    quantity: str = ""
    deliveryLocation: str = ""
    additionalNotes: str = ""
    status: str = "pending"
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Health check endpoint (required for Kubernetes)
@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "GreenEra API"}

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "GreenEra API - Sustainable Tableware Solutions"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Quote Request Routes
@api_router.post("/quotes", response_model=QuoteRequest, status_code=201)
async def create_quote_request(quote_data: QuoteRequestCreate):
    """Create a new quote request"""
    try:
        quote_obj = QuoteRequest(**quote_data.model_dump())
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = quote_obj.model_dump()
        doc['createdAt'] = doc['createdAt'].isoformat()
        doc['updatedAt'] = doc['updatedAt'].isoformat()
        
        result = await db.quote_requests.insert_one(doc)
        
        if result.inserted_id:
            return quote_obj
        else:
            raise HTTPException(status_code=500, detail="Failed to create quote request")
    except Exception as e:
        logger.error(f"Error creating quote request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/quotes", response_model=List[QuoteRequest])
async def get_quote_requests():
    """Get all quote requests"""
    try:
        quotes = await db.quote_requests.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for quote in quotes:
            if isinstance(quote['createdAt'], str):
                quote['createdAt'] = datetime.fromisoformat(quote['createdAt'])
            if isinstance(quote['updatedAt'], str):
                quote['updatedAt'] = datetime.fromisoformat(quote['updatedAt'])
        
        return quotes
    except Exception as e:
        logger.error(f"Error fetching quote requests: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/quotes/{quote_id}", response_model=QuoteRequest)
async def get_quote_request(quote_id: str):
    """Get a specific quote request by ID"""
    try:
        quote = await db.quote_requests.find_one({"id": quote_id}, {"_id": 0})
        if quote:
            # Convert ISO string timestamps back to datetime objects
            if isinstance(quote['createdAt'], str):
                quote['createdAt'] = datetime.fromisoformat(quote['createdAt'])
            if isinstance(quote['updatedAt'], str):
                quote['updatedAt'] = datetime.fromisoformat(quote['updatedAt'])
            return QuoteRequest(**quote)
        else:
            raise HTTPException(status_code=404, detail="Quote request not found")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching quote request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()