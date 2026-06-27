import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  nav: "h-12",
  lg: "h-20",
  xl: "h-28",
  hero: "h-32 md:h-40",
} as const;

const framePadding = {
  sm: "px-2 py-1.5",
  md: "px-2.5 py-2",
  nav: "px-2.5 py-1.5",
  lg: "px-3 py-2.5",
  xl: "px-4 py-3",
  hero: "px-5 py-4 md:px-6 md:py-5",
} as const;

type LogoProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
  link?: boolean;
  priority?: boolean;
  framed?: boolean;
};

export function Logo({
  size = "md",
  className,
  link = true,
  priority = false,
  framed = true,
}: LogoProps) {
  const image = (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      className={cn(
        "relative z-10 w-auto object-contain",
        framed ? "object-center" : "object-left",
        sizeClasses[size]
      )}
    />
  );

  const content = framed ? (
    <span
      className={cn(
        "logo-plate",
        link && "logo-plate-hover",
        framePadding[size],
        size === "hero" && "rounded-3xl"
      )}
    >
      {image}
    </span>
  ) : (
    image
  );

  const wrapperClass = cn("inline-flex shrink-0", className);

  if (link) {
    return <Link href="/" className={wrapperClass}>{content}</Link>;
  }

  return <span className={wrapperClass}>{content}</span>;
}
