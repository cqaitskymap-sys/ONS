"use client";

import { useLenis } from "@/hooks/use-lenis";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { FloatingContact } from "@/components/layout/floating-contact";
import { Spotlight } from "@/components/ui/spotlight";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Spotlight />
      <div className="noise relative z-10">{children}</div>
      <ScrollToTop />
      <FloatingContact />
      <Toaster position="top-right" theme="dark" richColors />
    </>
  );
}
