"use client";

import SectionHeading from "./ui/SectionHeading";
import Image from "next/image";
import { useState } from "react";

const locations = [
  {
    id: 1,
    branch: "Thokar Niaz Baig",
    label: "Thokar Niaz Baig, Lahore",
    description:
      "Easy city access with practical commute options for students and working residents.",
    image: "/imagee.jpg",
    rooms: "2-seater, 3-seater, 4-seater",
    availability: "15+ Rooms",
    highlight: "Best for Students",
    distance: "15 min to COMSATS",
  },
  {
    id: 2,
    branch: "DHA",
    label: "DHA, Lahore",
    description:
      "A peaceful branch in one of Lahore's most preferred neighborhoods.",
    image: "/imagee.jpg",
    rooms: "2-seater, 3-seater, 4-seater",
    availability: "12+ Rooms",
    highlight: "Premium Location",
    distance: "8 min to Defense Market",
  },
  {
    id: 3,
    branch: "Gulberg",
    label: "Gulberg, Lahore",
    description:
      "Central location for fast access to offices, markets, and daily essentials.",
    image: "/imagee.jpg",
    rooms: "2-seater, 3-seater, 4-seater",
    availability: "18+ Rooms",
    highlight: "Most Popular",
    distance: "5 min to Mall Road",
  },
  {
    id: 4,
    branch: "GT Road",
    label: "GT Road, Lahore",
    description:
      "A convenient branch for residents who need strong road connectivity.",
    image: "/imagee.jpg",
    rooms: "2-seater, 3-seater, 4-seater",
    availability: "10+ Rooms",
    highlight: "Budget Friendly",
    distance: "20 min to Airport",
  },
];

export default function Locations() {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const selectedLocation = locations.find(loc => loc.id === selectedId);

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-white to-gray-50" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          title="Explore Our Branches"
          subtitle="Premium locations across Lahore to match your lifestyle"
        />

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Left: Branch List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#fdae3c] rounded-full"></span>
                Choose Your Branch
              </h3>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedId(loc.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start justify-between group ${
                      selectedId === loc.id
                        ? "bg-[#fdae3c] text-black shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-sm">{loc.branch}</p>
                      <p className={`text-xs mt-1 ${selectedId === loc.id ? "text-black/70" : "text-gray-600"}`}>
                        {loc.availability}
                      </p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                      selectedId === loc.id
                        ? "bg-black/10"
                        : "bg-gray-300/50 group-hover:bg-gray-400"
                    }`}>
                      {loc.highlight}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          {selectedLocation && (
            <div className="lg:col-span-2 space-y-6 animate-fadeIn">
              {/* Featured Image Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={selectedLocation.image}
                    alt={selectedLocation.branch}
                    width={900}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#fdae3c] text-black px-3 py-1 rounded-lg text-xs font-bold">
                    ⭐ {selectedLocation.highlight}
                  </div>
                </div>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Description Card */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border-l-4 border-[#fdae3c]">
                  <h2 className="text-2xl font-bold text-black mb-2">{selectedLocation.branch}</h2>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <svg className="w-4 h-4 text-[#fdae3c]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
                    <span>{selectedLocation.label}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedLocation.description}</p>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-[#fdae3c] to-[#f9a020] rounded-xl p-5 text-black shadow-md">
                  <div className="text-2xl font-bold">{selectedLocation.availability}</div>
                  <p className="text-xs text-black/70 mt-1">Available</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-md">
                  <div className="text-lg font-bold">{selectedLocation.rooms}</div>
                  <p className="text-xs text-white/70 mt-1">Room Types</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 text-white shadow-md col-span-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/70">Nearest Transport Hub</p>
                      <div className="text-lg font-bold mt-1">{selectedLocation.distance}</div>
                    </div>
                    <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-80 rounded-2xl overflow-hidden border-4 border-gray-100">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation.label)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/923008570956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fdae3c] text-black font-semibold py-4 rounded-xl text-center hover:bg-[#f9a020] transition-all duration-200 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.087-.114-.694-.925-.694-1.764 0-.839.44-1.25.597-1.421.157-.17.343-.213.457-.213.114 0 .229.001.328.006.104.005.244-.04.382.285.144.341.486 1.185.528 1.271.043.086.07.186.013.299-.057.114-.086.186-.171.285-.086.1-.181.223-.257.299-.086.085-.176.177-.076.348.1.172.443.731.952 1.185.656.585 1.21.766 1.381.852.172.086.272.072.372-.043.1-.114.428-.499.543-.67.114-.172.229-.143.386-.086.157.057 1.001.471 1.171.557.171.086.286.128.328.2.043.072.043.415-.101.819z" /></svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+923008570956"
                  className="bg-black text-white font-semibold py-4 rounded-xl text-center hover:bg-gray-800 transition-all duration-200 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.92 7.02C17.45 6.18 16.51 5.55 15.43 5.55c-1.08 0-2.02.63-2.49 1.47-.41.72-1.18 1.18-2.06 1.18s-1.65-.46-2.06-1.18C10.59 6.18 9.65 5.55 8.57 5.55 7.49 5.55 6.55 6.18 6.08 7.02 5.3 8.26 5 9.64 5 11.1c0 5.55 3.84 10.74 9 10.74 5.16 0 9-5.19 9-10.74 0-1.46-.3-2.84-1.08-4.08zM8.5 17c-.83 0-1.5-.67-1.5-1.5S7.67 14 8.5 14s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}