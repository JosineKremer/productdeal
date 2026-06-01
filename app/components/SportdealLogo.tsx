export default function SportdealLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sportdeal"
    >
      <defs>
        <linearGradient id="sd-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5ae4c" />
          <stop offset="100%" stopColor="#e2603f" />
        </linearGradient>
      </defs>
      {/* "sport" in orange gradient */}
      <text
        x="4"
        y="58"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="56"
        fontWeight="800"
        fill="url(#sd-orange)"
        letterSpacing="-1"
      >
        sport
      </text>
      {/* "deal" in dark blue */}
      <text
        x="170"
        y="58"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="56"
        fontWeight="800"
        fill="#173441"
        letterSpacing="-1"
      >
        deal
      </text>
      {/* Smile arc under "deal" */}
      <path
        d="M 200 68 Q 245 82 290 68"
        stroke="url(#sd-orange)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
