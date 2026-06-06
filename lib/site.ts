export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kromastudio.in";

export const SITE_NAME = "KromaStudio";

export const GITHUB_REPO_URL = "https://github.com/Ritesh0888/kroma-studio";

export const PRODUCT_HUNT_URL =
  "https://www.producthunt.com/products/kromastudio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-kromastudio";

export const PRODUCT_HUNT_BADGE_IMG =
  "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1159807&theme=dark";

export const PRODUCT_HUNT_BADGE_ALT =
  "KromaStudio on Product Hunt — Turn code snippets into aesthetic screenshots and mockups";

export const SAASHUB_URL =
  "https://www.saashub.com/kromastudio-in?utm_source=badge&utm_campaign=badge&utm_content=kromastudio-in&badge_variant=dark&badge_kind=approved";

export const SAASHUB_BADGE_IMG =
  "https://cdn-b.saashub.com/img/badges/approved-dark.png?v=1";

export const SAASHUB_BADGE_ALT =
  "KromaStudio on SaaSHub";

/** Footer copyright line — year updates automatically */
export const SITE_COPYRIGHT = `© ${new Date().getFullYear()} ${SITE_NAME}`;

/** Shorter or spaced variants for Google Site Name structured data */
export const SITE_ALTERNATE_NAMES = ["Kroma Studio"] as const;

export const STUDIO_HERO_HEADLINE =
  "Turn Plain Code Into Scroll-Stopping Visuals";

/** Homepage h1 — brand first so Google can associate the site name */
export const STUDIO_HERO_H1 = `${SITE_NAME} — ${STUDIO_HERO_HEADLINE}`;

export const STUDIO_MARQUEE_ITEMS = [
  "Premium browser mockups & syntax-highlighted screenshots",
  "15 themes: Dracula · Catppuccin · Nord · Monokai · Tokyo Night · Synthwave '84 · Rosé Pine · and more",
  "12 gradient backgrounds · Headline overlays · HD PNG export",
  "Animated .webm loops · Float · 3D Tilt · Auto Scroll",
  "100% client-side — your code never leaves your browser",
] as const;

/** Root layout + homepage SEO (studio at `/`) */
export const SITE_META = {
  title: "KromaStudio — Free Code Screenshot Generator, Mockups & Social Post Cards",
  description:
    "Turn plain code into viral-ready visuals. Syntax themes, gradient backgrounds, browser frames, social post cards (Tweet, LinkedIn, Metrics & more), HD PNG & animated .webm export. Free, instant, 100% client-side — no sign-up.",
  ogTitle: "Turn Plain Code & Ideas Into Scroll-Stopping Visuals | KromaStudio",
  ogDescription:
    "Paste code or drop a screenshot — get a polished, share-ready visual in seconds. Dracula, One Dark Pro, browser mockups, social post cards, HD export. Free & client-side.",
  twitterTitle: "KromaStudio — Code Screenshots, Mockups & Social Cards",
  twitterDescription:
    "Free online studio for aesthetic code screenshots, browser mockups, and social post cards. Themes, gradients, HD PNG & .webm loops — no sign-up, runs in your browser.",
} as const;

