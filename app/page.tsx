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
    name: "Buitenzwembad",
    sub: "28–30°C · zoutwater · buiten",
    temp: "28°",
    koud: false,
    desc: "Verwarmd buitenzwembad met zoutwaterinstallatie. Geen chloor — elektrolyse reinigt het water. Zachter voor de huid, duurzamer voor de natuur.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 22c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
        <path d="M4 26c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
        <rect x="8" y="10" width="16" height="10" rx="2" />
        <path d="M12 10V8a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    name: "Magnesiumjacuzzi",
    sub: "38°C · 8–10 personen · buiten",
    temp: "38°",
    koud: false,
    desc: "Magnesiumchloride in het water bevordert spierherstel en ontspanning. Buiten, warm, intiem. Geen kunstmatige toevoegingen.",
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
    name: "Cold Plunge",
    sub: "8°C · gefilterd grondwater",
    temp: "8°",
    koud: true,
    desc: "Puur gefilterd grondwater. Gesloten circuit, geen toevoegingen. Het rauwste element van de tuin.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="12" width="20" height="14" rx="3" />
        <path d="M10 12V9a6 6 0 0 1 12 0v3" />
        <path d="M11 19q2 2 4 0t4 0" />
      </svg>
    ),
  },
  {
    name: "SAUNA",
    sub: "90°C · FSC grenenhout",
    temp: "90°",
    koud: false,
    desc: "Traditionele Scandinavische droge sauna van FSC-gecertificeerd grenenhout. Warmteterugwinning. Traditioneel opgiet.",
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
    sub: "45–50°C · eucalyptus & kruiden",
    temp: "45°",
    koud: false,
    desc: "Witte organische koepelstructuur. Eucalyptus en kruiden in de stoom. Geen chemicaliën, alleen aromatherapie.",
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
    name: "Fire Circle",
    sub: "Koperen vuurschaal · open tuin",
    temp: null,
    koud: false,
    desc: "Koperen vuurschaal in de open tuin. Seizoensgebonden. Maandbaden. Gesprekken die ergens over gaan.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M16 26c-4 0-8-3-8-8 0-3 2-5 4-7-1 4 2 6 4 4 0 3 2 5 4 5s4-2 4-5c2 2 4 4 4 7 0 5-4 8-8 8v-2" />
        <ellipse cx="16" cy="26" rx="8" ry="2" />
      </svg>
    ),
  },
  {
    name: "CAFE-PAVILJOEN",
    sub: "Half open · groendak · haard",
    temp: null,
    koud: false,
    desc: "Half open paviljoen met groendak en ronde vrijstaande haard. Lokale producten max 50km. Geen wegwerpplastic.",
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
    name: "Wellness Tuin",
    sub: "Noord-Nederlands polderlandschap",
    temp: null,
    koud: false,
    desc: "Uitsluitend inheemse planten. Geen bestrijdingsmiddelen. Insectenhotels. Fauna-vriendelijke verlichting.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M16 28V16" />
        <path d="M16 22c-4-2-8-1-10 3" />
        <path d="M16 18c4-3 8-2 10 1" />
        <path d="M16 14c-2-4-1-8 3-10" />
        <path d="M4 28h24" />
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
      "Buitenzwembad & magnesiumjacuzzi",
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
    price: "160",
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

          <a href="/" className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 900, fontSize: "22px", letterSpacing: "0.05em", lineHeight: 1 }}>
            NOORD
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Concept", "Faciliteiten", "Duurzaamheid", "Events"].map((item) => (
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

          <div className="flex items-center gap-5">
            <a
              href="/overzicht"
              className="font-sans text-lin/40 hover:text-lin/70 uppercase transition-colors duration-200 font-light"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
            >
              ← Overzicht
            </a>
            <a
              href="#reserveer"
              className="font-sans text-lin uppercase bg-warm hover:bg-warm-licht transition-colors duration-200 font-light"
              style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "10px 20px" }}
            >
              Reserveer
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section id="hero" className="relative" style={{ minHeight: "100svh" }}>

        {/* Split background — full bleed incl. behind nav */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-ijssel" />
          <div className="bg-eiken" />
        </div>

        {/* Temperature labels — absolutely positioned */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* 8° — left of center split, upper half */}
          <div className="absolute" style={{ top: "37%", right: "54%", paddingRight: "clamp(16px, 3vw, 48px)" }}>
            <span className="font-serif text-lin/35 font-light" style={{ fontSize: "clamp(13px, 1.3vw, 17px)", letterSpacing: "0.25em" }}>8°</span>
          </div>
          {/* 90° — right of center split, lower half */}
          <div className="absolute" style={{ top: "69%", left: "54%", paddingLeft: "clamp(16px, 3vw, 48px)" }}>
            <span className="font-serif text-lin/35 font-light" style={{ fontSize: "clamp(13px, 1.3vw, 17px)", letterSpacing: "0.25em" }}>90°</span>
          </div>
        </div>

        {/* Main content column */}
        <div
          className="relative z-10 flex flex-col items-center justify-between"
          style={{ minHeight: "100svh", paddingTop: "calc(52px + 7vh)", paddingBottom: "7vh", paddingLeft: "24px", paddingRight: "24px" }}
        >
          {/* Top: WELLNESS RECOVERY CLUB */}
          <p className="text-lin/35 text-center whitespace-nowrap" style={{ fontFamily: "var(--font-nord)", fontWeight: 300, fontSize: "clamp(9px, 1.1vw, 13px)", letterSpacing: "0.5em" }}>
            WELLNESS RECOVERY CLUB
          </p>

          {/* NOORD wordmark */}
          <div className="text-lin text-center" style={{ fontFamily: "var(--font-nord)", fontWeight: 900, fontSize: "clamp(72px, 18vw, 240px)", letterSpacing: "0.04em", lineHeight: 1 }}>
            NOORD
          </div>

          {/* Bottom group: line + GRONINGEN 2027 */}
          <div className="flex flex-col items-center gap-5">
            <div style={{ width: "48px", height: "0.5px", background: "rgba(242,237,230,0.25)" }} />
            <p className="text-lin/40 text-center" style={{ fontFamily: "var(--font-nord)", fontWeight: 300, fontSize: "clamp(9px, 1.1vw, 14px)", letterSpacing: "0.4em" }}>
              GRONINGEN &nbsp;·&nbsp; 2027
            </p>
          </div>
        </div>
      </section>

      {/* ── OVERZICHT FOTO ──────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "80vh" }}>
        <img
          src="/sfeer/overzicht.png"
          alt="Luchtfoto Norde — wellness tuin, pools en fire circle in Noord-Nederlands landschap"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 md:right-auto">
          <p className="font-serif text-lin font-light italic leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Natuur is geen achtergrond.
          </p>
          <p className="font-serif text-lin/50 font-light italic" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", marginTop: "4px" }}>
            Het is het concept.
          </p>
          <p className="font-sans text-lin/40 uppercase font-light mt-3" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
            NOORD Social Recovery Club · Groningen
          </p>
        </div>
      </div>

      {/* ── CONCEPT ─────────────────────────────────────────────── */}
      <section id="concept" className="bg-lin py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Het concept</SectionLabel>
            <h2
              className="text-nacht"
              style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "0.03em", lineHeight: 1.1 }}
            >
              Geen resort. Geen spa.
              <br />
              <em className="italic" style={{ color: "#8C7F6E" }}>
                Een wellness tuin.
              </em>
            </h2>
            <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
              NOORD is een plek om even te stoppen met rennen, de telefoon weg te leggen en je lichaam te laten voelen wat het nodig heeft. De tuin is het product, niet het gebouw.
            </p>
            <p className="mt-4 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
              Alles wat je hier ziet groeien komt uit deze streek. Alles wat verwarmt of koelt, werkt zonder gas. We meten elk jaar wat we verbruiken en maken dat openbaar.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Natuur-first", "Gasvrij", "Inheems groen", "Adults only", "Kleinschalig"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-steen font-light uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "8px 16px", border: "0.5px solid #C8BAA8" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="aspect-[3/4] relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="bg-ijssel" />
              <div className="bg-eiken" />
            </div>
            <div className="absolute inset-y-0 left-1/2 w-px" style={{ background: "rgba(242,237,230,0.12)" }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <div className="font-serif text-koud-licht/50 font-light" style={{ fontSize: "11px", letterSpacing: "0.4em" }}>8°</div>
              <div className="font-serif text-lin font-light my-3" style={{ fontSize: "clamp(36px, 5vw, 52px)", letterSpacing: "0.2em", lineHeight: 1 }}>
                NOORD
              </div>
              <div className="font-serif text-warm-licht/50 font-light" style={{ fontSize: "11px", letterSpacing: "0.4em" }}>90°</div>
              <div className="w-14 my-5" style={{ height: "0.5px", background: "rgba(242,237,230,0.18)" }} />
              <p className="font-serif text-lin/70 italic font-light leading-snug" style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}>
                "Warmte. Kou.
                <br />
                Stilte."
              </p>
              <p className="mt-6 font-sans text-lin/30 uppercase font-light" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                NOORD Groningen · 2026
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
              label: "Natuur",
              desc: "De tuin is het product, niet het gebouw. Inheems groen, geen exoten, fauna-vriendelijk. Een polderlandschap als setting.",
            },
            {
              label: "Contrast",
              desc: "Warmte tot 90°. Kou tot 8°. Het lichaam schakelt terug naar wat het weet. Zonder apps, zonder bijsluiter.",
            },
            {
              label: "Stilte",
              desc: "Geen muziek, geen wellness-jargon. Alleen de geluiden van stoom, water en vuur. Stilte is ook een faciliteit.",
            },
          ].map((pillar, i) => (
            <div
              key={i}
              className={`px-10 py-16 ${i < 2 ? "md:border-r" : ""}`}
              style={{ borderColor: "rgba(242,237,230,0.08)" }}
            >
              <p className="font-serif text-warm-licht font-light italic mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                {pillar.label}
              </p>
              <p className="font-sans font-light text-sm leading-relaxed" style={{ color: "rgba(242,237,230,0.4)" }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SFEERBEELDEN GALERIJ ────────────────────────────────── */}
      <section id="sfeer" className="bg-nacht py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden" style={{ height: "65vh" }}>
            <img
              src="/sfeer/exterieur.png"
              alt="Café-paviljoen Norde — half open met groendak en buitenterras"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "1.8rem", letterSpacing: "0.03em" }}>CAFE-PAVILJOEN</p>
              <p className="font-sans text-lin/40 uppercase font-light mt-2" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                Groendak · Lokale producten · Geen gas
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ height: "65vh" }}>
            <img
              src="/sfeer/coldplunge.png"
              alt="Cold plunge met gefilterd grondwater — Norde Groningen"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="text-lin flex items-baseline gap-3" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "1.8rem", letterSpacing: "0.03em" }}>
                Cold plunge
                <span className="font-serif text-koud-licht/80 font-light" style={{ fontSize: "11px", letterSpacing: "0.3em" }}>8°</span>
              </p>
              <p className="font-sans text-lin/40 uppercase font-light mt-2" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                Puur grondwater · Gesloten circuit
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden" style={{ height: "70vh" }}>
          <img
            src="/sfeer/sauna.png"
            alt="Pinewood Sauna — FSC grenenhout met warmteterugwinning · Norde Groningen"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "0.03em" }}>
              SAUNA
            </p>
            <p className="font-sans text-lin/35 uppercase font-light mt-2" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
              SAUNA · NOORD
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 relative overflow-hidden" style={{ height: "60vh" }}>
            <img
              src="/sfeer/firecircle.png"
              alt="Fire circle — koperen vuurschaal in het Groningse polderlandschap"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <p className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "1.8rem", letterSpacing: "0.03em" }}>Fire circle</p>
              <p className="font-sans text-lin/40 uppercase font-light mt-2" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                Koperen vuurschaal · Polderlandschap · Verbinding
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ height: "60vh" }}>
            <img
              src="/sfeer/steamdome.png"
              alt="Steam dome — eucalyptus en kruiden, geen chemicaliën · Norde"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "1.5rem", letterSpacing: "0.03em" }}>Steam dome</p>
              <p className="font-sans text-lin/40 uppercase font-light mt-1" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                45–50° · Eucalyptus · Geen chemicaliën
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
          <img
            src="/sfeer/jacuzzi.png"
            alt="Magnesiumjacuzzi buiten in het Groningse polderlandschap — Norde"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="text-lin flex items-baseline gap-3" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "1.8rem", letterSpacing: "0.03em" }}>
              Magnesiumjacuzzi
              <span className="font-serif text-warm-licht/80 font-light" style={{ fontSize: "11px", letterSpacing: "0.3em" }}>38°</span>
            </p>
            <p className="font-sans text-lin/40 uppercase font-light mt-2" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
              Magnesiumchloride · Spierherstel · Buiten
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
              className="text-nacht"
              style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.03em", lineHeight: 1.1 }}
            >
              Elk element in de tuin heeft een eigen verhaal.
            </h2>
            <p className="font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
              Het water in de jacuzzi is anders dan het water in de plunge. De hitte van de sauna voelt anders dan de stoom van de dome. Dat is geen toeval. Reserveer een tijdslot van 3 uur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[2px]" style={{ background: "#C8BAA8" }}>
            {facilities.map((f) => (
              <div
                key={f.name}
                className="p-8 flex flex-col gap-5 group hover:bg-nacht transition-colors duration-300 bg-wit"
              >
                <div className="flex justify-between items-start">
                  <div className="text-nacht/60 group-hover:text-warm-licht/70 transition-colors duration-300">
                    {f.icon}
                  </div>
                  {f.temp && (
                    <span
                      className={`font-serif font-light transition-colors duration-300 ${
                        f.koud
                          ? "text-koud/70 group-hover:text-koud-licht"
                          : "text-warm/60 group-hover:text-warm-licht"
                      }`}
                      style={{ fontSize: "11px", letterSpacing: "0.3em" }}
                    >
                      {f.temp}
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className="text-nacht group-hover:text-lin transition-colors duration-300"
                    style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "22px", letterSpacing: "0.03em" }}
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

      {/* ── DUURZAAMHEID ────────────────────────────────────────── */}
      <section id="duurzaamheid" className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-lin/30">Duurzaamheid</span>
            <div className="flex-1 bg-lin/10" style={{ height: "0.5px" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16 items-start">
            <div>
              <h2 className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.03em", lineHeight: 1.1 }}>
                Duurzaamheid is geen toevoeging.
                <br />
                <em className="italic text-warm-licht">Het is de fundering.</em>
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "rgba(242,237,230,0.5)" }}>
                Geen gas. Geen chloor. Geen greenwashing. Alles wat je hier ziet groeien komt uit deze streek. We meten elk jaar wat we verbruiken en maken dat openbaar.
              </p>
              <div className="mt-10 space-y-0">
                {[
                  { quote: "Natuur is geen achtergrond." },
                  { quote: "Het is het concept." },
                  { quote: "Stilte is ook een faciliteit." },
                ].map((q, i) => (
                  <p
                    key={i}
                    className="font-serif text-lin/30 font-light italic py-4"
                    style={{ fontSize: "clamp(16px, 2vw, 22px)", borderTop: "0.5px solid rgba(242,237,230,0.07)" }}
                  >
                    {q.quote}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-0">
              {[
                {
                  pijler: "Energie",
                  icon: "⚡",
                  maatregelen: [
                    "Geen gasaansluiting",
                    "Warmtepompen voor alle verwarming",
                    "Zonnepanelen + zonnecollectoren op café-dak",
                    "Warmteterugwinning sauna",
                    "Groendak café-paviljoen",
                  ],
                },
                {
                  pijler: "Water",
                  icon: "◌",
                  maatregelen: [
                    "Zoutwaterbad — elektrolyse, geen chloor",
                    "Magnesiumjacuzzi — geen kunstmatige toevoegingen",
                    "Cold plunge — puur gefilterd grondwater",
                    "Regenwateropvang & grijs water hergebruik",
                    "UV-filtratie, geen chemicaliën",
                  ],
                },
                {
                  pijler: "Tuin",
                  icon: "◍",
                  maatregelen: [
                    "Uitsluitend inheemse planten",
                    "Geen bestrijdingsmiddelen",
                    "Insectenhotels & voedselbos-elementen",
                    "Fauna-vriendelijke verlichting",
                    "Noord-Nederlands polderlandschap",
                  ],
                },
                {
                  pijler: "Café",
                  icon: "◎",
                  maatregelen: [
                    "Lokale leveranciers max 50km",
                    "Biologisch menu",
                    "Geen wegwerpplastic",
                    "FSC-hout in interieur",
                    "Jaarlijkse CO₂-rapportage",
                  ],
                },
              ].map((p, i) => (
                <div key={p.pijler} className="py-6" style={{ borderTop: "0.5px solid rgba(242,237,230,0.08)" }}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "18px", letterSpacing: "0.03em" }}>{p.pijler}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {p.maatregelen.map((m) => (
                      <li key={m} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "rgba(160,112,64,0.6)" }} />
                        <span className="font-sans font-light" style={{ fontSize: "13px", color: "rgba(242,237,230,0.45)" }}>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Waterfilosofie */}
          <div className="grid md:grid-cols-5 gap-[2px]" style={{ background: "rgba(242,237,230,0.06)" }}>
            {[
              { naam: "Zoutwaterbad", temp: "28–30°", detail: "Elektrolyse genereert eigen reiniging. Geen chloor. Zachter voor huid en natuur." },
              { naam: "Magnesiumjacuzzi", temp: "38°", detail: "Magnesiumchloride bevordert spierherstel. Klein warm volume." },
              { naam: "Cold Plunge", temp: "8°", detail: "Puur gefilterd grondwater. Gesloten circuit. Geen toevoegingen." },
              { naam: "Steam Dome", temp: "45–50°", detail: "Eucalyptus en kruiden. Geen chemicaliën. Aromatherapie." },
              { naam: "SAUNA", temp: "90°", detail: "FSC-hout. Warmteterugwinning. Traditioneel opgiet met etherische oliën." },
            ].map((w) => (
              <div key={w.naam} className="p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="font-serif text-warm-licht/60 font-light mb-2" style={{ fontSize: "22px", letterSpacing: "0.1em" }}>{w.temp}</div>
                <div className="font-serif text-lin font-light mb-3" style={{ fontSize: "14px", letterSpacing: "0.05em" }}>{w.naam}</div>
                <p className="font-sans font-light leading-relaxed" style={{ fontSize: "12px", color: "rgba(242,237,230,0.35)" }}>{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ───────────────────────────────────────────────── */}
      <section className="bg-wit py-24 px-6 text-center" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="w-12" style={{ height: "0.5px", background: "#C8BAA8" }} />
            <span className="font-sans text-steen/60 uppercase font-light" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>Eerlijkheid</span>
            <div className="w-12" style={{ height: "0.5px", background: "#C8BAA8" }} />
          </div>
          <blockquote className="text-nacht leading-snug" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", letterSpacing: "0.02em" }}>
            Transparant over keuzes.
            <br />
            <em className="italic" style={{ color: "#8C7F6E" }}>Geen greenwashing.</em>
          </blockquote>
          <p className="mt-8 font-sans font-light leading-relaxed mx-auto" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "480px" }}>
            We publiceren jaarlijks ons energieverbruik, onze CO₂-uitstoot en onze waterrapportage. Eerlijk is eerlijk.
          </p>
        </div>
      </section>

      {/* ── TARIEVEN ────────────────────────────────────────────── */}
      <section id="tarieven" className="bg-lin py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Tarieven</SectionLabel>
          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="text-nacht" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.03em" }}>
              Transparant geprijsd.
            </h2>
            <p className="font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
              Introductietarieven voor early birds. Schrijf je in en ontvang 20% korting op je eerste 3 maanden.
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
                <p className="font-sans font-light uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "0.3em", color: plan.highlight ? "rgba(242,237,230,0.4)" : "#C8BAA8" }}>
                  {plan.duration}
                </p>
                <h3 style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "24px", letterSpacing: "0.03em", color: plan.highlight ? "#F2EDE6" : "#2C2A25" }}>
                  {plan.name}
                </h3>
                <div className="my-8 flex items-baseline gap-1">
                  <span className="font-serif font-light" style={{ fontSize: "52px", color: plan.highlight ? "#D4A878" : "#A07040" }}>
                    €{plan.price}
                  </span>
                  {plan.name.includes("Maand") && (
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: plan.highlight ? "rgba(242,237,230,0.35)" : "#C8BAA8" }}>
                      /maand
                    </span>
                  )}
                </div>
                <ul className="space-y-3 flex-1 mb-10">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg viewBox="0 0 16 16" width="13" className="mt-0.5 shrink-0" style={{ color: plan.highlight ? "#D4A878" : "#4A7A9B" }} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M3 8l3.5 3.5L13 4" />
                      </svg>
                      <span className="font-sans font-light text-sm" style={{ color: plan.highlight ? "rgba(242,237,230,0.7)" : "#5C5248" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {!plan.highlight && (
                  <p className="font-sans font-light mb-4" style={{ fontSize: "12px", color: "#C8BAA8" }}>
                    {plan.note}
                  </p>
                )}
                <a
                  href="#reserveer"
                  className="text-center font-sans font-light uppercase transition-colors duration-200 hover:opacity-80"
                  style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "14px", background: plan.highlight ? "#A07040" : "transparent", color: plan.highlight ? "#F2EDE6" : "#2C2A25", border: plan.highlight ? "none" : "0.5px solid #2C2A25" }}
                >
                  Reserveer
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-sans font-light" style={{ fontSize: "13px", color: "#C8BAA8" }}>
            Cadeaubonnen beschikbaar voor elk bedrag.{" "}
            <a href="#reserveer" className="underline underline-offset-2" style={{ color: "#A07040" }}>
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
              <h2 className="text-nacht" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.03em", lineHeight: 1.1 }}>
                Verbinding in de natuur.
                <br />
                <em className="italic" style={{ color: "#8C7F6E" }}>Een community.</em>
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
                NOORD organiseert regelmatig events voor leden en bezoekers. Van maandbaden onder de sterrenhemel tot workshops en besloten groepsbijeenkomsten rondom de fire circle.
              </p>
              <div className="mt-10 space-y-0">
                {[
                  { name: "Maandbaden", desc: "Maandelijks collectief bad bij volle maan in de wellness tuin. Stilte verplicht." },
                  { name: "Seizoensevents", desc: "Vuur in de winter. Water in de zomer. Elk seizoen heeft zijn eigen ritueel." },
                  { name: "Corporate Wellness", desc: "Besloten sessies voor teams in de tuin. Herstel als teambuilding." },
                ].map((ev, i) => (
                  <div key={ev.name} className="py-5" style={{ borderTop: "0.5px solid #C8BAA8", marginTop: i === 0 ? "24px" : 0 }}>
                    <p className="text-nacht" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "20px", letterSpacing: "0.03em" }}>{ev.name}</p>
                    <p className="font-sans font-light mt-1" style={{ fontSize: "14px", color: "#5C5248" }}>{ev.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[2px]">
              {[
                { label: "Maandbad", detail: "Maandelijks", bg: "bg-ijssel" },
                { label: "Seizoen", detail: "Buiten · natuur", bg: "bg-eiken" },
                { label: "Corporate", detail: "Op aanvraag", bg: "bg-eiken" },
                { label: "Cadeau", detail: "Gift cards", bg: "bg-ijssel" },
              ].map((card, i) => (
                <div key={i} className={`${card.bg} aspect-square flex flex-col justify-end p-8`}>
                  <p className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "22px", letterSpacing: "0.03em" }}>{card.label}</p>
                  <p className="font-sans text-lin/40 uppercase font-light mt-1" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>{card.detail}</p>
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
          <div className="font-sans text-lin/30 uppercase font-light mb-6" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>
            Opening 2026 · Groningen
          </div>
          <h2 className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.03em" }}>
            Wees er als eerste bij.
          </h2>
          <p className="mt-6 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "rgba(242,237,230,0.5)" }}>
            Schrijf je in voor de waitlist. Early birds ontvangen 20% korting op de eerste drie maanden en een exclusieve uitnodiging voor de soft launch.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row max-w-sm mx-auto" action="#">
            <input
              type="email"
              placeholder="jouw@email.nl"
              className="flex-1 font-sans font-light text-lin placeholder:text-lin/30 px-5 py-4 outline-none"
              style={{ fontSize: "13px", background: "rgba(242,237,230,0.1)", border: "0.5px solid rgba(242,237,230,0.2)" }}
            />
            <button
              type="submit"
              className="font-sans text-lin uppercase font-light bg-warm hover:bg-warm-licht transition-colors duration-200 whitespace-nowrap"
              style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "16px 24px" }}
            >
              Schrijf je in
            </button>
          </form>
          <p className="mt-4 font-sans font-light" style={{ fontSize: "11px", color: "rgba(242,237,230,0.25)" }}>
            Geen spam. Alleen updates over NOORD Groningen.
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-nacht">
        <div className="grid grid-cols-2" style={{ borderBottom: "0.5px solid rgba(242,237,230,0.06)" }}>
          <div className="bg-ijssel px-10 md:px-14 py-10 flex flex-col justify-between" style={{ minHeight: "140px" }}>
            <div className="font-serif text-koud-licht/50 font-light" style={{ fontSize: "11px", letterSpacing: "0.3em" }}>8°</div>
            <div className="font-serif text-lin font-light" style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "0.2em" }}>NOR</div>
          </div>
          <div className="bg-eiken px-10 md:px-14 py-10 flex flex-col justify-between" style={{ minHeight: "140px" }}>
            <div className="font-serif text-warm-licht/50 font-light" style={{ fontSize: "11px", letterSpacing: "0.3em" }}>90°</div>
            <div className="font-serif text-lin font-light" style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "0.2em" }}>DE</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16">
          <div className="grid md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: "0.5px solid rgba(242,237,230,0.08)" }}>
            <div className="md:col-span-2">
              <p className="font-sans font-light text-lin/30 leading-relaxed" style={{ fontSize: "14px" }}>
                Een wellness tuin in het Noord-Nederlandse landschap.
                <br />
                Geen gas. Geen chloor. Geen greenwashing.
              </p>
              <div className="flex gap-5 mt-6">
                {["Instagram", "TikTok"].map((platform) => (
                  <a key={platform} href="#" className="font-sans font-light text-lin/30 hover:text-lin/60 uppercase transition-colors duration-200" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans font-light text-lin/20 uppercase mb-5" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Navigatie</p>
              <ul className="space-y-3">
                {["Concept", "Faciliteiten", "Duurzaamheid", "Events"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="font-sans font-light text-lin/40 hover:text-lin/70 transition-colors duration-200" style={{ fontSize: "14px" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans font-light text-lin/20 uppercase mb-5" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Contact</p>
              <ul className="space-y-3 font-sans font-light text-lin/40" style={{ fontSize: "14px" }}>
                <li>Groningen, Nederland</li>
                <li>
                  <a href="mailto:hallo@norde.nl" className="hover:text-lin/70 transition-colors duration-200">hallo@norde.nl</a>
                </li>
                <li className="pt-2 text-lin/20" style={{ fontSize: "11px" }}>Opening verwacht Q1 2026</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans font-light text-lin/20" style={{ fontSize: "11px" }}>
            <p>© 2026 NOORD Social Recovery Club Groningen. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              {["Privacybeleid", "Algemene voorwaarden"].map((link) => (
                <a key={link} href="#" className="hover:text-lin/40 transition-colors duration-200">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
