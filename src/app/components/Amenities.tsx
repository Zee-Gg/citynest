import SectionHeading from "./ui/SectionHeading";

const amenities = [
  { icon: "wifi", label: "Filtered Water" },
  { icon: "restaurant", label: "Kitchen" },
  { icon: "security", label: "CupBoards" },
  { icon: "bolt", label: "Comfortable Beds" },
  { icon: "cleaning_services", label: "Geysers" },
  { icon: "local_laundry_service", label: "Clean Washrooms" },
  { icon: "videocam", label: "Orange Line Nearby" },
  { icon: "local_parking", label: "4 Branches in Lahore" },
];

export default function Amenities() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-[#0D1B2A] to-[#1a2635]" id="amenities">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          title="Facilities You Actually Need"
          subtitle="Essential hostel features for comfortable daily living"
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-16 gap-x-4 sm:gap-x-8">
          {amenities.map((a) => {
            const icons: Record<string, React.ReactElement> = {
              wifi: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>,
              security: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
              videocam: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="10" x="3" y="7" rx="2" ry="2"/><path d="m17 9 5-2v10l-5-2"/></svg>,
              bolt: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
              cleaning_services: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
              local_laundry_service: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="18" x="5" y="3" rx="2" ry="2"/><line x1="5" x2="19" y1="7" y2="7"/><circle cx="12" cy="14" r="3"/></svg>,
              restaurant: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
              local_parking: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>,
            };
            return (
              <div key={a.label} className="text-center flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fdae3c]/20 to-[#fdae3c]/5 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 border border-[#fdae3c]/20">
                  <div className="text-[#fdae3c] transition-transform duration-300 group-hover:scale-110">
                    {icons[a.icon]}
                  </div>
                </div>
                <span className="text-gray-300 text-[10px] md:text-[11px] font-bold uppercase tracking-widest group-hover:text-[#fdae3c] transition-colors">
                  {a.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}