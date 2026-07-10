"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { ProcessStepper } from "@/components/ui/process-stepper";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Our Process"
          title="How We Work"
          subtitle="A proven four-step methodology — from understanding your needs to long-term partnership."
        />
        <ProcessStepper />
      </div>
    </section>
  );
}
