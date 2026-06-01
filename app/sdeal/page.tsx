import Link from "next/link";
import SportdealLogo from "@/app/components/SportdealLogo";

// Brand colors
// Primary orange:  #e2603f
// Accent yellow:   #f5ae4c
// Dark navy:       #173441

const CATEGORIES = [
  { label: "Fitness", href: "/sdeal/categories/fitness", count: "42.380", gradient: "linear-gradient(135deg, #e2603f 0%, #f5ae4c 100%)", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Fietsen", href: "/sdeal/categories/fietsen", count: "38.120", gradient: "linear-gradient(135deg, #173441 0%, #2a5470 100%)", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
  { label: "Outdoor", href: "/sdeal/categories/outdoor", count: "29.540", gradient: "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" },
  { label: "Watersport", href: "/sdeal/categories/watersport", count: "14.860", gradient: "linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { label: "Sportkleding", href: "/sdeal/categories/sportkleding", count: "55.210", gradient: "linear-gradient(135deg, #e2603f 0%, #c0392b 100%)", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
  { label: "Spellen & Hobby", href: "/sdeal/categories/spellen", count: "18.930", gradient: "linear-gradient(135deg, #6a1b9a 0%, #ab47bc 100%)", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Vechtsporten", href: "/sdeal/categories/vechtsporten", count: "8.450", gradient: "linear-gradient(135deg, #b71c1c 0%, #ef5350 100%)", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Gezondheid", href: "/sdeal/categories/gezondheid", count: "11.670", gradient: "linear-gradient(135deg, #00695c 0%, #26a69a 100%)", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

const TOP_BRANDS = [
  { name: "Nike", domain: "nike.com", count: "8.552", href: "/sdeal/brands/nike" },
  { name: "Adidas", domain: "adidas.com", count: "16.274", href: "/sdeal/brands/adidas" },
  { name: "Puma", domain: "puma.com", count: "7.182", href: "/sdeal/brands/puma" },
  { name: "Under Armour", domain: "underarmour.com", count: "3.840", href: "/sdeal/brands/under-armour" },
  { name: "Asics", domain: "asics.com", count: "4.120", href: "/sdeal/brands/asics" },
  { name: "New Balance", domain: "newbalance.com", count: "2.980", href: "/sdeal/brands/new-balance" },
  { name: "Garmin", domain: "garmin.com", count: "2.340", href: "/sdeal/brands/garmin" },
  { name: "Decathlon", domain: "decathlon.nl", count: "5.610", href: "/sdeal/brands/decathlon" },
];

const FEATURED_DEALS = [
  { id: "1", title: "Nike Air Zoom Pegasus 40 Hardloopschoen", brand: "Nike", price: "€ 94,99", originalPrice: "€ 129,99", badge: "Deal", badgeColor: "#e2603f" },
  { id: "2", title: "Adidas Tiro 23 Trainingsbroek Heren", brand: "Adidas", price: "€ 29,99", originalPrice: "€ 44,95", badge: "Sale", badgeColor: "#e2603f" },
  { id: "3", title: "Garmin Forerunner 255 GPS Sporthorloge", brand: "Garmin", price: "€ 249,00", originalPrice: null, badge: "Populair", badgeColor: "#173441" },
  { id: "4", title: "Puma Teamgoal Keepershandschoenen", brand: "Puma", price: "€ 22,95", originalPrice: "€ 29,99", badge: null, badgeColor: null },
];

const STATS = [
  { value: "250.000+", label: "Sportproducten" },
  { value: "150+", label: "Webshops" },
  { value: "500+", label: "Sportmerken" },
  { value: "8", label: "Sporten" },
];

const NAV_LINKS = ["Fitness", "Fietsen", "Outdoor", "Watersport", "Sportkleding", "Spellen & Hobby", "Merken"];

export default function SportdealHomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f9fa" }}>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Topbar */}
        <div className="hidden md:block text-white text-xs py-1.5 px-4" style={{ backgroundColor: "#173441" }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="opacity-70">Vergelijk de beste sportdeals van 150+ webshops</span>
            <div className="flex gap-5 opacity-80">
              <Link href="#" className="hover:opacity-100">Over ons</Link>
              <Link href="#" className="hover:opacity-100">Contact</Link>
              <Link href="#" className="hover:opacity-100">Partners</Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/sdeal" className="flex-shrink-0">
            <SportdealLogo className="h-9 w-auto" />
          </Link>
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Zoek sportproducten, merken of categorieën..."
                className="w-full border-2 rounded-full py-2.5 pl-5 pr-14 text-sm focus:outline-none"
                style={{ borderColor: "#e2e8f0" }}
              />
              <button
                className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
                style={{ backgroundColor: "#e2603f" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category nav */}
        <nav className="hidden md:block" style={{ backgroundColor: "#173441" }}>
          <div className="max-w-7xl mx-auto px-4 flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href={`/sdeal/categories/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-white text-sm font-medium px-4 py-3 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "linear-gradient(135deg, #173441 0%, #1f4a62 55%, #e2603f 150%)" }}
      >
        {/* Decoratie */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-[0.08]" style={{ backgroundColor: "#f5ae4c" }} />
        <div className="absolute -bottom-20 -left-20 w-[480px] h-[480px] rounded-full opacity-[0.06]" style={{ backgroundColor: "#e2603f" }} />
        <div className="absolute top-8 right-1/4 w-32 h-32 rounded-full opacity-[0.05]" style={{ backgroundColor: "white" }} />

        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#f5ae4c" }} />
            <span className="opacity-90">Meer dan <strong>250.000 sportproducten</strong> vergeleken</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            De beste <span style={{ color: "#f5ae4c" }}>sportdeal</span><br />
            altijd gevonden
          </h1>
          <p className="text-base md:text-lg opacity-75 mb-8 max-w-sm mx-auto leading-relaxed">
            Vergelijk prijzen van <strong className="opacity-100">150+ sportwebshops</strong> en bespaar direct.
          </p>

          {/* Zoekbalk */}
          <div className="relative max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
            <div className="flex bg-white">
              <div className="flex items-center pl-5 text-gray-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Zoek sportschoenen, fietsen, rackets..."
                className="flex-1 bg-white py-4 px-4 text-gray-800 text-base placeholder-gray-400 focus:outline-none"
              />
              <button
                className="m-1.5 px-6 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
                style={{ backgroundColor: "#e2603f" }}
              >
                Zoeken
              </button>
            </div>
          </div>

          {/* Populaire tags */}
          <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-sm">
            <span className="opacity-50 text-xs">Populair:</span>
            {["Hardloopschoenen", "Racefiets", "Yogamat", "Sporthorloge", "Voetbal"].map((tag) => (
              <Link key={tag} href={`/sdeal/search?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all text-white/80 hover:text-white text-xs">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-6 py-5 text-center md:text-left">
                <div className="text-xl font-extrabold leading-none" style={{ color: "#173441" }}>{value}</div>
                <div className="text-xs text-gray-400 mt-0.5 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* ── Categorieën ── */}
        <section className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Sportcategorieën</h2>
            <Link
              href="/sdeal/categories"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md"
              style={{ backgroundColor: "#fff4ee", color: "#e2603f", border: "1.5px solid #e2603f" }}
            >
              Alle categorieën
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="absolute inset-0" style={{ background: cat.gradient }} />
                {/* Patroon overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="80" cy="20" r="40" fill="white" />
                    <circle cx="20" cy="80" r="30" fill="white" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                    </svg>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-white text-sm leading-tight drop-shadow">{cat.label}</span>
                    <span className="text-white/70 text-xs mt-0.5 block">{cat.count} producten</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Uitgelichte deals ── */}
        <section className="py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Uitgelichte deals</h2>
            <Link
              href="/sdeal/deals"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md"
              style={{ backgroundColor: "#fff4ee", color: "#e2603f", border: "1.5px solid #e2603f" }}
            >
              Alle deals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_DEALS.map((deal) => (
              <Link
                key={deal.id}
                href="#"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-orange-100 flex flex-col"
              >
                {/* Afbeelding placeholder */}
                <div className="relative h-48 overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f8f0eb 0%, #fde8de 100%)" }}>
                  <svg className="w-14 h-14 opacity-20" fill="none" stroke="#e2603f" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {deal.badge && (
                    <span className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: deal.badgeColor! }}>
                      {deal.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="text-xs font-semibold mb-1" style={{ color: "#e2603f" }}>{deal.brand}</div>
                  <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:underline line-clamp-2" style={{ color: "#173441" }}>
                    {deal.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold" style={{ color: "#173441" }}>{deal.price}</span>
                      {deal.originalPrice && (
                        <span className="text-xs text-gray-400 line-through ml-2">{deal.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "#e2603f" }}>
                      Bekijk
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Populaire merken ── */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Populaire sportmerken</h2>
            <Link
              href="/sdeal/brands"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md"
              style={{ backgroundColor: "#fff4ee", color: "#e2603f", border: "1.5px solid #e2603f" }}
            >
              Alle merken
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TOP_BRANDS.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group bg-white rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-orange-100"
              >
                <div className="w-16 h-12 flex items-center justify-center mb-3">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=64`}
                    alt={brand.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="font-semibold text-sm" style={{ color: "#173441" }}>{brand.name}</span>
                <span className="text-xs text-gray-400 mt-0.5">{brand.count} producten</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── USP banner ── */}
        <section className="py-6 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Altijd de laagste prijs", desc: "Wij vergelijken dagelijks 150+ webshops zodat jij niet hoeft te zoeken." },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Snel geleverd", desc: "Bekijk levertijden per winkel en kies de snelste bezorging voor jou." },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Betrouwbare webshops", desc: "Alleen gecertificeerde winkels met goede beoordelingen op Sportdeal." },
            ].map((usp) => (
              <div key={usp.title} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#fff4ee" }}>
                  <svg className="w-5 h-5" fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={usp.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#173441" }}>{usp.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA banner ── */}
        <section className="mb-10">
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #173441 0%, #e2603f 160%)" }}
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "#f5ae4c" }} />
            <div className="absolute -bottom-10 right-32 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: "#f5ae4c" }} />

            <div className="relative px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(245,174,76,0.2)", color: "#f5ae4c" }}>
                  Voor sportwebshops
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                  Jouw webshop op Sportdeal?
                </h2>
                <p className="opacity-75 max-w-md text-sm leading-relaxed">
                  Bereik duizenden sporters per dag en verhoog je omzet. Al 150+ webshops gingen je voor.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="#"
                  className="font-bold px-8 py-3.5 rounded-full hover:shadow-xl transition-all hover:scale-105 text-sm block"
                  style={{ backgroundColor: "#f5ae4c", color: "#173441" }}
                >
                  Bekijk partnership →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#173441" }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <SportdealLogo className="h-8 w-auto mb-4" />
              <p className="text-sm opacity-60 leading-relaxed">
                Vergelijk sportproducten van 150+ webshops. Altijd de beste deal.
              </p>
            </div>
            {[
              { title: "Service", links: ["Contact", "Over ons", "FAQ", "Vacatures"] },
              { title: "Zakelijk", links: ["Onze pakketten", "Koppelingen", "Word Partner", "Partner login"] },
              { title: "Landen", links: ["Nederland", "België", "Duitsland", "Frankrijk"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-sm mb-4" style={{ color: "#f5ae4c" }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-40">
            <span>© 2026 SDeal BV · Alle rechten voorbehouden</span>
            <div className="flex gap-4">
              <Link href="#">Algemene voorwaarden</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
