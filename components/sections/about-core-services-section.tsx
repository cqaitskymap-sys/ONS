"use client";

import Link from "next/link";
import {
  Building2,
  ClipboardCheck,
  SearchCheck,
  Award,
  UserPlus,
  Package,
  ArrowRight,
} from "lucide-react";
import { ABOUT_CORE_SERVICES, IMAGES, type ImageAsset } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { CardImage } from "@/components/ui/card-image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ClipboardCheck,
  SearchCheck,
  Award,
  UserPlus,
  Package,
};

const imageMap: Record<string, ImageAsset> = {
  Building2: IMAGES.facilityDesign,
  Award: IMAGES.qualityControl,
  ClipboardCheck: IMAGES.validation,
  SearchCheck: IMAGES.auditCompliance,
  UserPlus: IMAGES.teamCollaboration,
  Package: IMAGES.apiPills,
};

const serviceLinks = [
  "/services/plant-design",
  "/services/qms",
  "/services/plant-design",
  "/services/gmp-audits",
  "/services/talent-acquisition",
  "/sourcing",
] as const;

const glowColors = ["green", "blue", "purple"] as const;

export function AboutCoreServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative min-w-0">
        <SectionTitle
          badge="Core Services"
          title="Our Core Services"
          subtitle="End-to-end pharmaceutical consultancy — from facility design and quality systems to validation, compliance, talent, and strategic sourcing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ABOUT_CORE_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Building2;
            const image = imageMap[service.icon] ?? IMAGES.facilityDesign;
            const href = serviceLinks[i];

            return (
              <GlowCard
                key={service.title}
                delay={i * 0.08}
                glowColor={glowColors[i % glowColors.length]}
                className="group/card overflow-hidden"
              >
                <CardImage image={image} />

                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,208,132,0.12)]">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-3xl font-bold tabular-nums text-white/[0.06] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    Explore service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
