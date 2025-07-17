import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Clock,
  Shield,
  Truck,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-900 text-white">
      {/* Features section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-black-900" />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-400">On orders above ₹50,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-black-900" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-400">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-black-900" />
              </div>
              <div>
                <h3 className="font-semibold">Certified Jewelry</h3>
                <p className="text-sm text-gray-400">Hallmarked & authenticated</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-black-900" />
              </div>
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-400">Customer service available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h3 className="text-xl font-serif font-bold">Brijwasi Jeweller</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Crafting exquisite jewelry for over three generations. We blend traditional 
              craftsmanship with modern design to create timeless pieces that celebrate 
              life's precious moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=rings" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/products?category=necklaces" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/products?category=earrings" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/products?category=bracelets" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/products?category=pendants" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Pendants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-0.5" />
                <div>
                  <p className="text-gray-400">
                    123 Jewelry Street,<br />
                    Gold Market, Mumbai,<br />
                    Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500" />
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500" />
                <p className="text-gray-400">info@brijwasijeweller.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold-500" />
                <div>
                  <p className="text-gray-400">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-400">Sun: 12:00 PM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Brijwasi Jeweller. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/returns" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">
                Return Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;