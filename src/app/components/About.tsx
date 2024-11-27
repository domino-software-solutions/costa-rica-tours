'use client';

import Image from 'next/image';

const About = (): JSX.Element => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-light text-[#2C5530] text-center mb-8 sm:mb-12">Meet Your Guide</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
            <Image
              src="/Erick1.jpeg"
              alt="Erick Miranda Guide"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
            <Image
              src="/Erick2.jpeg" 
              alt="Costa Rica Nature"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-[#557B59] font-light leading-relaxed">
            Born in the historic region of Heredia, Erick Miranda brings over a decade of experience as a licensed naturalist guide. His deep connection to Costa Rica&apos;s coffee plantations and forests, combined with extensive training from prestigious research centers, ensures an authentic and educational adventure.
          </p>
          <p className="text-base sm:text-lg text-[#557B59] font-light leading-relaxed">
            As both a naturalist guide and personal cross-training fitness coach, Erick creates dynamic, engaging tours that cater to all experience levels. His expertise in natural history and interpretive skills makes every expedition a unique learning experience.
          </p>
          <p className="text-base sm:text-lg text-[#557B59] font-light leading-relaxed italic">
            Ready to explore Costa Rica with an expert? Join Erick for an unforgettable journey through this tropical paradise. Contact us today to start planning your personalized adventure!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
