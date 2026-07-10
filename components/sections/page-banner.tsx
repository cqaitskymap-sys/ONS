import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import type { ImageAsset } from "@/lib/constants";

type PageBannerProps = {
  badge: string;
  title: string;
  subtitle?: string;
  image: ImageAsset;
  children?: React.ReactNode;
};

export function PageBanner({ badge, title, subtitle, image, children }: PageBannerProps) {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 relative overflow-hidden">
      <Image
        src={image.src}
        alt=""
        fill
        priority
        className="object-cover opacity-[0.18]"
        sizes="100vw"
        quality={75}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative min-w-0">
        <SectionTitle badge={badge} title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
}
