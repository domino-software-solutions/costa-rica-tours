'use client';

const Navbar = (): JSX.Element => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 text-white p-4 bg-black/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
          Costa Rica Tours
        </span>
        <div className="space-x-6">
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('tours')} className="hover:text-primary transition-colors">
            Tours
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
