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
                "Get live room availability on phone/WhatsApp",
                "Choose your nearest branch in Lahore",
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
            <a
              href="https://wa.me/923008570956"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-fit bg-[#fdae3c] text-black text-xs sm:text-sm font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#f9a020] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-center"
            >
              WhatsApp Us Now
            </a>
          </div>

          {/* Right panel */}
          <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center bg-white">
            <div className="space-y-4 sm:space-y-8">
              <div>
                <div className="text-[#fdae3c] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Phone Support
                </div>
                <div className="font-sans font-bold text-xl text-black">
                  0300 8570956
                </div>
                <div className="text-xs text-gray-500 mt-1">Available 24/7</div>
              </div>
              <div>
                <div className="text-[#fdae3c] text-[10px] font-bold uppercase tracking-widest mb-2">
                  WhatsApp
                </div>
                <div className="font-sans font-bold text-xl text-black">
                  +92 300 8570956
                </div>
                <div className="text-xs text-gray-500 mt-1">Fast response for booking queries</div>
              </div>
              <div>
                <div className="text-[#fdae3c] text-[10px] font-bold uppercase tracking-widest mb-2">
                  Branches
                </div>
                <div className="text-gray-700 text-sm max-w-xs">
                  Thokar Niaz Baig, DHA, Gulberg, and GT Road - Lahore.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}