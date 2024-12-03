'use client';

import Image from 'next/image';
import TourGuidesNavbar from '@/app/components/TourGuidesNavbar';

const GlendaGuidePage = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <TourGuidesNavbar />
      <div className="pt-16 xs:pt-20 sm:pt-24 pb-8 xs:pb-12 sm:pb-16 px-4 sm:px-6 md:px-8">
        {/* Article Container */}
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#2C5530] mb-4 xs:mb-5 sm:mb-6">
              Discover the magic of Costa Rica with Glenda Araya
            </h1>
            <p className="text-base xs:text-lg sm:text-xl xl:text-2xl text-[#557B59] leading-relaxed">
              From spotting sloths in the mysterious mist-shrouded canopies of the Santa Elena Cloud Forest Reserve to watching green turtle hatchlings scramble towards the sea in Tortuguero National Park, it&apos;s clear that endless wonders abound on a trip to Costa Rica.
            </p>
          </header>

          {/* Image Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 mb-8 xs:mb-10 sm:mb-12">
            <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[600px]">
              <Image
                src="/GlendaTelescope.jpg"
                alt="Glenda on a boat tour"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            
          </div>

          {/* Article Content */}
          <div className="prose prose-sm xs:prose-base sm:prose-lg xl:prose-xl max-w-none">
            <p className="text-[#557B59] leading-relaxed mb-4 xs:mb-5 sm:mb-6">
              Known for one of the most diverse ecosystems in the world, Costa Rica is a country that&apos;s best experienced with an expert local leader in tow. Why? Because their unrivalled knowledge of Costa Rica&apos;s unique flora and fauna, cultural traditions and local hotspots allows you to delve deeper and walk away with a true experience of what Christopher Columbus rightly named, &quot;the Rich Coast&quot;. And there&apos;s no one better to lead the way than our Leader of the Year 2022, Glenda Araya. It takes a special type of guide to teach travellers all about the intricacies of Costa Rica&apos;s rich biodiversity, while also encouraging every member of the group to embrace the local&apos;s easy-going &quot;Pura Vida&quot; lifestyle, but this all comes second nature to Glenda. Read on to find out why her trips in Costa Rica continue to stand out.
            </p>

            <p className="text-[#557B59] leading-relaxed mb-4 xs:mb-5 sm:mb-6">
              The most essential part of being a great tour guide, Glenda says is &quot;communication&quot;. &quot;Communication skills are key to building a strong social relationship with the group – and that&apos;s essential. I love to be a good listener, so I know exactly what a customer needs. For me, every single individual on every one of my trips is important. I feel like my sense of humour also helps them to relax and enjoy my country to the fullest.&quot; Organisation is another vital element to creating a perfect trip, she explains, &quot;It&apos;s the glue that holds every adventure together, so it&apos;s important to always be prepared. I&apos;m ready for every eventuality – I&apos;ve seen it all. No customer request is ever too much for me, and I always try to go that extra mile to find a solution to any situation.&quot;
            </p>

            <div className="my-8 xs:my-10 sm:my-12 space-y-6 xs:space-y-7 sm:space-y-8">
              <blockquote className="border-l-4 border-[#2C5530] pl-4 xs:pl-5 sm:pl-6 italic text-[#557B59] text-sm xs:text-base sm:text-lg">
                &quot;Glenda was amazing, from personally meeting us at the airport to the last hug of farewell at the end of the trip; so personal, engaging, knowledgeable of the history, culture, geography, ecology and wildlife. And she knew so many other people along the way that it felt like we were constantly meeting with her friends and family: getting special treatment and experiencing aspects of Costa Rica that we could only have had being with her on our travels. She was so hard-working; we would see her early in the mornings and late in the evening constantly planning and studying up to make our experience the very best it could be. What a lovely person and expert tour guide. We feel lucky and blessed to have been assigned Glenda and we all still keep in touch on WhatsApp which really underscores her ability to both engage and build lasting community connections.&quot;
                <footer className="mt-2 font-medium text-[#2C5530]">- John Caterina</footer>
              </blockquote>

              <blockquote className="border-l-4 border-[#2C5530] pl-4 xs:pl-5 sm:pl-6 italic text-[#557B59] text-sm xs:text-base sm:text-lg">
                &quot;Glenda was simply the best tour guide I have ever met. Her knowledge of her home country was off the scale. She never faulted in naming the birds, animals and reptiles we came into contact with. How she could spot the creatures from afar was unbelievable! She worked non-stop to make everyone enjoy their holiday. She even collected laundry during her break time for other people in our group. She also recommended many extra trips and restaurants which were just perfect and added to the experience. We wish her all the best in her future career and just wish we could meet up again someday.&quot;
                <footer className="mt-2 font-medium text-[#2C5530]">- Anne Mockridge</footer>
              </blockquote>
            </div>

            <p className="text-[#557B59] leading-relaxed mb-4 xs:mb-5 sm:mb-6">
              Glenda has also made a consistently great impression on her operators and Exodus teams back in our London office too. Sarah Ahern, Exodus Product Manager for Costa Rica was keen to explain, &quot;She is an inspirational tour leader, and you can really tell that she loves to share her passion for nature and country. Her incredible naturalist knowledge and sheer enthusiasm to share the wonders of Costa Rica with people across the world is simply unmatched.&quot; She continues, &quot;For Glenda, winning the Leader of the Year Award means everything and offers great motivation for her to continue her outstanding work as a tour leader who not only encourages travellers to reconnect with nature and appreciate Costa Rica&apos;s unique biodiversity but encourages everyone to give back to local communities through tourism.&quot;
            </p>

            <p className="text-[#557B59] leading-relaxed">
              So, if you&apos;re running out of reasons not to explore the wonders of Costa Rica with our expert tour guide, Glenda, browse our popular Discover Costa Rica trip or Costa Rica Adventure Family Holiday to experience the Rich Coast the local way.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default GlendaGuidePage;
