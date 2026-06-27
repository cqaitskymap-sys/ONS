"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, ClipboardCheck, SearchCheck, Award, GraduationCap, Package,
};

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <SectionTitle
          badge="Our Services"
          title="Comprehensive Pharma Solutions"
          subtitle="From plant design and validation to GMP audits, QMS, training, and domestic sourcing — tailored to your pharmaceutical operations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <GlowCard key={service.title} delay={i * 0.1} glowColor={i % 3 === 0 ? "green" : i % 3 === 1 ? "blue" : "purple"}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
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
  );
}
