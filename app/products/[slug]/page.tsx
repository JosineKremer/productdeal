import Link from "next/link";

const RELATED_PRODUCTS = [
  { id: "r1", title: "Adidas Defender III Sporttas", brand: "Adidas", price: "€ 34,99", href: "/products/adidas-defender" },
  { id: "r2", title: "Nike Brasilia Gymtas", brand: "Nike", price: "€ 29,99", href: "/products/nike-brasilia" },
  { id: "r3", title: "Puma Formation Ball Bag", brand: "Puma", price: "€ 19,99", href: "/products/puma-formation" },
  { id: "r4", title: "Under Armour Undeniable Duffle", brand: "Under Armour", price: "€ 44,99", href: "/products/ua-undeniable" },
];

const STORES = [
  { name: "SportsDirect", price: "€ 79,95", delivery: "Gratis bezorging", url: "#", rating: 4.5, reviews: 1204 },
  { name: "Zalando", price: "€ 84,95", delivery: "Gratis bezorging · 100 dagen retour", url: "#", rating: 4.7, reviews: 8921 },
  { name: "Decathlon", price: "€ 89,99", delivery: "€ 3,99 bezorging", url: "#", rating: 4.3, reviews: 3456 },
  { name: "bol.com", price: "€ 94,95", delivery: "Gratis bezorging morgen", url: "#", rating: 4.6, reviews: 15203 },
];

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = {
    title: "Adidas Combat 2-in-1 Sporttas",
    brand: "Adidas",
    brandHref: "/brands/adidas",
    category: "Sporttassen",
    categoryHref: "/categories/sports-outdoor/sporttassen",
    sku: "sdeal-12345",
    price: "€ 79,95",
    priceRange: "€ 79,95 – € 94,95",
    description:
      "De Adidas Combat 2-in-1 Sporttas is een veelzijdige tas die zowel als rugzak als schoudertip gedragen kan worden. Gemaakt van hoogwaardig PU-materiaal voor extra duurzaamheid. Ideaal voor de sportschool, wedstrijden of dagelijks gebruik.",
    features: [
      "2-in-1 draagfunctie: rugzak en schoudertas",
      "Materiaal: PU (kunstleer) – waterafstotend",
      "Geïsoleerd zijvak voor drinken",
      "Ventilerend schoenencompartiment",
      "Beschikbaar in maten S en L",
    ],
    colors: ["Grijs/Zwart", "Blauw/Wit", "Zwart/Rood"],
    sizes: ["S", "L"],
    options: 2,
    storeCount: 4,
    lowestPrice: "€ 79,95",
    images: 0,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link href="/" className="hover:underline" style={{ color: "#00ca41" }}>Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:underline" style={{ color: "#00ca41" }}>Categorieën</Link>
        <span>/</span>
        <Link href={product.categoryHref} className="hover:underline" style={{ color: "#00ca41" }}>
          {product.category}
        </Link>
        <span>/</span>
        <span style={{ color: "#173441" }} className="font-medium line-clamp-1">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Image gallery */}
        <div>
          <div
            className="rounded-2xl flex items-center justify-center h-80 mb-3"
            style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf6 100%)" }}
          >
            <div
              className="w-32 h-32 rounded-3xl flex items-center justify-center opacity-20"
              style={{ backgroundColor: "#173441" }}
            >
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-xl flex-shrink-0 cursor-pointer border-2 transition-colors"
                style={{
                  background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf6 100%)",
                  borderColor: i === 0 ? "#00ca41" : "#e2e8f0",
                }}
              />
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link
              href={product.brandHref}
              className="text-sm font-bold hover:underline"
              style={{ color: "#00ca41" }}
            >
              {product.brand}
            </Link>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-400">{product.sku}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight" style={{ color: "#173441" }}>
            {product.title}
          </h1>

          {/* Price */}
          <div
            className="rounded-2xl p-5 mb-5"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-extrabold" style={{ color: "#173441" }}>
                {product.lowestPrice}
              </span>
              <span className="text-sm text-gray-400">
                – {product.storeCount} winkels vergelijken
              </span>
            </div>
            <p className="text-sm text-gray-500">Prijsrange: {product.priceRange}</p>
          </div>

          {/* Color selector */}
          <div className="mb-5">
            <p className="text-sm font-semibold mb-2" style={{ color: "#173441" }}>
              Kleur: <span className="font-normal text-gray-500">{product.colors[0]}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((color, i) => (
                <button
                  key={color}
                  className="px-3 py-1.5 rounded-lg text-sm border-2 transition-all"
                  style={{
                    borderColor: i === 0 ? "#00ca41" : "#e2e8f0",
                    color: i === 0 ? "#1b693d" : "#374151",
                    backgroundColor: i === 0 ? "#f0fdf4" : "white",
                  }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-2" style={{ color: "#173441" }}>Maat</p>
            <div className="flex gap-2">
              {product.sizes.map((size, i) => (
                <button
                  key={size}
                  className="w-12 h-12 rounded-xl text-sm font-bold border-2 transition-all"
                  style={{
                    borderColor: i === 0 ? "#173441" : "#e2e8f0",
                    backgroundColor: i === 0 ? "#173441" : "white",
                    color: i === 0 ? "white" : "#374151",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{product.description}</p>

          {/* Features */}
          <ul className="space-y-1.5 mb-6">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#00ca41" }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Store comparison table */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#173441" }}>
          Vergelijk winkels ({product.storeCount})
        </h2>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div className="hidden md:grid grid-cols-5 px-5 py-3 text-xs font-semibold text-gray-400 border-b bg-gray-50">
            <span>Winkel</span>
            <span>Prijs</span>
            <span>Bezorging</span>
            <span>Beoordeling</span>
            <span />
          </div>
          {STORES.map((store, i) => (
            <div
              key={store.name}
              className="grid grid-cols-1 md:grid-cols-5 gap-2 px-5 py-4 border-b last:border-0 items-center hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: i === 0 ? "#00ca41" : "#173441" }}
                >
                  {store.name.charAt(0)}
                </div>
                <span className="font-semibold text-sm" style={{ color: "#173441" }}>{store.name}</span>
                {i === 0 && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
                    Beste prijs
                  </span>
                )}
              </div>
              <div className="font-extrabold text-lg" style={{ color: "#173441" }}>{store.price}</div>
              <div className="text-sm text-gray-500">{store.delivery}</div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3.5 h-3.5"
                      fill={star <= Math.round(store.rating) ? "#f59e0b" : "#d1d5db"}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-400">({store.reviews.toLocaleString("nl-NL")})</span>
              </div>
              <div className="flex justify-end">
                <a
                  href={store.url}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
                  style={{ backgroundColor: i === 0 ? "#00ca41" : "#173441" }}
                >
                  Bekijk aanbieding
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related products */}
      <section>
        <h2 className="text-xl font-bold mb-4" style={{ color: "#173441" }}>Gerelateerde producten</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RELATED_PRODUCTS.map((rel) => (
            <Link
              key={rel.id}
              href={rel.href}
              className="group bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-200 border border-transparent hover:border-gray-100"
            >
              <div
                className="rounded-xl h-32 flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf6 100%)" }}
              >
                <div className="w-12 h-12 rounded-xl opacity-20" style={{ backgroundColor: "#173441" }} />
              </div>
              <div className="text-xs font-semibold mb-1" style={{ color: "#00ca41" }}>{rel.brand}</div>
              <h3 className="text-xs font-semibold leading-snug mb-2 group-hover:underline line-clamp-2" style={{ color: "#173441" }}>
                {rel.title}
              </h3>
              <span className="text-sm font-extrabold" style={{ color: "#173441" }}>{rel.price}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
