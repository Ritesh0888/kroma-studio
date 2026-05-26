"use client";

import { useRef, useEffect, useState } from "react";
import { useStudioStore, ASPECT_RATIO_DIMENSIONS } from "@/store/useStudioStore";
import { StudioCanvas } from "@/components/canvas/StudioCanvas";
import { CanvasErrorBoundary } from "@/components/ui/CanvasErrorBoundary";
import { RenderingOverlay } from "@/components/canvas/RenderingOverlay";

export function CenterPanel() {
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const dims = ASPECT_RATIO_DIMENSIONS[aspectRatio];
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Compute CSS scale so the canvas always fits the viewport without distortion
  useEffect(() => {
    if (!dims) { setScale(1); return; }

    function compute() {
      if (!viewportRef.current || !dims) return;
      const { clientWidth: cw, clientHeight: ch } = viewportRef.current;
      const padding = 24;
      const scaleX = (cw - padding * 2) / dims.width;
      const scaleY = (ch - padding * 2) / dims.height;
      setScale(Math.min(scaleX, scaleY, 1));
    }

    compute();
    const ro = new ResizeObserver(compute);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [dims]);

  return (
    <section className="flex-1 min-w-0 flex flex-col bg-[#050505] overflow-hidden min-h-0">
      {/* Top bar — desktop only */}
      <div className="hidden md:flex items-center justify-between px-5 py-3 border-b border-surface-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
          <span className="text-xs text-text-muted">Canvas Preview</span>
        </div>
        <span className="text-[10px] font-mono text-[#3a3a3a]">
          {dims ? `${dims.width} × ${dims.height}` : "Fluid"}
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
        {dims ? (
          <div
            style={{
              width: `${dims.width * scale}px`,
              height: `${dims.height * scale}px`,
              flexShrink: 0,
            }}
          >
            <div
              style={{
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
        ) : (
          <CanvasErrorBoundary>
            <StudioCanvas />
          </CanvasErrorBoundary>
        )}
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
