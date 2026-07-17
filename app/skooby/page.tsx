"use client";
import { useState } from "react";
import Link from "next/link";
import SkoobyHeader, { NAV_CATS } from "./components/SkoobyHeader";
import SkoobyLogo from "./components/SkoobyLogo";
import { catImage } from "./data/categories";

// Skooby brandkleuren
// #0b6b5a  groen-donker   #16a085  groen
// #f28c28  oranje         #f6b44b  geel
const GREEN_DARK = "#0b6b5a";
const GREEN_DEEP = "#083b32";
const ACCENT = "#f28c28";
const ACCENT_GRAD = "linear-gradient(135deg,#f28c28,#f6b44b)";

const STATS = [
  { value: "25.000+", label: "Producten", icon: "box" },
  { value: "25", label: "Sellers", icon: "shop" },
  { value: "1000+", label: "Merken", icon: "tag" },
];

const POPULAR_SEARCHES = [
  "Hondenvoer", "Kattenvoer", "Kattenbakvulling", "Hondenspeeltjes", "Vogelvoer",
];

const DEALS = [
  {
    brand: "Vet Expert",
    title: "RAW PALEO Pâte Mini Puppy Lamb — natvoer voor honden — 150g",
    price: "€ 1,99",
    emoji: "🐶",
  },
  {
    brand: "Hilton",
    title: "Snack voor honden Hilton Rundvlees 30 g",
    price: "€ 1,49",
    emoji: "🦴",
  },
  {
    brand: "SuperFish",
    title: "Aqua Home 40 aquarium met filter en verlichting — 25L",
    price: "€ 59,95",
    emoji: "🐠",
  },
  {
    brand: "Trixie",
    title: "Krabpaal Baza met speelhuisje — 90 cm — grijs",
    price: "€ 34,99",
    emoji: "🐱",
  },
];

const BRANDS = [
  { name: "Reddingo", count: "1.112" },
  { name: "vidaXL", count: "943" },
  { name: "Trixie", count: "847" },
  { name: "Gebr de boon", count: "777" },
  { name: "SuperFish", count: "636" },
  { name: "Van der Meer", count: "426" },
  { name: "Bullride", count: "277" },
  { name: "Vitakraft", count: "252" },
];

