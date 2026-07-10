import Image from "next/image";
import type { ImageAsset } from "@/lib/constants";

type CardImageProps = {
  image: ImageAsset;
  className?: string;
};

export function CardImage({ image, className = "" }: CardImageProps) {
  return (
    <div className={`-mx-4 -mt-4 sm:-mx-6 sm:-mt-6 mb-4 sm:mb-5 relative overflow-hidden rounded-t-xl aspect-[16/9] ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
    </div>
  );
}
