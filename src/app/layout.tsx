import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "Angkut — Platform Transportasi Publik Pintar",
  description:
    "Temukan rute transportasi umum terbaik, lacak kendaraan terdekat secara real-time, dan bayar dengan mudah menggunakan QRIS atau tunai. Cara yang lebih pintar untuk berkeliling kota.",
  keywords: [
    "angkut",
    "transportasi umum",
    "angkot",
    "bus",
    "feeder",
    "transit",
    "kota pintar",
    "mobilitas perkotaan",
    "QRIS",
    "perencana rute",
  ],
  openGraph: {
    title: "Angkut — Platform Transportasi Publik Pintar",
    description:
      "Temukan rute transportasi umum terbaik, lacak kendaraan terdekat secara real-time, dan bayar dengan mudah.",
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
      lang="id"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
