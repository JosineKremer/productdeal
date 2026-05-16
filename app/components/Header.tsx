"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Sports & Outdoor", href: "/categories/sports-outdoor" },
  { label: "Wonen & Slapen", href: "/categories/wonen-slapen" },
  { label: "Mode", href: "/categories/mode" },
  { label: "Baby & Kind", href: "/categories/baby-kind" },
  { label: "Dier, Tuin & Klussen", href: "/categories/dier-tuin-klussen" },
  { label: "Mooi & Gezond", href: "/categories/mooi-gezond" },
  { label: "Brands", href: "/brands" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div
        style={{ backgroundColor: "#173441" }}
        className="hidden md:block text-white text-xs py-1.5 px-4"
      >
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
        <Link href="/" className="flex-shrink-0">
          <Logo className="h-9 w-auto" />
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek naar producten, merken of categorieën..."
              className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none transition-colors"
              style={{
                borderColor: query ? "#00ca41" : "#e2e8f0",
              }}
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

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#173441" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Category nav */}
      <nav
        style={{ backgroundColor: "#173441" }}
        className="hidden md:block"
      >
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

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t bg-white">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium border-b"
              style={{ color: "#173441" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
