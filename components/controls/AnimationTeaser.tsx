"use client";

import { useState } from "react";
import { EmailCapturePopover } from "@/components/ui/EmailCapturePopover";
import { track } from "@/lib/analytics";

const PRESETS = [
  {
    id: "float",
    label: "Subtle Float",
    desc: "Hover loop",
    icon: "〜",
    teaser: "Animated video loops are launching next week! Drop your email to get early access the moment it goes live.",
  },
  {
    id: "tilt",
    label: "3D Tilt",
    desc: "Auto rotate",
    icon: "◈",
    teaser: "3D tilt animation export is coming soon. Be the first to know — drop your email!",
  },
  {
    id: "scroll",
    label: "Auto Scroll",
    desc: "Code pan",
    icon: "⇕",
    teaser: "Auto-scroll for long code snapshots is dropping soon. Leave your email for early access!",
  },
];

export function AnimationTeaser() {
  const [popover, setPopover] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="flex items-center gap-2">
        <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
          Animation
        </label>
        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-linear-to-r from-neon-purple to-neon-pink text-white leading-none tracking-wide shadow-sm shadow-neon-purple/40">
          PHASE 3
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {PRESETS.map((preset) => (
          <div key={preset.id} className="relative">
            <button
              onClick={() => {
                const opening = popover !== preset.id;
                if (opening) {
                  track("animation_teaser_click", { preset: preset.label });
                } else {
                  track("animation_teaser_dismiss", { preset: preset.label, reason: "toggle" });
                }
                setPopover(opening ? preset.id : null);
              }}
              className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-surface-2 bg-[#0a0a0a] text-left hover:border-neon-purple/30 hover:bg-neon-purple/5 transition-all group"
            >
              <span className="text-base text-border group-hover:text-neon-purple/40 transition-colors w-5 text-center leading-none">
                {preset.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[#3a3a3a] group-hover:text-text-muted transition-colors leading-none">
                  {preset.label}
                </p>
                <p className="text-[10px] text-border mt-0.5">{preset.desc}</p>
              </div>
              <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-[#1a0033] border border-neon-purple/20 text-neon-purple/60 leading-none tracking-wide shrink-0">
                SOON
              </span>
            </button>

            {popover === preset.id && (
              <EmailCapturePopover
                teaser={preset.teaser}
                feature={preset.label}
                onClose={() => setPopover(null)}
              />
            )}
          </div>
        ))}
      </div>

      <p className="text-[10px] text-border leading-relaxed">
        Record 5s / 10s looping .webm — 100% client-side, no upload.
      </p>
    </div>
  );
}
