"use client";
import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProductImageGallery({ images, title }: Props) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="rounded-2xl flex flex-col items-center justify-center h-80 lg:h-full min-h-72" style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf6 100%)" }}>
        <div className="w-24 h-24 rounded-3xl flex items-center justify-center opacity-20" style={{ backgroundColor: "#173441" }}>
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs text-gray-400 mt-3">Productafbeelding volgt</p>
      </div>
    );
  }

  return (
    <>
      {/* Main image */}
      <div className="flex flex-col gap-3">
        <div
          className="relative rounded-2xl overflow-hidden bg-gray-50 cursor-zoom-in"
          style={{ aspectRatio: "1 / 1" }}
          onClick={() => setZoomed(true)}
        >
          <img
            src={images[active]}
            alt={`${title} - foto ${active + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Image counter */}
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
            {active + 1} / {images.length}
          </div>
          {/* Zoom hint */}
          <div className="absolute top-3 right-3 bg-white/80 rounded-full p-1.5 backdrop-blur-sm">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-6-3v6m-3-3h6" />
            </svg>
          </div>
          {/* Prev/next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-all"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-all"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all"
                style={{ borderColor: i === active ? "#00ca41" : "transparent" }}
              >
                <img src={src} alt={`${title} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setZoomed(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={images[active]}
            alt={title}
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActive(i); }}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ backgroundColor: i === active ? "#00ca41" : "rgba(255,255,255,0.4)" }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
