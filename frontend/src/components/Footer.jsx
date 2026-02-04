import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-300" />
              </div>
              <span className="text-xl font-bold">GreenEra</span>
            </div>
            <p className="text-green-200 text-sm">
              Premium eco-friendly tableware made from 100% natural sugarcane bagasse. Sustainable solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-green-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-green-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-green-200 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-green-200 hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-green-300">Products</h3>
            <ul className="space-y-2 text-sm text-green-200">
              <li>Round Plates</li>
              <li>Square Plates</li>
              <li>Compartment Trays</li>
              <li>Bowls</li>
              <li>Clam Shells</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-green-300">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-green-200">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@greenera.com</span>
              </li>
              <li className="flex items-start gap-2 text-green-200">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 93132 74748
                </span>
              </li>
              <li className="flex items-start gap-2 text-green-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Gokuldham Main Road, Smrat Industrial Area, Rajkot - 360004 Gujrat - INDIA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-300">
          <p>&copy; {currentYear} GreenEra. All rights reserved. Committed to a sustainable future.</p>
        </div>
      </div>
    </footer>);
};

export default Footer;