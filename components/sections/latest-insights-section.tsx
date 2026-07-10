"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/cards/glass-card";
import { INSIGHTS } from "@/lib/constants";

export function LatestInsightsSection() {
  const latest = INSIGHTS.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <SectionTitle
          badge="Insights"
          title="Latest Updates"
          subtitle="Regulatory news, GMP best practices, and industry insights from our expert team."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {latest.map((post, i) => (
            <GlassCard key={post.slug} delay={i * 0.1}>
              <span className="inline-block text-xs font-medium text-primary mb-3">{post.category}</span>
              <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <Link
                href={`/insights/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
              >
                Read more <ArrowRight className="w-3 h-3" />
              </Link>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all insights <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
