"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#fdae3c]/10 text-[#7b4f00] font-semibold text-xs px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#fdae3c]" />
            Hostels in Lahore
          </div>

          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 leading-tight">
            Comfortable hostels across Lahore
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
            City Nest provides clean, secure, and practical accommodation for
            students and working professionals with all daily-life essentials.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#rooms"
              className="bg-[#fdae3c] text-black font-semibold px-6 py-3 rounded-lg text-center hover:bg-[#f9a020] transition-colors"
            >
              View Room Options
            </a>
            <a
              href="https://wa.me/923008570956"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg text-center hover:border-[#fdae3c] hover:text-black transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
            <span className="text-[#fdae3c]">●</span>
            Just 3-minute walk from Orange Line Train
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Call now:{" "}
            <a href="tel:03008570956" className="font-semibold text-gray-900">
              0300 8570956
            </a>
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-[#fdae3c]/15 blur-2xl rounded-3xl" />
          <Image
            src="/imagee.jpg"
            alt="City Nest hostel room and common area"
            width={1000}
            height={1200}
            className="relative w-full h-[420px] sm:h-[520px] object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-4 shadow-md border border-gray-100">
            <p className="text-sm font-semibold text-gray-900">
              4 branches available:
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Thokar Niaz Baig, DHA, Gulberg, and GT Road
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
