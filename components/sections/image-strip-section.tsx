import Image from "next/image";
import type { ImageAsset } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/section-title";

type ImageStripSectionProps = {
  badge?: string;
  title?: string;
  subtitle?: string;
  images: readonly ImageAsset[];
};

export function ImageStripSection({ badge, title, subtitle, images }: ImageStripSectionProps) {
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        {(badge || title) && (
          <SectionTitle badge={badge} title={title ?? ""} subtitle={subtitle} />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative rounded-2xl overflow-hidden aspect-[16/10] group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
