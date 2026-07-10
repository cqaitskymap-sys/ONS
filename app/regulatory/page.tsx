import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck, Globe, Award, FileText, SearchCheck, HeartPulse, ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { FAQ } from "@/components/ui/faq";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { COMPANY, REGULATORY_SERVICES, COMPLIANCE_STANDARDS, FAQ_ITEMS, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Regulatory Affairs",
  description: `CDSCO, EU GMP, WHO GMP, PIC/S compliance and regulatory submission support — ${COMPANY.name}.`,
};

const iconMap = { ShieldCheck, Globe, Award, FileText, SearchCheck, HeartPulse };

const regulatoryFaqs = FAQ_ITEMS.filter((f) =>
  f.question.includes("regulatory") || f.question.includes("markets") || f.question.includes("supplier"),
);

export default function RegulatoryPage() {
  return (
    <>
      <PageBanner
        badge="Regulatory Affairs"
        title="Navigate Complex Regulations"
        subtitle="Expert support for CDSCO, EU GMP, WHO GMP, PIC/S, and international regulatory compliance — from gap assessments to dossier submissions."
        image={PAGE_IMAGES.regulatory.banner}
      />

      <ImageFeatureSection image={PAGE_IMAGES.regulatory.feature} reverse>
        <h3 className="text-xl font-bold mb-4">Regulatory Excellence</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Navigate India&apos;s regulatory landscape and international export requirements with confidence.
          Our team supports CDSCO filings, Schedule M compliance, EU GMP readiness, and WHO prequalification.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          From gap assessments and mock inspections to dossier preparation and post-approval changes —
          we ensure your operations meet the highest regulatory standards.
        </p>
      </ImageFeatureSection>

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {REGULATORY_SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? ShieldCheck;
              return (
                <GlowCard key={service.title} delay={i * 0.08} glowColor={i % 2 === 0 ? "blue" : "green"}>
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Frameworks" title="Regulatory Standards We Support" />
          <div className="flex flex-wrap justify-center gap-3">
            {COMPLIANCE_STANDARDS.map((standard) => (
              <span
                key={standard}
                className="px-4 py-2 rounded-full text-sm glass border border-white/10"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <GlassCard hover={false} className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Need Regulatory Guidance?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Schedule a discovery call to assess your regulatory landscape and compliance gaps.
            </p>
            <Link
              href="/contact?inquiry=consultation"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Book a consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionTitle badge="FAQ" title="Regulatory Questions" />
          <FAQ items={regulatoryFaqs.length > 0 ? regulatoryFaqs : FAQ_ITEMS.slice(0, 3)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
