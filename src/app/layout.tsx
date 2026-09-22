import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { studioConfig } from "@/data/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Analytics } from "@/components/common/Analytics";
import { SEOStructuredData } from "@/components/common/SEOStructuredData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBFBF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(studioConfig.siteUrl),
  title: {
    default: "Interior Designers in Bangalore | Vayu Spaces",
    template: `%s | ${studioConfig.name} — Bangalore`,
  },
  description: studioConfig.description,
  keywords: [
    "Interior Designers in Bangalore",
    "Luxury Interior Designers Bangalore",
    "Interior Architecture Bangalore",
    "Villa Interior Design Bangalore",
    "Penthouse Interiors Bangalore",
    "Indiranagar Interior Designers",
    "Sadashivnagar Luxury Interiors",
    "Whitefield Villa Interiors",
    "Turnkey Interior Designers Bangalore",
    "Vayu Spaces",
  ],
  authors: [{ name: studioConfig.name, url: studioConfig.siteUrl }],
  creator: studioConfig.name,
  publisher: studioConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: studioConfig.siteUrl,
    title: "Interior Designers in Bangalore | Vayu Spaces",
    description: studioConfig.description,
    siteName: studioConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: `${studioConfig.name} — Spaces Designed Around You · Bangalore`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designers in Bangalore | Vayu Spaces",
    description: studioConfig.description,
    images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=630&q=85"],
  },
  verification: {
    google: studioConfig.googleSiteVerification || undefined,
  },
  alternates: {
    canonical: studioConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="bg-studio-ivory text-studio-obsidian antialiased selection:bg-studio-bronze selection:text-white min-h-screen flex flex-col">
        {/* Schema.org Structured Data */}
        <SEOStructuredData type="LocalBusiness" />
        {/* Google Analytics 4 */}
        <Analytics />
        {/* Custom Contextual Cursor for Desktop */}
        <CustomCursor />
        {/* Global Floating Glass Header */}
        <Header />
        {/* Main Content Area */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        {/* Studio Footer */}
        <Footer />
        {/* Floating WhatsApp Action */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
