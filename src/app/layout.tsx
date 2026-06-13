import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { Seo } from "@/components/Seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Editorial display serif (optical sizing for large headlines)
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kendesigners.com"),
  title: {
    default:
      "Ken Designers — Award-winning Web Design & Development in Kenya",
    template: "%s — Ken Designers",
  },
  description:
    "Ken Designers is Kenya's award-winning web design studio building modern websites, web apps, e-commerce stores, and AI tools. Led by Ken Murithi, Best Website Developer 2025.",
  keywords: [
    "web design Kenya",
    "website developer Kenya",
    "best website developer Kenya",
    "web design agency Nairobi",
    "ecommerce website developer Kenya",
    "web developer Nairobi",
    "website design Nairobi",
    "AI tools developer Kenya",
    "Ken Murithi",
    "Ken Designers",
  ],
  authors: [{ name: "Ken Murithi" }],
  creator: "Ken Murithi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ken Designers",
    title: "Ken Designers — Award-winning Web Design & Development in Kenya",
    description:
      "Modern websites, web apps, e-commerce, and AI tools. Led by Ken Murithi, Kenya's Best Website Developer 2025.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ken Designers" }],
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Designers — Award-winning Web Design in Kenya",
    description:
      "Modern websites, web apps, e-commerce, and AI tools by Ken Murithi.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Seo />
        <Nav />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <AiAssistant />
      </body>
    </html>
  );
}
