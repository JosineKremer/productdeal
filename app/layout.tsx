import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Productdeal – More insight, better deals",
  description: "Vergelijk producten van meer dan 1.000 webshops. Altijd de beste prijs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "#f5f7f9" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
