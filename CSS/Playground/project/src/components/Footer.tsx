import React from 'react';
import { Mouse, Twitter, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Mouse className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Light
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Precision redefined. Experience the next evolution in gaming peripherals with revolutionary mouse technology.
            </p>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">G Series</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">X Series</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Accessories</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Software</a>
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Warranty</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          
          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Github className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Light Gaming. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;