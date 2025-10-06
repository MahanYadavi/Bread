import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fresh Artisan Bread
              <span className="block text-amber-700">Baked Daily</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Experience the authentic taste of handcrafted breads made with premium ingredients and traditional techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors text-center font-semibold"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="bg-white text-amber-700 border-2 border-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors text-center font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop"
                alt="Fresh artisan bread"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-amber-700">100+</p>
              <p className="text-gray-600">Breads Sold Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
