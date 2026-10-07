import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

// Google Fonts: Fraunces for headings, Manrope for body text.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://sapa-mountain-lodge.example.com"), // TODO: replace with real domain
  title: {
    default: "Sapa Mountain Lodge — Nature, Comfort & Mountain Views",
    template: "%s · Sapa Mountain Lodge",
  },
  description:
    "Sapa Mountain Lodge is a family-run mountain lodge in Sapa, Vietnam, offering comfortable rooms, guided treks, and authentic local experiences.",
  keywords: [
    "Sapa tours",
    "Sapa Mountain Lodge",
    "Sapa trekking",
    "Red Dao herbal trek",
    "Ta Van Village",
    "Vietnam cultural tours",
    "Sapa homestay",
  ],
  openGraph: {
    title: "Sapa Mountain Lodge — Nature, Comfort & Mountain Views",
    description:
      "Authentic trekking and cultural tours in Ta Van Village, Sapa, Vietnam.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: "#FFF8F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">{children}</body>
    </html>
  );
}
