import type { Metadata } from "next";
import {
  FlaskConical, Beaker, Package, ShieldCheck, MapPin, Truck, Search, FileCheck,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { Timeline } from "@/components/ui/timeline";
import { CTASection } from "@/components/sections/cta-section";
import { PageBanner } from "@/components/sections/page-banner";
import { ImageFeatureSection } from "@/components/sections/image-feature-section";
import { ImageStripSection } from "@/components/sections/image-strip-section";
import { SOURCING_MATERIALS, PAGE_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pharma Sourcing & Packaging",
  description:
    "Domestic pharmaceutical sourcing for APIs, excipients, and glass packaging with vendor qualification, GMP audits, and full traceability.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical, Beaker, Package, ShieldCheck,
};

const supplyChainSteps = [
  { year: "Step 1", title: "Requirement Analysis", description: "Understanding your material specifications, volumes, and quality requirements." },
  { year: "Step 2", title: "Supplier Identification", description: "Screening qualified domestic manufacturers with GMP and CDSCO compliance." },
  { year: "Step 3", title: "Qualification & Audit", description: "On-site audits, documentation review, and sample testing." },
  { year: "Step 4", title: "Negotiation & Contracting", description: "Competitive pricing, supply agreements, and quality contracts." },
  { year: "Step 5", title: "Delivery & QA Release", description: "Logistics coordination, COA verification, and batch release." },
];

const supplierRegions = [
  { region: "Gujarat", suppliers: "40+", specialty: "APIs & Formulations" },
  { region: "Maharashtra", suppliers: "35+", specialty: "APIs & Intermediates" },
  { region: "Telangana", suppliers: "25+", specialty: "APIs & Biotech" },
  { region: "Himachal Pradesh", suppliers: "20+", specialty: "Formulations & Excipients" },
  { region: "Uttarakhand", suppliers: "15+", specialty: "APIs & Packaging" },
];

const sourcingServices = [
  {
    title: "Raw Material Sourcing (API & Non-API)",
    items: [
      "Identification and qualification of reliable domestic suppliers",
      "Procurement of pharmaceutical-grade raw materials in compliance with regulatory standards",
      "Vendor audits, quality assessments, and supply-chain risk management",
      "Documentation support including Certificates of Analysis (CoA), regulatory dossiers, and traceability records",
      "Cost optimization and strategic sourcing for uninterrupted production",
    ],
  },
  {
    title: "API (Active Pharmaceutical Ingredient) Sourcing",
    items: [
      "Supply of regulated and non-regulated APIs for formulation development and commercial manufacturing",
      "Supplier qualification based on GMP compliance and regulatory approvals",
      "Support for DMF (Drug Master File) availability, stability data, and technical documentation",
      "Management of import/export requirements and regulatory compliance",
    ],
  },
  {
    title: "Excipient Sourcing",
    items: [
      "Procurement of pharmaceutical excipients such as binders, fillers, disintegrants, lubricants, coatings, and preservatives",
      "Access to compendial-grade materials meeting USP, EP, BP, and other pharmacopeial standards",
      "Technical support for formulation compatibility and alternative sourcing strategies",
      "Consistent quality assurance and supply continuity",
    ],
  },
  {
    title: "Glass Container Services",
    items: [
      "Supply of pharmaceutical glass packaging including vials, ampoules, bottles, cartridges, and syringes",
      "Availability of Type I, Type II, and Type III glass containers for various drug products",
      "Packaging component qualification and compatibility assessment",
      "Custom sizing, sterilization options, and regulatory-compliant packaging solutions",
      "Support for primary packaging procurement and supply-chain management",
    ],
  },
];

const valueProposition = [
  "End-to-end sourcing support from supplier identification to delivery",
  "Regulatory-compliant materials and packaging",
  "Quality assurance through vendor qualification and documentation review",
  "Reliable supply-chain management to minimize production disruptions",
];

const whyChooseUs = [
  "Qualified domestic supplier network",
  "Regulatory-compliant sourcing solutions",
  "Reliable and transparent supply chain management",
  "Competitive pricing and procurement support",
  "Comprehensive documentation and quality assurance",
  "Customized sourcing strategies tailored to client requirements",
];

export default function SourcingPage() {
  return (
    <>
      <PageBanner
        badge="Sourcing"
        title="Pharmaceutical Sourcing"
        subtitle="We are a specialized pharmaceutical sourcing and supply-chain partner providing comprehensive solutions for APIs, excipients, and pharmaceutical packaging components across India — with full quality assurance at every step."
        image={PAGE_IMAGES.sourcing.banner}
      />

      <ImageFeatureSection image={PAGE_IMAGES.sourcing.feature}>
        <h3 className="text-xl font-bold mb-4">APIs, Excipients & Dosage Forms</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Strategic sourcing of Active Pharmaceutical Ingredients, compendial-grade excipients,
          and finished formulations with full GMP compliance and regulatory documentation.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Every manufacturer undergoes rigorous qualification by LoMars Pharma — GMP audits, documentation review,
          sample testing, and ongoing performance monitoring.
        </p>
      </ImageFeatureSection>

      <section className="pb-12 sm:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SOURCING_MATERIALS.map((material, i) => {
              const Icon = iconMap[material.icon] || FlaskConical;
              return (
                <GlowCard key={material.title} delay={i * 0.1} glowColor={i % 2 === 0 ? "green" : "blue"}>
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{material.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{material.description}</p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Services" title="Our Sourcing Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {sourcingServices.map((service, i) => (
              <GlassCard key={service.title} delay={i * 0.08} hover={false}>
                <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <ImageStripSection
        badge="Packaging"
        title="Primary Packaging Solutions"
        subtitle="Pharmaceutical glass vials, ampoules, bottles, and closures — qualified and compliant."
        images={PAGE_IMAGES.sourcing.strip}
      />

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Process" title="Supply Chain Workflow" subtitle="A rigorous five-step process ensuring quality at every stage." />
          <Timeline items={supplyChainSteps} />
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Network" title="Domestic Supplier Network" subtitle="Qualified manufacturers across India's key pharmaceutical manufacturing hubs." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {supplierRegions.map((region, i) => (
              <GlassCard key={region.region} delay={i * 0.08} className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-1">{region.region}</h3>
                <p className="text-2xl font-bold gradient-text mb-1">{region.suppliers}</p>
                <p className="text-xs text-muted-foreground">{region.specialty}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Coverage" title="Pan-India Reach" subtitle="Serving pharmaceutical manufacturers across India with reliable domestic sourcing." />
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                { icon: Search, label: "Qualified Suppliers", value: "100+" },
                { icon: Truck, label: "Active Shipments", value: "50+" },
                { icon: FileCheck, label: "COAs Verified", value: "1000+" },
              ].map((item) => (
                <div key={item.label}>
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold gradient-text mb-2">{item.value}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <SectionTitle badge="Quality" title="Quality & Compliance" subtitle="Quality is central to our operations. We work with qualified manufacturers adhering to GMP and international quality standards." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "GMP Audits", desc: "On-site audits of manufacturing facilities against GMP and CDSCO standards." },
              { title: "Documentation Review", desc: "Complete DMF, COA, and regulatory documentation verification." },
              { title: "Batch Testing", desc: "Independent laboratory testing for identity, purity, and potency." },
            ].map((item, i) => (
              <GlowCard key={item.title} delay={i * 0.1} glowColor="purple">
                <ShieldCheck className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard hover={false}>
              <h3 className="text-xl font-bold mb-4">Value Proposition</h3>
              <ul className="space-y-2">
                {valueProposition.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard hover={false}>
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
