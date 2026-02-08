import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DODA5 — Ideas in Motion | Specialty Coffee in Bucharest",
  description:
    "Discover DODA5, a cozy specialty coffee shop in the heart of Bucharest. Origin coffee, artisan pastries, and a beautifully designed space on Strada Traian Doda 5.",
  keywords: [
    "DODA5",
    "specialty coffee",
    "Bucharest coffee shop",
    "cafenea Bucuresti",
    "origin coffee",
    "artisan pastries",
    "cozy cafe",
    "Ideas in Motion",
  ],
  openGraph: {
    title: "DODA5 — Ideas in Motion",
    description:
      "Specialty coffee & artisan pastries in the heart of Bucharest.",
    url: "https://doda5.n01app.com",
    siteName: "DODA5",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DODA5 — Ideas in Motion",
    description:
      "Specialty coffee & artisan pastries in the heart of Bucharest.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
