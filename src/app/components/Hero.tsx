'use client';

import Image from 'next/image';

const Hero = (): JSX.Element => {
  return (
    <section id="hero" className="relative h-screen">
      <Image
        src="/images/costa-rica-hero.jpg"
        alt="Costa Rica Hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Experience Costa Rica with a Local Expert</h1>
        <p className="text-xl md:text-2xl mb-8">Discover the hidden treasures of Costa Rica with naturalist guide Erick Miranda</p>
        <button 
          onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        >
          Explore Our Tours
        </button>
      </div>
    </section>
  );
};

export default Hero;
