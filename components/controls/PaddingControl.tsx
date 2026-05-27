"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { SliderControl } from "./SliderControl";

export function PaddingControl() {
  const padding = useStudioStore((s) => s.padding);
  const setPadding = useStudioStore((s) => s.setPadding);

  return (
    <SliderControl
      label="Padding"
      value={padding}
      min={0}
      max={120}
      unit="px"
      onChange={setPadding}
      trackEvent="padding_change"
      trackSource="desktop"
    />
  );
}
