"use client";

import { useStudioStore, type AnimationPreset, type ScrollSpeed } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

const PRESETS: { id: AnimationPreset; label: string; desc: string; icon: string }[] = [
  { id: "none",   label: "None",        desc: "Static",      icon: "—"  },
  { id: "float",  label: "Subtle Float", desc: "Hover loop",  icon: "〜" },
  { id: "tilt",   label: "3D Tilt",      desc: "Auto rotate", icon: "◈" },
  { id: "scroll", label: "Auto Scroll",  desc: "Code pan",    icon: "⇕" },
];

export function AnimationControls() {
  const preset = useStudioStore((s) => s.animationPreset);
  const recordDuration = useStudioStore((s) => s.recordDuration);
  const scrollSpeed = useStudioStore((s) => s.scrollSpeed);
  const mode = useStudioStore((s) => s.mode);
  const setAnimationPreset = useStudioStore((s) => s.setAnimationPreset);
  const setRecordDuration = useStudioStore((s) => s.setRecordDuration);
  const setScrollSpeed = useStudioStore((s) => s.setScrollSpeed);

  const visiblePresets = preset === "scroll" || mode === "code"
    ? PRESETS
    : PRESETS.filter((p) => p.id !== "scroll");

  function handlePresetClick(id: AnimationPreset) {
    setAnimationPreset(id);
    track("animation_preset_select", { preset: id });
  }

  function handleDurationClick(duration: 5 | 10) {
    setRecordDuration(duration);
    track("record_duration_select", { duration, preset });
  }

  function handleScrollSpeedClick(speed: ScrollSpeed) {
    setScrollSpeed(speed);
    track("scroll_speed_select", { speed });
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Preset grid */}
      <div className="flex flex-col gap-1.5">
        {visiblePresets.map((p) => {
          const active = preset === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handlePresetClick(p.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-all ${
                active
                  ? "border-neon-purple bg-neon-purple/10"
                  : "border-surface-2 bg-[#0a0a0a] hover:border-neon-purple/30 hover:bg-neon-purple/5"
              }`}
            >
              <span
                className={`text-base w-5 text-center leading-none transition-colors ${
                  active ? "text-neon-purple" : "text-border"
                }`}
              >
                {p.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-xs font-medium leading-none transition-colors ${
                    active ? "text-neon-purple" : "text-text-muted"
                  }`}
                >
                  {p.label}
                </p>
                <p className="text-[10px] text-border mt-0.5">{p.desc}</p>
              </div>
              {active && (
                <div className="w-1.5 h-1.5 rounded-full bg-neon-purple shrink-0" />
              )}
            </button>
          );
        })}

        {mode !== "code" && preset !== "scroll" && (
          <p className="text-[10px] text-border px-1">
            Switch to <span className="text-text-muted">Code</span> mode to enable Auto Scroll.
          </p>
        )}
      </div>

      {/* Duration picker — only when a preset is active */}
      {preset !== "none" && (
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest">
            Duration
          </label>
          <div className="flex gap-2">
            {([5, 10] as const).map((d) => (
              <button
                key={d}
                onClick={() => handleDurationClick(d)}
                className={`flex-1 py-2 rounded-lg border text-xs font-semibold transition-all ${
                  recordDuration === d
                    ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                    : "border-surface-2 bg-surface text-text-muted hover:border-neon-purple/30"
                }`}
              >
                {d}s
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Scroll speed — only for the scroll preset */}
      {preset === "scroll" && (
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest">
            Scroll Speed
          </label>
          <div className="flex gap-2">
            {(["slow", "normal", "fast"] as const).map((s) => (
              <button
                key={s}
                onClick={() => handleScrollSpeedClick(s)}
                className={`flex-1 py-2 rounded-lg border text-xs font-semibold capitalize transition-all ${
                  scrollSpeed === s
                    ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                    : "border-surface-2 bg-surface text-text-muted hover:border-neon-purple/30"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
