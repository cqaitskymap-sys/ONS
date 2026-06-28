"use client";

import { Marquee } from "@/components/ui/marquee";
import { TRUSTED_LOGOS } from "@/lib/constants";

export function TrustedCompanies() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-y border-white/5 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">
        Trusted by Industry Leaders
      </p>
      <Marquee speed={40}>
        {TRUSTED_LOGOS.map((logo) => (
          <div
            key={logo}
            className="flex items-center justify-center px-4 sm:px-8 py-3 rounded-xl glass min-w-[120px] sm:min-w-[160px]"
          >
            <span className="text-lg font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              {logo}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
