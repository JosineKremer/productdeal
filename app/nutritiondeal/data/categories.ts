// Nutritiondeal-categorieën (supplementen & sportvoeding).

export interface Category {
  label: string;
  count: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { label: "Vitamines", count: "138", slug: "vitamines" },
  { label: "Mineralen", count: "611", slug: "mineralen" },
  { label: "Kruiden & planten", count: "31", slug: "kruiden-planten" },
  { label: "Probiotica", count: "13", slug: "probiotica" },
  { label: "Melatonine", count: "2", slug: "melatonine" },
  { label: "Collageen", count: "66", slug: "collageen" },
  { label: "Visolie & omega", count: "67", slug: "visolie-omega" },
  { label: "Huid, haar, nagel", count: "96", slug: "huid-haar-nagel" },
  { label: "CBD", count: "106", slug: "cbd" },
  { label: "Aminozuren", count: "3", slug: "aminozuren" },
  { label: "Sportvoeding", count: "600", slug: "sportvoeding" },
  { label: "Antioxidanten", count: "6", slug: "antioxidanten" },
  { label: "Ayurvedische supplementen", count: "103", slug: "ayurvedische-supplementen" },
  { label: "Enzymen", count: "1", slug: "enzymen" },
  { label: "Glucosamine", count: "16", slug: "glucosamine" },
  { label: "MSM preparations", count: "7", slug: "msm" },
];

const SLUG: Record<string, string> = Object.fromEntries(CATEGORIES.map((c) => [c.label, c.slug]));

// Echte categoriefoto's (public/nutritiondeal/categories/*.jpg)
export const catImage = (label: string) => `/nutritiondeal/categories/${SLUG[label] ?? "vitamines"}.jpg`;
