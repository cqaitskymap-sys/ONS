"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";
import { Logo } from "@/components/brand/logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlassCard } from "@/components/cards/glass-card";
import { Hero3D } from "@/components/three/hero-3d";

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
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
  }, [text]);

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
      <div className="absolute -top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px] animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[80px] animate-pulse [animation-delay:2s]" />
      <div className="absolute inset-0 grid-bg opacity-40" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
      <AuroraBackground />
      <Hero3D />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-4 sm:mb-6 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Pharmaceutical Excellence Since 2023
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mb-8 lg:hidden"
            >
              <Logo size="xl" link={false} priority />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6 break-words">
              <span className="sr-only">{COMPANY.name} — </span>
              <span className="gradient-text">
                <TypingText text={COMPANY.tagline} />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-xl break-words">
              End-to-end pharmaceutical consultancy — plant design, GMP audits, QMS implementation,
              training, and sourcing Of API, Excipients,Packaging Materials and finished products(SVP,LVP,Tablets,sachets,capsules,syrups etc.) across India.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link href="/contact" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto bg-primary text-primary-foreground glow-green text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 min-h-11">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto glass hover:bg-white/10 text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 min-h-11">
                  <Play className="w-4 h-4" />
                  Our Services
                </MagneticButton>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {STATS.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block relative h-[520px]"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-primary/12 blur-[100px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <Logo size="hero" link={false} priority />
            </motion.div>

            <GlassCard className="absolute top-6 right-0 w-56" delay={0.8}>
              <div className="text-primary text-2xl font-bold mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </GlassCard>
            <GlassCard className="absolute bottom-16 left-0 w-52" delay={1}>
              <div className="text-secondary text-2xl font-bold mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Domestic Partners</div>
            </GlassCard>
            <GlassCard className="absolute bottom-8 right-4 w-48" delay={1.2}>
              <div className="text-accent text-2xl font-bold mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
