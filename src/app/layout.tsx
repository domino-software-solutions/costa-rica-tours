import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Costa Rica Tours | Experience Pura Vida",
  description: "Discover the natural beauty of Costa Rica with our guided tours - rainforests, beaches, volcanoes, and wildlife adventures.",
  keywords: "Costa Rica tours, eco tourism, rainforest tours, beach adventures, volcano tours",
  openGraph: {
    title: "Costa Rica Tours | Experience Pura Vida",
    description: "Discover the natural beauty of Costa Rica with our guided tours - rainforests, beaches, volcanoes, and wildlife adventures.",
    images: [
      {
        url: "/BlueSkyRiver.jpg",
        width: 1200,
        height: 630,
        alt: "Costa Rica Blue Sky River",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Costa Rica Tours | Experience Pura Vida",
    description: "Discover the natural beauty of Costa Rica with our guided tours - rainforests, beaches, volcanoes, and wildlife adventures.",
    images: ["/BlueSkyRiver.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
