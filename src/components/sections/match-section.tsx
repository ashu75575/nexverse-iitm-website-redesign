import Image from 'next/image';

const MatchSection = () => {
  return (
    <section className="bg-background py-16 md:py-24 ">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Connect. Create. Conquer. The future is built by teams like yours.
      </h2>
    </div>

    <div className="mt-16 grid grid-cols-1 items-center gap-y-16 lg:mt-24 lg:grid-cols-2 lg:gap-x-16">
      <div className="text-center lg:text-left">
        <div className="inline-block rounded-lg bg-accent px-3 py-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            Collaborate
          </p>
        </div>
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Find your next big idea partner
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          At Nexverse, every great project starts with a spark — a teammate, a coder, a dreamer.
          Whether you’re building apps, cracking data, or shaping AI ideas, you’ll meet the people
          who turn imagination into innovation. Because collaboration isn’t just easier here — it’s electric.
        </p>
      </div>

      <div className="flex justify-center lg:justify-start">
        <div className="w-full max-w-sm lg:max-w-none">
          <Image
            src="/judges_1.webp"
            alt="Students collaborating during a Nexverse hackathon, brainstorming ideas and building together"
            width={1024}
            height={1280}
            className="h-auto w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default MatchSection;
