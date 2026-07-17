/**
 * Flat SVG-illustraties per Skooby-categorie.
 * Zelf-bevattend (geen externe assets), schaalbaar, on-brand.
 * viewBox 0 0 160 120 — bedoeld als "beeldtegel" met volledige achtergrond.
 */

interface Props {
  name: string;
  className?: string;
}

const TINTS: Record<string, string> = {
  Honden: "#fdeada",
  Katten: "#e7f1ef",
  Vissen: "#d9eff6",
  Binnenvogels: "#e4f4e9",
  Knaagdieren: "#fbe8d5",
  Konijnen: "#efe9e1",
  Reptielen: "#e3f2df",
  Boerderijdieren: "#efe6d6",
  Kippen: "#fdeed2",
  Tuindieren: "#edf0e2",
};

export default function CategoryArt({ name, className }: Props) {
  const tint = TINTS[name] ?? "#eef4f0";
  return (
    <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="160" height="120" fill={tint} />
      {/* zachte decoratie */}
      <circle cx="24" cy="22" r="26" fill="#ffffff" opacity="0.35" />
      <circle cx="140" cy="104" r="30" fill="#ffffff" opacity="0.25" />
      {ART[name] ?? ART.Honden}
    </svg>
  );
}

const ART: Record<string, React.ReactNode> = {
  // 🐕 Hond — vooraanzicht
  Honden: (
    <g>
      <ellipse cx="52" cy="58" rx="13" ry="24" fill="#a9663a" transform="rotate(-18 52 58)" />
      <ellipse cx="108" cy="58" rx="13" ry="24" fill="#a9663a" transform="rotate(18 108 58)" />
      <circle cx="80" cy="62" r="30" fill="#cf8a54" />
      <ellipse cx="80" cy="76" rx="18" ry="15" fill="#ecc39a" />
      <circle cx="68" cy="55" r="4" fill="#3a2a20" />
      <circle cx="92" cy="55" r="4" fill="#3a2a20" />
      <ellipse cx="80" cy="70" rx="6" ry="4.2" fill="#3a2a20" />
      <path d="M80 74 v6 M80 80 q-6 4 -11 1 M80 80 q6 4 11 1" stroke="#7a5230" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </g>
  ),
  // 🐈 Kat — vooraanzicht
  Katten: (
    <g>
      <polygon points="54,26 68,52 44,52" fill="#e0894f" />
      <polygon points="106,26 92,52 116,52" fill="#e0894f" />
      <polygon points="56,34 64,50 49,50" fill="#f6c9a8" />
      <polygon points="104,34 96,50 111,50" fill="#f6c9a8" />
      <circle cx="80" cy="64" r="28" fill="#ec9a5c" />
      <ellipse cx="69" cy="60" rx="4" ry="5.5" fill="#33502f" />
      <ellipse cx="91" cy="60" rx="4" ry="5.5" fill="#33502f" />
      <polygon points="80,70 76,74 84,74" fill="#c85a49" />
      <path d="M80 74 v3 M80 77 q-5 4 -10 2 M80 77 q5 4 10 2" stroke="#a86038" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M63 66 l-18 -3 M63 71 l-18 3 M97 66 l18 -3 M97 71 l18 3" stroke="#d98a55" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),
  // 🐠 Vis — zijaanzicht
  Vissen: (
    <g>
      <polygon points="96,60 122,42 122,78" fill="#f6b44b" />
      <ellipse cx="66" cy="62" rx="34" ry="23" fill="#ff9a53" />
      <path d="M55 42 q11 -12 24 -6 q-6 8 -6 14 z" fill="#f6b44b" />
      <path d="M60 84 q10 10 22 6 q-6 -8 -6 -12 z" fill="#f6b44b" opacity="0.9" />
      <path d="M62 46 q-6 16 0 32" stroke="#f4813a" strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round" />
      <circle cx="44" cy="58" r="7" fill="#ffffff" />
      <circle cx="43" cy="58" r="3.4" fill="#26313a" />
      <path d="M34 66 q6 4 12 1" stroke="#c85f24" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </g>
  ),
  // 🦜 Vogel — zittend
  Binnenvogels: (
    <g>
      <path d="M64 96 h20" stroke="#8a5a2a" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="80" cy="70" rx="20" ry="26" fill="#3fa66f" />
      <path d="M86 52 q22 12 8 40 q-6 -22 -8 -40z" fill="#2f8a5a" />
      <circle cx="72" cy="44" r="16" fill="#46b878" />
      <circle cx="70" cy="42" r="9" fill="#f6b44b" opacity="0.85" />
      <circle cx="70" cy="41" r="3.4" fill="#26313a" />
      <polygon points="56,44 44,49 56,54" fill="#f28c28" />
      <polygon points="72,58 76,58 74,64" fill="#f28c28" />
    </g>
  ),
  // 🐹 Hamster — vooraanzicht
  Knaagdieren: (
    <g>
      <circle cx="52" cy="42" r="12" fill="#c68f60" />
      <circle cx="108" cy="42" r="12" fill="#c68f60" />
      <circle cx="52" cy="42" r="6" fill="#f3c9a6" />
      <circle cx="108" cy="42" r="6" fill="#f3c9a6" />
      <circle cx="80" cy="64" r="30" fill="#dcae7e" />
      <ellipse cx="62" cy="76" rx="12" ry="10" fill="#f0d3b0" opacity="0.8" />
      <ellipse cx="98" cy="76" rx="12" ry="10" fill="#f0d3b0" opacity="0.8" />
      <circle cx="69" cy="60" r="4" fill="#3a2a20" />
      <circle cx="91" cy="60" r="4" fill="#3a2a20" />
      <ellipse cx="80" cy="70" rx="4.5" ry="3.4" fill="#c85a49" />
      <path d="M80 73 v4" stroke="#8a5a34" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),
  // 🐇 Konijn — vooraanzicht
  Konijnen: (
    <g>
      <ellipse cx="66" cy="34" rx="8" ry="26" fill="#d6cabb" transform="rotate(-8 66 34)" />
      <ellipse cx="94" cy="34" rx="8" ry="26" fill="#d6cabb" transform="rotate(8 94 34)" />
      <ellipse cx="66" cy="34" rx="3.4" ry="18" fill="#f3d3d8" transform="rotate(-8 66 34)" />
      <ellipse cx="94" cy="34" rx="3.4" ry="18" fill="#f3d3d8" transform="rotate(8 94 34)" />
      <circle cx="80" cy="72" r="26" fill="#e0d6c8" />
      <circle cx="70" cy="68" r="3.6" fill="#3a2a20" />
      <circle cx="90" cy="68" r="3.6" fill="#3a2a20" />
      <ellipse cx="80" cy="77" rx="4" ry="3" fill="#c86e70" />
      <path d="M80 80 v3 M80 83 q-5 3 -9 1 M80 83 q5 3 9 1" stroke="#b3a48f" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  ),
  // 🐢 Schildpad — bovenaanzicht (reptielen)
  Reptielen: (
    <g>
      <ellipse cx="52" cy="70" rx="9" ry="7" fill="#7cba54" transform="rotate(-35 52 70)" />
      <ellipse cx="108" cy="70" rx="9" ry="7" fill="#7cba54" transform="rotate(35 108 70)" />
      <ellipse cx="58" cy="46" rx="8" ry="7" fill="#7cba54" transform="rotate(35 58 46)" />
      <ellipse cx="102" cy="46" rx="8" ry="7" fill="#7cba54" transform="rotate(-35 102 46)" />
      <circle cx="80" cy="40" r="10" fill="#8ac765" />
      <circle cx="77" cy="38" r="2.4" fill="#2a3a22" />
      <circle cx="83" cy="38" r="2.4" fill="#2a3a22" />
      <circle cx="80" cy="62" r="27" fill="#4f9f3f" />
      <circle cx="80" cy="62" r="18" fill="#5cb85c" />
      <path d="M80 44 v36 M62 62 h36 M67 49 l26 26 M93 49 l-26 26" stroke="#3d7d31" strokeWidth="2.6" />
    </g>
  ),
  // 🐴 Paard — vooraanzicht (boerderijdieren)
  Boerderijdieren: (
    <g>
      <polygon points="58,30 52,54 70,50" fill="#8a6a4f" />
      <polygon points="102,30 108,54 90,50" fill="#8a6a4f" />
      <path d="M60 52 q20 -14 40 0 q6 26 -4 40 q-16 12 -32 0 q-10 -14 -4 -40z" fill="#9c7452" />
      <ellipse cx="80" cy="92" rx="16" ry="13" fill="#c4a07c" />
      <circle cx="67" cy="62" r="4" fill="#2e2018" />
      <circle cx="93" cy="62" r="4" fill="#2e2018" />
      <ellipse cx="72" cy="94" rx="3" ry="4" fill="#5a4432" />
      <ellipse cx="88" cy="94" rx="3" ry="4" fill="#5a4432" />
      <path d="M78 30 q-10 6 -12 22 q10 -8 14 -20z" fill="#5f4633" />
    </g>
  ),
  // 🐓 Kip — zijaanzicht
  Kippen: (
    <g>
      <path d="M96 58 q22 -6 24 22 q-14 -6 -24 -8z" fill="#e8e8e8" />
      <ellipse cx="78" cy="74" rx="26" ry="22" fill="#ffffff" />
      <path d="M92 66 q10 6 8 20 q-10 2 -16 -6z" fill="#ececec" />
      <circle cx="56" cy="52" r="15" fill="#ffffff" />
      <path d="M46 40 q3 -8 7 0 q4 -8 7 0 q3 -7 6 1 q-8 4 -20 2z" fill="#e2452f" />
      <polygon points="42,52 30,55 42,59" fill="#f2a03a" />
      <path d="M52 62 q-3 8 3 10 q4 -4 2 -10z" fill="#e2452f" />
      <circle cx="53" cy="50" r="2.8" fill="#26313a" />
      <path d="M66 92 v8 M74 92 v8" stroke="#f2a03a" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  // 🦔 Egel — zijaanzicht (tuindieren)
  Tuindieren: (
    <g>
      <path d="M40 82 q6 -46 58 -40 q34 4 30 40z" fill="#6f5539" />
      <g fill="#8a6b4a">
        <polygon points="50,52 56,34 60,54" />
        <polygon points="62,46 68,28 72,50" />
        <polygon points="76,44 82,26 86,50" />
        <polygon points="90,48 96,30 98,54" />
        <polygon points="102,56 110,42 108,60" />
      </g>
      <path d="M40 82 q-8 -6 -6 -18 q10 -8 22 -4 q6 10 -2 22z" fill="#caa274" />
      <circle cx="34" cy="70" r="3.6" fill="#2e2018" />
      <circle cx="30" cy="72" r="4" fill="#2e2018" />
      <circle cx="45" cy="66" r="2.6" fill="#2e2018" />
      <path d="M52 88 v6 M66 90 v6" stroke="#8a6b4a" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
};
