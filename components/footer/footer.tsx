"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Pill, Mail, Phone, MapPin, Clock, Share2, Globe, MessageSquare, ArrowRight } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Pill className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg">{COMPANY.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {COMPANY.tagline}. Delivering excellence in pharmaceutical consultancy across India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2, href: COMPANY.social.linkedin, label: "LinkedIn" },
                { icon: Globe, href: COMPANY.social.twitter, label: "Twitter" },
                { icon: MessageSquare, href: COMPANY.social.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-primary transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                {COMPANY.hours}
              </li>
            </ul>

            <h4 className="font-bold mb-4 text-sm">Newsletter</h4>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-xl glass text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
