import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
        {/* Google Ads Global Site Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18070811914"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18070811914');
            `,
          }}
        />
        <Script
          id="google-ads-conversion-helper"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Helper function to delay opening a URL until a gtag event is sent.
              function gtagSendEvent(url) {
                var callback = function () {
                  if (typeof url === 'string') {
                    window.location = url;
                  }
                };
                gtag('event', 'ads_conversion_Contact_Us_1', {
                  'event_callback': callback,
                  'event_timeout': 2000,
                });
                return false;
              }
            `,
          }}
        />

        {/* Metricool Tracking Script */}
        <Script
          id="metricool-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"d5f02c39820817a025aa1d1706bd2f17"})});
            `,
          }}
        />
        
        <Preloader />
        <SmoothScroll />
        <Navigation />
        <WhatsAppFloat />
        {children}
      </body>
    </html>
  );
}
