export default function Overzicht() {
  const links = [
    {
      meta: "Website · Live",
      title: "De website",
      desc: "Openbare homepage van Norde Social Recovery Club",
      href: "/",
      cold: false,
    },
    {
      meta: "Brand · Huisstijl",
      title: "Huisstijlgids",
      desc: "Kleurpalet, typografie, logo en visuele identiteit",
      href: "/huisstijl.html",
      cold: true,
    },
    {
      meta: "Intern · Vertrouwelijk",
      title: "Businessplan 2025–2027",
      desc: "Concept, markt, financieel plan en go-to-market strategie",
      href: "/businessplan",
      cold: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-full bg-lin">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nacht" style={{ height: "52px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex items-center justify-between">
          <a href="/" className="flex flex-col">
            <div className="font-serif text-lin font-light" style={{ fontSize: "22px", letterSpacing: "0.2em", lineHeight: 1 }}>
              NORDE
            </div>
            <div className="font-sans text-lin/30 font-light uppercase mt-0.5" style={{ fontSize: "7px", letterSpacing: "0.28em" }}>
              Social Recovery Club
            </div>
          </a>
          <div className="font-sans text-lin/30 uppercase font-light" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
            Overzicht
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative" style={{ paddingTop: "52px", minHeight: "42vh" }}>
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-ijssel" />
          <div className="bg-eiken" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "42vh" }}>
          <div className="font-sans text-lin/30 uppercase font-light mb-8" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>
            Groningen · Opening 2026
          </div>
          <h1 className="font-serif text-lin font-light" style={{ fontSize: "clamp(52px, 10vw, 110px)", letterSpacing: "0.18em", lineHeight: 1 }}>
            NORDE
          </h1>
          <div className="w-px bg-lin/20 my-5" style={{ height: "28px" }} />
          <p className="font-sans text-lin/40 uppercase font-light" style={{ fontSize: "10px", letterSpacing: "0.35em" }}>
            Overzicht documenten
          </p>
        </div>
      </section>

      {/* FOTOGRID */}
      <section className="bg-nacht py-0">
        <div className="grid grid-cols-4 gap-[2px]">
          {[
            { src: "/sfeer/overzicht.png", alt: "Overzicht" },
            { src: "/sfeer/sauna.png", alt: "Sauna" },
            { src: "/sfeer/coldplunge.png", alt: "Cold Plunge" },
            { src: "/sfeer/exterieur.png", alt: "Exterieur" },
            { src: "/sfeer/firecircle.png", alt: "Fire Circle" },
            { src: "/sfeer/jacuzzi.png", alt: "Jacuzzi" },
            { src: "/sfeer/steamdome.png", alt: "Steam Dome" },
            { src: "/sfeer/tuin.png", alt: "Tuin" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3">
                <span className="font-sans text-lin/60 uppercase font-light" style={{ fontSize: "8px", letterSpacing: "0.25em" }}>
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LINKS */}
      <section className="flex-1 bg-lin py-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-5 mb-12">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-steen">
              Documenten
            </span>
            <div className="flex-1 bg-steen/40" style={{ height: "0.5px" }} />
          </div>

          <div>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="group flex items-center justify-between py-8 transition-colors duration-200"
                style={{
                  borderTop: "0.5px solid rgba(200,186,168,0.4)",
                  borderBottom: i === links.length - 1 ? "0.5px solid rgba(200,186,168,0.4)" : "none",
                }}
              >
                <div>
                  <div
                    className="font-sans font-light uppercase text-steen mb-2"
                    style={{ fontSize: "9px", letterSpacing: "0.3em" }}
                  >
                    {link.meta}
                  </div>
                  <div
                    className="font-serif text-nacht font-light group-hover:text-warm transition-colors duration-200"
                    style={{ fontSize: "clamp(22px, 3vw, 30px)", letterSpacing: "0.05em" }}
                  >
                    {link.title}
                  </div>
                  <div
                    className="font-sans font-light mt-1"
                    style={{ fontSize: "13px", color: "#8C7F6E" }}
                  >
                    {link.desc}
                  </div>
                </div>
                <div
                  className="font-serif text-steen group-hover:text-warm group-hover:translate-x-1.5 transition-all duration-200 ml-8 shrink-0"
                  style={{ fontSize: "22px" }}
                >
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="grid grid-cols-2">
        <div className="bg-ijssel px-10 md:px-14 py-8 flex flex-col justify-between" style={{ minHeight: "90px" }}>
          <div className="font-serif text-koud-licht/50 font-light" style={{ fontSize: "11px", letterSpacing: "0.3em" }}>8°</div>
          <div className="font-serif text-lin font-light" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "0.2em" }}>NOR</div>
        </div>
        <div className="bg-eiken px-10 md:px-14 py-8 flex flex-col justify-between" style={{ minHeight: "90px" }}>
          <div className="font-serif text-warm-licht/50 font-light" style={{ fontSize: "11px", letterSpacing: "0.3em" }}>90°</div>
          <div className="font-serif text-lin font-light" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "0.2em" }}>DE</div>
        </div>
      </footer>

    </div>
  );
}
