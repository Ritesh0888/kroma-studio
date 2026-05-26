"use client";

import { useExport } from "@/hooks/useExport";
import { useStudioStore } from "@/store/useStudioStore";
import { ImageExportModal } from "@/components/ui/ImageExportModal";
import { AnimationControls } from "@/components/controls/AnimationControls";
import { useVideoRecorder } from "@/hooks/useVideoRecorder";
import { track } from "@/lib/analytics";
import { AdZone } from "@/components/ads/AdZone";
import { useAutoRefreshAds } from "@/hooks/useAutoRefreshAds";

const SIDEBAR_TOP_AD_ID = "ad-right-sidebar-top";
const SIDEBAR_BOTTOM_AD_ID = "ad-right-sidebar-bottom";

export function RightSidebar() {
  const { exportPng, exportedImageUrl, clearExportedImage } = useExport();
  const isExporting = useStudioStore((s) => s.isExporting);
  const uploadedImage = useStudioStore((s) => s.uploadedImage);
  const isRecording = useStudioStore((s) => s.isRecording);
  const animationPreset = useStudioStore((s) => s.animationPreset);
  const recordDuration = useStudioStore((s) => s.recordDuration);
  const watermarkVisible = useStudioStore((s) => s.watermarkVisible);
  const setWatermarkVisible = useStudioStore((s) => s.setWatermarkVisible);
  const setShowWatermarkModal = useStudioStore((s) => s.setShowWatermarkModal);
  const { startRecording, isSafari } = useVideoRecorder();
  const adRefreshKeys = useAutoRefreshAds([SIDEBAR_TOP_AD_ID, SIDEBAR_BOTTOM_AD_ID]);

  const handleWatermarkClick = () => {
    if (watermarkVisible) {
      track("watermark_modal_open", { source: "desktop" });
      setShowWatermarkModal(true);
      return;
    }

    track("watermark_re_enabled", { source: "desktop" });
    setWatermarkVisible(true);
  };

  return (
    <aside className="w-full h-full flex flex-col bg-[#080808] border-l border-surface-2 shrink-0">
      {/* ── Scrollable content area — min-h-0 prevents flex overflow bug ── */}
      <div className="flex-1 overflow-y-auto min-h-0">

      {/* Export section */}
      <div className="px-4 py-5 border-b border-surface-2">
        <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest mb-3">
          Export
        </p>

        {/* Primary Export Button */}
        <button
          onClick={() => { track("export_png_click"); exportPng(); }}
          disabled={isExporting}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all relative overflow-hidden group ${
            isExporting
              ? "bg-[#1a0033] border border-neon-purple/30 text-neon-purple/60 cursor-not-allowed"
              : "bg-linear-to-r from-neon-purple to-neon-pink text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-neon-purple/20"
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
            <div key={k} className="bg-surface rounded-lg px-2.5 py-2 border border-surface-2">
              <p className="text-[9px] text-[#4a4a4a] uppercase tracking-wider">{k}</p>
              <p className="text-xs font-semibold text-[#a0a0a0] mt-0.5">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-surface-2 bg-surface p-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-white">Watermark</p>
              <p className="mt-0.5 text-[10px] text-text-muted">
                {watermarkVisible ? "Share once to remove from exports" : "Watermark-free exports unlocked"}
              </p>
            </div>
            <button
              onClick={handleWatermarkClick}
              className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
                watermarkVisible ? "bg-neon-purple" : "bg-[#1e1e1e]"
              }`}
              aria-label={watermarkVisible ? "Remove watermark" : "Re-enable watermark"}
            >
              <span
                className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  watermarkVisible ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <button
            onClick={handleWatermarkClick}
            className="mt-3 w-full rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-muted transition-colors hover:text-white"
          >
            {watermarkVisible ? "Remove Watermark" : "Turn Watermark Back On"}
          </button>
        </div>
      </div>

      {/* Animated Video */}
      <div className="px-4 py-4 border-b border-surface-2">
        <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest mb-3">
          Animated Video
        </p>

        {/* Animation preset + duration picker */}
        <div className="mb-3">
          <AnimationControls />
        </div>

        {/* Render Video button */}
        <button
          onClick={() => { track("video_record_click", { preset: animationPreset, duration: recordDuration }); startRecording(); }}
          disabled={isRecording || animationPreset === "none" || isSafari}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all relative overflow-hidden group ${
            isRecording
              ? "bg-[#1a0033] border border-neon-purple/30 text-neon-purple/60 cursor-not-allowed"
              : isSafari || animationPreset === "none"
              ? "bg-[#0a0a0a] border border-surface-2 text-[#3a3a3a] cursor-not-allowed"
              : "bg-linear-to-r from-neon-purple to-neon-pink text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-neon-purple/20"
          }`}
        >
          {isRecording ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Recording…
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 9.75v9A2.25 2.25 0 004.5 18.75z" />
              </svg>
              Render Animated Video
            </span>
          )}
        </button>

        {isSafari && (
          <p className="text-[10px] text-[#3a3a3a] text-center mt-2">
            ⚠ Safari detected — use Chrome or Firefox for video export
          </p>
        )}
        {!isSafari && animationPreset === "none" && !isRecording && (
          <p className="text-[10px] text-[#3a3a3a] text-center mt-2">
            Select an animation preset above to enable export
          </p>
        )}
        {!isSafari && animationPreset !== "none" && !isRecording && (
          <p className="text-[10px] text-[#3a3a3a] text-center mt-2">
            {recordDuration}s loop · 60fps · .webm · client-side
          </p>
        )}
      </div>

      {/* Ad zones — desktop only (RightSidebar is hidden on mobile via page.tsx) */}
      <div className="px-4 py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest">
            Sponsored
          </p>
          <span className="text-[8px] text-border uppercase tracking-wider">Desktop</span>
        </div>
        <AdZone
          key={`${SIDEBAR_TOP_AD_ID}-${adRefreshKeys[SIDEBAR_TOP_AD_ID] ?? 0}`}
          id={SIDEBAR_TOP_AD_ID}
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_TOP}
          label="Display Ad · 300×250"
          width={300}
          height={250}
          format="rectangle"
        />
        <AdZone
          key={`${SIDEBAR_BOTTOM_AD_ID}-${adRefreshKeys[SIDEBAR_BOTTOM_AD_ID] ?? 0}`}
          id={SIDEBAR_BOTTOM_AD_ID}
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_BOTTOM}
          label="Display Ad · 300×600"
          width={300}
          height={600}
          format="vertical"
        />
      </div>

      {/* ── End of scrollable area ── */}
      </div>

      {/* Fixed bottom brand — always visible */}
      <div className="px-4 py-3 border-t border-surface-2 shrink-0">
        <p className="text-[10px] text-border text-center">
          kromastudio.in
        </p>
      </div>

      {/* iOS export fallback modal */}
      {exportedImageUrl && (
        <ImageExportModal imageUrl={exportedImageUrl} onClose={clearExportedImage} />
      )}
    </aside>
  );
}
