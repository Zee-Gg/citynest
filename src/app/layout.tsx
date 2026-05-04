import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "City Nest Hostels | Premium Urban Living in Lahore",
  description:
    "Experience premium hostel living in Lahore's most prestigious neighborhoods — Gulberg & DHA. Refined spaces, vibrant community, 24/7 support.",
  keywords: "hostel, accommodation, Lahore, Gulberg, DHA, premium living, shared rooms",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "City Nest Hostels | Refined Urban Sanctuary",
    description: "Premium hostel living in Lahore's most prestigious neighborhoods.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}