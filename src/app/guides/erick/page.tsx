import Image from 'next/image';
import TourGuidesNavbar from '../../components/TourGuidesNavbar';

const ErickGuidePage = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <TourGuidesNavbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#2C5530] text-center mb-12">
          Erick Miranda - Licensed Naturalist Guide
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[250px] sm:h-[300px]">
              <Image
                src="/Erick1.jpeg"
                alt="Erick Miranda Guide"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-[250px] sm:h-[300px]">
              <Image
                src="/Erick2.jpeg"
                alt="Erick Guiding"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-[#557B59] leading-relaxed">
              Born in the historic region of Heredia, Erick brings over a decade of experience as a licensed naturalist guide. His deep connection to Costa Rica&apos;s coffee plantations and forests, combined with extensive training from prestigious research centers, ensures an authentic and educational adventure.
            </p>
            <p className="text-[#557B59] leading-relaxed">
              As both a naturalist guide and personal cross-training fitness coach, Erick creates dynamic, engaging tours that cater to all experience levels. His expertise in natural history and interpretive skills makes every expedition a unique learning experience.
            </p>
            <ul className="space-y-2 text-[#557B59]">
              <li>• Certified by ICT (Costa Rica Tourism Board)</li>
              <li>• Fluent in Spanish and English</li>
              <li>• Specialized in wildlife spotting and photography</li>
              <li>• Expert in local flora and fauna</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErickGuidePage;
