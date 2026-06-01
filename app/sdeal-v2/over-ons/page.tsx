"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SportdealHeader from "../components/SportdealHeader";

const NAV_CATS = [
  { label: "Fitness & Gym", href: "#" }, { label: "Fietsen", href: "#" },
  { label: "Outdoor & Kamperen", href: "#" }, { label: "Watersport", href: "#" },
  { label: "Sportkleding", href: "#" }, { label: "Vechtsporten", href: "#" },
  { label: "Racketsporten", href: "#" }, { label: "Teamsport", href: "#" },
  { label: "Merken", href: "#" },
];

const TABS = ["Over ons", "Contact", "Veelgestelde vragen", "Vacatures"];

const FAQ_CATS = [
  {
    cat: "Bestellen",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    items: [
      { q: "Hoe bestel ik op Sportdeal?", a: "Zoek het gewenste product, kies de juiste maat en kleur, en voeg het toe aan je winkelwagen. Ga daarna naar afrekenen en volg de stappen voor adres, verzending en betaling." },
      { q: "Kan ik een bestelling wijzigen of annuleren?", a: "Bestellingen kunnen worden gewijzigd of geannuleerd zolang ze nog niet zijn verzonden. Neem hiervoor snel contact op met onze klantenservice via klantenservice@sportdeal.com." },
      { q: "Zijn alle producten op voorraad?", a: "De voorraadstatus wordt per product weergegeven. Als een product 'op voorraad' toont, is het beschikbaar voor directe verzending." },
    ],
  },
  {
    cat: "Betaling",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    items: [
      { q: "Welke betaalmethoden accepteren jullie?", a: "Wij accepteren iDEAL, PayPal, Visa, Mastercard, Google Pay en Apple Pay. Alle betalingen verlopen via een beveiligde SSL-verbinding." },
      { q: "Is betalen op Sportdeal veilig?", a: "Ja, alle transacties verlopen via een beveiligde SSL-omgeving. Wij slaan geen betaalgegevens op onze servers op." },
      { q: "Wanneer wordt mijn betaling afgeschreven?", a: "Bij iDEAL direct, bij creditcard op het moment van bestelling. Je ontvangt altijd een bevestigingsmail na een succesvolle betaling." },
    ],
  },
  {
    cat: "Levering",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7",
    items: [
      { q: "Hoe lang duurt de levering?", a: "Standaard levering duurt 3-5 werkdagen. Bij express levering ontvang je je pakket binnen 1-2 werkdagen. De exacte leverdatum zie je tijdens het afrekenen." },
      { q: "Wat zijn de verzendkosten?", a: "Verzendkosten variëren per verkopende partner en worden duidelijk getoond bij het afrekenen. Sommige partners bieden gratis verzending aan." },
      { q: "Kan ik mijn bestelling volgen?", a: "Ja, je ontvangt een track & trace code per e-mail zodra je pakket is verzonden. Hiermee kun je de status van je pakket volgen." },
    ],
  },
  {
    cat: "Retourneren",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    items: [
      { q: "Hoe retourneer ik een product?", a: "Je hebt minimaal 14 dagen de tijd om een product te retourneren. Neem contact op met klantenservice@sportdeal.com voor een retourlabel en instructies." },
      { q: "Wanneer ontvang ik mijn geld terug?", a: "Na ontvangst en controle van het retour wordt het bedrag binnen 5-10 werkdagen teruggestort op je rekening." },
      { q: "Wat als mijn product beschadigd aankomt?", a: "Neem direct contact op met onze klantenservice met foto's van de schade. Wij lossen dit snel en gratis voor je op." },
    ],
  },
];

const VACATURES = [
  { title: "Frontend Developer", type: "Fulltime", location: "Groningen / Remote", desc: "Je werkt mee aan de doorontwikkeling van ons platform in React/Next.js." },
  { title: "Customer Service Medewerker", type: "Parttime", location: "Groningen", desc: "Je helpt onze klanten met vragen over bestellingen, leveringen en retouren." },
  { title: "Online Marketeer", type: "Fulltime", location: "Groningen / Hybride", desc: "Je bent verantwoordelijk voor SEO, SEA en sociale media campagnes." },
  { title: "Stage: UX/UI Design", type: "Stage", location: "Groningen", desc: "Je werkt mee aan het ontwerpen van nieuwe features voor ons platform." },
];

