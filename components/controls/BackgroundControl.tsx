"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { BACKGROUND_PRESETS } from "@/lib/backgrounds";

export function BackgroundControl() {
  const backgroundId = useStudioStore((s) => s.backgroundId);
  const setBackgroundId = useStudioStore((s) => s.setBackgroundId);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Background
      </label>
      <div className="grid grid-cols-4 gap-2">
        {BACKGROUND_PRESETS.map((preset) => {
          const active = backgroundId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => setBackgroundId(preset.id)}
              title={preset.label}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                active
                  ? "border-[#a855f7] scale-105 shadow-lg shadow-[#a855f7]/30"
                  : "border-transparent hover:border-[#3a3a3a]"
              }`}
              style={{ background: preset.css }}
            >
              {active && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white drop-shadow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
      <p className="text-[10px] text-[#4a4a4a] mt-0.5">
        {BACKGROUND_PRESETS.find((p) => p.id === backgroundId)?.label}
      </p>
    </div>
  );
}
