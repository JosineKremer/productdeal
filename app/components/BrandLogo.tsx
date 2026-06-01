"use client";
import { useState, useEffect, useRef } from "react";

const BRAND_COLORS: Record<string, string> = {
  Adidas: "#000000",
  Nike: "#111111",
  Puma: "#000000",
  Bosch: "#e2000f",
  Makita: "#00829a",
  Disney: "#1d3f8a",
  Regatta: "#003087",
  DeWalt: "#febd17",
};

const BRAND_TEXT_COLORS: Record<string, string> = {
  DeWalt: "#000000",
};

export default function BrandLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  const bg = BRAND_COLORS[name] ?? "#173441";
  const textColor = BRAND_TEXT_COLORS[name] ?? "#ffffff";

  if (failed) {
    return (
      <div
        className="w-16 h-10 rounded-lg flex items-center justify-center font-extrabold text-sm px-3"
        style={{ backgroundColor: bg, color: textColor }}
      >
        {name}
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={logo}
      alt={name}
      className="max-w-full max-h-full object-contain"
      onError={() => setFailed(true)}
    />
  );
}
