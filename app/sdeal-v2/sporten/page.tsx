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

const SUBCATS = [
  "Racketsporten", "Balsporten", "Fietsen", "Darts", "Biljart",
  "Fitness", "Wintersport", "Atletiek", "Hardlopen", "Watersport",
  "Vechtsporten", "Zwemmen", "Golf", "Klimmen", "Paardrijden",
];

const BRANDS = ["Adidas", "Nike", "Puma", "Asics", "New Balance", "Garmin", "Decathlon", "Columbia"];

const PRODUCTS = [
  { id: 1, title: "Nike Air Zoom Pegasus 40 Hardloopschoenen", brand: "Nike", price: 94.99, was: 129.99, img: "/cat-schoenen.jpg", shops: 12 },
  { id: 2, title: "Adidas Tiro 23 Trainingsshirt Heren", brand: "Adidas", price: 29.99, was: 44.99, img: "/cat-shirt.jpg", shops: 8 },
  { id: 3, title: "Garmin Forerunner 255 GPS Sporthorloge", brand: "Garmin", price: 249.00, was: null, img: "/cat-compressie.jpg", shops: 6 },
  { id: 4, title: "Puma Teamgoal 23 Keepershandschoenen", brand: "Puma", price: 22.95, was: 29.99, img: "/cat-hoodie.jpg", shops: 5 },
  { id: 5, title: "Asics Gel-Kayano 30 Stabiliteitschoen", brand: "Asics", price: 159.95, was: 189.95, img: "/cat-schoenen.jpg", shops: 9 },
  { id: 6, title: "New Balance Fresh Foam X 1080v13", brand: "New Balance", price: 174.99, was: null, img: "/cat-compressie.jpg", shops: 7 },
  { id: 7, title: "Adidas Combat 2-in-1 Sporttas 55L", brand: "Adidas", price: 59.95, was: 79.95, img: "/cat-sporttas.jpg", shops: 11 },
  { id: 8, title: "Nike Dri-FIT Park 20 Trainingsbroek", brand: "Nike", price: 24.99, was: 34.99, img: "/cat-broek.jpg", shops: 15 },
  { id: 9, title: "Puma Ultra 5 Play FG/AG Voetbalschoenen", brand: "Puma", price: 44.99, was: 64.99, img: "/cat-schoenen.jpg", shops: 10 },
  { id: 10, title: "Decathlon Hardloopjas Kalenji Run Wind", brand: "Decathlon", price: 34.99, was: null, img: "/cat-regenjas.jpg", shops: 3 },
  { id: 11, title: "Garmin Edge 540 Fietscomputer", brand: "Garmin", price: 329.00, was: 399.00, img: "/cat-compressie.jpg", shops: 8 },
  { id: 12, title: "Adidas Supernova Rise Hardloopschoen", brand: "Adidas", price: 109.99, was: 139.99, img: "/cat-schoenen.jpg", shops: 6 },
];

const SORT_OPTIONS = ["Relevantie", "Laagste prijs", "Hoogste prijs", "Nieuwste", "Meeste winkels"];

