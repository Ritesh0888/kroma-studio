"use client";

import React, { useState } from "react";
import { useStudioStore, type AspectRatio } from "@/store/useStudioStore";
import { BACKGROUND_PRESETS } from "@/lib/backgrounds";
import { SliderControl } from "@/components/controls/SliderControl";
import { ModeSelector } from "@/components/controls/ModeSelector";
import { CodeControls } from "@/components/controls/CodeControls";
import { HeadlineControls } from "@/components/controls/HeadlineControls";
import { AnimationControls } from "@/components/controls/AnimationControls";
import { ChromeStyleControl } from "@/components/controls/ChromeStyleControl";
import { CustomColorPicker } from "@/components/ui/CustomColorPicker";
import { useVideoRecorder } from "@/hooks/useVideoRecorder";
import { track } from "@/lib/analytics";

type Tab = "bg" | "frame" | "size" | "code" | "animate";

const ASPECT_RATIOS: { value: AspectRatio; label: string }[] = [
  { value: "1:1", label: "1:1" },
  { value: "16:9", label: "16:9" },
  { value: "9:16", label: "9:16" },
  { value: "free", label: "Free" },
];


/* ── Tabs ── */

function BgTab() {
  const backgroundId = useStudioStore((s) => s.backgroundId);
  const customBgFrom = useStudioStore((s) => s.customBgFrom);
  const customBgTo = useStudioStore((s) => s.customBgTo);
  const setBackgroundId = useStudioStore((s) => s.setBackgroundId);
  const [showPicker, setShowPicker] = useState(false);

  const isCustomActive = backgroundId === "custom";
  const customCss = `linear-gradient(135deg, ${customBgFrom}, ${customBgTo})`;
  const activeLabel = isCustomActive
    ? "Custom gradient"
    : BACKGROUND_PRESETS.find((p) => p.id === backgroundId)?.label;

  return (
    <div className="flex flex-col gap-3">
      <div className="hide-scrollbar flex gap-3 overflow-x-auto pt-2 pb-1 px-4">
        {BACKGROUND_PRESETS.map((preset) => {
          const active = backgroundId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => {
                track("background_change", { preset: preset.id, label: preset.label, source: "mobile" });
                setBackgroundId(preset.id);
                setShowPicker(false);
              }}
              title={preset.label}
              aria-label={`${preset.label} gradient background preset`}
              className="flex flex-col items-center gap-1.5 shrink-0"
            >
              <div
                role="img"
                aria-label={`${preset.label} gradient background preset`}
                className={`w-14 h-14 rounded-full border-[3px] transition-all ${
                  active
                    ? "border-neon-purple scale-110 shadow-lg shadow-neon-purple/30"
                    : "border-transparent"
                }`}
                style={{ background: preset.css }}
              />
              <span className={`text-[9px] leading-none ${active ? "text-neon-purple" : "text-[#4a4a4a]"}`}>
                {preset.label.split(" ")[0]}
              </span>
            </button>
          );
        })}

        {/* Custom "+" swatch */}
        <button
          onClick={() => {
            track("background_custom_open", { source: "mobile" });
            setBackgroundId("custom");
            setShowPicker((v) => !v);
          }}
          className="flex flex-col items-center gap-1.5 shrink-0"
          title="Custom gradient"
        >
          <div
            className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center transition-all ${
              isCustomActive
                ? "border-neon-purple scale-110 shadow-lg shadow-neon-purple/30"
                : "border-dashed border-[#3a3a3a]"
            }`}
            style={{ background: isCustomActive ? customCss : "#111" }}
          >
            {!isCustomActive && (
              <svg className="w-5 h-5 text-[#4a4a4a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            )}
          </div>
          <span className={`text-[9px] leading-none ${isCustomActive ? "text-neon-purple" : "text-[#4a4a4a]"}`}>
            Custom
          </span>
        </button>
      </div>

      {activeLabel && (
        <p className="text-[10px] text-text-muted px-4">{activeLabel}</p>
      )}

      {isCustomActive && showPicker && (
        <div className="px-4">
          <CustomColorPicker onClose={() => setShowPicker(false)} />
        </div>
      )}
    </div>
  );
}

function FrameTab() {
  const padding = useStudioStore((s) => s.padding);
  const borderRadius = useStudioStore((s) => s.borderRadius);
  const shadowDepth = useStudioStore((s) => s.shadowDepth);
  const watermarkVisible = useStudioStore((s) => s.watermarkVisible);
  const setPadding = useStudioStore((s) => s.setPadding);
  const setBorderRadius = useStudioStore((s) => s.setBorderRadius);
  const setShadowDepth = useStudioStore((s) => s.setShadowDepth);
  const setWatermarkVisible = useStudioStore((s) => s.setWatermarkVisible);
  const setShowWatermarkModal = useStudioStore((s) => s.setShowWatermarkModal);

  const handleWatermarkClick = () => {
    if (watermarkVisible) {
      track("watermark_modal_open", { source: "mobile" });
      setShowWatermarkModal(true);
      return;
    }

    track("watermark_re_enabled", { source: "mobile" });
    setWatermarkVisible(true);
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <ChromeStyleControl />
      <div className="rounded-xl border border-surface-2 bg-surface p-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-white">Watermark</p>
            <p className="mt-0.5 text-[10px] text-text-muted">
              {watermarkVisible ? "Share once to remove from exports" : "Watermark-free exports unlocked"}
            </p>
          </div>
          <button
            onClick={handleWatermarkClick}
            className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
              watermarkVisible ? "bg-neon-purple" : "bg-[#1e1e1e]"
            }`}
            aria-label={watermarkVisible ? "Remove watermark" : "Re-enable watermark"}
          >
            <span
              className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                watermarkVisible ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <button
          onClick={handleWatermarkClick}
          className="mt-3 w-full rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text-muted transition-colors active:scale-95"
        >
          {watermarkVisible ? "Remove Watermark" : "Turn Watermark Back On"}
        </button>
      </div>
      <SliderControl label="Padding" value={padding} min={0} max={40} unit="px" onChange={setPadding} trackEvent="padding_change" trackSource="mobile" />
      <SliderControl label="Corner Radius" value={borderRadius} min={0} max={32} unit="px" onChange={setBorderRadius} trackEvent="border_radius_change" trackSource="mobile" />
      <SliderControl label="Shadow" value={shadowDepth} min={0} max={100} unit="%" onChange={setShadowDepth} trackEvent="shadow_depth_change" trackSource="mobile" />
    </div>
  );
}

