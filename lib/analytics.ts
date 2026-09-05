import { track as vercelTrack } from "@vercel/analytics";
import { getDestinationRouteId, getRouteAnalytics } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventProperties = Record<string, string | number | boolean>;

const EDITOR_OPEN_KEY = "ks_analytics_editor_open";
const FIRST_EDIT_KEY = "ks_analytics_first_edit";

export type FirstEditTrigger =
  | "template_apply"
  | "image_upload"
  | "code_language_change"
  | "content_text_edit"
  | "background_change";

/**
 * Send a custom event to both GA4 and Vercel Analytics.
 */
export function track(eventName: string, properties?: EventProperties) {
  // Vercel Analytics
  vercelTrack(eventName, properties);

  // GA4
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag!("event", eventName, properties);
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

  track("page_view", {
    ...properties,
    page_title: typeof document !== "undefined" ? document.title : "",
  });
}

/**
 * Fire once per browser session when the studio editor is opened.
 */
export function trackEditorOpen() {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem(EDITOR_OPEN_KEY)) return;
  sessionStorage.setItem(EDITOR_OPEN_KEY, "1");
  track("editor_open");
}

/**
 * Fire once per browser session on the first meaningful product interaction.
 */
export function trackFirstEdit(trigger: FirstEditTrigger, properties?: EventProperties) {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem(FIRST_EDIT_KEY)) return;
  sessionStorage.setItem(FIRST_EDIT_KEY, trigger);
  track("first_edit", { trigger, ...properties });
}

/**
 * Unique ID linking export_png_click → export_start → success/error.
 */
export function createExportAttemptId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
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
