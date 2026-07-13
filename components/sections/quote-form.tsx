"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import {
  SERVICES,
  FACILITY_TYPES,
  PROJECT_TIMELINES,
  PREFERRED_CONTACT,
} from "@/lib/constants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { cn } from "@/lib/utils";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(1, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  facilityType: z.string().optional(),
  timeline: z.string().optional(),
  preferredContact: z.string().optional(),
  message: z.string().min(10, "Please describe your requirements"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const selectClass = (hasError: boolean) =>
  cn(
    "w-full min-w-0 px-4 py-4 min-h-11 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 appearance-none",
    hasError && "ring-1 ring-destructive",
  );

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      await submitToWeb3Forms({
        subject: `[LoMars Pharma] Quote — ${data.name}`,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        inquiry_type: "quote",
        service: data.service,
        facility_type: data.facilityType || "",
        timeline: data.timeline || "",
        preferred_contact: data.preferredContact || "",
        message: data.message,
      });
    } catch {
      toast.error("Failed to submit quote request. Please try again.");
      return;
    }

    setSubmitted(true);
    toast.success("Quote request submitted! We'll respond within 24 hours.");
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {[
          { name: "name" as const, label: "Full Name *", type: "text" },
          { name: "email" as const, label: "Email *", type: "email" },
          { name: "phone" as const, label: "Phone *", type: "tel" },
          { name: "company" as const, label: "Company *", type: "text" },
        ].map((field) => (
          <div key={field.name} className="relative">
            <input
              {...register(field.name)}
              type={field.type}
              id={field.name}
              placeholder=" "
              className={cn(
                "peer w-full min-w-0 px-4 pt-6 pb-2 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50",
                errors[field.name] && "ring-1 ring-destructive",
              )}
            />
            <label
              htmlFor={field.name}
              className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              {field.label}
            </label>
            {errors[field.name] && (
              <p className="text-xs text-destructive mt-1">{errors[field.name]?.message}</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <select {...register("service")} className={selectClass(!!errors.service)}>
            <option value="">Service Required *</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id} className="bg-surface">{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
        </div>
        <div>
          <select {...register("facilityType")} className={selectClass(false)}>
            <option value="">Facility Type</option>
            {FACILITY_TYPES.map((f) => (
              <option key={f.value} value={f.value} className="bg-surface">{f.label}</option>
            ))}
          </select>
        </div>
        <div>
          <select {...register("timeline")} className={selectClass(false)}>
            <option value="">Project Timeline</option>
            {PROJECT_TIMELINES.map((t) => (
              <option key={t.value} value={t.value} className="bg-surface">{t.label}</option>
            ))}
          </select>
        </div>
        <div>
          <select {...register("preferredContact")} className={selectClass(false)}>
            <option value="">Preferred Contact</option>
            {PREFERRED_CONTACT.map((p) => (
              <option key={p.value} value={p.value} className="bg-surface">{p.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="relative">
        <textarea
          {...register("message")}
          id="quote-message"
          rows={4}
          placeholder=" "
          className={cn(
            "peer w-full min-w-0 px-4 pt-6 pb-2 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none",
            errors.message && "ring-1 ring-destructive",
          )}
        />
        <label htmlFor="quote-message" className="absolute left-4 top-4 text-sm text-muted-foreground">
          Project Requirements *
        </label>
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-primary" />
        <span className="text-sm text-muted-foreground">
          I agree to the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
        </span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}

      <MagneticButton
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full bg-primary text-primary-foreground glow-green py-4 disabled:opacity-70"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
        ) : submitted ? (
          <><CheckCircle className="w-4 h-4" /> Request Submitted!</>
        ) : (
          <><Send className="w-4 h-4" /> Request a Quote</>
        )}
      </MagneticButton>
    </form>
  );
}
