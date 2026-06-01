"use client";
import { useState } from "react";

type DataPoint = { date: string; price: number };
type Props = { data: DataPoint[]; currentPrice: number };

const PERIODS = ["1m", "3m", "6m", "Alles"] as const;

export default function PriceHistoryChart({ data, currentPrice }: Props) {
  const [period, setPeriod] = useState<string>("6m");

  const periodMap: Record<string, number> = { "1m": 1, "3m": 3, "6m": 6, "Alles": data.length };
  const filtered = data.slice(-periodMap[period]);

  const prices = filtered.map((d) => d.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;

  const lowest = Math.min(...prices);
  const highest = Math.max(...prices);

  // SVG path
  const W = 600;
  const H = 120;
  const pad = 10;
  const points = filtered.map((d, i) => {
    const x = pad + (i / Math.max(filtered.length - 1, 1)) * (W - pad * 2);
    const y = H - pad - ((d.price - min) / range) * (H - pad * 2);
    return `${x},${y}`;
  });
  const polyline = points.join(" ");
  const area = `${pad},${H - pad} ${polyline} ${W - pad},${H - pad}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Period selector */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 text-sm text-gray-500">
          <span>Laagste: <strong style={{ color: "#1b693d" }}>€ {lowest.toFixed(2).replace(".", ",")}</strong></span>
          <span>Hoogste: <strong style={{ color: "#173441" }}>€ {highest.toFixed(2).replace(".", ",")}</strong></span>
        </div>
        <div className="flex gap-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="px-3 py-1 rounded-lg text-xs font-semibold transition-all"
              style={
                period === p
                  ? { backgroundColor: "#173441", color: "white" }
                  : { backgroundColor: "#f1f5f9", color: "#64748b" }
              }
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-28" preserveAspectRatio="none">
          <defs>
            <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00ca41" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00ca41" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={area} fill="url(#priceGrad)" />
          <polyline points={polyline} fill="none" stroke="#00ca41" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          {/* Current price dot */}
          {filtered.length > 0 && (() => {
            const last = points[points.length - 1].split(",");
            return <circle cx={last[0]} cy={last[1]} r="5" fill="#00ca41" stroke="white" strokeWidth="2" />;
          })()}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-1 px-2">
          {filtered.map((d, i) => (
            (i === 0 || i === Math.floor(filtered.length / 2) || i === filtered.length - 1) && (
              <span key={i} className="text-xs text-gray-400">{d.date}</span>
            )
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-3">Huidige prijs: <strong style={{ color: "#173441" }}>€ {currentPrice.toFixed(2).replace(".", ",")}</strong></p>
    </div>
  );
}
