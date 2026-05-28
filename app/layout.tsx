import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RoutePageView } from "@/components/analytics/RoutePageView";
import { getRootJsonLd } from "@/lib/json-ld";
import { OG_IMAGE, SITE_META, SITE_NAME, SITE_URL } from "@/lib/site";
import { ADSENSE_CLIENT, isAdsenseEnabled } from "@/lib/ads-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_META.title,
  description: SITE_META.description,
  keywords: [
    "code mockup generator",
    "aesthetic screenshot editor",
    "browser frame mockup",
    "syntax highlighted code screenshot",
    "code to image online",
    "code screenshot maker free",
    "beautiful code screenshots",
    "code snippet to image",
    "dracula theme screenshot",
    "code snippet beautifier",
    "browser mockup online",
    "macos browser mockup",
    "windows browser mockup",
    "tweet screenshot maker",
    "aesthetic video loop maker",
    "animated code screenshot",
    "code screenshot mobile",
    "code image generator no signup",
    // Competitor alternatives
    "carbon.now.sh alternative",
    "ray.so alternative",
    "snappify alternative",
    "carbon alternative privacy",
    // Privacy USP
    "privacy code screenshot",
    "100% client side code screenshot",
    "code screenshot no server upload",
    "code screenshot client side processing",
    "secure code screenshot generator",
    // Unique features
    "code screenshot animated video",
    "code screenshot .webm export",
    "code screenshot with headline overlay",
    "code screenshot with gradients",
    // Broad
    "free code screenshot generator",
    "code screenshot online tool",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  category: "Design Tools",
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: SITE_META.ogTitle,
    description: SITE_META.ogDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
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
    title: SITE_META.twitterTitle,
    description: SITE_META.twitterDescription,
    images: [OG_IMAGE],
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

const jsonLd = getRootJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      </head>
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
        {isAdsenseEnabled() && ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <RoutePageView />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
