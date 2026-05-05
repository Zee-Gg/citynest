"use client";

import Link from "next/link";
import { JSX } from "react";

const quickLinks: string[] = [
  "Rooms",
  "Branches",
  "Amenities",
  "Contact",
];

const locationsList: string[] = [
  "Thokar Niaz Baig",
  "DHA",
  "Gulberg",
  "GT Road",
];

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full py-12 sm:py-16 px-4 sm:px-8 bg-gradient-to-br from-[#0f1c2c] to-[#162d42] border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-lg font-sans font-bold text-white uppercase tracking-widest">
            <span>City <span className="text-[#fdae3c]">Nest</span></span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Reliable hostel accommodation in Lahore with practical facilities and easy commute access.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-white font-bold mb-6 text-xs tracking-widest">QUICK LINKS</div>
          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-widest text-gray-400">
            {quickLinks.map((link) => (
              <Link
                key={link}
                href={
                  link === "Rooms"
                    ? "#rooms"
                    : link === "Branches"
                      ? "#locations"
                      : link === "Amenities"
                        ? "#amenities"
                        : "#contact"
                }
                className="hover:text-[#fdae3c] transition-colors w-fit"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <div className="text-white font-bold mb-6 text-xs tracking-widest">LOCATIONS</div>
          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-widest text-gray-400">
            {locationsList.map((l) => (
              <span key={l} className="transition-colors">{l}</span>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <div className="text-white font-bold mb-6 text-xs tracking-widest">FOLLOW US</div>
          <div className="flex gap-3">
            <Link
              href="https://wa.me/923008570956"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fdae3c] hover:text-black hover:border-[#fdae3c] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </Link>
            <Link
              href="tel:03008570956"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fdae3c] hover:text-black hover:border-[#fdae3c] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400">
          © 2026 City Nest Hostels Lahore.
        </p>
      </div>
    </footer>
  );
}