"use client";

import { useState } from "react";
import { useStudioStore } from "@/store/useStudioStore";
import { BACKGROUND_PRESETS } from "@/lib/backgrounds";
import { CustomColorPicker } from "@/components/ui/CustomColorPicker";
import { track } from "@/lib/analytics";

export function BackgroundControl() {
  const backgroundId = useStudioStore((s) => s.backgroundId);
  const customBgFrom = useStudioStore((s) => s.customBgFrom);
  const customBgTo = useStudioStore((s) => s.customBgTo);
  const setBackgroundId = useStudioStore((s) => s.setBackgroundId);
  const [showPicker, setShowPicker] = useState(false);

  const customCss = `linear-gradient(135deg, ${customBgFrom}, ${customBgTo})`;
  const isCustomActive = backgroundId === "custom";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Background
      </label>

      {/* Preset swatches + custom "+" */}
      <div className="grid grid-cols-4 gap-2">
        {BACKGROUND_PRESETS.map((preset) => {
          const active = backgroundId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => { track("background_change", { preset: preset.id, label: preset.label }); setBackgroundId(preset.id); setShowPicker(false); }}
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
                  <svg className="w-4 h-4 text-white drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}

        {/* Custom gradient swatch */}
        <button
          onClick={() => {
            track("background_custom_open");
            setBackgroundId("custom");
            setShowPicker((v) => !v);
          }}
          title="Custom gradient"
          className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
            isCustomActive
              ? "border-[#a855f7] scale-105 shadow-lg shadow-[#a855f7]/30"
              : "border-dashed border-[#3a3a3a] hover:border-[#a855f7]/50"
          }`}
          style={{ background: isCustomActive ? customCss : "#111" }}
        >
          {isCustomActive ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
              </svg>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#4a4a4a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Active label */}
      <p className="text-[10px] text-[#4a4a4a] mt-0.5">
        {isCustomActive
          ? "Custom gradient"
          : BACKGROUND_PRESETS.find((p) => p.id === backgroundId)?.label}
      </p>

      {/* Inline color picker — shows when custom is active */}
      {isCustomActive && showPicker && (
        <CustomColorPicker onClose={() => setShowPicker(false)} />
      )}
    </div>
  );
}
