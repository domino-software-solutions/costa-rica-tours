'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 p-4 bg-[#F7F7F7] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span 
          className="text-xl sm:text-2xl font-medium cursor-pointer text-black hover:text-[#557B59] transition-colors duration-300 tracking-wide flex items-center gap-2" 
          onClick={() => scrollToSection('hero')}
        >
          <span className="font-medium">Costa Rica Tours</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('tours')} 
            className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            Tours
          </button>
          
          {/* Tour Guides Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium flex items-center gap-1"
            >
              Tour Guides
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <Link 
                  href="/guides/erick"
                  className="block px-4 py-2 text-black hover:bg-[#F7F7F7] transition-colors duration-300"
                >
                  Erick Miranda
                </Link>
                <Link 
                  href="/guides/glenda"
                  className="block px-4 py-2 text-black hover:bg-[#F7F7F7] transition-colors duration-300"
                >
                  Glenda Araya
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/reviews"
            className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            Reviews
          </Link>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-black" 
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

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-[#F7F7F7] md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium w-full py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tours')} 
              className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium w-full py-2"
            >
              Tours
            </button>
            <Link 
              href="/guides/erick"
              className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium w-full py-2 text-center"
            >
              Erick Miranda
            </Link>
            <Link 
              href="/guides/glenda"
              className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium w-full py-2 text-center"
            >
              Glenda Araya
            </Link>
            <Link
              href="/reviews"
              className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium w-full py-2 text-center"
            >
              Reviews
            </Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium w-full py-2"
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
