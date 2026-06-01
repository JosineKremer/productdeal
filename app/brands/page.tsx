"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const BRANDS = [
  { name: "Adidas", count: 16274, href: "/brands/adidas", domain: "adidas.com", featured: true },
  { name: "Airo Sportswear", count: 63174, href: "/brands/airo-sportswear", domain: "airosportswear.com", featured: false },
  { name: "Awdis", count: 11612, href: "/brands/awdis", domain: "awdis.com", featured: false },
  { name: "ABC Kantoormeubelen", count: 13214, href: "/brands/abc", domain: "abc-kantoormeubelen.nl", featured: false },
  { name: "Beta", count: 12341, href: "/brands/beta", domain: "beta-tools.com", featured: false },
  { name: "Bosch", count: 6024, href: "/brands/bosch", domain: "bosch.com", featured: true },
  { name: "Bullride", count: 12434, href: "/brands/bullride", domain: "bullride.com", featured: false },
  { name: "Connex", count: 5580, href: "/brands/connex", domain: "connex.com", featured: false },
  { name: "Dare 2B", count: 5122, href: "/brands/dare2b", domain: "dare2b.com", featured: false },
  { name: "DeWalt", count: 2471, href: "/brands/dewalt", domain: "dewalt.com", featured: true },
  { name: "Disney", count: 17846, href: "/brands/disney", domain: "disney.com", featured: true },
  { name: "Erima", count: 13829, href: "/brands/erima", domain: "erima.com", featured: false },
  { name: "Fruit of the Loom", count: 12752, href: "/brands/fruit-of-the-loom", domain: "fruit.com", featured: false },
  { name: "Gedore", count: 4427, href: "/brands/gedore", domain: "gedore.com", featured: false },
  { name: "Gildan", count: 37572, href: "/brands/gildan", domain: "gildan.com", featured: false },
  { name: "Harry Potter", count: 3685, href: "/brands/harry-potter", domain: "harrypotter.com", featured: false },
  { name: "Hazet", count: 4152, href: "/brands/hazet", domain: "hazet.de", featured: false },
  { name: "Kustom Kit", count: 5031, href: "/brands/kustom-kit", domain: "kustomkit.com", featured: false },
  { name: "Libero Sportswear", count: 19909, href: "/brands/libero", domain: "liberosportswear.com", featured: false },
  { name: "Makita", count: 8095, href: "/brands/makita", domain: "makita.com", featured: true },
  { name: "Marvel", count: 3565, href: "/brands/marvel", domain: "marvel.com", featured: false },
  { name: "Mountain Warehouse", count: 12064, href: "/brands/mountain-warehouse", domain: "mountainwarehouse.com", featured: false },
  { name: "Nike", count: 8552, href: "/brands/nike", domain: "nike.com", featured: true },
  { name: "Promat", count: 6954, href: "/brands/promat", domain: "promat.be", featured: false },
  { name: "Puma", count: 7182, href: "/brands/puma", domain: "puma.com", featured: true },
  { name: "Regatta", count: 20716, href: "/brands/regatta", domain: "regatta.com", featured: true },
  { name: "Russell", count: 6858, href: "/brands/russell", domain: "russellathletic.com", featured: false },
  { name: "Soccer Tees", count: 8506, href: "/brands/soccer-tees", domain: "soccertees.com", featured: false },
  { name: "Star Wars", count: 3622, href: "/brands/star-wars", domain: "starwars.com", featured: false },
  { name: "Trespass", count: 11993, href: "/brands/trespass", domain: "trespass.com", featured: false },
  { name: "UKSoccershop", count: 65388, href: "/brands/uksoccershop", domain: "uksoccershop.com", featured: false },
  { name: "vidaXL", count: 191526, href: "/brands/vidaxl", domain: "vidaxl.nl", featured: false },
];

