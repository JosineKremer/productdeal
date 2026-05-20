import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function logout() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.delete("norde-fin-auth");
  redirect("/businessplan/login");
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <span className={`font-sans text-[9px] tracking-[0.4em] uppercase whitespace-nowrap font-light ${dark ? "text-lin/30" : "text-steen"}`}>
        {children}
      </span>
      <div className={`flex-1 ${dark ? "bg-lin/10" : "bg-steen/40"}`} style={{ height: "0.5px" }} />
    </div>
  );
}

export default function FinancieelPage() {
  return (
    <div className="flex flex-col min-h-full bg-lin">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nacht" style={{ height: "52px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex items-center justify-between">
          <a href="/" className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 900, fontSize: "16px", letterSpacing: "0.05em", lineHeight: 1 }}>
            NORDE
          </a>
          <div className="flex items-center gap-6">
            <a
              href="/businessplan"
              className="font-sans text-lin/30 hover:text-lin/60 uppercase font-light transition-colors duration-200"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
            >
              ← Businessplan
            </a>
            <form action={logout}>
              <button
                type="submit"
                className="font-sans text-lin/20 hover:text-lin/40 uppercase font-light transition-colors duration-200"
                style={{ fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Uitloggen
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "50vh", paddingTop: "52px", background: "#2C2A25" }}>
        <div className="font-sans text-lin/30 uppercase font-light mb-8 flex items-center gap-3" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="5.5" width="11" height="7" rx="0.5" stroke="rgba(242,237,230,0.3)" strokeWidth="0.6"/>
            <path d="M2.5 5.5V4C2.5 2.34315 4.06701 1 6 1C7.93299 1 9.5 2.34315 9.5 4V5.5" stroke="rgba(242,237,230,0.3)" strokeWidth="0.6"/>
            <circle cx="6" cy="8.75" r="1" fill="rgba(242,237,230,0.3)"/>
          </svg>
          Vertrouwelijk · Investeerders
        </div>
        <h1 className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(38px, 7vw, 80px)", letterSpacing: "0.06em", lineHeight: 1 }}>
          Financieel Plan
        </h1>
        <div className="w-px bg-lin/20 my-6" style={{ height: "32px" }} />
        <p className="font-sans text-lin/40 uppercase font-light" style={{ fontSize: "10px", letterSpacing: "0.35em" }}>
          NORDE Wellness Recovery Club · 2025-2028
        </p>
        <div className="mt-10 flex gap-10 font-sans text-lin/20 uppercase font-light" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
          <span>Scenario A - Hoofdscenario</span>
          <span>·</span>
          <span>Scenario B - Conservatief</span>
          <span>·</span>
          <span>Vergelijking</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SCENARIO A - HOOFDSCENARIO
          ═══════════════════════════════════════════════ */}

      <div className="bg-ijssel py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-lin/50 uppercase font-light" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>
            Scenario A - Hoofdscenario
          </p>
        </div>
      </div>

      {/* A: INVESTERING */}
      <section className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>A.1 - Investering · Hoofdscenario</SectionLabel>
          <h2 className="text-nacht mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Investering.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            De totale investering bestaat uit de aankoop van de grond (waardevast actief) en de operationele investering. Alleen de operationele investering moet worden terugverdiend uit de exploitatie.
          </p>

          {/* Pand */}
          <div className="mb-12">
            <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Aankoop grond</p>
            <div className="flex justify-between items-center py-4 border-b border-steen/20">
              <div>
                <span className="font-sans font-light" style={{ fontSize: "15px", color: "#5C5248" }}>Pand (koop) - eigen locatie</span>
                <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>Waardevast actief. Vermogensopbouw via hypotheekaflossing. Bij verkoop volledig te recupereren.</div>
              </div>
              <span className="font-serif font-light text-nacht ml-8 shrink-0" style={{ fontSize: "18px" }}>€550.000 - €750.000</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Thermale voorzieningen & installaties</p>
              {[
                { post: "Pinewood Sauna", bedrag: "€18.000 - €28.000", note: "Custom grenenhout bouw, 8-12 personen, 90°C" },
                { post: "Steam Dome", bedrag: "€22.000 - €35.000", note: "Unieke stoomboog, aromatherapie-systeem, 4-6 personen" },
                { post: "Cold Plunge", bedrag: "€15.000 - €25.000", note: "Koelunit + bassin, constante 8°C" },
                { post: "Magnesium jacuzzi", bedrag: "€22.000 - €35.000", note: "Buiten, 8-10 personen, magnesiumchloride systeem, 38°C" },
                { post: "Buitenzwembad (30m², zoutwater)", bedrag: "€40.000 - €62.000", note: "Warmtepomp, bassin, zoutwaterinstallatie (elektrolyse), filtratie & isolatie" },
                { post: "Zonnepanelen + zonnecollectoren", bedrag: "€18.000 - €28.000", note: "Op café-dak · zonnecollectoren voor warm water, panelen voor stroom" },
                { post: "Thermaal leidingwerk", bedrag: "€15.000 - €22.000", note: "Verbinding alle units, circulatiesysteem" },
                { post: "Filtratiesystemen", bedrag: "€12.000 - €18.000", note: "Waterbehandeling jacuzzi, cold plunge, zwembad" },
                { post: "Stoom & verwarming", bedrag: "€10.000 - €15.000", note: "Stoomgenerator dome, verwarmingsinstallatie" },
                { post: "Ventilatie sauna & dome", bedrag: "€8.000 - €12.000", note: "Thermisch veilige luchtbehandeling" },
                { post: "Legionellapreventie", bedrag: "€5.000 - €8.000", note: "Wettelijk verplicht, watertemperatuurbewaking" },
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
                { post: "Massageruimtes (2×)", bedrag: "€12.000 - €18.000", note: "Akoestische afwerking, sfeerverlichting, massagetafels" },
                { post: "Kleedkamers & douches", bedrag: "€18.000 - €25.000", note: "Luxe afwerking, lockers, gescheiden per geslacht" },
                { post: "Aanleg wellness tuin", bedrag: "€30.000 - €50.000", note: "Paden, beplanting, privacy-erfafscheiding, drainage" },
                { post: "Fire circle & buitenmeubilair", bedrag: "€8.000 - €12.000", note: "Vuurschaal, teakhouten loungestoelen, dekking" },
                { post: "Buitenverlichting", bedrag: "€5.000 - €8.000", note: "Sfeerverlichting tuin, paden en thermale units" },
                { post: "Café-paviljoen - aanleg & bar", bedrag: "€160.000 - €200.000", note: "Half open paviljoen, groendak, ronde vrijstaande haard, bar & keuken · 20-30 personen" },
                { post: "Café - meubilair & styling", bedrag: "€25.000", note: "Tafels, stoelen, verlichting, interieurafwerking" },
                { post: "Receptie & overig interieur", bedrag: "€8.000 - €12.000", note: "Ontvangstbalie, wachtruimte, bewegwijzering" },
                { post: "Elektra (uitbreiding)", bedrag: "€8.000 - €12.000", note: "Zware groepen thermale installaties, verdeler" },
              ].map((r) => (
                <div key={r.post} className="py-3 border-b border-steen/10">
                  <div className="flex justify-between">
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: "#5C5248" }}>{r.post}</span>
                    <span className="font-sans font-light shrink-0 ml-4" style={{ fontSize: "13px", color: "#2C2A25" }}>{r.bedrag}</span>
                  </div>
                  <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>{r.note}</div>
                </div>
              ))}
              <div className="mt-8">
                <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Overige opstartkosten</p>
                {[
                  { post: "Marketing & branding (pre-opening)", bedrag: "€15.000 - €25.000", note: "Huisstijl, website, openingscampagne, waitlist" },
                  { post: "IT & reserveringssysteem", bedrag: "€5.000 - €10.000", note: "Online booking, kassa, QR-toegang" },
                  { post: "Werkkapitaal (3 maanden)", bedrag: "€80.000 - €120.000", note: "Buffer voor jaar 1 opbouwfase" },
                  { post: "Vergunningen & juridisch", bedrag: "€5.000 - €10.000", note: "Horecavergunning, bestemmingsplan, notaris" },
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
          </div>

          <div className="grid md:grid-cols-3 gap-[1px]" style={{ background: "rgba(242,237,230,0.08)" }}>
            {[
              { label: "Aankoop grond", amount: "€550.000 - €750.000", sub: "Waardevast actief, buiten exploitatie-rendement" },
              { label: "Operationele investering", amount: "€580.000 - €775.000", sub: "Verbouwing, installaties, inrichting, opstart" },
              { label: "Onvoorzien (10%) + totaal", amount: "€1.200.000 - €1.600.000", sub: "All-in investering inclusief 10% buffer", total: true },
            ].map((c) => (
              <div key={c.label} className="bg-nacht p-10" style={{ borderTop: c.total ? "2px solid #D4A878" : "none" }}>
                <div className="font-sans font-light uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.3em", color: c.total ? "#D4A878" : "rgba(242,237,230,0.45)" }}>{c.label}</div>
                <div className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(20px, 2.4vw, 28px)", letterSpacing: "0.01em", lineHeight: 1.2 }}>{c.amount}</div>
                <div className="font-sans font-light mt-4 leading-relaxed" style={{ fontSize: "12px", color: "rgba(242,237,230,0.5)" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A: EXPLOITATIE */}
      <section className="bg-lin py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>A.2 - Exploitatie · Hoofdscenario</SectionLabel>
          <h2 className="text-nacht mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Exploitatie.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            NORDE werkt met tijdslots van 3 uur - geen hele-dag-toegang. Weekdagen open vanaf 12:00 (3 slots), weekenden vanaf 09:00 (4 slots).
          </p>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Maandelijkse vaste kosten</p>
              {[
                { post: "Hypotheeklasten grond", bedrag: "€3.000 - €4.200", note: "4,5% rente, 25 jaar looptijd" },
                { post: "Personeel (5 FTE)", bedrag: "€25.000", note: "Receptie, hosts, thermaal beheer, reiniging - vaste bezetting" },
                { post: "Energie - sauna & steam dome", bedrag: "€900 - €1.400", note: "Hoog stroomverbruik, continue opwarming" },
                { post: "Energie - water & pompen", bedrag: "€600 - €1.000", note: "Filtratie, verwarming jacuzzi & cold plunge" },
                { post: "Energie - verwarmd zwembad (30m²)", bedrag: "€700 - €1.000", note: "Warmtepomp (COP 3,5) + circulatiepompen · wintermaanden tot €1.000/mnd" },
                { post: "Energie - algemeen", bedrag: "€500 - €900", note: "Verlichting, ventilatie, receptie" },
                { post: "Massageproducten & linnen", bedrag: "€600 - €1.000", note: "Oliën, handdoeken per sessie" },
                { post: "Inkoop café", bedrag: "€900 - €1.500", note: "Smoothies, bouillon, thee, lichte snacks (~35% marge)" },
                { post: "Marketing & social media", bedrag: "€1.000 - €2.000", note: "Google Ads lokaal, Instagram content" },
                { post: "Verzekeringen", bedrag: "€400 - €600", note: "Bedrijfs-, aansprakelijkheids-, opstalverzekering" },
                { post: "Administratie & boekhouding", bedrag: "€300 - €600", note: "Extern accountantsbureau" },
                { post: "Onderhoud thermale installaties", bedrag: "€500 - €800", note: "Waterchemie, filters, periodieke keuring" },
                { post: "Schoonmaak", bedrag: "€300 - €500", note: "Dagelijks - kleedkamers, ruimtes, sauna" },
                { post: "Software & reserveringen", bedrag: "€200 - €400", note: "Boekingsplatform, kassa, nieuwsbrief" },
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
                <span className="font-serif font-light text-warm" style={{ fontSize: "18px" }}>€35.000 - €41.000</span>
              </div>
              <div className="flex justify-between py-3" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                <span className="font-sans font-light text-nacht" style={{ fontSize: "14px" }}>Break-even omzet</span>
                <span className="font-sans font-light text-warm" style={{ fontSize: "14px" }}>~€38.000 / maand</span>
              </div>
            </div>

            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Capaciteitsmodel (3-uurs tijdslots)</p>
              <div className="space-y-0 mb-10">
                {[
                  { slot: "Slot 1 - 09:00-12:00 (weekend)", weekdag: "-", weekend: "10-16" },
                  { slot: "Slot 2 - 12:00-15:00", weekdag: "8-15", weekend: "16-21" },
                  { slot: "Slot 3 - 15:00-18:00", weekdag: "12-20", weekend: "18-25" },
                  { slot: "Slot 4 - 18:00-21:00", weekdag: "15-22", weekend: "20-25" },
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
              </div>

              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Bezoekersprognose per jaar</p>
              <div className="space-y-0">
                {[
                  { jaar: "Jaar 1 - Opbouw", weekdag: "~38/dag (10%)", weekend: "~65/dag (26%)", totaal: "~500 gasten/mnd", note: "Mond-tot-mond, waitlist-conversie, lokale pers.", color: "#C8BAA8" },
                  { jaar: "Jaar 2 - Groei", weekdag: "~55/dag (14%)", weekend: "~175/dag (70%)", totaal: "~1.200 gasten/mnd", note: "Vaste klantenbasis, abonnementen, weekenden volgeboekt.", color: "#A07040" },
                  { jaar: "Jaar 3 - Stabiel", weekdag: "~70/dag (18%)", weekend: "~220/dag (88%)", totaal: "~1.600 gasten/mnd", note: "Bekende naam in Groningen. Corporate en abonnementen groeien.", color: "#1C2E40" },
                ].map((j) => (
                  <div key={j.jaar} className="py-5" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-serif font-light text-nacht" style={{ fontSize: "17px", letterSpacing: "0.03em" }}>{j.jaar}</span>
                      <span className="font-sans font-light" style={{ fontSize: "13px", color: j.color }}>{j.totaal}</span>
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

      {/* A: OMZETMODEL */}
      <section className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>A.3 - Omzetmodel · Hoofdscenario</SectionLabel>
          <h2 className="text-lin mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Inkomsten per stroom.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "rgba(242,237,230,0.4)", maxWidth: "600px" }}>
            Vier onafhankelijke inkomstenstromen. Entree is de basis; massages, café en events verhogen de gemiddelde besteding per bezoeker significant.
          </p>

          <div className="mb-16">
            <p className="font-sans font-light uppercase text-lin/30 mb-8" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Totale omzetprognose per jaar</p>
            <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "rgba(242,237,230,0.06)" }}>
              {[
                { jaar: "Jaar 1", sub: "Opbouwfase · 500 gasten/mnd gem.", entree: "€22.500", massage: "€3.555", cafe: "€5.500", events: "€1.500", abo: "€0", totaal: "€33.055", kosten: "€38.000", winst: "-€4.945", toelichting: "Jaar 1 verlieslatend. Werkkapitaalbuffer dekt dit. Break-even bij ~850 gasten/mnd.", winstColor: "#8C7F6E" },
                { jaar: "Jaar 2", sub: "Groei · 1.200 gasten/mnd gem.", entree: "€54.000", massage: "€8.690", cafe: "€13.200", events: "€3.000", abo: "€4.800", totaal: "€83.690", kosten: "€38.000", winst: "+€45.690", toelichting: "Sterke groei. Abonnementen en events actief. Break-even ruimschoots gepasseerd.", winstColor: "#A07040" },
                { jaar: "Jaar 3", sub: "Stabiel · 1.600 gasten/mnd gem.", entree: "€72.000", massage: "€12.640", cafe: "€17.600", events: "€4.500", abo: "€12.800", totaal: "€119.540", kosten: "€40.000", winst: "+€79.540", toelichting: "Nettoprofit ~€80k/mnd. Operationele investering grotendeels terugverdiend in jaar 3-4.", winstColor: "#A07040" },
              ].map((j) => (
                <div key={j.jaar} className="p-8" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="font-sans font-light uppercase text-lin/20 mb-1" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>{j.sub}</div>
                  <div className="font-serif text-lin font-light mb-6" style={{ fontSize: "24px", letterSpacing: "0.08em" }}>{j.jaar}</div>
                  {[
                    { label: "Entree (€45 p.p.)", val: j.entree },
                    { label: "Massage (€79 p.s.)", val: j.massage },
                    { label: "Café (~€11 p.p.)", val: j.cafe },
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
                    <span className="font-sans font-light text-lin/40" style={{ fontSize: "12px" }}>-{j.kosten}</span>
                  </div>
                  <div className="flex justify-between pt-2 pb-4" style={{ borderBottom: "0.5px solid rgba(242,237,230,0.1)" }}>
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: j.winstColor }}>Netto resultaat</span>
                    <span className="font-serif font-light" style={{ fontSize: "16px", color: j.winstColor }}>{j.winst}</span>
                  </div>
                  <p className="font-sans font-light mt-4 leading-relaxed" style={{ fontSize: "11px", color: "rgba(242,237,230,0.25)" }}>{j.toelichting}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terugverdientijd A */}
          <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "rgba(242,237,230,0.06)" }}>
            <div className="p-8" style={{ background: "rgba(242,237,230,0.04)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Operationele investering</div>
              <div className="font-serif text-lin font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>€580.000 - €775.000</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Excl. grond - terug te verdienen uit exploitatie</div>
            </div>
            <div className="p-8" style={{ background: "rgba(242,237,230,0.04)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Cumulatief netto jaar 1-3</div>
              <div className="font-serif text-warm-licht font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>~€490.000 - €960.000</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Jaar 1 (-€60k), jaar 2 (+€548k), jaar 3 (+€954k cumulatief).</div>
            </div>
            <div className="p-8" style={{ background: "rgba(200,186,168,0.08)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Terugverdientijd</div>
              <div className="font-serif text-warm-licht font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>2 - 3 jaar</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Operationele investering. Pand (waardevast) blijft volledig in eigendom.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SCENARIO B - CONSERVATIEF
          ═══════════════════════════════════════════════ */}

      <div className="bg-eiken py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-lin/50 uppercase font-light" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>
            Scenario B - Conservatief · Stress-test van de investering
          </p>
        </div>
      </div>

      <div className="bg-eiken py-6 px-6" style={{ borderTop: "0.5px solid rgba(242,237,230,0.08)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-sans font-light leading-relaxed" style={{ fontSize: "13px", color: "rgba(242,237,230,0.45)", maxWidth: "700px" }}>
            Lage bezoekersprognoses, soberdere investeringen en een kleinere personeelsbezetting die meegroeit met de omzet. De duurzaamheidspijlers en de grond blijven ongewijzigd.
          </p>
        </div>
      </div>

      {/* B: INVESTERING */}
      <section className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>B.1 - Investering · Conservatief</SectionLabel>
          <h2 className="text-nacht mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Investering - conservatief.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            Dezelfde voorzieningen, eenvoudiger uitgevoerd. Standaard units in plaats van maatwerk. Soberder café. De thermale kernervaring blijft volledig intact.
          </p>

          {/* Pand */}
          <div className="mb-12">
            <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Aankoop grond</p>
            <div className="flex justify-between items-center py-4 border-b border-steen/20">
              <div>
                <span className="font-sans font-light" style={{ fontSize: "15px", color: "#5C5248" }}>Pand (koop) - eigen locatie</span>
                <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>Ongewijzigd t.o.v. hoofdscenario. Waardevast actief, buiten exploitatierendement.</div>
              </div>
              <span className="font-serif font-light text-nacht ml-8 shrink-0" style={{ fontSize: "18px" }}>€550.000 - €750.000</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Thermale voorzieningen - standaard uitvoering</p>
              {[
                { post: "Pinewood Sauna", bedrag: "€12.000 - €18.000", note: "Standaard kit sauna, grenenhout - minder maatwerk" },
                { post: "Steam Dome", bedrag: "€15.000 - €22.000", note: "Kleinere stoomboog, basisprogrammering" },
                { post: "Cold Plunge", bedrag: "€8.000 - €12.000", note: "Stockunit koelbassin, 8°C" },
                { post: "Magnesium jacuzzi", bedrag: "€14.000 - €22.000", note: "Standaard model buiten, magnesiumchloride systeem, 8-10 personen" },
                { post: "Buitenzwembad (30m², zoutwater)", bedrag: "€28.000 - €45.000", note: "Basis warmtepomp, prefab bassin, eenvoudige zoutwaterinstallatie" },
                { post: "Zonnepanelen + zonnecollectoren", bedrag: "€12.000 - €18.000", note: "Op café-dak · basis installatie" },
                { post: "Thermaal leidingwerk", bedrag: "€8.000 - €12.000", note: "Verbinding alle units, circulatiesysteem" },
                { post: "Filtratiesystemen", bedrag: "€6.000 - €10.000", note: "Waterbehandeling - functioneel, niet premium" },
                { post: "Stoom & verwarming", bedrag: "€5.000 - €8.000", note: "Stoomgenerator, verwarmingsinstallatie" },
                { post: "Ventilatie sauna & dome", bedrag: "€4.000 - €7.000", note: "Thermisch veilige basisluchtbehandeling" },
                { post: "Legionellapreventie", bedrag: "€3.000 - €5.000", note: "Wettelijk verplicht" },
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
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Ruimtes, tuin & café - sober</p>
              {[
                { post: "Massageruimtes (2×)", bedrag: "€5.000 - €8.000", note: "Eenvoudige afwerking, basismassagetafels" },
                { post: "Kleedkamers & douches", bedrag: "€10.000 - €15.000", note: "Functioneel, minder luxe afwerking" },
                { post: "Aanleg wellness tuin", bedrag: "€10.000 - €20.000", note: "Eenvoudige beplanting, grind, basisdrainage" },
                { post: "Fire circle & buitenmeubilair", bedrag: "€3.000 - €5.000", note: "Eenvoudige vuurschaal, robuust buitenmeubilair" },
                { post: "Buitenverlichting", bedrag: "€2.000 - €4.000", note: "Functionele sfeerverlichting" },
                { post: "Café-paviljoen - aanleg & bar", bedrag: "€60.000 - €90.000", note: "Eenvoudig half open paviljoen, basisgroendak, kleine haard, bar" },
                { post: "Café - meubilair & styling", bedrag: "€10.000 - €15.000", note: "Eenvoudig maar passend bij de stijl" },
                { post: "Receptie & overig interieur", bedrag: "€4.000 - €7.000", note: "Balie, bewegwijzering, wachtruimte" },
                { post: "Elektra (uitbreiding)", bedrag: "€5.000 - €8.000", note: "Zware groepen thermale installaties" },
              ].map((r) => (
                <div key={r.post} className="py-3 border-b border-steen/10">
                  <div className="flex justify-between">
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: "#5C5248" }}>{r.post}</span>
                    <span className="font-sans font-light shrink-0 ml-4" style={{ fontSize: "13px", color: "#2C2A25" }}>{r.bedrag}</span>
                  </div>
                  <div className="font-sans font-light mt-0.5" style={{ fontSize: "11px", color: "#C8BAA8" }}>{r.note}</div>
                </div>
              ))}
              <div className="mt-8">
                <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Overige opstartkosten</p>
                {[
                  { post: "Marketing & branding (pre-opening)", bedrag: "€8.000 - €12.000", note: "Basishuisstijl, website, organische social media" },
                  { post: "IT & reserveringssysteem", bedrag: "€2.500 - €5.000", note: "Standaard boekingsplatform, kassa" },
                  { post: "Werkkapitaal (4 maanden)", bedrag: "€60.000 - €80.000", note: "Buffer voor jaar 1 verliesperiode" },
                  { post: "Vergunningen & juridisch", bedrag: "€4.000 - €8.000", note: "Horecavergunning, bestemmingsplan, notaris" },
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
          </div>

          <div className="grid md:grid-cols-3 gap-[1px]" style={{ background: "rgba(242,237,230,0.08)" }}>
            {[
              { label: "Aankoop grond", amount: "€550.000 - €750.000", sub: "Waardevast actief, buiten exploitatie-rendement" },
              { label: "Operationele investering", amount: "€265.000 - €420.000", sub: "Verbouwing, installaties, inrichting, opstart" },
              { label: "Onvoorzien (10%) + totaal", amount: "€840.000 - €1.215.000", sub: "All-in investering inclusief 10% buffer", total: true },
            ].map((c) => (
              <div key={c.label} className="bg-nacht p-10" style={{ borderTop: c.total ? "2px solid #D4A878" : "none" }}>
                <div className="font-sans font-light uppercase mb-6" style={{ fontSize: "10px", letterSpacing: "0.3em", color: c.total ? "#D4A878" : "rgba(242,237,230,0.45)" }}>{c.label}</div>
                <div className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(20px, 2.4vw, 28px)", letterSpacing: "0.01em", lineHeight: 1.2 }}>{c.amount}</div>
                <div className="font-sans font-light mt-4 leading-relaxed" style={{ fontSize: "12px", color: "rgba(242,237,230,0.5)" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B: EXPLOITATIE */}
      <section className="bg-lin py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>B.2 - Exploitatie · Conservatief</SectionLabel>
          <h2 className="text-nacht mb-4" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Exploitatie - conservatief.
          </h2>
          <p className="font-sans font-light mb-16 leading-relaxed" style={{ fontSize: "15px", color: "#5C5248", maxWidth: "600px" }}>
            Personeel groeit mee met de omzet - start met 2-3 FTE, schaal op zodra de bezetting het toelaat.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Maandelijkse vaste kosten</p>
              {[
                { post: "Hypotheeklasten grond", bedrag: "€3.000 - €4.200", note: "4,5% rente, 25 jaar looptijd" },
                { post: "Personeel (2-3 FTE start)", bedrag: "€8.000 - €12.000", note: "Receptie + host + reiniging - groeit naar 4 FTE in jaar 2" },
                { post: "Energie - sauna & steam dome", bedrag: "€700 - €1.000", note: "Hoog stroomverbruik, continue opwarming" },
                { post: "Energie - water & pompen", bedrag: "€400 - €700", note: "Filtratie, verwarming jacuzzi & cold plunge" },
                { post: "Energie - verwarmd zwembad (30m²)", bedrag: "€600 - €1.000", note: "Warmtepomp + circulatie · wintermaanden tot €1.000/mnd" },
                { post: "Energie - algemeen", bedrag: "€300 - €500", note: "Verlichting, ventilatie, receptie" },
                { post: "Massageproducten & linnen", bedrag: "€200 - €400", note: "Lagere volume bij conservatieve bezetting" },
                { post: "Inkoop café", bedrag: "€300 - €600", note: "Koffie, thee, bouillon, kleine snacks (~35% marge)" },
                { post: "Marketing & social media", bedrag: "€500 - €1.000", note: "Organisch focus, Google Ads beperkt" },
                { post: "Verzekeringen", bedrag: "€400 - €600", note: "Bedrijfs-, aansprakelijkheids-, opstalverzekering" },
                { post: "Administratie & boekhouding", bedrag: "€300 - €500", note: "Extern accountantsbureau" },
                { post: "Onderhoud thermale installaties", bedrag: "€400 - €600", note: "Waterchemie, filters, periodieke keuring" },
                { post: "Schoonmaak", bedrag: "€200 - €400", note: "Deels door eigen personeel" },
                { post: "Software & reserveringen", bedrag: "€150 - €300", note: "Standaard boekingsplatform" },
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
                <span className="font-serif font-light text-warm" style={{ fontSize: "18px" }}>€15.750 - €22.800</span>
              </div>
              <div className="flex justify-between py-3" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                <span className="font-sans font-light text-nacht" style={{ fontSize: "14px" }}>Break-even omzet</span>
                <span className="font-sans font-light text-warm" style={{ fontSize: "14px" }}>~€19.000 / maand</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-sans font-light" style={{ fontSize: "13px", color: "#8C7F6E" }}>Break-even bezoekers</span>
                <span className="font-sans font-light" style={{ fontSize: "13px", color: "#8C7F6E" }}>~380 gasten/mnd</span>
              </div>
            </div>

            <div>
              <p className="font-sans font-light uppercase text-steen mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Bezoekersprognose per jaar - conservatief</p>
              <div className="space-y-0">
                {[
                  { jaar: "Jaar 1 - Opbouw", weekdag: "~5/dag (7% cap.)", weekend: "~15/dag (15% cap.)", totaal: "~200 gasten/mnd", note: "Trage start. Break-even nog niet bereikt. Buffer noodzakelijk.", color: "#C8BAA8" },
                  { jaar: "Jaar 2 - Stabiele groei", weekdag: "~13/dag (17% cap.)", weekend: "~34/dag (34% cap.)", totaal: "~550 gasten/mnd", note: "Vaste klantenkring vormt zich. Break-even bereikt rond maand 20.", color: "#A07040" },
                  { jaar: "Jaar 3 - Doorgroei", weekdag: "~20/dag (27% cap.)", weekend: "~53/dag (53% cap.)", totaal: "~850 gasten/mnd", note: "Bekende naam in Groningen. Weekenden goed bezet.", color: "#1C2E40" },
                ].map((j) => (
                  <div key={j.jaar} className="py-5" style={{ borderTop: "0.5px solid #C8BAA8" }}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-serif font-light text-nacht" style={{ fontSize: "17px", letterSpacing: "0.03em" }}>{j.jaar}</span>
                      <span className="font-sans font-light" style={{ fontSize: "13px", color: j.color }}>{j.totaal}</span>
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

      {/* B: OMZETMODEL */}
      <section className="bg-nacht py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel dark>B.3 - Omzetmodel · Conservatief</SectionLabel>
          <h2 className="text-lin mb-16" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Inkomsten per stroom.
          </h2>

          <div className="mb-16">
            <p className="font-sans font-light uppercase text-lin/30 mb-8" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Totale omzetprognose per jaar</p>
            <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "rgba(242,237,230,0.06)" }}>
              {[
                { jaar: "Jaar 1", sub: "Opbouwfase · 200 gasten/mnd gem.", entree: "€9.000", massage: "€1.580", cafe: "€1.200", events: "€300", abo: "€0", totaal: "€12.080", kosten: "€18.000", winst: "-€5.920", toelichting: "Verlieslatend. Buffer (€60k-€80k) dekt ~11 maanden. Personeel en marketing laag houden.", winstColor: "#8C7F6E" },
                { jaar: "Jaar 2", sub: "Groei · 550 gasten/mnd gem.", entree: "€24.750", massage: "€4.345", cafe: "€4.400", events: "€1.000", abo: "€3.200", totaal: "€37.695", kosten: "€20.000", winst: "+€17.695", toelichting: "Break-even bereikt rond maand 20. Positief resultaat bouwt reserve op.", winstColor: "#A07040" },
                { jaar: "Jaar 3", sub: "Stabiel · 850 gasten/mnd gem.", entree: "€38.250", massage: "€6.320", cafe: "€7.000", events: "€1.500", abo: "€6.400", totaal: "€59.470", kosten: "€22.000", winst: "+€37.470", toelichting: "Nettoprofit ~€37k/mnd. Operationele investering terugverdiend in jaar 3.", winstColor: "#A07040" },
              ].map((j) => (
                <div key={j.jaar} className="p-8" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="font-sans font-light uppercase text-lin/20 mb-1" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>{j.sub}</div>
                  <div className="font-serif text-lin font-light mb-6" style={{ fontSize: "24px", letterSpacing: "0.08em" }}>{j.jaar}</div>
                  {[
                    { label: "Entree (€45 p.p.)", val: j.entree },
                    { label: "Massage (€79 p.s.)", val: j.massage },
                    { label: "Café (~€11 p.p.)", val: j.cafe },
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
                    <span className="font-sans font-light text-lin/40" style={{ fontSize: "12px" }}>-{j.kosten}</span>
                  </div>
                  <div className="flex justify-between pt-2 pb-4" style={{ borderBottom: "0.5px solid rgba(242,237,230,0.1)" }}>
                    <span className="font-sans font-light" style={{ fontSize: "13px", color: j.winstColor }}>Netto resultaat</span>
                    <span className="font-serif font-light" style={{ fontSize: "16px", color: j.winstColor }}>{j.winst}</span>
                  </div>
                  <p className="font-sans font-light mt-4 leading-relaxed" style={{ fontSize: "11px", color: "rgba(242,237,230,0.25)" }}>{j.toelichting}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terugverdientijd B */}
          <div className="grid md:grid-cols-3 gap-[2px]" style={{ background: "rgba(242,237,230,0.06)" }}>
            <div className="p-8" style={{ background: "rgba(242,237,230,0.04)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Operationele investering</div>
              <div className="font-serif text-lin font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>€265.000 - €420.000</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Excl. grond - terug te verdienen uit exploitatie</div>
            </div>
            <div className="p-8" style={{ background: "rgba(242,237,230,0.04)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Cumulatief netto jaar 1-3</div>
              <div className="font-serif text-warm-licht font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>~€420.000 - €590.000</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Jaar 1 (-€71k), jaar 2 (+€212k), jaar 3 (+€449k cumulatief).</div>
            </div>
            <div className="p-8" style={{ background: "rgba(200,186,168,0.08)" }}>
              <div className="font-sans font-light uppercase text-lin/20 mb-4" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>Terugverdientijd</div>
              <div className="font-serif text-warm-licht font-light" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>2 - 4 jaar</div>
              <div className="font-sans font-light text-lin/30 mt-2" style={{ fontSize: "12px" }}>Operationele investering. Pand blijft in eigendom en telt niet mee als verliespost.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SCENARIO-VERGELIJKING
          ═══════════════════════════════════════════════ */}
      <section className="bg-wit py-24 px-6" style={{ borderTop: "0.5px solid #C8BAA8" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Scenario-vergelijking</SectionLabel>
          <h2 className="text-nacht mb-12" style={{ fontFamily: "var(--font-nord)", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.03em", lineHeight: 1.15 }}>
            Hoofdscenario vs. conservatief.
          </h2>
          <div className="grid md:grid-cols-2 gap-[2px]" style={{ background: "#C8BAA8" }}>
            {[
              {
                label: "Scenario A - Hoofdscenario",
                items: [
                  { k: "Gasten jaar 1", v: "~500/mnd" },
                  { k: "Gasten jaar 2", v: "~1.200/mnd" },
                  { k: "Gasten jaar 3", v: "~1.600/mnd" },
                  { k: "Personeel", v: "5 FTE · €25.000/mnd" },
                  { k: "Maandkosten", v: "€35.000 - €41.000" },
                  { k: "Break-even omzet", v: "~€38.000/mnd (~850 gasten)" },
                  { k: "Investering (operationeel)", v: "€580.000 - €775.000" },
                  { k: "All-in investering", v: "€1.200.000 - €1.600.000" },
                  { k: "Terugverdientijd", v: "2 - 3 jaar" },
                  { k: "Netto resultaat jaar 3", v: "+€79.540/mnd" },
                ],
                bg: "#1C2E40",
              },
              {
                label: "Scenario B - Conservatief",
                items: [
                  { k: "Gasten jaar 1", v: "~200/mnd" },
                  { k: "Gasten jaar 2", v: "~550/mnd" },
                  { k: "Gasten jaar 3", v: "~850/mnd" },
                  { k: "Personeel", v: "2-3 FTE · €8.000-€12.000/mnd" },
                  { k: "Maandkosten", v: "€15.750 - €22.800" },
                  { k: "Break-even omzet", v: "~€19.000/mnd (~380 gasten)" },
                  { k: "Investering (operationeel)", v: "€265.000 - €420.000" },
                  { k: "All-in investering", v: "€840.000 - €1.215.000" },
                  { k: "Terugverdientijd", v: "2 - 4 jaar" },
                  { k: "Netto resultaat jaar 3", v: "+€37.470/mnd" },
                ],
                bg: "#3D2B1A",
              },
            ].map((s) => (
              <div key={s.label} className="p-10" style={{ background: s.bg }}>
                <div className="font-sans font-light uppercase text-lin/30 mb-6" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>{s.label}</div>
                <div className="space-y-0">
                  {s.items.map((item) => (
                    <div key={item.k} className="flex justify-between py-3" style={{ borderBottom: "0.5px solid rgba(242,237,230,0.07)" }}>
                      <span className="font-sans font-light" style={{ fontSize: "13px", color: "rgba(242,237,230,0.4)" }}>{item.k}</span>
                      <span className="font-sans font-light" style={{ fontSize: "13px", color: "rgba(242,237,230,0.7)" }}>{item.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6" style={{ background: "#F5F1EB", border: "0.5px solid #C8BAA8" }}>
            <p className="font-sans font-light leading-relaxed" style={{ fontSize: "13px", color: "#5C5248" }}>
              <span className="font-medium text-nacht">Conclusie.</span> Zelfs in het conservatieve scenario - met de helft van de bezoekers en veel lagere kosten - is NORDE financieel haalbaar. De lage break-even (~380 gasten/mnd, 15% van de maximumcapaciteit) biedt een stevige veiligheidsmarge. De operationele investering is in beide scenario&apos;s terugverdiend binnen 4 jaar. De grond is in beide gevallen een waardevast actief.
            </p>
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
            Vertrouwelijk document · Uitsluitend voor investeerders · © 2025 NORDE Wellness Recovery Club
          </p>
        </div>
      </footer>

    </div>
  );
}