export default function OverOnsPage() {
  const [activeTab, setActiveTab] = useState("Over ons");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ naam: "", email: "", onderwerp: "", bericht: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f5f7f9" }}>
      <SportdealHeader />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#173441,#0d2530)", minHeight: "220px" }}>
        <div className="absolute inset-0 opacity-5">
          <img src="/categories/camping-hangmat.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-black text-white mb-3">Sportdeal</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Jouw nummer één sportplatform voor sport, outdoor en meer - van 300+ webshops op één plek.</p>
        </div>
      </div>

      {/* ── Tabnavigatie ── */}
      <div className="bg-white border-b border-gray-100 sticky top-[116px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all flex-shrink-0"
              style={{
                borderBottomColor: activeTab === tab ? "#e2603f" : "transparent",
                color: activeTab === tab ? "#e2603f" : "#6b7280",
              }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10 pb-20">

        {/* ── OVER ONS ── */}
        {activeTab === "Over ons" && (
          <div className="space-y-8">

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "1,4 mln+", label: "Producten" },
                { value: "300+", label: "Webshops" },
                { value: "10.000+", label: "Merken" },
                { value: "7", label: "Landen" },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                  <div className="text-3xl font-black mb-1" style={{ color: "#e2603f" }}>{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Over Sportdeal */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h2 className="text-xl font-black mb-4" style={{ color: "#173441" }}>Over Sportdeal</h2>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <p>Sportdeal is een snel groeiend online platform met grootse ambities. Wij zijn een verkoopplatform waar partners zich aansluiten met hun producten. Je gaat dus een overeenkomst aan met één van onze verkopende partners.</p>
                  <p>Wij willen jouw nummer één sportplatform worden. Sportdeal wil je voorzien van een ruime en unieke collectie sportproducten: elektronica, fietsen, sportkleding en eigenlijk alles wat je maar kunt bedenken. In ons assortiment vind je zowel bekende als nieuwe opkomende merken.</p>
                  <p>Onze producten zijn scherp geprijsd en worden thuis bezorgd. Bestellen op Sportdeal is bovendien veilig - reken je bestelling af in een beveiligde SSL-omgeving en betaal gemakkelijk met verschillende betaalmethodes.</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Veilig winkelen", desc: "Alle betalingen verlopen via een beveiligde SSL-verbinding." },
                  { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7", title: "Snelle levering", desc: "Kies uit standaard of express levering - voor 22:00 besteld, snel in huis." },
                  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Minimaal 14 dagen retour", desc: "Niet tevreden? Retourneer eenvoudig binnen de herroepingstermijn." },
                  { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", title: "Lokale klantenservice", desc: "Nederlandstalig team klaarstaat om je te helpen met al je vragen." },
                ].map(v => (
                  <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(226,96,63,0.1)" }}>
                      <svg className="w-5 h-5" fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={v.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-0.5" style={{ color: "#173441" }}>{v.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post- en bezoekadres */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-black mb-6" style={{ color: "#173441" }}>Post- en bezoekadres</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="font-black text-base" style={{ color: "#173441" }}>Sportdeal / SDeal BV</p>
                  <p>Osloweg 110</p>
                  <p>9723 BX Groningen</p>
                  <div className="pt-2 space-y-1.5">
                    {[
                      { label: "Telefoon", value: "+31 (0) 850 250 182" },
                      { label: "E-mail", value: "klantenservice@sportdeal.com" },
                      { label: "BTW-nummer", value: "NL 860508468B01" },
                      { label: "KVK-nummer", value: "76103080" },
                    ].map(r => (
                      <div key={r.label} className="flex gap-3">
                        <span className="text-gray-400 w-28 flex-shrink-0">{r.label}:</span>
                        <span className="font-semibold" style={{ color: "#173441" }}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-gray-50">
                    <p className="font-bold text-xs text-gray-500 mb-1">Stichting Cliëntgelden SDeal</p>
                    <p className="text-xs text-gray-400">KVK-nummer: 78305802</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── CONTACT ── */}
        {activeTab === "Contact" && (
          <div className="grid lg:grid-cols-[1fr_340px] gap-8">

            {/* Formulier */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-black mb-1" style={{ color: "#173441" }}>Stuur ons een bericht</h2>
              <p className="text-sm text-gray-400 mb-6">We reageren doorgaans binnen één werkdag.</p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(34,197,94,0.1)" }}>
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{ color: "#173441" }}>Bericht verzonden!</h3>
                  <p className="text-sm text-gray-400">We nemen zo snel mogelijk contact met je op.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold" style={{ color: "#e2603f" }}>Nieuw bericht sturen</button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5">Naam <span className="text-red-400">*</span></label>
                      <input type="text" value={contactForm.naam} onChange={e => setContactForm(f => ({ ...f, naam: e.target.value }))}
                        placeholder="Je naam"
                        className="w-full border-2 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-orange-300 transition-colors text-gray-700"
                        style={{ borderColor: "#e2e8f0" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5">E-mailadres <span className="text-red-400">*</span></label>
                      <input type="email" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="jouw@email.nl"
                        className="w-full border-2 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-orange-300 transition-colors text-gray-700"
                        style={{ borderColor: "#e2e8f0" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5">Onderwerp <span className="text-red-400">*</span></label>
                    <select value={contactForm.onderwerp} onChange={e => setContactForm(f => ({ ...f, onderwerp: e.target.value }))}
                      className="w-full border-2 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-orange-300 transition-colors text-gray-700"
                      style={{ borderColor: "#e2e8f0" }}>
                      <option value="">Kies een onderwerp</option>
                      {["Vraag over mijn bestelling", "Retour aanvragen", "Product niet ontvangen", "Factuur opvragen", "Samenwerking / partner worden", "Anders"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5">Bericht <span className="text-red-400">*</span></label>
                    <textarea value={contactForm.bericht} onChange={e => setContactForm(f => ({ ...f, bericht: e.target.value }))}
                      placeholder="Schrijf hier je bericht..." rows={5}
                      className="w-full border-2 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-orange-300 transition-colors text-gray-700 resize-none"
                      style={{ borderColor: "#e2e8f0" }} />
                  </div>
                  <button onClick={() => setSent(true)}
                    className="w-full py-3.5 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                    Bericht versturen
                  </button>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", title: "Telefoon", value: "+31 (0) 850 250 182", sub: "Ma–Vr 09:00–17:30" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "E-mail", value: "klantenservice@sportdeal.com", sub: "Reactie binnen 1 werkdag" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", title: "Adres", value: "Osloweg 110", sub: "9723 BX Groningen" },
              ].map(c => (
                <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(226,96,63,0.1)" }}>
                    <svg className="w-5 h-5" fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{c.title}</p>
                    <p className="text-sm font-bold" style={{ color: "#173441" }}>{c.value}</p>
                    <p className="text-xs text-gray-400">{c.sub}</p>
                  </div>
                </div>
              ))}
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <p className="text-xs font-bold text-gray-400 mb-3">Volg ons</p>
                <div className="flex gap-3">
                  {[{ label: "Facebook", color: "#1877f2" }, { label: "Instagram", color: "#e1306c" }].map(s => (
                    <a key={s.label} href="#"
                      className="flex-1 py-2.5 rounded-xl text-white text-xs font-bold text-center transition-opacity hover:opacity-80"
                      style={{ backgroundColor: s.color }}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── FAQ ── */}
        {activeTab === "Veelgestelde vragen" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2" style={{ color: "#173441" }}>Veelgestelde vragen</h2>
              <p className="text-gray-400 text-sm">Vind snel een antwoord op je vraag</p>
            </div>
            {FAQ_CATS.map(cat => (
              <div key={cat.cat} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50 flex items-center gap-3" style={{ backgroundColor: "#fafafa" }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(226,96,63,0.1)" }}>
                    <svg className="w-4 h-4" fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm font-black" style={{ color: "#173441" }}>{cat.cat}</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {cat.items.map(item => {
                    const key = `${cat.cat}-${item.q}`;
                    return (
                      <div key={key}>
                        <button onClick={() => setOpenFaq(openFaq === key ? null : key)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                          <span className="text-sm font-semibold pr-4" style={{ color: "#173441" }}>{item.q}</span>
                          <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === key ? "rotate-180" : ""}`}
                            fill="none" stroke="#e2603f" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openFaq === key && (
                          <div className="px-6 pb-4">
                            <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Staat je vraag er niet bij?</p>
              <button onClick={() => setActiveTab("Contact")}
                className="px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                Neem contact op
              </button>
            </div>
          </div>
        )}

        {/* ── VACATURES ── */}
        {activeTab === "Vacatures" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2" style={{ color: "#173441" }}>Werken bij Sportdeal</h2>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">Wij zijn een snelgroeiend bedrijf en geregeld op zoek naar ervaren krachten en aankomende talenten.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {VACATURES.map(v => (
                <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-black" style={{ color: "#173441" }}>{v.title}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
                      style={{ backgroundColor: v.type === "Stage" ? "rgba(245,174,76,0.15)" : "rgba(226,96,63,0.1)", color: v.type === "Stage" ? "#b07d0a" : "#e2603f" }}>
                      {v.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {v.location}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{v.desc}</p>
                  <button className="w-full py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:bg-orange-50"
                    style={{ color: "#e2603f", borderColor: "rgba(226,96,63,0.3)" }}>
                    Bekijk vacature
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
              <h3 className="text-lg font-black mb-2" style={{ color: "#173441" }}>Geen passende vacature gevonden?</h3>
              <p className="text-sm text-gray-400 mb-5">Stuur een open sollicitatie en wie weet zien we je snel bij ons team!</p>
              <button className="px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#e2603f,#f5ae4c)" }}>
                Open sollicitatie sturen
              </button>
            </div>
          </div>
        )}

      </main>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#0d2530" }} className="text-white py-10 mt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-8">
            <div className="max-w-xs">
              <Image src="/sportdeal-logo.svg" alt="Sportdeal" width={140} height={37} className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm text-white/50 leading-relaxed">De betrouwbare sportconnectie. Vergelijk sportproducten van 300+ webshops.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {[
                { title: "Service", links: ["Contact", "Over ons", "FAQ", "Vacatures"] },
                { title: "Zakelijk", links: ["Pakketten", "Koppelingen", "Word Partner"] },
                { title: "Landen", links: ["Nederland", "België", "Duitsland"] },
              ].map(col => (
                <div key={col.title}>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#f5ae4c" }}>{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map(l => <li key={l}><Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</Link></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <span>© 2026 SDeal BV · All rights reserved</span>
            <div className="flex gap-5">
              <Link href="#">Algemene voorwaarden</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
