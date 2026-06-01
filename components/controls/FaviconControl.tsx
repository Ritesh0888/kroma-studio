"use client";

import { useRef } from "react";
import { useStudioStore } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

const STYLES_WITH_FAVICON = new Set(["chrome", "firefox", "arc"]);

export function FaviconControl() {
  const chromeStyle = useStudioStore((s) => s.chromeStyle);
  const faviconDataUrl = useStudioStore((s) => s.faviconDataUrl);
  const setFaviconDataUrl = useStudioStore((s) => s.setFaviconDataUrl);
  const inputRef = useRef<HTMLInputElement>(null);

  if (!STYLES_WITH_FAVICON.has(chromeStyle)) return null;

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result as string;
      setFaviconDataUrl(url);
      track("favicon_upload", { style: chromeStyle });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Tab Favicon
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      {faviconDataUrl ? (
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={faviconDataUrl}
            alt="Favicon preview"
            className="w-6 h-6 rounded object-contain border border-border bg-surface p-0.5"
          />
          <button
            onClick={() => inputRef.current?.click()}
            className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-[11px] text-text-muted hover:border-neon-purple hover:text-white transition-colors text-left"
          >
            Change favicon
          </button>
          <button
            onClick={() => { setFaviconDataUrl(null); track("favicon_remove"); }}
            className="rounded-lg border border-border bg-surface px-2 py-2 text-[11px] text-text-muted hover:border-red-500/50 hover:text-red-400 transition-colors"
            aria-label="Remove favicon"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-2 rounded-lg border border-dashed border-border bg-surface px-3 py-2 text-[11px] text-text-muted hover:border-neon-purple hover:text-white transition-colors"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Upload favicon (PNG, SVG, ICO)
        </button>
      )}
    </div>
  );
}
