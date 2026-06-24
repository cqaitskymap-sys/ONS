"use client";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";

export function ProcessSection() {
  const containerRef = useGsapReveal<HTMLDivElement>();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          badge="Our Process"
          title="How We Work"
          subtitle="A proven four-step methodology that delivers consistent, measurable results."
        />
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <GlassCard key={step.step} delay={0} className="relative">
              <span className="text-5xl font-bold gradient-text opacity-30 absolute top-4 right-4">
                {step.step}
              </span>
              <h3 className="text-xl font-bold mb-3 mt-8">{step.title}</h3>
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
