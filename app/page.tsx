import FeaturedBuilds from "@/components/sections/FeaturedBuilds";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-24 pb-24 md:gap-32">
      <Hero />
      <Stats />
      <FeaturedBuilds />
      <Features />
    </div>
  );
}
