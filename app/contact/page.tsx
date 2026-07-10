import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";
import { FAQ } from "@/components/ui/faq";
import { ContactFormWithParams } from "@/components/sections/contact-form-with-params";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { COMPANY, FAQ_ITEMS, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY.name}. Visit our office in Silvassa or reach us via phone, email, or WhatsApp.`,
};

const contactCards = [
  { icon: MapPin, title: "Visit Us", content: COMPANY.address, href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}` },
  { icon: Phone, title: "Call Us", content: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: Mail, title: "Email Us", content: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MessageCircle, title: "WhatsApp", content: "Chat with us", href: `https://wa.me/${COMPANY.whatsapp}` },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge="Contact"
        title="Let's Connect"
        subtitle="Ready to elevate your pharmaceutical operations? Reach out and our team will respond within 24 hours."
        image={PAGE_IMAGES.contact.banner}
      />

      <ImageFeatureSection image={PAGE_IMAGES.contact.feature} reverse className="pb-0">
        <h3 className="text-xl font-bold mb-4">Your Pharma Partner in Silvassa</h3>
        <p className="text-muted-foreground leading-relaxed">
          Visit our office or connect via phone, email, or WhatsApp. Our team of regulatory,
          quality, and sourcing experts is ready to discuss your project requirements.
        </p>
      </ImageFeatureSection>

      {/* Contact Cards */}
      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 sm:mb-16">
            {contactCards.map((card, i) => (
              <a key={card.title} href={card.href} target={card.title === "Visit Us" ? "_blank" : undefined} rel="noopener noreferrer">
                <GlassCard delay={i * 0.1} className="h-full hover:border-primary/30">
                  <card.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground break-words">{card.content}</p>
                </GlassCard>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 min-w-0">
            {/* Form */}
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h3>
              <ContactFormWithParams />
            </div>

            {/* Map & Hours */}
            <div className="space-y-6 sm:space-y-8 min-w-0">
              <div className="rounded-2xl overflow-hidden glass aspect-video min-h-[200px] sm:min-h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5!2d73.01!3d20.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE2JzEyLjAiTiA3M8KwMDAnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LoMars Pharma Office Location"
                />
              </div>

              <GlassCard hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">Office Hours</h3>
                </div>
                <p className="text-muted-foreground">{COMPANY.hours}</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="font-semibold mb-2">{COMPANY.name}</h4>
                  <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl min-w-0">
          <SectionTitle badge="FAQ" title="Common Questions" />
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>
    </>
  );
}
