import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Rest Countries",
  description:
    "Find any country using advance search filter with masonary layout",
  openGraph: {
    title: "Rest Countries",
    description:
      "Find any country using advance search filter with masonary layout",
    url: "https://rs-rest-countries.vercel.app",
    siteName: "Rest Countries",
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
