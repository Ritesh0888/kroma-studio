import { track as vercelTrack } from "@vercel/analytics";

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
