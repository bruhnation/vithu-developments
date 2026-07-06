import { HeroScrollExperience } from "@/components/HeroScrollExperience";
import { ServiceAreasSection } from "@/components/ServiceAreasSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { WhyChooseSection } from "@/components/WhyChooseSection";

export function Home() {
  return (
    <>
      <HeroScrollExperience />
      <ServicesCarousel />
      <WhyChooseSection />
      <ServiceAreasSection />
    </>
  );
}
