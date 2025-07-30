import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DiscountBar from "@/components/layout/DiscountBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const interSans = Inter({
  variable: "--font-inter-sans",
});

export const metadata: Metadata = {
  title: "FurniStore — Modern Furniture for Home & Office",
  description:
    "Discover stylish and high-quality furniture at affordable prices. Shop sofas, chairs, tables, and more with fast nationwide delivery.",
  keywords: [
    "furniture",
    "online furniture store",
    "modern furniture",
    "sofas",
    "chairs",
    "tables",
    "FurniStore",
  ],
  authors: [{ name: "FurniStore Team", url: "https://your-site.com" }],
  openGraph: {
    title: "FurniStore — Premium Furniture Online",
    description:
      "Explore a wide range of stylish and affordable furniture for every room. Delivered right to your door.",
    url: "https://your-site.com",
    siteName: "FurniStore",
    images: [
      {
        url: "https://your-site.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FurniStore product banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FurniStore — Shop Modern Furniture",
    description:
      "Stylish furniture for your home and office. Affordable, fast delivery, premium quality.",
    images: ["https://your-site.com/og-image.jpg"],
  },
  metadataBase: new URL("https://your-site.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${interSans.variable} antialiased`}
      >
        <DiscountBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
