import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  company: z.string().optional(),
  designation: z.string().optional(),
  city: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  industry: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  regulatoryMarket: z.string().optional(),
  facilityType: z.string().optional(),
  timeline: z.string().optional(),
  preferredContact: z.string().optional(),
  position: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  interests: z.array(z.string()).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please agree to receive updates",
  }),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
