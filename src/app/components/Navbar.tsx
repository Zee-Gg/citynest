"use client";

import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import Button from "./ui/Button";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Rooms", href: "#rooms" },
  { label: "Locations", href: "#locations" },
  { label: "Amenities", href: "#amenities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-md border-b border-gray-200'
        : 'bg-white/80 backdrop-blur-md border-b border-white/20'
    }`}>
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="#" className="group">
          <div className="text-lg md:text-xl font-bold tracking-tight text-black uppercase font-sans">
            City <span className="text-[#fdae3c]">Nest</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-sans text-sm tracking-wide font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-600 hover:text-black font-semibold text-sm transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fdae3c] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#fdae3c] text-black text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-[#f9a020] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              WhatsApp Us
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-black transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 font-medium text-sm tracking-wide hover:text-[#fdae3c] transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-[#fdae3c] text-black text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-[#f9a020] transition-colors">
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}