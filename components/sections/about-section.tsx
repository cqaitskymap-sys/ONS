"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={IMAGES.labPrimary.src}
                alt={IMAGES.labPrimary.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden glass-strong hidden md:block">
              <Image
                src={IMAGES.labResearch.src}
                alt={IMAGES.labResearch.alt}
                fill
                className="object-cover"
                sizes="192px"
                quality={90}
              />
            </div>
          </motion.div>

          <div>
            <SectionTitle
              badge="About Us"
              title="Pioneering Pharma Excellence"
              subtitle="For over 15 years, LoMars Pharma has been the trusted partner for pharmaceutical companies seeking GMP compliance, facility validation, and quality excellence."
              align="left"
              className="mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              Based in Silvassa, India, we combine deep local expertise with a domestic network
              of quality auditors, validation specialists, and sourcing partners to deliver
              comprehensive pharmaceutical consultancy services.
            </motion.p>
            <MagneticButton href="/about" className="glass hover:bg-white/10">
              Learn More <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
