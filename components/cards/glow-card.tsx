"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "green" | "blue" | "purple";
  delay?: number;
}

const glowColors = {
  green: "hover:shadow-[0_0_40px_rgba(0,208,132,0.15)]",
  blue: "hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]",
  purple: "hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]",
};

export function GlowCard({
  children,
  className,
  glowColor = "green",
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className={cn(
        "rounded-2xl glass-strong p-5 sm:p-6 transition-all duration-500",
        glowColors[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
