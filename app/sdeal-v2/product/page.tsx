"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

const COLORS = [
  { name: "Zwart", hex: "#1a1a1a" },
  { name: "Bordeaux", hex: "#6b1024" },
  { name: "Navy", hex: "#1e3a5f" },
  { name: "Grijs", hex: "#9ca3af" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const PRODUCT_IMAGES = [
  "/cat-shirt.jpg",
  "/cat-hoodie.jpg",
  "/cat-compressie.jpg",
  "/cat-broek.jpg",
  "/cat-sporttas.jpg",
];

const PRICE = 39.29;
const PRICE_WAS = 49.99;

const SPECS = [
  { label: "SKU", value: "AHLWTMRZ" },
  { label: "Merk", value: "Umbro" },
  { label: "EAN Code (GTIN)", value: "5063107742902" },
  { label: "Beschikbare maten", value: "XS · S · M · L · XL · XXL" },
  { label: "Kleur", value: "Zwart" },
  { label: "Materiaal", value: "Polyester, Elastaan" },
  { label: "Stoftype", value: "Frans Badstof" },
  { label: "Halslijn", value: "Crew Neck, Geribd" },
  { label: "Manchet", value: "Elastisch, Geribd" },
  { label: "Mouwtype", value: "Lang" },
  { label: "Zoom", value: "Elastisch, Geribd" },
  { label: "Sluiting", value: "Trek aan de achterkant" },
];

const PRICE_HISTORY = [49.99, 49.99, 47.50, 44.95, 39.29, 41.99, 39.29, 39.29, 43.50, 42.00, 39.29, 39.29];
const MONTHS = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

const SIMILAR = [
  { id: 1, title: "Adidas Tiro 23 Trainingsshirt Heren", brand: "Adidas", price: 29.99, was: 44.99, img: "/cat-shirt.jpg" },
  { id: 2, title: "Nike Dri-FIT Park 20 Sweater", brand: "Nike", price: 44.99, was: 59.99, img: "/cat-hoodie.jpg" },
  { id: 3, title: "Puma Liga Casuals Hoody Heren", brand: "Puma", price: 34.95, was: 44.99, img: "/cat-hoodie.jpg" },
  { id: 4, title: "Under Armour Tech Crew Sweatshirt", brand: "Under Armour", price: 38.99, was: null, img: "/cat-shirt.jpg" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill={s <= Math.round(rating) ? "#210000" : "#e5e7eb"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductPage() {
  const [query, setQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState("Zwart");
  const [selectedSize, setSelectedSize] = useState("XXL");
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeChartPoint, setActiveChartPoint] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: "NL", label: "Nederlands", flag: "🇳🇱" });

  const LANGUAGES = [
    { code: "NL", label: "Nederlands", flag: "🇳🇱" },
    { code: "EN", label: "English", flag: "🇬🇧" },
    { code: "DE", label: "Deutsch", flag: "🇩🇪" },
    { code: "FR", label: "Français", flag: "🇫🇷" },
  ];

  // SVG price history chart
  const chartW = 560;
  const chartH = 110;
  const minP = Math.min(...PRICE_HISTORY) - 3;
  const maxP = Math.max(...PRICE_HISTORY) + 3;
  const toX = (i: number) => (i / (PRICE_HISTORY.length - 1)) * chartW;
  const toY = (p: number) => chartH - ((p - minP) / (maxP - minP)) * chartH;
  const linePath = PRICE_HISTORY.map((p, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(p).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${chartW},${chartH} L0,${chartH} Z`;

  const discount = Math.round((1 - PRICE / PRICE_WAS) * 100);

  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f5f7f9" }}>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
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
              {/* Taalselector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen((o) => !o)}
                  className="flex items-center gap-1.5 border border-white/30 rounded-full px-2.5 py-0.5 hover:border-white/60 transition-colors text-white text-xs font-semibold"
                >
                  <span>{selectedLang.flag}</span>
                  <span>{selectedLang.code}</span>
                  <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl overflow-hidden z-50" style={{ border: "1px solid #f0f0f0" }}>
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        style={{ backgroundColor: selectedLang.code === lang.code ? "rgba(140,18,34,0.05)" : undefined }}
                      >
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
                style={{ borderColor: query ? "#8c1222" : "#e2e8f0" }}
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity flex items-center"
                style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Verlanglijst */}
          <button className="relative flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
            style={{ borderColor: "#e2e8f0", backgroundColor: "white" }}>
            <svg className="w-5 h-5" fill="none" stroke="#173441" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs font-bold hidden sm:block" style={{ color: "#173441" }}>Favorieten</span>
          </button>
          {/* Winkelwagen */}
          <button className="relative flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
            style={{ borderColor: cartCount > 0 ? "#8c1222" : "#e2e8f0", backgroundColor: cartCount > 0 ? "rgba(140,18,34,0.05)" : "white" }}>
            <div className="relative">
              <svg className="w-5 h-5" fill="none" stroke={cartCount > 0 ? "#8c1222" : "#173441"} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-white text-[9px] font-black flex items-center justify-center"
                  style={{ backgroundColor: "#8c1222" }}>
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-bold hidden sm:block" style={{ color: cartCount > 0 ? "#8c1222" : "#173441" }}>
              {cartCount > 0 ? `€ ${(cartCount * 39.29).toFixed(2).replace(".", ",")}` : "Winkelwagen"}
            </span>
          </button>
        </div>
        <nav className="hidden md:block" style={{ backgroundColor: "#173441" }}>
          <div className="max-w-7xl mx-auto px-4 flex">
            {NAV_CATS.map((item) => (
              <Link key={item.label} href={item.href}
                className="text-white text-sm font-medium px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ── Breadcrumb ── */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          {["Home", "Sporten", "Sportkleding", "Sweaters & Hoodies"].map((crumb, i, arr) => (
            <span key={crumb} className="flex items-center gap-1.5">
              <Link href="#" className="hover:text-orange-500 transition-colors">{crumb}</Link>
              {i < arr.length - 1 && (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </span>
          ))}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-500 truncate max-w-xs">Umbro Heren Polyester Sweatshirt (XXL)</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-16">

        {/* ── Product hero ── */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-6 mb-6">

          {/* Gallery */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4">
            {/* Main image */}
            <div
              className="relative rounded-xl overflow-hidden bg-gray-50 cursor-zoom-in group"
              style={{ aspectRatio: "4/3" }}
              onClick={() => setLightbox(true)}
            >
              <img
                src={PRODUCT_IMAGES[activeImage]}
                alt="Umbro Heren Polyester Sweatshirt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Zoom hint */}
              <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 6v4m0 0v4m0-4h4m-4 0H7m14 5a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-gray-600">Vergroten</span>
              </div>
              {/* Nav arrows */}
              <button
                onClick={() => setActiveImage((i) => (i - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveImage((i) => (i + 1) % PRODUCT_IMAGES.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {/* Discount badge */}
              <div className="absolute top-3 left-3 text-white text-xs font-black px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "#8c1222" }}>
                −{discount}%
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {PRODUCT_IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all"
                  style={{ borderColor: activeImage === i ? "#8c1222" : "#e2e8f0" }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-4">

            {/* Brand + title + rating */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.google.com/s2/favicons?sz=24&domain=umbro.com"
                    alt="Umbro"
                    className="w-6 h-6 rounded"
                  />
                  <span className="text-sm font-bold" style={{ color: "#8c1222" }}>Umbro</span>
                </div>
                <button className="w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center hover:border-red-200 hover:text-red-400 transition-colors text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <h1 className="text-xl font-black leading-snug mb-3" style={{ color: "#173441" }}>
                Umbro Heren Polyester Sweatshirt (Zwart)
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={4.2} />
                <span className="text-xs text-gray-400">4,2 · 1.840 reviews</span>
              </div>
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black" style={{ color: "#8c1222" }}>€ {PRICE.toFixed(2).replace(".", ",")}</span>
                <span className="text-base text-gray-400 line-through">€ {PRICE_WAS.toFixed(2).replace(".", ",")}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: "#8c1222" }}>−{discount}%</span>
              </div>
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-green-600 font-semibold">Op voorraad</span>
                <span className="text-xs text-gray-400">· Voor 22:00 besteld, morgen in huis</span>
              </div>

              {/* Logistiek info */}
              <div className="rounded-xl p-4 mb-5 space-y-2.5" style={{ backgroundColor: "#f9fafb", border: "1px solid #f0f0f0" }}>
                {[
                  {
                    icon: "M5 13l4 4L19 7",
                    color: "#22c55e",
                    label: "Voorraad:",
                    value: "132",
                    bold: true,
                  },
                  {
                    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7",
                    color: "#22c55e",
                    label: "Levering:",
                    value: "komende donderdag",
                    bold: true,
                  },
                  {
                    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                    color: "#22c55e",
                    label: "Verkocht door:",
                    value: "Umbro",
                    bold: true,
                    rating: 4,
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "#22c55e",
                    label: "Op tijd geleverd:",
                    value: "90,65%",
                    bold: true,
                  },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2.5 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={row.color} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={row.icon} />
                    </svg>
                    <span className="text-gray-500">{row.label}</span>
                    <span className="font-bold" style={{ color: "#173441" }}>{row.value}</span>
                    {row.rating && (
                      <div className="flex items-center gap-0.5 ml-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill={s <= row.rating ? "#210000" : "#e5e7eb"}>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Colors */}
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Kleur: <span className="normal-case font-semibold text-gray-700">{selectedColor}</span>
                </p>
                <div className="flex gap-2">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      className="w-8 h-8 rounded-full border-2 transition-all"
                      style={{
                        backgroundColor: color.hex,
                        borderColor: selectedColor === color.name ? "#8c1222" : "transparent",
                        boxShadow: selectedColor === color.name ? "0 0 0 2px white, 0 0 0 4px #8c1222" : "0 0 0 1px #e2e8f0",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Maat: <span className="normal-case font-semibold text-gray-700">{selectedSize}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="px-3 py-1.5 rounded-lg text-sm font-semibold border-2 transition-all"
                      style={{
                        borderColor: selectedSize === size ? "#8c1222" : "#e2e8f0",
                        color: selectedSize === size ? "#8c1222" : "#6b7280",
                        backgroundColor: selectedSize === size ? "rgba(140,18,34,0.06)" : "white",
                      }}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aantal + winkelwagen */}
              <div className="flex gap-3 mb-3">
                <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-12 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors text-lg font-bold">
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-bold" style={{ color: "#173441" }}>{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-12 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors text-lg font-bold">
                    +
                  </button>
                </div>
                <button
                  onClick={() => setCartCount((n) => n + quantity)}
                  className="flex-1 py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  In winkelwagen
                </button>
              </div>
              <button className="w-full py-3 rounded-xl border-2 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                style={{ color: "#173441", borderColor: "#e2e8f0" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Toevoegen aan verlanglijst
              </button>
              {/* Betaalmethoden */}
              <div className="mt-4 pt-4 border-t border-gray-50">
                <p className="text-[10px] text-gray-400 mb-2">Veilig betalen met</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {["iDEAL", "Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
                    <span key={method} className="text-[10px] font-bold px-2.5 py-1.5 rounded-lg border border-gray-100 text-gray-500">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Minimaal 14 dagen retour" },
                  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", text: "Veilig betalen" },
                  { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "Meerdere betaalmethoden" },
                  { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", text: "Lokale klantenservice" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                    </svg>
                    <span className="text-xs text-gray-500">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Omschrijving ── */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 mb-6">
          <h2 className="text-base font-black mb-4" style={{ color: "#173441" }}>Omschrijving</h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              Het <strong>Umbro Heren Polyester Sweatshirt</strong> is een comfortabele en stijlvolle trui voor dagelijks gebruik. Gemaakt van hoogwaardig polyester met elastaan voor extra bewegingsvrijheid en een prettige pasvorm die zijn vorm behoudt.
            </p>
            <p>
              De stof van Frans badstof voelt zacht aan tegen de huid en houdt je warm in koeler weer, zonder dat je je opgejaagd voelt. De geribbelde crew neck, manchetten en zoom zorgen voor een nette afwerking en een goede pasvorm rondom de randen.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-500">
              <li>Materiaal: Polyester met Elastaan voor stretch</li>
              <li>Stof: Frans Badstof voor extra comfort</li>
              <li>Gestapeld Umbro-logo op de borst</li>
              <li>Geribbelde crew neck, manchetten en zoom</li>
              <li>Lange mouwen met elastische afwerking</li>
            </ul>
          </div>
        </section>

        {/* ── AI inzichten ── */}
        <section className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            {
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              label: "AI Product Insight",
              color: "#8c1222",
              text: "Dit sweatshirt is geschikt voor casual dracht in koel weer. De stof van Frans badstof en elastische ribboorden bieden comfort, maar het is niet bedoeld voor intensieve sportbeoefening.",
            },
            {
              icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
              label: "Samenvatting",
              color: "#173441",
              items: ["Voor casual gebruik in koel weer", "Comfortabele pasvorm met elastische randen", "Ideaal tijdens wandelen, reizen en dagelijks gebruik"],
            },
            {
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              label: "Koopadvies",
              color: "#210000",
              text: "Een goede keuze voor een comfortabele, alledaagse trui met sportieve uitstraling. Voor intensieve sport raden we een technisch sportshirt aan.",
            },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${card.color}18` }}>
                  <svg className="w-4 h-4" fill="none" stroke={card.color} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </div>
                <span className="text-xs font-black uppercase tracking-wider" style={{ color: card.color }}>{card.label}</span>
              </div>
              {card.text && <p className="text-sm text-gray-500 leading-relaxed">{card.text}</p>}
              {card.items && (
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-[10px] text-gray-300 mt-4 leading-relaxed">AI-inzicht is uitsluitend voor informatieve doeleinden en vervangt geen professioneel advies.</p>
            </div>
          ))}
        </section>

        {/* ── Specificaties + Prijsgeschiedenis ── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          {/* Specificaties */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50">
              <h2 className="text-base font-black" style={{ color: "#173441" }}>Productspecificaties</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {SPECS.map((spec, i) => (
                <div key={spec.label} className="flex px-6 py-3" style={{ backgroundColor: i % 2 === 0 ? "white" : "#f9fafb" }}>
                  <span className="text-xs text-gray-400 w-36 flex-shrink-0 pt-0.5">{spec.label}</span>
                  <span className="text-xs font-semibold" style={{ color: "#173441" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prijsgeschiedenis */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
              <div>
                <h2 className="text-base font-black" style={{ color: "#173441" }}>Prijsgeschiedenis</h2>
                <p className="text-xs text-gray-400 mt-0.5">Afgelopen 12 maanden</p>
              </div>
              <div className="text-right min-w-[80px]">
                {activeChartPoint !== null ? (
                  <>
                    <div className="text-xs text-gray-400">{MONTHS[activeChartPoint]}</div>
                    <div className="text-sm font-black" style={{ color: "#8c1222" }}>
                      € {PRICE_HISTORY[activeChartPoint].toFixed(2).replace(".", ",")}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-xs text-gray-400">Laagste ooit</div>
                    <div className="text-sm font-black" style={{ color: "#8c1222" }}>€ 39,29</div>
                  </>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="flex gap-3">
                {/* Y-as labels */}
                <div className="flex flex-col justify-between text-right flex-shrink-0" style={{ height: "120px" }}>
                  {[Math.round(maxP - 1), Math.round((maxP + minP) / 2), Math.round(minP + 1)].map((p) => (
                    <span key={p} className="text-[10px] font-semibold" style={{ color: "#9ca3af" }}>€ {p}</span>
                  ))}
                </div>
                {/* Grafiek */}
                <div className="flex-1 relative" style={{ height: "120px" }}>
                  <svg
                    width="100%" height="120"
                    viewBox={`0 0 ${chartW} ${chartH}`}
                    preserveAspectRatio="none"
                    className="cursor-crosshair overflow-visible"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * (PRICE_HISTORY.length - 1);
                      setActiveChartPoint(Math.max(0, Math.min(PRICE_HISTORY.length - 1, Math.round(x))));
                    }}
                    onMouseLeave={() => setActiveChartPoint(null)}
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * (PRICE_HISTORY.length - 1);
                      setActiveChartPoint(Math.max(0, Math.min(PRICE_HISTORY.length - 1, Math.round(x))));
                    }}
                  >
                    {/* Horizontale gridlijnen */}
                    {[0, 0.5, 1].map((f) => (
                      <line key={f} x1={0} y1={chartH * f} x2={chartW} y2={chartH * f}
                        stroke="#f3f4f6" strokeWidth="1.5" />
                    ))}
                    <defs>
                      <linearGradient id="chartGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8c1222" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#8c1222" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d={areaPath} fill="url(#chartGrad2)" />
                    <path d={linePath} fill="none" stroke="#8c1222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Actief punt */}
                    {activeChartPoint !== null && (
                      <>
                        <line
                          x1={toX(activeChartPoint)} y1={0}
                          x2={toX(activeChartPoint)} y2={chartH}
                          stroke="#8c1222" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.5"
                        />
                        <circle
                          cx={toX(activeChartPoint)}
                          cy={toY(PRICE_HISTORY[activeChartPoint])}
                          r="5" fill="white" stroke="#8c1222" strokeWidth="2.5"
                        />
                      </>
                    )}
                    {/* Standaard eindpunt */}
                    {activeChartPoint === null && (
                      <circle
                        cx={toX(PRICE_HISTORY.length - 1)}
                        cy={toY(PRICE_HISTORY[PRICE_HISTORY.length - 1])}
                        r="5" fill="#8c1222"
                      />
                    )}
                  </svg>
                </div>
              </div>
              {/* Maandlabels */}
              <div className="flex justify-between mt-1.5 pl-10">
                {MONTHS.map((m) => (
                  <span key={m} className="text-[9px]" style={{ color: "#d1d5db" }}>{m}</span>
                ))}
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { label: "Laagste prijs", value: "€ 39,29" },
                  { label: "Gemiddelde prijs", value: "€ 42,36" },
                  { label: "Hoogste prijs", value: "€ 49,99" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f9fafb" }}>
                    <div className="text-sm font-black" style={{ color: "#173441" }}>{stat.value}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Over het merk ── */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://www.google.com/s2/favicons?sz=48&domain=umbro.com"
              alt="Umbro"
              className="w-12 h-12 rounded-2xl"
            />
            <div>
              <h2 className="text-lg font-black" style={{ color: "#173441" }}>Over Umbro</h2>
              <p className="text-sm text-gray-400">Brits sportmerk · Opgericht 1924</p>
            </div>
            <Link href="#" className="ml-auto text-sm font-semibold px-4 py-2 rounded-xl border transition-colors hover:bg-gray-50"
              style={{ color: "#8c1222", borderColor: "rgba(140,18,34,0.3)" }}>
              Alle Umbro producten →
            </Link>
          </div>
          <div className="space-y-2">
            {[
              { q: "Wat voor soort producten biedt Umbro aan?", a: "Umbro biedt een breed scala aan voetbalshirts, voetbalsokken en andere sportkleding voor zowel volwassenen als kinderen. Ze staan bekend om hun teamwear en casual sportkleding." },
              { q: "Zijn de Umbro producten van goede kwaliteit?", a: "Ja, Umbro staat bekend om zijn hoogwaardige kwaliteit en duurzaamheid. De producten worden ontworpen met de behoeften en het comfort van de sporter in gedachten." },
              { q: "Biedt Umbro ook shirts aan voor nationale teams?", a: "Ja, Umbro heeft een assortiment voetbalshirts voor nationale teams. Ze werken samen met diverse voetbalbonden wereldwijd." },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-sm font-semibold pr-4" style={{ color: "#173441" }}>{faq.q}</span>
                  <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Vergelijkbare producten ── */}
        <section>
          <h2 className="text-xl font-black mb-4 px-1" style={{ color: "#173441" }}>Vergelijkbare producten</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SIMILAR.map((product) => (
              <Link key={product.id} href="#"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div className="relative h-40 bg-gray-50 overflow-hidden">
                  <img src={product.img} alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  {product.was && (
                    <div className="absolute top-2 left-2 text-white text-[10px] font-black px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#8c1222" }}>
                      −{Math.round((1 - product.price / product.was) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <p className="text-[11px] font-bold mb-1" style={{ color: "#8c1222" }}>{product.brand}</p>
                  <h3 className="text-xs font-semibold leading-snug line-clamp-2 flex-1 group-hover:underline" style={{ color: "#173441" }}>
                    {product.title}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="text-sm font-black" style={{ color: "#173441" }}>€ {product.price.toFixed(2).replace(".", ",")}</span>
                    {product.was && <span className="text-xs text-gray-400 line-through">€ {product.was.toFixed(2).replace(".", ",")}</span>}
                  </div>
                  <span className="text-[10px] font-semibold mt-1" style={{ color: "#8c1222" }}>Bekijk product →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(false)}
        >
          {/* Sluitknop */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setLightbox(false)}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Afbeelding teller */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-semibold">
            {activeImage + 1} / {PRODUCT_IMAGES.length}
          </div>

          {/* Vorige */}
          <button
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); setActiveImage((i) => (i - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length); }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Hoofdafbeelding */}
          <div className="max-w-4xl max-h-[85vh] w-full mx-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={PRODUCT_IMAGES[activeImage]}
              alt="Productafbeelding vergroot"
              className="w-full h-full object-contain rounded-xl"
              style={{ maxHeight: "85vh" }}
            />
          </div>

          {/* Volgende */}
          <button
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); setActiveImage((i) => (i + 1) % PRODUCT_IMAGES.length); }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
            {PRODUCT_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className="w-12 h-12 rounded-lg overflow-hidden border-2 transition-all"
                style={{ borderColor: activeImage === i ? "#8c1222" : "rgba(255,255,255,0.3)" }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#0d2530" }} className="text-white py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-8">
            <div className="max-w-xs">
              <Image src="/sportdeal-logo.svg" alt="Sportdeal" width={140} height={37} className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm text-white/50 leading-relaxed">De betrouwbare sportconnectie. Vergelijk sportproducten van 300+ webshops.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {[
                { title: "Service", links: ["Contact", "Over ons", "FAQ", "Vacatures"] },
                { title: "Zakelijk", links: ["Pakketten", "Koppelingen", "Word Partner"] },
                { title: "Landen", links: ["Nederland", "België", "Duitsland"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#210000" }}>{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}><Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
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
