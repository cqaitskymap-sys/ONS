import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name} — how we collect, use, and protect your personal information.`,
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information you provide directly — such as your name, email address, phone number, company name, and message content when you contact us through our website forms, email, or phone. We also collect standard technical data including IP address, browser type, and pages visited through cookies and analytics tools.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to respond to inquiries, provide consultancy services, send relevant updates (with your consent), improve our website and services, and comply with legal obligations. We do not sell your personal data to third parties.",
  },
  {
    title: "Data Sharing",
    content:
      "We may share information with trusted service providers who assist in operating our website and business (e.g., hosting, email delivery), subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at the email address below.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies to enhance user experience and analyze traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionality.",
  },
  {
    title: "Contact Us",
    content: `For privacy-related questions or requests, contact us at ${COMPANY.email} or ${COMPANY.address}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            badge="Legal"
            title="Privacy Policy"
            subtitle={`Last updated: June 2026. This policy describes how ${COMPANY.name} handles your personal information.`}
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
