"use client";

import { motion } from "framer-motion";
import { Pill, Stethoscope, Heart } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill, Stethoscope, Heart,
};

export function IndustriesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Industries"
          title="Sectors We Serve"
          subtitle="Deep expertise across pharmaceutical and life sciences industries in India."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Pill;
            return (
              <GlassCard key={industry.title} delay={i * 0.08} className="text-center py-5 sm:py-8">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold leading-snug">{industry.title}</h3>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
