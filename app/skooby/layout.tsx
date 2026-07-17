import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skooby — alles voor je huisdier",
  description:
    "Skooby — dierenbenodigdheden voor honden, katten, knaagdieren, vissen, vogels en paarden. Blij dier, blij mens.",
  icons: { icon: "/skooby-icon.svg" },
};

export default function SkoobyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
