import type { Metadata } from "next";
import {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package, UserPlus, Workflow, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { FAQ } from "@/components/ui/faq";
import { ProcessStepper } from "@/components/ui/process-stepper";
import { CTASection } from "@/components/sections/cta-section";
import { EngagementModelsSection } from "@/components/sections/engagement-models-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageStripSection } from "@/components/sections/image-strip-section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CardImage } from "@/components/ui/card-image";
import { SERVICES, STATS, FAQ_ITEMS, CASE_STUDIES, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plant design, commissioning and validation, GMP audits, pre-inspection audits, QMS implementation, and pharmaceutical training services.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package, UserPlus, Workflow,
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        badge="Services"
        title="Pharmaceutical Excellence"
        subtitle="End-to-end consultancy for Plant Design, GMP Audits, QMS, Training, Sourcing, and Talent Acquisition — aligned with CDSCO, WHO, EU GMP, and PIC/S requirements."
        image={PAGE_IMAGES.services.banner}
      />

      <section className="pb-10 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <GlowCard
                  key={service.title}
                  delay={i * 0.1}
                  glowColor={i % 3 === 0 ? "green" : i % 3 === 1 ? "blue" : "purple"}
                  className="group/card h-full overflow-hidden"
                >
                  <CardImage image={service.image} />
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {STATS.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <ImageStripSection
        images={PAGE_IMAGES.services.strip}
      />

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle
            badge="Process"
            title="Our Methodology"
            subtitle="A proven four-step methodology — from understanding your needs to long-term partnership."
          />
          <ProcessStepper />
        </div>
      </section>

      <EngagementModelsSection />

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Case Studies" title="Proven Results" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CASE_STUDIES.slice(0, 3).map((study, i) => (
              <GlowCard key={study.id} delay={i * 0.15} glowColor="green" className="group/card h-full overflow-hidden">
                <CardImage image={study.image} />
                <div className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">{study.metric}</div>
                <h3 className="font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-primary mb-2">{study.client}</p>
                <p className="text-sm text-muted-foreground">{study.result}</p>
              </GlowCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionTitle badge="FAQ" title="Service Questions" />
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
