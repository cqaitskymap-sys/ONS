import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { FAQ } from "@/components/ui/faq";
import { GlassCard } from "@/components/cards/glass-card";
import { CTASection } from "@/components/sections/cta-section";
import { COMPANY, FAQ_ITEMS } from "@/lib/constants";

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
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services, processes, and how we can help your organization."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FAQ items={allFaqs} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
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
