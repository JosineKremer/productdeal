import Link from "next/link";
import Image from "next/image";

// Sportdeal brand colors
// #e2603f  oranje
// #f5ae4c  geel
// #173441  donkerblauw

const HERO_TILES = [
  { label: "Fitness", count: "42.380", gradient: "linear-gradient(135deg,#e2603f,#f5ae4c)", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Fietsen", count: "38.120", gradient: "linear-gradient(135deg,#173441,#2a5470)", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 6h-2l-2 7h8l-2-7z" },
  { label: "Outdoor", count: "29.540", gradient: "linear-gradient(135deg,#1b693d,#38a169)", icon: "M5 3l14 9-14 9V3z" },
  { label: "Watersport", count: "14.860", gradient: "linear-gradient(135deg,#0277bd,#4fc3f7)", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
  { label: "Sportkleding", count: "55.210", gradient: "linear-gradient(135deg,#b71c1c,#e53e3e)", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
  { label: "Vechtsporten", count: "8.450", gradient: "linear-gradient(135deg,#4a148c,#9c27b0)", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const SPORT_BRANDS = [
  { name: "Nike", domain: "nike.com" },
  { name: "Adidas", domain: "adidas.com" },
  { name: "Puma", domain: "puma.com" },
  { name: "Under Armour", domain: "underarmour.com" },
  { name: "Asics", domain: "asics.com" },
  { name: "New Balance", domain: "newbalance.com" },
  { name: "Garmin", domain: "garmin.com" },
  { name: "Decathlon", domain: "decathlon.nl" },
  { name: "Columbia", domain: "columbia.com" },
  { name: "The North Face", domain: "thenorthface.com" },
];

const DEALS = [
  { title: "Nike Air Zoom Pegasus 40", brand: "Nike", price: "€ 94,99", was: "€ 129,99", tag: "−27%", img: "/cat-schoenen.jpg" },
  { title: "Adidas Tiro 23 Trainingsset", brand: "Adidas", price: "€ 54,99", was: "€ 79,95", tag: "−31%", img: "/cat-shirt.jpg" },
  { title: "Garmin Forerunner 255", brand: "Garmin", price: "€ 249,00", was: null, tag: "Populair", img: "/cat-compressie.jpg" },
  { title: "Puma Keepershandschoenen", brand: "Puma", price: "€ 22,95", was: "€ 29,99", tag: "−23%", img: "/cat-hoodie.jpg" },
];

const NAV = ["Fitness", "Fietsen", "Outdoor", "Watersport", "Sportkleding", "Spellen & Hobby", "Merken"];

export default function SportdealV2() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
          {/* Echt SVG logo */}
          <Link href="/sdeal-v2" className="flex-shrink-0">
            <Image
              src="/sportdeal-logo.svg"
              alt="Sportdeal"
              width={160}
              height={42}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Horizontale nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {NAV.map((item) => (
              <Link
                key={item}
                href="#"
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Zoekicoon rechts */}
          <button className="ml-auto p-2.5 rounded-xl hover:bg-gray-50 transition-colors" style={{ color: "#173441" }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
          </button>
        </div>
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
              Vergelijk <strong className="text-white/90">150+ sportwebshops</strong> en vind<br className="hidden md:block" />
              de laagste prijs op jouw zomersport.
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

      {/* ── Deals: horizontale scroll strip ── */}
      <section className="py-14" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#e2603f" }}>Dagelijks bijgewerkt</p>
              <h2 className="text-3xl font-black" style={{ color: "#173441" }}>Beste deals nu</h2>
            </div>
            <Link href="#" className="text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: "#e2603f" }}>
              Alle deals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {DEALS.map((deal) => (
              <Link
                key={deal.title}
                href="#"
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                {/* Kortingsbadge */}
                <div className="absolute top-3 left-3 z-10 text-white text-xs font-black px-2.5 py-1 rounded-full" style={{ backgroundColor: deal.was ? "#e2603f" : "#173441" }}>
                  {deal.tag}
                </div>
                {/* Afbeelding */}
                <div className="h-44 overflow-hidden" style={{ background: "linear-gradient(135deg,#fff4ee,#ffe8de)" }}>
                  <img
                    src={deal.img}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold mb-1" style={{ color: "#e2603f" }}>{deal.brand}</p>
                  <h3 className="text-sm font-bold leading-snug mb-3 line-clamp-2 group-hover:underline" style={{ color: "#173441" }}>
                    {deal.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black" style={{ color: "#173441" }}>{deal.price}</span>
                      {deal.was && <span className="text-xs text-gray-400 line-through ml-1.5">{deal.was}</span>}
                    </div>
                    <span className="w-8 h-8 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Merken: brede scroll strip ── */}
      <section className="py-14 overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#e2603f" }}>500+ sportmerken</p>
              <h2 className="text-3xl font-black" style={{ color: "#173441" }}>Shop per merk</h2>
            </div>
            <Link href="#" className="text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: "#e2603f" }}>
              Alle merken
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4-4 4M3 12h18" />
              </svg>
            </Link>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {SPORT_BRANDS.map((brand) => (
              <Link
                key={brand.name}
                href="#"
                className="group flex-shrink-0 bg-white rounded-2xl px-5 py-4 flex flex-col items-center gap-2 border border-gray-100 hover:shadow-lg hover:border-orange-100 hover:-translate-y-0.5 transition-all duration-200 min-w-[110px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=64`}
                    alt={brand.name}
                    className="w-9 h-9 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-xs font-bold text-center leading-tight" style={{ color: "#173441" }}>{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── USP balk ── */}
      <section style={{ background: "linear-gradient(90deg,#173441 0%,#1f4a62 100%)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Altijd de laagste prijs", desc: "Dagelijks vergelijken we 150+ sportwebshops. Jij kiest de beste prijs." },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Direct geleverd", desc: "Bekijk levertijden per winkel en kies de snelste optie voor jou." },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Gecertificeerde shops", desc: "Alleen betrouwbare winkels met hoge klantwaarderingen op Sportdeal." },
            ].map((usp) => (
              <div key={usp.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(226,96,63,0.2)" }}>
                  <svg className="w-6 h-6" fill="none" stroke="#f5ae4c" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={usp.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{usp.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA voor webshops ── */}
      <section className="py-16" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#173441" }}>
            Jouw webshop op Sportdeal?
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Bereik dagelijks duizenden sporters. Al 150+ sportwebshops adverteren op Sportdeal en verhogen hun omzet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#"
              className="px-8 py-4 rounded-2xl text-white font-bold text-sm transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}
            >
              Bekijk partnership →
            </Link>
            <Link
              href="#"
              className="px-8 py-4 rounded-2xl font-bold text-sm border-2 transition-all hover:bg-gray-50"
              style={{ borderColor: "#e2e8f0", color: "#173441" }}
            >
              Meer informatie
            </Link>
          </div>
        </div>
      </section>

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
