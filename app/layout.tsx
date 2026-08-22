import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import NewsletterPopup from "@/components/NewsletterPopup";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
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

const DEFAULT_TITLE =
  "The Product Builders | Product Strategy, AI & Engineering for Enterprise and Startup Teams";
const DEFAULT_DESCRIPTION =
  "We've delivered products inside Apple, Mastercard, Toyota, and Warner Bros. Now we bring that experience to your business: AI systems, digital strategy, and product development that create durable competitive advantage.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: "product strategy, product development, AI implementation, product design, Fortune 500, enterprise product consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: "Product strategy, AI, and engineering — built by people who've delivered inside Fortune 500 companies.",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Product strategy, AI, and engineering — built by people who've delivered inside Fortune 500 companies.",
    images: ["/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "hello@theproductbuilders.com",
  sameAs: ["https://theproductbuilders.substack.com"],
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
        <JsonLd data={organizationJsonLd} />
        {children}
        <NewsletterPopup />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-MDB0MBCFLG" />
    </html>
  );
}
