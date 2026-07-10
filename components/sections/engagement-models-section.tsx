"use client";

import { Target, Calendar, ClipboardCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";
import { ENGAGEMENT_MODELS } from "@/lib/constants";

const iconMap = { Target, Calendar, ClipboardCheck };

export function EngagementModelsSection() {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Engagement"
          title="How We Work With You"
          subtitle="Flexible engagement models tailored to your project scope, timeline, and compliance needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ENGAGEMENT_MODELS.map((model, i) => {
            const Icon = iconMap[model.icon as keyof typeof iconMap] ?? Target;
            return (
              <GlassCard key={model.title} delay={i * 0.1}>
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
