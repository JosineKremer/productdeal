import Link from "next/link";
import BrandLogo from "./components/BrandLogo";

const CATEGORIES = [
  { label: "Sports & Outdoor", href: "/categories/sports-outdoor", count: "55.053", image: "/categories/sports-outdoor.jpg", gradient: "linear-gradient(135deg, #1b693d 0%, #00ca41 100%)" },
  { label: "Wonen & Slapen", href: "/categories/wonen-slapen", count: "16.241", image: "/categories/wonen-slapen.jpg", gradient: "linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)" },
  { label: "Mode", href: "/categories/mode", count: "34.114", image: "/categories/mode.jpg", gradient: "linear-gradient(135deg, #880e4f 0%, #e91e63 100%)" },
  { label: "Baby & Kind", href: "/categories/baby-kind", count: "1.656", image: "/categories/baby-kind.jpg", gradient: "linear-gradient(135deg, #e65100 0%, #ffb74d 100%)" },
  { label: "Dier, Tuin & Klussen", href: "/categories/dier-tuin-klussen", count: "28.324", image: "/categories/dier-tuin-klussen.jpg", gradient: "linear-gradient(135deg, #4a148c 0%, #9c27b0 100%)" },
  { label: "Mooi & Gezond", href: "/categories/mooi-gezond", count: "8.240", image: "/categories/mooi-gezond.jpg", gradient: "linear-gradient(135deg, #b71c1c 0%, #ef5350 100%)" },
  { label: "Speelgoed & Hobby", href: "/categories/speelgoed-hobby", count: "10.771", image: "/categories/speelgoed-hobby.jpg", gradient: "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)" },
  { label: "Computer & Elektronica", href: "/categories/computer-elektronica", count: "11.542", image: "/categories/computer-elektronica.jpg", gradient: "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)" },
];

const TOP_BRANDS = [
  { name: "Adidas", count: "16.274", href: "/brands/adidas", logo: "/logos/adidas.svg" },
  { name: "Nike", count: "8.552", href: "/brands/nike", logo: "/logos/nike.svg" },
  { name: "Puma", count: "7.182", href: "/brands/puma", logo: "/logos/puma.svg" },
  { name: "Bosch", count: "6.024", href: "/brands/bosch", logo: "/logos/bosch.svg" },
  { name: "Makita", count: "8.095", href: "/brands/makita", logo: "/logos/makita.svg" },
  { name: "Disney", count: "17.846", href: "/brands/disney", logo: "/logos/disney.svg" },
  { name: "Regatta", count: "20.716", href: "/brands/regatta", logo: "/logos/regatta.svg" },
  { name: "DeWalt", count: "2.471", href: "/brands/dewalt", logo: "/logos/dewalt.svg" },
];

const FEATURED_DEALS = [
  { id: "1", title: "Adidas Combat 2-in-1 Sporttas", brand: "Adidas", price: "€ 79,95", originalPrice: "€ 99,95", options: "2 opties · Grijs · L, S", href: "/products/adidas-combat-sporttas", badge: "Deal", badgeColor: "#e53e3e" },
  { id: "2", title: "Nike Air Max 270 React", brand: "Nike", price: "€ 89,99", originalPrice: "€ 129,99", options: "5 opties · Zwart, Wit", href: "/products/nike-air-max-270", badge: "Populair", badgeColor: "#00ca41" },
  { id: "3", title: "Bosch PSB 1800 Accuschroefboormachine", brand: "Bosch", price: "€ 64,99", originalPrice: null, options: "1 optie", href: "/products/bosch-psb-1800", badge: null, badgeColor: null },
  { id: "4", title: "Real Madrid Terrace Icons Shirt", brand: "Adidas", price: "€ 39,99", originalPrice: "€ 54,99", options: "5 opties · White · S–XXL", href: "/products/real-madrid-terrace", badge: "Sale", badgeColor: "#e53e3e" },
];

