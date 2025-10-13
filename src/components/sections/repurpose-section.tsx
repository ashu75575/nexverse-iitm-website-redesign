import Image from "next/image";
import { Check } from "lucide-react";

const CheckListItem = ({ text }: { text: string }) => (
  <li className="flex items-center">
    <div className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-chart-1">
      <Check className="h-3 w-3 text-white" />
    </div>
    <span className="text-sm font-medium text-foreground">{text}</span>
  </li>
);

const PlaceholderListItem = () => (
  <li className="flex items-start opacity-30">
    <div className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 rounded bg-secondary"></div>
    <div className="h-4 w-2/3 rounded-sm bg-secondary"></div>
  </li>
);

const RepurposeSection = () => {
  return (
    <section className="bg-background py-16 lg:py-32 ">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
      <div className="relative">
        <div className="aspect-square relative overflow-hidden rounded-3xl">
          <Image
            alt="Students showcasing prototypes and creative projects during a Nexverse event"
            src="/hackathon_1.webp"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />

        </div>
        <div className="absolute -left-18 top-8 flex items-start justify-center">
        <Image
              src="/front.jpeg"
              alt="Nexverse-IITM community events collage"
              width={100}
              height={50}
              className="w-[300px] max-w-lg object-contain rounded-4xl "
            />
        </div>

        <div className="absolute right-18 -bottom-6 flex items-start justify-center">
        <Image
              src="/mentors_3.webp"
              alt="Nexverse-IITM community events collage"
              width={100}
              height={50}
              className="w-[300px] max-w-lg object-contain rounded-4xl "
            />
        </div>
      </div>

      <div>
        <div className="mb-4 inline-block">
          <p className="rounded-full bg-accent py-2 px-4 text-sm font-medium text-accent-foreground">
            Transform
          </p>
        </div>
        <h2 className="text-5xl font-extrabold leading-tight -tracking-tighter text-foreground">
          Turn your ideas into something the world can see
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Build once, showcase everywhere. At Nexverse, every project you create —
          from code to concept — deserves the spotlight. Present your innovations across
          hackathons, fests, and digital platforms to make your impact go beyond the classroom.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default RepurposeSection;
