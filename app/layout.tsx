import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { companyInfo } from "@/lib/data";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),

  title: {
    default: `${companyInfo.name} | Professional LawnCare Services`,
    template: `%s | ${companyInfo.name}`,
  },

  description: `Welcome to ${companyInfo.name}. ${companyInfo.tagline}. Discover our professional services and get a free quote today!`,

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  openGraph: {
    title: `${companyInfo.name} | Professional LawnCare Services`,
    description: `${companyInfo.tagline}. Discover our professional services and get a free quote today!`,
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} - ${companyInfo.tagline}`,
      },
    ],
    siteName: companyInfo.name,
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} | Professional LawnCare Services`,
    description: `${companyInfo.tagline}. Discover our professional services and get a free quote today!`,
    images: [
      {
        url: '/og-image.png',
        alt: `${companyInfo.name} - ${companyInfo.tagline}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cale's Lawncare",
    "description": "Professional lawn care services in Macomb and Rushville areas. From weekly mowing to complete landscape maintenance, we keep your lawn looking its best all season long.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Macomb",
      "addressRegion": "IL",
      "postalCode": "61455",
      "streetAddress": "Serving Macomb and Rushville areas"
    },
    "telephone": "(309) 333-7599",
    "email": "cale.dylan@gmail.com",
    "openingHours": [
      "Mo-Sa 07:00-19:00",
      "Su 09:00-17:00"
    ],
    "priceRange": "$35-$125",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Macomb, IL"
      },
      {
        "@type": "Place",
        "name": "Rushville, IL"
      }
    ],
    "serviceArea": "Macomb and Rushville, IL",
    "sameAs": [
      "https://www.facebook.com/share/16umqNcTWq/?mibextid=wwXIfr"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
