"use client";

import { useEffect, useRef } from "react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const STATS = [
  { value: "2", label: "Prime Locations" },
  { value: "50+", label: "Happy Residents" },
  { value: "3", label: "Room Types" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#0a0e1f] via-[#1a1f3a] to-[#0f1c2c]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Image */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMRYmKefnbNjPHId8mi032CpYvfIgqhrAA_UEZYENWAIk-yoXHkaQGTuL47rP0zk0FRjBwGjMwSCaJ5MP7fJBTJGAABwBQOIaVIzV2uhb38OpikJ6RWgN93HvpJqgets5HXAJ1rgtfyLg63QnbWBv2vymYUVSSpENMOHdwY2QlLN6NLmLFRHSIHgnfXcTAgUrsQkJIZliysaPelYTUc0WErZQJVQaCdpZ0R8gdarUSBiRXhyIYCjBe_LbzEi8Ol0-unp_ZQYSDFOU"
          alt="City Nest Hostel communal space"
          className="w-full h-full object-cover opacity-40"
        />
        
        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1f]/90 via-transparent to-[#0f1c2c]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Animated Floating Circles - Responsive sizes */}
        <div className="absolute top-10 left-5 w-32 h-32 md:w-72 md:h-72 bg-[#fdae3c]/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-5 w-40 h-40 md:w-96 md:h-96 bg-[#fdae3c]/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(253,174,60,0.1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-1/4 right-0 w-80 h-80 border border-[#fdae3c]/20 rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-60 h-60 border border-[#fdae3c]/10 rounded-full" />
      </div>



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-12 sm:pt-24 pb-16 sm:pb-32">
        <div className="max-w-3xl">
          {/* Animated badge */}
          <div
            className="opacity-0 animate-fadeUp animate-delay-100 inline-block"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="inline-block bg-gradient-to-r from-[#fdae3c] to-yellow-400 text-black font-bold uppercase text-[9px] sm:text-[11px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 tracking-wider shadow-lg shadow-[#fdae3c]/30">
              ✨ REFINED URBAN SANCTUARY
            </div>
          </div>

          {/* Main heading with gradient text */}
          <h1
            className="opacity-0 animate-fadeUp animate-delay-200 font-sans font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 sm:mb-8 text-white leading-tight drop-shadow-lg"
            style={{ animationFillMode: "forwards" }}
          >
            Premium Urban
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#fdae3c] via-yellow-300 to-[#fdae3c] bg-clip-text text-transparent">
              Living
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="opacity-0 animate-fadeUp animate-delay-300 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-12 font-sans font-normal"
            style={{ animationFillMode: "forwards" }}
          >
            Experience the perfect blend of comfort, community, and convenience in Lahore's most prestigious neighborhoods. Your sanctuary awaits.
          </p>

          {/* CTAs */}
          <div
            className="opacity-0 animate-fadeUp animate-delay-500 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 items-center"
            style={{ animationFillMode: "forwards" }}
          >
            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-black text-sm sm:text-base transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#fdae3c]/50 hover:-translate-y-1 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdae3c] to-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Explore Rooms
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white text-sm sm:text-base border-2 border-white hover:border-[#fdae3c] transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20 active:scale-95">
                <span className="flex items-center gap-2">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.087-.114-.694-.925-.694-1.764 0-.839.44-1.25.597-1.421.157-.17.343-.213.457-.213.114 0 .229.001.328.006.104.005.244-.04.382.285.144.341.486 1.185.528 1.271.043.086.07.186.013.299-.057.114-.086.186-.171.285-.086.1-.181.223-.257.299-.086.085-.176.177-.076.348.1.172.443.731.952 1.185.656.585 1.21.766 1.381.852.172.086.272.072.372-.043.1-.114.428-.499.543-.67.114-.172.229-.143.386-.086.157.057 1.001.471 1.171.557.171.086.286.128.328.2.043.072.043.415-.101.819z" />
                  </svg>
                  WhatsApp Us
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider SVG */}
      <svg className="absolute bottom-0 w-full h-32 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
      </svg>
    </section>
  );
}