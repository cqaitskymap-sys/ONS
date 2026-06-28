"use client";

import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "", label, className }: AnimatedCounterProps) {
  const { count, ref } = useCounter(value, 2000, suffix);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-1 sm:mb-2">{count}</div>
      <div className="text-[0.65rem] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wide sm:tracking-wider leading-tight">{label}</div>
    </div>
  );
}
