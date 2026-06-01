"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Sportdeal brand colors
// #e2603f  oranje
// #f5ae4c  geel
// #173441  donkerblauw

const CATEGORIES = [
  { label: "Fitness & Gym", href: "#", count: "42.380", image: "/cat-compressie.jpg", gradient: "linear-gradient(135deg,#e2603f,#f5ae4c)" },
  { label: "Fietsen", href: "#", count: "38.120", image: "/categories/fietsen.jpg", gradient: "linear-gradient(135deg,#173441,#2a5470)" },
  { label: "Outdoor & Kamperen", href: "#", count: "29.540", image: "/categories/camping-hangmat.jpg", gradient: "linear-gradient(135deg,#1b693d,#38a169)" },
  { label: "Watersport", href: "#", count: "14.860", image: "/categories/watersport.jpg", gradient: "linear-gradient(135deg,#0277bd,#4fc3f7)" },
  { label: "Sportkleding", href: "#", count: "55.210", image: "/cat-shirt.jpg", gradient: "linear-gradient(135deg,#b71c1c,#e53e3e)" },
  { label: "Vechtsporten", href: "#", count: "8.450", image: "/categories/vechtsporten.jpg", gradient: "linear-gradient(135deg,#4a148c,#9c27b0)" },
  { label: "Racketsporten", href: "#", count: "12.730", image: "/categories/racketsporten.jpg", gradient: "linear-gradient(135deg,#e65100,#ffb74d)" },
  { label: "Teamsport", href: "#", count: "19.280", image: "/categories/teamsport.jpg", gradient: "linear-gradient(135deg,#1a237e,#3949ab)" },
];

const SPORT_BRANDS = [
  { name: "Nike", domain: "nike.com", count: "8.552" },
  { name: "Adidas", domain: "adidas.com", count: "16.274" },
  { name: "Puma", domain: "puma.com", count: "7.182" },
  { name: "Under Armour", domain: "underarmour.com", count: "3.410" },
  { name: "Asics", domain: "asics.com", count: "4.890" },
  { name: "New Balance", domain: "newbalance.com", count: "5.230" },
  { name: "Garmin", domain: "garmin.com", count: "2.140" },
  { name: "Decathlon", domain: "decathlon.nl", count: "20.716" },
];

const DEALS = [
  { title: "Nike Air Zoom Pegasus 40", brand: "Nike", price: "€ 94,99", was: "€ 129,99", tag: "−27%", badge: "Deal", img: "/cat-schoenen.jpg" },
  { title: "Adidas Tiro 23 Trainingsset", brand: "Adidas", price: "€ 54,99", was: "€ 79,95", tag: "−31%", badge: "Sale", img: "/cat-shirt.jpg" },
  { title: "Garmin Forerunner 255", brand: "Garmin", price: "€ 249,00", was: null, tag: "Populair", badge: "Populair", img: "/cat-compressie.jpg" },
  { title: "Puma Keepershandschoenen", brand: "Puma", price: "€ 22,95", was: "€ 29,99", tag: "−23%", badge: "Deal", img: "/cat-hoodie.jpg" },
];

const NAV_CATS = [
  { label: "Fitness & Gym", href: "#" },
  { label: "Fietsen", href: "#" },
  { label: "Outdoor & Kamperen", href: "#" },
  { label: "Watersport", href: "#" },
  { label: "Sportkleding", href: "#" },
  { label: "Vechtsporten", href: "#" },
  { label: "Racketsporten", href: "#" },
  { label: "Teamsport", href: "#" },
  { label: "Merken", href: "#" },
];

