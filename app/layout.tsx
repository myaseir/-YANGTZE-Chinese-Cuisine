import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// These fonts are excellent for a premium, fine-dining aesthetic
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ['400', '500', '600', '700', '800', '900'] 
});

export const metadata: Metadata = {
  title: "Yangtze Chinese Cuisine | Premium Dining",
  description: "A premier culinary destination blending centuries-old Chinese traditions with modern elegance. Experience authentic flavors, signature tastings, and exclusive private dining.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${montserrat.variable} ${playfair.variable} font-sans bg-zinc-950 text-gray-300 antialiased flex flex-col min-h-screen selection:bg-amber-600/30 selection:text-amber-200`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}