"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export function Spotlight({ className }: SpotlightProps) {
  const { x, y } = useMousePosition();

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-30 transition-opacity duration-300", className)}
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 208, 132, 0.06), transparent 40%)`,
      }}
    />
  );
}
