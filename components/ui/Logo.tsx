import Image from "next/image";

/**
 * Official Flashax logo rendered from transparent PNG asset (1024×264).
 * Preserves the original feather artwork, colours, typography, and proportions.
 */
export function Logo({
  className,
  priority = false,
  sizes = "220px",
  width = 1024,
  height = 342,
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/brand/flashax-logo-transparent.png"
      alt="FLASHAX EVENT SOLUTIONS — Where Engagement Sparks Success"
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}