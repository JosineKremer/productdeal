import Link from "next/link";
import Logo from "./Logo";

const FOOTER_LINKS = {
  Service: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  Business: [
    { label: "Pricing", href: "/pricing" },
    { label: "Partners", href: "/partners" },
    { label: "Connections", href: "/connections" },
    { label: "Jobs", href: "/jobs" },
  ],
  Landen: [
    { label: "Nederland", href: "/" },
    { label: "België", href: "/be" },
    { label: "Duitsland", href: "/de" },
    { label: "Frankrijk", href: "/fr" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#173441" }} className="text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <Logo className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-60 leading-relaxed mb-4">
              Vergelijk producten van meer dan 1.000 webshops. Altijd de beste deal.
            </p>
            <div className="flex gap-3">
              {["linkedin", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-[#00ca41]"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fillOpacity="0" stroke="white" strokeWidth="1.5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm mb-4 opacity-90">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} SDeal BV · All rights reserved
          </p>
          <p className="text-xs opacity-40">
            More insight, better deals.
          </p>
        </div>
      </div>
    </footer>
  );
}
