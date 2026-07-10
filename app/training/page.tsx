import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, ClipboardCheck, UserPlus, Calendar, ArrowRight, CheckCircle,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { COMPANY, TRAINING_PROGRAMS, TRAINING_BENEFITS, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pharmaceutical Training",
  description: `GMP, validation, QA/QC, and regulatory training programs with placement support — ${COMPANY.name}.`,
};

const benefitIcons = { GraduationCap, ClipboardCheck, UserPlus, Calendar };

export default function TrainingPage() {
  return (
    <>
      <PageBanner
        badge="Training"
        title="Pharmaceutical Training Programs"
        subtitle="Industry-led GMP, validation, QA/QC, and regulatory training — classroom, on-site, and online delivery with certification and placement support."
        image={PAGE_IMAGES.training.banner}
      />

      <ImageFeatureSection image={PAGE_IMAGES.training.feature} reverse>
        <h3 className="text-xl font-bold mb-4">Hands-On Industry Training</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our training programs are designed and delivered by seasoned pharmaceutical professionals
          with real-world experience in GMP, validation, and quality systems.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          From GMP fundamentals to advanced validation protocols — gain practical skills that translate
          directly to your manufacturing and quality operations.
        </p>
      </ImageFeatureSection>

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Programs" title="Course Catalog" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {TRAINING_PROGRAMS.map((program, i) => (
              <GlowCard key={program.id} delay={i * 0.08} glowColor="green" className="h-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{program.level}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground">{program.duration}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground">{program.mode}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-primary font-medium mb-4">{program.certification}</p>
                <Link
                  href={`/contact?inquiry=training&service=training`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                >
                  Enroll now <ArrowRight className="w-3 h-3" />
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Why Train With Us" title="Training Benefits" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TRAINING_BENEFITS.map((benefit, i) => {
              const Icon = benefitIcons[benefit.icon as keyof typeof benefitIcons] ?? GraduationCap;
              return (
                <GlassCard key={benefit.title} delay={i * 0.1}>
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
