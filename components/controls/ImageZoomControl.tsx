"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { SliderControl } from "./SliderControl";

export function ImageZoomControl() {
  const imageZoom = useStudioStore((s) => s.imageZoom);
  const imageOffsetX = useStudioStore((s) => s.imageOffsetX);
  const imageOffsetY = useStudioStore((s) => s.imageOffsetY);
  const setImageZoom = useStudioStore((s) => s.setImageZoom);
  const setImageOffsetX = useStudioStore((s) => s.setImageOffsetX);
  const setImageOffsetY = useStudioStore((s) => s.setImageOffsetY);
  const resetImageTransform = useStudioStore((s) => s.resetImageTransform);

  const isModified = imageZoom !== 1 || imageOffsetX !== 0 || imageOffsetY !== 0;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
          Zoom &amp; Position
        </label>
        {isModified && (
          <button
            onClick={resetImageTransform}
            className="text-[10px] text-[#a855f7] hover:text-[#c084fc] transition-colors"
          >
            Reset
          </button>
        )}
      </div>
      <SliderControl
        label="Zoom"
        value={Math.round(imageZoom * 100)}
        min={100}
        max={300}
        step={5}
        unit="%"
        onChange={(v) => setImageZoom(v / 100)}
        trackEvent="image_zoom_change"
        trackSource="desktop"
      />
      <SliderControl
        label="Offset X"
        value={imageOffsetX}
        min={-50}
        max={50}
        step={1}
        unit="%"
        onChange={setImageOffsetX}
        trackEvent="image_offset_x_change"
        trackSource="desktop"
      />
      <SliderControl
        label="Offset Y"
        value={imageOffsetY}
        min={-50}
        max={50}
        step={1}
        unit="%"
        onChange={setImageOffsetY}
        trackEvent="image_offset_y_change"
        trackSource="desktop"
      />
    </div>
  );
}
