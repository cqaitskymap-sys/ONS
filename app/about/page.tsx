import type { Metadata } from "next";
import {
  Target, Eye, Heart, Award, Users, Trophy,
  GraduationCap,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";
import { GlowCard } from "@/components/cards/glow-card";
import { Timeline } from "@/components/ui/timeline";
import { CTASection } from "@/components/sections/cta-section";
import { MdMessageSection } from "@/components/sections/md-message-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { ImageStripSection } from "@/components/sections/image-strip-section";
import { AboutCoreServicesSection } from "@/components/sections/about-core-services-section";
import {
  COMPANY, TIMELINE, STATS,
  ABOUT_SYNOPSIS, ABOUT_TEAM_EXPERTISE, CERTIFICATIONS,
  PAGE_IMAGES,
} from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name} — end-to-end pharmaceutical consultancy spanning facility design, QMS, validation, regulatory compliance, talent acquisition, and strategic sourcing.`,
};

const values = [
  { icon: Heart, title: "Integrity", description: "Unwavering ethical standards in every engagement." },
  { icon: Award, title: "Excellence", description: "Commitment to the highest quality in all deliverables." },
  { icon: Users, title: "Partnership", description: "Building long-term relationships based on trust." },
  { icon: Trophy, title: "Innovation", description: "Embracing new approaches to solve complex challenges." },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="About Us"
        title="Pharmaceutical Consultancy"
        subtitle={ABOUT_SYNOPSIS.intro}
        image={PAGE_IMAGES.about.banner}
      />

      <ImageFeatureSection image={PAGE_IMAGES.about.feature}>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">Excellence Across the Pharma Lifecycle</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          From GMP-compliant facility design to validation, audits, and strategic sourcing — we support
          pharmaceutical manufacturers at every stage of operations.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our multidisciplinary team brings deep expertise in regulatory compliance, quality systems,
          and domestic supply chain management across India&apos;s pharmaceutical hubs.
        </p>
      </ImageFeatureSection>

      <AboutCoreServicesSection />

      <section className="pb-10 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Our Multidisciplinary Team</h3>
            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              Our multidisciplinary team comprises highly experienced professionals, including:
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {ABOUT_TEAM_EXPERTISE.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm glass border border-white/10"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                  {role}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-center leading-relaxed text-base sm:text-lg">
              {ABOUT_SYNOPSIS.closing}
            </p>
          </div>
        </div>
      </section>

      <ImageStripSection
        badge="Our Facilities"
        title="Where Quality Meets Compliance"
        subtitle="State-of-the-art laboratories, cleanrooms, and manufacturing environments we help design, validate, and audit."
        images={PAGE_IMAGES.about.strip}
      />

      <MdMessageSection />

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <GlowCard glowColor="green">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower pharmaceutical companies across India with expert consultancy,
                enabling them to achieve regulatory compliance, operational excellence,
                and sustainable growth in domestic markets.
              </p>
            </GlowCard>
            <GlowCard glowColor="blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted pharmaceutical consultancy partner in India,
                recognized for innovation, integrity, and transformative impact on
                healthcare accessibility.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Values" title="What Drives Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <GlassCard key={v.title} delay={i * 0.1}>
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Expertise" title="Compliance Frameworks" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <GlassCard key={cert.title} delay={i * 0.08}>
                <h3 className="font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Journey" title="Our Milestones" />
          <Timeline items={TIMELINE} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
