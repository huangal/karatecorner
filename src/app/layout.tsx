import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://karatecorner.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KarateCorner — Shotokan Karate, Aikido & Shaolin Kung Fu",
    template: "%s | KarateCorner",
  },
  description:
    "KarateCorner is a traditional dojo teaching Shotokan Karate, Aikido and Shaolin Kung Fu, with kids classes and a beginners' course. No experience needed — book a free class today.",
  keywords: [
    "martial arts dojo",
    "martial arts gym",
    "shotokan karate",
    "aikido classes",
    "shaolin kung fu",
    "karate for beginners",
    "kids martial arts",
    "KarateCorner",
  ],
  authors: [{ name: "KarateCorner" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "KarateCorner",
    title: "KarateCorner — Shotokan Karate, Aikido & Shaolin Kung Fu",
    description:
      "A traditional dojo where every black belt started as a white belt. Karate, Aikido, Kung Fu and kids classes. Your first class is free.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "KarateCorner traditional martial arts dojo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KarateCorner — Shotokan Karate, Aikido & Shaolin Kung Fu",
    description:
      "A traditional dojo where every black belt started as a white belt. Karate, Aikido, Kung Fu and kids classes. Your first class is free.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-washi-100 text-ink-900 antialiased">{children}</body>
    </html>
  );
}
