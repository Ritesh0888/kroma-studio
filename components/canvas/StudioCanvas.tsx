"use client";

import { useStudioStore, computeShadow, ASPECT_RATIO_DIMENSIONS } from "@/store/useStudioStore";
import { getPresetById } from "@/lib/backgrounds";
import { BrowserFrame } from "./BrowserFrame";
import { HeadlineLayer } from "./HeadlineLayer";

const HEADLINE_RESERVE = 64;

export function StudioCanvas() {
  const padding = useStudioStore((s) => s.padding);
  const borderRadius = useStudioStore((s) => s.borderRadius);
  const shadowDepth = useStudioStore((s) => s.shadowDepth);
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const backgroundId = useStudioStore((s) => s.backgroundId);
  const customBgFrom = useStudioStore((s) => s.customBgFrom);
  const customBgTo = useStudioStore((s) => s.customBgTo);
  const headlineEnabled = useStudioStore((s) => s.headlineEnabled);
  const headlinePosition = useStudioStore((s) => s.headlinePosition);

  const backgroundCss =
    backgroundId === "custom"
      ? `linear-gradient(135deg, ${customBgFrom}, ${customBgTo})`
      : getPresetById(backgroundId).css;

  const dims = ASPECT_RATIO_DIMENSIONS[aspectRatio];
  const shadow = computeShadow(shadowDepth);

  // Reserve space for the headline so it doesn't overlap the frame
  const paddingTop = headlineEnabled && headlinePosition === "top"
    ? Math.max(padding, HEADLINE_RESERVE)
    : padding;
  const paddingBottom = headlineEnabled && headlinePosition === "bottom"
    ? Math.max(padding, HEADLINE_RESERVE)
    : padding;

  return (
    <div
      id="studio-canvas"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: dims ? `${dims.width}px` : "600px",
        height: dims ? `${dims.height}px` : "600px",
        background: backgroundCss,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${padding}px`,
        paddingRight: `${padding}px`,
        flexShrink: 0,
      }}
    >
      {/* Headline text overlay */}
      {headlineEnabled && <HeadlineLayer />}

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
