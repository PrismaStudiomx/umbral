import { HeroSection } from "@/components/sections/hero-section";
import { EditorialSearchSection } from "@/components/sections/editorial-search-section";
import { FeaturedPropertiesSection } from "@/components/sections/featured-properties-section";
import { ZonesContextSection } from "@/components/sections/zones-context-section";
import { VisitProcessSection } from "@/components/sections/visit-process-section";
import { ContactFooterSection } from "@/components/sections/contact-footer-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <EditorialSearchSection />
      <FeaturedPropertiesSection />
      <ZonesContextSection />
      <VisitProcessSection />
      <ContactFooterSection />
    </main>
  );
}