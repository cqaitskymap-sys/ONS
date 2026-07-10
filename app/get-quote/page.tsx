import type { Metadata } from "next";
import { Clock, Phone, Mail } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { QuoteForm } from "@/components/sections/quote-form";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { COMPANY, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: `Get a tailored quote for pharmaceutical consultancy, GMP audits, validation, sourcing, and training — ${COMPANY.name}.`,
};

export default function GetQuotePage() {
  return (
    <>
      <PageBanner
        badge="Get a Quote"
        title="Request a Consultation"
        subtitle="Tell us about your project and we'll provide a tailored proposal within 24 hours."
        image={PAGE_IMAGES.getQuote.banner}
      />

      <ImageFeatureSection image={PAGE_IMAGES.getQuote.feature} className="pb-0">
        <h3 className="text-xl font-bold mb-4">Tailored Pharmaceutical Solutions</h3>
        <p className="text-muted-foreground leading-relaxed">
          Whether you need GMP audits, facility validation, QMS implementation, or sourcing support —
          share your requirements and receive a detailed proposal from our experts.
        </p>
      </ImageFeatureSection>

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-2 min-w-0">
              <QuoteForm />
            </div>
            <div className="space-y-6">
              <GlassCard hover={false}>
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Fast Response</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all quote requests within 24 business hours.
                </p>
              </GlassCard>
              <GlassCard hover={false}>
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Prefer to Call?</h3>
                <a href={`tel:${COMPANY.phone.split("/")[0]}`} className="text-sm text-primary hover:underline">
                  {COMPANY.phone}
                </a>
              </GlassCard>
              <GlassCard hover={false}>
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Email Directly</h3>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-primary hover:underline break-all">
                  {COMPANY.email}
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
