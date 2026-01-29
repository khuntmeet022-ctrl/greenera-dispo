import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Recycle, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { productCategories, sustainabilityStats, features } from '../utils/mockData';
import * as LucideIcons from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-cream-50 to-green-100 py-20 overflow-hidden">
        <div className="absolute inset-0 !opacity-[14%]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 text-sm text-green-800 font-medium">
              <Leaf className="w-4 h-4" />
              100% Biodegradable & Compostable
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 leading-tight">
              Sustainable Tableware for
              <span className="block text-green-700">Modern Businesses</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Premium eco-friendly bagasse tableware that's kind to the planet and perfect for your business. Wholesale solutions for restaurants, caterers, and event planners.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/quote">
                <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg group">
                  Request Bulk Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-6 text-lg">
                  View Catalog
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Certified Compostable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Bulk Pricing Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive selection of eco-friendly tableware to meet all your food service needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productCategories.map((category) => {
              const IconComponent = LucideIcons[category.icon];
              return (
                <Link key={category.id} to={`/products?category=${category.id}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-green-100 h-full group">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="w-16 h-16 flex items-center justify-center group-hover:bg-green-200 transition-colors mx-auto rounded-xl !bg-[#D3E2D8]">
                        {IconComponent && <IconComponent className="w-8 h-8 text-green-700" />}
                      </div>
                      <h3 className="font-semibold text-green-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>);

            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Why Choose GreenEra?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium quality meets environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = LucideIcons[feature.icon];
              return (
                <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-6 h-6 text-green-700" />}
                    </div>
                    <h3 className="font-semibold text-lg text-green-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Sustainability Stats */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-green-200 max-w-2xl mx-auto">
              Every product makes a difference for our planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, index) =>
            <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-bold text-green-300">{stat.value}</div>
                <div className="text-xl font-semibold">{stat.label}</div>
                <div className="text-sm text-green-200">{stat.description}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                Ready to Make the Switch?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Join hundreds of businesses choosing sustainable tableware. Get a custom quote for your bulk order today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
                    Get Bulk Pricing
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-6 text-lg">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>);

};

export default Home;