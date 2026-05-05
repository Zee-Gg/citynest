"use client";

import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";

const faqs = [
  {
    q: "Which branches are currently available?",
    a: "We currently have branches at Thokar Niaz Baig, DHA, Gulberg, and GT Road in Lahore.",
  },
  {
    q: "What facilities are available in rooms?",
    a: "Our key facilities include filtered water, kitchen access, cupboards, comfortable beds, geysers, and clean washrooms.",
  },
  {
    q: "How far is the hostel from public transport?",
    a: "One of our strongest highlights is proximity to the Orange Line Train station, around a 3-minute walk.",
  },
  {
    q: "How can I book or ask for room availability?",
    a: "You can call us directly at 0300 8570956 or message us on WhatsApp for real-time room availability and booking details.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F5F5F5]" id="faq">
      <div className="max-w-3xl mx-auto px-8">
        <SectionHeading title="Common Questions" />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-lg overflow-hidden transition-all ${
                open === i
                  ? "border-[#fdae3c] shadow-md"
                  : "border-gray-200"
              }`}
            >
              <button
                className="flex justify-between items-center p-5 w-full text-left font-bold text-sm text-black hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 text-gray-400 ${open === i ? "rotate-180 text-[#fdae3c]" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}