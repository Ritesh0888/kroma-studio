"use client";

import { useStudioStore, ImageFit } from "@/store/useStudioStore";

const OPTIONS: { value: ImageFit; label: string; title: string }[] = [
  { value: "contain", label: "Contain", title: "Show entire image, letterbox if needed" },
  { value: "cover", label: "Cover", title: "Fill frame, crop edges if needed" },
  { value: "fill", label: "Fill", title: "Stretch image to fill frame exactly" },
];

export function ImageFitControl() {
  const imageFit = useStudioStore((s) => s.imageFit);
  const setImageFit = useStudioStore((s) => s.setImageFit);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Image Fit
      </label>
      <div className="grid grid-cols-3 gap-1.5">
        {OPTIONS.map(({ value, label, title }) => (
          <button
            key={value}
            title={title}
            onClick={() => setImageFit(value)}
            className={`py-1.5 text-xs font-medium rounded-md border transition-colors ${
              imageFit === value
                ? "bg-[#a855f7]/20 border-[#a855f7] text-[#a855f7]"
                : "bg-[#1c1c1e] border-[#2a2a2a] text-[#a0a0a0] hover:border-[#3a3a3a] hover:text-[#e0e0e0]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
