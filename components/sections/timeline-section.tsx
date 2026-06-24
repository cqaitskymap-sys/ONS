"use client";

import { TIMELINE } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
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
