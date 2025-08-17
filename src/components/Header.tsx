'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    // Hide header after 25 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  // Show header when hovering over header area
  const handleHeaderHover = () => {
    setIsVisible(true);
  };

  // Hide header when leaving header area (unless menu is open)
  const handleHeaderLeave = () => {
    if (!isMenuOpen) {
      setIsVisible(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      onMouseEnter={handleHeaderHover}
      onMouseLeave={handleHeaderLeave}
    >
      <div className="bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  BEAM
                </h1>
              </div>
              <div className="ml-3 hidden sm:block">
                <p className="text-sm text-white/60">Theology & World Religions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                Courses
              </a>
              <a href="#community" className="text-white/80 hover:text-white transition-colors">
                Community
              </a>
              <a href="#donate" className="text-white/80 hover:text-white transition-colors">
                Donate
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-white/10">
                <a href="#courses" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                  Courses
                </a>
                <a href="#community" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                  Community
                </a>
                <a href="#donate" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                  Donate
                </a>
                <a href="#contact" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
