"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const STEPS = [
  { id: 1, label: "Adresgegevens" },
  { id: 2, label: "Verzendmethode" },
  { id: 3, label: "Betaling" },
  { id: 4, label: "Overzicht" },
];

const ORDER_ITEMS = [
  { title: "Nike Air Zoom Pegasus 40 Hardloopschoenen", brand: "Nike", seller: "SportDirect", price: 94.99, qty: 1, img: "/cat-schoenen.jpg", size: "42", color: "Zwart", shipping: 4.95 },
  { title: "Adidas Tiro 23 Trainingsshirt Heren", brand: "Adidas", seller: "Decathlon", price: 29.99, qty: 2, img: "/cat-shirt.jpg", size: "L", color: "Zwart / Wit", shipping: 0 },
  { title: "Umbro Heren Polyester Sweatshirt", brand: "Umbro", seller: "Umbro Store", price: 39.29, qty: 1, img: "/cat-hoodie.jpg", size: "XXL", color: "Zwart", shipping: 2.95 },
];

const SHIPPING_METHODS = [
  { id: "standard", label: "Standaard - Verzending", price: 0, days: "3-5 werkdagen" },
  { id: "express", label: "Express - Verzending", price: 6.95, days: "1-2 werkdagen" },
];

const PAYMENT_METHODS = [
  { id: "ideal", label: "iDEAL", sublabel: "Betaal veilig via je bank", logo: "https://www.google.com/s2/favicons?sz=64&domain=ideal.nl" },
  { id: "paypal", label: "PayPal", sublabel: "Betaal met je PayPal account", logo: "https://www.google.com/s2/favicons?sz=64&domain=paypal.com" },
  { id: "googlepay", label: "Google Pay", sublabel: "Snel betalen met Google", logo: "https://www.google.com/s2/favicons?sz=64&domain=pay.google.com" },
  { id: "applepay", label: "Apple Pay", sublabel: "Betalen met Touch of Face ID", logo: "https://www.google.com/s2/favicons?sz=64&domain=apple.com" },
  { id: "creditcard", label: "Creditcard", sublabel: "Visa, Mastercard, American Express", logo: "https://www.google.com/s2/favicons?sz=64&domain=visa.com" },
];

const subtotal = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
const totalShipping = ORDER_ITEMS.reduce((s, i) => s + i.shipping, 0);
const servicekosten = 0.99;