const FEATURED = BRANDS.filter((b) => b.featured).sort((a, b) => b.count - a.count);
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function BrandAvatar({ name, domain, size = "sm" }: { name: string; domain: string; size?: "sm" | "md" | "lg" }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === "lg" ? "w-14 h-14" : size === "md" ? "w-11 h-11" : "w-9 h-9";
  const textSize = size === "lg" ? "text-xl" : size === "md" ? "text-sm" : "text-xs";
  const iconSize = size === "lg" ? "w-8 h-8" : size === "md" ? "w-6 h-6" : "w-5 h-5";

  if (failed) {
    return (
      <div className={`${sizeClass} rounded-xl flex items-center justify-center font-extrabold text-white ${textSize} flex-shrink-0`}
        style={{ backgroundColor: "#173441" }}>
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <div className={`${sizeClass} rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden`}>
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={name}
        className={`${iconSize} object-contain`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function BrandsPage() {
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = [...BRANDS].sort((a, b) => a.name.localeCompare(b.name, "nl"));
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((b) => b.name.toLowerCase().includes(q));
    }
    if (activeLetter) {
      result = result.filter((b) => b.name.charAt(0).toUpperCase() === activeLetter);
    }
    return result;
  }, [query, activeLetter]);

  const groupedByLetter = useMemo(() => {
    if (query.trim() || activeLetter) return null;
    const groups: Record<string, typeof BRANDS> = {};
    [...BRANDS].sort((a, b) => a.name.localeCompare(b.name, "nl")).forEach((b) => {
      const letter = b.name.charAt(0).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(b);
    });
    return groups;
  }, [query, activeLetter]);

  const usedLetters = new Set(BRANDS.map((b) => b.name.charAt(0).toUpperCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb + header */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline" style={{ color: "#00ca41" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "#173441" }} className="font-medium">Merken</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold mb-1" style={{ color: "#173441" }}>Alle merken</h1>
            <p className="text-gray-500 text-sm">5.000+ merken · 250.000+ producten</p>
          </div>

          <div className="relative max-w-sm w-full">
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveLetter(null); }}
              placeholder="Zoek merk..."
              className="w-full border-2 rounded-xl py-2.5 pl-4 pr-10 text-sm focus:outline-none bg-white transition-colors"
              style={{ borderColor: query ? "#00ca41" : "#e2e8f0" }}
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Featured brands */}
      {!query && !activeLetter && (
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4" style={{ color: "#173441" }}>Uitgelichte merken</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {FEATURED.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group bg-white rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-gray-200"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-1.5 mb-2 group-hover:scale-105 transition-transform">
                  <FeaturedLogo name={brand.name} domain={brand.domain} />
                </div>
                <span className="font-semibold text-xs leading-tight" style={{ color: "#173441" }}>
                  {brand.name}
                </span>
                <span className="text-xs text-gray-400 mt-0.5">
                  {brand.count.toLocaleString("nl-NL")}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Alphabet filter */}
      {!query && (
        <div className="flex flex-wrap gap-1 mb-6">
          <button
            onClick={() => setActiveLetter(null)}
            className="px-3 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors"
            style={!activeLetter
              ? { backgroundColor: "#173441", color: "white" }
              : { backgroundColor: "#f0f4f8", color: "#173441" }}
          >
            Alle
          </button>
          {ALPHABET.map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
              disabled={!usedLetters.has(letter)}
              className="w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              style={activeLetter === letter
                ? { backgroundColor: "#00ca41", color: "white" }
                : usedLetters.has(letter)
                  ? { backgroundColor: "#f0f4f8", color: "#173441" }
                  : { backgroundColor: "#f0f4f8", color: "#9ca3af" }}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {/* Brand list — grouped or filtered */}
      <section>
        {query.trim() && (
          <p className="text-sm text-gray-500 mb-4">
            {filtered.length} {filtered.length === 1 ? "merk" : "merken"} gevonden voor <strong>&quot;{query}&quot;</strong>
          </p>
        )}

        {groupedByLetter ? (
          Object.entries(groupedByLetter).sort(([a], [b]) => a.localeCompare(b)).map(([letter, brands]) => (
            <div key={letter} id={`letter-${letter}`} className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0"
                  style={{ backgroundColor: "#173441" }}>
                  {letter}
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                {brands.map((brand, i) => (
                  <BrandRow key={brand.name} brand={brand} isLast={i === brands.length - 1} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            {filtered.length > 0 ? (
              filtered.map((brand, i) => (
                <BrandRow key={brand.name} brand={brand} isLast={i === filtered.length - 1} />
              ))
            ) : (
              <div className="py-16 text-center">
                <p className="text-gray-400 text-sm">Geen merken gevonden voor &quot;{query}&quot;</p>
                <button onClick={() => setQuery("")} className="mt-3 text-sm font-semibold" style={{ color: "#00ca41" }}>
                  Wis zoekopdracht
                </button>
              </div>
            )}
          </div>
        )}

        {!query && !activeLetter && (
          <p className="text-center text-sm text-gray-400 mt-6">
            Toont {BRANDS.length} van 5.000+ merken
          </p>
        )}
      </section>
    </div>
  );
}

function FeaturedLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center font-extrabold text-lg" style={{ color: "#173441" }}>
        {name.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt={name}
      className="w-8 h-8 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

function BrandRow({ brand, isLast }: { brand: typeof BRANDS[0]; isLast: boolean }) {
  return (
    <Link
      href={brand.href}
      className={`flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors group ${!isLast ? "border-b border-gray-100" : ""}`}
    >
      <div className="flex items-center gap-3">
        <BrandAvatar name={brand.name} domain={brand.domain} size="sm" />
        <div>
          <span className="font-semibold text-sm group-hover:underline" style={{ color: "#173441" }}>
            {brand.name}
          </span>
          {brand.featured && (
            <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
              Uitgelicht
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400 hidden sm:block">
          {brand.count.toLocaleString("nl-NL")} producten
        </span>
        <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
