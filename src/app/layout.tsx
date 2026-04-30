import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angkut — Smart Public Transportation Platform",
  description:
    "Find the best public transport routes, track nearby vehicles in real-time, and pay seamlessly with QRIS or cash. Your smarter way to move around the city.",
  keywords: [
    "angkut",
    "public transportation",
    "angkot",
    "bus",
    "feeder",
    "transit",
    "smart city",
    "urban mobility",
    "QRIS",
    "route planner",
  ],
  openGraph: {
    title: "Angkut — Smart Public Transportation Platform",
    description:
      "Find the best public transport routes, track nearby vehicles in real-time, and pay seamlessly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
