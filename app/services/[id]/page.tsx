import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ServiceDetailBlock } from "@/components/sections/service-detail-block";
import { CTASection } from "@/components/sections/cta-section";
import { getServiceById, getValidServiceId, SERVICE_DETAILS } from "@/lib/service-details";

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(getValidServiceId(id));

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(getValidServiceId(id));

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <ServiceDetailBlock service={service} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
