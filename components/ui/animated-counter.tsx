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
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{count}</div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}
