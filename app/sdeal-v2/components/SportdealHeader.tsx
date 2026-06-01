"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LANGUAGES = [
  { code: "NL", label: "Nederlands", flag: "🇳🇱" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
];

const NAV_CATS = [
  {
    label: "Fitness & Gym", href: "#",
    subs: ["Fitnessapparatuur", "Gewichten & Dumbbells", "Yogamatten", "Crossfit", "Spinning", "Bokszakken", "Supplementen", "Sportschoenen fitness"],
  },
  {
    label: "Fietsen", href: "#",
    subs: ["Racefietsen", "Mountainbikes", "E-bikes", "Stads- & toerfietsen", "Kinderfietsen", "Fietsaccessoires", "Fietskleding", "Fietscomputers & GPS"],
  },
  {
    label: "Outdoor & Kamperen", href: "#",
    subs: ["Tenten", "Slaapzakken", "Rugzakken", "Kampeerkeukens", "Hangmatten", "Verlichting", "Klimmen & abseilen", "Wandelschoenen"],
  },
  {
    label: "Watersport", href: "#",
    subs: ["Zwemmen", "Surfen", "Kajakken & kanoën", "Duiken", "Kitesurfen", "Stand-up paddling", "Roeien", "Zwemkleding"],
  },
  {
    label: "Sportkleding", href: "#",
    subs: ["Hardloopkleding", "Trainingsbroeken", "Sportshirts", "Sporttassen", "Compressiekleding", "Jassen & vesten", "Sokken & ondergoed", "Sportschoenen"],
  },
  {
    label: "Vechtsporten", href: "#",
    subs: ["Boksen", "MMA & grappling", "Judo & jiu-jitsu", "Karate", "Taekwondo", "Kickboksen", "Bescherming", "Bokshandschoenen"],
  },
  {
    label: "Racketsporten", href: "#",
    subs: ["Tennis", "Padel", "Badminton", "Squash", "Tennisrackets", "Padelrackets", "Ballen", "Racketschoenen"],
  },
  {
    label: "Teamsport", href: "#",
    subs: ["Voetbal", "Basketball", "Volleybal", "Hockey", "Handbal", "Rugby", "Baseball & softball", "Teamkleding"],
  },
  {
    label: "Merken", href: "#",
    subs: ["Nike", "Adidas", "Puma", "Asics", "New Balance", "Garmin", "Decathlon", "Under Armour"],
  },
];

interface Props {
  cartCount?: number;
  cartTotal?: number;
  favoritesCount?: number;
  favoritesActive?: boolean;
}

export default function SportdealHeader({ cartCount = 0, cartTotal, favoritesCount, favoritesActive = false }: Props) {
  const [query, setQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* Topbar */}
      <div className="hidden md:block text-white text-xs py-1.5 px-4" style={{ backgroundColor: "#173441" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5 opacity-80">
            <span>Minimaal 14 dagen herroepingstermijn</span>
            <span>Lokale klantenservice</span>
          </div>
          <div className="flex items-center gap-5 opacity-80">
            <Link href="/sdeal-v2/over-ons" className="hover:opacity-100">Over ons</Link>
            <Link href="/sdeal-v2/over-ons" className="hover:opacity-100">Contact</Link>
            <Link href="#" className="hover:opacity-100">Webshop aansluiten</Link>
            <div className="relative">
              <button onClick={() => setLangOpen(o => !o)}
                className="flex items-center gap-1.5 border border-white/30 rounded-full px-2.5 py-0.5 text-white text-xs font-semibold hover:border-white/60 transition-colors">
                <span>{selectedLang.flag}</span>
                <span>{selectedLang.code}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl overflow-hidden z-50" style={{ border: "1px solid #f0f0f0" }}>
                  {LANGUAGES.map(lang => (
                    <button key={lang.code} onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      style={{ backgroundColor: selectedLang.code === lang.code ? "rgba(226,96,63,0.05)" : undefined }}>
                      <span className="text-xl">{lang.flag}</span>
                      <span className="flex-1 text-sm font-semibold text-left" style={{ color: "#173441" }}>{lang.label}</span>
                      <span className="text-xs text-gray-400 font-bold">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Logo + zoekbalk + knoppen */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href="/sdeal-v2" className="flex-shrink-0">
          <Image src="/sportdeal-logo.svg" alt="Sportdeal" width={160} height={42} className="h-9 w-auto" priority />
        </Link>
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative">
            <input type="search" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Zoek naar producten, merken of categorieën..."
              className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none transition-colors"
              style={{ borderColor: query ? "#e2603f" : "#e2e8f0" }} />
            <button className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white flex items-center hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Favorieten */}
        <Link href="/sdeal-v2/favorieten"
          className="flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
          style={{
            borderColor: favoritesActive ? "#e2603f" : "#e2e8f0",
            backgroundColor: favoritesActive ? "rgba(226,96,63,0.05)" : "white",
          }}>
          <svg className="w-5 h-5" fill={favoritesActive ? "#e2603f" : "none"} stroke="#e2603f" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs font-bold hidden sm:block" style={{ color: favoritesActive ? "#e2603f" : "#173441" }}>
            {favoritesActive && favoritesCount !== undefined ? `${favoritesCount} favorieten` : "Favorieten"}
          </span>
        </Link>

        {/* Winkelwagen */}
        <Link href="/sdeal-v2/winkelwagen"
          className="relative flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
          style={{ borderColor: cartCount > 0 ? "#e2603f" : "#e2e8f0", backgroundColor: cartCount > 0 ? "rgba(226,96,63,0.05)" : "white" }}>
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke={cartCount > 0 ? "#e2603f" : "#173441"} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-white text-[9px] font-black flex items-center justify-center"
                style={{ backgroundColor: "#e2603f" }}>{cartCount}</span>
            )}
          </div>
          <span className="text-xs font-bold hidden sm:block" style={{ color: cartCount > 0 ? "#e2603f" : "#173441" }}>
            {cartCount > 0 && cartTotal ? `€ ${cartTotal}` : "Winkelwagen"}
          </span>
        </Link>
      </div>

      {/* Categorieënbalk met dropdowns */}
      <nav className="hidden md:block relative" style={{ backgroundColor: "#173441" }}>
        <div className="max-w-7xl mx-auto px-4 flex">
          {NAV_CATS.map(item => (
            <div key={item.label} className="relative"
              onMouseEnter={() => setActiveNav(item.label)}
              onMouseLeave={() => setActiveNav(null)}>

              {/* Nav link */}
              <Link href={item.href}
                className="flex items-center gap-1 text-white text-sm font-medium px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap"
                style={{ backgroundColor: activeNav === item.label ? "rgba(255,255,255,0.1)" : undefined }}>
                {item.label}
                <svg className={`w-3 h-3 opacity-60 transition-transform duration-200 ${activeNav === item.label ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown */}
              {activeNav === item.label && (
                <div className="absolute top-full left-0 bg-white rounded-b-2xl shadow-2xl z-50 overflow-hidden"
                  style={{ minWidth: "200px", border: "1px solid #f0f0f0", borderTop: "none" }}>
                  <div className="p-2">
                    {item.subs.map(sub => (
                      <Link key={sub} href="#"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors group">
                        <svg className="w-3 h-3 text-gray-300 group-hover:text-orange-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {sub}
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-50" style={{ backgroundColor: "#fafafa" }}>
                    <Link href="#" className="text-xs font-bold flex items-center gap-1 hover:underline"
                      style={{ color: "#e2603f" }}>
                      Bekijk alle {item.label.toLowerCase()}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
