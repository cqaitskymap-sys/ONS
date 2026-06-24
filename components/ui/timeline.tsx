"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: readonly TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent md:-translate-x-px" />
      <div className="space-y-12">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "relative flex items-start gap-8",
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className="hidden md:block md:w-1/2" />
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-green md:-translate-x-1.5 mt-1.5 z-10" />
            <div className={cn("ml-12 md:ml-0 md:w-1/2", i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12")}>
              <span className="text-primary font-bold text-sm">{item.year}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
