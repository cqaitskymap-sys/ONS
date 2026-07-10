import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { COMPANY, INSIGHTS, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights & Updates",
  description: `Regulatory updates, GMP best practices, and pharmaceutical industry insights from ${COMPANY.name}.`,
};

export default function InsightsPage() {
  return (
    <>
      <PageBanner
        badge="Insights"
        title="Industry Updates & Expertise"
        subtitle="Stay informed on regulatory changes, GMP best practices, and pharmaceutical industry trends."
        image={PAGE_IMAGES.insights.banner}
      />

      <ImageFeatureSection image={PAGE_IMAGES.insights.feature} className="pb-0">
        <h3 className="text-xl font-bold mb-4">Expert Perspectives</h3>
        <p className="text-muted-foreground leading-relaxed">
          Our team shares insights on CDSCO updates, GMP best practices, validation strategies,
          and pharmaceutical industry trends to keep you ahead of regulatory changes.
        </p>
      </ImageFeatureSection>

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {INSIGHTS.map((post, i) => (
              <GlassCard key={post.slug} delay={i * 0.08}>
                <span className="inline-block text-xs font-medium text-primary mb-3">{post.category}</span>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span>By {post.author}</span>
                </div>
                <Link
                  href={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                >
                  Read article <ArrowRight className="w-3 h-3" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
