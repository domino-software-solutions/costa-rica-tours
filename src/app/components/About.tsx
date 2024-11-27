const About = (): JSX.Element => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Your Guide</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-6">
          Born in the historic region of Heredia, Erick Miranda brings over a decade of experience as a licensed naturalist guide. His deep connection to Costa Rica&apos;s coffee plantations and forests, combined with extensive training from prestigious research centers, ensures an authentic and educational adventure.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          As both a naturalist guide and personal cross-training fitness coach, Erick creates dynamic, engaging tours that cater to all experience levels. His expertise in natural history and interpretive skills makes every expedition a unique learning experience.
        </p>
      </div>
    </section>
  );
};

export default About;