const LANGUAGES = [
  { code: "NL", label: "Nederlands", flag: "🇳🇱" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
];

export default function SportdealV2() {
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">

        {/* Top bar */}
        <div className="hidden md:block text-white text-xs py-1.5 px-4" style={{ backgroundColor: "#173441" }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-5 opacity-80">
              <span>Minimaal 14 dagen herroepingstermijn</span>
              <span>Lokale klantenservice</span>
            </div>
            <div className="flex items-center gap-5 opacity-80">
              <Link href="#" className="hover:opacity-100 transition-opacity">Over ons</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Contact</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Webshop aansluiten</Link>
              <div className="relative">
                <button onClick={() => setLangOpen((o) => !o)}
                  className="flex items-center gap-1.5 border border-white/30 rounded-full px-2.5 py-0.5 hover:border-white/60 transition-colors text-white text-xs font-semibold">
                  <span>{selectedLang.flag}</span>
                  <span>{selectedLang.code}</span>
                  <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl overflow-hidden z-50" style={{ border: "1px solid #f0f0f0" }}>
                    {LANGUAGES.map((lang) => (
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

        {/* Main header: logo + zoekbalk */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/sdeal-v2" className="flex-shrink-0">
            <Image src="/sportdeal-logo.svg" alt="Sportdeal" width={160} height={42} className="h-9 w-auto" priority />
          </Link>

          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek naar producten, merken of categorieën..."
                className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none transition-colors"
                style={{ borderColor: query ? "#e2603f" : "#e2e8f0" }}
              />
              <button
                className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity flex items-center"
                style={{ background: "linear-gradient(135deg, #e2603f, #f5ae4c)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Favorieten */}
          <button className="flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
            style={{ borderColor: "#e2e8f0", backgroundColor: "white" }}>
            <svg className="w-5 h-5" fill="none" stroke="#173441" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs font-bold hidden sm:block" style={{ color: "#173441" }}>Favorieten</span>
          </button>
          {/* Winkelwagen */}
          <button className="relative flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
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
              Winkelwagen
            </span>
          </button>
        </div>

        {/* Categorieënbalk */}
        <nav className="hidden md:block" style={{ backgroundColor: "#173441" }}>
          <div className="max-w-7xl mx-auto px-4 flex">
            {NAV_CATS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-sm font-medium px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ── HERO: zomerbanner met afbeelding + tekst ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "580px" }}>

        {/* Outdoor foto als volledige achtergrond */}
        <div className="absolute inset-0">
          <img
            src="/categories/camping-hangmat.jpg"
            alt="Kamperen en outdoor"
            className="w-full h-full object-cover object-center"
          />
          {/* Donkere gradiënt over de foto zodat tekst leesbaar is */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(23,52,65,0.95) 0%, rgba(23,52,65,0.80) 45%, rgba(23,52,65,0.25) 100%)" }} />
        </div>

        {/* Zon-gloed decoratie */}
        <div className="absolute -top-20 right-32 w-96 h-96 rounded-full opacity-[0.15] pointer-events-none"
          style={{ background: "radial-gradient(circle, #f5ae4c 0%, transparent 70%)" }} />

        {/* Tekst links */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center py-16 lg:py-24">
          <div className="max-w-xl">

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] text-white mb-6 tracking-tight">
              De beste<br />
              <span style={{
                background: "linear-gradient(90deg, #f5ae4c, #e2603f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                sportdeal
              </span><br />
              altijd gevonden.
            </h1>

            <p className="text-white/65 text-lg mb-10 leading-relaxed">
              Vergelijk <strong className="text-white/90">300+ webshops</strong> en vind altijd<br className="hidden md:block" />
              de laagste prijs op sport, outdoor & meer.
            </p>

            {/* CTA knoppen */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="https://www.sportdeal.nl/outdoor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-2xl text-white font-black text-sm transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #e2603f, #f5ae4c)" }}
              >
                Bekijk Outdoor →
              </Link>
              <Link
                href="#"
                className="px-7 py-4 rounded-2xl font-bold text-sm transition-all hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
              >
                Alle categorieën
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {[["150+", "Webshops"], ["500+", "Merken"], ["250K+", "Producten"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-2xl font-black text-white">{val}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats balk ── */}
      <section className="border-b" style={{ backgroundColor: "#fff", borderColor: "#e8ecef" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", val: "1,4 miljoen+", lbl: "Producten" },
              { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", val: "300+", lbl: "Webshops" },
              { icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z", val: "10.000+", lbl: "Merken" },
              { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", val: "7", lbl: "Landen" },
            ].map(({ icon, val, lbl }) => (
              <div key={lbl} className="flex items-center gap-4 px-6 py-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(226,96,63,0.08)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="#e2603f" viewBox="0 0 24 24" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-black leading-tight" style={{ color: "#173441" }}>{val}</div>
                  <div className="text-sm text-gray-400 leading-tight">{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">

        {/* ── Categorieën ── */}
        <section className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Categorieën</h2>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md hover:gap-3"
              style={{ backgroundColor: "rgba(226,96,63,0.08)", color: "#e2603f", border: "1.5px solid rgba(226,96,63,0.3)" }}>
              Alle categorieën
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link key={cat.label} href={cat.href}
                className="group relative overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{ aspectRatio: "4/3" }}>
                {cat.image ? (
                  <img src={cat.image} alt={cat.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0" style={{ background: cat.gradient }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="block font-bold text-white text-sm leading-tight drop-shadow">{cat.label}</span>
                  <span className="text-white/70 text-xs mt-0.5 block">{cat.count} producten</span>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Uitgelichte deals ── */}
        <section className="py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Uitgelichte deals</h2>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md hover:gap-3"
              style={{ backgroundColor: "rgba(226,96,63,0.08)", color: "#e2603f", border: "1.5px solid rgba(226,96,63,0.3)" }}>
              Alle deals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEALS.map((deal) => (
              <Link key={deal.title} href="#"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-orange-100 flex flex-col hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img src={deal.img} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="text-xs font-semibold mb-1" style={{ color: "#e2603f" }}>{deal.brand}</div>
                  <h3 className="font-semibold text-sm leading-snug mb-3 group-hover:underline line-clamp-2" style={{ color: "#173441" }}>
                    {deal.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold" style={{ color: "#173441" }}>{deal.price}</span>
                      {deal.was && <span className="text-xs text-gray-400 line-through ml-2">{deal.was}</span>}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                      style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                      Bekijk
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Populaire merken ── */}
        <section className="py-8 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Populaire merken</h2>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md hover:gap-3"
              style={{ backgroundColor: "rgba(226,96,63,0.08)", color: "#e2603f", border: "1.5px solid rgba(226,96,63,0.3)" }}>
              Alle merken
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SPORT_BRANDS.map((brand) => (
              <Link key={brand.name} href="#"
                className="group bg-white rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-orange-100">
                <div className="w-20 h-14 flex items-center justify-center mb-3">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=64`}
                    alt={brand.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="font-semibold text-sm" style={{ color: "#173441" }}>{brand.name}</span>
                <span className="text-xs text-gray-400 mt-0.5">{brand.count} producten</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Jouw webshop op Sdeal? ── */}
        <section className="mb-10">
          <div className="rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #0d2530 0%, #173441 100%)" }}>
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "#f5ae4c" }} />
            <div className="absolute -bottom-10 right-32 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: "#f5ae4c" }} />
            <div className="relative px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: "rgba(245,174,76,0.2)", color: "#f5ae4c" }}>
                  Voor webshops
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                  Jouw webshop op Sdeal?
                </h2>
                <p className="opacity-75 max-w-md text-sm leading-relaxed">
                  Bereik dagelijks duizenden sporters. Al 300+ webshops gingen je voor en verhogen hun omzet.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="#"
                  className="bg-white font-bold px-8 py-3.5 rounded-full hover:shadow-xl transition-all hover:scale-105 text-sm"
                  style={{ color: "#e2603f" }}>
                  Bekijk pricing →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#0d2530" }} className="text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div className="max-w-xs">
              <Image src="/sportdeal-logo.svg" alt="Sportdeal" width={140} height={37} className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm text-white/50 leading-relaxed">
                De betrouwbare sportconnectie. Vergelijk sportproducten van 150+ webshops.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {[
                { title: "Service", links: ["Contact", "Over ons", "FAQ", "Vacatures"] },
                { title: "Zakelijk", links: ["Pakketten", "Koppelingen", "Word Partner"] },
                { title: "Landen", links: ["Nederland", "België", "Duitsland"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#f5ae4c" }}>{col.title}</h4>
                  <ul className="space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l}><Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <span>© 2026 SDeal BV · All rights reserved</span>
            <div className="flex gap-5">
              <Link href="#">Algemene voorwaarden</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
