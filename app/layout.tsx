import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blockprint — Interaktive Minecraft Bauanleitungen",
    template: "%s | Blockprint",
  },
  description:
    "Erstelle, teile und verfolge detaillierte Schritt-für-Schritt Minecraft Bauanleitungen mit dynamischen Materiallisten im Klemmbaustein-Stil.",
  keywords: [
    "Minecraft",
    "Bauanleitungen",
    "Minecraft Builds",
    "Schritt für Schritt",
    "Materialliste",
    "Blockprint",
    "Voxel",
    "Klemmbausteine",
  ],
  authors: [{ name: "Sebastian Götze" }],
  openGraph: {
    title: "Blockprint — Interaktive Minecraft Bauanleitungen",
    description:
      "Bauen leicht gemacht: Interaktive Schritt-für-Schritt Anleitungen und präzise Materiallisten für deine Minecraft-Projekte.",
    siteName: "Blockprint",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockprint — Interaktive Minecraft Bauanleitungen",
    description:
      "Interaktive Schritt-für-Schritt Anleitungen und Materiallisten für deine Minecraft-Projekte.",
  },
};

const minecraftFont = localFont({
  src: "../fonts/Minecraft-Seven_v2.woff2",
  variable: "--font-minecraft",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${minecraftFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0d0f12] flex flex-col md:p-8 p-4">
        <Navbar />
        <main className="mt-36">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