const STATS = [
  { value: "1,4 miljoen+", label: "Producten", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" /> },
  { value: "300+", label: "Webshops", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> },
  { value: "10.000+", label: "Merken", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /> },
  { value: "7", label: "Landen", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /> },
];

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md hover:gap-3"
      style={{ backgroundColor: "#f0fdf4", color: "#1b693d", border: "1.5px solid #00ca41" }}
    >
      {children}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "linear-gradient(135deg, #173441 0%, #2c4a6e 55%, #1b693d 100%)" }}
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.07]" style={{ backgroundColor: "#00ca41" }} />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ backgroundColor: "#00ca41" }} />
        <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full opacity-[0.05]" style={{ backgroundColor: "white" }} />

        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ca41] animate-pulse" />
            <span className="opacity-90">Meer dan <strong>1,4 miljoen producten</strong> vergeleken</span>
          </div>

          {/* 3 — hero subkop fix: max-w zodat tekst niet lelijk afbreekt */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Vind de <span style={{ color: "#00ca41" }}>beste deal</span><br />
            altijd en overal
          </h1>
          <p className="text-base md:text-lg opacity-75 mb-8 max-w-sm mx-auto leading-relaxed">
            Vergelijk prijzen van <strong className="opacity-100">300+ webshops</strong> en bespaar direct tijd en geld.
          </p>

          <div className="relative max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
            <div className="flex bg-white">
              <div className="flex items-center pl-5 text-gray-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Zoek producten, merken of categorieën..."
                className="flex-1 bg-white py-4 px-4 text-gray-800 text-base placeholder-gray-400 focus:outline-none"
              />
              <button
                style={{ backgroundColor: "#00ca41" }}
                className="m-1.5 px-6 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Zoeken
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-sm">
            <span className="opacity-50 text-xs">Populair:</span>
            {["Running schoenen", "Tuinmeubelen", "Sportkleding", "Adidas", "Outdoor"].map((tag) => (
              <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all text-white/80 hover:text-white">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 1 — Stats bar met icoontjes */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map(({ value, label, icon }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5 border-r last:border-r-0 border-gray-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#f0fdf4" }}>
                  <svg className="w-5 h-5" fill="none" stroke="#1b693d" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <div>
                  <div className="text-xl font-extrabold leading-none" style={{ color: "#173441" }}>{value}</div>
                  <div className="text-xs text-gray-400 mt-0.5 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Categories */}
        <section className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Categorieën</h2>
            <ArrowLink href="/categories">Alle categorieën</ArrowLink>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href}
                className="group relative overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{ aspectRatio: "4/3" }}>
                {cat.image ? (
                  <img src={cat.image} alt={cat.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0" style={{ background: cat.gradient }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="block font-bold text-white text-sm leading-tight drop-shadow">{cat.label}</span>
                  <span className="text-white/70 text-xs mt-0.5 block">{cat.count} producten</span>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 2 — Featured deals met echte productfoto's */}
        <section className="py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Uitgelichte deals</h2>
            <ArrowLink href="/deals">Alle deals</ArrowLink>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_DEALS.map((deal) => (
              <Link key={deal.id} href={deal.href}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-gray-200 flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {deal.badge && (
                    <span className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: deal.badgeColor! }}>
                      {deal.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="text-xs font-semibold mb-1" style={{ color: "#00ca41" }}>{deal.brand}</div>
                  <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:underline line-clamp-2" style={{ color: "#173441" }}>
                    {deal.title}
                  </h3>
                  <div className="text-xs text-gray-400 mb-3">{deal.options}</div>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold" style={{ color: "#173441" }}>{deal.price}</span>
                      {deal.originalPrice && (
                        <span className="text-xs text-gray-400 line-through ml-2">{deal.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "#00ca41" }}>
                      Bekijk
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4 — Merkkaarten met verbeterde hover */}
        <section className="py-8 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#173441" }}>Populaire merken</h2>
            <ArrowLink href="/brands">Alle merken</ArrowLink>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TOP_BRANDS.map((brand) => (
              <Link key={brand.name} href={brand.href}
                className="group bg-white rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-green-100">
                <div className="w-20 h-14 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                  <BrandLogo name={brand.name} logo={brand.logo} />
                </div>
                <span className="font-semibold text-sm" style={{ color: "#173441" }}>{brand.name}</span>
                <span className="text-xs text-gray-400 mt-0.5">{brand.count} producten</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 6 — CTA banner verbeterd */}
        <section className="mb-10">
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #173441 0%, #1b693d 100%)" }}
          >
            {/* Decoratieve elementen */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "#00ca41" }} />
            <div className="absolute -bottom-10 right-32 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: "#00ca41" }} />

            <div className="relative px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                {/* Trust badge */}
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(0,202,65,0.2)", color: "#00ca41" }}>
                  Voor webshops
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                  Jouw webshop op Productdeal?
                </h2>
                <p className="opacity-75 max-w-md text-sm leading-relaxed">
                  Bereik miljoenen shoppers en verhoog je omzet. Al 300+ webshops gingen je voor.
                </p>
                {/* Mini social proof */}
              </div>
              <div className="flex-shrink-0">
                <Link href="/pricing"
                  className="bg-white font-bold px-8 py-3.5 rounded-full hover:shadow-xl transition-all hover:scale-105 text-sm"
                  style={{ color: "#1b693d" }}>
                  Bekijk pricing →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
