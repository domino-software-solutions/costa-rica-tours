'use client';

import Image from 'next/image';
import TourGuidesNavbar from '@/app/components/TourGuidesNavbar';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewsPage = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/BeachSunset.jpg',
    '/purpleSunset.jpg',
    '/RedTrees.jpg',
    '/SunsetRiver.jpg',
    '/treeRootTrunk.jpg',
    '/TreesInSand.jpg',
    '/BlueSkyReflection.jpg',
    '/blueFlowers.jpg',
    '/BlueSkyRiver.jpg',
    '/butterfly2.jpeg',
    '/toucan.jpeg',
    '/birdFavorite.jpeg',
    '/scopeViewing.jpeg',
    '/crocodile.jpeg',
    '/GlendaBoat.jpg',
    '/glassFrog.jpeg',
    '/GlendaSit.jpg',
    '/groupPhoto.jpg',

  
  
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-[#F7F7F7] overflow-x-hidden">
      <TourGuidesNavbar />
      <div className="pt-16 xs:pt-20 sm:pt-24 pb-8 xs:pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 w-full">
        {/* Header Section */}
        <header className="text-center mb-12 max-w-4xl mx-auto px-4">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#2C5530] mb-4">
            What Our Travelers Say
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[#557B59] leading-relaxed">
            Discover the experiences of fellow travelers who have explored Costa Rica with our expert guides
          </p>
        </header>

        {/* Image Gallery Carousel */}
        <div className="max-w-5xl mx-auto mb-16 px-4">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#2C5530] mb-8 text-center">
            Moments from Our Tours
          </h2>
          <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] mb-8">
            <div className="flex justify-center items-center h-full">
              <AnimatePresence initial={false}>
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0.7,
                      scale: index === currentIndex ? 1.1 : 1,
                      x: `${(index - currentIndex) * 15}%`,
                      zIndex: images.length - Math.abs(index - currentIndex)
                    }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '100%',
                      maxWidth: '800px',
                      aspectRatio: '16 / 9',
                      transformOrigin: 'center center',
                    }}
                  >
                    <Image 
                      src={image} 
                      alt={`Costa Rica Tour ${index + 1}`} 
                      fill
                      className="rounded-lg shadow-lg object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
                      priority={index === currentIndex}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-4 sm:space-x-6">
            <button
              className="bg-[#2C5530] bg-opacity-70 p-2 sm:p-3 md:p-4 rounded-full text-white hover:bg-opacity-90 transition-all duration-200"
              onClick={prevImage}
            >
              <FaChevronLeft size={12} className="xs:hidden" />
              <FaChevronLeft size={16} className="hidden xs:block" />
            </button>
            <div className="flex justify-center space-x-1 xs:space-x-2 sm:space-x-3">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-[#2C5530] scale-125' : 'bg-gray-500 hover:bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            <button
              className="bg-[#2C5530] bg-opacity-70 p-2 sm:p-3 md:p-4 rounded-full text-white hover:bg-opacity-90 transition-all duration-200"
              onClick={nextImage}
            >
              <FaChevronRight size={12} className="xs:hidden" />
              <FaChevronRight size={16} className="hidden xs:block" />
            
            </button>
          </div>
        </div>

        {/* Reviews Text Section */}
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#2C5530] mb-8 text-center">
            Traveler Reviews
          </h2>
          <div className="space-y-8">
            {/* Glenda Review 1 */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <blockquote className="border-l-4 border-[#2C5530] pl-4 sm:pl-6 italic text-[#557B59]">
                <p className="mb-4 text-sm xs:text-base sm:text-lg leading-relaxed">
                  &quot;Glenda was amazing, from personally meeting us at the airport to the last hug of farewell at the end of the trip; so personal, engaging, knowledgeable of the history, culture, geography, ecology and wildlife. And she knew so many other people along the way that it felt like we were constantly meeting with her friends and family: getting special treatment and experiencing aspects of Costa Rica that we could only have had being with her on our travels.&quot;
                </p>
                <footer className="font-medium text-[#2C5530]">- John C.</footer>
              </blockquote>
            </div>

            {/* Erick Review */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <blockquote className="border-l-4 border-[#2C5530] pl-4 sm:pl-6 italic text-[#557B59]">
                <p className="mb-4 text-sm xs:text-base sm:text-lg leading-relaxed">
                  &quot;Erick was beyond outstanding as our guide for our 11 day tour all around Costa Rica. His knowledge and passion for his country brought a depth to each day&apos;s experience. His ability to weave together facts, history, insights and delight in every aspect of nature made us get excited about things we knew nothing about (sloths! birds! frogs! monkeys! crocodiles!) When rain or road conditions created challenges, he quickly rearranged plans so we didn&apos;t miss out on anything. We knew we were in excellent hands, and we didn&apos;t worry about anything.&quot;
                </p>
                <footer className="font-medium text-[#2C5530]">- Susan C.</footer>
              </blockquote>
            </div>

            {/* Glenda Review 2 */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <blockquote className="border-l-4 border-[#2C5530] pl-4 sm:pl-6 italic text-[#557B59]">
                <p className="mb-4 text-sm xs:text-base sm:text-lg leading-relaxed">
                  &quot;Glenda&apos;s knowledge of her home country was off the scale. She never faulted in naming the birds, animals and reptiles we came into contact with. How she could spot the creatures from afar was unbelievable! She worked non-stop to make everyone enjoy their holiday. She even collected laundry during her break time for other people in our group.&quot;
                </p>
                <footer className="font-medium text-[#2C5530]">- Anne M.</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Leave a Review Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto px-4">
          <h3 className="text-lg xs:text-xl font-semibold text-[#2C5530] mb-4">
            Share Your Story & Start Your Journey
          </h3>
          <p className="text-sm xs:text-base text-[#557B59] mb-4">
            Have you traveled with us? We&apos;d love to hear about your experience!
          </p>
          <p className="text-base xs:text-lg text-[#557B59] mb-8">
            Or perhaps you&apos;re ready to create your own memorable adventure in Costa Rica?
          </p>
          <a 
            href="mailto:dualtkw@hotmail.com"
            className="inline-block bg-[#2C5530] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-[#3d7442] transition-colors text-sm xs:text-base"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </main>
  );
};

export default ReviewsPage;
