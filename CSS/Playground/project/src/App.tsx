import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { Product } from './types/Product';

const products: Product[] = [
  {
    id: 'g1',
    name: 'Light G1',
    series: 'G Series',
    price: '$149',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      dpi: '25,600 DPI',
      sensor: 'PixArt 3395',
      weight: '59g',
      switches: 'Kailh GM 8.0',
      battery: '70 hours',
      connectivity: '2.4GHz / USB-C'
    },
    features: ['Ultra-lightweight design', 'Pro wireless technology', 'RGB lighting', 'Ergonomic shape']
  },
  {
    id: 'g2',
    name: 'Light G2 Pro',
    series: 'G Series',
    price: '$179',
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      dpi: '30,000 DPI',
      sensor: 'PixArt 3399',
      weight: '52g',
      switches: 'Optical Switches',
      battery: '90 hours',
      connectivity: '2.4GHz / Bluetooth / USB-C'
    },
    features: ['Honeycomb shell design', 'Wireless charging', 'Advanced RGB', 'Pro esports approved']
  },
  {
    id: 'x1',
    name: 'Light X1 Elite',
    series: 'X Series',
    price: '$199',
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      dpi: '35,000 DPI',
      sensor: 'Focus Pro 30K',
      weight: '48g',
      switches: 'Optical Mechanical',
      battery: '120 hours',
      connectivity: 'HyperSpeed Wireless'
    },
    features: ['Carbon fiber construction', 'Magnetic charging', 'Infinity scroll', 'Tournament ready']
  },
  {
    id: 'x2',
    name: 'Light X2 Ultimate',
    series: 'X Series',
    price: '$249',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      dpi: '40,000 DPI',
      sensor: 'Focus Pro 40K',
      weight: '45g',
      switches: 'Opto-Mechanical Hybrid',
      battery: '150 hours',
      connectivity: 'HyperSpeed Pro + Qi Wireless'
    },
    features: ['Titanium reinforcement', 'Wireless charging pad', 'Adaptive RGB ecosystem', 'Championship edition']
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <ProductGrid products={products} onSelectProduct={setSelectedProduct} />
      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
      <Footer />
    </div>
  );
}

export default App;