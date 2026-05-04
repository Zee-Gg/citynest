const stats = [
  { value: "2", label: "Prime Locations" },
  { value: "50+", label: "Happy Residents" },
  { value: "3", label: "Room Types" },
  { value: "24/7", label: "Guest Support" },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-12 sm:py-20 md:py-32 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center flex flex-col items-center justify-center py-8 md:py-0 group hover:bg-gray-50 transition-colors px-4"
          >
            <div className="font-sans font-bold text-4xl md:text-6xl bg-gradient-to-br from-[#fdae3c] to-yellow-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
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