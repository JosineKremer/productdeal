function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-steen">
        {children}
      </span>
      <div className="flex-1 bg-steen/40" style={{ height: "0.5px" }} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-6 border-b border-steen/20">
      <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-steen font-light mb-2">
        {label}
      </div>
      <div className="font-serif text-nacht font-light" style={{ fontSize: "22px", letterSpacing: "0.05em" }}>
        {value}
      </div>
    </div>
  );
}

export default function Businessplan() {
  return (
    <div className="flex flex-col min-h-full bg-lin">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nacht" style={{ height: "52px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex items-center justify-between">
          <a href="/" className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 900, fontSize: "16px", letterSpacing: "0.05em", lineHeight: 1 }}>
            NORDE
          </a>
          <a
            href="/overzicht"
            className="font-sans text-lin/30 hover:text-lin/60 uppercase font-light transition-colors duration-200"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            ← Overzicht
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "60vh", paddingTop: "52px", background: "#1C2E40" }}>
        <div className="font-sans text-lin/30 uppercase font-light mb-8" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>
          Vertrouwelijk document · Versie 1.0 · Mei 2025
        </div>
        <h1 className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 900, fontSize: "clamp(42px, 8vw, 96px)", letterSpacing: "0.06em", lineHeight: 1 }}>
          NORDE
        </h1>
        <div className="w-px bg-lin/20 my-6" style={{ height: "32px" }} />
        <p className="font-sans text-lin/40 uppercase font-light" style={{ fontSize: "10px", letterSpacing: "0.35em" }}>
          Wellness Recovery Club · Groningen
        </p>
        <p className="mt-3 font-serif text-lin/50 italic font-light" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>
          Businessplan 2025 - 2028
        </p>
        <div className="mt-12 flex gap-10 font-sans text-lin/25 uppercase font-light" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
          <span>Opening 2026</span>
          <span>·</span>
          <span>Groningen</span>
          <span>·</span>
          <span>Boutique Wellness</span>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="bg-lin py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>01 - Executive Summary</SectionLabel>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-nacht" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
                Boutique thermaal wellness in het hart van Groningen.
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
                NORDE is een wellness tuin in het Noord-Nederlandse landschap. Geen resort, geen spa - een plek om te stoppen met rennen en je lichaam te laten voelen wat het nodig heeft. Warmte, kou, stilte. Adults only, kleinschalig, altijd reserveren.
              </p>
              <p className="mt-4 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
                Duurzaamheid is geen toevoeging - het is de fundering. Geen gasaansluiting, geen chloor, uitsluitend inheems groen. Er is momenteel geen vergelijkbaar concept in Groningen.
              </p>
            </div>
            <div>
              <Stat label="Doelgroep" value="Jonge professionals 25-40 jaar" />
              <Stat label="Investering" value="€1.200.000 - €1.600.000 all-in" />
              <Stat label="Break-even" value="Verwacht binnen 24-36 maanden" />
              <Stat label="Opening" value="1-2 jaar na start traject" />
              <Stat label="Locatie" value="Groningen, eigen grond (koop)" />
            </div>
          </div>
        </div>
      </section>

      {/* KERNWAARDEN & DUURZAAMHEID */}
      <section className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>01.2 - Kernwaarden & Duurzaamheid</SectionLabel>
          <h2 className="text-nacht mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Duurzaamheid is de fundering.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            Niet als toevoeging, niet als marketinglabel. Duurzaamheid is de basis van elke beslissing - van de beplanting in de tuin tot de leverancier van de koffie.
          </p>

          <div className="grid md:grid-cols-3 gap-[2px] mb-12" style={{ background: "#C8BAA8" }}>
            {[
              { waarde: "Natuur-first", toelichting: "De tuin is het product, niet het gebouw. Inheems groen, geen exoten, biodiversiteit als uitgangspunt." },
              { waarde: "Contrast", toelichting: "Warmte (90°) versus kou (8°) als kern van de beleving. Thermale rituelen zonder wellness-jargon." },
              { waarde: "Geen gas", toelichting: "Geen gasaansluiting. Warmtepompen, zonnepanelen en zonnecollectoren. Warmteterugwinning sauna." },
              { waarde: "Puur water", toelichting: "Zoutwaterbad (geen chloor), magnesium jacuzzi, gefilterd grondwater cold plunge, geen chemicaliën." },
              { waarde: "Stilte", toelichting: "Geen ruis, geen haast. Hier hoor je stoom, water, vuur en wind." },
              { waarde: "Eerlijkheid", toelichting: "Transparant over keuzes. Jaarlijkse CO₂-rapportage. Geen greenwashing." },
            ].map((k) => (
              <div key={k.waarde} className="p-8 bg-wit">
                <div className="text-nacht mb-3" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "20px", letterSpacing: "0.03em" }}>{k.waarde}</div>
                <p className="font-sans font-light leading-relaxed" style={{ fontSize: "13px", color: "#5C5248" }}>{k.toelichting}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-[2px]" style={{ background: "#C8BAA8" }}>
            {[
              { pijler: "Energie", kleur: "#1C2E40", maatregelen: ["Geen gasaansluiting", "Warmtepomp verwarming", "Zonnepanelen + zonnecollectoren", "Warmteterugwinning sauna", "Groendak café-paviljoen"] },
              { pijler: "Water", kleur: "#2C2A25", maatregelen: ["Zoutwaterbad - geen chloor", "Magnesium jacuzzi - geen toevoegingen", "Cold plunge - gefilterd grondwater", "Regenwateropvang", "UV-filtratie"] },
              { pijler: "Tuin", kleur: "#2C2A25", maatregelen: ["Uitsluitend inheemse planten", "Geen bestrijdingsmiddelen", "Insectenhotels", "Voedselbos-elementen", "Faunavriendelijke verlichting"] },
              { pijler: "Café", kleur: "#3D2B1A", maatregelen: ["Lokale leveranciers max 50km", "Biologisch menu", "Geen wegwerpplastic", "FSC-hout interieur", "Jaarlijkse CO₂-rapportage"] },
            ].map((p) => (
              <div key={p.pijler} className="p-8" style={{ background: p.kleur }}>
                <div className="text-lin mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "18px", letterSpacing: "0.03em" }}>{p.pijler}</div>
                <ul className="space-y-2">
                  {p.maatregelen.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: "rgba(212,168,120,0.5)" }} />
                      <span className="font-sans font-light" style={{ fontSize: "12px", color: "rgba(242,237,230,0.5)" }}>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-lin/30">02 - Concept</span>
            <div className="flex-1 bg-lin/10" style={{ height: "0.5px" }} />
          </div>
          <h2 className="text-lin mb-16" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Een wellness tuin voor herstel, stilte en verbinding.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "rgba(242,237,230,0.06)" }}>
            {[
              { name: "Buitenzwembad", detail: "30-32°C · zoutwater · 15-20 personen", desc: "Verwarmd buitenzwembad met zoutwaterinstallatie. Geen chloor - elektrolyse reinigt. Zachter voor huid en natuur." },
              { name: "Magnesium jacuzzi", detail: "38°C · buiten · 8-10 personen", desc: "Magnesiumchloride bevordert spierherstel. Klein warm volume, bewuste herstelervaring. Geen kunstmatige toevoegingen." },
              { name: "Cold Plunge", detail: "8°C · gefilterd grondwater", desc: "Puur gefilterd grondwater. Gesloten circuit, geen toevoegingen. Het rauwste element van de tuin." },
              { name: "Pinewood Sauna", detail: "90°C · FSC grenenhout · 8-12 personen", desc: "Traditionele Scandinavische droge sauna van FSC-gecertificeerd grenenhout. Warmteterugwinning. Traditioneel opgiet." },
              { name: "Steam Dome", detail: "45-50°C · eucalyptus · 4-6 personen", desc: "Organische witte koepelstructuur. Eucalyptus en kruiden. Geen chemicaliën, alleen aromatherapie." },
              { name: "Fire Circle", detail: "Koperen vuurschaal · 10-15 personen", desc: "Koperen vuurschaal in de open tuin. Seizoensgebonden. Maandbaden. Verbinding." },
              { name: "Café-paviljoen", detail: "Half open · groendak · 20-30 personen", desc: "Vrijstaand paviljoen met groendak en ronde centrale haard. Lokale producten max 50km. Geen wegwerpplastic." },
              { name: "Wellness Tuin", detail: "Het Groningse landschap", desc: "Uitsluitend inheemse planten. Geen bestrijdingsmiddelen. Insectenhotels. Faunavriendelijke verlichting." },
              { name: "Massage", detail: "Private cabines · 2 ruimtes", desc: "Zweedse en deep tissue in stille privéruimtes." },
            ].map((f) => (
              <div key={f.name} className="p-8" style={{ background: "#1C2E40" }}>
                <div className="text-lin mb-2" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "20px", letterSpacing: "0.03em" }}>
                  {f.name}
                </div>
                <div className="font-sans text-lin/30 uppercase font-light mb-3" style={{ fontSize: "8px", letterSpacing: "0.3em" }}>
                  {f.detail}
                </div>
                <p className="font-sans font-light leading-relaxed" style={{ fontSize: "13px", color: "rgba(242,237,230,0.4)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKT */}
      <section className="bg-lin py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>03 - Marktanalyse</SectionLabel>
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-nacht" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
                Groningen als markt.
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
                Er zijn geen directe concurrenten met een vergelijkbaar thermaal boutique concept in Groningen. NORDE opereert in een blauwe oceaan - de enige speler in een groeiende markt.
              </p>
            </div>
            <div>
              {[
                { label: "Inwoners Groningen", value: "~235.000" },
                { label: "Aandeel 20-40 jaar", value: "~38% - primaire doelgroep" },
                { label: "Wellnesstrend NL", value: "+12% per jaar" },
                { label: "Directe concurrenten", value: "Geen bekend in Groningen" },
              ].map((s) => (
                <Stat key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "#C8BAA8" }}>
            {[
              { title: "Primaire doelgroep", desc: "Jonge professionals 25-40 jaar. Hoog digitaal bewustzijn, zoekt offline decompressie. Bereid te betalen voor kwaliteit en ervaring." },
              { title: "Secundaire doelgroep", desc: "Studenten, koppels voor date-ervaringen, corporate klanten en weekendtoeristen. Groningen als bestemming." },
              { title: "Positionering", desc: "Premium maar toegankelijk. Niet de goedkoopste, maar de meest doordachte en sfeervolle thermale ervaring in de stad." },
            ].map((c) => (
              <div key={c.title} className="p-10 bg-wit">
                <div className="text-nacht mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "20px", letterSpacing: "0.03em" }}>
                  {c.title}
                </div>
                <p className="font-sans font-light leading-relaxed" style={{ fontSize: "14px", color: "#5C5248" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIEEL - TEASER */}
      <section className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>04 - Financieel Plan</SectionLabel>
          <h2 className="text-nacht mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Investering, exploitatie & prognose.
          </h2>
          <p className="font-sans font-light mb-12 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            Het financieel plan bevat de gedetailleerde investering (€1,2M-€1,6M all-in), exploitatiebegroting, omzetprognose per jaar en een volledig uitgewerkt conservatief scenario als stress-test. Dit gedeelte is afgeschermd voor investeerders.
          </p>

          <div className="grid md:grid-cols-3 gap-[2px] mb-10" style={{ background: "#C8BAA8" }}>
            {[
              { label: "All-in investering", value: "€1,2M - €1,6M", sub: "Inclusief grond, installaties en werkkapitaal" },
              { label: "Break-even", value: "~€38k/mnd", sub: "Bereikt bij ~850 gasten per maand" },
              { label: "Terugverdientijd", value: "2 - 3 jaar", sub: "Operationele investering excl. grond" },
            ].map((c) => (
              <div key={c.label} className="p-8 bg-wit">
                <div className="font-sans font-light uppercase text-steen mb-3" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>{c.label}</div>
                <div className="font-serif text-nacht font-light" style={{ fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "0.03em" }}>{c.value}</div>
                <div className="font-sans font-light text-steen mt-2" style={{ fontSize: "11px" }}>{c.sub}</div>
              </div>
            ))}
          </div>

          <a
            href="/businessplan/financieel"
            className="inline-flex items-center gap-4 group"
          >
            <div className="flex items-center justify-center shrink-0" style={{ width: "40px", height: "40px", border: "0.5px solid #C8BAA8" }}>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="7" width="13" height="9" rx="0.5" stroke="#C8BAA8" strokeWidth="0.6"/>
                <path d="M3 7V5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5V7" stroke="#C8BAA8" strokeWidth="0.6"/>
                <circle cx="7" cy="11" r="1.2" fill="#C8BAA8"/>
              </svg>
            </div>
            <div>
              <div className="text-nacht group-hover:text-warm transition-colors duration-200" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "clamp(18px, 2.5vw, 26px)", letterSpacing: "0.03em" }}>
                Volledig financieel plan →
              </div>
              <div className="font-sans font-light text-steen mt-0.5" style={{ fontSize: "11px", letterSpacing: "0.15em" }}>
                Investering · Exploitatie · Scenario's · Prognose
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* GO TO MARKET */}
      <section className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-lin/30">05 - Go-to-Market</span>
            <div className="flex-1 bg-lin/10" style={{ height: "0.5px" }} />
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
                Strategie voor lancering.
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "rgba(242,237,230,0.45)" }}>
                6 tot 12 maanden voor opening bouwt NORDE een community op via Instagram, een waitlist en samenwerking met lokale influencers. De soft launch is exclusief voor early adopters.
              </p>
            </div>
            <div className="space-y-0">
              {[
                { fase: "Pre-opening", acties: "Instagram opbouwen, waitlist, behind-the-scenes, lokale pers" },
                { fase: "Soft launch", acties: "Besloten test-avonden voor early adopters en media" },
                { fase: "Grand opening", acties: "PR-campagne, influencer-avond, Google Ads lokaal" },
                { fase: "Community", acties: "Maandbaden, workshops, corporate sessies, events" },
              ].map((f, i) => (
                <div key={f.fase} className="py-6" style={{ borderTop: i === 0 ? "0.5px solid rgba(242,237,230,0.1)" : "0.5px solid rgba(242,237,230,0.08)" }}>
                  <div className="text-lin mb-2" style={{ fontFamily: "var(--font-nord)", fontWeight: 400, fontSize: "18px", letterSpacing: "0.03em" }}>
                    {f.fase}
                  </div>
                  <p className="font-sans font-light" style={{ fontSize: "14px", color: "rgba(242,237,230,0.4)" }}>
                    {f.acties}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-nacht" style={{ borderTop: "0.5px solid rgba(242,237,230,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-14 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="font-serif text-lin/30 font-light" style={{ fontSize: "22px", letterSpacing: "0.2em" }}>
            NORDE
          </div>
          <p className="font-sans font-light text-lin/20" style={{ fontSize: "11px" }}>
            Vertrouwelijk document · Niet openbaar · © 2025 NORDE Wellness Recovery Club
          </p>
        </div>
      </footer>

    </div>
  );
}
