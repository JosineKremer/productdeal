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

const LANGUAGES = [
  { code: "NL", label: "Nederlands", flag: "🇳🇱" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
];

const INITIAL_ITEMS = [
  { id: 1, title: "Nike Air Zoom Pegasus 40 Hardloopschoenen", brand: "Nike", seller: "SportDirect", sellerDomain: "sportsdirect.com", price: 94.99, qty: 1, img: "/cat-schoenen.jpg", size: "42", color: "Zwart", shipping: 4.95, deliveryDate: "komende dinsdag" },
  { id: 2, title: "Adidas Tiro 23 Trainingsshirt Heren", brand: "Adidas", seller: "Decathlon", sellerDomain: "decathlon.nl", price: 29.99, qty: 2, img: "/cat-shirt.jpg", size: "L", color: "Zwart / Wit", shipping: 0, deliveryDate: "komende maandag" },
  { id: 3, title: "Puma Teamgoal Trainingsbroek", brand: "Puma", seller: "Decathlon", sellerDomain: "decathlon.nl", price: 24.99, qty: 1, img: "/cat-broek.jpg", size: "M", color: "Navy", shipping: 0, deliveryDate: "komende maandag" },
  { id: 4, title: "Umbro Heren Polyester Sweatshirt", brand: "Umbro", seller: "Umbro Store", sellerDomain: "umbro.com", price: 39.29, qty: 1, img: "/cat-hoodie.jpg", size: "XXL", color: "Zwart", shipping: 2.95, deliveryDate: "komende woensdag" },
];

export default function WinkelwagenPage() {
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState(INITIAL_ITEMS);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => setCartItems((items) => items.filter((i) => i.id !== id));

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  // Groepeer per shop
  const shopGroups = cartItems.reduce((groups, item) => {
    if (!groups[item.seller]) {
      groups[item.seller] = { seller: item.seller, sellerDomain: item.sellerDomain, deliveryDate: item.deliveryDate, shipping: item.shipping, items: [] };
    }
    groups[item.seller].items.push(item);
    return groups;
  }, {} as Record<string, { seller: string; sellerDomain: string; deliveryDate: string; shipping: number; items: typeof cartItems }>);

  const shopList = Object.values(shopGroups);
  const totalShipping = shopList.reduce((sum, shop) => sum + shop.shipping, 0);
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal + totalShipping - discount;

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
                        style={{ backgroundColor: selectedLang.code === lang.code ? "rgba(140,18,34,0.05)" : undefined }}>
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
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek naar producten, merken of categorieën..."
                className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none transition-colors"
                style={{ borderColor: query ? "#8c1222" : "#e2e8f0" }} />
              <button className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity flex items-center"
                style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
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
          {/* Winkelwagen — actief */}
          <button className="relative flex-shrink-0 flex items-center gap-2 pl-3 pr-4 h-10 rounded-full border-2 hover:shadow-md transition-all"
            style={{ borderColor: "#8c1222", backgroundColor: "rgba(140,18,34,0.05)" }}>
            <div className="relative">
              <svg className="w-5 h-5" fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-white text-[9px] font-black flex items-center justify-center"
                  style={{ backgroundColor: "#8c1222" }}>{totalItems}</span>
              )}
            </div>
            <span className="text-xs font-bold hidden sm:block" style={{ color: "#8c1222" }}>
              € {total.toFixed(2).replace(".", ",")}
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

      <main className="max-w-7xl mx-auto px-4 py-6 pb-16">

        {/* Breadcrumb + titel */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
            <Link href="/sdeal-v2" className="hover:text-orange-500 transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500">Winkelwagen</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black" style={{ color: "#173441" }}>Winkelwagen</h1>
            <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: "rgba(140,18,34,0.1)", color: "#8c1222" }}>
              {totalItems} {totalItems === 1 ? "artikel" : "artikelen"}
            </span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Lege winkelwagen */
          <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(140,18,34,0.08)" }}>
              <svg className="w-10 h-10" fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-black mb-2" style={{ color: "#173441" }}>Je winkelwagen is leeg</h2>
            <p className="text-gray-400 text-sm mb-6">Voeg producten toe om verder te gaan</p>
            <Link href="/sdeal-v2" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
              Ga verder met winkelen
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">

            {/* ── Linkerkolom: artikelen ── */}
            <div className="space-y-3">

              {/* Per shop gegroepeerde producten */}
              {shopList.map((shop) => {
                const shopSubtotal = shop.items.reduce((sum, i) => sum + i.price * i.qty, 0);
                return (
                  <div key={shop.seller} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    {/* Shop header */}
                    <div className="px-5 py-4 flex items-center justify-between border-b border-gray-50" style={{ backgroundColor: "#fafafa" }}>
                      <div className="flex items-center gap-3">
                        <img src={`https://www.google.com/s2/favicons?sz=28&domain=${shop.sellerDomain}`}
                          alt={shop.seller} className="w-7 h-7 rounded-lg" />
                        <span className="text-sm font-black" style={{ color: "#173441" }}>{shop.seller}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
                          </svg>
                          <span className="text-gray-500">Levering:</span>
                          <span className="font-bold text-green-600">{shop.deliveryDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {shop.shipping === 0 ? (
                            <span className="font-bold text-green-600 flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Gratis verzending
                            </span>
                          ) : (
                            <span className="text-gray-500">Verzending: <span className="font-bold text-gray-700">€ {shop.shipping.toFixed(2).replace(".", ",")}</span></span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Koptekst */}
                    <div className="hidden sm:grid grid-cols-[1fr_80px_120px_80px_40px] gap-4 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-300 border-b border-gray-50">
                      <span>Product</span>
                      <span className="text-center">Prijs</span>
                      <span className="text-center">Aantal</span>
                      <span className="text-right">Subtotaal</span>
                      <span />
                    </div>

                    {/* Producten van deze shop */}
                    <div className="divide-y divide-gray-50">
                      {shop.items.map((item) => (
                        <div key={item.id} className="p-5 flex flex-col sm:grid sm:grid-cols-[1fr_80px_120px_80px_40px] gap-4 items-center">
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 bg-gray-50">
                              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-bold mb-0.5" style={{ color: "#8c1222" }}>{item.brand}</p>
                              <h3 className="text-sm font-bold leading-snug line-clamp-2 mb-1" style={{ color: "#173441" }}>{item.title}</h3>
                              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-400">
                                <span>Maat: <span className="font-semibold text-gray-600">{item.size}</span></span>
                                <span>Kleur: <span className="font-semibold text-gray-600">{item.color}</span></span>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-bold text-center" style={{ color: "#173441" }}>
                            € {item.price.toFixed(2).replace(".", ",")}
                          </div>
                          <div className="flex items-center justify-center gap-1 border-2 border-gray-100 rounded-xl overflow-hidden">
                            <button onClick={() => updateQty(item.id, -1)}
                              className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors font-bold text-lg">−</button>
                            <span className="w-8 text-center text-sm font-bold" style={{ color: "#173441" }}>{item.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)}
                              className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors font-bold text-lg">+</button>
                          </div>
                          <div className="text-sm font-black text-right" style={{ color: "#173441" }}>
                            € {(item.price * item.qty).toFixed(2).replace(".", ",")}
                          </div>
                          <div className="flex justify-end">
                            <button onClick={() => removeItem(item.id)}
                              className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 transition-all">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shop subtotaal */}
                    <div className="px-5 py-3 border-t border-gray-50 flex justify-end items-center gap-6 text-xs text-gray-400" style={{ backgroundColor: "#fafafa" }}>
                      <span>Subtotaal {shop.seller}:</span>
                      <span className="font-black text-sm" style={{ color: "#173441" }}>€ {shopSubtotal.toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>
                );
              })}

              {/* Acties */}
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/sdeal-v2"
                  className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border-2 hover:bg-gray-50 transition-colors"
                  style={{ color: "#173441", borderColor: "#e2e8f0" }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Ga verder met winkelen
                </Link>
                <button
                  onClick={() => setCartItems([])}
                  className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border-2 hover:bg-red-50 transition-colors ml-auto"
                  style={{ color: "#8c1222", borderColor: "rgba(140,18,34,0.3)" }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Leeg winkelwagen
                </button>
              </div>
            </div>

            {/* ── Rechterkolom: samenvatting ── */}
            <div className="space-y-3 lg:sticky lg:top-28">

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="text-base font-black" style={{ color: "#173441" }}>Besteloverzicht</h2>
                </div>
                <div className="px-6 py-5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotaal ({totalItems} artikel{totalItems !== 1 ? "en" : ""})</span>
                    <span className="font-semibold" style={{ color: "#173441" }}>€ {subtotal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  {/* Verzendkosten per shop */}
                  {shopList.map((shop) => (
                    <div key={shop.seller} className="flex justify-between text-sm">
                      <span className="text-gray-400 text-xs">Verzending {shop.seller}</span>
                      {shop.shipping === 0 ? (
                        <span className="text-xs font-semibold text-green-600">Gratis</span>
                      ) : (
                        <span className="text-xs font-semibold" style={{ color: "#173441" }}>€ {shop.shipping.toFixed(2).replace(".", ",")}</span>
                      )}
                    </div>
                  ))}
                  {couponApplied && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Kortingscode (10%)</span>
                      <span className="font-semibold">− € {discount.toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-50 pt-3 flex justify-between items-baseline">
                    <span className="font-black text-base" style={{ color: "#173441" }}>Totaal</span>
                    <span className="text-2xl font-black" style={{ color: "#173441" }}>€ {total.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <p className="text-[10px] text-gray-400">Inclusief BTW</p>
                </div>

                <div className="px-6 pb-6 space-y-3">
                  <button className="w-full py-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Ga door naar afrekenen
                  </button>

                  {/* Betaalmethoden */}
                  <div className="flex items-center justify-center gap-2 flex-wrap pt-1">
                    {["iDEAL", "Visa", "Mastercard", "PayPal", "Apple Pay"].map((m) => (
                      <span key={m} className="text-[10px] font-bold px-2 py-1 rounded-lg border border-gray-100 text-gray-400">{m}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kortingscode */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setCouponOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-sm font-semibold" style={{ color: "#173441" }}>Kortingscode toepassen</span>
                  </div>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${couponOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {couponOpen && (
                  <div className="px-5 pb-5">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        placeholder="Voer je code in"
                        className="flex-1 border-2 rounded-xl px-3 py-2.5 text-sm focus:outline-none transition-colors"
                        style={{ borderColor: couponApplied ? "#22c55e" : "#e2e8f0" }}
                      />
                      <button
                        onClick={() => { if (couponCode) setCouponApplied(true); }}
                        className="px-4 py-2.5 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity"
                        style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                        Toepassen
                      </button>
                    </div>
                    {couponApplied && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Code toegepast — 10% korting
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Trust badges */}
              <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-2.5">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Veilig afrekenen" },
                  { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "Meerdere betaalmethoden" },
                  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", text: "Minimaal 14 dagen retour" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.icon} />
                    </svg>
                    <span className="text-xs text-gray-500">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

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
