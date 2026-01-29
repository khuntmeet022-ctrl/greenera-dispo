import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { aboutContent } from '../utils/mockData';
import { Target, Eye, Award, Users, Leaf, CheckCircle2 } from 'lucide-react';

const About = () => {
  const achievements = [
    { value: '5M+', label: 'Products Delivered' },
    { value: '500+', label: 'Business Partners' },
    { value: '15+', label: 'Countries Served' },
    { value: '100%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Est. 2020</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">About GreenEra</h1>
            <p className="text-green-200 text-lg">
              Leading the transition to sustainable food service solutions through innovation and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-green-900">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-green-700" />
                </div>
                <h2 className="text-2xl font-bold text-green-900">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide for sustainable tableware solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-4xl font-bold text-green-700">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aboutContent.values.map((value, index) => (
              <Card key={index} className="border-green-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-green-200">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-green-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-green-900">Why Partner With GreenEra?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Premium Quality</div>
                        <div className="text-sm text-gray-600">Rigorous quality control ensures consistent excellence</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Competitive Pricing</div>
                        <div className="text-sm text-gray-600">Best value for bulk orders with flexible payment terms</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Reliable Supply</div>
                        <div className="text-sm text-gray-600">Consistent inventory and on-time delivery</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Expert Support</div>
                        <div className="text-sm text-gray-600">Dedicated account managers for your business needs</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Custom Solutions</div>
                        <div className="text-sm text-gray-600">Tailored products and packaging for your brand</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Eco Leadership</div>
                        <div className="text-sm text-gray-600">Help your business meet sustainability goals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-green-700 to-green-900 border-0">
            <CardContent className="p-12 text-center text-white space-y-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Growing Family</h2>
              <p className="text-green-200 text-lg max-w-2xl mx-auto">
                We're always looking to partner with businesses committed to sustainability. Let's work together to create a greener future.
              </p>
              <div className="pt-4">
                <a href="/quote">
                  <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                    Become a Partner
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
