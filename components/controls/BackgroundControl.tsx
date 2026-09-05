"use client";

import { useCallback, useState } from "react";
import { useStudioStore } from "@/store/useStudioStore";
import { BACKGROUND_PRESETS } from "@/lib/backgrounds";
import { CustomColorPicker } from "@/components/ui/CustomColorPicker";
import { SliderControl } from "@/components/controls/SliderControl";
import { track, trackFirstEdit } from "@/lib/analytics";

export function BackgroundControl() {
  const backgroundId = useStudioStore((s) => s.backgroundId);
  const customBgFrom = useStudioStore((s) => s.customBgFrom);
  const customBgTo = useStudioStore((s) => s.customBgTo);
  const backgroundImage = useStudioStore((s) => s.backgroundImage);
  const noiseIntensity = useStudioStore((s) => s.noiseIntensity);
  const setBackgroundId = useStudioStore((s) => s.setBackgroundId);
  const setBackgroundImage = useStudioStore((s) => s.setBackgroundImage);
  const setNoiseIntensity = useStudioStore((s) => s.setNoiseIntensity);
  const [showPicker, setShowPicker] = useState(false);

  const customCss = `linear-gradient(135deg, ${customBgFrom}, ${customBgTo})`;
  const isCustomActive = backgroundId === "custom";

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    track("background_image_upload");
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) setBackgroundImage(ev.target.result as string);
    };
    reader.readAsDataURL(file);
    // Clear input so same file can be re-selected
    e.target.value = "";
  }, [setBackgroundImage]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Background
      </label>

      {/* Preset swatches + custom "+" */}
      <div className="grid grid-cols-4 gap-2">
        {BACKGROUND_PRESETS.map((preset) => {
          const active = backgroundId === preset.id && !backgroundImage;
          return (
            <button
              key={preset.id}
              onClick={() => {
                const props = { preset: preset.id, label: preset.label };
                track("background_change", props);
                trackFirstEdit("background_change", props);
                setBackgroundId(preset.id);
                setBackgroundImage(null);
                setShowPicker(false);
              }}
              title={preset.label}
              aria-label={`${preset.label} gradient background preset`}
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
            setBackgroundImage(null);
            setShowPicker((v) => !v);
          }}
          title="Custom gradient"
          className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
            isCustomActive && !backgroundImage
              ? "border-[#a855f7] scale-105 shadow-lg shadow-[#a855f7]/30"
              : "border-dashed border-[#3a3a3a] hover:border-[#a855f7]/50"
          }`}
          style={{ background: isCustomActive && !backgroundImage ? customCss : "#111" }}
        >
          {isCustomActive && !backgroundImage ? (
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
        {backgroundImage
          ? "Custom image"
          : isCustomActive
          ? "Custom gradient"
          : BACKGROUND_PRESETS.find((p) => p.id === backgroundId)?.label}
      </p>

      {/* Inline color picker — shows when custom gradient is active */}
      {isCustomActive && !backgroundImage && showPicker && (
        <CustomColorPicker onClose={() => setShowPicker(false)} />
      )}

      {/* Background image upload */}
      <div className="flex flex-col gap-1.5 mt-1">
        <label className="text-[10px] text-[#4a4a4a] uppercase tracking-wider">Image BG</label>
        <div className="flex gap-2">
          <label
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-dashed border-[#2a2a2a] hover:border-[#a855f7]/50 hover:bg-[#a855f7]/5 cursor-pointer transition-colors text-[10px] text-[#4a4a4a] hover:text-[#a855f7]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            {backgroundImage ? "Replace" : "Upload image"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          {backgroundImage && (
            <button
              onClick={() => { track("background_image_clear"); setBackgroundImage(null); }}
              className="px-2.5 py-2 rounded-lg border border-[#2a2a2a] text-[#4a4a4a] hover:border-red-500/50 hover:text-red-400 transition-colors text-[10px]"
              title="Remove background image"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Noise intensity slider */}
      <div className="mt-1">
        <SliderControl
          label="Grain / Noise"
          value={noiseIntensity}
          min={0}
          max={100}
          unit="%"
          onChange={setNoiseIntensity}
          trackEvent="noise_intensity_change"
          trackSource="desktop"
        />
      </div>
    </div>
  );
}
