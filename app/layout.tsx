import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Providers } from "@/components/layout/providers";
import { COMPANY, LOGO } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lomarspharma.com"),
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
    images: [
      {
        url: LOGO.src,
        width: LOGO.width,
        height: LOGO.height,
        alt: LOGO.alt,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32x32.png",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="min-w-0 overflow-x-clip">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
