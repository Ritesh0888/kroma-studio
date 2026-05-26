"use client";

import { useStudioStore } from "@/store/useStudioStore";

export function RenderingOverlay() {
  const isRecording = useStudioStore((s) => s.isRecording);
  const recordDuration = useStudioStore((s) => s.recordDuration);
  const progress = useStudioStore((s) => s.recordingProgress);

  if (!isRecording) return null;

  // Derive elapsed seconds from progress so we don't need a separate timer
  const elapsed = Math.floor((progress / 100) * recordDuration);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Ad zone placeholder — Phase 4 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-0">
        <span className="text-[9px] text-white/10 uppercase tracking-widest">Ad Zone · Phase 4</span>
      </div>

      <div className="flex flex-col items-center gap-6 px-8 max-w-sm w-full">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-neon-purple to-neon-pink flex items-center justify-center shadow-lg shadow-neon-purple/30">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 9.75v9A2.25 2.25 0 004.5 18.75z" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center">
          <p className="text-base font-semibold text-white">Generating Studio Quality Video…</p>
          <p className="text-xs text-white/40 mt-1">
            {elapsed}s / {recordDuration}s · 60fps · .webm
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-neon-purple to-neon-pink rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] text-white/30">Capturing frames…</span>
            <span className="text-[10px] text-white/30">{Math.round(progress)}%</span>
          </div>
        </div>

        <p className="text-[10px] text-white/20 text-center">
          100% client-side — no upload, no server
        </p>
      </div>
    </div>
  );
}
