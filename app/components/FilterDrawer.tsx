"use client";
import { useState } from "react";
import Link from "next/link";

type Subcategory = { name: string; count: number; href: string };
type Filters = Record<string, string[]>;

export default function FilterDrawer({
  subcategories,
  filters,
}: {
  subcategories: Subcategory[];
  filters: Filters;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger knop */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center gap-2 border rounded-xl px-3 py-2 text-sm bg-white font-medium"
        style={{ borderColor: "#e2e8f0", color: "#173441" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
        </svg>
        Filteren
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ${open ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "85vh", overflowY: "auto" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <h2 className="font-bold text-base" style={{ color: "#173441" }}>Filteren & subcategorieën</h2>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4 space-y-6">
          {/* Subcategorieën */}
          <div>
            <h3 className="font-bold text-sm mb-3" style={{ color: "#173441" }}>Subcategorieën</h3>
            <div className="flex flex-wrap gap-2">
              {subcategories.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-gray-200 hover:border-green-400 transition-colors"
                  style={{ color: "#173441" }}
                >
                  {sub.name}
                  <span className="text-xs text-gray-400">{sub.count.toLocaleString("nl-NL")}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Filters */}
          {Object.entries(filters).map(([filterName, options]) => (
            <div key={filterName}>
              <h3 className="font-bold text-sm mb-3" style={{ color: "#173441" }}>{filterName}</h3>
              <div className="space-y-2.5">
                {options.map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded cursor-pointer" style={{ accentColor: "#00ca41" }} />
                    <span className="text-sm text-gray-600">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Toepassen knop */}
          <button
            onClick={() => setOpen(false)}
            className="w-full py-3.5 rounded-2xl text-white font-bold text-sm"
            style={{ backgroundColor: "#173441" }}
          >
            Resultaten bekijken
          </button>
        </div>
      </div>
    </>
  );
}