export const LANDING_PAGE_META = {
  codeScreenshot: {
    title: "Free Code Screenshot Generator — Dracula, One Dark Pro & 15 Themes | KromaStudio",
    description:
      "Turn code into beautiful PNG screenshots or animated .webm — 15 themes including Dracula, One Dark Pro, Catppuccin. 25 languages, headline overlays, gradient backgrounds. 100% client-side, free, no sign-up.",
  },
  browserMockup: {
    title: "Free Browser Mockup Generator — Chrome, Safari & macOS Frames | KromaStudio",
    description:
      "Wrap screenshots in Chrome, Safari, Firefox, Arc, macOS, or Windows browser frames. Gradient backgrounds, shadows, HD PNG export. Free, no sign-up — runs entirely in your browser.",
  },
  contentPost: {
    title: "Free Social Post Generator — Tweet, LinkedIn, Metrics & 10 Templates | KromaStudio",
    description:
      "Create tweet cards, LinkedIn posts, announcement graphics, metrics snapshots, and more. Customize author, avatar, accent color, export HD PNG or animated .webm. Free, no sign-up, 100% client-side.",
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
  raySoAlternative: {
    title: "Ray.so Alternative — Free Code Screenshots | KromaStudio",
    description:
      "Compare KromaStudio vs Ray.so. Code screenshots, browser mockups, social post cards, and animated .webm export — free, 100% client-side, no sign-up.",
  },
  carbonAlternative: {
    title: "Carbon.now.sh Alternative — Free Code Screenshots | KromaStudio",
    description:
      "Compare KromaStudio vs Carbon. Code screenshots, browser mockups, social post cards, and animated .webm export — free, 100% client-side, no sign-up.",
  },
  snappifyAlternative: {
    title: "Snappify Alternative — Free Code Screenshots & Video | KromaStudio",
    description:
      "Compare KromaStudio vs Snappify. Export beautiful code screenshots and animated .webm videos for free, with no watermarks and no sign-up.",
  },
  secureCodeScreenshot: {
    title: "Secure Code Screenshot Generator — 100% Client-Side | KromaStudio",
    description:
      "Generate beautiful code screenshots locally. Your code never leaves your browser. Zero uploads, no server rendering, 100% private. Free, no sign-up.",
  },
  animatedCodeScreenshot: {
    title: "Animated Code Screenshot Generator — Export .webm | KromaStudio",
    description:
      "Create beautiful animated code screenshots in seconds. 60fps looping .webm video, 3D Tilt, Float, Auto Scroll presets. 100% free and no watermarks.",
  },
  github: {
    title: "KromaStudio on GitHub — MIT Open Source | KromaStudio",
    description:
      "View the KromaStudio source on GitHub. MIT licensed — fork, self-host, or contribute. Code screenshots, browser mockups, and social templates.",
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
  "/content-post-generator": {
    id: "content_post_landing",
    type: "landing",
  },
  "/how-it-works": { id: "how_it_works", type: "landing" },
  "/ray-so-alternative": { id: "ray_so_alternative", type: "landing" },
  "/carbon-alternative": { id: "carbon_alternative", type: "landing" },
  "/snappify-alternative": { id: "snappify_alternative", type: "landing" },
  "/secure-code-screenshot-generator": { id: "secure_code_screenshot_landing", type: "landing" },
  "/animated-code-screenshot": { id: "animated_code_screenshot_landing", type: "landing" },
  "/github-kroma-studio": { id: "github_kroma_studio", type: "landing" },
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
  { path: "", changeFrequency: "weekly" as const, priority: 1.0, pageFile: "app/page.tsx" },
  {
    path: "/code-screenshot-generator",
    changeFrequency: "monthly" as const,
    priority: 0.9,
    pageFile: "app/code-screenshot-generator/page.tsx",
  },
  {
    path: "/browser-mockup-generator",
    changeFrequency: "monthly" as const,
    priority: 0.9,
    pageFile: "app/browser-mockup-generator/page.tsx",
  },
  {
    path: "/content-post-generator",
    changeFrequency: "monthly" as const,
    priority: 0.9,
    pageFile: "app/content-post-generator/page.tsx",
  },
  {
    path: "/how-it-works",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    pageFile: "app/how-it-works/page.tsx",
  },
  {
    path: "/ray-so-alternative",
    changeFrequency: "monthly" as const,
    priority: 0.85,
    pageFile: "app/ray-so-alternative/page.tsx",
  },
  {
    path: "/carbon-alternative",
    changeFrequency: "monthly" as const,
    priority: 0.85,
    pageFile: "app/carbon-alternative/page.tsx",
  },
  {
    path: "/snappify-alternative",
    changeFrequency: "monthly" as const,
    priority: 0.85,
    pageFile: "app/snappify-alternative/page.tsx",
  },
  {
    path: "/secure-code-screenshot-generator",
    changeFrequency: "monthly" as const,
    priority: 0.85,
    pageFile: "app/secure-code-screenshot-generator/page.tsx",
  },
  {
    path: "/animated-code-screenshot",
    changeFrequency: "monthly" as const,
    priority: 0.85,
    pageFile: "app/animated-code-screenshot/page.tsx",
  },
  {
    path: "/github-kroma-studio",
    changeFrequency: "monthly" as const,
    priority: 0.5,
    pageFile: "app/github-kroma-studio/page.tsx",
  },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3, pageFile: "app/privacy/page.tsx" },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3, pageFile: "app/terms/page.tsx" },
];
