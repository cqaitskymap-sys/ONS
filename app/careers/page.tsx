import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2, GraduationCap, Heart, Users, MapPin, Briefcase, Clock, ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { CTASection } from "@/components/sections/cta-section";
import { COMPANY, CAREER_BENEFITS, CAREER_OPENINGS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${COMPANY.name} and build your career in pharmaceutical consultancy. Explore open positions and our culture of excellence.`,
};

const benefitIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, GraduationCap, Heart, Users,
};

export default function CareersPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative min-w-0">
          <SectionTitle
            badge="Careers"
            title="Build Your Future With Us"
            subtitle="Join a team of passionate pharmaceutical professionals making an impact on healthcare accessibility and quality across India."
          />
        </div>
      </section>

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Culture" title="Why Work at LoMars" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CAREER_BENEFITS.map((benefit, i) => {
              const Icon = benefitIconMap[benefit.icon] || Heart;
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

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle
            badge="Open Positions"
            title="Current Openings"
            subtitle="Don't see a fit? Send your resume to careers@lomarspharma.com — we're always looking for talented people."
          />
          <div className="space-y-4 max-w-4xl mx-auto">
            {CAREER_OPENINGS.map((job, i) => (
              <GlowCard key={job.title} delay={i * 0.08} glowColor="green">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-11 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shrink-0 w-full md:w-auto"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">General Applications</h3>
            <p className="text-muted-foreground mb-6">
              We're growing fast and welcome applications from regulatory specialists,
              QA professionals, sourcing experts, and business development talent.
            </p>
            <a
              href={`mailto:careers@${COMPANY.email.split("@")[1]}`}
              className="text-primary font-medium hover:underline"
            >
              careers@{COMPANY.email.split("@")[1]}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
