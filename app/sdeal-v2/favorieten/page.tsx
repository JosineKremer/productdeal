"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_CATS = [
  { label: "Fitness & Gym", href: "#" }, { label: "Fietsen", href: "#" },
  { label: "Outdoor & Kamperen", href: "#" }, { label: "Watersport", href: "#" },
  { label: "Sportkleding", href: "#" }, { label: "Vechtsporten", href: "#" },
  { label: "Racketsporten", href: "#" }, { label: "Teamsport", href: "#" },
  { label: "Merken", href: "#" },
];

const LANGUAGES = [
  { code: "NL", label: "Nederlands", flag: "🇳🇱" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
];

const INITIAL_FAVORIETEN = [
  { id: 1, title: "Nike Air Zoom Pegasus 40 Hardloopschoenen", brand: "Nike", price: 94.99, was: 129.99, img: "/cat-schoenen.jpg", seller: "SportDirect", inStock: true },
  { id: 2, title: "Adidas Tiro 23 Trainingsshirt Heren", brand: "Adidas", price: 29.99, was: 44.99, img: "/cat-shirt.jpg", seller: "Decathlon", inStock: true },
  { id: 3, title: "Garmin Forerunner 255 GPS Sporthorloge", brand: "Garmin", price: 249.00, was: null, img: "/cat-compressie.jpg", seller: "SportDirect", inStock: true },
  { id: 4, title: "Puma Teamgoal 23 Keepershandschoenen", brand: "Puma", price: 22.95, was: 29.99, img: "/cat-hoodie.jpg", seller: "Intersport", inStock: false },
  { id: 5, title: "Umbro Heren Polyester Sweatshirt (XXL)", brand: "Umbro", price: 39.29, was: 49.99, img: "/cat-hoodie.jpg", seller: "Umbro Store", inStock: true },
  { id: 6, title: "Asics Gel-Kayano 30 Stabiliteitschoen", brand: "Asics", price: 159.95, was: 189.95, img: "/cat-schoenen.jpg", seller: "RunnerShop", inStock: true },
];

export default function FavorietenPage() {
  const [query, setQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [favorieten, setFavorieten] = useState(INITIAL_FAVORIETEN);
  const [cartCount, setCartCount] = useState(0);
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const removeFavoriet = (id: number) => setFavorieten(f => f.filter(p => p.id !== id));

  const addToCart = (id: number) => {
    setCartCount(n => n + 1);
    setAddedIds(ids => [...ids, id]);
    setTimeout(() => setAddedIds(ids => ids.filter(i => i !== id)), 2000);
  };

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
              <Link href="#" className="hover:opacity-100">Over ons</Link>
              <Link href="#" className="hover:opacity-100">Contact</Link>
              <Link href="#" className="hover:opacity-100">Webshop aansluiten</Link>
              <div className="relative">
                <button onClick={() => setLangOpen(o => !o)}
                  className="flex items-center gap-1.5 border border-white/30 rounded-full px-2.5 py-0.5 text-white text-xs font-semibold hover:border-white/60 transition-colors">
                  <span>{selectedLang.flag}</span><span>{selectedLang.code}</span>
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
          {/* Favorieten — actief */}
          <button className="flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 transition-all"
            style={{ borderColor: "#e2603f", backgroundColor: "rgba(226,96,63,0.05)" }}>
            <svg className="w-5 h-5" fill="#e2603f" stroke="#e2603f" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs font-bold hidden sm:block" style={{ color: "#e2603f" }}>
              {favorieten.length} favorieten
            </span>
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
            <span className="text-xs font-bold hidden sm:block" style={{ color: cartCount > 0 ? "#e2603f" : "#173441" }}>Winkelwagen</span>
          </button>
        </div>
        <nav className="hidden md:block" style={{ backgroundColor: "#173441" }}>
          <div className="max-w-7xl mx-auto px-4 flex">
            {NAV_CATS.map(item => (
              <Link key={item.label} href={item.href} className="text-white text-sm font-medium px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap">{item.label}</Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 pb-20">

        {/* Titel */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black" style={{ color: "#173441" }}>Mijn favorieten</h1>
            {favorieten.length > 0 && (
              <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: "rgba(226,96,63,0.1)", color: "#e2603f" }}>
                {favorieten.length} producten
              </span>
            )}
          </div>
          {favorieten.length > 0 && (
            <button onClick={() => setFavorieten([])}
              className="text-sm font-semibold px-4 py-2 rounded-xl border-2 hover:bg-red-50 transition-colors"
              style={{ color: "#e2603f", borderColor: "rgba(226,96,63,0.3)" }}>
              Alles verwijderen
            </button>
          )}
        </div>

        {favorieten.length === 0 ? (
          /* Lege staat */
          <div className="bg-white rounded-2xl border border-gray-100 p-20 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: "rgba(226,96,63,0.08)" }}>
              <svg className="w-10 h-10" fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-black mb-2" style={{ color: "#173441" }}>Nog geen favorieten</h2>
            <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto">Sla producten op als favoriet door op het hartje te klikken. Ze verschijnen hier zodat je ze later makkelijk terugvindt.</p>
            <Link href="/sdeal-v2/sporten"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
              Bekijk producten
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {favorieten.map(product => {
              const isAdded = addedIds.includes(product.id);
              const discount = product.was ? Math.round((1 - product.price / product.was) * 100) : null;
              return (
                <div key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col">

                  {/* Afbeelding */}
                  <div className="relative h-44 bg-gray-50 overflow-hidden">
                    <img src={product.img} alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                    {/* Korting badge */}
                    {discount && (
                      <div className="absolute top-2.5 left-2.5 text-white text-[10px] font-black px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#e2603f" }}>
                        −{discount}%
                      </div>
                    )}

                    {/* Niet op voorraad overlay */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                          Niet op voorraad
                        </span>
                      </div>
                    )}

                    {/* Verwijder hartje */}
                    <button
                      onClick={() => removeFavoriet(product.id)}
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                      title="Verwijder uit favorieten">
                      <svg className="w-4 h-4" fill="#e2603f" stroke="#e2603f" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-3 flex flex-col flex-1">
                    <p className="text-[11px] font-bold mb-0.5" style={{ color: "#e2603f" }}>{product.brand}</p>
                    <h3 className="text-xs font-semibold leading-snug line-clamp-2 flex-1 mb-2" style={{ color: "#173441" }}>
                      {product.title}
                    </h3>
                    <p className="text-[10px] text-gray-400 mb-2">
                      Verkocht door <span className="font-semibold text-gray-500">{product.seller}</span>
                    </p>

                    {/* Prijs */}
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="text-base font-black" style={{ color: "#173441" }}>
                        € {product.price.toFixed(2).replace(".", ",")}
                      </span>
                      {product.was && (
                        <span className="text-xs text-gray-400 line-through">
                          € {product.was.toFixed(2).replace(".", ",")}
                        </span>
                      )}
                    </div>

                    {/* Knoppen */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className="flex-1 py-2 rounded-xl text-white text-[11px] font-bold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{ background: isAdded ? "#22c55e" : "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                        {isAdded ? "✓ Toegevoegd" : product.inStock ? "In winkelwagen" : "Niet beschikbaar"}
                      </button>
                      <button
                        onClick={() => removeFavoriet(product.id)}
                        className="w-8 h-8 rounded-xl border-2 flex items-center justify-center flex-shrink-0 hover:bg-red-50 hover:border-red-200 transition-all"
                        style={{ borderColor: "#e2e8f0" }}
                        title="Verwijder">
                        <svg className="w-3.5 h-3.5 text-gray-400 hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Suggesties */}
        {favorieten.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-black mb-4 px-1" style={{ color: "#173441" }}>Misschien ook interessant</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: "Nike Dri-FIT Park 20 Sweater", brand: "Nike", price: 44.99, was: 59.99, img: "/cat-hoodie.jpg" },
                { title: "Adidas Combat Sporttas 55L", brand: "Adidas", price: 59.95, was: 79.95, img: "/cat-sporttas.jpg" },
                { title: "Puma Liga Casuals Trainingsbroek", brand: "Puma", price: 34.95, was: 44.99, img: "/cat-broek.jpg" },
                { title: "Decathlon Hardloopjas Kalenji", brand: "Decathlon", price: 34.99, was: null, img: "/cat-regenjas.jpg" },
              ].map((p, i) => (
                <Link key={i} href="#"
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
                  <div className="h-36 overflow-hidden bg-gray-50">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold mb-0.5" style={{ color: "#e2603f" }}>{p.brand}</p>
                    <h3 className="text-xs font-semibold leading-snug line-clamp-2 mb-1.5" style={{ color: "#173441" }}>{p.title}</h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-black" style={{ color: "#173441" }}>€ {p.price.toFixed(2).replace(".", ",")}</span>
                      {p.was && <span className="text-xs text-gray-400 line-through">€ {p.was.toFixed(2).replace(".", ",")}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#0d2530" }} className="text-white py-10 mt-4">
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
              ].map(col => (
                <div key={col.title}>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#f5ae4c" }}>{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map(l => <li key={l}><Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</Link></li>)}
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
