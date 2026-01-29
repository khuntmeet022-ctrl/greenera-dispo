# GreenEra Backend Integration Contracts

## Overview
This document outlines the backend implementation plan, API contracts, and frontend-backend integration for the GreenEra sustainable tableware website.

## Current Mock Data
**Location**: `/app/frontend/src/utils/mockData.js`

### Mocked Data:
1. `productCategories` - 5 product categories
2. `products` - 26 products with specifications
3. `sustainabilityStats` - Environmental impact statistics
4. `features` - Product features list
5. `aboutContent` - Company information

### Mock Implementation:
- Quote form submission: Currently logs to console and shows success message
- No database persistence
- Form resets after 3 seconds

## Backend Implementation Plan

### 1. Database Models (MongoDB)

#### QuoteRequest Model
```python
{
    id: UUID (auto-generated)
    businessName: String (required)
    contactName: String (required)
    email: String (required)
    phone: String (required)
    businessType: String
    category: String
    specificProducts: String (text)
    quantity: String
    deliveryLocation: String
    additionalNotes: String (text)
    status: String (default: "pending") # pending, contacted, quoted, closed
    createdAt: DateTime (auto)
    updatedAt: DateTime (auto)
}
```

### 2. Backend API Endpoints

#### Quote Request Endpoints

**POST /api/quotes**
- Create new quote request
- Request Body: QuoteRequest data
- Response: Created quote object with ID
- Status: 201 Created

**GET /api/quotes**
- Get all quote requests (for admin/internal use)
- Response: List of quote objects
- Status: 200 OK

**GET /api/quotes/{id}**
- Get specific quote request
- Response: Single quote object
- Status: 200 OK / 404 Not Found

#### Product Endpoints (Optional - serving static data)

**GET /api/products**
- Get all products
- Query params: ?category={categoryId}
- Response: List of products
- Status: 200 OK

**GET /api/categories**
- Get all product categories
- Response: List of categories
- Status: 200 OK

### 3. Frontend Integration Changes

#### Files to Update:

**`/app/frontend/src/pages/Quote.jsx`**
- Remove mock submission logic
- Add axios API call to POST /api/quotes
- Handle API response and errors
- Keep success UI, update error handling

**Changes Required:**
```javascript
// Current: Mock submission
console.log('Quote Request:', formData);
setSubmitted(true);

// New: Real API call
const response = await axios.post(`${API}/quotes`, formData);
if (response.status === 201) {
  setSubmitted(true);
}
```

#### Optional Frontend Updates:
- Products page: Could fetch from API instead of mockData
- Keep mockData.js for static content (features, stats, about)

## Implementation Steps

### Phase 1: Backend Development
1. Create QuoteRequest model in server.py
2. Implement POST /api/quotes endpoint with validation
3. Implement GET /api/quotes endpoint
4. Test endpoints with curl

### Phase 2: Frontend Integration
1. Update Quote.jsx to use real API
2. Add proper error handling
3. Test form submission with backend
4. Verify data persistence in MongoDB

### Phase 3: Testing
1. Test quote form submission end-to-end
2. Verify data in MongoDB database
3. Test error scenarios (network failures, validation errors)
4. Check form reset after successful submission

## Data Flow

### Quote Submission Flow:
1. User fills quote form on frontend
2. Form validation on submit (required fields)
3. Frontend sends POST request to /api/quotes
4. Backend validates data
5. Backend saves to MongoDB
6. Backend returns created quote with ID
7. Frontend shows success message
8. Form resets after display

## Notes
- Product catalog data can remain as mock data (static content)
- Focus on quote request functionality for MVP
- Status field allows future admin panel development
- Email notifications can be added later
