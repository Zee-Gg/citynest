"use client";

import { useEffect, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 4, label: "Lahore Branches" },
  { value: 3, suffix: " min", label: "Walk To Orange Line" },
  { value: 6, suffix: "+", label: "Core Facilities" },
  { value: 24, suffix: "/7", label: "Support & Security" },
];

export default function StatsBar() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const durationMs = 1300;
    const fps = 60;
    const intervalMs = 1000 / fps;
    const totalSteps = Math.round(durationMs / intervalMs);
    let step = 0;

    const timer = window.setInterval(() => {
      step += 1;
      const progress = Math.min(step / totalSteps, 1);

      setCounts(stats.map((stat) => Math.round(stat.value * progress)));

      if (progress >= 1) {
        window.clearInterval(timer);
      }
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-20 md:py-32 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center flex flex-col items-center justify-center py-8 md:py-0 px-4"
          >
            <div className="font-sans font-bold text-4xl md:text-6xl bg-gradient-to-br from-[#fdae3c] to-yellow-400 bg-clip-text text-transparent mb-4">
              {counts[i]}
              {stat.suffix ?? ""}
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}