"use client";

import { motion } from "framer-motion";
import { Pill, Dna, Leaf, Sparkles, Stethoscope, Heart } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill, Dna, Leaf, Sparkles, Stethoscope, Heart,
};

export function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          badge="Industries"
          title="Sectors We Serve"
          subtitle="Deep expertise across pharmaceutical and life sciences industries worldwide."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Pill;
            return (
              <GlassCard key={industry.title} delay={i * 0.08} className="text-center py-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">{industry.title}</h3>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
