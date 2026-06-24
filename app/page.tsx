import { Hero } from "@/components/sections/hero";
import { TrustedCompanies } from "@/components/sections/trusted-companies";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TimelineSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
