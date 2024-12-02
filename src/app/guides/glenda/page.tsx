'use client';

import Image from 'next/image';
import TourGuidesNavbar from '@/app/components/TourGuidesNavbar';

const GlendaGuidePage = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <TourGuidesNavbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#2C5530] mb-6">
            Discover the magic of Costa Rica with Glenda Araya
          </h1>
         
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[250px] sm:h-[300px]">
              <Image
                src="/GlendaBeach.jpg"
                alt="Glenda Araya at the beach"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>
            <div className="relative h-[250px] sm:h-[300px]">
              <Image
                src="/GlendaTelescope.jpg"
                alt="Glenda Araya on a boat"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="space-y-4">
            
             <p className="text-lg sm:text-xl text-[#557B59] leading-relaxed">
            From spotting sloths in the mysterious mist-shrouded canopies of the Santa Elena Cloud Forest Reserve to watching green turtle hatchlings scramble towards the sea in Tortuguero National Park, it&apos;s clear that endless wonders abound on a trip to Costa Rica.
          </p>
            <ul className="space-y-2 text-[#557B59]">
              <li>• Expert guide at Santa Elena Cloud Forest Reserve</li>
              <li>• Specialized in wildlife spotting</li>
              <li>• Experience leading tours at Tortuguero National Park</li>
              <li>• Knowledge of sea turtle nesting and conservation</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GlendaGuidePage;
