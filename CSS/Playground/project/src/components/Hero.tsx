import React from 'react';
import { ArrowRight, Zap, Target, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Precision
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the next evolution in gaming peripherals with Light's revolutionary mouse technology. 
              Engineered for champions, built for victory.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Explore Products
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="px-8 py-4 rounded-full text-lg font-semibold border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-blue-500/10 rounded-full border border-blue-500/20">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-gray-400 text-center">Up to 40K DPI with zero latency</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-purple-500/10 rounded-full border border-purple-500/20">
                <Target className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Pixel Perfect</h3>
              <p className="text-gray-400 text-center">Advanced sensor technology</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-green-500/10 rounded-full border border-green-500/20">
                <Award className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Pro Approved</h3>
              <p className="text-gray-400 text-center">Used by esports champions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;