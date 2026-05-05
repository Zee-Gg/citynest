import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock database for rooms
const roomsData: Record<string, any> = {
  "2-seater": {
    name: "2-Seater Room",
    price: "Rs 18,000",
    images: [
      "/2seater.png",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Our spacious 2-seater room is designed for maximum privacy, focus, and comfort. Whether you're a student preparing for exams or a professional working remotely, this room provides the perfect balance of sharing and personal space.",
    hostelLocation: "City Nest Premium Branch, Block A, Main Commercial Area",
    outsideLocation: "Situated right next to the central park. Just a 5-minute walk to the nearest metro-bus station, making commuting to universities and offices incredibly easy. Supermarkets and cafes are a stone's throw away.",
    furnishings: [
      "2 Comfortable Spring Mattresses",
      "2 Built-in Wooden Cupboards with Locks",
      "2 Dedicated Study Tables with Ergonomic Chairs",
      "High-speed Ceiling Fan",
      "Split Air Conditioner (AC)",
      "Premium Window Curtains",
      "Multiple Power Outlets beside each bed"
    ],
    amenities: [
      "High-Speed WiFi",
      "24/7 Filtered Drinking Water",
      "Shared Kitchen Access",
      "Attached Washroom with Geyser",
      "Daily Room Cleaning Services",
      "Power Backup (UPS/Generator)"
    ]
  },
  "3-seater": {
    name: "3-Seater Room",
    price: "Rs 16,000",
    images: [
      "/3seater.png",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800"
    ],
    description: "The 3-seater room is the most popular choice, offering a great balance between affordability and comfort. It's spacious enough that you never feel crowded, making it ideal for friend groups to move in together.",
    hostelLocation: "City Nest Executive Campus, Block B",
    outsideLocation: "Located in a peaceful residential lane off the main road. 10 minutes away from the main university campus, with a dedicated local shuttle stop right outside the building.",
    furnishings: [
      "3 Single Beds",
      "3 Spacious Lockable Cupboards",
      "1 Shared Study/Dining Area inside the room",
      "Ceiling Fans",
      "Air Conditioner (AC)",
      "Large Windows with Curtains"
    ],
    amenities: [
      "High-Speed WiFi",
      "Clean Washroom Facilities",
      "Kitchen Access",
      "Secure Bike/Car Parking",
      "Laundry Access",
      "CCTV Security in Corridors"
    ]
  },
  "4-seater": {
    name: "4-Seater Room",
    price: "Rs 14,000",
    images: [
      "/4seater.png",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Our most economical option! The 4-seater room is designed efficiently so that value meets comfort. A fantastic choice for students looking to save on rent without compromising on essential amenities and a safe environment.",
    hostelLocation: "City Nest Standard Branch, Sector 2",
    outsideLocation: "Very close to standard dining halls and university gates. Lots of local street food and convenient stores open 24/7 just around the corner.",
    furnishings: [
      "2 Bunk Beds / 4 Single Beds (Depending on availability)",
      "4 Personal Lockers/Cupboards",
      "2 Study Tables",
      "Ceiling Fans",
      "Proper Ventilation"
    ],
    amenities: [
      "High-Speed WiFi",
      "Filtered Water System",
      "Geysers in Washrooms",
      "Lounge/Common Area Access",
      "Security Guards on duty 24/7"
    ]
  }
};

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15+ we await the params
  const { id } = await params;
  const room = roomsData[id];

  if (!room) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header/Nav */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/#rooms" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Rooms
          </Link>
          <div className="text-xl font-bold tracking-tighter">CITY NEST</div>
          <div className="w-20" /> {/* Balancer */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-6 md:mt-10">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{room.name}</h1>
            <p className="text-gray-500 mt-2 text-lg">Experience premium shared living.</p>
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold inline-block self-start md:self-auto text-sm">
            🟢 Slots Available
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2 h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden group">
            <Image 
              src={room.images[0]} 
              alt={`${room.name} Main View`} 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-[500px]">
            <div className="relative h-1/2 rounded-2xl overflow-hidden group">
              <Image 
                src={room.images[1]} 
                alt={`${room.name} View 2`} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-1/2 rounded-2xl overflow-hidden group">
              <Image 
                src={room.images[2]} 
                alt={`${room.name} View 3`} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About this room</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{room.description}</p>
            </section>

            {/* Furnishings */}
            <section>
              <h2 className="text-2xl font-bold mb-4">What's inside the room?</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.furnishings.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border shadow-sm">
                    <svg className="text-[#fdae3c] mt-1 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Included Amenities</h2>
              <div className="flex flex-wrap gap-3">
                 {room.amenities.map((item: string, i: number) => (
                  <div key={i} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Location details */}
            <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Location Highlights</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-lg text-gray-900 mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Hostel Location
                  </h3>
                  <p className="text-gray-600 pl-7">{room.hostelLocation}</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-lg text-gray-900 mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    Surrounding Area
                  </h3>
                  <p className="text-gray-600 pl-7">{room.outsideLocation}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Pricing / CTA Sticky Column */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-3xl p-6 md:p-8 shadow-xl sticky top-24">
              <div className="mb-2">
                <span className="text-gray-500 font-medium">Monthly Rent</span>
              </div>
              <div className="text-4xl font-extrabold text-[#fdae3c] mb-6">
                {room.price}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b text-sm">
                  <span className="text-gray-600">Maintenance Fee</span>
                  <span className="font-semibold text-gray-900">Included</span>
                </div>
                <div className="flex gap-2 items-start py-3 text-sm text-gray-600">
                  <svg className="shrink-0 text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  <p>Security deposit varies per room. Contact admin for final calculation.</p>
                </div>
              </div>

              <a
                href="https://wa.me/923008570956"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#fdae3c] text-black font-semibold py-4 rounded-xl hover:bg-[#f9a020] transition-colors shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Inquire & Book Now
              </a>
              
              <div className="mt-4 text-center text-xs text-gray-500">
                You won't be charged yet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}