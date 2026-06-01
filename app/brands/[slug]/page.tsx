import Link from "next/link";

const ADIDAS_CATEGORIES = [
  { name: "Sport en Buiten", count: 1777, subcategories: [
    { name: "Sport", count: 743 },
    { name: "Buiten", count: 25 },
    { name: "Sportkleding", count: 1009 },
  ]},
  { name: "Mode", count: 242, subcategories: [
    { name: "Dames", count: 85 },
    { name: "Heren", count: 107 },
    { name: "Meisjes", count: 16 },
    { name: "Jongens", count: 25 },
  ]},
  { name: "Baby & Kind", count: 12, subcategories: [] },
  { name: "Schoonheids- en gezondheidsproducten", count: 36, subcategories: [
    { name: "Make-up", count: 23 },
    { name: "Geuren", count: 5 },
    { name: "Optica", count: 4 },
  ]},
  { name: "Speelgoed en Hobby", count: 41, subcategories: [
    { name: "Poppen", count: 22 },
    { name: "Buitenspeelgoed", count: 6 },
  ]},
  { name: "Computer & Elektronica", count: 8, subcategories: [] },
  { name: "Dieren, tuin & doe-het-zelf", count: 18, subcategories: [] },
];

const ADIDAS_PRODUCTS = [
  {
    id: "a1",
    title: "Adidas Combat 2-in-1 Sporttas - PU - Grijs/Zwart - L",
    price: "€ 79,95",
    priceRange: "€ 79,95 – € 89,95",
    options: "2 opties · Grijs · L, S",
    category: "Sporttassen",
    badge: null,
  },
  {
    id: "a2",
    title: "Real Madrid Terrace Icons Shirt (White)",
    price: "€ 39,99",
    priceRange: "€ 39,99",
    options: "5 opties · White · Large–XXL",
    category: "Shirts",
    badge: "Populair",
  },
  {
    id: "a3",
    title: "2026-2027 Belgium Away Shirt (Womens)",
    price: "€ 79,99",
    priceRange: "€ 79,99 – € 89,99",
    options: "4 opties · Blauw",
    category: "Voetbalshirts",
    badge: "Nieuw",
  },
  {
    id: "a4",
    title: "Adidas Tiro 21 Trainingsbroek Heren",
    price: "€ 34,99",
    priceRange: "€ 34,99 – € 44,99",
    options: "7 opties · Zwart, Marineblauw",
    category: "Trainingsbroeken",
    badge: null,
  },
  {
    id: "a5",
    title: "Adidas Duramo SL Hardloopschoenen Dames",
    price: "€ 54,99",
    priceRange: "€ 54,99 – € 69,99",
    options: "10 opties · Zwart, Wit",
    category: "Hardloopschoenen",
    badge: "Sale",
  },
  {
    id: "a6",
    title: "Adidas Essentials 3-Stripes Hoodie",
    price: "€ 44,99",
    priceRange: "€ 44,99 – € 54,99",
    options: "8 opties · Grijs, Zwart",
    category: "Hoodies",
    badge: null,
  },
  {
    id: "a7",
    title: "Adidas Predator Edge.3 FG Voetbalschoenen",
    price: "€ 89,99",
    priceRange: "€ 89,99 – € 109,99",
    options: "12 opties",
    category: "Voetbalschoenen",
    badge: null,
  },
  {
    id: "a8",
    title: "Adidas Ultraboost 22 Hardloopschoenen",
    price: "€ 149,99",
    priceRange: "€ 149,99 – € 179,99",
    options: "15 opties",
    category: "Hardloopschoenen",
    badge: "Premium",
  },
];

const BADGE_COLORS: Record<string, string> = {
  Populair: "#00ca41",
  Nieuw: "#1976d2",
  Sale: "#e53e3e",
  Premium: "#7b1fa2",
};

