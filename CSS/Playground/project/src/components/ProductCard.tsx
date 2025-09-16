import React from 'react';
import { Product } from '../types/Product';
import { ArrowRight, Zap, Weight, Wifi } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const seriesColor = product.series === 'G Series' ? 'blue' : 'purple';
  
  return (
    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        {/* Series Badge */}
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
          seriesColor === 'blue' 
            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
        }`}>
          {product.series}
        </div>
        
        {/* Product Image */}
        <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <span className={`text-2xl font-bold ${
              seriesColor === 'blue' ? 'text-blue-400' : 'text-purple-400'
            }`}>
              {product.price}
            </span>
          </div>
          
          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-1">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-xs text-gray-400">DPI</span>
              <span className="text-sm font-semibold text-white">{product.specs.dpi}</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Weight className="h-5 w-5 text-green-400" />
              <span className="text-xs text-gray-400">Weight</span>
              <span className="text-sm font-semibold text-white">{product.specs.weight}</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Wifi className="h-5 w-5 text-blue-400" />
              <span className="text-xs text-gray-400">Battery</span>
              <span className="text-sm font-semibold text-white">{product.specs.battery}</span>
            </div>
          </div>
          
          {/* Action Button */}
          <button 
            onClick={onSelect}
            className="group/btn w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-gray-600 hover:border-gray-500"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;