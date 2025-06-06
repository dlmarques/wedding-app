import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { Alice } from "next/font/google";
import "./globals.css";
const amsterdam = LocalFont({
  src: "./assets/fonts/Amsterdam-One-Font/AmsterdamOne-eZ12l.ttf",
  variable: "--font-amsterdam",
});

const alice = Alice({
  weight: ["400"],
  variable: "--font-alice",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casamento Marta e Daniel",
  description: "Casamento Marta e Daniel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Casamento Marta e Daniel"></meta>
        <meta name="keywords" content="Casamento, Marta, Daniel, 2025"></meta>
        <meta name="author" content="Marta e Daniel"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="googlebot" content="index, follow"></meta>
        <meta name="google" content="notranslate"></meta>
        <meta name="google" content="notranslate"></meta>
      </head>
      <body
        className={`${amsterdam.className} ${alice.className} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
