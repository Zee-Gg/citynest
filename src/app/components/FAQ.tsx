"use client";

import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";

const faqs = [
  {
    q: "How much is the security deposit?",
    a: "We require a one-month security deposit along with your first month's rent. The deposit is fully refundable at the time of move-out, provided there are no damages and a 30-day notice is given.",
  },
  {
    q: "Are meals included in the monthly rent?",
    a: "Meal plans are optional. You can choose to add Breakfast & Dinner for an additional Rs. 6,000 per month. Our menu is chef-curated and focused on healthy, home-style cooking.",
  },
  {
    q: "What are the visiting hours?",
    a: "To maintain security and privacy, visiting hours are from 10:00 AM to 9:00 PM. All visitors must sign in at the front desk. Overnight guests are not permitted.",
  },
  {
    q: "Is there a backup for electricity?",
    a: "Yes, both our branches are equipped with heavy-duty commercial generators that provide seamless backup for lights, fans, and WiFi routers during outages.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F5F5F5]">
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