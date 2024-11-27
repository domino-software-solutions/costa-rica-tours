'use client';

import { useState } from 'react';

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 p-4 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span 
          className="text-xl sm:text-2xl font-light cursor-pointer text-[#2C5530]" 
          onClick={() => scrollToSection('hero')}
        >
          Costa Rica Tours
        </span>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[#2C5530]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-[#557B59] hover:text-[#2C5530] transition-colors duration-300 font-light"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('tours')} 
            className="text-[#557B59] hover:text-[#2C5530] transition-colors duration-300 font-light"
          >
            Tours
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-[#557B59] hover:text-[#2C5530] transition-colors duration-300 font-light"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-[#F7F7F7] md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-[#557B59] hover:text-[#2C5530] transition-colors duration-300 font-light w-full py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tours')} 
              className="text-[#557B59] hover:text-[#2C5530] transition-colors duration-300 font-light w-full py-2"
            >
              Tours
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-[#557B59] hover:text-[#2C5530] transition-colors duration-300 font-light w-full py-2"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
