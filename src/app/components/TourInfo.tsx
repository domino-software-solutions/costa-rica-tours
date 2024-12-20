import Image from 'next/image';

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
}

const DestinationCard = ({ image, title, description }: DestinationCardProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-[200px] xs:h-[225px] sm:h-[250px] md:h-[200px] lg:h-[225px] xl:h-[250px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 tracking-tight">{title}</h3>
        <p className="text-sm sm:text-base text-black font-normal">{description}</p>
      </div>
    </div>
  );
};

const TourInfo = (): JSX.Element => {
  return (
    <section id="tours" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-black text-center mb-8 sm:mb-12 tracking-tight">
        Expertly Guided Adventures
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <DestinationCard 
          image="/ArenalVolcano.jpeg"
          title="Arenal Volcano Tours"
          description="Explore one of Costa Rica's most active volcanoes with expert interpretation of the local geology and ecosystem."
        />
        <DestinationCard 
          image="/toucan.jpeg"
          title="Cultural & Nature Tours" 
          description="Immerse yourself in Costa Rica's rich culture and natural beauty through guided visits to local plantations, forests and communities."
        />
        <DestinationCard 
          image="/scopeViewing.jpeg"
          title="Wildlife Spotting Tours"
          description="Discover Costa Rica's diverse wildlife through professional spotting scopes with expert guidance and interpretation."
        />
      </div>
      <p className="text-base sm:text-lg text-black font-normal mt-8 sm:mt-12 text-center italic max-w-4xl mx-auto">
        Let Erick and Glenda, your licensed naturalist guides with over a decade of experience, create your perfect Costa Rican adventure. From coffee plantations to volcanic landscapes, experience authentic Costa Rica through the eyes of local experts.
      </p>
    </section>
  );
};

export default TourInfo;