// Eigen lijn-iconen voor de statistieken
function StatIcon({ name }: { name: string }) {
  const common = {
    fill: "none" as const, stroke: GREEN_DARK, strokeWidth: 1.8,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24", className: "w-5 h-5",
  };
  if (name === "shop") {
    return (
      <svg {...common}>
        <path d="M4 4h16l1.1 4.1a2.4 2.4 0 01-4.7.5 2.4 2.4 0 01-4.7 0 2.4 2.4 0 01-4.7 0 2.4 2.4 0 01-4.7-.5L4 4z" />
        <path d="M5 10.2V20h14v-9.8" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }
  if (name === "tag") {
    return (
      <svg {...common}>
        <path d="M11.6 3H4v7.6l8.9 8.9a2 2 0 002.83 0l4.77-4.77a2 2 0 000-2.83L11.6 3z" />
        <circle cx="7.6" cy="7.6" r="1.4" />
      </svg>
    );
  }
  // box / producten
  return (
    <svg {...common}>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

// Neutrale foto-placeholder voor uitgelichte producten
function ProductPlaceholder() {
  return (
    <div className="h-40 flex flex-col items-center justify-center gap-2" style={{ backgroundColor: "#eef2ef" }}>
      <svg className="w-11 h-11" fill="none" stroke="#b6c5bd" strokeWidth={1.6} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <circle cx="8.5" cy="9" r="1.6" />
        <path d="M4 17.5l4.8-4.8 3.4 3.4 3.2-3.2L20 16.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[11px] font-semibold tracking-wide" style={{ color: "#9fb0a8" }}>Productfoto</span>
    </div>
  );
}

export default function SkoobyHome() {
  const [cartCount] = useState(0);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <SkoobyHeader cartCount={cartCount} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0a4a3a" }}>
        {/* foto-achtergrond (hond & kat) */}
        <img
          src="/skooby/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 55%" }}
        />
        {/* groene overlay voor leesbaarheid */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(8,43,37,0.92) 0%, rgba(11,85,68,0.82) 48%, rgba(26,138,99,0.66) 100%)" }}
        />
        {/* warme glow rechts */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(58% 68% at 82% 40%, rgba(246,180,75,0.22), transparent 62%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-white/90 mb-8"
            style={{ backgroundColor: "rgba(242,140,40,0.15)", border: "1px solid rgba(242,140,40,0.4)" }}
          >
            <span style={{ color: ACCENT }}>●</span> Dé online dierenwinkel voor <b className="text-white">jouw huisdier</b>
          </span>
          <h1 className="text-white font-extrabold leading-[1.05] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Alles voor een{" "}
            <span style={{ background: ACCENT_GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>blij dier</span>
          </h1>
          <p className="text-white/70 text-lg mb-10">
            Shop dierenbenodigdheden voor <b className="text-white/90">honden, katten, vogels, vissen, knaagdieren en paarden</b>.
          </p>

          {/* zoekbalk */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="search"
              placeholder="Zoek hondenvoer, kattenbakvulling, speeltjes…"
              className="w-full rounded-full py-4 pl-12 pr-32 text-sm text-gray-800 bg-white shadow-xl focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
            <button className="absolute right-2 top-2 bottom-2 px-6 rounded-full text-white text-sm font-bold hover:opacity-90 transition-opacity" style={{ background: ACCENT_GRAD }}>
              Zoeken
            </button>
          </div>

          {/* populaire zoekopdrachten */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-sm text-white/50 mr-1">Populair:</span>
            {POPULAR_SEARCHES.map((s) => (
              <button key={s} className="rounded-full px-3.5 py-1.5 text-sm text-white/80 hover:text-white transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-x divide-gray-100">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3 px-6 py-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(22,160,133,0.1)" }}>
                <StatIcon name={s.icon} />
              </div>
              <div>
                <div className="text-lg font-extrabold" style={{ color: GREEN_DARK }}>{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIEËN ── */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN_DARK }}>Shop per dier of categorie</h2>
            <p className="text-gray-500 mt-1">Kies je huisdier en vind alles wat je nodig hebt.</p>
          </div>
          <Link href="#" className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold border-2 hover:bg-orange-50 transition-colors" style={{ borderColor: ACCENT, color: ACCENT }}>
            Alle categorieën
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {NAV_CATS.map((cat) => (
            <Link
              key={cat.label}
              href="#"
              className="group relative rounded-2xl overflow-hidden block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={catImage(cat.label)}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,43,37,0.9) 0%, rgba(8,43,37,0.35) 40%, rgba(8,43,37,0) 68%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-bold text-lg leading-tight drop-shadow">{cat.label}</div>
                <div className="text-white/80 text-sm">{cat.count} producten</div>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── UITGELICHTE DEALS ── */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN_DARK }}>Uitgelichte deals</h2>
          <Link href="#" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold border-2 hover:bg-orange-50 transition-colors" style={{ borderColor: ACCENT, color: ACCENT }}>
            Alle producten
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {DEALS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <ProductPlaceholder />
              <div className="p-4">
                <div className="text-xs font-bold mb-1" style={{ color: ACCENT }}>{d.brand}</div>
                <div className="text-sm font-semibold text-gray-800 leading-snug mb-3 line-clamp-2" style={{ minHeight: "2.5rem" }}>{d.title}</div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extrabold" style={{ color: GREEN_DARK }}>{d.price}</div>
                  <button className="rounded-full px-4 py-1.5 text-white text-sm font-bold hover:opacity-90 transition-opacity" style={{ background: ACCENT_GRAD }}>
                    Bekijk
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── POPULAIRE MERKEN ── */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN_DARK }}>Populaire merken</h2>
          <Link href="#" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold border-2 hover:bg-orange-50 transition-colors" style={{ borderColor: ACCENT, color: ACCENT }}>
            Alle merken
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BRANDS.map((b) => (
            <Link key={b.name} href="#" className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4 hover:shadow-md hover:border-orange-200 transition-all bg-white">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-lg flex-shrink-0" style={{ backgroundColor: "rgba(22,160,133,0.1)", color: GREEN_DARK }}>
                {b.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-800 leading-tight">{b.name}</div>
                <div className="text-xs text-gray-500">{b.count} producten</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WEBSHOP-CTA ── */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: `linear-gradient(120deg, ${GREEN_DEEP}, ${GREEN_DARK})` }}>
          <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #16a085, transparent 70%)" }} />
          <div className="relative">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-bold mb-4" style={{ backgroundColor: "rgba(242,140,40,0.2)", color: "#f6b44b" }}>
              Voor webshops
            </span>
            <h2 className="text-white text-3xl font-extrabold mb-2">Jouw dierenwinkel op Skooby?</h2>
            <p className="text-white/70 max-w-md">Bereik duizenden shoppers en verhoog je omzet. Al 25 sellers gingen je voor.</p>
          </div>
          <Link href="#" className="relative flex-shrink-0 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white font-bold hover:opacity-90 transition-opacity" style={{ background: ACCENT_GRAD }}>
            Bekijk pricing
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="text-white" style={{ backgroundColor: GREEN_DEEP }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <SkoobyLogo variant="light" size={40} href={undefined} />
              <p className="text-white/60 text-sm mt-4 max-w-sm">
                Alles voor honden, katten en andere huisdieren. Blij dier, blij mens.
              </p>
            </div>
            <div>
              <div className="font-bold mb-3">Skooby</div>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white">Vergelijker</Link></li>
                <li><Link href="#" className="hover:text-white">Merken</Link></li>
                <li><Link href="/skooby/over-ons" className="hover:text-white">Over ons</Link></li>
                <li><Link href="/skooby/over-ons" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-3">Info</div>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white">Algemene voorwaarden</Link></li>
                <li><Link href="#" className="hover:text-white">Privacyverklaring</Link></li>
                <li><Link href="#" className="hover:text-white">Meld je website aan</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/50">
            <span>© 2026 SDeal B.V. · Alle rechten voorbehouden</span>
            <span>Blij dier, blij mens.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
