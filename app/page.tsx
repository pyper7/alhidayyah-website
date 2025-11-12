import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DonationCampaign from "@/components/DonationCampaign";
import AboutSection from "@/components/AboutSection";
import DawahSection from "@/components/DawahSection";
import OrphanageSection from "@/components/OrphanageSection";
import SchoolSection from "@/components/SchoolSection";
import CharityWorksSection from "@/components/CharityWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <DonationCampaign />
      <AboutSection />
      <DawahSection />
      <OrphanageSection />
      <SchoolSection />
      <CharityWorksSection />
      <TestimonialsSection />
    </div>
  );
}

