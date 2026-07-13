import { SectionTitle } from "@/components/ui/section-title";
import { VideoBackdrop } from "@/components/ui/background-video";
import type { BannerAsset } from "@/lib/constants";

type PageBannerProps = {
  badge: string;
  title: string;
  subtitle?: string;
  image: BannerAsset;
  children?: React.ReactNode;
};

export function PageBanner({ badge, title, subtitle, image, children }: PageBannerProps) {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 relative overflow-hidden">
      <VideoBackdrop src={image.video} variant="banner" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">
        <SectionTitle badge={badge} title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
}
