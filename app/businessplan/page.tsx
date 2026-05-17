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
          <a href="/" className="flex flex-col">
            <div className="font-serif text-lin font-light" style={{ fontSize: "22px", letterSpacing: "0.2em", lineHeight: 1 }}>
              NORDE
            </div>
            <div className="font-sans text-lin/30 font-light uppercase mt-0.5" style={{ fontSize: "7px", letterSpacing: "0.28em" }}>
              Social Recovery Club
            </div>
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
        <h1 className="font-serif text-lin font-light" style={{ fontSize: "clamp(42px, 8vw, 96px)", letterSpacing: "0.12em", lineHeight: 1 }}>
          NORDE
        </h1>
        <div className="w-px bg-lin/20 my-6" style={{ height: "32px" }} />
        <p className="font-sans text-lin/40 uppercase font-light" style={{ fontSize: "10px", letterSpacing: "0.35em" }}>
          Social Recovery Club · Groningen
        </p>
        <p className="mt-3 font-serif text-lin/50 italic font-light" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>
          Businessplan 2025 – 2027
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
          <SectionLabel>01 — Executive Summary</SectionLabel>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-nacht font-light" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
                Boutique thermaal wellness in het hart van Groningen.
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
                Norde is een thermaal wellness concept dat een unieke combinatie biedt van sauna, steam dome, cold plunge, jacuzzi, massage, fire circle en een stijlvol café in een rustige, designgedreven omgeving. Adults only, kleinschalig en altijd reserveren.
              </p>
              <p className="mt-4 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
                Er is momenteel geen vergelijkbaar premiumconcept in Groningen — dat levert een aantrekkelijke blauwe oceaan positie op in een groeiende markt.
              </p>
            </div>
            <div>
              <Stat label="Doelgroep" value="Jonge professionals 25–40 jaar" />
              <Stat label="Investering" value="€1.002.000 – €1.425.000 all-in" />
              <Stat label="Break-even" value="Verwacht binnen 24–36 maanden" />
              <Stat label="Opening" value="1–2 jaar na start traject" />
              <Stat label="Locatie" value="Groningen, eigen pand (koop)" />
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-lin/30">02 — Concept</span>
            <div className="flex-1 bg-lin/10" style={{ height: "0.5px" }} />
          </div>
          <h2 className="font-serif text-lin font-light mb-16" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
            Een sanctuary voor herstel, stilte en verbinding.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "rgba(242,237,230,0.06)" }}>
            {[
              { name: "Pinewood Sauna", detail: "90°C · 8–12 personen", desc: "Scandinavische droge sauna van grenenhout. Zuiver, stil, verhit." },
              { name: "Steam Dome", detail: "Aromatherapie · 4–6 personen", desc: "Unieke stoomboog met etherische oliën. Longen open, geest leeg." },
              { name: "Cold Plunge", detail: "8°C · 2–4 personen", desc: "Contrast koude dompeling. Het lichaam schakelt." },
              { name: "Jacuzzi", detail: "Hotbath · 4–6 personen", desc: "Warm bruisend water na de kou. De spieren geven los." },
              { name: "Fire Circle", detail: "Buiten · 10–15 personen", desc: "Vuurschaal in de buitenlucht. Gesprekken die ergens over gaan." },
              { name: "Massage", detail: "Private cabines · 2–3 ruimtes", desc: "Zweedse en deep tissue in stille privéruimtes." },
              { name: "Café & Bar", detail: "20–30 zitplaatsen", desc: "Gezonde drankjes, smoothies, bouillon en lichte snacks." },
              { name: "Zonnedek & Tuin", detail: "Buiten · 15–20 personen", desc: "Luisteren naar de wind. Niets doen is ook iets doen." },
              { name: "Kleedkamers", detail: "Luxe · per geslacht", desc: "Volledig uitgeruste faciliteiten met douches en lockers." },
            ].map((f) => (
              <div key={f.name} className="p-8" style={{ background: "#1C2E40" }}>
                <div className="font-serif text-lin font-light mb-2" style={{ fontSize: "20px", letterSpacing: "0.05em" }}>
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
          <SectionLabel>03 — Marktanalyse</SectionLabel>
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="font-serif text-nacht font-light" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
                Groningen als markt.
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "#5C5248" }}>
                Er zijn geen directe concurrenten met een vergelijkbaar thermaal boutique concept in Groningen. Norde opereert in een blauwe oceaan — de enige speler in een groeiende markt.
              </p>
            </div>
            <div>
              {[
                { label: "Inwoners Groningen", value: "~235.000" },
                { label: "Aandeel 20–40 jaar", value: "~38% — primaire doelgroep" },
                { label: "Wellnesstrend NL", value: "+12% per jaar" },
                { label: "Directe concurrenten", value: "Geen bekend in Groningen" },
              ].map((s) => (
                <Stat key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "#C8BAA8" }}>
            {[
              { title: "Primaire doelgroep", desc: "Jonge professionals 25–40 jaar. Hoog digitaal bewustzijn, zoekt offline decompressie. Bereid te betalen voor kwaliteit en ervaring." },
              { title: "Secundaire doelgroep", desc: "Studenten, koppels voor date-ervaringen, corporate klanten en weekendtoeristen. Groningen als bestemming." },
              { title: "Positionering", desc: "Premium maar toegankelijk. Niet de goedkoopste, maar de meest doordachte en sfeervolle thermale ervaring in de stad." },
            ].map((c) => (
              <div key={c.title} className="p-10 bg-wit">
                <div className="font-serif text-nacht font-light mb-4" style={{ fontSize: "20px", letterSpacing: "0.05em" }}>
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

      {/* FINANCIEEL — INVESTERING */}
      <section className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>04 — Financieel Plan</SectionLabel>
          <h2 className="font-serif text-nacht font-light mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
            Investering.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            De totale investering bestaat uit de aankoop van het pand (waardevast actief) en de operationele investering (verbouwing, inrichting, installaties en opstartkosten). Alleen de operationele investering moet worden terugverdiend uit de exploitatie.
          </p>

          {/* Pand */}
          <div className="mb-12">
            <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Aankoop pand</p>
            <div className="flex justify-between items-center py-4 border-b border-steen/20">
              <div>
                <span className="font-sans font-light" style={{ fontSize: "15px", color: "#5C5248" }}>Pand (koop) — eigen locatie</span>
                <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>Waardevast actief. Vermogensopbouw via hypotheekaflossing. Bij verkoop volledig te recupereren.</div>
              </div>
              <span className="font-serif font-light text-nacht ml-8 shrink-0" style={{ fontSize: "18px" }}>€550.000 – €750.000</span>
            </div>
          </div>

          {/* Verbouwing gedetailleerd */}
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Thermale voorzieningen & installaties</p>
              {[
                { post: "Pinewood Sauna", bedrag: "€18.000 – €28.000", note: "Custom grenenhout bouw, 8–12 personen, 90°C" },
                { post: "Steam Dome", bedrag: "€22.000 – €35.000", note: "Unieke stoomboog, aromatherapie-systeem, 4–6 personen" },
                { post: "Cold Plunge", bedrag: "€15.000 – €25.000", note: "Koelunit + bassin, constante 8°C" },
                { post: "Jacuzzi / buiten hotbath", bedrag: "€20.000 – €32.000", note: "Buitenopstelling, 4–6 personen, verwarmd" },
                { post: "Thermaal leidingwerk", bedrag: "€15.000 – €22.000", note: "Verbinding alle units, circulatiesysteem" },
                { post: "Filtratiesystemen", bedrag: "€12.000 – €18.000", note: "Waterbehandeling jacuzzi, cold plunge, zwembad" },
                { post: "Stoom & verwarming", bedrag: "€10.000 – €15.000", note: "Stoomgenerator dome, verwarmingsinstallatie" },
                { post: "Ventilatie sauna & dome", bedrag: "€8.000 – €12.000", note: "Thermisch veilige luchtbehandeling" },
                { post: "Legionellapreventie", bedrag: "€5.000 – €8.000", note: "Wettelijk verplicht, watertemperatuurbewaking" },
              ].map((r) => (
                <div key={r.post} className="py-3 border-b border-steen/10">
                  <div className="flex justify-between">
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: "#5C5248" }}>{r.post}</span>
                    <span className="font-sans font-light shrink-0 ml-4" style={{ fontSize: "13px", color: "#2C2A25" }}>{r.bedrag}</span>
                  </div>
                  <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>{r.note}</div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Ruimtes, tuin & café</p>
              {[
                { post: "Massageruimtes (2×)", bedrag: "€12.000 – €18.000", note: "Akoestische afwerking, sfeerverlichting, massagetafels" },
                { post: "Kleedkamers & douches", bedrag: "€18.000 – €25.000", note: "Luxe afwerking, lockers, gescheiden per geslacht" },
                { post: "Aanleg wellness tuin", bedrag: "€30.000 – €50.000", note: "Paden, beplanting, privacy-erfafscheiding, drainage" },
                { post: "Fire circle & buitenmeubilair", bedrag: "€8.000 – €12.000", note: "Vuurschaal, teakhouten loungestoelen, dekking" },
                { post: "Buitenverlichting", bedrag: "€5.000 – €8.000", note: "Sfeerverlichting tuin, paden en thermale units" },
                { post: "Café — aanleg & bar", bedrag: "€18.000 – €25.000", note: "Bar, keuken, koffie-installatie, koeling" },
                { post: "Café — meubilair & styling", bedrag: "€12.000 – €18.000", note: "Tafels, stoelen, verlichting, interieurafwerking" },
                { post: "Receptie & overig interieur", bedrag: "€8.000 – €12.000", note: "Ontvangstbalie, wachtruimte, bewegwijzering" },
                { post: "Elektra (uitbreiding)", bedrag: "€8.000 – €12.000", note: "Zware groepen thermale installaties, verdeler" },
              ].map((r) => (
                <div key={r.post} className="py-3 border-b border-steen/10">
                  <div className="flex justify-between">
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: "#5C5248" }}>{r.post}</span>
                    <span className="font-sans font-light shrink-0 ml-4" style={{ fontSize: "13px", color: "#2C2A25" }}>{r.bedrag}</span>
                  </div>
                  <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>{r.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Overige opstartkosten */}
          <div className="mb-12">
            <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Overige opstartkosten</p>
            <div className="grid md:grid-cols-2 gap-x-16">
              {[
                { post: "Marketing & branding (pre-opening)", bedrag: "€15.000 – €25.000", note: "Huisstijl, website, openingscampagne, waitlist" },
                { post: "IT & reserveringssysteem", bedrag: "€5.000 – €10.000", note: "Online booking, kassa, QR-toegang" },
                { post: "Werkkapitaal (6 maanden)", bedrag: "€40.000 – €60.000", note: "Buffer voor personeels- en exploitatiekosten in opbouwfase" },
                { post: "Vergunningen & juridisch", bedrag: "€5.000 – €10.000", note: "Horecavergunning, bestemmingsplan, notaris" },
              ].map((r) => (
                <div key={r.post} className="py-3 border-b border-steen/10">
                  <div className="flex justify-between">
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: "#5C5248" }}>{r.post}</span>
                    <span className="font-sans font-light shrink-0 ml-4" style={{ fontSize: "13px", color: "#2C2A25" }}>{r.bedrag}</span>
                  </div>
                  <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>{r.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Totaaloverzicht */}
          <div className="grid md:grid-cols-3 gap-[2px] mb-6" style={{ background: "#C8BAA8" }}>
            {[
              { label: "Aankoop pand", amount: "€550.000 – €750.000", sub: "Waardevast actief, buiten exploitatie-rendement", dark: true },
              { label: "Operationele investering", amount: "€360.000 – €525.000", sub: "Verbouwing, installaties, inrichting, opstart", dark: false },
              { label: "Onvoorzien (10%) + totaal", amount: "€1.002.000 – €1.425.000", sub: "All-in investering inclusief 10% buffer", dark: false },
            ].map((c) => (
              <div key={c.label} className={`p-8 ${c.dark ? "bg-nacht" : "bg-wit"}`}>
                <div className="font-sans font-light uppercase mb-3" style={{ fontSize: "9px", letterSpacing: "0.3em", color: c.dark ? "rgba(242,237,230,0.3)" : "#C8BAA8" }}>{c.label}</div>
                <div className="font-serif font-light" style={{ fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "0.03em", color: c.dark ? "#D4A878" : "#A07040" }}>{c.amount}</div>
                <div className="font-sans font-light mt-2" style={{ fontSize: "11px", color: c.dark ? "rgba(242,237,230,0.3)" : "#C8BAA8" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIEEL — EXPLOITATIE */}
      <section className="bg-lin py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-nacht font-light mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
            Exploitatie.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            Norde werkt met tijdslots van 3 uur — geen hele-dag-toegang. Dit verhoogt de omzetcapaciteit, houdt de drukte beheersbaar en versterkt de exclusiviteit van de ervaring.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Maandelijkse vaste kosten</p>
              {[
                { post: "Hypotheeklasten pand", bedrag: "€3.000 – €4.200", note: "4,5% rente, 25 jaar looptijd" },
                { post: "Personeel (3–5 FTE)", bedrag: "€8.000 – €12.000", note: "Receptie, hosts, reiniging — mix part-time/full-time" },
                { post: "Energie — sauna & steam dome", bedrag: "€900 – €1.400", note: "Hoog stroomverbruik, continue opwarming" },
                { post: "Energie — water & pompen", bedrag: "€600 – €1.000", note: "Filtratie, verwarming jacuzzi & cold plunge" },
                { post: "Energie — algemeen", bedrag: "€500 – €900", note: "Verlichting, ventilatie, receptie" },
                { post: "Massageproducten & linnen", bedrag: "€600 – €1.000", note: "Oliën, handdoeken per sessie" },
                { post: "Inkoop café", bedrag: "€900 – €1.500", note: "Smoothies, bouillon, thee, lichte snacks (~35% marge)" },
                { post: "Marketing & social media", bedrag: "€1.000 – €2.000", note: "Google Ads lokaal, Instagram content" },
                { post: "Verzekeringen", bedrag: "€400 – €600", note: "Bedrijfs-, aansprakelijkheids-, opstalverzekering" },
                { post: "Administratie & boekhouding", bedrag: "€300 – €600", note: "Extern accountantsbureau" },
                { post: "Onderhoud thermale installaties", bedrag: "€500 – €800", note: "Waterchemie, filters, periodieke keuring" },
                { post: "Schoonmaak", bedrag: "€300 – €500", note: "Dagelijks — kleedkamers, ruimtes, sauna" },
                { post: "Software & reserveringen", bedrag: "€200 – €400", note: "Boekingsplatform, kassa, nieuwsbrief" },
              ].map((r) => (
                <div key={r.post} className="py-2.5 border-b border-steen/10">
                  <div className="flex justify-between">
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: "#5C5248" }}>{r.post}</span>
                    <span className="font-sans font-light shrink-0 ml-4" style={{ fontSize: "13px", color: "#2C2A25" }}>{r.bedrag}</span>
                  </div>
                  <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>{r.note}</div>
                </div>
              ))}
              <div className="flex justify-between py-4 mt-2" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                <span className="font-serif font-light text-nacht" style={{ fontSize: "18px" }}>Totale maandkosten</span>
                <span className="font-serif font-light text-warm" style={{ fontSize: "18px" }}>€17.300 – €26.900</span>
              </div>
              <div className="flex justify-between py-3" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                <span className="font-sans font-light text-nacht" style={{ fontSize: "14px" }}>Break-even omzet</span>
                <span className="font-sans font-light text-warm" style={{ fontSize: "14px" }}>~€25.000 / maand</span>
              </div>
            </div>

            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Capaciteitsmodel (3-uurs tijdslots)</p>
              <div className="space-y-0 mb-10">
                {[
                  { slot: "Slot 1 — 09:00–12:00", weekdag: "4–8", weekend: "10–16" },
                  { slot: "Slot 2 — 12:00–15:00", weekdag: "8–13", weekend: "16–21" },
                  { slot: "Slot 3 — 15:00–18:00", weekdag: "12–18", weekend: "18–25" },
                  { slot: "Slot 4 — 18:00–21:00", weekdag: "14–20", weekend: "20–25" },
                ].map((s, i) => (
                  <div key={i} className="py-4" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                    <div className="font-sans font-light uppercase mb-2" style={{ fontSize: "9px", letterSpacing: "0.25em", color: "#C8BAA8" }}>{s.slot}</div>
                    <div className="flex gap-8">
                      <div>
                        <div className="font-sans font-light" style={{ fontSize: "9px", color: "#C8BAA8", letterSpacing: "0.2em" }}>WEEKDAG</div>
                        <div className="font-serif font-light text-nacht" style={{ fontSize: "20px" }}>{s.weekdag}</div>
                        <div className="font-sans font-light" style={{ fontSize: "10px", color: "#C8BAA8" }}>gasten</div>
                      </div>
                      <div>
                        <div className="font-sans font-light" style={{ fontSize: "9px", color: "#A07040", letterSpacing: "0.2em" }}>WEEKEND</div>
                        <div className="font-serif font-light text-warm" style={{ fontSize: "20px" }}>{s.weekend}</div>
                        <div className="font-sans font-light" style={{ fontSize: "10px", color: "#C8BAA8" }}>gasten</div>
                      </div>
                      <div>
                        <div className="font-sans font-light" style={{ fontSize: "9px", color: "#C8BAA8", letterSpacing: "0.2em" }}>MAX</div>
                        <div className="font-serif font-light" style={{ fontSize: "20px", color: "#C8BAA8" }}>25</div>
                        <div className="font-sans font-light" style={{ fontSize: "10px", color: "#C8BAA8" }}>gasten</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="py-4" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                  <div className="flex justify-between">
                    <span className="font-sans font-light" style={{ fontSize: "12px", color: "#8C7F6E" }}>Max capaciteit per dag (4 slots × 25)</span>
                    <span className="font-sans font-light font-medium" style={{ fontSize: "12px", color: "#2C2A25" }}>100 gasten</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-sans font-light" style={{ fontSize: "12px", color: "#8C7F6E" }}>Max capaciteit per maand</span>
                    <span className="font-sans font-light font-medium" style={{ fontSize: "12px", color: "#2C2A25" }}>~3.000 gasten</span>
                  </div>
                </div>
              </div>

              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Bezoekersprognose per jaar</p>
              <div className="space-y-0">
                {[
                  {
                    jaar: "Jaar 1 — Opbouw",
                    weekdag: "~38/dag (10%)",
                    weekend: "~65/dag (26%)",
                    totaal: "~500 gasten/mnd",
                    note: "Mond-tot-mond, waitlist-conversie, lokale pers. Bezetting bouwt maandelijks op.",
                    color: "#C8BAA8",
                  },
                  {
                    jaar: "Jaar 2 — Groei",
                    weekdag: "~55/dag (14%)",
                    weekend: "~175/dag (70%)",
                    totaal: "~1.200 gasten/mnd",
                    note: "Vaste klantenbasis, abonnementen actief, events draaien. Weekenden volgeboekt.",
                    color: "#A07040",
                  },
                  {
                    jaar: "Jaar 3 — Stabiel",
                    weekdag: "~70/dag (18%)",
                    weekend: "~220/dag (88%)",
                    totaal: "~1.600 gasten/mnd",
                    note: "Bekende naam in Groningen. Weekdag groeit door corporate en abonnementen.",
                    color: "#1C2E40",
                  },
                ].map((j) => (
                  <div key={j.jaar} className="py-5" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-serif font-light text-nacht" style={{ fontSize: "17px", letterSpacing: "0.03em" }}>{j.jaar}</span>
                      <span className="font-sans font-light" style={{ fontSize: "13px", color: j.color, fontWeight: 400 }}>{j.totaal}</span>
                    </div>
                    <div className="flex gap-6 mb-2">
                      <span className="font-sans font-light" style={{ fontSize: "11px", color: "#8C7F6E" }}>Weekdag: {j.weekdag}</span>
                      <span className="font-sans font-light" style={{ fontSize: "11px", color: "#8C7F6E" }}>Weekend: {j.weekend}</span>
                    </div>
                    <p className="font-sans font-light" style={{ fontSize: "12px", color: "#C8BAA8" }}>{j.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIEEL — OMZETMODEL */}
      <section className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-4">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-lin/30">Omzetmodel</span>
            <div className="flex-1 bg-lin/10" style={{ height: "0.5px" }} />
          </div>
          <h2 className="font-serif text-lin font-light mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
            Inkomsten per stroom.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "rgba(242,237,230,0.4)", maxWidth: "600px" }}>
            Norde heeft vier onafhankelijke inkomstenstromen. Entree is de basis; massages, café en events verhogen de gemiddelde besteding per bezoeker significant.
          </p>

          {/* Revenue streams */}
          <div className="grid md:grid-cols-2 gap-[2px] mb-16" style={{ background: "rgba(242,237,230,0.06)" }}>
            {[
              {
                stroom: "Entree — 3-uurs tijdslot",
                prijs: "€45 p.p.",
                jaar1: "500 gasten → €22.500",
                jaar2: "1.200 gasten → €54.000",
                jaar3: "1.600 gasten → €72.000",
                detail: "Elke gast reserveert exact één tijdslot van 3 uur. Geen hele-dag-toegang — dit maakt 4 rotaties per dag mogelijk. Prijs is inclusief gebruik van alle thermale voorzieningen.",
                bg: "#1C2E40",
              },
              {
                stroom: "Massage — 60 min sessie",
                prijs: "€79 p.s.",
                jaar1: "45 sessies → €3.555",
                jaar2: "110 sessies → €8.690",
                jaar3: "160 sessies → €12.640",
                detail: "2 private massageruimtes, elk gemiddeld 3–4 sessies per dag bij volledige bezetting. Bezoekers kunnen massage combineren met thermale sessie of apart boeken.",
                bg: "#2C2A25",
              },
              {
                stroom: "Café & bar",
                prijs: "€10–12 p.p.",
                jaar1: "500 gasten → €5.500",
                jaar2: "1.200 gasten → €13.200",
                jaar3: "1.600 gasten → €17.600",
                detail: "Smoothies (€8), bouillon (€5), thee & kruidenthee (€4), lichte snacks. Gemiddeld 70% van gasten consumeert iets. Geen volledige maaltijden — bewust licht gehouden.",
                bg: "#2C2A25",
              },
              {
                stroom: "Events & abonnementen",
                prijs: "Variabel",
                jaar1: "€1.500 (events)",
                jaar2: "€3.000 events + €4.800 abo",
                jaar3: "€4.500 events + €12.800 abo",
                detail: "Events: maandbaden, workshop-avonden, corporate sessies (€400–€800/event). Abonnementen: vanaf jaar 2, €160/mnd voor 8× toegang — opbouw naar 80 leden in jaar 3.",
                bg: "#3D2B1A",
              },
            ].map((s) => (
              <div key={s.stroom} className="p-8" style={{ background: s.bg }}>
                <div className="flex justify-between items-start mb-4">
                  <div className="font-serif text-lin font-light" style={{ fontSize: "19px", letterSpacing: "0.04em" }}>{s.stroom}</div>
                  <div className="font-serif text-warm-licht/70 font-light ml-4 shrink-0" style={{ fontSize: "16px" }}>{s.prijs}</div>
                </div>
                <p className="font-sans font-light leading-relaxed mb-6" style={{ fontSize: "13px", color: "rgba(242,237,230,0.4)" }}>{s.detail}</p>
                <div className="space-y-2">
                  {[
                    { label: "Jaar 1", val: s.jaar1 },
                    { label: "Jaar 2", val: s.jaar2 },
                    { label: "Jaar 3", val: s.jaar3 },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between" style={{ borderTop: "0.5px solid rgba(242,237,230,0.08)", paddingTop: "8px" }}>
                      <span className="font-sans font-light" style={{ fontSize: "11px", color: "rgba(242,237,230,0.3)", letterSpacing: "0.2em" }}>{r.label}</span>
                      <span className="font-sans font-light" style={{ fontSize: "12px", color: "rgba(242,237,230,0.6)" }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Totaalprognose */}
          <div className="mb-16">
            <p className="font-sans font-light uppercase text-lin/30 mb-8" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Totale omzetprognose per jaar</p>
            <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "rgba(242,237,230,0.06)" }}>
              {[
                {
                  jaar: "Jaar 1",
                  sub: "Opbouwfase · 500 gasten/mnd gem.",
                  entree: "€22.500",
                  massage: "€3.555",
                  cafe: "€5.500",
                  events: "€1.500",
                  abo: "€0",
                  totaal: "€33.055",
                  kosten: "€25.000",
                  winst: "€8.055",
                  toelichting: "H1 nog onder break-even (werkkapitaalbuffer). H2 break-even bereikt. Jaar gemiddelde positief.",
                  winstColor: "#D4A878",
                },
                {
                  jaar: "Jaar 2",
                  sub: "Groei · 1.200 gasten/mnd gem.",
                  entree: "€54.000",
                  massage: "€8.690",
                  cafe: "€13.200",
                  events: "€3.000",
                  abo: "€4.800",
                  totaal: "€83.690",
                  kosten: "€25.000",
                  winst: "€58.690",
                  toelichting: "Sterke groei door vaste klantenkring, abonnementen en events. Break-even ver voorbij.",
                  winstColor: "#A07040",
                },
                {
                  jaar: "Jaar 3",
                  sub: "Stabiel · 1.600 gasten/mnd gem.",
                  entree: "€72.000",
                  massage: "€12.640",
                  cafe: "€17.600",
                  events: "€4.500",
                  abo: "€12.800",
                  totaal: "€119.540",
                  kosten: "€26.000",
                  winst: "€93.540",
                  toelichting: "Nettoprofit ~€93k/mnd. Operationele investering (€450k–€525k) terugverdiend binnen 5–6 jaar.",
                  winstColor: "#A07040",
                },
              ].map((j) => (
                <div key={j.jaar} className="p-8" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="font-sans font-light uppercase text-lin/20 mb-1" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>{j.sub}</div>
                  <div className="font-serif text-lin font-light mb-6" style={{ fontSize: "24px", letterSpacing: "0.08em" }}>{j.jaar}</div>
                  {[
                    { label: "Entree", val: j.entree },
                    { label: "Massage", val: j.massage },
                    { label: "Café", val: j.cafe },
                    { label: "Events", val: j.events },
                    { label: "Abonnementen", val: j.abo },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between py-1.5" style={{ borderBottom: "0.5px solid rgba(242,237,230,0.06)" }}>
                      <span className="font-sans font-light" style={{ fontSize: "12px", color: "rgba(242,237,230,0.35)" }}>{r.label}</span>
                      <span className="font-sans font-light" style={{ fontSize: "12px", color: "rgba(242,237,230,0.55)" }}>{r.val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 mt-1" style={{ borderTop: "0.5px solid rgba(242,237,230,0.15)" }}>
                    <span className="font-sans font-light text-lin/60" style={{ fontSize: "13px" }}>Totaal omzet</span>
                    <span className="font-serif text-lin font-light" style={{ fontSize: "16px" }}>{j.totaal}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-sans font-light text-lin/30" style={{ fontSize: "12px" }}>Kosten (gem.)</span>
                    <span className="font-sans font-light text-lin/40" style={{ fontSize: "12px" }}>–{j.kosten}</span>
                  </div>
                  <div className="flex justify-between pt-2 pb-4" style={{ borderBottom: "0.5px solid rgba(242,237,230,0.1)" }}>
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: j.winstColor }}>Netto resultaat</span>
                    <span className="font-serif font-light" style={{ fontSize: "16px", color: j.winstColor }}>+{j.winst}</span>
                  </div>
                  <p className="font-sans font-light mt-4 leading-relaxed" style={{ fontSize: "11px", color: "rgba(242,237,230,0.25)" }}>{j.toelichting}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terugverdientijd */}
          <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "rgba(242,237,230,0.06)" }}>
            <div className="p-8" style={{ background: "rgba(242,237,230,0.04)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Operationele investering</div>
              <div className="font-serif text-lin font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>€360.000 – €525.000</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Excl. pand — dit is het bedrag dat terugverdiend moet worden uit de exploitatie</div>
            </div>
            <div className="p-8" style={{ background: "rgba(242,237,230,0.04)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Cumulatief netto jaar 1–3</div>
              <div className="font-serif text-warm-licht font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>~€160.000 – €700.000</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Afhankelijk van groeipad. Bij realistisch scenario volledig terugverdiend in jaar 3–4.</div>
            </div>
            <div className="p-8" style={{ background: "rgba(200,186,168,0.08)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Terugverdientijd</div>
              <div className="font-serif text-warm-licht font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>4 – 6 jaar</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Operationele investering. Het pand (waardevast actief) blijft volledig in eigendom en telt niet mee als verliespost.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GO TO MARKET */}
      <section className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light text-lin/30">05 — Go-to-Market</span>
            <div className="flex-1 bg-lin/10" style={{ height: "0.5px" }} />
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-lin font-light" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
                Strategie voor lancering.
              </h2>
              <p className="mt-8 font-sans font-light leading-relaxed" style={{ fontSize: "15px", color: "rgba(242,237,230,0.45)" }}>
                6 tot 12 maanden voor opening bouwt Norde een community op via Instagram, een waitlist en samenwerking met lokale influencers. De soft launch is exclusief voor early adopters.
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
                  <div className="font-serif text-lin font-light mb-2" style={{ fontSize: "18px", letterSpacing: "0.05em" }}>
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
            Vertrouwelijk document · Niet openbaar · © 2025 Norde Social Recovery Club
          </p>
        </div>
      </footer>

    </div>
  );
}
