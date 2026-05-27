export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kromastudio.in";

export const SITE_NAME = "KromaStudio";

export const STUDIO_HERO_HEADLINE =
  "Turn Plain Code Into Scroll-Stopping Visuals";

export const STUDIO_MARQUEE_ITEMS = [
  "Premium browser mockups & syntax-highlighted screenshots",
  "Dracula · One Dark Pro · GitHub Dark · Night Owl · Tokyo Night",
  "12 gradient backgrounds · Headline overlays · HD PNG export",
  "Animated .webm loops · Float · 3D Tilt · Auto Scroll",
  "100% client-side — your code never leaves your browser",
] as const;

/** Root layout + homepage SEO (studio at `/`) */
export const SITE_META = {
  title: "KromaStudio — Free Scroll-Stopping Code Screenshots & Mockups",
  description:
    "Turn plain code into viral-ready visuals. Syntax themes, gradient backgrounds, browser frames, HD PNG & animated .webm export. Free, instant, 100% client-side — no sign-up.",
  ogTitle: "Turn Plain Code Into Scroll-Stopping Visuals | KromaStudio",
  ogDescription:
    "Paste code or drop a screenshot — get a polished, share-ready visual in seconds. Dracula, One Dark Pro, browser mockups, HD export. Free & client-side.",
  twitterTitle: "KromaStudio — Scroll-Stopping Code & Mockups",
  twitterDescription:
    "Free online studio for aesthetic code screenshots and browser mockups. Themes, gradients, HD PNG & .webm loops — no sign-up, runs in your browser.",
} as const;

export const LANDING_PAGE_META = {
  codeScreenshot: {
    title: "Free Code Screenshot Generator — Syntax Themes & HD Export | KromaStudio",
    description:
      "Create scroll-stopping syntax-highlighted code images in seconds. Dracula, One Dark Pro, GitHub Dark & more. Gradient backgrounds, headline overlays, 2× PNG export — free & client-side.",
  },
  browserMockup: {
    title: "Free Browser Mockup Generator — macOS & Windows Frames | KromaStudio",
    description:
      "Wrap any screenshot in premium macOS, Windows, or minimal browser frames. Gradient backgrounds, shadows, and HD PNG export. Free online — nothing leaves your browser.",
  },
  howItWorks: {
    title: "How to Make Scroll-Stopping Code Screenshots | KromaStudio",
    description:
      "Three steps to beautiful code screenshots and browser mockups — paste, customize with Dracula or One Dark Pro, export HD PNG or animated .webm. Free, no sign-up.",
  },
  privacy: {
    title: "Privacy Policy | KromaStudio",
    description:
      "How KromaStudio handles analytics, ads, and your data. Your code and images are processed locally — nothing is uploaded to our servers.",
  },
  terms: {
    title: "Terms of Use | KromaStudio",
    description:
      "Terms for using KromaStudio — the free, client-side code screenshot and browser mockup generator. No account required.",
  },
} as const;

export const OG_IMAGE = "/og-image.png";

export type RouteAnalyticsType = "studio" | "landing" | "legal" | "system";

export const ROUTE_ANALYTICS: Record<
  string,
  { id: string; type: RouteAnalyticsType }
> = {
  "/": { id: "studio", type: "studio" },
  "/code-screenshot-generator": {
    id: "code_screenshot_landing",
    type: "landing",
  },
  "/browser-mockup-generator": {
    id: "browser_mockup_landing",
    type: "landing",
  },
  "/how-it-works": { id: "how_it_works", type: "landing" },
  "/privacy": { id: "privacy", type: "legal" },
  "/terms": { id: "terms", type: "legal" },
};

export function getRouteAnalytics(pathname: string) {
  if (ROUTE_ANALYTICS[pathname]) {
    return ROUTE_ANALYTICS[pathname];
  }
  return { id: "not_found", type: "system" as const };
}

export function getDestinationRouteId(href: string) {
  return ROUTE_ANALYTICS[href]?.id ?? "unknown";
}

export const PUBLIC_ROUTES = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  {
    path: "/code-screenshot-generator",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/browser-mockup-generator",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/how-it-works",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
];
