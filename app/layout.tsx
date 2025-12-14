import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vinarijaaleks.co.rs'),
  title: "Bermet Brka - Vinarija Aleks | Tradicionalno desertno vino i lekovite tinkture",
  description: "Vinarija Aleks - Nenad Ratković 'Brka', najprepoznatljivija ličnost srpske vinske scene. Proizvođač čuvenog bermeta iz Sremskih Karlovaca, lekovitih tinktura i prirodnih preparata. Kraljevski opskrbljivač od 2008. godine.",
  keywords: [
    "bermet",
    "vinarija aleks",
    "nenad ratković",
    "brka",
    "aleks bermet",
    "sremski karlovci",
    "desertno vino",
    "lekovito bilje",
    "tinkture",
    "crni orah",
    "čagi gljiva",
    "kraljevski opskrbljivač",
    "tradicionalno vino",
    "prirodni lek",
    "afrodizijak",
    "crveni bermet",
    "beli bermet",
    "vermut",
    "likerno vino",
    "serbia wine"
  ],
  authors: [{ name: "Vinarija Aleks" }],
  creator: "Vinarija Aleks",
  publisher: "Vinarija Aleks",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.vinarijaaleks.co.rs/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.vinarijaaleks.co.rs/",
    siteName: "Bermet Brka - Vinarija Aleks",
    title: "Bermet Brka - Vinarija Aleks | Tradicionalno desertno vino",
    description: "Nenad Ratković 'Brka' - čuvar tradicije bermeta i lekovitog bilja. Kraljevski opskrbljivač od 2008. Tradicionalno desertno vino i lekovite tinkture iz Sremskih Karlovaca.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bermet Brka - Vinarija Aleks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bermet Brka - Vinarija Aleks | Tradicionalno desertno vino",
    description: "Nenad Ratković 'Brka' - čuvar tradicije bermeta i lekovitog bilja. Kraljevski opskrbljivač od 2008.",
    images: ["/hero.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <CartProvider>
          <Header />
          {children}
          <ButtonToTop />
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
