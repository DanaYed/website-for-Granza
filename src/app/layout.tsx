import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Granza — Organic Extra Virgin Olive Oil",
  description:
    "Granza brings you premium organic extra virgin olive oil, hand-harvested from terraced mountain groves in Greece. Pure taste. Extraordinary quality.",
  keywords: [
    "organic olive oil",
    "extra virgin",
    "Greek olive oil",
    "premium",
    "Granza",
  ],
  openGraph: {
    title: "Granza — Organic Extra Virgin Olive Oil",
    description:
      "Premium organic extra virgin olive oil from the mountain slopes of Greece.",
    siteName: "Granza",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
