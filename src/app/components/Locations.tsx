import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

const locations = [
  {
    branch: "Gulberg Branch",
    label: "Sector C, Gulberg III, Lahore",
    description:
      "Ideally located in the financial and lifestyle heart of the city, just 5 minutes walk from UCP and Main Boulevard.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSySnZ9axpK4pTU9q9mm2KJfZJ3MZWgMxRTI12YoWnz7adeEcu5pN25IQaHJkbvtRWwjSNWzFx710wOxwebZO4kwiDmJyVcT8fxYE2nJO064pR4uhf7tafNlyFpN2XmR36DPodRTQKq2GpV7AbTsus_3mkFnWKGttCcyTyj5QlUksEYJw4Zd8rKQA-5lciAvjAHBx3aymGxneFvAsovTPj7WPyBZ9K_zl-FTuw6rBES3FX1T5rxPZIjMC7YYYwvelX20TJaf5GtGe8",
  },
  {
    branch: "DHA Branch",
    label: "Phase 5, DHA, Lahore",
    description:
      "Safe, quiet, and prestigious. Experience premium living with lush green surroundings and 24/7 high-alert security.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlScyNO1K8PX3ylDn9M4cFnKYoE_5OkXCVEooDJ7B-nh_9i0ugivcWSZmppR4dsQLqr9bNUurenChg0dbZi-BCICYyvlCNb43seU3BwOcFLtCWmD1HZ7z6ttkqo-3kt4OArgpwm6pg75YwatG3NDUXKEewOol7XBGw6ZPEWkFu--Sx99QZSMVKmqVDxtorlmzPNnl0E66OcOMMfOD9GKuF5k9CKsQTTSXsjttCLMgDbJba_r4uSXRfqlZh0zgOUM497xZC410mwR9y",
  },
];

export default function Locations() {
  return (
    <section className="py-12 sm:py-20 bg-white" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading 
          title="Prime Neighborhoods" 
          subtitle="Strategically located in Lahore's most sought-after areas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map((loc) => (
            <div
              key={loc.branch}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.branch}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#fdae3c] text-black px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider">
                  {loc.branch}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-3 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-[11px] font-bold tracking-wide">
                    {loc.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{loc.branch}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed min-h-[60px]">
                  {loc.description}
                </p>

                {/* Google Map Embed */}
                <div className="h-48 rounded-lg mb-6 overflow-hidden relative border border-gray-200">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.label)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div>

                <button className="w-full bg-[#fdae3c] text-black font-semibold py-3 rounded-lg text-sm hover:bg-[#f9a020] transition-all duration-200 hover:shadow-md active:scale-95 flex items-center justify-center gap-2">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.087-.114-.694-.925-.694-1.764 0-.839.44-1.25.597-1.421.157-.17.343-.213.457-.213.114 0 .229.001.328.006.104.005.244-.04.382.285.144.341.486 1.185.528 1.271.043.086.07.186.013.299-.057.114-.086.186-.171.285-.086.1-.181.223-.257.299-.086.085-.176.177-.076.348.1.172.443.731.952 1.185.656.585 1.21.766 1.381.852.172.086.272.072.372-.043.1-.114.428-.499.543-.67.114-.172.229-.143.386-.086.157.057 1.001.471 1.171.557.171.086.286.128.328.2.043.072.043.415-.101.819z" /></svg>
                  WhatsApp Location
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}