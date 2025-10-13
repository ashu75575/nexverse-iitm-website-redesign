import Image from "next/image";
import { ArrowUp } from "lucide-react";

const MeasureSection = () => {
  return (
    <section className="rounded-[40px] bg-secondary py-20 lg:py-24">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-y-12 gap-x-16 lg:grid-cols-2">

      <div className="relative mx-auto h-[450px] w-full max-w-xl sm:h-[550px] lg:h-[500px] lg:max-w-none">
        <div className="relative h-full w-full overflow-hidden rounded-3xl">
          <Image
            src="https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/651ce86fe1ed08a5d7821fcb_home-measure_1_5x.avif"
            alt="Nexverse dashboard visualizing growth in event participation and project submissions"
            fill
            objectFit="cover"
            className="object-center"
          />
        </div>
      </div>

      <div className="text-center lg:text-left">
        <div className="mb-4 inline-block">
          <p className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
            Reflect
          </p>
        </div>
        <h2 className="text-5xl font-black leading-tight text-foreground sm:text-6xl">
          Track your growth. See your impact.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
          Every project, event, or hackathon at Nexverse is a step forward.
          Measure how far you’ve come — from new skills learned to ideas brought to life.
          Our insights and experiences help you understand what’s working, celebrate wins,
          and keep leveling up your journey.
        </p>
      </div>

    </div>
  </div>
</section>

  );
};

export default MeasureSection;
