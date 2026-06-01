"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { SliderControl } from "./SliderControl";

export function BorderRadiusControl() {
  const borderRadius = useStudioStore((s) => s.borderRadius);
  const setBorderRadius = useStudioStore((s) => s.setBorderRadius);
  const mode = useStudioStore((s) => s.mode);
  const innerRadius = useStudioStore((s) => s.innerRadius);
  const setInnerRadius = useStudioStore((s) => s.setInnerRadius);

  return (
    <div className="flex flex-col gap-3">
      <SliderControl
        label="Corner Radius"
        value={borderRadius}
        min={0}
        max={32}
        unit="px"
        onChange={setBorderRadius}
        trackEvent="border_radius_change"
        trackSource="desktop"
      />
      {mode === "mockup" && (
        <SliderControl
          label="Screenshot Radius"
          value={innerRadius}
          min={0}
          max={32}
          unit="px"
          onChange={setInnerRadius}
          trackEvent="inner_radius_change"
          trackSource="desktop"
        />
      )}
    </div>
  );
}
