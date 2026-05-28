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
  const freeCanvasW = useStudioStore((s) => s.freeCanvasW);
  const freeCanvasH = useStudioStore((s) => s.freeCanvasH);
  const setFreeCanvasDims = useStudioStore((s) => s.setFreeCanvasDims);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Initialise free-mode canvas to fill the viewport whenever the user switches to free
  useLayoutEffect(() => {
    if (aspectRatio !== "free" || !viewportRef.current) return;
    const { clientWidth: cw, clientHeight: ch } = viewportRef.current;
    const pad = 48;
    setFreeCanvasDims(Math.max(200, cw - pad), Math.max(150, ch - pad));
  }, [aspectRatio, setFreeCanvasDims]);

  function handleResizeStart(startX: number, startY: number) {
    const startW = freeCanvasW;
    const startH = freeCanvasH;
    function onMouseMove(e: MouseEvent) {
      setFreeCanvasDims(
        Math.max(200, startW + e.clientX - startX),
        Math.max(150, startH + e.clientY - startY),
      );
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      setFreeCanvasDims(
        Math.max(200, startW + t.clientX - startX),
        Math.max(150, startH + t.clientY - startY),
      );
    }
    function cleanup() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", cleanup);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", cleanup);
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", cleanup);
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", cleanup);
  }

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
            ? `Fluid · ${freeCanvasW} × ${freeCanvasH}`
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
        {aspectRatio === "free" ? (
          // Free / fluid — canvas fills a resizable container
          <div style={{ position: "relative", width: `${freeCanvasW}px`, height: `${freeCanvasH}px`, flexShrink: 0 }}>
            <CanvasErrorBoundary>
              <StudioCanvas />
            </CanvasErrorBoundary>
            {/* Resize handle — bottom-right corner drag grip */}
            <div
              onMouseDown={(e) => { e.preventDefault(); handleResizeStart(e.clientX, e.clientY); }}
              onTouchStart={(e) => { const t = e.touches[0]; handleResizeStart(t.clientX, t.clientY); }}
              className="absolute bottom-0 right-0 z-20 flex h-7 w-7 cursor-se-resize items-end justify-end p-1.5 group"
              title="Drag to resize"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-30 transition-opacity group-hover:opacity-90">
                <path d="M1 9L9 1M4 9L9 4M7 9L9 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        ) : (
          // Fixed ratio — scale the canvas to fit
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
