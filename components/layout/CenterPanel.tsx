"use client";

import { useStudioStore, ASPECT_RATIO_DIMENSIONS } from "@/store/useStudioStore";
import { StudioCanvas } from "@/components/canvas/StudioCanvas";

export function CenterPanel() {
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const dims = ASPECT_RATIO_DIMENSIONS[aspectRatio];

  return (
    <section className="flex-1 h-full flex flex-col bg-[#050505] overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
          <span className="text-xs text-[#6b6b6b]">Canvas Preview</span>
        </div>
        <span className="text-[10px] font-mono text-[#3a3a3a]">
          {dims ? `${dims.width} × ${dims.height}` : "Fluid"}
        </span>
      </div>

      {/* Canvas viewport — dots pattern background */}
      <div
        className="flex-1 flex items-center justify-center overflow-hidden p-6"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1e1e1e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <StudioCanvas />
      </div>
    </section>
  );
}
