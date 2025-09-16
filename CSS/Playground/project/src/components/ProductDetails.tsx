import React from 'react';
import { Product } from '../types/Product';
import { X, Zap, MousePointer, Battery, Wifi, Award, CheckCircle } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const seriesColor = product.series === 'G Series' ? 'blue' : 'purple';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-full transition-colors duration-200"
        >
          <X className="h-6 w-6 text-gray-300" />
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className={`h-5 w-5 ${
                      seriesColor === 'blue' ? 'text-blue-400' : 'text-purple-400'
                    }`} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                seriesColor === 'blue' 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              }`}>
                {product.series}
              </div>
              
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold text-white">{product.name}</h2>
                <span className={`text-3xl font-bold ${
                  seriesColor === 'blue' ? 'text-blue-400' : 'text-purple-400'
                }`}>
                  {product.price}
                </span>
              </div>
            </div>
            
            {/* Detailed Specifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Technical Specifications</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                      <Zap className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Maximum DPI</p>
                      <p className="text-white font-semibold">{product.specs.dpi}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <MousePointer className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Sensor</p>
                      <p className="text-white font-semibold">{product.specs.sensor}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Award className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Weight</p>
                      <p className="text-white font-semibold">{product.specs.weight}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <MousePointer className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Switches</p>
                      <p className="text-white font-semibold">{product.specs.switches}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Battery className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Battery Life</p>
                      <p className="text-white font-semibold">{product.specs.battery}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Wifi className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Connectivity</p>
                      <p className="text-white font-semibold">{product.specs.connectivity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`flex-1 bg-gradient-to-r ${
                seriesColor === 'blue' 
                  ? 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                  : 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
              } px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 border border-gray-600 hover:border-gray-500">
                Compare Models
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;