function SizeTab() {
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const setAspectRatio = useStudioStore((s) => s.setAspectRatio);

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
          Aspect Ratio
        </label>
        <div className="flex gap-2">
          {ASPECT_RATIOS.map(({ value, label }) => {
            const active = aspectRatio === value;
            return (
              <button
                key={value}
                onClick={() => {
                  track("aspect_ratio_change", { ratio: value, source: "mobile" });
                  setAspectRatio(value);
                }}
                className={`flex-1 py-2.5 rounded-lg border text-xs font-semibold transition-all ${
                  active
                    ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                    : "border-border bg-surface text-text-muted"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AnimateTab() {
  const isRecording = useStudioStore((s) => s.isRecording);
  const animationPreset = useStudioStore((s) => s.animationPreset);
  const recordDuration = useStudioStore((s) => s.recordDuration);
  const mode = useStudioStore((s) => s.mode);
  const { startRecording, isSafari } = useVideoRecorder();

  return (
    <div className="flex flex-col gap-4 px-4">
      <AnimationControls source="mobile" />

      {/* Render Video button */}
      <button
        onClick={() => {
          track("video_record_click", {
            preset: animationPreset,
            duration: recordDuration,
            source: "mobile",
            mode,
          });
          startRecording();
        }}
        disabled={isRecording || animationPreset === "none" || isSafari}
        className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
          isRecording
            ? "bg-[#1a0033] border border-neon-purple/30 text-neon-purple/60 cursor-not-allowed"
            : isSafari || animationPreset === "none"
            ? "bg-[#0a0a0a] border border-surface-2 text-[#3a3a3a] cursor-not-allowed"
            : "bg-linear-to-r from-neon-purple to-neon-pink text-white active:scale-95 shadow-lg shadow-neon-purple/20"
        }`}
      >
        {isRecording ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Recording…
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 9.75v9A2.25 2.25 0 004.5 18.75z" />
            </svg>
            Render Animated Video
          </span>
        )}
      </button>

      {isSafari && (
        <p className="text-[10px] text-border text-center">
          ⚠ Safari detected — use Chrome or Firefox for video export
        </p>
      )}
      {!isSafari && animationPreset === "none" && !isRecording && (
        <p className="text-[10px] text-border text-center">
          Select a preset above to enable export
        </p>
      )}
      {!isSafari && animationPreset !== "none" && !isRecording && (
        <p className="text-[10px] text-border text-center">
          {recordDuration}s loop · 60fps · .webm · client-side
        </p>
      )}
    </div>
  );
}

function CodeTab() {
  const mode = useStudioStore((s) => s.mode);

  return (
    <div className="flex flex-col gap-5 px-4">
      <ModeSelector />

      {mode === "code" ? (
        <>
          <div>
            <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest mb-3">
              Code Settings
            </p>
            <CodeControls />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest mb-3">
              Headline
            </p>
            <HeadlineControls />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest">
              Headline
            </p>
            <HeadlineControls />
          </div>
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg border border-dashed border-[#1e1e1e] bg-[#0a0a0a]">
            <svg className="w-4 h-4 text-border shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <p className="text-[10px] text-[#3a3a3a] leading-relaxed">
              Switch to <span className="text-text-muted">Code</span> mode above to configure language, theme, and font settings.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Tab icons ── */

const BgIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-4 3.5-4 9s4 9 4 9M12 3c0 0 4 3.5 4 9s-4 9-4 9M3 12h18" />
  </svg>
);

const FrameIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path strokeLinecap="round" d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);

const SizeIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6v12M15 6v12" />
  </svg>
);

const AnimateIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21" strokeLinejoin="round" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
  </svg>
);

/* ── Tab definitions ── */

const TABS: { id: Tab; label: string; icon: React.ReactNode; isNew?: boolean }[] = [
  { id: "bg", label: "BG", icon: <BgIcon /> },
  { id: "frame", label: "Frame", icon: <FrameIcon /> },
  { id: "size", label: "Size", icon: <SizeIcon /> },
  { id: "code", label: "Code", icon: <CodeIcon />, isNew: true },
  { id: "animate", label: "Animate", icon: <AnimateIcon /> },
];

/* ── Main component ── */

export function MobileControlSheet() {
  const [activeTab, setActiveTab] = useState<Tab>("bg");

  return (
    <div className="flex md:hidden flex-col bg-[#080808] border-t border-surface-2 shrink-0">
      {/* Tab bar — pt-2 gives vertical room so the NEW badge isn't clipped by overflow-x-auto */}
      <div className="hide-scrollbar flex overflow-x-auto border-b border-surface-2 pt-2 px-1">
        {TABS.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                track("mobile_control_tab_select", { tab: tab.id });
                setActiveTab(tab.id);
              }}
              className={`relative shrink-0 px-5 flex items-center justify-center gap-1.5 pb-2.5 text-[11px] font-medium transition-all border-b-2 whitespace-nowrap ${
                active
                  ? "border-neon-purple text-neon-purple"
                  : "border-transparent text-[#4a4a4a]"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.isNew && (
                <span className="absolute -top-1 right-0.5 text-[7px] font-bold px-1 py-px rounded bg-linear-to-r from-neon-purple to-neon-pink text-white leading-none tracking-wide shadow-sm shadow-neon-purple/40">
                  NEW
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="py-4 overflow-y-auto min-h-0" style={{ maxHeight: "40vh" }}>
        {activeTab === "bg" && <BgTab />}
        {activeTab === "frame" && <FrameTab />}
        {activeTab === "size" && <SizeTab />}
        {activeTab === "code" && <CodeTab />}
        {activeTab === "animate" && <AnimateTab />}
      </div>
    </div>
  );
}
