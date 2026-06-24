"use client";

import { useEffect, useState } from "react";
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[60] origin-left transition-transform duration-100"
      style={{
        width: "100%",
        transform: `scaleX(${progress / 100})`,
        background: "linear-gradient(90deg, #00d084, #06b6d4, #2563eb)",
      }}
    />
  );
}
