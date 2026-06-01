"use client";
import { useState } from "react";
import Link from "next/link";

type Spec = { label: string; value: string };
type Store = {
  name: string;
  domain: string;
  price: string;
  shipping: string;
  deliveryDate: string;
  stock: number;
  onTime: number;
  seller: string;
  url: string;
  rating: number;
  reviews: number;
};

type Props = {
  description: string;
  specs: Spec[];
  stores: Store[];
};

const TABS = ["Vergelijk winkels", "Omschrijving", "Specificaties"] as const;

export default function ProductTabs({ description, specs, stores }: Props) {
  const [active, setActive] = useState<string>("Vergelijk winkels");

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">
      {/* Tab bar */}
      <div className="flex border-b border-gray-100">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="flex-1 py-3.5 text-sm font-semibold transition-all relative"
            style={{
              color: active === tab ? "#173441" : "#9ca3af",
              backgroundColor: active === tab ? "white" : "#f8fafc",
            }}
          >
            {tab}
            {active === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: "#00ca41" }} />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6">

        {/* Vergelijk winkels */}
        {active === "Vergelijk winkels" && (
          <div className="space-y-3">
            <p className="text-sm text-gray-500 mb-4">Prijzen worden dagelijks bijgewerkt.</p>
            {stores.map((store, i) => (
              <div
                key={store.name}
                className="rounded-2xl border transition-all hover:shadow-md"
                style={{ borderColor: i === 0 ? "#00ca41" : "#e2e8f0" }}
              >
                {i === 0 && (
                  <div className="px-5 pt-3 pb-0">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
                      Beste prijs
                    </span>
                  </div>
                )}
                <div className="px-5 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${store.domain}&sz=64`}
                        alt={store.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm" style={{ color: "#173441" }}>{store.name}</p>
                      <p className="text-xs text-gray-400">{store.shipping}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <p className="font-extrabold text-lg" style={{ color: "#173441" }}>{store.price}</p>
                      <a
                        href={store.url}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 flex-shrink-0"
                        style={{ backgroundColor: i === 0 ? "#00ca41" : "#173441" }}
                      >
                        Bekijk
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-x-5 gap-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#00ca41" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Voorraad: <strong className="text-gray-700">{store.stock}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#173441" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Levering: <strong className="text-gray-700">{store.deliveryDate}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#173441" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Verkoper: <strong className="text-gray-700">{store.seller}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#173441" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Op tijd: <strong className="text-gray-700">{store.onTime}%</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Omschrijving */}
        {active === "Omschrijving" && (
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        )}

        {/* Specificaties */}
        {active === "Specificaties" && (
          <div className="rounded-xl overflow-hidden border border-gray-100">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className="flex gap-4 px-4 py-3 text-sm"
                style={{ backgroundColor: i % 2 === 0 ? "#f8fafc" : "white" }}
              >
                <span className="w-36 flex-shrink-0 text-gray-400 font-medium">{spec.label}</span>
                <span style={{ color: "#173441" }} className="font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
