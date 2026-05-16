import Link from "next/link";
import ProductImageGallery from "@/app/components/ProductImageGallery";
import PriceHistoryChart from "@/app/components/PriceHistoryChart";
import ProductDetailTabs from "@/app/components/ProductDetailTabs";

const RELATED_PRODUCTS = [
  { id: "r1", title: "James & Nicholson Vintage Shirt Groen", brand: "James & Nicholson", price: "€ 23,99", href: "/products/jn-vintage-groen" },
  { id: "r2", title: "James & Nicholson Basic Tee Wit", brand: "James & Nicholson", price: "€ 19,99", href: "/products/jn-basic-wit" },
  { id: "r3", title: "Nike Dri-FIT Trainingsshirt Dames", brand: "Nike", price: "€ 34,95", href: "/products/nike-dri-fit-dames" },
  { id: "r4", title: "Adidas Essentials 3-Stripes Tee", brand: "Adidas", price: "€ 29,99", href: "/products/adidas-essentials-tee" },
];

const STORES = [
  { name: "SportsDirect", domain: "sportsdirect.com", price: "€ 23,99", originalPrice: null, shipping: "Gratis verzending", deliveryDate: "komende donderdag", stock: 6, onTime: 91.84, seller: "SportsDirect", url: "#", rating: 4.5, reviews: 1204 },
  { name: "Zalando", domain: "zalando.nl", price: "€ 26,95", originalPrice: null, shipping: "Gratis bezorging · 100 dagen retour", deliveryDate: "overmorgen", stock: 12, onTime: 97.2, seller: "Zalando", url: "#", rating: 4.7, reviews: 8921 },
  { name: "bol.com", domain: "bol.com", price: "€ 27,99", originalPrice: null, shipping: "Gratis bezorging morgen", deliveryDate: "morgen", stock: 3, onTime: 94.1, seller: "bol.com", url: "#", rating: 4.6, reviews: 15203 },
];

