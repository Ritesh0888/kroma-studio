"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

export function ExportHintBanner() {
  const showExportHint = useStudioStore((s) => s.showExportHint);
  const setShowExportHint = useStudioStore((s) => s.setShowExportHint);
  const mode = useStudioStore((s) => s.mode);
  const uploadedImage = useStudioStore((s) => s.uploadedImage);

  if (!showExportHint || mode !== "mockup" || !uploadedImage) return null;

  function dismiss(source: "desktop" | "mobile") {
    track("export_hint_dismiss", { source });
    setShowExportHint(false);
  }

  return (
    <div
      className="pointer-events-none absolute bottom-3 left-3 right-3 z-20 md:bottom-4 md:left-1/2 md:right-auto md:w-auto md:max-w-md md:-translate-x-1/2"
    >
      <div className="pointer-events-auto flex flex-col gap-2 rounded-xl border border-neon-purple/30 bg-[#0f0f0f]/95 px-3 py-2.5 shadow-lg shadow-black/30 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-3 sm:px-4">
        <p className="text-xs leading-snug text-text-muted">
          <span className="md:hidden">
            Screenshot added — tap{" "}
            <span className="font-semibold text-white">Export PNG</span> in the top bar.
          </span>
          <span className="hidden md:inline">
            Screenshot added — use{" "}
            <span className="font-semibold text-white">Export HD PNG</span> in the right panel →
          </span>
        </p>
        <button
          type="button"
          onClick={() => dismiss(typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? "desktop" : "mobile")}
          className="shrink-0 self-end text-[10px] font-semibold uppercase tracking-wider text-border hover:text-white sm:self-center"
          aria-label="Dismiss export hint"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
