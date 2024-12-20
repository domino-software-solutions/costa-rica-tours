'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TourGuidesNavbar = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 p-4 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="text-black hover:text-[#557B59] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <span 
            className="text-xl sm:text-2xl font-medium cursor-pointer text-black hover:text-[#557B59] transition-colors duration-300 tracking-wide flex items-center gap-2" 
            onClick={() => router.push('/')}
          >
            <span className="font-medium">Costa Rica Tours</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/guides/erick"
            className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            Erick Miranda
          </Link>
          <Link 
            href="/guides/glenda"
            className="text-black hover:text-[#557B59] transition-colors duration-300 font-medium"
          >
            Glenda Araya
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TourGuidesNavbar;
