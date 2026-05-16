"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Sports & Outdoor", href: "/categories/sports-outdoor", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />, color: "#1b693d" },
  { label: "Wonen & Slapen", href: "/categories/wonen-slapen", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />, color: "#1565c0" },
  { label: "Mode", href: "/categories/mode", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />, color: "#880e4f" },
  { label: "Baby & Kind", href: "/categories/baby-kind", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />, color: "#e65100" },
  { label: "Dier, Tuin & Klussen", href: "/categories/dier-tuin-klussen", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />, color: "#4a148c" },
  { label: "Mooi & Gezond", href: "/categories/mooi-gezond", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, color: "#b71c1c" },
  { label: "Brands", href: "/brands", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />, color: "#173441" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Top bar */}
        <div style={{ backgroundColor: "#173441" }} className="hidden md:block text-white text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="opacity-70">Vergelijk de beste deals van 1000+ winkels</span>
            <div className="flex gap-5 opacity-80">
              <Link href="/over-ons" className="hover:opacity-100 transition-opacity">Over ons</Link>
              <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
              <Link href="/pricing" className="hover:opacity-100 transition-opacity">Pricing</Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <Logo className="h-9 w-auto" />
          </Link>

          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek naar producten, merken of categorieën..."
                className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none transition-colors"
                style={{ borderColor: query ? "#00ca41" : "#e2e8f0" }}
              />
              <button
                style={{ backgroundColor: "#00ca41" }}
                className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: "#173441", backgroundColor: mobileOpen ? "#f0f4f8" : "transparent" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Desktop category nav */}
        <nav style={{ backgroundColor: "#173441" }} className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-sm font-medium px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Fullscreen mobile menu — buiten <header> zodat het niet sticky meescrolt */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col" style={{ backgroundColor: "#173441" }}>
          {/* Header van het menu */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Logo className="h-8 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigatie-items */}
          <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Categorieën</p>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-colors hover:bg-white/10 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}99` }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <span className="text-white font-semibold text-base">{item.label}</span>
                <svg className="w-4 h-4 text-white/30 ml-auto group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Footer van het menu */}
          <div className="px-5 py-5 border-t border-white/10 space-y-2">
            {[{ label: "Over ons", href: "/over-ons" }, { label: "Contact", href: "/contact" }, { label: "Pricing", href: "/pricing" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/60 text-sm hover:text-white transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
