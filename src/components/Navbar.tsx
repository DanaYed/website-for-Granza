"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import GranzaLogo from "./GranzaLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <nav className="container-xl flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <GranzaLogo
            variant="mark"
            className={`w-8 h-8 transition-colors duration-300 ${
              scrolled ? "text-bark-700" : "text-bark-700"
            }`}
          />
          <span
            className={`font-serif text-xl font-semibold tracking-[0.18em] transition-colors duration-300 ${
              scrolled ? "text-bark-700" : "text-bark-700"
            }`}
          >
            GRANZA
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 pb-0.5 border-b ${
                  pathname === href
                    ? "text-olive-700 border-olive-500"
                    : "text-bark-500 border-transparent hover:text-bark-700 hover:border-bark-400"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex btn-primary text-xs py-2.5 px-6"
        >
          Shop Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-bark-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-cream-50 border-b border-cream-200`}
      >
        <ul className="container-xl py-6 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block text-sm font-medium tracking-widest uppercase py-2 transition-colors ${
                  pathname === href ? "text-olive-700" : "text-bark-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-6 w-full justify-center">
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
