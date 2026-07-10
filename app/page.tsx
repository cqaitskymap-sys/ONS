import { Hero } from "@/components/sections/hero";
import { ComplianceStandards } from "@/components/sections/compliance-standards";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSection } from "@/components/sections/process-section";
import { VisualShowcaseSection } from "@/components/sections/visual-showcase-section";
import { MdMessagePreview } from "@/components/sections/md-message-preview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LatestInsightsSection } from "@/components/sections/latest-insights-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComplianceStandards />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TimelineSection />
      <WhyChooseUs />
      <ProcessSection />
      <VisualShowcaseSection />
      <MdMessagePreview />
      <TestimonialsSection />
      <LatestInsightsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
