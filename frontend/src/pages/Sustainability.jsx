import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { sustainabilityStats, features } from '../utils/mockData';
import { Leaf, TreePine, Droplets, Factory, Globe, Recycle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Sustainability = () => {
  const impactAreas = [
    {
      icon: 'TreePine',
      title: 'Forest Conservation',
      description: 'Every ton of bagasse used saves 17 trees and prevents deforestation. Our production relies on agricultural waste, not virgin timber.',
      stats: '50+ trees saved per ton'
    },
    {
      icon: 'Droplets',
      title: 'Water Conservation',
      description: 'Sugarcane bagasse production uses 60% less water compared to traditional paper plate manufacturing.',
      stats: '60% less water usage'
    },
    {
      icon: 'Factory',
      title: 'Carbon Reduction',
      description: 'Manufacturing bagasse products produces 50% fewer carbon emissions compared to plastic alternatives.',
      stats: '50% lower emissions'
    },
    {
      icon: 'Recycle',
      title: 'Waste Reduction',
      description: 'Our products fully decompose in 90 days, turning into nutrient-rich compost instead of landfill waste.',
      stats: '100% compostable'
    }
  ];

  const lifecycle = [
    {
      step: '1',
      title: 'Sustainable Sourcing',
      description: 'We use sugarcane bagasse, a byproduct of sugar production that would otherwise be burned or discarded.'
    },
    {
      step: '2',
      title: 'Eco-Friendly Manufacturing',
      description: 'Our production process uses renewable energy and minimizes water consumption with zero chemical additives.'
    },
    {
      step: '3',
      title: 'Product Usage',
      description: 'Durable, heat-resistant, and perfect for hot and cold foods. Safe for microwave and freezer use.'
    },
    {
      step: '4',
      title: 'Natural Decomposition',
      description: 'After use, products break down naturally within 90 days, enriching soil instead of polluting oceans.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Our Environmental Commitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Sustainability Impact</h1>
            <p className="text-green-200 text-lg">
              Every GreenEra product represents a step toward a cleaner planet. Here's how we're making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityStats.map((stat, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-5xl font-bold text-green-700">{stat.value}</div>
                  <div className="text-lg font-semibold text-green-900">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Environmental Impact Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to sustainability extends across every aspect of production and use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = LucideIcons[area.icon];
              return (
                <Card key={index} className="border-green-200 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        {IconComponent && <IconComponent className="w-7 h-7 text-green-700" />}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold text-green-900">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                        <div className="inline-block px-4 py-2 bg-green-100 rounded-lg">
                          <span className="text-sm font-semibold text-green-800">{area.stats}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Lifecycle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Complete Product Lifecycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From farm waste to nutrient-rich compost - a truly circular economy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {lifecycle.map((item, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1">
                      <Card className={`border-green-200 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <CardContent className="p-6 space-y-2">
                          <h3 className="text-xl font-semibold text-green-900">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Step Number */}
                    <div className="relative z-10 w-16 h-16 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Product Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Superior performance without compromising on sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-green-700 to-green-900 border-0">
            <CardContent className="p-12 text-center text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Certified & Compliant
              </h2>
              <p className="text-green-200 text-lg max-w-2xl mx-auto">
                Our products meet international standards for food safety, biodegradability, and compostability.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-sm">
                <div className="space-y-1">
                  <div className="font-semibold text-lg">FDA Approved</div>
                  <div className="text-green-300">Food Contact Safe</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-lg">BPI Certified</div>
                  <div className="text-green-300">Compostable Products</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-lg">ASTM D6400</div>
                  <div className="text-green-300">Biodegradable Standard</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-lg">ISO Certified</div>
                  <div className="text-green-300">Quality Management</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
