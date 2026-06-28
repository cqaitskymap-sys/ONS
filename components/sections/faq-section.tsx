"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { FAQ } from "@/components/ui/faq";

export function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl min-w-0">
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with LoMars Pharma."
        />
        <FAQ items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
