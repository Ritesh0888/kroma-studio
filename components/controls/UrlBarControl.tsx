"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

const STYLES_WITH_URL_BAR = new Set([
  "chrome", "safari", "firefox", "arc", "macos-dark", "macos-light", "windows",
]);

export function UrlBarControl() {
  const chromeStyle = useStudioStore((s) => s.chromeStyle);
  const urlBarText = useStudioStore((s) => s.urlBarText);
  const setUrlBarText = useStudioStore((s) => s.setUrlBarText);

  if (!STYLES_WITH_URL_BAR.has(chromeStyle)) return null;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        URL Bar
      </label>
      <input
        type="text"
        value={urlBarText}
        onChange={(e) => setUrlBarText(e.target.value)}
        onBlur={() => track("url_bar_text_change", { value: urlBarText })}
        placeholder="yourapp.com"
        className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-xs text-white placeholder-text-muted outline-none focus:border-neon-purple transition-colors"
        maxLength={80}
      />
    </div>
  );
}
