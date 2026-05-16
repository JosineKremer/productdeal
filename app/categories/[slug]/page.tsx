import Link from "next/link";
import FilterDrawer from "@/app/components/FilterDrawer";

const SUBCATEGORIES = [
  { name: "Sport", count: 35280, href: "/categories/sports-outdoor/sport" },
  { name: "Buiten", count: 5177, href: "/categories/sports-outdoor/buiten" },
  { name: "Sportkleding", count: 14596, href: "/categories/sports-outdoor/sportkleding" },
  { name: "Running", count: 8240, href: "/categories/sports-outdoor/running" },
  { name: "Fitness", count: 6890, href: "/categories/sports-outdoor/fitness" },
  { name: "Watersport", count: 1240, href: "/categories/sports-outdoor/watersport" },
  { name: "Fietsen", count: 4320, href: "/categories/sports-outdoor/fietsen" },
  { name: "Kamperen", count: 3100, href: "/categories/sports-outdoor/kamperen" },
];

const FILTERS = {
  Merk: ["Adidas", "Nike", "Puma", "Regatta", "Under Armour", "Salomon", "Columbia"],
  Prijs: ["€0 – €25", "€25 – €50", "€50 – €100", "€100 – €200", "€200+"],
  Geslacht: ["Heren", "Dames", "Unisex", "Kinderen"],
  Kleur: ["Zwart", "Wit", "Blauw", "Groen", "Rood", "Grijs"],
};

const PRODUCTS = [
  { id: "1", title: "Adidas Combat 2-in-1 Sporttas - Grijs/Zwart", brand: "Adidas", price: "€ 79,95", originalPrice: "€ 99,95", options: "2 opties", badge: "Sale", badgeColor: "#e53e3e" },
  { id: "2", title: "Nike Dri-FIT Academy Trainingsshirt", brand: "Nike", price: "€ 24,99", originalPrice: null, options: "8 opties", badge: "Populair", badgeColor: "#00ca41" },
  { id: "3", title: "Regatta Great Outdoors Fleece Jas", brand: "Regatta", price: "€ 39,99", originalPrice: "€ 59,99", options: "6 opties", badge: null, badgeColor: null },
  { id: "4", title: "Puma Essentials Logo Hoodie", brand: "Puma", price: "€ 34,95", originalPrice: null, options: "5 opties", badge: null, badgeColor: null },
  { id: "5", title: "Salomon Speedcross 5 Trail Running Schoenen", brand: "Salomon", price: "€ 114,95", originalPrice: "€ 139,95", options: "12 opties", badge: "Deal", badgeColor: "#e53e3e" },
  { id: "6", title: "Columbia Watertight II Regenjas", brand: "Columbia", price: "€ 89,99", originalPrice: null, options: "10 opties", badge: null, badgeColor: null },
  { id: "7", title: "Under Armour HeatGear Compressieshirt", brand: "Under Armour", price: "€ 29,99", originalPrice: "€ 39,99", options: "4 opties", badge: "Sale", badgeColor: "#e53e3e" },
  { id: "8", title: "Adidas Tiro 21 Trainingsbroek", brand: "Adidas", price: "€ 34,99", originalPrice: null, options: "7 opties", badge: null, badgeColor: null },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = "Sports & Outdoor";
  const productCount = "55.053";

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-5">
        <Link href="/" className="hover:underline" style={{ color: "#00ca41" }}>Home</Link>
        <span className="text-gray-300">/</span>
        <Link href="/categories" className="hover:underline" style={{ color: "#00ca41" }}>Categorieën</Link>
        <span className="text-gray-300">/</span>
        <span style={{ color: "#173441" }} className="font-medium">{categoryName}</span>
      </nav>

      {/* Category header met foto als achtergrond */}
      <div className="relative rounded-2xl overflow-hidden mb-6" style={{ minHeight: 200 }}>
        <img
          src="/categories/sports-outdoor.jpg"
          alt={categoryName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(23,52,65,0.88) 0%, rgba(27,105,61,0.75) 100%)" }} />
        <div className="relative z-10 p-7 flex flex-col gap-4">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(0,202,65,0.2)", color: "#00ca41" }}>
                Categorie
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold mb-1 tracking-tight">{categoryName}</h1>
            <p className="opacity-70 text-sm">{productCount} producten van 300+ webshops</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SUBCATEGORIES.slice(0, 4).map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium border border-white/30 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block w-60 flex-shrink-0">
          {/* Subcategorieën */}
          <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
            <h3 className="font-bold text-sm mb-4" style={{ color: "#173441" }}>Subcategorieën</h3>
            <ul className="space-y-0.5">
              {SUBCATEGORIES.map((sub) => (
                <li key={sub.href}>
                  <Link
                    href={sub.href}
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors group"
                    style={{ color: "#374151" }}
                  >
                    <span className="group-hover:text-[#1b693d] transition-colors">{sub.name}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md">{sub.count.toLocaleString("nl-NL")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Filters */}
          {Object.entries(FILTERS).map(([filterName, options]) => (
            <div key={filterName} className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
              <h3 className="font-bold text-sm mb-3" style={{ color: "#173441" }}>{filterName}</h3>
              <ul className="space-y-2">
                {options.map((opt) => (
                  <li key={opt}>
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded cursor-pointer" style={{ accentColor: "#00ca41" }} />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{opt}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Productgrid */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-5 gap-3">
            <p className="text-sm text-gray-500">
              <span className="font-bold" style={{ color: "#173441" }}>{productCount}</span> producten gevonden
            </p>
            <div className="flex items-center gap-2">
              <select
                className="border rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 cursor-pointer"
                style={{ borderColor: "#e2e8f0", color: "#173441" }}
              >
                <option>Meest relevant</option>
                <option>Prijs: laag–hoog</option>
                <option>Prijs: hoog–laag</option>
                <option>Nieuwste eerst</option>
              </select>
              <FilterDrawer subcategories={SUBCATEGORIES} filters={FILTERS} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-gray-200 hover:-translate-y-0.5 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: product.badgeColor! }}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-3.5 flex flex-col flex-1">
                  <div className="text-xs font-semibold mb-1" style={{ color: "#00ca41" }}>{product.brand}</div>
                  <h3 className="font-semibold text-xs leading-snug mb-2 line-clamp-2 group-hover:underline" style={{ color: "#173441" }}>
                    {product.title}
                  </h3>
                  <div className="text-xs text-gray-400 mb-3">{product.options}</div>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-sm font-extrabold" style={{ color: "#173441" }}>{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through ml-1">{product.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: "#00ca41" }}>
                      Bekijk
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Paginering */}
          <div className="flex justify-center mt-10 gap-1.5">
            {[1, 2, 3, "...", 48].map((page, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-xl text-sm font-semibold transition-colors"
                style={
                  page === 1
                    ? { backgroundColor: "#173441", color: "white" }
                    : { backgroundColor: "white", color: "#173441", border: "1px solid #e2e8f0" }
                }
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
