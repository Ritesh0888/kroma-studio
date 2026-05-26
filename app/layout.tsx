import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://kromastudio.in"),
  title: "KromaStudio | Aesthetic Code Screenshots & Mockup Generator",
  description:
    "Turn your code snippets and screenshots into stunning aesthetic visuals. Syntax-highlighted code screenshots with Dracula, One Dark Pro, GitHub Dark & more. Free browser mockup generator — 100% client-side, zero sign-up.",
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
  ],
  authors: [{ name: "KromaStudio", url: "https://kromastudio.in" }],
  creator: "KromaStudio",
  category: "Design Tools",
  alternates: {
    canonical: "https://kromastudio.in",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "KromaStudio | Aesthetic Mockups Instantly",
    description:
      "Stop posting boring screenshots. Paste your code — get a stunning syntax-highlighted card with Dracula, One Dark Pro & more themes. Browser mockups too. Free, runs in your browser.",
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
      "Paste code → get a beautiful syntax-highlighted screenshot. Dracula, One Dark Pro, GitHub Dark & more. Browser mockups too. Free, client-side.",
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
    "Free online tool to create syntax-highlighted code screenshots and browser mockups. Supports Dracula, One Dark Pro, GitHub Dark, Night Owl, and Tokyo Night themes. Export HD PNG — 100% client-side, no sign-up.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Browser frame mockups — macOS Dark, macOS Light, Windows, Minimal styles",
    "Syntax-highlighted code screenshots",
    "Code themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night",
    "Supported languages: JavaScript, TypeScript, Python, HTML, CSS, Go, Rust",
    "Headline text overlay for social posts",
    "12 aesthetic gradient background presets",
    "Line numbers toggle",
    "HD PNG export at 2× resolution",
    "Animated video export — Float, 3D Tilt, Auto-Scroll loops as .webm",
    "Mobile-friendly — native share to Photos on iOS & Android",
    "100% client-side — no upload, no sign-up",
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
        {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
