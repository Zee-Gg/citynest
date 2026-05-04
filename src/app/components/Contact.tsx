import Button from "./ui/Button";

export default function Contact() {
  return (
    <section className="py-12 sm:py-20 bg-white" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 md:grid-cols-2">
          {/* Left panel */}
          <div className="p-6 sm:p-10 md:p-14 bg-gradient-to-br from-[#0f1c2c] to-[#162d42] text-white flex flex-col justify-center">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 sm:mb-8">
              Ready to Move In?
            </h2>
            <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-10">
              {[
                "Book a personalized tour today",
                "Reserve your room with an advance token",
                "Hassle-free move-in within 24 hours",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-200">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fdae3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full sm:w-fit bg-[#fdae3c] text-black text-xs sm:text-sm font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#f9a020] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              WhatsApp Us Now
            </button>
          </div>

          {/* Right panel */}
          <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center bg-white">
            <div className="space-y-4 sm:space-y-8">
              <div>
                <div className="text-[#fdae3c] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Phone Support
                </div>
                <div className="font-sans font-bold text-xl text-black">
                  +92 (300) 123 4567
                </div>
                <div className="text-xs text-gray-500 mt-1">Available 24/7</div>
              </div>
              <div>
                <div className="text-[#fdae3c] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Email Us
                </div>
                <div className="font-sans font-bold text-xl text-black">
                  hello@citynest.com
                </div>
                <div className="text-xs text-gray-500 mt-1">Response within 2 hours</div>
              </div>
              <div>
                <div className="text-[#fdae3c] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Corporate Office
                </div>
                <div className="text-gray-700 text-sm max-w-xs">
                  Suite 402, Al-Hafeez Heights, Gulberg III, Lahore, Pakistan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}