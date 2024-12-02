import Image from 'next/image';
import TourGuidesNavbar from '../../components/TourGuidesNavbar';

const GlendaGuidePage = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <TourGuidesNavbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#2C5530] text-center mb-12">
          Glenda Araya - Cultural Guide & Local Expert
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1 space-y-4">
            <p className="text-[#557B59] leading-relaxed">
              With deep roots in Costa Rican culture, Glenda specializes in providing authentic cultural experiences and insights into local traditions. Her knowledge of local communities and customs adds a rich cultural dimension to every tour.
            </p>
            <p className="text-[#557B59] leading-relaxed">
              Glenda&apos;s expertise in Costa Rican cuisine, traditional practices, and community relations makes her an invaluable guide for those seeking to understand the true essence of Costa Rican life and culture.
            </p>
            <ul className="space-y-2 text-[#557B59]">
              <li>• Expert in Costa Rican cultural traditions</li>
              <li>• Specialized in community-based tourism</li>
              <li>• Knowledge of local cuisine and customs</li>
              <li>• Passionate about sustainable tourism</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="relative h-[250px] sm:h-[300px]">
              <Image
                src="/crocodile.jpeg"
                alt="Costa Rica Wildlife"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-[250px] sm:h-[300px]">
              <Image
                src="/butterfly2.jpeg"
                alt="Costa Rica Nature"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GlendaGuidePage;
