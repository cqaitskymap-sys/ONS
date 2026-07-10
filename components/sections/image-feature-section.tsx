import Image from "next/image";
import type { ImageAsset } from "@/lib/constants";

type ImageFeatureSectionProps = {
  image: ImageAsset;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ImageFeatureSection({
  image,
  reverse = false,
  className = "",
  children,
}: ImageFeatureSectionProps) {
  return (
    <section className={`py-12 sm:py-16 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={`relative rounded-2xl overflow-hidden aspect-[16/10] ${reverse ? "lg:order-2" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
          <div className={reverse ? "lg:order-1" : ""}>{children}</div>
        </div>
      </div>
    </section>
  );
}
