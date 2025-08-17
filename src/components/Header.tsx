'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">
                BEAM
              </h1>
            </div>
            <div className="ml-3 hidden sm:block">
              <p className="text-sm text-slate-600">Theology & World Religions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors">
              Courses
            </a>
            <a href="#community" className="text-slate-700 hover:text-blue-600 transition-colors">
              Community
            </a>
            <a href="#donate" className="text-slate-700 hover:text-blue-600 transition-colors">
              Donate
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              <a href="#courses" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors">
                Courses
              </a>
              <a href="#community" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors">
                Community
              </a>
              <a href="#donate" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors">
                Donate
              </a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
