"use client";

import {
  ShieldCheck, Globe, Building2, FileCheck,
  Award, Stethoscope, BookOpen, ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { SectionTitle } from "@/components/ui/section-title";
import { COMPLIANCE_STANDARDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Accent = "green" | "blue" | "purple" | "cyan";

const STANDARDS_META: Record<string, { icon: LucideIcon; accent: Accent }> = {
  CDSCO: { icon: ShieldCheck, accent: "green" },
  "WHO GMP": { icon: Globe, accent: "cyan" },
  "EU GMP": { icon: Building2, accent: "blue" },
  "PIC/S": { icon: FileCheck, accent: "purple" },
  "ISO 9001": { icon: Award, accent: "green" },
  "ISO 13485": { icon: Stethoscope, accent: "blue" },
  "ICH Guidelines": { icon: BookOpen, accent: "purple" },
  "Schedule M": { icon: ClipboardList, accent: "cyan" },
};

const accentStyles: Record<Accent, string> = {
  green: "bg-primary/15 text-primary group-hover:bg-primary/25 group-hover:shadow-[0_0_20px_rgba(0,208,132,0.25)]",
  blue: "bg-secondary/15 text-secondary group-hover:bg-secondary/25 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]",
  purple: "bg-accent/15 text-accent group-hover:bg-accent/25 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.25)]",
  cyan: "bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500/25 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]",
};

function StandardPill({ name, compact = false }: { name: string; compact?: boolean }) {
  const meta = STANDARDS_META[name] ?? { icon: ShieldCheck, accent: "green" as Accent };
  const Icon = meta.icon;

  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl",
        "transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]",
        "hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
        compact ? "px-4 py-2.5" : "px-5 py-3.5",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-xl transition-all duration-500",
          compact ? "h-8 w-8" : "h-10 w-10",
          accentStyles[meta.accent],
        )}
      >
        <Icon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </div>
      <span
        className={cn(
          "whitespace-nowrap font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        {name}
      </span>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
    </div>
  );
}

function MarqueeTrack({
  items,
  reverse = false,
  speed = 40,
  compact = false,
}: {
  items: readonly string[];
  reverse?: boolean;
  speed?: number;
  compact?: boolean;
}) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent" />
      <Marquee reverse={reverse} speed={speed} className="py-1">
        {items.map((standard) => (
          <StandardPill key={standard} name={standard} compact={compact} />
        ))}
      </Marquee>
    </div>
  );
}

export function ComplianceStandards() {
  const midpoint = Math.ceil(COMPLIANCE_STANDARDS.length / 2);
  const topRow = COMPLIANCE_STANDARDS.slice(0, midpoint);
  const bottomRow = COMPLIANCE_STANDARDS.slice(midpoint);

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] via-transparent to-secondary/[0.05]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="container relative mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Compliance Frameworks"
          title="Built on Global Standards"
          subtitle="Guiding pharmaceutical companies through India's leading regulatory and quality frameworks."
        />

        <div className="space-y-4 sm:space-y-5">
          <MarqueeTrack items={topRow} speed={38} />
          <MarqueeTrack items={bottomRow} reverse speed={46} compact />
        </div>
      </div>
    </section>
  );
}
