import type { MetadataRoute } from "next";
import { SERVICE_DETAILS } from "@/lib/service-details";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lomarspharma.com";
  const routes = [
    "",
    "/about",
    "/services",
    ...SERVICE_DETAILS.map((service) => service.href),
    "/industries",
    "/sourcing",
    "/careers",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
