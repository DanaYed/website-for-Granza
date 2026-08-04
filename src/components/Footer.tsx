import Link from "next/link";
import GranzaLogo from "./GranzaLogo";
import { Instagram, Facebook, Mail } from "lucide-react";

const footerLinks = {
  Navigate: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bark-700 text-cream-200">
      {/* Main footer */}
      <div className="container-xl py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <GranzaLogo variant="full" className="text-cream-100 mb-6 inline-flex flex-col items-start" />
          <p className="text-sm text-cream-300 leading-relaxed max-w-xs">
            Premium organic extra virgin olive oil, hand-harvested from the
            terraced mountain groves of Greece.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-cream-400/30 flex items-center justify-center text-cream-300 hover:text-cream-50 hover:border-cream-200 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-cream-400/30 flex items-center justify-center text-cream-300 hover:text-cream-50 hover:border-cream-200 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="mailto:hello@granzashop.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-cream-400/30 flex items-center justify-center text-cream-300 hover:text-cream-50 hover:border-cream-200 transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-xs font-medium tracking-widest uppercase text-cream-400 mb-5">
              {heading}
            </h4>
            <ul className="space-y-3">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream-300 hover:text-cream-50 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream-400/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-400">
            &copy; {new Date().getFullYear()} Granza. All rights reserved.
          </p>
          <p className="text-xs text-cream-500">
            Product of Greece &middot; EI40692 &middot; Certified Organic GR-BIO-01
          </p>
        </div>
      </div>
    </footer>
  );
}
