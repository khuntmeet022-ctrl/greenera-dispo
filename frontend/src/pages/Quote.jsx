import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { productCategories } from '../utils/mockData';
import { CheckCircle2, Package, Mail, Phone, Building2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Quote = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    category: '',
    specificProducts: '',
    quantity: '',
    deliveryLocation: '',
    additionalNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.businessName || !formData.contactName || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSubmitting(true);

    try {
      const response = await axios.post(`${API}/quotes`, formData);
      
      if (response.status === 201) {
        console.log('Quote Request Created:', response.data);
        setSubmitted(true);
        toast.success('Quote request submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error(error.response?.data?.detail || 'Failed to submit quote request. Please try again.');
      setSubmitting(false);
    }
  };

  const businessTypes = [
    'Restaurant',
    'Catering Service',
    'Event Planning',
    'Hotel/Hospitality',
    'Food Truck',
    'Wholesale Distributor',
    'Corporate Cafeteria',
    'Other'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-green-200">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-green-900">Quote Request Received!</h2>
              <p className="text-gray-600 text-lg">
                Thank you for your interest in GreenEra products. Our team will review your requirements and get back to you within 24 hours with a customized quote.
              </p>
              <div className="bg-green-50 p-6 rounded-lg text-left space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>What's next?</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>We'll review your bulk order requirements</li>
                  <li>Our team will prepare a detailed quote with pricing</li>
                  <li>You'll receive an email within 24 hours</li>
                  <li>We'll discuss customization options if needed</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500">
                Check your email: <strong>{formData.email}</strong>
              </p>
              <Button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    businessName: '',
                    contactName: '',
                    email: '',
                    phone: '',
                    businessType: '',
                    category: '',
                    specificProducts: '',
                    quantity: '',
                    deliveryLocation: '',
                    additionalNotes: ''
                  });
                }}
                className="bg-green-700 hover:bg-green-800 text-white"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Request a Bulk Quote</h1>
            <p className="text-green-200 text-lg">
              Get competitive pricing for your bulk order. We serve restaurants, caterers, event planners, and wholesalers nationwide.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">Quote Request Form</CardTitle>
                <p className="text-gray-600 text-sm">Fill in your details and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Business Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                          placeholder="Your Business Name"
                          className="border-green-200 focus:ring-green-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type</Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                          <SelectTrigger className="border-green-200">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange('contactName', e.target.value)}
                          placeholder="John Doe"
                          className="border-green-200 focus:ring-green-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@business.com"
                          className="border-green-200 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="border-green-200 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Order Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      Order Details
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Product Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="border-green-200">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {productCategories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specificProducts">Specific Products</Label>
                      <Textarea
                        id="specificProducts"
                        value={formData.specificProducts}
                        onChange={(e) => handleInputChange('specificProducts', e.target.value)}
                        placeholder="List specific products and sizes you're interested in..."
                        className="border-green-200 focus:ring-green-500 min-h-[80px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        placeholder="e.g., 10,000 pieces per month"
                        className="border-green-200 focus:ring-green-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="deliveryLocation">Delivery Location</Label>
                      <Input
                        id="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={(e) => handleInputChange('deliveryLocation', e.target.value)}
                        placeholder="City, State"
                        className="border-green-200 focus:ring-green-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                        placeholder="Any special requirements, customization needs, or questions..."
                        className="border-green-200 focus:ring-green-500 min-h-[100px]"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Quote Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-900">Why Choose GreenEra?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Competitive Bulk Pricing</div>
                    <div className="text-gray-600">Volume discounts for large orders</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Fast Turnaround</div>
                    <div className="text-gray-600">Quick production and delivery</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Quality Guaranteed</div>
                    <div className="text-gray-600">Premium materials and construction</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Nationwide Shipping</div>
                    <div className="text-gray-600">Reliable delivery across the country</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-green-900">Need Help?</h3>
                <p className="text-sm text-gray-700">
                  Our team is ready to assist you with product selection and pricing.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>sales@greenera.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-green-200">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-green-900">Quote Request Received!</h2>
              <p className="text-gray-600 text-lg">
                Thank you for your interest in GreenEra products. Our team will review your requirements and get back to you within 24 hours with a customized quote.
              </p>
              <div className="bg-green-50 p-6 rounded-lg text-left space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>What's next?</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>We'll review your bulk order requirements</li>
                  <li>Our team will prepare a detailed quote with pricing</li>
                  <li>You'll receive an email within 24 hours</li>
                  <li>We'll discuss customization options if needed</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500">
                Check your email: <strong>{formData.email}</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Request a Bulk Quote</h1>
            <p className="text-green-200 text-lg">
              Get competitive pricing for your bulk order. We serve restaurants, caterers, event planners, and wholesalers nationwide.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">Quote Request Form</CardTitle>
                <p className="text-gray-600 text-sm">Fill in your details and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Business Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                          placeholder="Your Business Name"
                          className="border-green-200 focus:ring-green-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type</Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                          <SelectTrigger className="border-green-200">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange('contactName', e.target.value)}
                          placeholder="John Doe"
                          className="border-green-200 focus:ring-green-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@business.com"
                          className="border-green-200 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="border-green-200 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Order Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-green-900 flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      Order Details
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Product Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="border-green-200">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {productCategories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specificProducts">Specific Products</Label>
                      <Textarea
                        id="specificProducts"
                        value={formData.specificProducts}
                        onChange={(e) => handleInputChange('specificProducts', e.target.value)}
                        placeholder="List specific products and sizes you're interested in..."
                        className="border-green-200 focus:ring-green-500 min-h-[80px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        placeholder="e.g., 10,000 pieces per month"
                        className="border-green-200 focus:ring-green-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="deliveryLocation">Delivery Location</Label>
                      <Input
                        id="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={(e) => handleInputChange('deliveryLocation', e.target.value)}
                        placeholder="City, State"
                        className="border-green-200 focus:ring-green-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                        placeholder="Any special requirements, customization needs, or questions..."
                        className="border-green-200 focus:ring-green-500 min-h-[100px]"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-900">Why Choose GreenEra?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Competitive Bulk Pricing</div>
                    <div className="text-gray-600">Volume discounts for large orders</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Fast Turnaround</div>
                    <div className="text-gray-600">Quick production and delivery</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Quality Guaranteed</div>
                    <div className="text-gray-600">Premium materials and construction</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Nationwide Shipping</div>
                    <div className="text-gray-600">Reliable delivery across the country</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-green-900">Need Help?</h3>
                <p className="text-sm text-gray-700">
                  Our team is ready to assist you with product selection and pricing.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>sales@greenera.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
