"use client";

import { TIMELINE } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Our Journey"
          title="Milestones of Excellence"
          subtitle="A decade and a half of growth, innovation, and pharmaceutical expertise."
        />
        <Timeline items={TIMELINE} />
      </div>
    </section>
  );
}
