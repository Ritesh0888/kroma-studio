"use client";

import { useStudioStore, type HeadlinePosition } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

const FONT_SIZES = [24, 32, 40, 52, 64, 72] as const;
const EXAMPLE_HEADLINES = [
  "How I optimized this UI in 30 minutes",
  "This code pattern changed everything",
  "The cleanest API design I've seen",
];

export function HeadlineControls() {
  const headlineEnabled = useStudioStore((s) => s.headlineEnabled);
  const setHeadlineEnabled = useStudioStore((s) => s.setHeadlineEnabled);
  const headlineText = useStudioStore((s) => s.headlineText);
  const setHeadlineText = useStudioStore((s) => s.setHeadlineText);
  const headlineFontSize = useStudioStore((s) => s.headlineFontSize);
  const setHeadlineFontSize = useStudioStore((s) => s.setHeadlineFontSize);
  const headlineColor = useStudioStore((s) => s.headlineColor);
  const setHeadlineColor = useStudioStore((s) => s.setHeadlineColor);
  const headlinePosition = useStudioStore((s) => s.headlinePosition);
  const setHeadlinePosition = useStudioStore((s) => s.setHeadlinePosition);

  return (
    <div className="flex flex-col gap-4">
      {/* Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[#a0a0a0]">Add Headline</span>
        <button
          onClick={() => {
            const enabled = !headlineEnabled;
            track("headline_toggle", { enabled });
            setHeadlineEnabled(enabled);
          }}
          className={`relative w-9 h-5 rounded-full transition-colors ${
            headlineEnabled ? "bg-neon-purple" : "bg-[#1e1e1e]"
          }`}
          aria-label="Toggle headline layer"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              headlineEnabled ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {headlineEnabled && (
        <>
          {/* Text input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
              Text
            </label>
            <textarea
              value={headlineText}
              onChange={(e) => setHeadlineText(e.target.value)}
              rows={2}
              placeholder="Enter headline text…"
              className="w-full bg-surface border border-[#1e1e1e] rounded-lg px-2.5 py-2 text-xs text-[#a0a0a0] resize-none focus:outline-none focus:border-neon-purple/50 hover:border-border transition-colors placeholder:text-[#3a3a3a]"
            />
            {/* Quick-fill examples */}
            <div className="flex flex-col gap-1 mt-0.5">
              {EXAMPLE_HEADLINES.map((ex, index) => (
                <button
                  key={ex}
                  onClick={() => {
                    track("headline_example_select", { index });
                    setHeadlineText(ex);
                  }}
                  className="text-left text-[9px] text-[#3a3a3a] hover:text-text-muted truncate transition-colors"
                >
                  ↳ {ex}
                </button>
              ))}
            </div>
          </div>

          {/* Font size */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
              Size — {headlineFontSize}px
            </label>
            <input
              type="range"
              min={24}
              max={72}
              step={2}
              value={headlineFontSize}
              onChange={(e) => setHeadlineFontSize(Number(e.target.value))}
              onPointerUp={(e) =>
                track("headline_font_size_change", {
                  size: Number((e.target as HTMLInputElement).value),
                })
              }
              className="w-full accent-neon-purple"
            />
            <div className="flex justify-between text-[9px] text-border">
              {FONT_SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    track("headline_font_size_change", { size: s });
                    setHeadlineFontSize(s);
                  }}
                  className={`hover:text-text-muted transition-colors ${headlineFontSize === s ? "text-neon-purple" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
            Color
          </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={headlineColor}
                onChange={(e) => {
                  track("headline_color_change", { color: e.target.value });
                  setHeadlineColor(e.target.value);
                }}
                className="w-8 h-8 rounded-lg border border-[#1e1e1e] bg-transparent cursor-pointer"
              />
              <div className="flex gap-1.5 flex-1">
                {["#ffffff", "#000000", "#a855f7", "#ec4899", "#ffd200"].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      track("headline_color_change", { color: c });
                      setHeadlineColor(c);
                    }}
                    className={`w-6 h-6 rounded-md border-2 transition-all ${
                      headlineColor === c ? "border-white scale-110" : "border-transparent hover:scale-105"
                    }`}
                    style={{ background: c }}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Position */}
          <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
            Position
          </label>
          <div className="flex gap-1.5">
              {(["top", "bottom"] as HeadlinePosition[]).map((pos) => (
                <button
                  key={pos}
                  onClick={() => {
                    track("headline_position_change", { position: pos });
                    setHeadlinePosition(pos);
                  }}
                  className={`flex-1 py-1.5 rounded-lg border text-[11px] font-medium capitalize transition-all ${
                    headlinePosition === pos
                      ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                      : "border-[#1e1e1e] bg-surface text-text-muted hover:border-border hover:text-[#a0a0a0]"
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
