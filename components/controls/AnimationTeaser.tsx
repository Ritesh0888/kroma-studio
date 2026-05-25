"use client";

import { useState } from "react";
import { EmailCapturePopover } from "@/components/ui/EmailCapturePopover";

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
        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white leading-none tracking-wide shadow-sm shadow-[#a855f7]/40">
          PHASE 3
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {PRESETS.map((preset) => (
          <div key={preset.id} className="relative">
            <button
              onClick={() => setPopover(popover === preset.id ? null : preset.id)}
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

            {popover === preset.id && (
              <EmailCapturePopover
                teaser={preset.teaser}
                onClose={() => setPopover(null)}
              />
            )}
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[#2a2a2a] leading-relaxed">
        Record 5s / 10s looping .webm — 100% client-side, no upload.
      </p>
    </div>
  );
}
