import Link from "next/link";
import ProductImageGallery from "@/app/components/ProductImageGallery";

const RELATED_PRODUCTS = [
  { id: "r1", title: "Adidas Defender III Sporttas", brand: "Adidas", price: "€ 34,99", href: "/products/adidas-defender" },
  { id: "r2", title: "Nike Brasilia Gymtas", brand: "Nike", price: "€ 29,99", href: "/products/nike-brasilia" },
  { id: "r3", title: "Puma Formation Ball Bag", brand: "Puma", price: "€ 19,99", href: "/products/puma-formation" },
  { id: "r4", title: "Under Armour Undeniable Duffle", brand: "Under Armour", price: "€ 44,99", href: "/products/ua-undeniable" },
];

const STORES = [
  { name: "SportsDirect", price: "€ 79,95", originalPrice: "€ 99,95", delivery: "Gratis bezorging", url: "#", rating: 4.5, reviews: 1204 },
  { name: "Zalando", price: "€ 84,95", originalPrice: null, delivery: "Gratis bezorging · 100 dagen retour", url: "#", rating: 4.7, reviews: 8921 },
  { name: "Decathlon", price: "€ 89,99", originalPrice: null, delivery: "€ 3,99 bezorging", url: "#", rating: 4.3, reviews: 3456 },
  { name: "bol.com", price: "€ 94,95", originalPrice: null, delivery: "Gratis bezorging morgen", url: "#", rating: 4.6, reviews: 15203 },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = {
    title: "Adidas Combat 2-in-1 Sporttas",
    brand: "Adidas",
    brandHref: "/brands/adidas",
    category: "Sporttassen",
    categoryHref: "/categories/sports-outdoor/sporttassen",
    price: "€ 79,95",
    originalPrice: "€ 99,95",
    saving: "€ 20,–",
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
    storeCount: 4,
    lowestPrice: "€ 79,95",
    bestStore: "SportsDirect",
    images: [
      "/cat-sporttas.jpg",
      "/cat-jas.jpg",
      "/cat-hoodie.jpg",
      "/cat-schoenen.jpg",
    ],
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
        <ProductImageGallery images={product.images} title={product.title} />

        {/* Product info */}
        <div>
          <Link href={product.brandHref} className="text-sm font-bold hover:underline" style={{ color: "#00ca41" }}>
            {product.brand}
          </Link>

          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 mt-1 leading-tight" style={{ color: "#173441" }}>
            {product.title}
          </h1>

          {/* Price block */}
          <div className="rounded-2xl p-5 mb-5" style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-3xl font-extrabold" style={{ color: "#173441" }}>{product.lowestPrice}</span>
              <span className="text-sm line-through text-gray-400">{product.originalPrice}</span>
              <span className="text-sm font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
                -{product.saving}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Prijsrange: {product.priceRange} bij {product.storeCount} winkels</p>
            <a
              href="#vergelijk"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#00ca41" }}
            >
              Bekijk beste deal bij {product.bestStore}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-3 mb-5">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Veilig vergelijken" },
              { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", label: "Gratis te gebruiken" },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Altijd actuele prijzen" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-xs text-gray-500">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#00ca41" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.label}
              </div>
            ))}
          </div>

          {/* Color selector */}
          <div className="mb-5">
            <p className="text-sm font-semibold mb-2" style={{ color: "#173441" }}>
              Kleur: <span className="font-normal text-gray-500">{product.colors[0]}</span>
            </p>
            <div className="flex flex-wrap gap-2">
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
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{product.description}</p>

          {/* Features */}
          <ul className="space-y-1.5">
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

      {/* Store comparison */}
      <section id="vergelijk" className="mb-10">
        <h2 className="text-xl font-bold mb-1" style={{ color: "#173441" }}>Vergelijk winkels ({product.storeCount})</h2>
        <p className="text-sm text-gray-500 mb-4">Prijzen worden dagelijks bijgewerkt. Klik op een winkel om direct naar de aanbieding te gaan.</p>

        <div className="space-y-3">
          {STORES.map((store, i) => (
            <div
              key={store.name}
              className="bg-white rounded-2xl border transition-all hover:shadow-md"
              style={{ borderColor: i === 0 ? "#00ca41" : "#e2e8f0" }}
            >
              {i === 0 && (
                <div className="px-5 pt-3 pb-0">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
                    Beste prijs
                  </span>
                </div>
              )}
              <div className="flex items-center gap-4 px-5 py-4">
                {/* Store logo placeholder */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: i === 0 ? "#00ca41" : "#173441" }}
                >
                  {store.name.charAt(0)}
                </div>

                {/* Store name + delivery */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm" style={{ color: "#173441" }}>{store.name}</p>
                  <p className="text-xs text-gray-400 truncate">{store.delivery}</p>
                </div>

                {/* Rating */}
                <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="#f59e0b" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-gray-500">{store.rating} <span className="text-gray-300">({store.reviews.toLocaleString("nl-NL")})</span></span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-right">
                    <p className="font-extrabold text-lg" style={{ color: "#173441" }}>{store.price}</p>
                    {store.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">{store.originalPrice}</p>
                    )}
                  </div>
                  <a
                    href={store.url}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md flex-shrink-0"
                    style={{ backgroundColor: i === 0 ? "#00ca41" : "#173441" }}
                  >
                    Bekijk
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-2xl p-6 mb-10" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
        <h3 className="font-bold text-sm mb-4" style={{ color: "#173441" }}>Zo werkt Productdeal</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Vergelijk", desc: "Wij tonen de beste prijzen van 300+ webshops op één plek." },
            { step: "2", title: "Kies je winkel", desc: "Klik op 'Bekijk' en ga direct naar de aanbieding bij de winkel." },
            { step: "3", title: "Bespaar", desc: "Betaal altijd de beste prijs — gratis en zonder account." },
          ].map((item) => (
            <div key={item.step} className="flex gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "#00ca41" }}
              >
                {item.step}
              </div>
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: "#173441" }}>{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
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
              className="group bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-gray-200"
            >
              <div
                className="rounded-xl h-32 flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf6 100%)" }}
              >
                <div className="w-10 h-10 rounded-xl opacity-20" style={{ backgroundColor: "#173441" }} />
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
