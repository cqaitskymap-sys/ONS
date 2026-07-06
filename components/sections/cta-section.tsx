"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-strong p-6 sm:p-10 md:p-12 lg:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/10 blur-[80px]" />
          <div className="relative min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 break-words">
              <span className="gradient-text">Ready to Transform</span>
              <br />
              Your Pharma Operations?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-1">
              Partner with LoMars Pharma for GMP compliance, facility validation,
              and quality excellence. Let&apos;s build your success story together.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <MagneticButton
                href="/contact"
                className="w-full sm:w-auto bg-primary text-primary-foreground glow-green px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base min-h-11"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href="/services"
                className="w-full sm:w-auto glass hover:bg-white/10 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base min-h-11"
              >
                Explore Services
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
