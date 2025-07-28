import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Marketing digital en Cusco | mydrumz",
  description:
    "Diseño gráfico en Cusco y producción musical en Cusco. mydrumz impulsa tu proyecto con estilo profesional.",
  openGraph: {
    title: "Marketing digital en Cusco | mydrumz",
    description:
      "Diseño gráfico en Cusco y producción musical en Cusco. mydrumz impulsa tu proyecto con estilo profesional.",
    url: "https://mydrumz.com",
    type: "website",
    images: [
      {
        url: "https://mydrumz.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing digital en Cusco | mydrumz",
    description:
      "Diseño gráfico en Cusco y producción musical en Cusco. mydrumz impulsa tu proyecto con estilo profesional.",
    images: ["https://mydrumz.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{/* JSON-LD LocalBusiness */}
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MyDrumz",
            description:
              "Consultoría creativa: marketing digital, web, diseño visual y producción musical en Cusco.",
            url: "https://mydrumz.com",
            telephone: "+51984397692",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Cinco, Edificio Torres del Sol II",
              addressLocality: "Cusco",
              postalCode: "08006",
              addressRegion: "Cusco",
              addressCountry: "PE",
            },
            sameAs: ["https://www.instagram.com/mydrumz"],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
