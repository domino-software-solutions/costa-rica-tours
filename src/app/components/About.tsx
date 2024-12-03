'use client';

import Image from 'next/image';
import Link from 'next/link';

const About = (): JSX.Element => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#2C5530] text-center mb-8 sm:mb-12 tracking-tight">
        Meet Your Guides
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <Link href="/guides/erick" className="block w-full group">
              <div className="relative h-[300px] w-full group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/ErickStar.jpg"
                  alt="Erick Miranda Guide"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to see bio
                </span>
              </div>
              <p className="mt-3 text-lg font-medium text-[#2C5530] text-center">Erick Miranda</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <Link href="/guides/glenda" className="block w-full group">
              <div className="relative h-[300px] w-full group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/GlendaBeach.jpg"
                  alt="Glenda Araya Guide"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to see bio
                </span>
              </div>
              <p className="mt-3 text-lg font-medium text-[#2C5530] text-center">Glenda Araya</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg text-[#557B59] font-normal leading-relaxed">
          Born in the historic region of Heredia, Erick Miranda brings over a decade of experience as a licensed naturalist guide. His deep connection to Costa Rica&apos;s coffee plantations and forests, combined with extensive training from prestigious research centers, ensures an authentic and educational adventure.
        </p>
        <p className="text-base sm:text-lg text-[#557B59] font-normal leading-relaxed">
          With deep roots in Costa Rican culture, Glenda specializes in providing authentic cultural experiences and insights into local traditions. Her expertise in Costa Rican cuisine, traditional practices, and community relations makes her an invaluable guide for those seeking to understand the true essence of Costa Rican life.
        </p>
        <p className="text-base sm:text-lg text-[#557B59] font-normal leading-relaxed italic">
          Ready to explore Costa Rica with expert guides? Join Erick and Glenda for an unforgettable journey through this tropical paradise. Contact us today to start planning your personalized adventure!
        </p>
      </div>
    </section>
  );
};

export default About;
