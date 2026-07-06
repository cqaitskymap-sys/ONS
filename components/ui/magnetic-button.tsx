"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  className?: string;
  href?: string;
}

const baseClassName =
  "relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium transition-all duration-300";

export const MagneticButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  MagneticButtonProps
>(function MagneticButton({ children, className, href, ...props }, ref) {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  const sharedClassName = cn(baseClassName, className);

  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={sharedClassName}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        suppressHydrationWarning
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={sharedClassName}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </motion.button>
  );
});
