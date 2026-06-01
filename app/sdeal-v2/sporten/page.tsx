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
  "Motorsport", "Dansen", "Fitness", "Wintersport", "Atletiek",
  "Gymnastiek", "Paardrijden", "Skaten", "Zwemmen",
  "Vecht- & Verdedigingssport", "Hardlopen", "Watersport",
  "Hengelsport", "Triathlon", "Golf", "Klimmen",
];

const BRANDS = [
  "Adidas", "Nike", "Puma", "Asics", "New Balance", "Garmin",
  "Decathlon", "Columbia", "Under Armour", "The North Face",
  "Mizuno", "Brooks", "Salomon", "Head", "Wilson", "Babolat",
];

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
  const [brandSearch, setBrandSearch] = useState("");
  const [priceMax, setPriceMax] = useState(400);
  const [sortBy, setSortBy] = useState("Relevantie");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [openFilter, setOpenFilter] = useState<string | null>("categorie");
  const [activeTab, setActiveTab] = useState("Producten");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const TAB_IDS: Record<string, string> = {
    "Over deze categorie": "over-categorie",
    "Producttypes": "producttypes",
    "Merken": "merken",
    "Koopgids": "koopgids",
    "Veelgestelde vragen": "veelgestelde-vragen",
  };

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
                <div className="border-t border-gray-50 px-4 pb-3 pt-2">
                  {/* Zoekbalk merken */}
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 mb-3 focus-within:border-orange-300 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                    </svg>
                    <input
                      type="text"
                      value={brandSearch}
                      onChange={(e) => setBrandSearch(e.target.value)}
                      placeholder="Zoek merk..."
                      className="bg-transparent text-xs w-full focus:outline-none text-gray-700 placeholder-gray-400"
                    />
                    {brandSearch && (
                      <button onClick={() => setBrandSearch("")} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {/* Merklijst */}
                  <div className="space-y-1 max-h-52 overflow-y-auto">
                    {BRANDS.filter((b) => b.toLowerCase().includes(brandSearch.toLowerCase())).map((brand) => (
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
                    {BRANDS.filter((b) => b.toLowerCase().includes(brandSearch.toLowerCase())).length === 0 && (
                      <p className="text-xs text-gray-400 py-2 text-center">Geen merken gevonden</p>
                    )}
                  </div>
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

            {/* Tabbladen */}
            <div className="bg-white rounded-2xl border border-gray-100 mb-4 overflow-hidden">
              <div className="flex overflow-x-auto">
                {["Producten", "Over deze categorie", "Producttypes", "Merken", "Koopgids", "Veelgestelde vragen"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      const id = TAB_IDS[tab];
                      if (id) {
                        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
                      }
                    }}
                    className="px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex-shrink-0"
                    style={{
                      borderBottomColor: activeTab === tab ? "#e2603f" : "transparent",
                      color: activeTab === tab ? "#e2603f" : "#6b7280",
                      backgroundColor: activeTab === tab ? "rgba(226,96,63,0.04)" : "transparent",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

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

      {/* ── Content secties ── */}
      <div className="max-w-7xl mx-auto px-4 pb-12 space-y-8">

        {/* Over deze categorie */}
        <section id="over-categorie" className="scroll-mt-24 bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="text-2xl font-black mb-1" style={{ color: "#173441" }}>Over sporten</h2>
          <p className="text-sm mb-6" style={{ color: "#e2603f" }}>36.814 producten van 300+ webshops</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Sportdeal vergelijkt het complete aanbod van sportartikelen in Nederland en België. Of je nu op zoek bent naar hardloopschoenen, een nieuwe fiets, zwemspullen of trainingsmateriaal — wij brengen de beste deals van meer dan 300 webshops bij elkaar zodat jij altijd de laagste prijs vindt.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Van professionele sporter tot weekendkrijger: ons assortiment omvat producten voor meer dan 50 verschillende sporten. Gebruik onze filters om snel te vinden wat je zoekt, vergelijk prijzen en lees reviews van andere sporters.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Producten", value: "36.814" },
                { label: "Webshops", value: "300+" },
                { label: "Merken", value: "10.000+" },
                { label: "Sporten", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(226,96,63,0.06)" }}>
                  <div className="text-2xl font-black mb-0.5" style={{ color: "#e2603f" }}>{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Producttypes */}
        <section id="producttypes" className="scroll-mt-24">
          <h2 className="text-2xl font-black mb-1 px-1" style={{ color: "#173441" }}>Producttypes</h2>
          <p className="text-sm text-gray-400 mb-5 px-1">Blader per type sportartikel</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Hardloopschoenen", count: "4.821", img: "/cat-schoenen.jpg" },
              { name: "Sportkleding", count: "9.340", img: "/cat-shirt.jpg" },
              { name: "Fietsaccessoires", count: "3.120", img: "/cat-compressie.jpg" },
              { name: "Sporthorloges & GPS", count: "1.240", img: "/cat-compressie.jpg" },
              { name: "Sporttassen", count: "870", img: "/cat-sporttas.jpg" },
              { name: "Sportbroeken", count: "2.560", img: "/cat-broek.jpg" },
              { name: "Regenkleding", count: "680", img: "/cat-regenjas.jpg" },
              { name: "Trainingsmateriaal", count: "5.183", img: "/cat-hoodie.jpg" },
            ].map((type) => (
              <Link key={type.name} href="#"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div className="h-28 overflow-hidden bg-gray-50">
                  <img src={type.img} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#173441" }}>{type.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{type.count} producten</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Merken */}
        <section id="merken" className="scroll-mt-24 bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="text-2xl font-black mb-1" style={{ color: "#173441" }}>Merken</h2>
          <p className="text-sm text-gray-400 mb-6">Ontdek alle sportmerken op Sportdeal</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: "Nike", domain: "nike.com", products: "3.241" },
              { name: "Adidas", domain: "adidas.com", products: "2.876" },
              { name: "Puma", domain: "puma.com", products: "1.432" },
              { name: "Asics", domain: "asics.com", products: "987" },
              { name: "New Balance", domain: "newbalance.com", products: "876" },
              { name: "Garmin", domain: "garmin.com", products: "654" },
              { name: "Under Armour", domain: "underarmour.com", products: "543" },
              { name: "The North Face", domain: "thenorthface.com", products: "498" },
              { name: "Salomon", domain: "salomon.com", products: "412" },
              { name: "Brooks", domain: "brooksrunning.com", products: "389" },
              { name: "Wilson", domain: "wilson.com", products: "321" },
              { name: "Head", domain: "head.com", products: "287" },
            ].map((brand) => (
              <Link key={brand.name} href="#"
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all group">
                <img
                  src={`https://www.google.com/s2/favicons?sz=32&domain=${brand.domain}`}
                  alt={brand.name}
                  className="w-8 h-8 rounded-lg flex-shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold truncate group-hover:text-orange-500 transition-colors" style={{ color: "#173441" }}>{brand.name}</div>
                  <div className="text-xs text-gray-400">{brand.products} producten</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Koopgids */}
        <section id="koopgids" className="scroll-mt-24 bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="text-2xl font-black mb-1" style={{ color: "#173441" }}>Koopgids sporten</h2>
          <p className="text-sm text-gray-400 mb-8">Alles wat je moet weten voordat je koopt</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Waar let je op bij sportschoenen?",
                body: "Kies schoenen op basis van je sporttype en voettype. Hardloopschoenen hebben demping nodig, zaalschoenen een goede grip. Laat je voet opmeten bij een sportspeciaalzaak voor de beste pasvorm.",
              },
              {
                icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                title: "Merken vergelijken",
                body: "Nike en Adidas zijn marktleiders, maar merken als Asics en Brooks scoren hoger voor hardlopers. Vergelijk altijd op specificaties en prijs — een huismerk kan qua prestaties gelijkwaardig zijn aan een A-merk.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Prijzen vergelijken loont",
                body: "Sportartikelen kunnen tot 40% goedkoper zijn bij de ene webshop ten opzichte van de andere. Gebruik Sportdeal om in één oogopslag de goedkoopste aanbieder te vinden, inclusief verzendkosten.",
              },
              {
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "Retourneren & garantie",
                body: "Controleer altijd het retourbeleid voordat je koopt. De meeste grote sportwebshops bieden 30 dagen retourrecht. Sportkleding en schoenen die goed passen zijn essentieel — koop daarom bij winkels met een soepel retourbeleid.",
              },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(226,96,63,0.1)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={tip.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "#173441" }}>{tip.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Veelgestelde vragen */}
        <section id="veelgestelde-vragen" className="scroll-mt-24 bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="text-2xl font-black mb-1" style={{ color: "#173441" }}>Veelgestelde vragen</h2>
          <p className="text-sm text-gray-400 mb-6">Antwoorden op de meest gestelde vragen</p>
          <div className="space-y-2">
            {[
              {
                q: "Hoe werkt prijsvergelijken op Sportdeal?",
                a: "Sportdeal verzamelt dagelijks de actuele prijzen van meer dan 300 webshops. Per product zie je direct welke winkel de laagste prijs heeft, inclusief verzendkosten. Klik op 'Vergelijk' om alle aanbieders naast elkaar te zien.",
              },
              {
                q: "Zijn de prijzen op Sportdeal altijd actueel?",
                a: "Ja, we updaten onze prijzen meerdere keren per dag. Toch kunnen prijzen net gewijzigd zijn. We raden aan altijd de prijs op de website van de webshop te controleren voordat je afrekent.",
              },
              {
                q: "Kan ik producten rechtstreeks op Sportdeal kopen?",
                a: "Nee, Sportdeal is een vergelijkingssite. Wij leiden je door naar de webshop van je keuze, waar je de aankoop veilig kunt afronden.",
              },
              {
                q: "Hoe weet ik of een webshop betrouwbaar is?",
                a: "Op elke productpagina tonen we de beoordeling van de webshop op basis van klantreviews. We werken alleen samen met geverifieerde webshops die voldoen aan onze kwaliteitseisen.",
              },
              {
                q: "Zijn er nog meer sporten en categorieën?",
                a: "Ja! Naast Sporten vergelijkt Sportdeal ook producten voor Outdoor & Kamperen, Fietsen, Watersport, Racketsporten, Teamsport en meer. Bekijk alle categorieën via het menu bovenaan de pagina.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-sm font-semibold pr-4" style={{ color: "#173441" }}>{faq.q}</span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

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
