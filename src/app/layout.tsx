import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umbral — Propiedades con intención",
  description:
    "Propiedades seleccionadas con fotografías cuidadas, datos claros y asesoría para llegar a la visita con una decisión más informada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-manrope)] antialiased">
        <div className="noise-layer" />
        {children}
      </body>
    </html>
  );
}