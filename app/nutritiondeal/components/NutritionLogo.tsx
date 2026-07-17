import Link from "next/link";
import Image from "next/image";

interface Props {
  /** "light" = witte versie (op donkere achtergrond, via invert), "dark" = kleurversie (op licht) */
  variant?: "light" | "dark";
  size?: number; // hoogte in px
  href?: string;
  className?: string;
}

// Logo-verhouding: viewBox 1266.3 × 264.7 ≈ 4.78:1
const RATIO = 1266.3 / 264.7;

/**
 * Nutritiondeal-logo — gebruikt het aangeleverde SVG uit /public.
 * - variant "dark"  → kleurversie (oranje verloop "nutrition" + donkerblauw "deal")
 * - variant "light" → zelfde logo, wit gemaakt met `brightness-0 invert` voor donkere achtergronden
 */
export default function NutritionLogo({ variant = "dark", size = 40, href = "/nutritiondeal", className = "" }: Props) {
  const img = (
    <Image
      src="/nutritiondeal-logo.svg"
      alt="Nutritiondeal"
      width={Math.round(size * RATIO)}
      height={size}
      priority
      className={`w-auto ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
      style={{ height: size }}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex flex-shrink-0 items-center">
        {img}
      </Link>
    );
  }
  return img;
}
