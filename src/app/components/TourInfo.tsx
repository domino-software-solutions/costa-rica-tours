import Image from 'next/image';

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
}

const DestinationCard = ({ image, title, description }: DestinationCardProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const TourInfo = (): JSX.Element => {
  return (
    <section id="tours" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Expertly Guided Adventures</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <DestinationCard 
          image="/images/arenal-volcano.jpg"
          title="Arenal Volcano Tours"
          description="Explore one of Costa Rica's most active volcanoes with expert interpretation of the local geology and ecosystem."
        />
        <DestinationCard 
          image="/images/heredia-coffee.jpg"
          title="Heredia Coffee Experience"
          description="Visit historic coffee plantations in Erick's hometown region, learning about Costa Rica's rich coffee heritage."
        />
        <DestinationCard 
          image="/images/wildlife-tours.jpg"
          title="Wildlife Spotting Tours"
          description="Discover Costa Rica's diverse wildlife through professional spotting scopes with expert guidance and interpretation."
        />
      </div>
    </section>
  );
};

export default TourInfo;
