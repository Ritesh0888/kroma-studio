"use client";

import { useStudioStore, computeShadow, ASPECT_RATIO_DIMENSIONS } from "@/store/useStudioStore";
import { getPresetById } from "@/lib/backgrounds";
import { BrowserFrame } from "./BrowserFrame";

export function StudioCanvas() {
  const padding = useStudioStore((s) => s.padding);
  const borderRadius = useStudioStore((s) => s.borderRadius);
  const shadowDepth = useStudioStore((s) => s.shadowDepth);
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const backgroundId = useStudioStore((s) => s.backgroundId);

  const preset = getPresetById(backgroundId);
  const dims = ASPECT_RATIO_DIMENSIONS[aspectRatio];
  const shadow = computeShadow(shadowDepth);

  return (
    <div
      id="studio-canvas"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: dims ? `${dims.width}px` : "600px",
        height: dims ? `${dims.height}px` : "600px",
        background: preset.css,
        padding: `${padding}px`,
        flexShrink: 0,
      }}
    >
      {/* Inner browser frame */}
      <div
        className="w-full h-full"
        style={{
          borderRadius: `${borderRadius}px`,
          boxShadow: shadow,
          overflow: "hidden",
        }}
      >
        <BrowserFrame />
      </div>

      {/* Watermark */}
      <span className="absolute bottom-1.5 right-2 text-[9px] text-white/30 select-none pointer-events-none font-mono tracking-wide">
        via KromaStudio
      </span>
    </div>
  );
}
