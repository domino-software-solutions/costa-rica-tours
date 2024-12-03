import Image from 'next/image';
import TourGuidesNavbar from '../../components/TourGuidesNavbar';

const ErickGuidePage = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <TourGuidesNavbar />
      <div className="pt-16 xs:pt-20 sm:pt-24 pb-8 xs:pb-12 sm:pb-16 px-4 sm:px-6 md:px-8">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#2C5530] mb-4 xs:mb-5 sm:mb-6">
              Erick Miranda - Licensed Naturalist Guide
            </h1>
            <p className="text-base xs:text-lg sm:text-xl xl:text-2xl text-[#557B59] leading-relaxed">
              Experience Costa Rica through the eyes of an expert naturalist and fitness enthusiast
            </p>
          </header>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 mb-8 xs:mb-10 sm:mb-12">
            <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[600px]">
              <Image
                src="/Erick1.jpeg"
                alt="Erick Miranda Guide"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          <div className="prose prose-sm xs:prose-base sm:prose-lg xl:prose-xl max-w-none">
            <p className="text-[#557B59] leading-relaxed mb-4 xs:mb-5 sm:mb-6">
              Born in the historic region of Heredia, Erick brings over a decade of experience as a licensed naturalist guide. His deep connection to Costa Rica&apos;s coffee plantations and forests, combined with extensive training from prestigious research centers, ensures an authentic and educational adventure.
            </p>

            <p className="text-[#557B59] leading-relaxed mb-4 xs:mb-5 sm:mb-6">
              As both a naturalist guide and personal cross-training fitness coach, Erick creates dynamic, engaging tours that cater to all experience levels. His expertise in natural history and interpretive skills makes every expedition a unique learning experience.
            </p>

            <div className="my-8 xs:my-10 sm:my-12">
              <blockquote className="border-l-4 border-[#2C5530] pl-4 xs:pl-5 sm:pl-6 italic text-[#557B59] text-sm xs:text-base sm:text-lg">
                &quot;Erick was beyond outstanding as our guide for our 11 day tour all around Costa Rica. His knowledge and passion for his country brought a depth to each day&apos;s experience. His ability to weave together facts, history, insights and delight in every aspect of nature made us get excited about things we knew nothing about (sloths! birds! frogs! monkeys! crocodiles!) When rain or road conditions created challenges, he quickly rearranged plans so we didn&apos;t miss out on anything. We knew we were in excellent hands, and we didn&apos;t worry about anything.&quot;
                <footer className="mt-2 font-medium text-[#2C5530]">- Susan Colin</footer>
              </blockquote>
            </div>

            <ul className="space-y-2 text-[#557B59] list-none pl-0">
              <li>• Certified by ICT (Costa Rica Tourism Board)</li>
              <li>• Fluent in Spanish and English</li>
              <li>• Specialized in wildlife spotting and photography</li>
              <li>• Expert in local flora and fauna</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ErickGuidePage;
