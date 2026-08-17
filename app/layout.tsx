import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  "The Product Builders Fortune 500 Operators Now Building With You";
const DEFAULT_DESCRIPTION =
  "We've shipped inside Apple, Mastercard, Toyota, and Warner Bros. Now we bring that operator edge to your product AI systems, digital strategy, and product development that creates durable competitive advantage.";

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
    description: "Fortune 500 Operators. Now Building With You.",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Fortune 500 Operators. Now Building With You.",
    images: ["/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "hello@theproductbuilders.com",
  sameAs: ["https://theproductbuilders.substack.com"],
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
    </html>
  );
}
