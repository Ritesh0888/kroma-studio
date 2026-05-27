"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { SliderControl } from "./SliderControl";

export function BorderRadiusControl() {
  const borderRadius = useStudioStore((s) => s.borderRadius);
  const setBorderRadius = useStudioStore((s) => s.setBorderRadius);

  return (
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
  );
}
