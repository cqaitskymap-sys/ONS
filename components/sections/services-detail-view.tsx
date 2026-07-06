"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/cards/glass-card";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { cn } from "@/lib/utils";

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

function ServiceDetailBlock({ service }: { service: (typeof SERVICE_DETAILS)[number] }) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <section id={service.id} className="py-6 sm:py-8 scroll-mt-24 sm:scroll-mt-28">
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
        </div>
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{service.title}</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-4xl">{service.introduction}</p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {service.sections.map((section, si) => (
          <GlassCard key={section.title} delay={si * 0.05} hover={false}>
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{section.title}</h3>
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
                    <h4 className="text-sm font-semibold mb-2">{sub.title}</h4>
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
          href="/contact"
          className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
        >
          Enquire about {service.title} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}

export function ServicesDetailView({ initialServiceId }: { initialServiceId: string }) {
  const router = useRouter();
  const selectedId = initialServiceId;

  const selectService = useCallback(
    (id: string) => {
      if (id) {
        router.push(`/services?service=${id}#service-detail`);
      } else {
        router.push("/services");
      }
    },
    [router]
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "service-detail" || !hash) return;

    const legacyId = SERVICE_DETAILS.some((s) => s.id === hash) ? hash : "";
    if (legacyId && legacyId !== selectedId) {
      router.replace(`/services?service=${legacyId}`);
    }
  }, [router, selectedId]);

  const selectedService = SERVICE_DETAILS.find((s) => s.id === selectedId);

  return (
    <section className="pb-10 sm:pb-12 md:pb-16 overflow-hidden" id="service-detail">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <label htmlFor="service-select" className="block text-sm font-medium mb-2">
            Select a Service
          </label>
          <div className="relative">
            <select
              id="service-select"
              value={selectedId}
              onChange={(e) => selectService(e.target.value)}
              className={cn(
                "w-full min-w-0 px-4 py-3 sm:py-4 pr-10 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 appearance-none cursor-pointer min-h-11"
              )}
            >
              <option value="" className="bg-surface">
                Choose a service to view details
              </option>
              {SERVICE_DETAILS.map((service) => (
                <option key={service.id} value={service.id} className="bg-surface">
                  {service.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {selectedService ? (
          <ServiceDetailBlock service={selectedService} />
        ) : (
          <div className="text-center py-8 sm:py-12 px-4 glass rounded-2xl">
            <p className="text-sm sm:text-base text-muted-foreground">
              Please select a service from the dropdown above to view its details.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