export default function BrandPage({
  params,
}: {
  params: { slug: string };
}) {
  const brand = {
    name: "Adidas",
    slug: "adidas",
    totalProducts: 16274,
    activeCategories: 330,
    description:
      "Adidas is een van de grootste sportartikelen fabrikanten ter wereld. Het merk staat bekend om zijn innovatieve schoenen, sportkleding en accessoires voor sport en lifestyle.",
    founded: "1949",
    country: "Duitsland",
    website: "adidas.nl",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline" style={{ color: "#00ca41" }}>Home</Link>
        <span>/</span>
        <Link href="/brands" className="hover:underline" style={{ color: "#00ca41" }}>Merken</Link>
        <span>/</span>
        <span style={{ color: "#173441" }} className="font-medium">{brand.name}</span>
      </nav>

      {/* Brand hero */}
      <div
        className="rounded-2xl p-6 md:p-8 mb-6 flex flex-col md:flex-row items-start md:items-center gap-6"
        style={{ background: "linear-gradient(135deg, #173441 0%, #2c4a6e 100%)" }}
      >
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-extrabold text-3xl flex-shrink-0"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          A
        </div>
        <div className="text-white flex-1">
          <h1 className="text-3xl font-extrabold mb-1">{brand.name}</h1>
          <p className="opacity-70 text-sm mb-3 max-w-lg">{brand.description}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="opacity-50">Producten</span>
              <div className="font-bold">{brand.totalProducts.toLocaleString("nl-NL")}</div>
            </div>
            <div>
              <span className="opacity-50">Categorieën</span>
              <div className="font-bold">{brand.activeCategories}</div>
            </div>
            <div>
              <span className="opacity-50">Opgericht</span>
              <div className="font-bold">{brand.founded}</div>
            </div>
            <div>
              <span className="opacity-50">Land</span>
              <div className="font-bold">{brand.country}</div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="flex-shrink-0 bg-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:shadow-lg transition-all"
          style={{ color: "#173441" }}
        >
          Bezoek {brand.website} →
        </a>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          {/* Category filter */}
          <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm" style={{ color: "#173441" }}>Categorieën</h3>
              <span className="text-xs text-gray-400">{brand.totalProducts.toLocaleString("nl-NL")}</span>
            </div>

            {/* Search within brand */}
            <div className="relative mb-3">
              <input
                type="search"
                placeholder="Zoek categorie..."
                className="w-full border rounded-lg py-1.5 pl-3 pr-8 text-xs focus:outline-none"
                style={{ borderColor: "#e2e8f0" }}
              />
              <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>

            <ul className="space-y-0.5">
              {ADIDAS_CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <button className="w-full flex items-center justify-between text-sm py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <span className="text-gray-700 font-medium truncate">{cat.name}</span>
                    <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{cat.count.toLocaleString("nl-NL")}</span>
                  </button>
                  {cat.subcategories.length > 0 && (
                    <ul className="ml-3 mt-0.5 space-y-0.5">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.name}>
                          <button className="w-full flex items-center justify-between text-xs py-1 px-2 rounded-lg hover:bg-gray-50 transition-colors text-left text-gray-500">
                            <span>{sub.name}</span>
                            <span className="text-gray-400">{sub.count.toLocaleString("nl-NL")}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Product search */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-sm mb-3" style={{ color: "#173441" }}>Zoek producten</h3>
            <div className="relative">
              <input
                type="search"
                placeholder="OfferId of titel..."
                className="w-full border rounded-lg py-1.5 pl-3 pr-8 text-xs focus:outline-none"
                style={{ borderColor: "#e2e8f0" }}
              />
              <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4 gap-3">
            <p className="text-sm text-gray-500">
              <span className="font-semibold" style={{ color: "#173441" }}>
                {brand.totalProducts.toLocaleString("nl-NL")}
              </span> actieve producten
            </p>
            <div className="flex items-center gap-3">
              <select
                className="border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none"
                style={{ borderColor: "#e2e8f0", color: "#173441" }}
              >
                <option>50 per pagina</option>
                <option>25 per pagina</option>
                <option>100 per pagina</option>
              </select>
              <select
                className="border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none"
                style={{ borderColor: "#e2e8f0", color: "#173441" }}
              >
                <option>Meest relevant</option>
                <option>Prijs: laag–hoog</option>
                <option>Prijs: hoog–laag</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ADIDAS_PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 border border-transparent hover:border-gray-100 flex flex-col"
              >
                {/* Image placeholder */}
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf6 100%)" }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center opacity-25"
                    style={{ backgroundColor: "#173441" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {product.badge && (
                    <span
                      className="absolute top-2.5 left-2.5 text-white text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: BADGE_COLORS[product.badge] ?? "#173441" }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="text-xs font-semibold mb-1" style={{ color: "#00ca41" }}>
                    {product.category}
                  </div>
                  <h3
                    className="font-semibold text-xs leading-snug mb-2 group-hover:underline line-clamp-2"
                    style={{ color: "#173441" }}
                  >
                    {product.title}
                  </h3>
                  <div className="text-xs text-gray-400 mb-3">{product.options}</div>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-base font-extrabold" style={{ color: "#173441" }}>
                        {product.price}
                      </span>
                      {product.priceRange !== product.price && (
                        <div className="text-xs text-gray-400">{product.priceRange}</div>
                      )}
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: "#00ca41" }}
                    >
                      Bekijk
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Store comparison CTA */}
          <div
            className="mt-6 rounded-2xl p-5 flex items-center justify-between gap-4"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <div>
              <p className="font-semibold text-sm" style={{ color: "#173441" }}>
                Kies optie & vergelijk winkels
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Selecteer een product om te zien waar je het goedkoopst kunt bestellen.
              </p>
            </div>
            <button
              className="flex-shrink-0 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: "#00ca41" }}
            >
              Kies optie
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3, "...", 326].map((page, i) => (
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
