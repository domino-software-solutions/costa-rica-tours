'use client';

import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <section id="hero" className="relative min-h-screen bg-[#F7F7F7]">
      <div className="relative h-[50vh] w-full">
        <Image
          src="/BeachSunset.jpg"
          alt="Costa Rica Beach Sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <div className="max-w-4xl">
          <h1 className="font-normal text-4xl md:text-5xl lg:text-6xl text-[#1F2937] mb-6 whitespace-nowrap">
            Salt n Clouds
            <br />
            Costa Rica Tours
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black mb-4 sm:mb-6 font-normal leading-relaxed">
            Join our expert naturalist guides Erick Miranda and Glenda Araya for authentic journeys through their homeland. From historic coffee plantations to pristine forests and national parks, discover Costa Rica through their expert eyes.
          </p>
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <p className="text-black font-normal text-sm sm:text-base">• Custom groups of any size welcome</p>
            <p className="text-black font-normal text-sm sm:text-base">• Fluent in Spanish and English</p>
            <p className="text-black font-normal text-sm sm:text-base">• Over a decade of professional guiding experience</p>
            <p className="text-black font-normal text-sm sm:text-base">• Award-winning naturalist expertise</p>
            <div className="border-t border-black pt-3 sm:pt-4 mt-3 sm:mt-4">
              <div className="flex items-center gap-2">
                <a href="tel:+50686439040" className="flex items-center gap-2 hover:text-[#557B59] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" fill="black" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  <p className="text-black text-base sm:text-lg font-medium">Phone/WhatsApp: +506 8643 9040</p>
                </a>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <a href="mailto:dualtkw@hotmail.com" className="flex items-center gap-2 hover:text-[#557B59] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" fill="black" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                  <p className="text-black text-base sm:text-lg font-medium">Email: dualtkw@hotmail.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="https://wa.me/50686439040" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#2C5530] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#557B59] transition-colors duration-300 text-center font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Start Planning on WhatsApp
              </a>
              <a 
                href="mailto:dualtkw@hotmail.com" 
                className="bg-[#557B59] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#2C5530] transition-colors duration-300 text-center font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                Contact via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
