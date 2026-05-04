import SectionHeading from "./ui/SectionHeading";

interface Review {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const reviews: Review[] = [
  {
    quote:
      "Coming from out of city for my first job, City Nest made the transition so smooth. The Gulberg branch is so central and the crowd is very professional.",
    name: "Ahmed Raza",
    role: "Software Engineer",
    initials: "AR",
  },
  {
    quote:
      "The DHA branch is a sanctuary. I love the silence here which helps me with my studies. The WiFi is actually fast enough for all my heavy zoom calls.",
    name: "Sara Khan",
    role: "Medical Student",
    initials: "SK",
  },
  {
    quote:
      "Literally the best meal options I've ever had in a hostel. It feels like home food every single day. Highly recommend the sharing rooms!",
    name: "Zain Malik",
    role: "Corporate Banker",
    initials: "ZM",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fdae3c" stroke="#fdae3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-white to-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading 
          title="Resident Stories" 
          subtitle="Real experiences from our community members"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 group"
            >
              <StarRating />
              <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fdae3c] to-yellow-400 flex items-center justify-center font-bold text-xs text-white">
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-black">{r.name}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-400">
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}