import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theproductbuilders.com"),
  title: {
    default: "The Product Builders | Product Strategy, AI & Engineering for Enterprise and Startup Teams",
    template: "%s | The Product Builders",
  },
  description:
    "We've delivered products inside Apple, Mastercard, Toyota, and Warner Bros. Now we bring that experience to your business: AI systems, digital strategy, and product development that create durable competitive advantage.",
  keywords: "product strategy, product development, AI implementation, product design, Fortune 500, enterprise product consulting",
  openGraph: {
    siteName: "The Product Builders",
    title: "The Product Builders",
    description: "Product strategy, AI, and engineering — built by people who've delivered inside Fortune 500 companies.",
    type: "website",
    url: "https://theproductbuilders.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Product Builders",
    description: "Product strategy, AI, and engineering — built by people who've delivered inside Fortune 500 companies.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Product Builders",
  url: "https://theproductbuilders.com",
  email: "hello@theproductbuilders.com",
  description:
    "Product strategy, AI implementation, product design, engineering, and workforce training delivered by operators with Fortune 500 and startup experience.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Implementation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Strategy" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technology & Engineering" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workforce Training" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <NewsletterPopup />
        <Analytics />
      </body>
    </html>
  );
}
