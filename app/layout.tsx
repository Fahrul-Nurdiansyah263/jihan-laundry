import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jihan Laundry - Bersih, Harum, Rapi & Higienis | Mampang Prapatan",
  description:
    "Jihan Laundry menyediakan layanan laundry profesional di area Mampang Prapatan & Kuningan, Jakarta Selatan. Antar jemput, express 6 jam, dry clean, cuci sepatu. Higenis, rapi, dan wangi!",
  keywords: [
    "laundry mampang",
    "laundry kuningan",
    "jasa laundry jakarta selatan",
    "cuci baju antar jemput",
    "laundry express",
  ],
  openGraph: {
    title: "Jihan Laundry - Bersih, Harum, Rapi & Higienis",
    description:
      "Layanan laundry profesional terpercaya di Mampang Prapatan & Kuningan. Antar jemput, express, dry clean.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Font Awesome Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
