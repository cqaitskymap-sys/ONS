"use client";

import { Brain, Network, Layers, Target } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { TiltCard } from "@/components/cards/tilt-card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Network, Layers, Target,
};

export function WhyChooseUs() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-secondary/[0.03]" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <SectionTitle
          badge="Why LoMars"
          title="Why Choose Us"
          subtitle="What sets us apart in the pharmaceutical consultancy landscape."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || Brain;
            return (
              <TiltCard key={item.title}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
