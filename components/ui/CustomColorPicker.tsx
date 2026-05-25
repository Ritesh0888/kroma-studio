"use client";

import { useStudioStore } from "@/store/useStudioStore";

interface Props {
  onClose: () => void;
}

export function CustomColorPicker({ onClose }: Props) {
  const customBgFrom = useStudioStore((s) => s.customBgFrom);
  const customBgTo = useStudioStore((s) => s.customBgTo);
  const setCustomBgFrom = useStudioStore((s) => s.setCustomBgFrom);
  const setCustomBgTo = useStudioStore((s) => s.setCustomBgTo);

  const previewCss = `linear-gradient(135deg, ${customBgFrom}, ${customBgTo})`;

  return (
    <div className="flex flex-col gap-3 mt-2 p-3 rounded-xl border border-[#2a2a2a] bg-[#0d0d0d]">
      {/* Gradient preview */}
      <div
        className="w-full h-10 rounded-lg border border-[#2a2a2a]"
        style={{ background: previewCss }}
      />

      {/* Color pickers */}
      <div className="flex items-center gap-3">
        {/* From */}
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[10px] text-[#6b6b6b] uppercase tracking-wider font-medium">
            From
          </label>
          <div className="flex items-center gap-2 bg-[#111] rounded-lg px-2.5 py-1.5 border border-[#2a2a2a]">
            <input
              type="color"
              value={customBgFrom}
              onChange={(e) => setCustomBgFrom(e.target.value)}
              className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent p-0"
              style={{ appearance: "none" }}
            />
            <span className="text-[10px] font-mono text-[#6b6b6b] uppercase">
              {customBgFrom}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <svg
          className="w-4 h-4 text-[#3a3a3a] shrink-0 mt-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>

        {/* To */}
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[10px] text-[#6b6b6b] uppercase tracking-wider font-medium">
            To
          </label>
          <div className="flex items-center gap-2 bg-[#111] rounded-lg px-2.5 py-1.5 border border-[#2a2a2a]">
            <input
              type="color"
              value={customBgTo}
              onChange={(e) => setCustomBgTo(e.target.value)}
              className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent p-0"
              style={{ appearance: "none" }}
            />
            <span className="text-[10px] font-mono text-[#6b6b6b] uppercase">
              {customBgTo}
            </span>
          </div>
        </div>
      </div>

      {/* Swap + Done */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            const tmp = customBgFrom;
            setCustomBgFrom(customBgTo);
            setCustomBgTo(tmp);
          }}
          className="flex-1 py-1.5 rounded-lg border border-[#2a2a2a] text-[10px] text-[#6b6b6b] hover:text-white hover:border-[#3a3a3a] transition-colors"
        >
          ⇄ Swap
        </button>
        <button
          onClick={onClose}
          className="flex-1 py-1.5 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-[10px] font-semibold hover:opacity-90 transition-opacity"
        >
          Done
        </button>
      </div>
    </div>
  );
}
