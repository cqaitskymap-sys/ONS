import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageStripSection } from "@/components/sections/image-strip-section";
import { COMPANY, RESOURCES, PAGE_IMAGES } from "@/lib/constants";
import { ResourceDownloadButton } from "@/components/sections/resource-download-button";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description: `Free GMP checklists, validation guides, and regulatory templates from ${COMPANY.name}.`,
};

export default function ResourcesPage() {
  return (
    <>
      <PageBanner
        badge="Resources"
        title="Downloads & Guides"
        subtitle="Free templates, checklists, and reference guides for GMP compliance, validation, sourcing, and regulatory affairs."
        image={PAGE_IMAGES.resources.banner}
      />

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {RESOURCES.map((resource) => (
              <GlassCard key={resource.id} className="h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-primary">{resource.category}</span>
                    <h3 className="font-bold mt-1">{resource.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{resource.type}</span>
                  <ResourceDownloadButton title={resource.title} />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <ImageStripSection
        images={PAGE_IMAGES.resources.strip}
      />

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard hover={false}>
              <h3 className="text-lg font-bold mb-2">Insights & Articles</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Read our latest regulatory updates, GMP best practices, and industry analysis.
              </p>
              <Link href="/insights" className="text-sm text-primary hover:underline">
                Browse insights →
              </Link>
            </GlassCard>
            <GlassCard hover={false}>
              <h3 className="text-lg font-bold mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore real outcomes from our client engagements.
              </p>
              <Link href="/case-studies" className="text-sm text-primary hover:underline">
                View case studies →
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
