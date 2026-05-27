import { track as vercelTrack } from "@vercel/analytics";
import { getDestinationRouteId, getRouteAnalytics } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventProperties = Record<string, string | number | boolean>;

/**
 * Send a custom event to both GA4 and Vercel Analytics.
 */
export function track(eventName: string, properties?: EventProperties) {
  // Vercel Analytics
  vercelTrack(eventName, properties);

  // GA4
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, properties);
  }
}

/**
 * Track a route page view on client-side navigation and initial load.
 */
export function trackPageView(pathname: string) {
  const route = getRouteAnalytics(pathname);
  const properties: EventProperties = {
    path: pathname,
    route_id: route.id,
    route_type: route.type,
  };

  track("page_view", properties);

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_title: document.title,
    });
  }
}

/**
 * Track navigation link clicks with destination context.
 */
export function trackNavClick(href: string, label: string, location: string) {
  track("nav_click", {
    href,
    label,
    location,
    destination_route_id: getDestinationRouteId(href),
  });
}
