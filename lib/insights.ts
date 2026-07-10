import { INSIGHTS, INDUSTRY_DETAILS } from "@/lib/constants";

export function getInsightBySlug(slug: string) {
  return INSIGHTS.find((post) => post.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return INDUSTRY_DETAILS.find((industry) => industry.slug === slug);
}

export function getValidIndustrySlug(slug: string) {
  const industry = getIndustryBySlug(slug);
  return industry?.slug ?? null;
}
