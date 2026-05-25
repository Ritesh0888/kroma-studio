"use client";

import { useStudioStore, type AspectRatio } from "@/store/useStudioStore";

const RATIOS: { value: AspectRatio; label: string; sub: string }[] = [
  { value: "1:1", label: "1:1", sub: "Square" },
  { value: "16:9", label: "16:9", sub: "Landscape" },
  { value: "9:16", label: "9:16", sub: "Portrait" },
  { value: "free", label: "Free", sub: "Fluid" },
];

export function AspectRatioControl() {
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const setAspectRatio = useStudioStore((s) => s.setAspectRatio);

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
              onClick={() => setAspectRatio(value)}
              className={`flex flex-col items-center py-2.5 px-2 rounded-lg border text-center transition-all ${
                active
                  ? "border-[#a855f7] bg-[#a855f7]/10 text-[#a855f7]"
                  : "border-[#2a2a2a] bg-[#0f0f0f] text-[#6b6b6b] hover:border-[#3a3a3a] hover:text-[#a0a0a0]"
              }`}
            >
              <span className="text-xs font-semibold leading-none">{label}</span>
              <span className="text-[10px] mt-0.5 opacity-70">{sub}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
