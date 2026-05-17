function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-5 mb-12">
      <span
        className={`font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light ${
          light ? "text-lin/40" : "text-steen"
        }`}
      >
        {children}
      </span>
      <div
        className={light ? "flex-1 bg-lin/20" : "flex-1 bg-steen/40"}
        style={{ height: "0.5px" }}
      />
    </div>
  );
}

const facilities = [
  {
    name: "Pinewood Sauna",
    sub: "90°C · grenenhout",
    desc: "Klassieke Scandinavische droge sauna van grenenhout. Zuiver, stil, verhit.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6 28V14a10 10 0 0 1 20 0v14" />
        <path d="M2 28h28" />
        <path d="M12 28V20h8v8" />
        <path d="M10 14q2-3 6-3t6 3" />
      </svg>
    ),
  },
  {
    name: "Steam Dome",
    sub: "Aromatherapie · etherische oliën",
    desc: "Een unieke stoomboog met etherische oliën. Longen open, geest leeg.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6 20a10 10 0 0 1 20 0" />
        <path d="M2 20h28" />
        <path d="M10 14q1-3 0-6" />
        <path d="M16 12q1-3 0-6" />
        <path d="M22 14q1-3 0-6" />
      </svg>
    ),
  },
  {
    name: "Cold Plunge",
    sub: "IJsbad · contrast",
    desc: "Contrast koude dompeling. Het lichaam schakelt. De geest scherpt.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="12" width="20" height="14" rx="3" />
        <path d="M10 12V9a6 6 0 0 1 12 0v3" />
        <path d="M11 19q2 2 4 0t4 0" />
      </svg>
    ),
  },
  {
    name: "Jacuzzi",
    sub: "Hotbath · buiten",
    desc: "Warm bruisend water na de kou. De spieren geven los. Tijd staat stil.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 20a12 12 0 0 1 24 0v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
        <path d="M10 20q1-2 3-2t3 2" />
        <path d="M17 20q1-2 3-2t3 2" />
        <path d="M16 14v-4" />
        <path d="M16 6l-2 4h4l-2-4z" />
      </svg>
    ),
  },
  {
    name: "Fire Circle",
    sub: "Buiten · vuur",
    desc: "Een vuurschaal in de buitenlucht. Gesprekken die ergens over gaan.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M16 26c-4 0-8-3-8-8 0-3 2-5 4-7-1 4 2 6 4 4 0 3 2 5 4 5s4-2 4-5c2 2 4 4 4 7 0 5-4 8-8 8v-2" />
        <ellipse cx="16" cy="26" rx="8" ry="2" />
      </svg>
    ),
  },
  {
    name: "Massage",
    sub: "Private cabines · 60–90 min",
    desc: "Professionele behandelingen in stille privéruimtes. Zweedse en deep tissue.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6 20l4-6 4 3 4-5 4 4 4-3" />
        <rect x="4" y="22" width="24" height="4" rx="2" />
        <circle cx="16" cy="8" r="4" />
      </svg>
    ),
  },
  {
    name: "Café & Bar",
    sub: "Gezond · licht",
    desc: "Gezonde drankjes, smoothies, bouillon en lichte snacks. Geen haast.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 10h12v12a6 6 0 0 1-12 0V10z" />
        <path d="M20 13h2a3 3 0 0 1 0 6h-2" />
        <path d="M6 28h20" />
        <path d="M11 10V7" />
        <path d="M15 10V7" />
      </svg>
    ),
  },
  {
    name: "Zonnedek & Tuin",
    sub: "Buiten · tuin",
    desc: "Luisteren naar de wind. Ademen. Niets doen is ook iets doen.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="16" cy="12" r="4" />
        <path d="M16 4v2M16 18v2M4 12h2M24 12h2M7 7l1.5 1.5M22 7l-1.5 1.5" />
        <path d="M6 26c0-4 4-8 10-8s10 4 10 8" />
        <path d="M4 26h24" />
      </svg>
    ),
  },
];

