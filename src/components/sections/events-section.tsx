import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const events = [
  { name: 'Hackathons', href: '#' },
  { name: 'Workshops', href: '#' },
  { name: 'Tech Talks', href: '#' },
  { name: 'Networking', href: '#' },
  { name: 'Guest Lectures', href: '#' },
];

const EventsSection = () => {
  return (
    <section className="bg-black text-white rounded-[40px] py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex items-center justify-center">
            <Image
              src="/registrations.webp"
              alt="Nexverse-IITM community events collage"
              width={550}
              height={550}
              className="w-full  max-w-lg object-contain rounded-3xl"
            />
            <Image
              src="/president.webp"
              alt="Nexverse-IITM community events collage"
              width={100}
              height={50}
              className="w-[200px]  absolute top-5 left-0 max-w-lg object-contain rounded-full"
            />
             <Image
              src="/mentors_1.webp"
              alt="Nexverse-IITM community events collage"
              width={100}
              height={50}
              className="w-[200px]  absolute bottom-5 right-0 max-w-lg object-contain rounded-4xl "
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-5xl font-bold leading-tight">
              We bring the IITM tech community together, IRL and online.
            </h2>
            <h3 className="mt-4 text-[1.75rem] leading-[1.3] font-semibold text-gray-300 max-w-lg">
              Join us for upcoming hackathons, workshops, tech talks, and networking events. Connect with fellow builders and innovators.
            </h3>
            <div className="mt-12 w-full">
              <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-400 mb-4">
                UPCOMING EVENTS
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {events.map((event) => (
                  <Link
                    href={event.href}
                    key={event.name}
                    className="bg-accent text-accent-foreground font-semibold py-2 px-4 rounded-full text-sm transition-transform hover:scale-105"
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/aboutUs"
              className="mt-12 bg-white text-black font-bold py-4 px-8 rounded-full transition-colors hover:bg-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
