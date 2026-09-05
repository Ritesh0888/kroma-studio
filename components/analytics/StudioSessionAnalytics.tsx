"use client";

import { useEffect } from "react";
import { trackEditorOpen } from "@/lib/analytics";

/**
 * Fires editor_open once per browser session when the studio mounts.
 */
export function StudioSessionAnalytics() {
  useEffect(() => {
    trackEditorOpen();
  }, []);

  return null;
}