const PRICE_HISTORY = [
  { date: "jan", price: 27.99 },
  { date: "feb", price: 27.99 },
  { date: "mrt", price: 25.99 },
  { date: "apr", price: 25.99 },
  { date: "mei", price: 23.99 },
  { date: "jun", price: 23.99 },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = {
    title: "Dames T-shirt James & Nicholson Vintage Shirt Blauw",
    brand: "James & Nicholson",
    brandHref: "/brands/james-nicholson",
    category: "Mode",
    categoryHref: "/categories/mode",
    lowestPrice: "€ 23,99",
    priceRange: "€ 23,99 – € 27,99",
    storeCount: 3,
    bestStore: "SportsDirect",
    description: "Lichtgewicht katoenen James & Nicholson T-shirt voor dames 160 g/m² voelt aangenaam aan en is bovendien zeer ademend. Het t-shirt heeft een semi-getailleerd ontwerp met lichte schuine zijkanten. Gemaakt van hoogwaardig katoen — ideaal om de hele dag in de vrije tijd te dragen. Het t-shirt heeft een gevoerde boothals en is aan de binnenkant versierd met een stijlvolle patch.",
    specs: [
      { label: "Art.nr.", value: "JKNDBZKS" },
      { label: "Merk", value: "James & Nicholson" },
      { label: "EAN Code", value: "4053901181985" },
      { label: "Materiaal", value: "100% katoen" },
      { label: "Gewicht", value: "160 g/m²" },
      { label: "Pasvorm", value: "Semi-getailleerd" },
    ],
    variants: [
      { type: "Kleur", options: ["Blauw", "Groen", "Zwart", "Wit", "Rood"], active: "Blauw" },
      { type: "Maat", options: ["XS", "S", "M", "L", "XL", "XXL"], active: "S" },
    ],
    ai: {
      insight: "Dit dames t-shirt is geschikt voor gebruikers die comfort en ademend vermogen waarderen tijdens vrijetijdsactiviteiten. Het lichte katoenen materiaal maakt het ideaal voor dagelijks gebruik in milde tot warme weersomstandigheden.",
      summary: [
        "Geschikt voor dagelijks casual gebruik in warme omstandigheden",
        "Aangenaam en licht draagcomfort door 100% katoen",
        "Ontworpen met een semi-getailleerde pasvorm voor een nette uitstraling",
      ],
      advice: "Een goede keuze voor wie op zoek is naar een eenvoudig en comfortabel katoenen shirt voor alledaagse activiteiten. Voor sportieve situaties waarin vochtregulatie belangrijk is, kan een technisch functioneel shirt geschikter zijn.",
    },
    images: [
      "/cat-shirt.jpg",
      "/cat-hoodie.jpg",
      "/cat-broek.jpg",
      "/cat-compressie.jpg",
    ],
    trust: [
      "Minimaal 14 dagen herroepingstermijn",
      "Lokale klantenservice",
      "Veilig betalen via iDEAL, VISA & meer",
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
        <Link href={product.categoryHref} className="hover:underline" style={{ color: "#00ca41" }}>{product.category}</Link>
        <span>/</span>
        <span style={{ color: "#173441" }} className="font-medium line-clamp-1">{product.title}</span>
      </nav>

      {/* Main grid: foto links, info + winkels rechts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <ProductImageGallery images={product.images} title={product.title} />

        {/* Info + winkel vergelijking */}
        <div className="flex flex-col gap-4">
          {/* Merk + titel */}
          <div>
            <Link href={product.brandHref} className="text-sm font-bold hover:underline" style={{ color: "#00ca41" }}>
              {product.brand}
            </Link>
            <h1 className="text-xl md:text-2xl font-extrabold mt-0.5 leading-tight" style={{ color: "#173441" }}>
              {product.title}
            </h1>
          </div>

          {/* Varianten */}
          {product.variants.map((variant) => (
            <div key={variant.type}>
              <p className="text-sm font-semibold mb-2" style={{ color: "#173441" }}>
                {variant.type}: <span className="font-normal text-gray-500">{variant.active}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {variant.options.map((opt) => (
                  <button
                    key={opt}
                    className="px-3 py-1.5 rounded-lg text-sm border-2 transition-all"
                    style={{
                      borderColor: opt === variant.active ? "#00ca41" : "#e2e8f0",
                      color: opt === variant.active ? "#1b693d" : "#374151",
                      backgroundColor: opt === variant.active ? "#f0fdf4" : "white",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Winkel vergelijking */}
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold" style={{ color: "#173441" }}>{product.lowestPrice}</span>
                <span className="text-sm text-gray-400">laagste prijs</span>
              </div>
              <span className="text-xs text-gray-400">{product.storeCount} winkels</span>
            </div>

            <div className="space-y-2">
              {STORES.map((store, i) => (
                <div
                  key={store.name}
                  className="rounded-xl border transition-all hover:shadow-sm"
                  style={{ borderColor: i === 0 ? "#00ca41" : "#e2e8f0", backgroundColor: i === 0 ? "#f0fdf4" : "white" }}
                >
                  <div className="px-3 py-3 flex items-center gap-3">
                    {/* Logo */}
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${store.domain}&sz=64`}
                        alt={store.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Winkel info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm" style={{ color: "#173441" }}>{store.name}</p>
                        {i === 0 && (
                          <span className="text-xs font-bold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
                            Beste prijs
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 truncate">{store.shipping}</p>
                      <div className="flex gap-3 mt-0.5">
                        <span className="text-xs text-gray-400">
                          <span className="font-medium" style={{ color: "#173441" }}>{store.stock}</span> op voorraad
                        </span>
                        <span className="text-xs text-gray-400">
                          Levering <span className="font-medium" style={{ color: "#173441" }}>{store.deliveryDate}</span>
                        </span>
                      </div>
                    </div>
                    {/* Prijs + knop */}
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="font-extrabold text-lg" style={{ color: "#173441" }}>{store.price}</span>
                      <a
                        href={store.url}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: i === 0 ? "#00ca41" : "#173441" }}
                      >
                        Bekijk
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductDetailTabs
        description={product.description}
        specs={product.specs}
      />

      {/* Prijsgeschiedenis */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#173441" }}>Prijsgeschiedenis</h2>
        <PriceHistoryChart data={PRICE_HISTORY} currentPrice={23.99} />
      </section>

      {/* AI Inzichten */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#173441" }}>AI Productinzicht</h2>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          {/* Insight */}
          <div className="p-5 border-b border-gray-100" style={{ backgroundColor: "#f8fafc" }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#173441" }}>
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">AI Product Insight</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{product.ai.insight}</p>
          </div>

          {/* Summary */}
          <div className="p-5 border-b border-gray-100 bg-white">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Samenvatting</p>
            <ul className="space-y-2">
              {product.ai.summary.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#00ca41" }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Advice */}
          <div className="p-5" style={{ backgroundColor: "#fffbeb" }}>
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600 mb-2">AI Koopadvies</p>
            <p className="text-sm text-gray-600 leading-relaxed">{product.ai.advice}</p>
            <p className="text-xs text-gray-400 mt-3 italic">Dit AI-productinzicht is uitsluitend bedoeld voor informatieve doeleinden.</p>
          </div>
        </div>
      </section>

      {/* Gerelateerde producten */}
      <section>
        <h2 className="text-xl font-bold mb-4" style={{ color: "#173441" }}>Gerelateerde producten</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RELATED_PRODUCTS.map((rel) => (
            <Link
              key={rel.id}
              href={rel.href}
              className="group bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-gray-200"
            >
              <div className="rounded-xl h-32 flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf6 100%)" }}>
                <div className="w-10 h-10 rounded-xl opacity-20" style={{ backgroundColor: "#173441" }} />
              </div>
              <div className="text-xs font-semibold mb-1" style={{ color: "#00ca41" }}>{rel.brand}</div>
              <h3 className="text-xs font-semibold leading-snug mb-2 group-hover:underline line-clamp-2" style={{ color: "#173441" }}>{rel.title}</h3>
              <span className="text-sm font-extrabold" style={{ color: "#173441" }}>{rel.price}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
