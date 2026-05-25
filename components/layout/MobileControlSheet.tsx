"use client";

import React, { useState } from "react";
import { useStudioStore, type AspectRatio } from "@/store/useStudioStore";
import { BACKGROUND_PRESETS } from "@/lib/backgrounds";
import { SliderControl } from "@/components/controls/SliderControl";
import { ModeSelector } from "@/components/controls/ModeSelector";
import { EmailCapturePopover } from "@/components/ui/EmailCapturePopover";
import { CustomColorPicker } from "@/components/ui/CustomColorPicker";

type Tab = "bg" | "frame" | "size" | "animate";

const ASPECT_RATIOS: { value: AspectRatio; label: string }[] = [
  { value: "1:1", label: "1:1" },
  { value: "16:9", label: "16:9" },
  { value: "9:16", label: "9:16" },
  { value: "free", label: "Free" },
];

const ANIMATION_PRESETS = [
  {
    id: "float",
    label: "Subtle Float",
    desc: "Hover loop",
    icon: "〜",
    teaser:
      "Animated video loops are launching next week! Drop your email to get early access the moment it goes live.",
  },
  {
    id: "tilt",
    label: "3D Tilt",
    desc: "Auto rotate",
    icon: "◈",
    teaser:
      "3D tilt animation export is coming soon. Be the first to know — drop your email!",
  },
  {
    id: "scroll",
    label: "Auto Scroll",
    desc: "Code pan",
    icon: "⇕",
    teaser:
      "Auto-scroll for long code snapshots is dropping soon. Leave your email for early access!",
  },
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
      {/* Horizontal swatch row */}
      <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-1 px-4">
        {BACKGROUND_PRESETS.map((preset) => {
          const active = backgroundId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => { setBackgroundId(preset.id); setShowPicker(false); }}
              title={preset.label}
              className="flex flex-col items-center gap-1.5 shrink-0"
            >
              <div
                className={`w-14 h-14 rounded-full border-[3px] transition-all ${
                  active
                    ? "border-[#a855f7] scale-110 shadow-lg shadow-[#a855f7]/30"
                    : "border-transparent"
                }`}
                style={{ background: preset.css }}
              />
              <span className={`text-[9px] leading-none ${active ? "text-[#a855f7]" : "text-[#4a4a4a]"}`}>
                {preset.label.split(" ")[0]}
              </span>
            </button>
          );
        })}

        {/* Custom "+" swatch */}
        <button
          onClick={() => {
            setBackgroundId("custom");
            setShowPicker((v) => !v);
          }}
          className="flex flex-col items-center gap-1.5 shrink-0"
          title="Custom gradient"
        >
          <div
            className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center transition-all ${
              isCustomActive
                ? "border-[#a855f7] scale-110 shadow-lg shadow-[#a855f7]/30"
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
          <span className={`text-[9px] leading-none ${isCustomActive ? "text-[#a855f7]" : "text-[#4a4a4a]"}`}>
            Custom
          </span>
        </button>
      </div>

      {activeLabel && (
        <p className="text-[10px] text-[#6b6b6b] px-4">{activeLabel}</p>
      )}

      {/* Inline color picker */}
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
  const setPadding = useStudioStore((s) => s.setPadding);
  const setBorderRadius = useStudioStore((s) => s.setBorderRadius);
  const setShadowDepth = useStudioStore((s) => s.setShadowDepth);

  return (
    <div className="flex flex-col gap-4 px-4">
      <SliderControl label="Padding" value={padding} min={0} max={40} unit="px" onChange={setPadding} />
      <SliderControl label="Corner Radius" value={borderRadius} min={0} max={32} unit="px" onChange={setBorderRadius} />
      <SliderControl label="Shadow" value={shadowDepth} min={0} max={100} unit="%" onChange={setShadowDepth} />
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
                onClick={() => setAspectRatio(value)}
                className={`flex-1 py-2.5 rounded-lg border text-xs font-semibold transition-all ${
                  active
                    ? "border-[#a855f7] bg-[#a855f7]/10 text-[#a855f7]"
                    : "border-[#2a2a2a] bg-[#0f0f0f] text-[#6b6b6b]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <ModeSelector />
    </div>
  );
}

function AnimateTab() {
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [showVideoPopover, setShowVideoPopover] = useState(false);

  return (
    <div className="flex flex-col gap-4 px-4">
      {/* Animation presets */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
            Animation
          </label>
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white leading-none tracking-wide">
            PHASE 3
          </span>
        </div>

        {ANIMATION_PRESETS.map((preset) => (
          <div key={preset.id} className="relative">
            <button
              onClick={() =>
                setActivePopover(activePopover === preset.id ? null : preset.id)
              }
              className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] text-left hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 transition-all group"
            >
              <span className="text-base text-[#2a2a2a] group-hover:text-[#a855f7]/40 transition-colors w-5 text-center leading-none">
                {preset.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[#3a3a3a] group-hover:text-[#6b6b6b] transition-colors leading-none">
                  {preset.label}
                </p>
                <p className="text-[10px] text-[#2a2a2a] mt-0.5">{preset.desc}</p>
              </div>
              <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-[#1a0033] border border-[#a855f7]/20 text-[#a855f7]/60 leading-none tracking-wide shrink-0">
                SOON
              </span>
            </button>
            {activePopover === preset.id && (
              <EmailCapturePopover
                teaser={preset.teaser}
                onClose={() => setActivePopover(null)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Render Animated Video */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
          Video Export
        </label>
        <div className="relative">
          <button
            onClick={() => setShowVideoPopover((v) => !v)}
            className="relative w-full flex items-center gap-3 px-3 py-3 rounded-xl border border-[#a855f7]/20 bg-[#0a0a0a] hover:bg-[#a855f7]/5 hover:border-[#a855f7]/40 transition-all group"
          >
            <svg
              className="w-4 h-4 text-[#3a3a3a] group-hover:text-[#a855f7]/50 transition-colors shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 9.75v9A2.25 2.25 0 004.5 18.75z"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#3a3a3a] group-hover:text-[#6b6b6b] transition-colors leading-none">
                Render Animated Video
              </p>
              <p className="text-[10px] text-[#2a2a2a] mt-0.5">
                5s loop · 60fps · .webm
              </p>
            </div>
            <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white leading-none tracking-wide shrink-0">
              SOON
            </span>
          </button>
          {showVideoPopover && (
            <EmailCapturePopover
              teaser="We are launching animated video loops next week — Float, 3D Tilt & Auto-Scroll. Drop your email to get early access the moment it goes live!"
              onClose={() => setShowVideoPopover(false)}
            />
          )}
        </div>
        <p className="text-[10px] text-[#2a2a2a] leading-relaxed">
          Client-side .webm — no upload, no server.
        </p>
      </div>
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

/* ── Tab definitions ── */

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "bg", label: "Background", icon: <BgIcon /> },
  { id: "frame", label: "Frame", icon: <FrameIcon /> },
  { id: "size", label: "Size", icon: <SizeIcon /> },
  { id: "animate", label: "Animate", icon: <AnimateIcon /> },
];

/* ── Main component ── */

export function MobileControlSheet() {
  const [activeTab, setActiveTab] = useState<Tab>("bg");

  return (
    <div className="flex md:hidden flex-col bg-[#080808] border-t border-[#1a1a1a] shrink-0">
      {/* Tab bar */}
      <div className="hide-scrollbar flex overflow-x-auto border-b border-[#1a1a1a]">
        {TABS.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[72px] flex items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-all border-b-2 whitespace-nowrap ${
                active
                  ? "border-[#a855f7] text-[#a855f7]"
                  : "border-transparent text-[#4a4a4a]"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="py-4 overflow-y-auto min-h-0" style={{ maxHeight: "36vh" }}>
        {activeTab === "bg" && <BgTab />}
        {activeTab === "frame" && <FrameTab />}
        {activeTab === "size" && <SizeTab />}
        {activeTab === "animate" && <AnimateTab />}
      </div>
    </div>
  );
}
