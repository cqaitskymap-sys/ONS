import {
  Building2,
  ClipboardCheck,
  SearchCheck,
  Award,
  GraduationCap,
  Package,
  UserPlus,
  Workflow,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/cards/glass-card";
import { SERVICES } from "@/lib/constants";
import type { ServiceDetail } from "@/lib/service-details";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ClipboardCheck,
  SearchCheck,
  Award,
  GraduationCap,
  Package,
  UserPlus,
  Workflow,
};

export function ServiceDetailBlock({ service }: { service: ServiceDetail }) {
  const Icon = iconMap[service.icon] || Building2;
  const image = SERVICES.find((s) => s.id === service.id)?.image;

  return (
    <section className="py-6 sm:py-8">
      {image && (
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-8 sm:mb-10">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
        </div>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{service.title}</h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-4xl">{service.introduction}</p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {service.sections.map((section, si) => (
          <GlassCard key={section.title} delay={si * 0.05} hover={false}>
            <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{section.title}</h2>
            {section.content && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{section.content}</p>
            )}
            {section.items && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.subsections && (
              <div className="space-y-4 sm:space-y-6 mt-4">
                {section.subsections.map((sub) => (
                  <div key={sub.title}>
                    <h3 className="text-sm font-semibold mb-2">{sub.title}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {sub.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={`/contact?service=${service.id}`}
          className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
        >
          Enquire about {service.title} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
