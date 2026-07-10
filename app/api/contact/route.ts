import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    const data = result.data;

    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
          to: process.env.CONTACT_EMAIL,
          subject: `[LoMars Pharma] ${data.inquiryType} — ${data.name}`,
          text: [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone || "—"}`,
            `Company: ${data.company || "—"}`,
            `Inquiry: ${data.inquiryType}`,
            `Service: ${data.service}`,
            `Message:\n${data.message}`,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
      }
    } else {
      console.log("[Contact Form Submission]", data);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
