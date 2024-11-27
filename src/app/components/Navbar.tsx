'use client';

const Navbar = (): JSX.Element => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 p-4 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span 
          className="text-2xl font-light cursor-pointer text-[#2C5530]" 
          onClick={() => scrollToSection('hero')}
        >
          Costa Rica Tours
        </span>
        <div className="space-x-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
