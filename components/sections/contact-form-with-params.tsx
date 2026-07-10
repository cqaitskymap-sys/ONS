"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/sections/contact-form";
import { getServiceIdFromSearchParam } from "@/lib/service-details";

function ContactFormFromParams() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const inquiry = searchParams.get("inquiry");
  const position = searchParams.get("position");

  const defaultService =
    getServiceIdFromSearchParam(service ?? undefined) || service || "";
  const validPosition =
    position && /^[a-z0-9-]+$/.test(position) ? position : "";
  const defaultInquiry = inquiry === "careers" ? "careers" : inquiry || "";

  return (
    <ContactForm
      defaultService={defaultService}
      defaultInquiry={defaultInquiry}
      defaultPosition={validPosition}
    />
  );
}

export function ContactFormWithParams() {
  return (
    <Suspense fallback={<ContactForm />}>
      <ContactFormFromParams />
    </Suspense>
  );
}
