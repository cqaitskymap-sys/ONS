"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SERVICES } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
    setSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "name" as const, label: "Full Name", type: "text", placeholder: "John Doe" },
    { name: "email" as const, label: "Email Address", type: "email", placeholder: "john@company.com" },
    { name: "phone" as const, label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
    { name: "company" as const, label: "Company", type: "text", placeholder: "Your Company" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name} className="relative">
            <input
              {...register(field.name)}
              type={field.type}
              id={field.name}
              placeholder=" "
              className={cn(
                "peer w-full px-4 pt-6 pb-2 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all",
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

      <div className="relative">
        <select
          {...register("service")}
          id="service"
          defaultValue=""
          className={cn(
            "w-full px-4 py-4 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 appearance-none",
            errors.service && "ring-1 ring-destructive"
          )}
        >
          <option value="" disabled>Select a Service</option>
          {SERVICES.map((s) => (
            <option key={s.title} value={s.title} className="bg-surface">
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-xs text-destructive mt-1">{errors.service.message}</p>
        )}
      </div>

      <div className="relative">
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          placeholder=" "
          className={cn(
            "peer w-full px-4 pt-6 pb-2 rounded-xl glass text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none transition-all",
            errors.message && "ring-1 ring-destructive"
          )}
        />
        <label
          htmlFor="message"
          className="absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
        >
          Your Message
        </label>
        {errors.message && (
          <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

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
