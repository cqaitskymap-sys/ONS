"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <AuroraBackground />
      <Hero3D />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Pharmaceutical Excellence Since 2010
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="gradient-text">{COMPANY.name}</span>
              <br />
              <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl">
                <TypingText text={COMPANY.tagline} />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              End-to-end pharmaceutical consultancy — plant design, GMP audits, QMS implementation,
              training, and domestic sourcing for pharmaceutical manufacturers across India.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact">
                <MagneticButton className="bg-primary text-primary-foreground glow-green text-base px-8 py-4">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/services">
                <MagneticButton className="glass hover:bg-white/10 text-base px-8 py-4">
                  <Play className="w-4 h-4" />
                  Our Services
                </MagneticButton>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
            className="hidden lg:block relative h-[500px]"
          >
            <GlassCard className="absolute top-10 right-0 w-64" delay={0.8}>
              <div className="text-primary text-2xl font-bold mb-1">WHO-GMP</div>
              <div className="text-sm text-muted-foreground">Certified Consultancy</div>
            </GlassCard>
            <GlassCard className="absolute bottom-20 left-0 w-56" delay={1}>
              <div className="text-secondary text-2xl font-bold mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Domestic Partners</div>
            </GlassCard>
            <GlassCard className="absolute top-1/2 right-10 w-52" delay={1.2}>
              <div className="text-accent text-2xl font-bold mb-1">FDA</div>
              <div className="text-sm text-muted-foreground">Regulatory Expertise</div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
