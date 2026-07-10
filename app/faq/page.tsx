import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FAQ } from "@/components/ui/faq";
import { GlassCard } from "@/components/cards/glass-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { COMPANY, FAQ_ITEMS, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${COMPANY.name} services, regulatory support, sourcing, and project timelines.`,
};

const extraFaqs = [
  {
    question: "How do I get started with LoMars Pharma?",
    answer:
      "Contact us via our contact form, email, or phone. We'll schedule a discovery call to understand your needs and propose a tailored engagement plan.",
  },
  {
    question: "Do you work with startups and small companies?",
    answer:
      "Absolutely. We support organizations of all sizes — from early-stage biotech startups to established multinational pharmaceutical companies.",
  },
  {
    question: "What regions do you operate in?",
    answer:
      "We're headquartered in Silvassa, India, with clients and partners across Asia, Europe, the Middle East, Africa, and the Americas.",
  },
] as const;

export default function FAQPage() {
  const allFaqs = [...FAQ_ITEMS, ...extraFaqs];

  return (
    <>
      <PageBanner
        badge="FAQ"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, processes, and how we can help your organization."
        image={PAGE_IMAGES.faq.banner}
      />

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl min-w-0">
          <FAQ items={allFaqs} />
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl min-w-0">
          <GlassCard hover={false} className="text-center">
            <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Our team is happy to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
        </div>
      </section>

      <CTASection />
    </>
  );
}
