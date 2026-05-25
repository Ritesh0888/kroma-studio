"use client";

import { useExport } from "@/hooks/useExport";
import { useStudioStore } from "@/store/useStudioStore";

function AdPlaceholder({ label, height }: { label: string; height: string }) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center border border-dashed border-[#1e1e1e] rounded-lg bg-[#080808] text-center"
      style={{ height }}
    >
      <div className="w-8 h-8 rounded-md bg-[#111] flex items-center justify-center mb-2">
        <svg className="w-4 h-4 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
        </svg>
      </div>
      <span className="text-[9px] text-[#2a2a2a] uppercase tracking-widest">{label}</span>
    </div>
  );
}

export function RightSidebar() {
  const { exportPng } = useExport();
  const isExporting = useStudioStore((s) => s.isExporting);
  const uploadedImage = useStudioStore((s) => s.uploadedImage);

  return (
    <aside className="w-[20%] h-full flex flex-col bg-[#080808] border-l border-[#1a1a1a] shrink-0 overflow-y-auto">
      {/* Export section */}
      <div className="px-4 py-5 border-b border-[#1a1a1a]">
        <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest mb-3">
          Export
        </p>

        {/* Primary Export Button */}
        <button
          onClick={exportPng}
          disabled={isExporting}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all relative overflow-hidden group ${
            isExporting
              ? "bg-[#1a0033] border border-[#a855f7]/30 text-[#a855f7]/60 cursor-not-allowed"
              : "bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#a855f7]/20"
          }`}
        >
          {isExporting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Rendering…
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export HD PNG
            </span>
          )}
        </button>

        {!uploadedImage && (
          <p className="text-[10px] text-[#3a3a3a] text-center mt-2">
            Drop an image to get started
          </p>
        )}

        {/* Export details */}
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {[
            ["Format", "PNG"],
            ["Scale", "2×"],
            ["Quality", "100%"],
            ["Source", "Client"],
          ].map(([k, v]) => (
            <div key={k} className="bg-[#0f0f0f] rounded-lg px-2.5 py-2 border border-[#1a1a1a]">
              <p className="text-[9px] text-[#4a4a4a] uppercase tracking-wider">{k}</p>
              <p className="text-xs font-semibold text-[#a0a0a0] mt-0.5">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coming soon: video */}
      <div className="px-4 py-4 border-b border-[#1a1a1a]">
        <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest mb-3">
          Animated Video
        </p>
        <div className="w-full py-3 px-4 rounded-xl border border-dashed border-[#1e1e1e] bg-[#0a0a0a] flex flex-col items-center gap-1.5">
          <svg
            className="w-5 h-5 text-[#2a2a2a]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 9.75v9A2.25 2.25 0 004.5 18.75z"
            />
          </svg>
          <span className="text-[10px] text-[#2a2a2a] font-medium">Phase 3</span>
        </div>
      </div>

      {/* Ad zones */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-4">
        <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest">
          Sponsored
        </p>
        <AdPlaceholder label="Display Ad · 300×250" height="160px" />
        <AdPlaceholder label="Display Ad · 300×600" height="220px" />
      </div>

      {/* Bottom brand */}
      <div className="px-4 py-3 border-t border-[#1a1a1a] shrink-0">
        <p className="text-[10px] text-[#2a2a2a] text-center">
          kromastudio.online
        </p>
      </div>
    </aside>
  );
}
