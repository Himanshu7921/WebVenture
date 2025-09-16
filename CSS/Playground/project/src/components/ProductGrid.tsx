import React from 'react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onSelectProduct }) => {
  const gSeries = products.filter(p => p.series === 'G Series');
  const xSeries = products.filter(p => p.series === 'X Series');

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gaming Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our premium collection of professional gaming mice, each engineered for different play styles and preferences.
          </p>
        </div>

        {/* G Series */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent mr-4"></div>
            <h3 className="text-3xl font-bold text-blue-400">G Series</h3>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent ml-4"></div>
          </div>
          <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
            The G Series delivers exceptional performance with lightweight design and wireless freedom. Perfect for competitive gaming.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gSeries.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={() => onSelectProduct(product)} 
              />
            ))}
          </div>
        </div>

        {/* X Series */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mr-4"></div>
            <h3 className="text-3xl font-bold text-purple-400">X Series</h3>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-transparent ml-4"></div>
          </div>
          <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
            The X Series represents the pinnacle of gaming mouse technology. Premium materials and cutting-edge features for pro players.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {xSeries.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={() => onSelectProduct(product)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;