"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform glow-green"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
      <a
        href={`tel:${COMPANY.phone}`}
        className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary" />
      </a>
    </div>
  );
}
