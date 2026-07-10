"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col gap-3 pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]">
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform glow-green"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </a>
      <a
        href={`tel:${COMPANY.phone}`}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </a>
    </div>
  );
}
