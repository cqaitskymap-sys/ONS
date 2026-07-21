"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type VideoBackdropVariant = "hero" | "banner" | "cta";

type VideoBackdropProps = {
  src: string;
  variant?: VideoBackdropVariant;
  className?: string;
  mobileImage?: { src: string; alt: string };
  desktopBreakpoint?: number;
};

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isDesktop;
}

const VARIANT_OVERLAYS: Record<VideoBackdropVariant, string[]> = {
  hero: [
    "bg-gradient-to-b from-background/75 via-background/40 to-background/88",
    "bg-gradient-to-r from-primary/12 via-transparent to-secondary/10",
    "bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,208,132,0.14),transparent_55%)]",
    "bg-[radial-gradient(ellipse_at_80%_80%,rgba(37,99,235,0.12),transparent_50%)]",
  ],
  banner: [
    "bg-gradient-to-b from-background/65 via-background/45 to-background",
    "bg-gradient-to-tr from-secondary/10 via-transparent to-primary/10",
    "bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,7,18,0.55)_100%)]",
  ],
  cta: [
    "bg-gradient-to-br from-background/70 via-background/50 to-background/78",
    "bg-gradient-to-r from-primary/18 via-secondary/12 to-accent/16",
    "bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.12),transparent_60%)]",
  ],
};

function BackdropOverlays({ variant }: { variant: VideoBackdropVariant }) {
  return (
    <>
      <div className="absolute inset-0 bg-background/15 mix-blend-multiply" />
      {VARIANT_OVERLAYS[variant].map((overlay) => (
        <div key={overlay} className={cn("absolute inset-0 pointer-events-none", overlay)} />
      ))}
      <div className="video-grain absolute inset-0 pointer-events-none opacity-50" />
    </>
  );
}

const MEDIA_CLASS =
  "video-ken-burns absolute inset-0 h-full w-full object-cover saturate-[1.15] contrast-[1.05]";

export function VideoBackdrop({
  src,
  variant = "banner",
  className,
  mobileImage,
  desktopBreakpoint = 768,
}: VideoBackdropProps) {
  const isDesktop = useIsDesktop(desktopBreakpoint);
  const showVideo = !mobileImage || isDesktop;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {showVideo ? (
        <video className={MEDIA_CLASS} autoPlay muted loop playsInline preload="auto">
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={mobileImage.src}
          alt=""
          fill
          priority
          className={MEDIA_CLASS}
          sizes="100vw"
          quality={85}
        />
      )}
      <BackdropOverlays variant={variant} />
    </div>
  );
}

type ShowcaseVideoCardProps = {
  src: string;
  label: string;
  className?: string;
};

export function ShowcaseVideoCard({ src, label, className }: ShowcaseVideoCardProps) {
  return (
    <div className={cn("video-frame group relative aspect-[16/10] bg-background", className)}>
      <video
        className="video-ken-burns absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] saturate-[1.1]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="video-grain absolute inset-0 pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 z-[3] p-4 sm:p-5">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-primary mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Live
        </div>
        <p className="text-sm sm:text-base font-semibold text-foreground drop-shadow-lg">{label}</p>
      </div>
    </div>
  );
}

/** @deprecated Use VideoBackdrop */
export const BackgroundVideo = VideoBackdrop;
