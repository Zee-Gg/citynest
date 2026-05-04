import SectionHeading from "./ui/SectionHeading";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOE8mnhCfH_P5rOI-n7ErZsFBr2Qh_3mYtSsmb7oUm39jwX5cU-O2_eRzpwdZJUoVWhnihmGi75h7ntYu2FWw6_G8Jf9ZFq9nZyOQnt5G2PCrW2cUNBYfKksqc35vHPi0HzxR7Xy0L-SEKE0Cv1H6fvCmCAalFfH1VAN-tp4LLl8RuPbKbaVRPX8nBj5nKZ8-5Vq4vkHW3diUZqH2zg-j6we1KdT32uZYDBmkJRoyEGqqGe4HulVHy5LB-Xe71dgAl5PlwDU-fdZP9",
    alt: "Common coworking room",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBTIlVL71tRpoaI7BQCT4SaQBMRdWj6IlNQfgplJwEDOxIA2XYX8tLLxxFAxa_hO8nncvrDO82GSmPSzlZJKPuZbwPgQQ_OiqSSrEpemVspVY97qgl5k4ipTko139l11VUumgp5CAmpTDvzu-ja1iHPTOB3Z4X7yNj52wI9NNWwyQhu0aAZPPTqU_oO6BIdjQCUhruX5bswbKNwqXu2WkzKdg1sEYT9OV_T6dTnMUjOkntj_B_2qyNYHosblILn-JwfPG7tE4Lo8z1",
    alt: "Room detail",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnX4_VVPwY4MNsNsv2Twe7upzUSoES9Vy4VeJYYptqwt6D9V_y-cfM3H_woXuCjep74SQs3YRaJ2f1yZRvwUAU1izSsBE-Gnaqxj6tkX4TRWYPLLworyZ5qTimvJxkCN6Ahduoyu6GM37hSPSpw5NZsK1doHFVPfxWZSVAK0w67TxWgSJhkgPlnME-mm3ebOKOxCQ3nnsrp6-OiMhjmo5M46GDQhbKzwdTluIVz-9VJfEYfbm-Jxg6Bv9dyz7OIcAweJim_P1ggqNI",
    alt: "Bathroom",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz-JfqS7WjRhNH7j2owVptZMjY8bIvHv42ASoqwFsD2WNvt2n5IXWWbGZng4m5ANC1jUl1qXr3SgORDRcgcLKO9PKiRSym_SBu-pwb6HRySyk5JJSYYVfGx_liynn3Sdc24D2duDoutmHjgODNU_6-FpB6rZ_s4Mzzt4WWD0EA7he22vdMIRphwdQfhb5sercU7XJJfKg9q0q8hAGLh1fVt3WfFYodOx-1KqcYIMlEOG5EC-XEzJkr0KyKb_pusCBvIj4rKa_lVeDV",
    alt: "Rooftop terrace",
    className: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading title="Life at City Nest" subtitle="Captured moments from our vibrant community" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[250px]">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`overflow-hidden rounded-2xl ${img.className.replace('col-span-2', 'sm:col-span-2').replace('row-span-2', 'sm:row-span-2')} group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-700 group-hover:brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}