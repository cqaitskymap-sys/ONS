"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { MD_MESSAGE } from "@/lib/constants";

export function MdMessagePreview() {
  const preview =
    MD_MESSAGE.message.length > 280
      ? `${MD_MESSAGE.message.slice(0, 280)}…`
      : MD_MESSAGE.message;

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
        >
          <Quote className="w-8 h-8 text-primary/20 mb-3" />
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
            {preview}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold">{MD_MESSAGE.name}</div>
              <div className="text-sm text-primary">{MD_MESSAGE.title}</div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
            >
              Read full message <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
