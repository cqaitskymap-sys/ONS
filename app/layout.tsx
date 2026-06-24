import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Providers } from "@/components/layout/providers";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "pharmaceutical consultancy",
    "regulatory affairs",
    "GMP",
    "pharma sourcing",
    "quality assurance",
    "LoMars Pharma",
    "Silvassa",
    "India",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    type: "website",
    locale: "en_IN",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
