"use client";

import { track } from "@/lib/analytics";

interface SliderControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
  trackEvent?: string;
  trackSource?: "desktop" | "mobile";
}

export function SliderControl({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
  trackEvent,
  trackSource,
}: SliderControlProps) {
  const handleCommit = (nextValue: number) => {
    if (trackEvent && trackSource) {
      track(trackEvent, { value: nextValue, source: trackSource });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
          {label}
        </label>
        <span className="text-xs font-mono text-[#a855f7] bg-[#1a0033]/40 px-2 py-0.5 rounded">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onPointerUp={(e) => handleCommit(Number((e.target as HTMLInputElement).value))}
        className="w-full"
      />
    </div>
  );
}
