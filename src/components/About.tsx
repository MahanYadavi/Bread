import React from 'react';
import { Clock, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Bakery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to bringing you the finest artisan breads with traditional methods and premium ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Clock className="text-amber-700" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Baked Fresh Daily</h3>
            <p className="text-gray-600">
              Every loaf is baked fresh each morning using traditional techniques passed down through generations.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Heart className="text-amber-700" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
            <p className="text-gray-600">
              Our passionate bakers put their heart into every loaf, ensuring the highest quality and taste.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Award className="text-amber-700" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Ingredients</h3>
            <p className="text-gray-600">
              We source only the finest organic flour, natural yeast, and fresh ingredients for superior flavor.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-700 mb-4">
                Since 1985, we have been crafting artisan breads that bring families together. 
                What started as a small family bakery has grown into a beloved community staple, 
                but our commitment to quality has never wavered.
              </p>
              <p className="text-gray-700">
                Every morning, our skilled bakers arrive before dawn to begin the time-honored 
                process of mixing, kneading, and baking. We believe that great bread requires 
                patience, passion, and the finest ingredients.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop"
                alt="Our bakery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
