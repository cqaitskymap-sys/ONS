"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

const SHOWCASE_IMAGES = [
  IMAGES.pharmaManufacturing,
  IMAGES.pharmaLaboratory,
  IMAGES.cleanroom,
  IMAGES.sourcingWarehouse,
] as const;

export function VisualShowcaseSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Our World"
          title="Pharma Excellence in Action"
          subtitle="From GMP-compliant cleanrooms to advanced laboratories and supply chain operations — we support every stage of pharmaceutical manufacturing."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {SHOWCASE_IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/10] group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
