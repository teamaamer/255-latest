import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const madaniArabic = localFont({
  src: [
    {
      path: "../public/Madani-Arabic-Font-Family/Madani Arabic Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Madani-Arabic-Font-Family/Madani Arabic Extra Bold.ttf",
      weight: "700 800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-madani-arabic",
});

export const metadata: Metadata = {
  title: "255 Agency - Creative Marketing & Branding",
  description: "255 is a premium creative agency transforming brands through strategic design, digital marketing, and innovative campaigns.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "255 Agency - Creative Marketing & Branding",
    description: "Premium creative agency for strategic design and digital marketing",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={madaniArabic.variable}>
      <body className={`${madaniArabic.className} ${madaniArabic.variable} antialiased`}>
        <Preloader />
        <SmoothScroll />
        <Navigation />
        <WhatsAppFloat />
        {children}
      </body>
    </html>
  );
}
