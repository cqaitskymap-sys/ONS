"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden glass-strong p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/10 blur-[80px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Ready to Transform</span>
              <br />
              Your Pharma Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Partner with LoMars Pharma for regulatory excellence, quality assurance,
              and global market access. Let&apos;s build your success story together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <MagneticButton className="bg-primary text-primary-foreground glow-green px-8 py-4 text-base">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/services">
                <MagneticButton className="glass hover:bg-white/10 px-8 py-4 text-base">
                  Explore Services
                </MagneticButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
