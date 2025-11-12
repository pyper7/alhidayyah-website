import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Work_Sans, Amiri } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const workSans = Work_Sans({ 
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-button",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al-Hidaayah Islamic Foundation",
  description: "Join Us As We Shape The World Into A Better Place. Providing Dawah, Orphanage care, and quality Islamic education through Riyad Saliheen School.",
  keywords: ["Islamic Foundation", "Dawah", "Orphanage", "Islamic Education", "Riyad Saliheen School"],
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} ${plusJakarta.variable} ${workSans.variable} ${amiri.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

