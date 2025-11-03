import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astrology App - Discover Your Zodiac",
  description: "Explore your zodiac sign, daily horoscope, and celestial insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
