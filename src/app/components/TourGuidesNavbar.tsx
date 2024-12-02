'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TourGuidesNavbar = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 p-4 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span 
          className="text-xl sm:text-2xl font-medium cursor-pointer text-[#2C5530] hover:text-[#557B59] transition-colors duration-300 tracking-wide flex items-center gap-2" 
          onClick={() => router.push('/')}
        >
          <span className="font-medium">Costa Rica Tours</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/guides/erick"
            className="text-[#2C5530] hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            Erick&apos;s Profile
          </Link>
          <Link 
            href="/guides/glenda"
            className="text-[#2C5530] hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            Glenda&apos;s Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TourGuidesNavbar;
