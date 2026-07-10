import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, CheckCircle,
} from "lucide-react";
import { GlowCard } from "@/components/cards/glow-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { INDUSTRY_DETAILS, SERVICES } from "@/lib/constants";
import { getIndustryBySlug } from "@/lib/insights";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INDUSTRY_DETAILS.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} Industry`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <PageBanner
        badge="Industry"
        title={industry.title}
        subtitle={industry.description}
        image={industry.image}
      >
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors -mt-4 mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          All Industries
        </Link>
      </PageBanner>

      <ImageFeatureSection image={industry.featureImage} reverse>
        <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
        <p className="text-sm text-muted-foreground italic">{industry.successStory}</p>
      </ImageFeatureSection>

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <h3 className="text-xl font-bold mb-6">Our Capabilities</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {industry.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                {cap}
              </div>
            ))}
          </div>

          <GlowCard glowColor="green">
            <h3 className="text-lg font-bold mb-2">Success Story</h3>
            <p className="text-sm text-muted-foreground">{industry.successStory}</p>
          </GlowCard>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <h3 className="text-xl font-bold mb-6">Relevant Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="p-4 rounded-xl glass hover:border-primary/30 transition-colors group"
              >
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{service.title}</h4>
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium mt-8 hover:gap-3 transition-all"
          >
            Discuss your {industry.title.toLowerCase()} needs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
