"use client";

import { useEffect, useRef, useState } from "react";
import { AdZone } from "@/components/ads/AdZone";
import { useStudioStore } from "@/store/useStudioStore";

const RENDERING_OVERLAY_AD_ID = "ad-rendering-overlay";
const MIN_OVERLAY_VISIBLE_MS = 3_000;

export function RenderingOverlay() {
  const isRecording = useStudioStore((s) => s.isRecording);
  const recordDuration = useStudioStore((s) => s.recordDuration);
  const progress = useStudioStore((s) => s.recordingProgress);
  const [isVisible, setIsVisible] = useState(false);
  const [isPolishing, setIsPolishing] = useState(false);
  const [adKey, setAdKey] = useState(0);
  const visibleStartedAtRef = useRef(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (isRecording) {
      visibleStartedAtRef.current = Date.now();
      visibleRef.current = true;
      const startTimer = window.setTimeout(() => {
        setIsVisible(true);
        setIsPolishing(false);
        setAdKey((key) => key + 1);
      }, 0);
      return () => window.clearTimeout(startTimer);
    }

    if (!visibleRef.current) return;

    const elapsedMs = Date.now() - visibleStartedAtRef.current;
    const remainingMs = Math.max(MIN_OVERLAY_VISIBLE_MS - elapsedMs, 0);

    if (remainingMs === 0) {
      const hideTimer = window.setTimeout(() => {
        visibleRef.current = false;
        setIsVisible(false);
        setIsPolishing(false);
      }, 0);
      return () => window.clearTimeout(hideTimer);
    }

    const polishTimer = window.setTimeout(() => setIsPolishing(true), 0);
    const timeout = window.setTimeout(() => {
      visibleRef.current = false;
      setIsVisible(false);
      setIsPolishing(false);
    }, remainingMs);

    return () => {
      window.clearTimeout(polishTimer);
      window.clearTimeout(timeout);
    };
  }, [isRecording]);

  if (!isVisible) return null;

  // Derive elapsed seconds from progress so we don't need a separate timer
  const displayedProgress = isPolishing ? 100 : progress;
  const elapsed = isPolishing ? recordDuration : Math.floor((displayedProgress / 100) * recordDuration);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 px-8 max-w-sm w-full">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-neon-purple to-neon-pink flex items-center justify-center shadow-lg shadow-neon-purple/30">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 9.75v9A2.25 2.25 0 004.5 18.75z" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center">
          <p className="text-base font-semibold text-white">
            {isPolishing ? "Polishing your video frames..." : "Generating Studio Quality Video…"}
          </p>
          <p className="text-xs text-white/40 mt-1">
            {elapsed}s / {recordDuration}s · 60fps · .webm
          </p>
        </div>

        <div className="w-full max-w-[336px] rounded-2xl border border-white/5 bg-black/40 p-1">
          <AdZone
            key={`${RENDERING_OVERLAY_AD_ID}-${adKey}`}
            id={RENDERING_OVERLAY_AD_ID}
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RENDERING_OVERLAY}
            label="Sponsored · 336×280"
            width={336}
            height={280}
            format="rectangle"
            className="border-white/10 bg-black/40"
          />
        </div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-neon-purple to-neon-pink rounded-full transition-all duration-75"
              style={{ width: `${displayedProgress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] text-white/30">
              {isPolishing ? "Preparing download..." : "Capturing frames…"}
            </span>
            <span className="text-[10px] text-white/30">{Math.round(displayedProgress)}%</span>
          </div>
        </div>

        <p className="text-[10px] text-white/20 text-center">
          100% client-side — no upload, no server
        </p>
      </div>
    </div>
  );
}
