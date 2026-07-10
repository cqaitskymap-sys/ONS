"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { MD_MESSAGE } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

export function MdMessageSection() {
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Leadership"
          title="Message from Managing Director"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
        >
          <Quote className="w-10 h-10 text-primary/20 mb-4" />
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            {MD_MESSAGE.message}
          </p>
          <div className="mt-6">
            <div className="font-bold text-lg">{MD_MESSAGE.name}</div>
            <div className="text-sm text-primary">{MD_MESSAGE.title}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
