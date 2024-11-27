'use client';

import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <section id="hero" className="relative min-h-screen bg-[#F7F7F7] pt-16"> {/* Added pt-16 for navbar height */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-16 lg:p-24">
          <h1 className="font-light text-4xl md:text-5xl lg:text-6xl text-[#2C5530] mb-6 whitespace-nowrap">
            Discover Costa Rica&apos;s
            <br />
            Natural Beauty
          </h1>
          <p className="text-lg md:text-xl text-[#557B59] mb-8 font-light leading-relaxed">
            Join naturalist guide Erick Miranda for an authentic journey through Costa Rica&apos;s most breathtaking landscapes
          </p>
          <button 
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-fit bg-[#557B59] hover:bg-[#2C5530] text-white px-8 py-3 text-lg transition-colors duration-300"
          >
            View Adventures
          </button>
        </div>

        <div className="relative h-[calc(100vh-4rem)] order-first md:order-last"> {/* Adjusted height to account for navbar */}
          <div className="absolute inset-0 p-8 md:p-12">
            <div className="h-full w-full grid grid-rows-2 gap-4">
              <div className="relative w-full h-full">
                <Image
                  src="/Erick1.jpeg"
                  alt="Erick Miranda Guide"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/Erick2.jpeg"
                    alt="Costa Rica Nature"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/lookingUp.jpeg"
                    alt="Looking up at Costa Rica canopy"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
