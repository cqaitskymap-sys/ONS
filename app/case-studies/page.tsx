import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Building2 } from "lucide-react";
import { GlowCard } from "@/components/cards/glow-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { CardImage } from "@/components/ui/card-image";
import { COMPANY, CASE_STUDIES, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Proven results from ${COMPANY.name} — facility validation, QMS implementation, GMP audits, and sourcing success stories.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        badge="Case Studies"
        title="Proven Results"
        subtitle="Real outcomes from pharmaceutical manufacturers, and healthcare companies we've partnered with across India."
        image={PAGE_IMAGES.caseStudies.banner}
      />

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {CASE_STUDIES.map((study, i) => (
              <GlowCard key={study.id} delay={i * 0.08} glowColor="green" className="group/card h-full overflow-hidden">
                <CardImage image={study.image} />
                <div className="text-2xl font-bold gradient-text mb-3">{study.metric}</div>
                <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                <p className="text-sm text-primary mb-4">{study.client}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" /> {study.industry}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {study.timeline}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  {"challenge" in study && study.challenge && (
                    <div>
                      <span className="font-semibold text-foreground">Challenge: </span>
                      <span className="text-muted-foreground">{study.challenge}</span>
                    </div>
                  )}
                  {"solution" in study && study.solution && (
                    <div>
                      <span className="font-semibold text-foreground">Solution: </span>
                      <span className="text-muted-foreground">{study.solution}</span>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-foreground">Services: </span>
                    <span className="text-muted-foreground">{study.service}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Result: </span>
                    <span className="text-muted-foreground">{study.result}</span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to write your own success story? Let&apos;s discuss how LoMars Pharma can support your compliance and operational goals.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Request a consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
