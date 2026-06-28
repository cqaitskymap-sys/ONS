"use client";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";

export function ProcessSection() {
  const containerRef = useGsapReveal<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Our Process"
          title="How We Work"
          subtitle="A proven four-step methodology that delivers consistent, measurable results."
        />
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <GlassCard key={step.step} delay={0} className="relative overflow-hidden">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text opacity-30 absolute top-3 right-3 sm:top-4 sm:right-4">
                {step.step}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 mt-6 sm:mt-8">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
