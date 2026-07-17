import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutritiondeal — voeding, supplementen & sportvoeding",
  description:
    "Nutritiondeal — de online marktplaats voor sportvoeding, vitamines, supplementen, superfoods en gezonde voeding. Jouw dagelijkse dosis vitaliteit.",
};

export default function NutritiondealLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
