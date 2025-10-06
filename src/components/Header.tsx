import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick, onMenuClick, isMenuOpen }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold text-amber-700 mr-2 md:mr-0">
              🍞 نانوایی صنعتگر
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-amber-700 transition-colors">
              خانه
            </a>
            <a href="#products" className="text-gray-700 hover:text-amber-700 transition-colors">
              محصولات
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors">
              درباره ما
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors">
              تماس با ما
            </a>
          </nav>

          <button
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ShoppingCart className="text-gray-700" size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -left-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={onMenuClick}
            >
              خانه
            </a>
            <a
              href="#products"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={onMenuClick}
            >
              محصولات
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={onMenuClick}
            >
              درباره ما
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={onMenuClick}
            >
              تماس با ما
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
