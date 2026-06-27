import type { Metadata } from "next";
import Image from "next/image";
import {
  Target, Eye, Heart, Award, Users, Trophy,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";
import { GlowCard } from "@/components/cards/glow-card";
import { Timeline } from "@/components/ui/timeline";
import { CTASection } from "@/components/sections/cta-section";
import {
  COMPANY, TIMELINE, LEADERSHIP, CERTIFICATIONS, STATS,
} from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name} — our mission, vision, leadership team, and journey in pharmaceutical excellence.`,
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
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionTitle
            badge="About Us"
            title="Our Story"
            subtitle={COMPANY.description}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard glowColor="green">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower pharmaceutical companies across India with expert consultancy,
                enabling them to achieve regulatory compliance, operational excellence,
                and sustainable growth in domestic markets.
              </p>
            </GlowCard>
            <GlowCard glowColor="blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
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
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Values" title="What Drives Us" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-strong rounded-3xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
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
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Journey" title="Our Milestones" />
          <Timeline items={TIMELINE} />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Certifications" title="Accreditations & Standards" />
          <div className="flex flex-wrap justify-center gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <GlassCard key={cert} delay={i * 0.08} className="px-8 py-4" hover={false}>
                <span className="font-semibold text-sm">{cert}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Leadership" title="Meet Our Team" subtitle="Experienced professionals driving pharmaceutical excellence." />
          <div className="grid md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader, i) => (
              <GlowCard key={leader.name} delay={i * 0.15} glowColor={i === 0 ? "green" : i === 1 ? "blue" : "purple"}>
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-4">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold">{leader.name}</h3>
                <p className="text-primary text-sm mb-3">{leader.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
