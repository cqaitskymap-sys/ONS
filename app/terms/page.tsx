import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for using the ${COMPANY.name} website and engaging our pharmaceutical consultancy services.`,
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the ${COMPANY.name} website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "Services",
    content:
      "LoMars Pharma provides pharmaceutical consultancy services including regulatory affairs, quality assurance, manufacturing consultancy, validation, sourcing, and market entry strategy. Specific scope, deliverables, and fees are defined in individual service agreements or statements of work.",
  },
  {
    title: "Website Use",
    content:
      "You may use our website for lawful purposes only. You agree not to misuse the site, attempt unauthorized access, transmit harmful content, or interfere with the website's operation. All content on this site is owned by LoMars Pharma and protected by intellectual property laws.",
  },
  {
    title: "Professional Advice Disclaimer",
    content:
      "Information on this website is for general informational purposes only and does not constitute professional regulatory, legal, or medical advice. Specific guidance should be obtained through a formal engagement with our consultants.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, LoMars Pharma shall not be liable for any indirect, incidental, special, or consequential damages arising from use of our website or services. Our liability under any service agreement is limited to the fees paid for that specific engagement.",
  },
  {
    title: "Confidentiality",
    content:
      "We treat client information as confidential in accordance with our service agreements and applicable data protection laws. Clients are similarly expected to maintain confidentiality of proprietary methodologies and materials shared during engagements.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Silvassa, Dadra and Nagar Haveli.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact",
    content: `For questions about these terms, contact us at ${COMPANY.email} or ${COMPANY.phone}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            badge="Legal"
            title="Terms of Service"
            subtitle={`Last updated: June 2026. Please read these terms carefully before using our website or services.`}
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-6">
          {sections.map((section) => (
            <GlassCard key={section.title} hover={false}>
              <h2 className="text-lg font-bold mb-3">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
