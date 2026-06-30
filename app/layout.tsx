import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Google Fonts: Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome Icons */}
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
