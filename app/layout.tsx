import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rest Countries",
  description:
    "Find any country using advance search filter with masonary layout",
  openGraph: {
    title: "Rest Countries",
    description:
      "Find any country using advance search filter with masonary layout",
    url: "https://rest-countries.vercel.app",
    siteName: "Rest Countries",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
