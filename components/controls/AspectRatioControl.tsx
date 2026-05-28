"use client";

import { useStudioStore, type AspectRatio } from "@/store/useStudioStore";
import { SliderControl } from "@/components/controls/SliderControl";
import { track } from "@/lib/analytics";

const RATIOS: { value: AspectRatio; label: string; sub: string }[] = [
  { value: "1:1", label: "1:1", sub: "Square" },
  { value: "16:9", label: "16:9", sub: "Landscape" },
  { value: "9:16", label: "9:16", sub: "Portrait" },
  { value: "free", label: "Free", sub: "Fluid" },
];

export function AspectRatioControl() {
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const setAspectRatio = useStudioStore((s) => s.setAspectRatio);
  const freeCanvasW = useStudioStore((s) => s.freeCanvasW);
  const freeCanvasH = useStudioStore((s) => s.freeCanvasH);
  const setFreeCanvasDims = useStudioStore((s) => s.setFreeCanvasDims);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Aspect Ratio
      </label>
      <div className="grid grid-cols-2 gap-1.5">
        {RATIOS.map(({ value, label, sub }) => {
          const active = aspectRatio === value;
          return (
            <button
              key={value}
              onClick={() => { track("aspect_ratio_change", { ratio: value }); setAspectRatio(value); }}
              className={`flex flex-col items-center py-2.5 px-2 rounded-lg border text-center transition-all ${
                active
                  ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                  : "border-border bg-surface text-text-muted hover:border-[#3a3a3a] hover:text-[#a0a0a0]"
              }`}
            >
              <span className="text-xs font-semibold leading-none">{label}</span>
              <span className="text-[10px] mt-0.5 opacity-70">{sub}</span>
            </button>
          );
        })}
      </div>

      {aspectRatio === "free" && (
        <div className="flex flex-col gap-3 mt-1">
          <SliderControl
            label="Width"
            value={freeCanvasW}
            min={200}
            max={2000}
            step={10}
            unit="px"
            onChange={(v) => setFreeCanvasDims(v, freeCanvasH)}
            trackEvent="free_canvas_width_change"
            trackSource="desktop"
          />
          <SliderControl
            label="Height"
            value={freeCanvasH}
            min={150}
            max={2000}
            step={10}
            unit="px"
            onChange={(v) => setFreeCanvasDims(freeCanvasW, v)}
            trackEvent="free_canvas_height_change"
            trackSource="desktop"
          />
        </div>
      )}
    </div>
  );
}
