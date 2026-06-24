import type { Metadata } from "next";
import {
  FlaskConical, Beaker, Package, ShieldCheck, Globe, Truck, Search, FileCheck,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlowCard } from "@/components/cards/glow-card";
import { GlassCard } from "@/components/cards/glass-card";
import { Timeline } from "@/components/ui/timeline";
import { CTASection } from "@/components/sections/cta-section";
import { SOURCING_MATERIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pharma Sourcing",
  description: "Global pharmaceutical sourcing for APIs, excipients, and packaging materials with full quality assurance and traceability.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical, Beaker, Package, ShieldCheck,
};

const supplyChainSteps = [
  { year: "Step 1", title: "Requirement Analysis", description: "Understanding your material specifications, volumes, and quality requirements." },
  { year: "Step 2", title: "Supplier Identification", description: "Screening our global network of WHO-GMP certified manufacturers." },
  { year: "Step 3", title: "Qualification & Audit", description: "On-site audits, documentation review, and sample testing." },
  { year: "Step 4", title: "Negotiation & Contracting", description: "Competitive pricing, supply agreements, and quality contracts." },
  { year: "Step 5", title: "Delivery & QA Release", description: "Logistics coordination, COA verification, and batch release." },
];

const supplierRegions = [
  { region: "India", suppliers: "80+", specialty: "APIs & Formulations" },
  { region: "China", suppliers: "60+", specialty: "APIs & Intermediates" },
  { region: "Europe", suppliers: "40+", specialty: "Excipients & Packaging" },
  { region: "USA", suppliers: "30+", specialty: "Specialty APIs" },
  { region: "Southeast Asia", suppliers: "25+", specialty: "Natural Extracts" },
];

export default function SourcingPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionTitle
            badge="Sourcing"
            title="Global Pharma Sourcing"
            subtitle="Connect with verified suppliers worldwide for APIs, excipients, and packaging materials — with full quality assurance at every step."
          />
        </div>
      </section>

      {/* Materials */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Supply Chain Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Process" title="Supply Chain Workflow" subtitle="A rigorous five-step process ensuring quality at every stage." />
          <Timeline items={supplyChainSteps} />
        </div>
      </section>

      {/* Supplier Network */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Network" title="Global Supplier Network" />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {supplierRegions.map((region, i) => (
              <GlassCard key={region.region} delay={i * 0.08} className="text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-1">{region.region}</h3>
                <p className="text-2xl font-bold gradient-text mb-1">{region.suppliers}</p>
                <p className="text-xs text-muted-foreground">{region.specialty}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Visualization */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Coverage" title="Worldwide Reach" subtitle="Serving clients and sourcing from over 30 countries." />
          <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Search, label: "Supplier Discovery", value: "200+" },
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

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle badge="Quality" title="Quality Assurance" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "GMP Audits", desc: "On-site audits of manufacturing facilities against WHO-GMP standards." },
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

      <CTASection />
    </>
  );
}
