"use client";
import { useState } from "react";

type Spec = { label: string; value: string };

type Props = {
  description: string;
  specs: Spec[];
};

const TABS = ["Omschrijving", "Specificaties"] as const;

export default function ProductDetailTabs({ description, specs }: Props) {
  const [active, setActive] = useState<string>("Omschrijving");

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">
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

      <div className="p-6">
        {active === "Omschrijving" && (
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        )}
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
