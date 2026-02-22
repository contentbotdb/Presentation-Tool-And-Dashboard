import Image from "next/image";
import { AboutSectionTitle } from "./components/AboutSectionTitle";
import { WhoWeAreSection } from "./components/WhoWeAreSection";
import { WhyGoSolarReasonsSection } from "./components/WhyGoSolarReasonsSection";
import { WhyGoSolarWithUsSection } from "./components/WhyGoSolarWithUsSection";

const HERO_IMAGES = [
  { src: "/slide-images/equity-solar.png", alt: "Equity Solar" },
  { src: "/slide-images/landing-piece-2.png", alt: "Solar presentation" },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] text-[#1a365d]">
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src={HERO_IMAGES[0].src}
          alt={HERO_IMAGES[0].alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <h1 className="absolute left-1/2 top-16 z-10 -translate-x-1/2 text-4xl font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] lg:top-20 lg:text-5xl">
          <span className="text-[#3b82f6]">About </span>
          <span className="text-white">Us</span>
        </h1>
      </div>

      <main className="flex flex-col gap-2 px-16 py-8 lg:px-24">
        <AboutSectionTitle primary="Who We" secondary="Are" className="mb-8" />
        <WhoWeAreSection />

        <AboutSectionTitle primary="Reasons Everybody is" secondary="Going Solar" className="mt-14 mb-8" />
        <WhyGoSolarReasonsSection />

        <AboutSectionTitle primary="Why Go Solar" secondary="With us" className="mt-14 mb-8" />
        <WhyGoSolarWithUsSection />
      </main>
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src={HERO_IMAGES[1].src}
          alt={HERO_IMAGES[1].alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