export default function SportenPage() {
  const [query, setQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState(400);
  const [sortBy, setSortBy] = useState("Relevantie");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [openFilter, setOpenFilter] = useState<string | null>("categorie");

  const toggleBrand = (b: string) =>
    setSelectedBrands((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);

  const filtered = PRODUCTS.filter((p) => {
    if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
    if (p.price > priceMax) return false;
    return true;
  });

  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f5f7f9" }}>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="hidden md:block text-white text-xs py-1.5 px-4" style={{ backgroundColor: "#173441" }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="opacity-70">Vergelijk de beste sportdeals van 300+ webshops</span>
            <div className="flex gap-5 opacity-80">
              <Link href="#" className="hover:opacity-100 transition-opacity">Over ons</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Contact</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">Webshop aansluiten</Link>
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
                style={{ borderColor: query ? "#e2603f" : "#e2e8f0" }}
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity flex items-center"
                style={{ background: "linear-gradient(135deg, #e2603f, #f5ae4c)" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
              </button>
            </div>
          </div>
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

      {/* ── Category hero ── */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #173441 0%, #1f4a62 100%)", height: "160px" }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/categories/sports-outdoor.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Link href="/sdeal-v2" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/80">Sporten</span>
          </div>
          <h1 className="text-3xl font-black text-white">Sporten</h1>
          <p className="text-white/50 text-sm mt-1">36.814 producten · 300+ webshops vergeleken</p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-3">

            {/* Subcategorieën */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFilter(openFilter === "categorie" ? null : "categorie")}
                className="w-full flex items-center justify-between px-4 py-3.5 font-bold text-sm"
                style={{ color: "#173441" }}>
                Subcategorieën
                <svg className={`w-4 h-4 transition-transform ${openFilter === "categorie" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFilter === "categorie" && (
                <div className="border-t border-gray-50 px-4 pb-3 pt-2 space-y-1">
                  {SUBCATS.map((cat) => (
                    <Link key={cat} href="#"
                      className="flex items-center justify-between py-1.5 text-sm text-gray-600 hover:text-orange-500 transition-colors group">
                      <span>{cat}</span>
                      <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Merk filter */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFilter(openFilter === "merk" ? null : "merk")}
                className="w-full flex items-center justify-between px-4 py-3.5 font-bold text-sm"
                style={{ color: "#173441" }}>
                Merk
                {selectedBrands.length > 0 && (
                  <span className="ml-auto mr-2 text-xs px-2 py-0.5 rounded-full text-white font-bold"
                    style={{ backgroundColor: "#e2603f" }}>{selectedBrands.length}</span>
                )}
                <svg className={`w-4 h-4 transition-transform ${openFilter === "merk" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFilter === "merk" && (
                <div className="border-t border-gray-50 px-4 pb-3 pt-2 space-y-1">
                  {BRANDS.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 py-1.5 cursor-pointer group">
                      <div
                        onClick={() => toggleBrand(brand)}
                        className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer"
                        style={{
                          backgroundColor: selectedBrands.includes(brand) ? "#e2603f" : "white",
                          borderColor: selectedBrands.includes(brand) ? "#e2603f" : "#d1d5db",
                        }}>
                        {selectedBrands.includes(brand) && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Prijs filter */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFilter(openFilter === "prijs" ? null : "prijs")}
                className="w-full flex items-center justify-between px-4 py-3.5 font-bold text-sm"
                style={{ color: "#173441" }}>
                Prijs
                <svg className={`w-4 h-4 transition-transform ${openFilter === "prijs" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFilter === "prijs" && (
                <div className="border-t border-gray-50 px-4 pb-4 pt-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>€ 0</span>
                    <span className="font-bold" style={{ color: "#e2603f" }}>€ {priceMax}</span>
                  </div>
                  <input
                    type="range" min={0} max={400} value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex gap-2 mt-3">
                    <input type="number" placeholder="Min" className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-orange-300" />
                    <input type="number" value={priceMax} onChange={(e) => setPriceMax(Number(e.target.value))}
                      className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-orange-300" />
                  </div>
                </div>
              )}
            </div>

            {/* Actieve filters wissen */}
            {(selectedBrands.length > 0 || priceMax < 400) && (
              <button
                onClick={() => { setSelectedBrands([]); setPriceMax(400); }}
                className="w-full text-sm font-semibold py-2.5 rounded-xl border transition-all hover:bg-red-50"
                style={{ color: "#e2603f", borderColor: "rgba(226,96,63,0.3)" }}>
                Filters wissen
              </button>
            )}
          </aside>

          {/* ── Productgrid ── */}
          <div className="flex-1 min-w-0">

            {/* Sorteer/view balk */}
            <div className="bg-white rounded-2xl border border-gray-100 px-4 py-3 flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-400 mr-auto">
                <strong className="text-gray-800">{filtered.length}</strong> producten gevonden
              </span>

              {/* View toggle */}
              <div className="hidden sm:flex items-center gap-1 p-1 bg-gray-50 rounded-lg">
                <button onClick={() => setView("grid")}
                  className="p-1.5 rounded-md transition-all"
                  style={{ backgroundColor: view === "grid" ? "white" : "transparent", color: view === "grid" ? "#e2603f" : "#9ca3af", boxShadow: view === "grid" ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z" />
                  </svg>
                </button>
                <button onClick={() => setView("list")}
                  className="p-1.5 rounded-md transition-all"
                  style={{ backgroundColor: view === "list" ? "white" : "transparent", color: view === "list" ? "#e2603f" : "#9ca3af", boxShadow: view === "list" ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Sortering */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-orange-300 bg-white"
                style={{ color: "#173441" }}>
                {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            {/* Grid */}
            {view === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((product) => (
                  <Link key={product.id} href="#"
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col">
                    <div className="relative h-44 bg-gray-50 overflow-hidden">
                      <img src={product.img} alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      {product.was && (
                        <div className="absolute top-2.5 left-2.5 text-white text-[10px] font-black px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "#e2603f" }}>
                          −{Math.round((1 - product.price / product.was) * 100)}%
                        </div>
                      )}
                    </div>
                    <div className="p-3 flex flex-col flex-1">
                      <p className="text-[11px] font-bold mb-1" style={{ color: "#e2603f" }}>{product.brand}</p>
                      <h3 className="text-xs font-semibold leading-snug mb-2 line-clamp-2 group-hover:underline flex-1" style={{ color: "#173441" }}>
                        {product.title}
                      </h3>
                      <div className="mt-auto">
                        <div className="flex items-baseline gap-1.5 mb-2">
                          <span className="text-base font-black" style={{ color: "#173441" }}>€ {product.price.toFixed(2).replace(".", ",")}</span>
                          {product.was && <span className="text-xs text-gray-400 line-through">€ {product.was.toFixed(2).replace(".", ",")}</span>}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-gray-400">{product.shops} winkels</span>
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                            style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                            Vergelijk
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((product) => (
                  <Link key={product.id} href="#"
                    className="group bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-200 flex items-center gap-4 p-4">
                    <div className="w-20 h-20 rounded-xl bg-gray-50 overflow-hidden flex-shrink-0">
                      <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold mb-0.5" style={{ color: "#e2603f" }}>{product.brand}</p>
                      <h3 className="text-sm font-semibold leading-snug group-hover:underline line-clamp-1" style={{ color: "#173441" }}>{product.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{product.shops} winkels</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-black" style={{ color: "#173441" }}>€ {product.price.toFixed(2).replace(".", ",")}</div>
                      {product.was && <div className="text-xs text-gray-400 line-through">€ {product.was.toFixed(2).replace(".", ",")}</div>}
                      <span className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                        Vergelijk →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Paginering */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[1, 2, 3, "…", 12].map((p, i) => (
                <button key={i}
                  className="w-9 h-9 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    backgroundColor: p === 1 ? "#e2603f" : "white",
                    color: p === 1 ? "white" : "#173441",
                    border: p === 1 ? "none" : "1.5px solid #e2e8f0",
                  }}>
                  {p}
                </button>
              ))}
              <button className="w-9 h-9 rounded-xl text-sm font-semibold border transition-all hover:bg-gray-50"
                style={{ color: "#173441", border: "1.5px solid #e2e8f0" }}>
                <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

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
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#f5ae4c" }}>{col.title}</h4>
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
