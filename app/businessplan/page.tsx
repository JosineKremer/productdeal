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
              <Stat label="Investering" value="€737.000 – €1.062.000 all-in" />
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

      {/* FINANCIEEL */}
      <section className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>04 — Financieel Plan</SectionLabel>
          <h2 className="font-serif text-nacht font-light mb-16" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.05em", lineHeight: 1.15 }}>
            Investering & exploitatie.
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-sans font-light uppercase text-steen mb-6" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                Eenmalige investering
              </p>
              {[
                { post: "Aankoop pand", bedrag: "€350.000 – €500.000" },
                { post: "Verbouwing & inrichting", bedrag: "€150.000 – €200.000" },
                { post: "Technische installaties", bedrag: "€60.000 – €90.000" },
                { post: "Inventaris & apparatuur", bedrag: "€25.000 – €40.000" },
                { post: "Café-inrichting", bedrag: "€20.000 – €30.000" },
                { post: "Marketing & branding", bedrag: "€15.000 – €25.000" },
                { post: "Werkkapitaal (6 mnd)", bedrag: "€40.000 – €60.000" },
                { post: "Onvoorzien (10%)", bedrag: "€67.000 – €97.000" },
              ].map((r) => (
                <div key={r.post} className="flex justify-between py-3 border-b border-steen/15">
                  <span className="font-sans font-light" style={{ fontSize: "14px", color: "#5C5248" }}>{r.post}</span>
                  <span className="font-sans font-light" style={{ fontSize: "14px", color: "#2C2A25" }}>{r.bedrag}</span>
                </div>
              ))}
              <div className="flex justify-between py-4 mt-1">
                <span className="font-serif font-light text-nacht" style={{ fontSize: "18px", letterSpacing: "0.03em" }}>Totaal</span>
                <span className="font-serif font-light text-warm" style={{ fontSize: "18px", letterSpacing: "0.03em" }}>€737.000 – €1.062.000</span>
              </div>
            </div>
            <div>
              <p className="font-sans font-light uppercase text-steen mb-6" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                Maandelijkse exploitatie (jaar 1)
              </p>
              {[
                { post: "Hypotheeklasten", bedrag: "€1.800 – €2.500" },
                { post: "Personeel (3–5 FTE)", bedrag: "€8.000 – €12.000" },
                { post: "Energie (thermaal)", bedrag: "€2.000 – €3.500" },
                { post: "Inkoop café & massages", bedrag: "€1.500 – €2.500" },
                { post: "Marketing & social", bedrag: "€1.000 – €2.000" },
                { post: "Overige kosten", bedrag: "€2.100 – €3.600" },
              ].map((r) => (
                <div key={r.post} className="flex justify-between py-3 border-b border-steen/15">
                  <span className="font-sans font-light" style={{ fontSize: "14px", color: "#5C5248" }}>{r.post}</span>
                  <span className="font-sans font-light" style={{ fontSize: "14px", color: "#2C2A25" }}>{r.bedrag}</span>
                </div>
              ))}
              <div className="flex justify-between py-4 mt-1">
                <span className="font-serif font-light text-nacht" style={{ fontSize: "18px", letterSpacing: "0.03em" }}>Break-even omzet</span>
                <span className="font-serif font-light text-warm" style={{ fontSize: "18px", letterSpacing: "0.03em" }}>~€22.000 / maand</span>
              </div>
              <div className="mt-10 p-8 bg-nacht">
                <p className="font-sans text-lin/30 uppercase font-light mb-3" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                  Omzetpotentieel jaar 1
                </p>
                <p className="font-serif text-lin font-light" style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "0.05em" }}>
                  €18.000 – €28.000
                </p>
                <p className="font-sans text-lin/30 font-light mt-2" style={{ fontSize: "13px" }}>
                  per maand (conservatieve schatting)
                </p>
              </div>
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
