export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kromastudio.in";

export const SITE_NAME = "KromaStudio";

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
