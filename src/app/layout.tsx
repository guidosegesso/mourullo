import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mourullo | Soluciones en Telgopor",
  description:
    "Fabricacion y comercializacion de productos de telgopor para embalaje, construccion y usos industriales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${merriweather.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
