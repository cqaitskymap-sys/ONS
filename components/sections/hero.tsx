"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Award, Layers, Building2, ShieldCheck } from "lucide-react";
import { COMPANY, STATS, IMAGES } from "@/lib/constants";
import { Logo } from "@/components/brand/logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlassCard } from "@/components/cards/glass-card";
import { Hero3D } from "@/components/three/hero-3d";
import { cn } from "@/lib/utils";

const HIGHLIGHT_META = [
  { icon: Award, color: "text-primary", bg: "bg-primary/10" },
  { icon: Layers, color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Building2, color: "text-accent", bg: "bg-accent/10" },
  { icon: ShieldCheck, color: "text-cyan-400", bg: "bg-cyan-500/10" },
] as const;

const FLOATING_CARD_LAYOUT = [
  "absolute top-6 right-0 sm:right-2 md:right-4 w-44 sm:w-48 md:w-56",
  "absolute bottom-12 sm:bottom-14 md:bottom-16 left-0 sm:left-2 md:left-4 w-40 sm:w-44 md:w-52",
  "absolute bottom-6 sm:bottom-8 md:bottom-10 right-2 sm:right-4 md:right-6 w-36 sm:w-40 md:w-48",
] as const;

const HERO_DESCRIPTION_SHORT =
  "End-to-end pharmaceutical consultancy — plant design, GMP audits, QMS, training, and strategic sourcing across India.";

const HERO_DESCRIPTION_FULL =
  "End-to-end pharmaceutical consultancy — plant design, GMP audits, QMS implementation, training, and sourcing of API, excipients, packaging materials, and finished products (SVP, LVP, tablets, sachets, capsules, syrups, etc.) across India.";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (reducedMotion || isMobile) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text, reducedMotion, isMobile]);

  if (reducedMotion || isMobile) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse text-primary">|</span>}
    </span>
  );
}

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={IMAGES.heroBackground.src}
        alt=""
        fill
        priority
        className="object-cover opacity-[0.12] sm:opacity-[0.14]"
        sizes="100vw"
        quality={75}
        aria-hidden
      />
      <div className="absolute inset-0 bg-background/70 sm:bg-background/60" />
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[min(100vw,28rem)] h-[min(100vw,28rem)] sm:w-[600px] sm:h-[600px] sm:left-1/4 sm:translate-x-0 rounded-full bg-primary/10 blur-[80px] sm:blur-[120px] animate-pulse" />
      <div className="absolute -bottom-1/4 -right-8 w-[min(90vw,24rem)] h-[min(90vw,24rem)] sm:right-1/4 sm:w-[500px] sm:h-[500px] rounded-full bg-secondary/10 blur-[70px] sm:blur-[100px] animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/3 right-0 w-[min(80vw,20rem)] h-[min(80vw,20rem)] sm:right-1/3 sm:w-[400px] sm:h-[400px] rounded-full bg-accent/8 blur-[60px] sm:blur-[80px] animate-pulse [animation-delay:2s]" />
      <div className="absolute inset-0 grid-bg opacity-30 sm:opacity-40" />
    </div>
  );
}

function HeroStats() {
  return (
    <div className="-mx-4 sm:mx-0">
      <div
        className={cn(
          "flex gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-4 pb-1",
          "sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {STATS.map((stat, i) => {
          const meta = HIGHLIGHT_META[i];
          const Icon = meta.icon;
          return (
            <div
              key={stat.label}
              className={cn(
                "glass rounded-2xl p-3 sm:p-4 text-center transition-all duration-300",
                "min-w-[8.75rem] shrink-0 snap-start sm:min-w-0 sm:shrink",
                "hover:border-white/20 hover:bg-white/[0.07]"
              )}
            >
              <div
                className={cn(
                  "mx-auto mb-2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl",
                  meta.bg
                )}
              >
                <Icon className={cn("h-4 w-4 sm:h-5 sm:w-5", meta.color)} />
              </div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="[&>div:first-child]:text-xl [&>div:first-child]:sm:text-2xl [&>div:first-child]:md:text-3xl [&>div:last-child]:text-[0.6rem] [&>div:last-child]:sm:text-xs"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className={cn(
        "relative flex min-h-[100dvh] items-center overflow-x-hidden",
        "pt-[4.75rem] sm:pt-20 md:pt-24 lg:pt-28",
        "pb-8 sm:pb-12 md:pb-16 lg:pb-20"
      )}
    >
      <AuroraBackground />
      <div className="hidden md:block">
        <Hero3D />
      </div>

      <div className="container relative z-10 mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col max-sm:items-center max-sm:text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className={cn(
                "mb-4 w-fit max-w-[min(100%,20rem)] sm:max-w-none shrink-0",
                "self-center sm:self-start",
                "inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 rounded-full glass",
                "px-3 py-1.5 sm:px-4 sm:py-2",
                "text-[0.65rem] sm:text-xs leading-snug font-medium text-primary sm:mb-6"
              )}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse sm:h-2 sm:w-2" />
              <span className="text-center text-balance sm:text-left">
                <span className="sm:hidden">Pharma Excellence · Since 2020</span>
                <span className="hidden sm:inline">Pharmaceutical Excellence Since 2020</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mb-5 sm:mb-6 lg:hidden max-w-[17rem] sm:max-w-xs mx-auto sm:mx-0"
            >
              <Logo size="lg" link={false} priority className="sm:hidden" />
              <Logo size="xl" link={false} priority className="hidden sm:block" />
            </motion.div>

            <h1 className="mb-4 max-w-2xl text-[1.7rem] font-bold leading-[1.12] tracking-tight break-words text-balance sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="sr-only">{COMPANY.name} — </span>
              <span className="gradient-text">
                <TypingText text={COMPANY.tagline} />
              </span>
            </h1>

            <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:hidden">
              {HERO_DESCRIPTION_SHORT}
            </p>
            <p className="mb-6 hidden max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:mb-8 sm:block md:text-lg">
              {HERO_DESCRIPTION_FULL}
            </p>

            <div
              className={cn(
                "mb-8 flex w-full flex-col gap-3 sm:mb-12 sm:flex-row sm:flex-wrap sm:gap-4",
                "max-sm:max-w-sm"
              )}
            >
              <MagneticButton
                href="/contact"
                className="w-full min-h-11 bg-primary px-6 py-3.5 text-sm text-primary-foreground glow-green sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="/services"
                className="w-full min-h-11 glass px-6 py-3.5 text-sm hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                <Play className="h-4 w-4" />
                Our Services
              </MagneticButton>
            </div>

            <div className="w-full max-sm:max-w-[calc(100vw-2rem)]">
              <HeroStats />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden min-h-[520px] lg:block"
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-primary/12 blur-[100px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <Logo size="hero" link={false} priority />
            </motion.div>

            {STATS.slice(0, 3).map((stat, i) => {
              const meta = HIGHLIGHT_META[i];
              return (
                <GlassCard key={stat.label} className={FLOATING_CARD_LAYOUT[i]} delay={0.8 + i * 0.2}>
                  <div className={`${meta.color} mb-1 text-2xl font-bold`}>
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
