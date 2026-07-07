import type { Metadata } from "next";
import {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package, UserPlus, Workflow, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { FAQ } from "@/components/ui/faq";
import { CTASection } from "@/components/sections/cta-section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SERVICES, PROCESS_STEPS, STATS, FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plant design, commissioning and validation, GMP audits, pre-inspection audits, QMS implementation, and pharmaceutical training services.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package, UserPlus, Workflow,
};

const caseStudies = [
  {
    title: "Facility Validation",
    client: "MedLife Pharmaceuticals",
    result: "Completed HVAC and water system DQ/IQ/OQ/PQ for new OSD facility",
    metric: "Full PQ achieved",
  },
  {
    title: "QMS Implementation",
    client: "PharmaCore Ltd.",
    result: "Successfully implemented QMS across 3 manufacturing facilities",
    metric: "3 facilities certified",
  },
  {
    title: "Pre-Inspection Readiness",
    client: "Bharat Formulations",
    result: "Zero critical observations during subsequent CDSCO inspection",
    metric: "Inspection ready",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle
            badge="Services"
            title="Pharmaceutical Excellence"
            subtitle="End-to-end consultancy for Plant Design, GMP Audits, QMS, Training, Sourcing, and Talent Acquisition — aligned with CDSCO, WHO, EU GMP, and PIC/S requirements."
          />
        </div>
      </section>

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
                  className="group h-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
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

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Process" title="Our Methodology" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <GlassCard key={step.step} delay={i * 0.15} className="h-full">
                <span className="text-3xl sm:text-4xl font-bold gradient-text opacity-40">{step.step}</span>
                <h3 className="text-base sm:text-lg font-bold mt-3 sm:mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Case Studies" title="Proven Results" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((study, i) => (
              <GlowCard key={study.title} delay={i * 0.15} glowColor="green" className="h-full">
                <div className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">{study.metric}</div>
                <h3 className="font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-primary mb-2">{study.client}</p>
                <p className="text-sm text-muted-foreground">{study.result}</p>
              </GlowCard>
            ))}
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
