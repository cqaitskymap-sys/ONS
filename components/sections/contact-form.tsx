"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import {
  SERVICES,
  INQUIRY_TYPES,
  INDUSTRIES,
  COMPLIANCE_STANDARDS,
  FACILITY_TYPES,
  PROJECT_TIMELINES,
  PREFERRED_CONTACT,
  CAREER_OPENINGS,
} from "@/lib/constants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  defaultService?: string;
  defaultInquiry?: string;
  defaultPosition?: string;
};

const selectClass = (hasError: boolean) =>
  cn(
    "w-full min-w-0 px-4 py-4 min-h-11 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 appearance-none",
    hasError && "ring-1 ring-destructive"
  );

export function ContactForm({
  defaultService = "",
  defaultInquiry = "",
  defaultPosition = "",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: defaultService,
      inquiryType: defaultInquiry,
      position: defaultPosition,
    },
  });

  const inquiryType = watch("inquiryType");
  const isCareerInquiry = inquiryType === "careers";

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      toast.error("Failed to send message. Please try again or email us directly.");
      return;
    }

    setSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  const textFields = [
    { name: "name" as const, label: "Full Name *", type: "text", placeholder: "John Doe" },
    { name: "email" as const, label: "Email Address *", type: "email", placeholder: "john@company.com" },
    { name: "phone" as const, label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
    { name: "company" as const, label: "Company / Organization", type: "text", placeholder: "Your Company" },
    { name: "designation" as const, label: "Designation / Job Title", type: "text", placeholder: "QA Manager" },
    { name: "city" as const, label: "City", type: "text", placeholder: "Mumbai" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {textFields.map((field) => (
          <div key={field.name} className="relative">
            <input
              {...register(field.name)}
              type={field.type}
              id={field.name}
              placeholder=" "
              className={cn(
                "peer w-full min-w-0 px-4 pt-6 pb-2 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all",
                errors[field.name] && "ring-1 ring-destructive"
              )}
            />
            <label
              htmlFor={field.name}
              className="absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
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
          <select {...register("inquiryType")} id="inquiryType" className={selectClass(!!errors.inquiryType)}>
            <option value="" disabled>Inquiry Type *</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value} className="bg-surface">{t.label}</option>
            ))}
          </select>
          {errors.inquiryType && <p className="text-xs text-destructive mt-1">{errors.inquiryType.message}</p>}
        </div>

        <div>
          <select {...register("service")} id="service" className={selectClass(!!errors.service)}>
            <option value="" disabled>Service of Interest *</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id} className="bg-surface">{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <select {...register("industry")} id="industry" className={selectClass(false)}>
            <option value="">Industry Sector</option>
            {INDUSTRIES.map((i) => (
              <option key={i.title} value={i.title} className="bg-surface">{i.title}</option>
            ))}
          </select>
        </div>

        <div>
          <select {...register("regulatoryMarket")} id="regulatoryMarket" className={selectClass(false)}>
            <option value="">Target Regulatory Market</option>
            {COMPLIANCE_STANDARDS.map((s) => (
              <option key={s} value={s} className="bg-surface">{s}</option>
            ))}
          </select>
        </div>

        <div>
          <select {...register("facilityType")} id="facilityType" className={selectClass(false)}>
            <option value="">Facility Type</option>
            {FACILITY_TYPES.map((f) => (
              <option key={f.value} value={f.value} className="bg-surface">{f.label}</option>
            ))}
          </select>
        </div>

        <div>
          <select {...register("timeline")} id="timeline" className={selectClass(false)}>
            <option value="">Project Timeline</option>
            {PROJECT_TIMELINES.map((t) => (
              <option key={t.value} value={t.value} className="bg-surface">{t.label}</option>
            ))}
          </select>
        </div>

        <div>
          <select {...register("preferredContact")} id="preferredContact" className={selectClass(false)}>
            <option value="">Preferred Contact Method</option>
            {PREFERRED_CONTACT.map((p) => (
              <option key={p.value} value={p.value} className="bg-surface">{p.label}</option>
            ))}
          </select>
        </div>

        {isCareerInquiry && (
          <div>
            <select {...register("position")} id="position" className={selectClass(false)}>
              <option value="">Position Applying For</option>
              {CAREER_OPENINGS.map((job) => (
                <option key={job.id} value={job.id} className="bg-surface">{job.title}</option>
              ))}
              <option value="general" className="bg-surface">General Application</option>
            </select>
          </div>
        )}
      </div>

      <div className="relative">
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          placeholder=" "
          className={cn(
            "peer w-full min-w-0 px-4 pt-6 pb-2 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none transition-all",
            errors.message && "ring-1 ring-destructive"
          )}
        />
        <label
          htmlFor="message"
          className="absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
        >
          Your Message *
        </label>
        {errors.message && (
          <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1 rounded border-white/20 bg-transparent accent-primary"
        />
        <span className="text-sm text-muted-foreground">
          I agree to the{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and consent to LoMars Pharma contacting me regarding my inquiry.
        </span>
      </label>
      {errors.consent && (
        <p className="text-xs text-destructive">{errors.consent.message}</p>
      )}

      <MagneticButton
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full bg-primary text-primary-foreground glow-green py-4 text-base disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : submitted ? (
          <>
            <CheckCircle className="w-4 h-4" /> Message Sent!
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </MagneticButton>
    </form>
  );
}
