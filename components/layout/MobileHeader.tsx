"use client";

import { useExport } from "@/hooks/useExport";
import { useStudioStore } from "@/store/useStudioStore";
import { ImageExportModal } from "@/components/ui/ImageExportModal";
import { track } from "@/lib/analytics";

export function MobileHeader() {
  const { exportPng, exportedImageUrl, clearExportedImage } = useExport();
  const isExporting = useStudioStore((s) => s.isExporting);

  return (
    <>
      <header className="flex md:hidden items-center justify-between px-4 h-12 bg-[#080808] border-b border-[#1a1a1a] shrink-0 z-30">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="KromaStudio Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-md object-cover"
          />
          <span className="text-sm font-bold text-white tracking-tight">
            Kroma
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
              Studio
            </span>
          </span>
        </div>

        {/* Export button */}
        <button
          onClick={() => { track("export_png_click", { source: "mobile" }); exportPng(); }}
          disabled={isExporting}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            isExporting
              ? "bg-[#1a0033] text-[#a855f7]/50 border border-[#a855f7]/20"
              : "bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-md shadow-[#a855f7]/20 active:scale-95"
          }`}
        >
          {isExporting ? (
            <>
              <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Rendering…
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export PNG
            </>
          )}
        </button>
      </header>

      {exportedImageUrl && (
        <ImageExportModal imageUrl={exportedImageUrl} onClose={clearExportedImage} />
      )}
    </>
  );
}