export default function AfrekenenPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [newsletter, setNewsletter] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [sameAddress, setSameAddress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("ideal");
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const [form, setForm] = useState({
    email: "", voornaam: "", achternaam: "", bedrijf: "",
    adres: "", huisnr: "", plaats: "", provincie: "",
    postcode: "", land: "Nederland", telefoon: "",
    fAdres: "", fHuisnr: "", fPlaats: "", fPostcode: "", fLand: "Nederland",
  });

  const extraShipping = shippingMethod === "express" ? 6.95 : 0;
  const total = subtotal + totalShipping + servicekosten + extraShipping;

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const inputClass = "w-full border-2 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none transition-colors focus:border-orange-300 text-gray-700";
  const inputStyle = { borderColor: "#e2e8f0" };
  const labelClass = "block text-xs font-bold text-gray-500 mb-1.5";

  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f5f7f9" }}>

      {/* ── Minimale header ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/sdeal-v2">
            <Image src="/sportdeal-logo.svg" alt="Sportdeal" width={140} height={37} className="h-8 w-auto" priority />
          </Link>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Beveiligde verbinding
          </div>
        </div>
      </header>

      {/* ── Stappenbalk ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex">
            {STEPS.map((s, i) => {
              const isActive = s.id === step;
              const isDone = s.id < step;
              return (
                <button
                  key={s.id}
                  onClick={() => s.id < step && setStep(s.id as 1 | 2 | 3 | 4)}
                  disabled={s.id > step}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold relative transition-colors"
                  style={{
                    color: isActive ? "#8c1222" : isDone ? "#173441" : "#9ca3af",
                    borderBottom: isActive ? "2px solid #8c1222" : "2px solid transparent",
                    cursor: isDone ? "pointer" : "default",
                  }}
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
                    style={{
                      backgroundColor: isActive ? "#8c1222" : isDone ? "#173441" : "#e5e7eb",
                      color: isActive || isDone ? "white" : "#9ca3af",
                    }}>
                    {isDone ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : s.id}
                  </div>
                  <span className="hidden sm:block">{s.label}</span>
                  {i < STEPS.length - 1 && (
                    <svg className="absolute right-0 w-4 h-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">

          {/* ── Linkerkolom ── */}
          <div>

            {/* STAP 1: Adresgegevens */}
            {step === 1 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50" style={{ backgroundColor: "#173441" }}>
                  <h2 className="text-base font-black text-white">Adresgegevens</h2>
                </div>
                <div className="p-6 space-y-5">

                  {/* E-mail */}
                  <div>
                    <label className={labelClass}>E-mailadres <span className="text-red-400">*</span></label>
                    <input type="email" value={form.email} onChange={set("email")} placeholder="jouw@email.nl"
                      className={inputClass} style={inputStyle} />
                    <p className="text-xs text-gray-400 mt-1.5">Je kunt een account aanmaken na het afrekenen.</p>
                  </div>

                  <div className="border-t border-gray-50" />

                  {/* Naam */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Voornaam <span className="text-red-400">*</span></label>
                      <input type="text" value={form.voornaam} onChange={set("voornaam")} placeholder="Voornaam"
                        className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelClass}>Achternaam <span className="text-red-400">*</span></label>
                      <input type="text" value={form.achternaam} onChange={set("achternaam")} placeholder="Achternaam"
                        className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  {/* Bedrijf */}
                  <div>
                    <label className={labelClass}>Bedrijfsnaam <span className="text-gray-300 font-normal">(optioneel)</span></label>
                    <input type="text" value={form.bedrijf} onChange={set("bedrijf")} placeholder="Bedrijfsnaam"
                      className={inputClass} style={inputStyle} />
                  </div>

                  {/* Adres */}
                  <div className="grid grid-cols-[1fr_100px] gap-4">
                    <div>
                      <label className={labelClass}>Adres <span className="text-red-400">*</span></label>
                      <input type="text" value={form.adres} onChange={set("adres")} placeholder="Straatnaam"
                        className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelClass}>Huis nr. <span className="text-red-400">*</span></label>
                      <input type="text" value={form.huisnr} onChange={set("huisnr")} placeholder="Nr."
                        className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  {/* Postcode + Plaats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Postcode <span className="text-red-400">*</span></label>
                      <input type="text" value={form.postcode} onChange={set("postcode")} placeholder="1234 AB"
                        className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className={labelClass}>Plaats <span className="text-red-400">*</span></label>
                      <input type="text" value={form.plaats} onChange={set("plaats")} placeholder="Stad"
                        className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  {/* Land */}
                  <div>
                    <label className={labelClass}>Land <span className="text-red-400">*</span></label>
                    <select value={form.land} onChange={set("land")} className={inputClass} style={inputStyle}>
                      {["Nederland", "België", "Duitsland", "Frankrijk", "Luxemburg"].map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  {/* Telefoon */}
                  <div>
                    <label className={labelClass}>Telefoonnummer <span className="text-red-400">*</span></label>
                    <input type="tel" value={form.telefoon} onChange={set("telefoon")} placeholder="06 12345678"
                      className={inputClass} style={inputStyle} />
                  </div>

                  {/* Zelfde adres */}
                  <div className="border-t border-gray-50 pt-4 space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div onClick={() => setSameAddress((v) => !v)}
                        className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0"
                        style={{ backgroundColor: sameAddress ? "#8c1222" : "white", borderColor: sameAddress ? "#8c1222" : "#d1d5db" }}>
                        {sameAddress && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">Factuur- en verzendadres zijn hetzelfde</span>
                    </label>

                    {/* Factuuradres velden — alleen zichtbaar als niet aangevinkt */}
                    {!sameAddress && (
                      <div className="space-y-4 pl-8 border-l-2 border-orange-100">
                        <p className="text-xs font-black uppercase tracking-wide" style={{ color: "#173441" }}>Factuuradres</p>

                        <div className="grid grid-cols-[1fr_100px] gap-4">
                          <div>
                            <label className={labelClass}>Adres <span className="text-red-400">*</span></label>
                            <input type="text" value={form.fAdres} onChange={set("fAdres")} placeholder="Straatnaam"
                              className={inputClass} style={inputStyle} />
                          </div>
                          <div>
                            <label className={labelClass}>Huis nr. <span className="text-red-400">*</span></label>
                            <input type="text" value={form.fHuisnr} onChange={set("fHuisnr")} placeholder="Nr."
                              className={inputClass} style={inputStyle} />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Postcode <span className="text-red-400">*</span></label>
                            <input type="text" value={form.fPostcode} onChange={set("fPostcode")} placeholder="1234 AB"
                              className={inputClass} style={inputStyle} />
                          </div>
                          <div>
                            <label className={labelClass}>Plaats <span className="text-red-400">*</span></label>
                            <input type="text" value={form.fPlaats} onChange={set("fPlaats")} placeholder="Stad"
                              className={inputClass} style={inputStyle} />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Land <span className="text-red-400">*</span></label>
                          <select value={form.fLand} onChange={set("fLand")} className={inputClass} style={inputStyle}>
                            {["Nederland", "België", "Duitsland", "Frankrijk", "Luxemburg"].map((l) => (
                              <option key={l}>{l}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link href="/sdeal-v2/winkelwagen" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Terug naar winkelwagen
                    </Link>
                    <button onClick={() => setStep(2)}
                      className="px-8 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                      Volgende
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STAP 2: Aflevering */}
            {step === 2 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50" style={{ backgroundColor: "#173441" }}>
                  <h2 className="text-base font-black text-white">Verzendmethode</h2>
                </div>
                <div className="p-6 space-y-6">

                  {/* Verzendmethodes */}
                  <div>
                    <h3 className="text-sm font-black mb-3" style={{ color: "#173441" }}>Kies je verzendmethode</h3>
                    <div className="space-y-2">
                      {SHIPPING_METHODS.map((method) => (
                        <label key={method.id}
                          className="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"
                          style={{ borderColor: shippingMethod === method.id ? "#8c1222" : "#e2e8f0", backgroundColor: shippingMethod === method.id ? "rgba(140,18,34,0.04)" : "white" }}>
                          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                            style={{ borderColor: shippingMethod === method.id ? "#8c1222" : "#d1d5db" }}>
                            {shippingMethod === method.id && (
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8c1222" }} />
                            )}
                          </div>
                          <input type="radio" name="shipping" value={method.id} checked={shippingMethod === method.id}
                            onChange={() => setShippingMethod(method.id)} className="sr-only" />
                          <div className="flex-1">
                            <span className="text-sm font-semibold" style={{ color: "#173441" }}>{method.label}</span>
                            <span className="text-xs text-gray-400 ml-2">{method.days}</span>
                          </div>
                          <span className="text-sm font-bold" style={{ color: method.price === 0 ? "#22c55e" : "#173441" }}>
                            {method.price === 0 ? "Gratis" : `€ ${method.price.toFixed(2).replace(".", ",")}`}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Terug
                    </button>
                    <button onClick={() => setStep(3)}
                      className="px-8 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                      Volgende
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STAP 3: Betaling */}
            {step === 3 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50" style={{ backgroundColor: "#173441" }}>
                  <h2 className="text-base font-black text-white">Betaling</h2>
                </div>
                <div className="p-6 space-y-6">

                  {/* Betaalmethode */}
                  <div>
                    <h3 className="text-sm font-black mb-3" style={{ color: "#173441" }}>Betaalmethode</h3>
                    <div className="space-y-2">
                      {PAYMENT_METHODS.map((method) => (
                        <label key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"
                          style={{ borderColor: paymentMethod === method.id ? "#8c1222" : "#e2e8f0", backgroundColor: paymentMethod === method.id ? "rgba(140,18,34,0.04)" : "white" }}>
                          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                            style={{ borderColor: paymentMethod === method.id ? "#8c1222" : "#d1d5db" }}>
                            {paymentMethod === method.id && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8c1222" }} />}
                          </div>
                          <div className="w-12 h-8 rounded-lg border border-gray-100 bg-white flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                            <img
                              src={method.logo}
                              alt={method.label}
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold" style={{ color: "#173441" }}>{method.label}</p>
                            <p className="text-xs text-gray-400">{method.sublabel}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Kortingscode */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <button onClick={() => setCouponOpen((o) => !o)}
                      className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors">
                      <span className="text-sm font-semibold" style={{ color: "#173441" }}>Kortingscode toepassen</span>
                      <svg className={`w-4 h-4 text-gray-400 transition-transform ${couponOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {couponOpen && (
                      <div className="px-4 pb-4 border-t border-gray-50">
                        <div className="flex gap-2 mt-3">
                          <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                            placeholder="Voer je code in"
                            className="flex-1 border-2 rounded-xl px-3 py-2.5 text-sm focus:outline-none transition-colors"
                            style={{ borderColor: "#e2e8f0" }} />
                          <button className="px-4 py-2.5 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity"
                            style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                            Toepassen
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button onClick={() => setStep(2)} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Terug
                    </button>
                    <button onClick={() => setStep(4)}
                      className="px-8 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                      Volgende
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STAP 4: Overzicht */}
            {step === 4 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50" style={{ backgroundColor: "#173441" }}>
                  <h2 className="text-base font-black text-white">Overzicht</h2>
                </div>
                <div className="p-6 space-y-6">

                  {/* Productenlijst */}
                  <div>
                    <div className="hidden sm:grid grid-cols-[1fr_70px_60px_80px] gap-4 text-xs font-bold uppercase tracking-wide text-gray-300 mb-3 px-1">
                      <span>Producten</span>
                      <span className="text-center">Prijs</span>
                      <span className="text-center">Aantal</span>
                      <span className="text-right">Subtotaal</span>
                    </div>
                    <div className="space-y-3">
                      {ORDER_ITEMS.map((item, i) => (
                        <div key={i} className="flex sm:grid sm:grid-cols-[1fr_70px_60px_80px] gap-4 items-center p-3 rounded-xl" style={{ backgroundColor: "#f9fafb" }}>
                          <div className="flex items-center gap-3">
                            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-xs font-bold" style={{ color: "#8c1222" }}>{item.brand}</p>
                              <p className="text-xs font-semibold leading-snug" style={{ color: "#173441" }}>{item.title}</p>
                              <p className="text-[10px] text-gray-400">Maat: {item.size} · Kleur: {item.color}</p>
                              <p className="text-[10px] text-gray-400">Verkocht door: <span className="font-semibold">{item.seller}</span></p>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-center hidden sm:block" style={{ color: "#173441" }}>€ {item.price.toFixed(2).replace(".", ",")}</div>
                          <div className="text-sm text-center hidden sm:block text-gray-500">{item.qty}</div>
                          <div className="text-sm font-black text-right hidden sm:block" style={{ color: "#173441" }}>€ {(item.price * item.qty).toFixed(2).replace(".", ",")}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Kostenoverzicht */}
                  <div className="space-y-2 border-t border-gray-50 pt-4">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Winkelwagen subtotaal</span>
                      <span>€ {subtotal.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Servicekosten</span>
                      <span>€ {servicekosten.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Aflevering — {shippingMethod === "express" ? "Express - Verzending" : "Standaard - Verzending"}</span>
                      <span>{(totalShipping + extraShipping) === 0 ? "Gratis" : `€ ${(totalShipping + extraShipping).toFixed(2).replace(".", ",")}`}</span>
                    </div>
                    <div className="flex justify-between font-black text-base pt-2 border-t border-gray-100" style={{ color: "#173441" }}>
                      <span>Totaal</span>
                      <span>€ {total.toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>

                  {/* Leverdatum */}
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
                    </svg>
                    <span className="text-gray-500">Leverdatum gehele bestelling:</span>
                    <span className="font-bold text-green-600">komende donderdag</span>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Door op <strong className="text-gray-600">nu kopen</strong> te klikken, ga je akkoord met onze{" "}
                    <Link href="#" className="underline" style={{ color: "#8c1222" }}>algemene voorwaarden</Link>.
                  </p>

                  {/* Nieuwsbrief */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div onClick={() => setNewsletter((v) => !v)}
                      className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0"
                      style={{ backgroundColor: newsletter ? "#8c1222" : "white", borderColor: newsletter ? "#8c1222" : "#d1d5db" }}>
                      {newsletter && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">Ontvang onze nieuwsbrief</span>
                  </label>

                  <div className="flex items-center justify-between pt-2">
                    <button onClick={() => setStep(3)} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Terug
                    </button>
                    <button className="px-10 py-3.5 rounded-xl text-white font-black text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Nu kopen
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── Rechterkolom: Overzicht sidebar ── */}
          <div className="space-y-3 lg:sticky lg:top-28">

            {/* Totaal */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-50">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Overzicht</h3>
              </div>
              <div className="px-5 py-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Totaal</span>
                <span className="text-xl font-black" style={{ color: "#173441" }}>€ {total.toFixed(2).replace(".", ",")}</span>
              </div>
              {step === 4 && (
                <div className="px-5 pb-4">
                  <button className="w-full py-3.5 rounded-xl text-white font-black text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    style={{ background: "linear-gradient(135deg, #8c1222, #210000)" }}>
                    Nu kopen
                  </button>
                </div>
              )}
            </div>

            {/* Adresgegevens (na stap 1) */}
            {step > 1 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Adresgegevens</h3>
                  <button onClick={() => setStep(1)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3 text-xs text-gray-500 space-y-0.5">
                  <p className="font-semibold text-gray-700">{form.voornaam || "Y."} {form.achternaam || "Solinger"}</p>
                  <p>{form.adres || "Osloweg"} {form.huisnr || "110"}</p>
                  <p>{form.postcode || "9723 BX"} {form.plaats || "Groningen"}</p>
                  <p>{form.land}</p>
                  <p>{form.telefoon || "0611265437"}</p>
                </div>
              </div>
            )}

            {/* Verzenden naar (na stap 2) */}
            {step > 2 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Verzenden naar</h3>
                  <button onClick={() => setStep(2)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3 text-xs text-gray-500">
                  <p>{sameAddress ? "Factuur- en verzendadres zijn hetzelfde" : "Afwijkend verzendadres"}</p>
                </div>
                <div className="px-5 py-3 border-t border-gray-50 flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Verzendmethode</h3>
                  <button onClick={() => setStep(2)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="px-5 pb-3 text-xs text-gray-500">
                  <p>{SHIPPING_METHODS.find(m => m.id === shippingMethod)?.label} —{" "}
                    {shippingMethod === "standard" ? "€ 0,00" : "€ 6,95"}
                  </p>
                </div>
              </div>
            )}

            {/* Betaalmethode (na stap 3) */}
            {step > 3 && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Betaalmethode</h3>
                  <button onClick={() => setStep(3)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 rounded border border-gray-100 bg-white flex items-center justify-center overflow-hidden p-0.5">
                      <img src={PAYMENT_METHODS.find(m => m.id === paymentMethod)?.logo} alt="" className="max-w-full max-h-full object-contain" />
                    </div>
                    <span>{PAYMENT_METHODS.find(m => m.id === paymentMethod)?.label}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-2">
              {[
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", text: "Veilig afrekenen (SSL)" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", text: "Minimaal 14 dagen retour" },
                { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", text: "Lokale klantenservice" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#8c1222" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.icon} />
                  </svg>
                  <span className="text-xs text-gray-500">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