const pricing = [
  {
    name: "Thermale Dagpas",
    duration: "3 uur · volledig circuit",
    price: "45",
    note: "incl. handdoek & badjas",
    items: [
      "Sauna, steam dome, cold plunge",
      "Jacuzzi & zonnedek",
      "Fire circle (indien beschikbaar)",
      "Onbeperkt café gebruik",
    ],
    highlight: false,
  },
  {
    name: "Dag + Massage",
    duration: "3 uur circuit + 60 min massage",
    price: "115",
    note: "meest gekozen",
    items: [
      "Volledig thermaal circuit",
      "60 min Zweedse of deep tissue",
      "Private behandelkamer",
      "Incl. handdoek & badjas",
    ],
    highlight: true,
  },
  {
    name: "Maandlidmaatschap",
    duration: "8 bezoeken per maand",
    price: "95",
    note: "per maand · opzegbaar",
    items: [
      "8× thermaal circuit",
      "10% korting op massage",
      "Voorrang bij reservering",
      "Toegang tot events",
    ],
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-lin">

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nacht" style={{ height: "52px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex items-center justify-between">

          <div>
            <div
              className="font-serif text-lin font-light"
              style={{ fontSize: "22px", letterSpacing: "0.2em", lineHeight: 1 }}
            >
              NORDE
            </div>
            <div
              className="font-sans text-lin/30 font-light uppercase mt-0.5"
              style={{ fontSize: "7px", letterSpacing: "0.28em" }}
            >
              Social Recovery Club
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Concept", "Faciliteiten", "Tarieven", "Events"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-lin/50 hover:text-lin uppercase transition-colors duration-200 font-light"
                style={{ fontSize: "10px", letterSpacing: "0.3em" }}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#reserveer"
            className="font-sans text-lin uppercase bg-warm hover:bg-warm-licht transition-colors duration-200 font-light"
            style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "10px 20px" }}
          >
            Reserveer
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex flex-col"
        style={{ minHeight: "100svh", paddingTop: "52px" }}
      >
        {/* Split achtergrond: koud links, warm rechts */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-ijssel" />
          <div className="bg-eiken" />
        </div>

        {/* Center brand */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <div
            className="font-sans text-lin/40 uppercase font-light mb-10"
            style={{ fontSize: "9px", letterSpacing: "0.4em" }}
          >
            Groningen · Opening 2026
          </div>

          <h1
            className="font-serif text-lin font-light"
            style={{
              fontSize: "clamp(72px, 13vw, 148px)",
              letterSpacing: "0.18em",
              lineHeight: 1,
            }}
          >
            NORDE
          </h1>

          <div className="w-px bg-lin/25 my-6" style={{ height: "40px" }} />

          <p
            className="font-sans text-lin/50 uppercase font-light"
            style={{ fontSize: "10px", letterSpacing: "0.35em" }}
          >
            Social Recovery Club · Groningen
          </p>

          <p className="mt-10 font-sans font-light text-lin/50 text-sm leading-relaxed max-w-sm">
            Boutique thermaal wellness in het Groningse landschap.
            <br />
            Een sanctuary voor herstel, stilte en verbinding.
          </p>

          <div
            className="mt-12 flex gap-6 font-sans text-lin/25 uppercase font-light"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            <span>Adults only (16+)</span>
            <span>·</span>
            <span>Altijd reserveren</span>
          </div>
        </div>

        {/* Knoppen — elk op eigen kleurvlak */}
        <div className="relative z-10 grid grid-cols-2 mb-6">
          <div className="flex items-center justify-center px-8 py-5">
            <a
              href="#reserveer"
              className="font-sans text-lin uppercase bg-warm hover:bg-warm-licht transition-colors duration-200 font-light w-full text-center"
              style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "16px 20px" }}
            >
              Schrijf je in voor de waitlist
            </a>
          </div>
          <div className="flex items-center justify-center px-8 py-5">
            <a
              href="#concept"
              className="font-sans text-lin/60 hover:text-lin uppercase transition-colors duration-200 font-light w-full text-center"
              style={{
                fontSize: "9px",
                letterSpacing: "0.3em",
                padding: "16px 20px",
                border: "0.5px solid rgba(242,237,230,0.2)",
              }}
            >
              Ontdek het concept
            </a>
          </div>
        </div>

        {/* Temperatuur-indicatoren */}
        <div className="relative z-10 grid grid-cols-2 pb-8">
          <div className="px-10 md:px-14">
            <div
              className="font-serif text-koud-licht/70 font-light"
              style={{ fontSize: "13px", letterSpacing: "0.3em" }}
            >
              8°
            </div>
            <div
              className="font-sans text-koud-licht/40 uppercase font-light mt-1"
              style={{ fontSize: "8px", letterSpacing: "0.3em" }}
            >
              Cold Plunge
            </div>
          </div>
          <div className="px-10 md:px-14 text-right">
            <div
              className="font-serif text-warm-licht/70 font-light"
              style={{ fontSize: "13px", letterSpacing: "0.3em" }}
            >
              90°
            </div>
            <div
              className="font-sans text-warm-licht/40 uppercase font-light mt-1"
              style={{ fontSize: "8px", letterSpacing: "0.3em" }}
            >
              Sauna
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERZICHT FOTO ──────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "80vh" }}>
        <img
          src="/sfeer/overzicht.png"
          alt="Luchtfoto Norde — dome, pools, tuin en fire circle vanuit de lucht"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 md:right-auto">
          <p
            className="font-serif text-lin font-light italic leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Een plek op zichzelf.
          </p>
          <p
            className="font-sans text-lin/40 uppercase font-light mt-3"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            Norde Social Recovery Club · Groningen
          </p>
        </div>
      </div>

      {/* ── CONCEPT ─────────────────────────────────────────────── */}
      <section id="concept" className="bg-lin py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Het concept</SectionLabel>
            <h2
              className="font-serif text-nacht font-light"
              style={{ fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "0.05em", lineHeight: 1.1 }}
            >
              Norde is geen spa.
              <br />
              <em className="italic" style={{ color: "#8C7F6E" }}>
                Het is een sanctuary.
              </em>
            </h2>
            <p
              className="mt-8 font-sans font-light leading-relaxed"
              style={{ fontSize: "15px", color: "#5C5248" }}
            >
              Een plek waar herstel, stilte en sociale verbinding samenkomen.
              Norde brengt boutique thermaal wellness naar Groningen —
              kleinschalig, intentioneel en ontworpen voor mensen die even
              willen stoppen.
            </p>
            <p
              className="mt-4 font-sans font-light leading-relaxed"
              style={{ fontSize: "15px", color: "#5C5248" }}
            >
              Scandinavisch minimalisme ontmoet Groningse warmte. Alles is
              ontworpen om je hoofd te legen, je lichaam te herstellen en
              verbinding te maken — met anderen, of gewoon met jezelf.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Design-gedreven", "Adults only", "Kleinschalig", "Community"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-steen font-light uppercase"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    padding: "8px 16px",
                    border: "0.5px solid #C8BAA8",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Gesplitst visueel */}
          <div className="aspect-[3/4] relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="bg-ijssel" />
              <div className="bg-eiken" />
            </div>
            <div
              className="absolute inset-y-0 left-1/2 w-px"
              style={{ background: "rgba(242,237,230,0.12)" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <div
                className="font-serif text-koud-licht/50 font-light"
                style={{ fontSize: "11px", letterSpacing: "0.4em" }}
              >
                8°
              </div>
              <div
                className="font-serif text-lin font-light my-3"
                style={{ fontSize: "clamp(36px, 5vw, 52px)", letterSpacing: "0.2em", lineHeight: 1 }}
              >
                NORDE
              </div>
              <div
                className="font-serif text-warm-licht/50 font-light"
                style={{ fontSize: "11px", letterSpacing: "0.4em" }}
              >
                90°
              </div>
              <div
                className="w-14 my-5"
                style={{ height: "0.5px", background: "rgba(242,237,230,0.18)" }}
              />
              <p
                className="font-serif text-lin/70 italic font-light leading-snug"
                style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
              >
                "Decomprimeer.
                <br />
                Herstel.
                <br />
                Verbind."
              </p>
              <p
                className="mt-6 font-sans text-lin/30 uppercase font-light"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Norde Groningen · 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRIE PIJLERS ────────────────────────────────────────── */}
      <section className="bg-nacht py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center">
          {[
            {
              label: "Herstel",
              desc: "Je lichaam heeft rust nodig. Thermale rituelen activeren het parasympatisch zenuwstelsel.",
            },
            {
              label: "Stilte",
              desc: "Geen muziek, geen chaos. Alleen de geluiden van stoom, water en vuur.",
            },
            {
              label: "Verbinding",
              desc: "Met anderen of met jezelf. De fire circle en jacuzzi nodigen uit tot echte gesprekken.",
            },
          ].map((pillar, i) => (
            <div
              key={i}
              className={`px-10 py-16 ${i < 2 ? "md:border-r" : ""}`}
              style={{ borderColor: "rgba(242,237,230,0.08)" }}
            >
              <p
                className="font-serif text-warm-licht font-light italic mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                {pillar.label}
              </p>
              <p
                className="font-sans font-light text-sm leading-relaxed"
                style={{ color: "rgba(242,237,230,0.4)" }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SFEERBEELDEN GALERIJ ────────────────────────────────── */}
      <section id="sfeer" className="bg-nacht py-0">

        {/* 2-koloms: Het café + Cold plunge */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden" style={{ height: "65vh" }}>
            <img
              src="/sfeer/exterieur.png"
              alt="Exterieur Norde — café en buitenterras met tuin"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="font-serif text-lin font-light" style={{ fontSize: "1.8rem" }}>
                Het café
              </p>
              <p
                className="font-sans text-lin/40 uppercase font-light mt-2"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Café · Bar · Buitenterras
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ height: "65vh" }}>
            <img
              src="/sfeer/coldplunge.png"
              alt="Cold plunge zwembad omringd door riet en groen — Norde Groningen"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="font-serif text-lin font-light flex items-baseline gap-3" style={{ fontSize: "1.8rem" }}>
                Cold plunge
                <span
                  className="font-serif text-koud-licht/80 font-light"
                  style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                >
                  8°
                </span>
              </p>
              <p
                className="font-sans text-lin/40 uppercase font-light mt-2"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Contrast · Herstel · Kracht
              </p>
            </div>
          </div>
        </div>

        {/* Breed: Sauna */}
        <div className="relative w-full overflow-hidden" style={{ height: "70vh" }}>
          <img
            src="/sfeer/sauna.png"
            alt="Pinewood Sauna interieur met uitzicht op de tuin — Norde Groningen"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p
              className="font-serif text-lin font-light italic"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Grenenhout. 90°C. Stilte.
            </p>
            <p
              className="font-sans text-lin/35 uppercase font-light mt-2"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
            >
              Pinewood Sauna · Norde
            </p>
          </div>
        </div>

        {/* 3-koloms: Fire circle + Steam dome */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 relative overflow-hidden" style={{ height: "60vh" }}>
            <img
              src="/sfeer/firecircle.png"
              alt="Fire circle in het Groningse landschap bij zonsondergang — Norde"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="font-serif text-lin font-light" style={{ fontSize: "1.8rem" }}>
                Fire circle
              </p>
              <p
                className="font-sans text-lin/40 uppercase font-light mt-2"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Vuur · Verbinding · Stilte
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ height: "60vh" }}>
            <img
              src="/sfeer/steamdome.png"
              alt="Steam dome in mistige tuin — Norde Groningen"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-serif text-lin font-light" style={{ fontSize: "1.5rem" }}>
                Steam dome
              </p>
              <p
                className="font-sans text-lin/40 uppercase font-light mt-1"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Aromatherapie · Stoom · Rust
              </p>
            </div>
          </div>
        </div>

        {/* Breed: Jacuzzi */}
        <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
          <img
            src="/sfeer/jacuzzi.png"
            alt="Buiten jacuzzi in het Groningse polderlandschap bij zonsondergang — Norde"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="font-serif text-lin font-light" style={{ fontSize: "1.8rem" }}>
              Jacuzzi & tuin
            </p>
            <p
              className="font-sans text-lin/40 uppercase font-light mt-2"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
            >
              Warm water · Gronings landschap · Verbinding
            </p>
          </div>
        </div>
      </section>

      {/* ── FACILITEITEN ────────────────────────────────────────── */}
      <section id="faciliteiten" className="bg-lin py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Het circuit</SectionLabel>
          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <h2
              className="font-serif text-nacht font-light"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.05em", lineHeight: 1.1 }}
            >
              Een wellness tuin in Gronings landschap.
            </h2>
            <p
              className="font-sans font-light leading-relaxed"
              style={{ fontSize: "15px", color: "#5C5248" }}
            >
              Doorloop het thermale circuit in jouw eigen tempo. Reserveer een
              tijdslot van 3 uur en laat de rest los.
            </p>
          </div>

          {/* Faciliteiten grid — 2px gap als divider */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[2px]"
            style={{ background: "#C8BAA8" }}
          >
            {facilities.map((f) => (
              <div
                key={f.name}
                className="p-8 flex flex-col gap-5 group hover:bg-nacht transition-colors duration-300 bg-wit"
              >
                <div className="flex justify-between items-start">
                  <div className="text-nacht/60 group-hover:text-warm-licht/70 transition-colors duration-300">
                    {f.icon}
                  </div>
                  {f.name === "Pinewood Sauna" && (
                    <span
                      className="font-serif text-warm/60 group-hover:text-warm-licht font-light transition-colors duration-300"
                      style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                    >
                      90°
                    </span>
                  )}
                  {f.name === "Cold Plunge" && (
                    <span
                      className="font-serif text-koud/70 group-hover:text-koud-licht font-light transition-colors duration-300"
                      style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                    >
                      8°
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className="font-serif text-nacht group-hover:text-lin font-light transition-colors duration-300"
                    style={{ fontSize: "22px", letterSpacing: "0.05em" }}
                  >
                    {f.name}
                  </h3>
                  <p
                    className="font-sans text-steen group-hover:text-lin/50 uppercase font-light mt-1 transition-colors duration-300"
                    style={{ fontSize: "9px", letterSpacing: "0.3em" }}
                  >
                    {f.sub}
                  </p>
                </div>
                <p
                  className="font-sans font-light leading-relaxed group-hover:text-lin/60 transition-colors duration-300"
                  style={{ fontSize: "14px", color: "#5C5248" }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BELEVING QUOTE ──────────────────────────────────────── */}
      <section className="bg-nacht py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="flex items-center justify-center gap-5 mb-10"
          >
            <div className="w-12" style={{ height: "0.5px", background: "rgba(242,237,230,0.15)" }} />
            <span
              className="font-sans text-lin/20 uppercase font-light"
              style={{ fontSize: "9px", letterSpacing: "0.4em" }}
            >
              Norde
            </span>
            <div className="w-12" style={{ height: "0.5px", background: "rgba(242,237,230,0.15)" }} />
          </div>
          <blockquote
            className="font-serif text-lin font-light leading-snug"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", letterSpacing: "0.02em" }}
          >
            Geen chaos. Geen lawaai.
            <br />
            <em className="italic text-warm-licht">Kom tot rust.</em>
          </blockquote>
          <p
            className="mt-10 font-sans text-lin/25 uppercase font-light"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            Norde Social Recovery Club · Groningen
          </p>
        </div>
      </section>

      {/* ── TARIEVEN ────────────────────────────────────────────── */}
      <section id="tarieven" className="bg-lin py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Tarieven</SectionLabel>
          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <h2
              className="font-serif text-nacht font-light"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.05em" }}
            >
              Transparant geprijsd.
            </h2>
            <p
              className="font-sans font-light leading-relaxed"
              style={{ fontSize: "15px", color: "#5C5248" }}
            >
              Introductietarieven voor early birds. Schrijf je in en ontvang 20%
              korting op je eerste 3 maanden.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-[2px]">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col p-10"
                style={{
                  background: plan.highlight ? "#2C2A25" : "#FAF8F4",
                  border: plan.highlight ? "none" : "0.5px solid #C8BAA8",
                }}
              >
                {plan.highlight && (
                  <span
                    className="absolute top-0 right-0 bg-warm text-lin font-sans font-light uppercase"
                    style={{ fontSize: "8px", letterSpacing: "0.3em", padding: "8px 16px" }}
                  >
                    {plan.note}
                  </span>
                )}
                <p
                  className="font-sans font-light uppercase mb-2"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    color: plan.highlight ? "rgba(242,237,230,0.4)" : "#C8BAA8",
                  }}
                >
                  {plan.duration}
                </p>
                <h3
                  className="font-serif font-light"
                  style={{
                    fontSize: "24px",
                    letterSpacing: "0.05em",
                    color: plan.highlight ? "#F2EDE6" : "#2C2A25",
                  }}
                >
                  {plan.name}
                </h3>
                <div className="my-8 flex items-baseline gap-1">
                  <span
                    className="font-serif font-light"
                    style={{
                      fontSize: "52px",
                      color: plan.highlight ? "#D4A878" : "#A07040",
                    }}
                  >
                    €{plan.price}
                  </span>
                  {plan.name.includes("Maand") && (
                    <span
                      className="font-sans font-light"
                      style={{
                        fontSize: "13px",
                        color: plan.highlight ? "rgba(242,237,230,0.35)" : "#C8BAA8",
                      }}
                    >
                      /maand
                    </span>
                  )}
                </div>
                <ul className="space-y-3 flex-1 mb-10">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 16 16"
                        width="13"
                        className="mt-0.5 shrink-0"
                        style={{ color: plan.highlight ? "#D4A878" : "#4A7A9B" }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <path d="M3 8l3.5 3.5L13 4" />
                      </svg>
                      <span
                        className="font-sans font-light text-sm"
                        style={{ color: plan.highlight ? "rgba(242,237,230,0.7)" : "#5C5248" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {!plan.highlight && (
                  <p
                    className="font-sans font-light mb-4"
                    style={{ fontSize: "12px", color: "#C8BAA8" }}
                  >
                    {plan.note}
                  </p>
                )}
                <a
                  href="#reserveer"
                  className="text-center font-sans font-light uppercase transition-colors duration-200 hover:opacity-80"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    padding: "14px",
                    background: plan.highlight ? "#A07040" : "transparent",
                    color: plan.highlight ? "#F2EDE6" : "#2C2A25",
                    border: plan.highlight ? "none" : "0.5px solid #2C2A25",
                  }}
                >
                  Reserveer
                </a>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-8 font-sans font-light"
            style={{ fontSize: "13px", color: "#C8BAA8" }}
          >
            Cadeaubonnen beschikbaar voor elk bedrag.{" "}
            <a
              href="#reserveer"
              className="underline underline-offset-2"
              style={{ color: "#A07040" }}
            >
              Vraag een cadeaubon aan.
            </a>
          </p>
        </div>
      </section>

      {/* ── EVENTS ──────────────────────────────────────────────── */}
      <section id="events" className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Community &amp; Events</SectionLabel>
              <h2
                className="font-serif text-nacht font-light"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.05em", lineHeight: 1.1 }}
              >
                Meer dan een wellness­plek.
                <br />
                <em className="italic" style={{ color: "#8C7F6E" }}>Een community.</em>
              </h2>
              <p
                className="mt-8 font-sans font-light leading-relaxed"
                style={{ fontSize: "15px", color: "#5C5248" }}
              >
                Norde organiseert regelmatig events voor leden en bezoekers.
                Van maandbaden onder de sterrenhemel tot workshops en besloten
                groepsbijeenkomsten.
              </p>
              <div className="mt-10 space-y-0">
                {[
                  { name: "Maandbaden", desc: "Maandelijks collectief bad bij volle maan. Stilte verplicht." },
                  { name: "Workshop-avonden", desc: "Ademwerk, koude training, slow living — met externe sprekers." },
                  { name: "Corporate Wellness", desc: "Besloten sessies voor teams. Team recovery op zijn best." },
                ].map((ev, i) => (
                  <div
                    key={ev.name}
                    className="py-5"
                    style={{ borderTop: "0.5px solid #C8BAA8", marginTop: i === 0 ? "24px" : 0 }}
                  >
                    <p
                      className="font-serif text-nacht font-light"
                      style={{ fontSize: "20px", letterSpacing: "0.05em" }}
                    >
                      {ev.name}
                    </p>
                    <p
                      className="font-sans font-light mt-1"
                      style={{ fontSize: "14px", color: "#5C5248" }}
                    >
                      {ev.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[2px]">
              {[
                { label: "Maandbad", detail: "Maandelijks", bg: "bg-ijssel" },
                { label: "Workshop", detail: "Elke 2 weken", bg: "bg-eiken" },
                { label: "Corporate", detail: "Op aanvraag", bg: "bg-eiken" },
                { label: "Cadeau", detail: "Gift cards", bg: "bg-ijssel" },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`${card.bg} aspect-square flex flex-col justify-end p-8`}
                >
                  <p
                    className="font-serif text-lin font-light"
                    style={{ fontSize: "22px", letterSpacing: "0.05em" }}
                  >
                    {card.label}
                  </p>
                  <p
                    className="font-sans text-lin/40 uppercase font-light mt-1"
                    style={{ fontSize: "9px", letterSpacing: "0.3em" }}
                  >
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESERVEER ───────────────────────────────────────────── */}
      <section id="reserveer" className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-ijssel" />
          <div className="bg-eiken" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto">
          <div
            className="font-sans text-lin/30 uppercase font-light mb-6"
            style={{ fontSize: "9px", letterSpacing: "0.4em" }}
          >
            Opening 2026 · Groningen
          </div>
          <h2
            className="font-serif text-lin font-light"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.05em" }}
          >
            Wees er als eerste bij.
          </h2>
          <p
            className="mt-6 font-sans font-light leading-relaxed"
            style={{ fontSize: "15px", color: "rgba(242,237,230,0.5)" }}
          >
            Schrijf je in voor de waitlist en ontvang als early bird 20% korting
            op je eerste drie maanden, plus een exclusieve uitnodiging voor de
            soft launch.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row max-w-sm mx-auto" action="#">
            <input
              type="email"
              placeholder="jouw@email.nl"
              className="flex-1 font-sans font-light text-lin placeholder:text-lin/30 px-5 py-4 outline-none"
              style={{
                fontSize: "13px",
                background: "rgba(242,237,230,0.1)",
                border: "0.5px solid rgba(242,237,230,0.2)",
              }}
            />
            <button
              type="submit"
              className="font-sans text-lin uppercase font-light bg-warm hover:bg-warm-licht transition-colors duration-200 whitespace-nowrap"
              style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "16px 24px" }}
            >
              Schrijf je in
            </button>
          </form>
          <p
            className="mt-4 font-sans font-light"
            style={{ fontSize: "11px", color: "rgba(242,237,230,0.25)" }}
          >
            Geen spam. Alleen updates over Norde Groningen.
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-nacht">
        {/* Gesplitst NOR | DE woordmerk */}
        <div
          className="grid grid-cols-2"
          style={{ borderBottom: "0.5px solid rgba(242,237,230,0.06)" }}
        >
          <div
            className="bg-ijssel px-10 md:px-14 py-10 flex flex-col justify-between"
            style={{ minHeight: "140px" }}
          >
            <div
              className="font-serif text-koud-licht/50 font-light"
              style={{ fontSize: "11px", letterSpacing: "0.3em" }}
            >
              8°
            </div>
            <div
              className="font-serif text-lin font-light"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "0.2em" }}
            >
              NOR
            </div>
          </div>
          <div
            className="bg-eiken px-10 md:px-14 py-10 flex flex-col justify-between"
            style={{ minHeight: "140px" }}
          >
            <div
              className="font-serif text-warm-licht/50 font-light"
              style={{ fontSize: "11px", letterSpacing: "0.3em" }}
            >
              90°
            </div>
            <div
              className="font-serif text-lin font-light"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "0.2em" }}
            >
              DE
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16">
          <div
            className="grid md:grid-cols-4 gap-12 pb-12"
            style={{ borderBottom: "0.5px solid rgba(242,237,230,0.08)" }}
          >
            <div className="md:col-span-2">
              <p
                className="font-sans font-light text-lin/30 leading-relaxed"
                style={{ fontSize: "14px" }}
              >
                Boutique thermaal wellness in Groningen.
                <br />
                Een sanctuary voor herstel, stilte en verbinding.
              </p>
              <div className="flex gap-5 mt-6">
                {["Instagram", "TikTok"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="font-sans font-light text-lin/30 hover:text-lin/60 uppercase transition-colors duration-200"
                    style={{ fontSize: "9px", letterSpacing: "0.3em" }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p
                className="font-sans font-light text-lin/20 uppercase mb-5"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Navigatie
              </p>
              <ul className="space-y-3">
                {["Concept", "Faciliteiten", "Tarieven", "Events"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-sans font-light text-lin/40 hover:text-lin/70 transition-colors duration-200"
                      style={{ fontSize: "14px" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="font-sans font-light text-lin/20 uppercase mb-5"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Contact
              </p>
              <ul className="space-y-3 font-sans font-light text-lin/40" style={{ fontSize: "14px" }}>
                <li>Groningen, Nederland</li>
                <li>
                  <a href="mailto:hallo@norde.nl" className="hover:text-lin/70 transition-colors duration-200">
                    hallo@norde.nl
                  </a>
                </li>
                <li className="pt-2 text-lin/20" style={{ fontSize: "11px" }}>
                  Opening verwacht Q1 2026
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans font-light text-lin/20"
            style={{ fontSize: "11px" }}
          >
            <p>© 2025 Norde Social Recovery Club Groningen. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              {["Privacybeleid", "Algemene voorwaarden"].map((link) => (
                <a key={link} href="#" className="hover:text-lin/40 transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
