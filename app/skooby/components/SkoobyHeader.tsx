"use client";
import { useState } from "react";
import Link from "next/link";
import SkoobyLogo from "./SkoobyLogo";
import { CATEGORIES } from "../data/categories";

const LANGUAGES = [
  { code: "NL", label: "Nederlands", flag: "🇳🇱" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
];

// Her-geëxporteerd zodat de homepage dezelfde bron gebruikt
export { CATEGORIES as NAV_CATS };

const DARK = "#0c3a2c";   // topbar + categoriebalk (donkergroen, sluit aan op logo-badge)
const ACCENT = "#f28c28";
const ACCENT_GRAD = "linear-gradient(135deg,#f28c28,#f6b44b)";

interface Props {
  cartCount?: number;
  cartTotal?: number;
  favoritesCount?: number;
  favoritesActive?: boolean;
}

export default function SkoobyHeader({
  cartCount = 0,
  cartTotal,
  favoritesCount,
  favoritesActive = false,
}: Props) {
  const [query, setQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const active = CATEGORIES.find((c) => c.label === activeNav) ?? null;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ── Topbar ── */}
      <div className="hidden md:block text-white text-xs" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1.5">
          <div className="flex items-center gap-5 text-white/75">
            <span className="flex items-center gap-1.5">
              <span style={{ color: ACCENT }}>●</span> Zorgeloos bestellen voor je huisdier
            </span>
            <span>Lokale dierenwinkel-service</span>
          </div>
          <div className="flex items-center gap-5 text-white/80">
            <Link href="/skooby/over-ons" className="hover:text-white">Over ons</Link>
            <Link href="/skooby/over-ons" className="hover:text-white">Contact</Link>
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 border border-white/30 rounded-full px-2.5 py-0.5 font-semibold hover:border-white/60 transition-colors"
              >
                <span>{selectedLang.flag}</span>
                <span>{selectedLang.code}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl overflow-hidden z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                      style={{ backgroundColor: selectedLang.code === lang.code ? "rgba(242,140,40,0.08)" : undefined }}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="flex-1 text-sm font-semibold text-left" style={{ color: DARK }}>{lang.label}</span>
                      <span className="text-xs text-gray-400 font-bold">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Witte logobalk: logo + zoekbalk + acties ── */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <SkoobyLogo variant="dark" size={62} />

        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek op product, merk, categorie of EAN…"
              className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none transition-colors"
              style={{ borderColor: query ? ACCENT : "#e6ede9" }}
            />
            <button
              className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white flex items-center hover:opacity-90 transition-opacity"
              style={{ background: ACCENT_GRAD }}
              aria-label="Zoeken"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Favorieten */}
        <Link
          href="/skooby/favorieten"
          className="flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
          style={{
            borderColor: favoritesActive ? ACCENT : "#e6ede9",
            backgroundColor: favoritesActive ? "rgba(242,140,40,0.05)" : "white",
          }}
        >
          <svg className="w-5 h-5" fill={favoritesActive ? ACCENT : "none"} stroke={ACCENT} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs font-bold hidden sm:block" style={{ color: favoritesActive ? ACCENT : DARK }}>
            {favoritesActive && favoritesCount !== undefined ? `${favoritesCount} favorieten` : "Favorieten"}
          </span>
        </Link>

        {/* Winkelwagen */}
        <Link
          href="/skooby/winkelwagen"
          className="relative flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
          style={{ borderColor: cartCount > 0 ? ACCENT : "#e6ede9", backgroundColor: cartCount > 0 ? "rgba(242,140,40,0.05)" : "white" }}
        >
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke={cartCount > 0 ? ACCENT : DARK} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-white text-[9px] font-black flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-xs font-bold hidden sm:block" style={{ color: cartCount > 0 ? ACCENT : DARK }}>
            {cartCount > 0 && cartTotal ? `€ ${cartTotal}` : "Winkelwagen"}
          </span>
        </Link>
      </div>

      {/* ── Categoriebalk + full-width mega-menu ── */}
      <div className="hidden md:block relative" onMouseLeave={() => setActiveNav(null)}>
        <nav style={{ backgroundColor: DARK }}>
          <div className="max-w-7xl mx-auto px-4 flex">
            {CATEGORIES.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => setActiveNav(item.label)}
                className="flex items-center gap-1 text-white text-sm font-medium px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap"
                style={{
                  backgroundColor: activeNav === item.label ? "rgba(255,255,255,0.08)" : undefined,
                  boxShadow: activeNav === item.label ? `inset 0 -3px 0 ${ACCENT}` : undefined,
                }}
              >
                {item.label}
                <svg className={`w-3 h-3 opacity-60 transition-transform duration-200 ${activeNav === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
            <Link href="#" className="text-white text-sm font-semibold px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap ml-auto">
              Merken
            </Link>
          </div>
        </nav>

        {active && (
          <div className="absolute left-0 right-0 top-full bg-white shadow-2xl z-50 border-t-2" style={{ borderColor: ACCENT }}>
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8">
                {active.groups.map((group) => (
                  <div key={group.title} className="mb-6 break-inside-avoid">
                    <div className="text-sm font-extrabold mb-2" style={{ color: ACCENT }}>{group.title}</div>
                    {group.items && (
                      <ul className="space-y-1.5">
                        {group.items.map((it) => (
                          <li key={it}>
                            <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">{it}</Link>
                          </li>
                        ))}
                        {group.more && (
                          <li><Link href="#" className="text-sm font-semibold" style={{ color: "#2563eb" }}>» meer</Link></li>
                        )}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100" style={{ backgroundColor: "#f7fbf6" }}>
              <div className="max-w-7xl mx-auto px-6 py-3">
                <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-bold hover:gap-2.5 transition-all" style={{ color: ACCENT }}>
                  Bekijk alle {active.label.toLowerCase()}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
