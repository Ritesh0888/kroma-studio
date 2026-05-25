"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { SliderControl } from "./SliderControl";

export function ShadowControl() {
  const shadowDepth = useStudioStore((s) => s.shadowDepth);
  const setShadowDepth = useStudioStore((s) => s.setShadowDepth);

  return (
    <SliderControl
      label="Shadow Depth"
      value={shadowDepth}
      min={0}
      max={100}
      unit="%"
      onChange={setShadowDepth}
    />
  );
}
