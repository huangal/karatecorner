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
    default: "KarateCorner — Championship Martial Arts Training",
    template: "%s | KarateCorner",
  },
  description:
    "KarateCorner is a championship martial arts gym offering Karate, Muay Thai, Brazilian Jiu-Jitsu, Kickboxing and Kids classes. Book a free trial class today.",
  keywords: [
    "martial arts gym",
    "karate classes",
    "muay thai",
    "brazilian jiu-jitsu",
    "kickboxing",
    "kids martial arts",
    "KarateCorner",
  ],
  authors: [{ name: "KarateCorner" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "KarateCorner",
    title: "KarateCorner — Championship Martial Arts Training",
    description:
      "Train with national champions. Karate, Muay Thai, BJJ, Kickboxing and Kids programs. First class is free.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "KarateCorner martial arts gym",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KarateCorner — Championship Martial Arts Training",
    description:
      "Train with national champions. Karate, Muay Thai, BJJ, Kickboxing and Kids programs. First class is free.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-bone-100 text-navy-900 antialiased">{children}</body>
    </html>
  );
}
