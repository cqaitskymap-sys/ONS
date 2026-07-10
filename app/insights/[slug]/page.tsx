import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { INSIGHTS } from "@/lib/constants";
import { getInsightBySlug } from "@/lib/insights";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INSIGHTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl min-w-0">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <span className="inline-block text-xs font-medium text-primary mb-4">{post.category}</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-white/10">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
