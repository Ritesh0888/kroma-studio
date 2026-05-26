import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://kromastudio.in"),
  title: "KromaStudio | Aesthetic Code Screenshots & Mockup Generator",
  description:
    "Turn raw code, screenshots, and tweets into stunning, professional graphics and animations. Free browser mockup generator — 100% client-side, zero sign-up.",
  keywords: [
    "code mockup generator",
    "aesthetic screenshot editor",
    "browser frame mockup",
    "tweet screenshot maker",
    "code snippet beautifier",
    "browser mockup online",
    "aesthetic video loop maker",
  ],
  authors: [{ name: "KromaStudio", url: "https://kromastudio.in" }],
  creator: "KromaStudio",
  category: "Design Tools",
  alternates: {
    canonical: "https://kromastudio.in",
  },
  openGraph: {
    title: "KromaStudio | Aesthetic Mockups Instantly",
    description:
      "Stop posting boring screenshots. Make them pop with premium backgrounds and layouts. Free browser mockup generator — runs entirely in your browser.",
    url: "https://kromastudio.in",
    siteName: "KromaStudio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KromaStudio Interface Preview — Aesthetic Code & Browser Mockup Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KromaStudio | Aesthetic Code & Mockups",
    description:
      "Generate browser frame mockups and aesthetic screenshots for free. 100% client-side, no upload needed.",
    images: ["/og-image.png"],
    site: "@KromaStudio",
    creator: "@KromaStudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KromaStudio",
  url: "https://kromastudio.in",
  operatingSystem: "Browser",
  applicationCategory: "DesignApplication",
  browserRequirements: "Requires HTML5 canvas support",
  description:
    "Free online browser mockup and aesthetic screenshot generator. Turn code, screenshots, and content into premium graphic assets — 100% client-side.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Browser frame mockups",
    "Code snippet beautifier",
    "Aesthetic background presets",
    "HD PNG export",
    "100% client-side processing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full overflow-hidden bg-black text-white antialiased`}
      >
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVCK4NV505"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVCK4NV505');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
