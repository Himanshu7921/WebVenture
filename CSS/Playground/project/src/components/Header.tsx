import React from 'react';
import { Mouse, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Mouse className="h-8 w-8 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Light
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a>
            <a href="#specs" className="text-gray-300 hover:text-white transition-colors duration-200">Specifications</a>
            <a href="#support" className="text-gray-300 hover:text-white transition-colors duration-200">Support</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Shop Now
            </button>
          </nav>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;