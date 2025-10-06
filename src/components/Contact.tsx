import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            امروز به ما سر بزنید
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            به نانوایی ما بیایید تا عطر نان تازه پخته شده را تجربه کنید و تفاوت را بچشید
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">در تماس باشید</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">آدرس</h4>
                  <p className="text-gray-600">
                    خیابان نانوایی، پلاک ۱۲۳<br />
                    محله صنعتگران، کد پستی ۱۲۳۴۵
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">تلفن</h4>
                  <p className="text-gray-600">(۵۵۵) ۱۲۳-۴۵۶۷</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">ایمیل</h4>
                  <p className="text-gray-600">hello@artisanbread.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">ساعات کاری</h4>
                  <p className="text-gray-600">
                    دوشنبه - جمعه: ۷:۰۰ صبح - ۷:۰۰ عصر<br />
                    شنبه: ۸:۰۰ صبح - ۶:۰۰ عصر<br />
                    یکشنبه: ۹:۰۰ صبح - ۴:۰۰ عصر
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">برای ما پیام بفرستید</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  نام
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="نام شما"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  پیام
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="پیام شما..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
