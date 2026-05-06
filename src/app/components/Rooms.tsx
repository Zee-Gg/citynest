import SectionHeading from "./ui/SectionHeading";
import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

interface Room {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  image: string;
  amenities: { icon: string; label: string }[];
}

const rooms: Room[] = [
  {
    id: "2-seater",
    name: "2-Seater Room",
    price: "Rs 18,000",
    image: "/2seater.png",
    amenities: [
      { icon: "wifi", label: "Filtered Water" },
      { icon: "restaurant", label: "Kitchen Access" },
      { icon: "lock", label: "CupBoards" },
      { icon: "ac_unit", label: "Comfortable Beds" },
    ],
  },
  {
    id: "3-seater",
    name: "3-Seater Room",
    price: "Rs 16,000",
    popular: true,
    image: "/3seater.png",
    amenities: [
      { icon: "wifi", label: "Filtered Water" },
      { icon: "restaurant", label: "Kitchen Access" },
      { icon: "shower", label: "Clean Washrooms" },
      { icon: "ac_unit", label: "Comfortable Beds" },
    ],
  },
  {
    id: "4-seater",
    name: "4-Seater Room",
    price: "Rs 14,000",
    image: "/4seater.png",
    amenities: [
      { icon: "wifi", label: "Filtered Water" },
      { icon: "restaurant", label: "Kitchen Access" },
      { icon: "lock", label: "CupBoards" },
      { icon: "shower", label: "Geysers + Washrooms" },
    ],
  },
];

export default function Rooms() {
  return (
    <section className="py-12 sm:py-20 bg-gray-50" id="rooms">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 sm:gap-6">
          <div>
            <SectionHeading 
              title="Room Options"
              subtitle="Available in all City Nest branches with practical shared-living comfort"
              align="left"
            />
            <div className="flex items-center gap-2 mt-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs italic text-gray-500">
                Live availability shared on call/WhatsApp
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 items-center">
          {rooms.map((room) => (
            <div
              key={room.name}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${
                room.popular
                  ? "border-2 border-[#fdae3c] md:scale-105 md:z-10 md:relative shadow-xl hover:shadow-2xl"
                  : "border-gray-200 shadow-md hover:shadow-lg"
              } hover:-translate-y-2`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 bg-[#fdae3c] text-black px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider z-20 shadow-md">
                  ⭐ Most Popular
                </div>
              )}
              <div className="h-56 relative overflow-hidden bg-gray-200">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={900}
                  height={500}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-sans font-bold text-lg md:text-xl">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    {room.originalPrice && (
                      <span className="text-xs text-gray-400 line-through block">
                        {room.originalPrice}
                      </span>
                    )}
                    <div className="font-sans font-bold text-xl text-[#fdae3c]">
                      {room.price}
                      <span className="text-xs font-normal text-gray-500">
                        /mo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((a) => {
                    const icons: Record<string, JSX.Element> = {
                      ac_unit: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12v10"/><path d="M12 2v2"/><path d="M22 12h-2"/><path d="M4 12H2"/><path d="m19.07 4.93-1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 19.07-1.41-1.41"/><path d="m6.34 6.34-1.41-1.41"/><path d="m15.54 15.54-7.08-7.08"/><path d="m15.54 8.46-7.08 7.08"/></svg>,
                      tv: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>,
                      shower: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M12 2v2"/><path d="M10 8v.01"/><path d="M14 8v.01"/><path d="M12 8v.01"/><path d="M10 12v.01"/><path d="M14 12v.01"/><path d="M12 12v.01"/><path d="M10 16v.01"/><path d="M14 16v.01"/><path d="M12 16v.01"/><path d="M10 20v.01"/><path d="M14 20v.01"/><path d="M12 20v.01"/></svg>,
                      wifi: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>,
                      restaurant: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
                      laundry: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="18" x="5" y="3" rx="2" ry="2"/><line x1="5" x2="19" y1="7" y2="7"/><circle cx="12" cy="14" r="3"/></svg>,
                      lock: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                    };
                    return (
                      <span
                        key={a.label}
                        className="flex items-center gap-1.5 bg-gray-50 text-gray-700 px-2 py-1 rounded border border-gray-200 text-[11px] font-semibold"
                      >
                        {icons[a.icon]}
                        {a.label}
                      </span>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/rooms/${room.id}`}
                    className="w-full bg-white text-black font-semibold py-3 rounded-lg text-sm border-2 border-[#fdae3c] hover:bg-[#fff9f0] transition-all duration-200 block text-center"
                  >
                    View Room Details
                  </Link>
                  <a
                    href="https://wa.me/923008570956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#fdae3c] text-black font-semibold py-3 rounded-lg text-sm hover:bg-[#f9a020] transition-all duration-200 hover:shadow-md active:scale-95 block text-center"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}