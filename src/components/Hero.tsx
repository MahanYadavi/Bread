import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              نان صنعتگر تازه
              <span className="block text-amber-700">پخت روزانه</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              طعم اصیل نان‌های دست‌ساز را که با مواد اولیه درجه یک و تکنیک‌های سنتی تهیه شده‌اند، تجربه کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors text-center font-semibold"
              >
                همین حالا خرید کنید
              </a>
              <a
                href="#about"
                className="bg-white text-amber-700 border-2 border-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors text-center font-semibold"
              >
                بیشتر بدانید
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="E:\Natanz frontend\Bread\src\first.jpg"
                alt="نان صنعتگر تازه"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-amber-700">۱۰۰+</p>
              <p className="text-gray-600">نان فروخته شده در روز</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
