import React from 'react';
import { Clock, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            درباره نانوایی ما
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            متعهد به ارائه بهترین نان‌های صنعتگر با روش‌های سنتی و مواد اولیه درجه یک
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Clock className="text-amber-700" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">پخت تازه روزانه</h3>
            <p className="text-gray-600">
              هر نان هر روز صبح با استفاده از تکنیک‌های سنتی که از نسل‌ها به ارث رسیده، تازه پخته می‌شود.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Heart className="text-amber-700" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">ساخته شده با عشق</h3>
            <p className="text-gray-600">
              نانواهای پرشور ما قلب خود را در هر نان می‌گذارند و بالاترین کیفیت و طعم را تضمین می‌کنند.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Award className="text-amber-700" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">مواد اولیه درجه یک</h3>
            <p className="text-gray-600">
              ما فقط از بهترین آرد ارگانیک، خمیر مایه طبیعی و مواد اولیه تازه برای طعم برتر استفاده می‌کنیم.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                داستان ما
              </h3>
              <p className="text-gray-700 mb-4">
                از سال ۱۳۶۴، ما نان‌های صنعتگری می‌پزیم که خانواده‌ها را دور هم جمع می‌کند.
                آنچه به عنوان یک نانوایی کوچک خانوادگی شروع شد، به یک مرکز محبوب اجتماعی تبدیل شده است،
                اما تعهد ما به کیفیت هرگز تغییر نکرده است.
              </p>
              <p className="text-gray-700">
                هر روز صبح، نانواهای ماهر ما قبل از طلوع آفتاب می‌رسند تا فرآیند قدیمی
                مخلوط کردن، ورز دادن و پخت را آغاز کنند. ما معتقدیم که نان عالی نیازمند
                صبر، اشتیاق و بهترین مواد اولیه است.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop"
                alt="نانوایی ما"
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
