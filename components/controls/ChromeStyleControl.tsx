"use client";

import { useStudioStore, type ChromeStyle } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

const CHROME_STYLES: {
  value: ChromeStyle;
  label: string;
  preview: React.ReactNode;
}[] = [
  {
    value: "macos-dark",
    label: "macOS Dark",
    preview: (
      <div className="w-full h-4 rounded-sm bg-[#2c2c2e] flex items-center gap-0.5 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
        <span className="flex-1 mx-0.5 h-1 rounded-sm bg-[#1c1c1e]" />
      </div>
    ),
  },
  {
    value: "macos-light",
    label: "macOS Light",
    preview: (
      <div className="w-full h-4 rounded-sm bg-[#e8e8e8] flex items-center gap-0.5 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
        <span className="flex-1 mx-0.5 h-1 rounded-sm bg-[#d4d4d4]" />
      </div>
    ),
  },
  {
    value: "windows",
    label: "Windows",
    preview: (
      <div className="w-full h-4 rounded-sm bg-[#1a1a2e] flex items-center px-1">
        <span className="flex-1 h-1 rounded-sm bg-[#2a2a4e]" />
        <div className="flex items-center gap-0.5 ml-1">
          <span className="w-2 h-2 rounded-none border border-[#8888aa] text-[4px] flex items-center justify-center text-[#8888aa]">—</span>
          <span className="w-2 h-2 rounded-none border border-[#8888aa] text-[4px] flex items-center justify-center text-[#8888aa]">□</span>
          <span className="w-2 h-2 rounded-none border border-[#c42b1c] text-[4px] flex items-center justify-center text-[#c42b1c]">✕</span>
        </div>
      </div>
    ),
  },
  {
    value: "minimal",
    label: "Minimal",
    preview: (
      <div className="w-full h-4 rounded-sm bg-[#1c1c1e] flex items-center gap-0.5 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#444]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#444]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#444]" />
      </div>
    ),
  },
  {
    value: "none",
    label: "None",
    preview: (
      <div className="w-full h-4 rounded-sm bg-[#1c1c1e] flex items-center justify-center">
        <span className="text-[#333] text-[8px] select-none">—</span>
      </div>
    ),
  },
];

export function ChromeStyleControl() {
  const chromeStyle = useStudioStore((s) => s.chromeStyle);
  const setChromeStyle = useStudioStore((s) => s.setChromeStyle);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Header Style
      </label>
      <div className="grid grid-cols-2 gap-1.5">
        {CHROME_STYLES.map(({ value, label, preview }) => {
          const active = chromeStyle === value;
          return (
            <button
              key={value}
              onClick={() => {
                setChromeStyle(value);
                track("chrome_style_change", { style: value });
              }}
              className={`flex flex-col gap-1.5 items-start p-2 rounded-lg border text-left transition-all ${
                active
                  ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                  : "border-border bg-surface text-text-muted hover:border-[#3a3a3a] hover:text-[#a0a0a0]"
              }`}
            >
              {preview}
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
