import Link from "next/link";

interface Props {
  /** "light" = witte versie (op donkere achtergrond), "dark" = volledige versie met badge (op licht) */
  variant?: "light" | "dark";
  size?: number; // hoogte in px
  href?: string;
  className?: string;
}

/**
 * Skooby-logo — gebruikt de door de gebruiker aangeleverde SVG's uit /public.
 * Inline gerenderd zodat het Baloo 2 / Nunito-lettertype (via @import) meelaadt.
 * - variant "light" → skooby-logo-wit.svg (poot + witte wordmark)
 * - variant "dark"  → skooby-logo.svg (badge + groene wordmark + "dierenproducten")
 */
export default function SkoobyLogo({ variant = "light", size = 46, href = "/skooby", className = "" }: Props) {
  const mark =
    variant === "light" ? (
      <svg viewBox="0 0 300 96" height={size} width={(size * 300) / 96} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skooby" className="block">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');`}</style>
        <defs>
          <linearGradient id="skb-pawL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffc25c" />
            <stop offset="1" stopColor="#f5872b" />
          </linearGradient>
        </defs>
        <g transform="translate(6,14) scale(0.72)" fill="url(#skb-pawL)">
          <ellipse cx="25" cy="45" rx="7.5" ry="9.5" transform="rotate(-22 25 45)" />
          <ellipse cx="40" cy="33" rx="8" ry="10.5" transform="rotate(-8 40 33)" />
          <ellipse cx="58" cy="33" rx="8" ry="10.5" transform="rotate(8 58 33)" />
          <ellipse cx="73" cy="45" rx="7.5" ry="9.5" transform="rotate(22 73 45)" />
          <path d="M49 51 C63 51 74 60 73 71 C72 81 62 86 53 82 C50 80.5 48 80.5 45 82 C36 86 26 81 25 71 C24 60 35 51 49 51 Z" />
        </g>
        <text x="80" y="66" fontFamily="'Baloo 2', sans-serif" fontWeight="800" fontSize="54" fill="#ffffff" letterSpacing="0.5">
          Sk<tspan fill="#f5982b">oo</tspan>by
        </text>
      </svg>
    ) : (
      <svg viewBox="0 0 400 150" height={size} width={(size * 400) / 150} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skooby dierenproducten" className="block">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@600;700&display=swap');`}</style>
        <defs>
          <linearGradient id="skb-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a6149" />
            <stop offset="1" stopColor="#0c3a2c" />
          </linearGradient>
          <linearGradient id="skb-pawD" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffc25c" />
            <stop offset="1" stopColor="#f5872b" />
          </linearGradient>
          <filter id="skb-drop" x="-30%" y="-30%" width="160%" height="170%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#08281d" floodOpacity="0.28" />
          </filter>
          <filter id="skb-tsh" x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#0a3325" floodOpacity="0.15" />
          </filter>
        </defs>
        <g transform="translate(24,26)" filter="url(#skb-drop)">
          <rect width="96" height="96" rx="26" fill="url(#skb-bg)" />
          <rect x="1" y="1" width="94" height="94" rx="25" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.5" />
          <g transform="translate(8.6,3.7) scale(0.82)" fill="url(#skb-pawD)">
            <ellipse cx="25" cy="45" rx="7.5" ry="9.5" transform="rotate(-22 25 45)" />
            <ellipse cx="40" cy="33" rx="8" ry="10.5" transform="rotate(-8 40 33)" />
            <ellipse cx="58" cy="33" rx="8" ry="10.5" transform="rotate(8 58 33)" />
            <ellipse cx="73" cy="45" rx="7.5" ry="9.5" transform="rotate(22 73 45)" />
            <path d="M49 51 C63 51 74 60 73 71 C72 81 62 86 53 82 C50 80.5 48 80.5 45 82 C36 86 26 81 25 71 C24 60 35 51 49 51 Z" />
          </g>
          <g transform="translate(8.6,3.7) scale(0.82)" fill="#ffffff" opacity="0.4">
            <ellipse cx="22" cy="41" rx="2.4" ry="3" />
            <ellipse cx="37" cy="29" rx="2.6" ry="3.2" />
            <ellipse cx="55" cy="29" rx="2.6" ry="3.2" />
            <ellipse cx="70" cy="41" rx="2.4" ry="3" />
            <ellipse cx="44" cy="57" rx="3" ry="3.6" />
          </g>
        </g>
        <text x="150" y="94" filter="url(#skb-tsh)" fontFamily="'Baloo 2', sans-serif" fontWeight="800" fontSize="62" fill="#0e4636" letterSpacing="0.5">
          Sk<tspan fill="#f5982b">oo</tspan>by
        </text>
        <text x="153" y="122" fontFamily="'Nunito', sans-serif" fontWeight="700" fontSize="14" fill="#5f8377" letterSpacing="3">
          dierenproducten
        </text>
      </svg>
    );

  const content = <span className={`inline-flex items-center ${className}`}>{mark}</span>;

  if (href) {
    return (
      <Link href={href} className="inline-flex flex-shrink-0 items-center">
        {content}
      </Link>
    );
  }
  return content;
}
