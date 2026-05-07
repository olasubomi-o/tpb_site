import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
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
  title: "The Product Builders — Fortune 500 Operators Now Building With You",
  description:
    "We've shipped inside Apple, Mastercard, Toyota, and Warner Bros. Now we bring that operator edge to your product — AI systems, digital strategy, and product development that creates durable competitive advantage.",
  keywords: "product strategy, product development, AI implementation, product design, Fortune 500, enterprise product consulting",
  openGraph: {
    title: "The Product Builders",
    description: "Fortune 500 Operators. Now Building With You.",
    type: "website",
  },
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
