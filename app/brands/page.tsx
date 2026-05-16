import Link from "next/link";

const BRANDS = [
  { name: "vidaXL", count: 191526, href: "/brands/vidaxl", featured: false },
  { name: "UKSoccershop", count: 65388, href: "/brands/uksoccershop", featured: false },
  { name: "Airo Sportswear", count: 63174, href: "/brands/airo-sportswear", featured: false },
  { name: "Gildan", count: 37572, href: "/brands/gildan", featured: false },
  { name: "Regatta", count: 20716, href: "/brands/regatta", featured: true },
  { name: "Libero Sportswear", count: 19909, href: "/brands/libero", featured: false },
  { name: "Disney", count: 17846, href: "/brands/disney", featured: true },
  { name: "Adidas", count: 16274, href: "/brands/adidas", featured: true },
  { name: "Erima", count: 13829, href: "/brands/erima", featured: false },
  { name: "ABC Kantoormeubelen", count: 13214, href: "/brands/abc", featured: false },
  { name: "Fruit of the Loom", count: 12752, href: "/brands/fruit-of-the-loom", featured: false },
  { name: "Bullride", count: 12434, href: "/brands/bullride", featured: false },
  { name: "Beta", count: 12341, href: "/brands/beta", featured: false },
  { name: "Mountain Warehouse", count: 12064, href: "/brands/mountain-warehouse", featured: false },
  { name: "Trespass", count: 11993, href: "/brands/trespass", featured: false },
  { name: "Awdis", count: 11612, href: "/brands/awdis", featured: false },
  { name: "Nike", count: 8552, href: "/brands/nike", featured: true },
  { name: "Soccer Tees", count: 8506, href: "/brands/soccer-tees", featured: false },
  { name: "Makita", count: 8095, href: "/brands/makita", featured: true },
  { name: "Puma", count: 7182, href: "/brands/puma", featured: true },
  { name: "Promat", count: 6954, href: "/brands/promat", featured: false },
  { name: "Russell", count: 6858, href: "/brands/russell", featured: false },
  { name: "Bosch", count: 6024, href: "/brands/bosch", featured: true },
  { name: "Connex", count: 5580, href: "/brands/connex", featured: false },
  { name: "Dare 2B", count: 5122, href: "/brands/dare2b", featured: false },
  { name: "Kustom Kit", count: 5031, href: "/brands/kustom-kit", featured: false },
  { name: "Gedore", count: 4427, href: "/brands/gedore", featured: false },
  { name: "Hazet", count: 4152, href: "/brands/hazet", featured: false },
  { name: "Harry Potter", count: 3685, href: "/brands/harry-potter", featured: false },
  { name: "Star Wars", count: 3622, href: "/brands/star-wars", featured: false },
  { name: "Marvel", count: 3565, href: "/brands/marvel", featured: false },
  { name: "DeWalt", count: 2471, href: "/brands/dewalt", featured: true },
];

const FEATURED = BRANDS.filter((b) => b.featured);

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const BRAND_COLORS: Record<string, string> = {
  A: "#173441",
  B: "#1b693d",
  C: "#2c4a6e",
  D: "#7b1fa2",
  E: "#c2185b",
  F: "#e65100",
  G: "#1976d2",
  H: "#00838f",
  I: "#558b2f",
  J: "#4527a0",
  K: "#6a1b9a",
  L: "#2e7d32",
  M: "#1565c0",
  N: "#4e342e",
  O: "#37474f",
  P: "#880e4f",
  Q: "#004d40",
  R: "#b71c1c",
  S: "#173441",
  T: "#1b693d",
  U: "#4a148c",
  V: "#0d47a1",
  W: "#1b5e20",
  X: "#212121",
  Y: "#e65100",
  Z: "#263238",
};

function brandColor(name: string) {
  return BRAND_COLORS[name.charAt(0).toUpperCase()] ?? "#173441";
}

export default function BrandsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
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

          {/* Search */}
          <div className="relative max-w-sm w-full">
            <input
              type="search"
              placeholder="Zoek merk..."
              className="w-full border-2 rounded-xl py-2.5 pl-4 pr-10 text-sm focus:outline-none bg-white"
              style={{ borderColor: "#e2e8f0" }}
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Featured brands */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4" style={{ color: "#173441" }}>Uitgelichte merken</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {FEATURED.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="group bg-white rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-200 border border-transparent hover:border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-lg mb-2 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: brandColor(brand.name) }}
              >
                {brand.name.charAt(0)}
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

      {/* Alphabet filter */}
      <div className="flex flex-wrap gap-1 mb-6">
        {ALPHABET.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors bg-[#f0f4f8] text-[#173441] hover:bg-[#173441] hover:text-white"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* All brands list */}
      <section>
        <h2 className="text-lg font-bold mb-4" style={{ color: "#173441" }}>Alle merken (A–Z)</h2>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {BRANDS.map((brand, i) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="flex items-center justify-between px-5 py-3.5 border-b last:border-0 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: brandColor(brand.name) }}
                >
                  {brand.name.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-sm group-hover:underline" style={{ color: "#173441" }}>
                    {brand.name}
                  </span>
                  {brand.featured && (
                    <span
                      className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                    >
                      Uitgelicht
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">
                  {brand.count.toLocaleString("nl-NL")} producten
                </span>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Toont 32 van 5.000+ merken
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all hover:shadow-md"
            style={{ borderColor: "#00ca41", color: "#00ca41" }}
          >
            Meer merken laden
          </button>
        </div>
      </section>
    </div>
  );
}
