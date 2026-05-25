"use client";

import { useExport } from "@/hooks/useExport";
import { useStudioStore } from "@/store/useStudioStore";
import { ImageExportModal } from "@/components/ui/ImageExportModal";

export function MobileHeader() {
  const { exportPng, exportedImageUrl, clearExportedImage } = useExport();
  const isExporting = useStudioStore((s) => s.isExporting);

  return (
    <>
      <header className="flex md:hidden items-center justify-between px-4 h-12 bg-[#080808] border-b border-[#1a1a1a] shrink-0 z-30">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-white tracking-tight">
            Kroma
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
              Studio
            </span>
          </span>
        </div>

        {/* Export button */}
        <button
          onClick={exportPng}
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
