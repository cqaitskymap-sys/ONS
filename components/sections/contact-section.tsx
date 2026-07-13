"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/sections/contact-form";
import { GlassCard } from "@/components/cards/glass-card";
import { COMPANY } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Contact"
          title="Get in Touch"
          subtitle="Have a question or ready to start your project? Send us a message and our team will respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 max-w-6xl mx-auto min-w-0">
          <div className="lg:col-span-3 min-w-0">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-4 min-w-0">
            <GlassCard hover={false}>
              <Mail className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Email</h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-words"
              >
                {COMPANY.email}
              </a>
            </GlassCard>

            <GlassCard hover={false}>
              <Phone className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Phone</h3>
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {COMPANY.phone}
              </a>
            </GlassCard>

            <GlassCard hover={false}>
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">Office</h3>
              <p className="text-sm text-muted-foreground break-words">{COMPANY.address}</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
