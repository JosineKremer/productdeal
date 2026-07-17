"use client";
import { useState } from "react";
import Link from "next/link";
import NutritionLogo from "./NutritionLogo";
import { CATEGORIES } from "../data/categories";

const LANGUAGES = [
  { code: "NL", label: "Nederlands", flag: "🇳🇱" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
];

// Her-geëxporteerd zodat de homepage dezelfde bron gebruikt
export { CATEGORIES as NAV_CATS };

const DARK = "#173441";   // topbar + categoriebalk (donkerblauw, sluit aan op logo "deal")
const ACCENT = "#e2603f";
const ACCENT_GRAD = "linear-gradient(135deg,#e2603f,#f5ae4c)";

interface Props {
  cartCount?: number;
  cartTotal?: number;
  favoritesCount?: number;
  favoritesActive?: boolean;
}

export default function NutritionHeader({
  cartCount = 0,
  cartTotal,
  favoritesCount,
  favoritesActive = false,
}: Props) {
  const [query, setQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ── Topbar ── */}
      <div className="hidden md:block text-white text-xs" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1.5">
          <div className="flex items-center gap-5 text-white/75">
            <span className="flex items-center gap-1.5 font-semibold text-white/90 whitespace-nowrap">
              <span style={{ color: "#f5ae4c" }}>●</span> Jouw dagelijkse dosis vitaliteit
            </span>
            <span className="hidden lg:inline whitespace-nowrap">Gratis verzending vanaf € 30</span>
            <span className="hidden lg:inline whitespace-nowrap">Voor 22:00 besteld, morgen in huis</span>
          </div>
          <div className="flex items-center gap-5 text-white/80">
            <Link href="/nutritiondeal/over-ons" className="hover:text-white">Over ons</Link>
            <Link href="/nutritiondeal/over-ons" className="hover:text-white">Contact</Link>
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
                      style={{ backgroundColor: selectedLang.code === lang.code ? "rgba(226,96,63,0.08)" : undefined }}
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
        <NutritionLogo variant="dark" size={38} />

        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek op product, merk, categorie of EAN…"
              className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none transition-colors"
              style={{ borderColor: query ? ACCENT : "#e2e8f0" }}
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
          href="/nutritiondeal/favorieten"
          className="flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
          style={{
            borderColor: favoritesActive ? ACCENT : "#e2e8f0",
            backgroundColor: favoritesActive ? "rgba(226,96,63,0.05)" : "white",
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
          href="/nutritiondeal/winkelwagen"
          className="relative flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
          style={{ borderColor: cartCount > 0 ? ACCENT : "#e2e8f0", backgroundColor: cartCount > 0 ? "rgba(226,96,63,0.05)" : "white" }}
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

      {/* ── Categoriebalk ── */}
      <div className="hidden md:block" style={{ backgroundColor: DARK }}>
        <nav className="max-w-7xl mx-auto px-3">
          <div className="flex flex-wrap items-center">
            {CATEGORIES.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="text-white/90 text-sm font-medium px-3.5 py-2.5 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#"
              className="text-sm font-semibold px-3.5 py-2.5 hover:bg-white/10 transition-colors whitespace-nowrap"
              style={{ color: "#f5ae4c" }}
            >
              Merken
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
