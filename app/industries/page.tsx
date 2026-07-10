import type { Metadata } from "next";
import Link from "next/link";
import {
  Pill, Stethoscope, Heart, Package, ArrowRight, CheckCircle,
  Brain, Network, Layers, Target,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { CardImage } from "@/components/ui/card-image";
import { COMPANY, INDUSTRY_DETAILS, WHY_CHOOSE_US, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description: `Explore the life sciences sectors ${COMPANY.name} serves — pharmaceuticals, medical devices, veterinary, and more.`,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill, Stethoscope, Heart, Package,
};

const whyIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Network, Layers, Target,
};

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        badge="Industries"
        title="Sectors We Serve"
        subtitle="Deep domain expertise across pharmaceutical and life sciences industries — tailored solutions for every regulatory landscape."
        image={PAGE_IMAGES.industries.banner}
      />

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {INDUSTRY_DETAILS.map((industry, i) => {
              const Icon = iconMap[industry.icon] || Pill;
              return (
                <GlowCard
                  key={industry.title}
                  delay={i * 0.1}
                  glowColor={i % 3 === 0 ? "green" : i % 3 === 1 ? "blue" : "purple"}
                  className="group/card overflow-hidden"
                >
                  <CardImage image={industry.image} />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {industry.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-primary mt-6 mr-4 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground mt-6 hover:text-primary hover:gap-2 transition-all"
                  >
                    Discuss your needs <ArrowRight className="w-3 h-3" />
                  </Link>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Why Us" title="Industry-Specific Expertise" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = whyIconMap[item.icon] || Pill;
              return (
                <GlassCard key={item.title} delay={i * 0.1}>
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
