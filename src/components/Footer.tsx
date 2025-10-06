import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">🍞 نانوایی صنعتگر</h3>
            <p className="text-gray-400 mb-4">
              پخت نان‌های صنعتگر درجه یک با روش‌های سنتی و بهترین مواد اولیه از سال ۱۳۶۴.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">لینک‌های سریع</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">خانه</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">محصولات</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">درباره ما</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">تماس</h4>
            <ul className="space-y-2 text-gray-400">
              <li>خیابان نانوایی، پلاک ۱۲۳</li>
              <li>محله صنعتگران، کد پستی ۱۲۳۴۵</li>
              <li>(۵۵۵) ۱۲۳-۴۵۶۷</li>
              <li>hello@artisanbread.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; ۲۰۲۵ نانوایی صنعتگر. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
