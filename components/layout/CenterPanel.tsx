"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { useStudioStore, ASPECT_RATIO_DIMENSIONS } from "@/store/useStudioStore";
import { StudioCanvas } from "@/components/canvas/StudioCanvas";
import { CanvasErrorBoundary } from "@/components/ui/CanvasErrorBoundary";
import { RenderingOverlay } from "@/components/canvas/RenderingOverlay";

const FLUID_PREVIEW_DIMS = { width: 600, height: 600 } as const;

export function CenterPanel() {
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const dims = ASPECT_RATIO_DIMENSIONS[aspectRatio] ?? FLUID_PREVIEW_DIMS;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Compute CSS scale so the canvas always fits the viewport without distortion
  useLayoutEffect(() => {
    function compute() {
      if (!viewportRef.current) return;
      const { clientWidth: cw, clientHeight: ch } = viewportRef.current;
      const padding = 24;
      const scaleX = (cw - padding * 2) / dims.width;
      const scaleY = (ch - padding * 2) / dims.height;
      setScale(Math.max(Math.min(scaleX, scaleY, 1), 0.05));
    }

    compute();
    const ro = new ResizeObserver(compute);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [dims]);

  return (
    <section className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col overflow-hidden bg-[#050505]">
      {/* Top bar — desktop only */}
      <div className="hidden md:flex items-center justify-between px-5 py-3 border-b border-surface-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
          <span className="text-xs text-text-muted">Canvas Preview</span>
        </div>
        <span className="text-[10px] font-mono text-[#3a3a3a]">
          {aspectRatio === "free"
            ? "Fluid"
            : `${dims.width} × ${dims.height}`}
        </span>
      </div>

      {/* Canvas viewport — dot grid, canvas scales to fit */}
      <div
        ref={viewportRef}
        className="flex-1 flex items-center justify-center overflow-hidden min-h-0 p-3 md:p-6"
        style={{
          backgroundImage: "radial-gradient(circle, #1e1e1e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          style={{
            width: `${dims.width * scale}px`,
            height: `${dims.height * scale}px`,
            flexShrink: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dims.width}px`,
              height: `${dims.height}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <CanvasErrorBoundary>
              <StudioCanvas />
            </CanvasErrorBoundary>
          </div>
        </div>
      </div>

      {/*
        RenderingOverlay lives here — OUTSIDE the scale wrapper.
        position:fixed inside transform:scale() is positioned relative to the
        transformed ancestor, not the viewport. This placement ensures the
        overlay always covers the full screen correctly.
      */}
      <RenderingOverlay />
    </section>
  );
}
