import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/Statsbar";
import Locations from "./components/Locations";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Locations />
      <Rooms />
      <Amenities />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 hover:-translate-y-1 animate-bounce"
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp Us"
      >
        <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.087-.114-.694-.925-.694-1.764 0-.839.44-1.25.597-1.421.157-.17.343-.213.457-.213.114 0 .229.001.328.006.104.005.244-.04.382.285.144.341.486 1.185.528 1.271.043.086.07.186.013.299-.057.114-.086.186-.171.285-.086.1-.181.223-.257.299-.086.085-.176.177-.076.348.1.172.443.731.952 1.185.656.585 1.21.766 1.381.852.172.086.272.072.372-.043.1-.114.428-.499.543-.67.114-.172.229-.143.386-.086.157.057 1.001.471 1.171.557.171.086.286.128.328.2.043.072.043.415-.101.819z" />
        </svg>
      </a>
    </main>
  );
}