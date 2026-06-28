import type { Metadata } from "next";
import {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package, UserPlus, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { FAQ } from "@/components/ui/faq";
import { CTASection } from "@/components/sections/cta-section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SERVICES, PROCESS_STEPS, STATS, FAQ_ITEMS } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/service-details";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plant design, commissioning and validation, GMP audits, pre-inspection audits, QMS implementation, and pharmaceutical training services.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package, UserPlus,
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

function ServiceDetailBlock({
  service,
  index,
}: {
  service: (typeof SERVICE_DETAILS)[number];
  index: number;
}) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <section id={service.id} className="py-16 scroll-mt-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">{service.introduction}</p>
          </div>
        </div>

        <div className="space-y-8">
          {service.sections.map((section, si) => (
            <GlassCard key={section.title} delay={si * 0.05} hover={false}>
              <h3 className="text-lg font-bold mb-3">{section.title}</h3>
              {section.content && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{section.content}</p>
              )}
              {section.items && (
                <ul className="grid md:grid-cols-2 gap-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.subsections && (
                <div className="space-y-6 mt-4">
                  {section.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h4 className="text-sm font-semibold mb-2">{sub.title}</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
          >
            Enquire about {service.title} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            badge="Services"
            title="Pharmaceutical Excellence"
            subtitle="End-to-end consultancy for Plant Design, GMP Audits, QMS, Training, Sourcing, and Talent Acquisition — aligned with CDSCO, WHO, EU GMP, and PIC/S requirements."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <GlowCard
                  key={service.title}
                  delay={i * 0.1}
                  glowColor={i % 3 === 0 ? "green" : i % 3 === 1 ? "blue" : "purple"}
                  className="group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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

      {SERVICE_DETAILS.map((service, i) => (
        <ServiceDetailBlock key={service.id} service={service} index={i} />
      ))}

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Process" title="Our Methodology" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <GlassCard key={step.step} delay={i * 0.15}>
                <span className="text-4xl font-bold gradient-text opacity-40">{step.step}</span>
                <h3 className="text-lg font-bold mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Case Studies" title="Proven Results" />
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <GlowCard key={study.title} delay={i * 0.15} glowColor="green">
                <div className="text-2xl font-bold gradient-text mb-4">{study.metric}</div>
                <h3 className="font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-primary mb-2">{study.client}</p>
                <p className="text-sm text-muted-foreground">{study.result}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionTitle badge="FAQ" title="Service Questions" />
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
