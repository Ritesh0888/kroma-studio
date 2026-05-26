"use client";

import { useState } from "react";
import { EmailCapturePopover } from "../ui/EmailCapturePopover";
import { track } from "@/lib/analytics";

interface Mode {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  soon: boolean;
  teaser: string;
}

const CodeIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const ImageIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A2.25 2.25 0 0023.25 18V6A2.25 2.25 0 0021 3.75H3A2.25 2.25 0 00.75 6v12A2.25 2.25 0 003 20.25z" />
  </svg>
);

const TextIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
  </svg>
);

const MODES: Mode[] = [
  {
    id: "mockup",
    label: "Mockup",
    icon: <ImageIcon />,
    active: true,
    soon: false,
    teaser: "",
  },
  {
    id: "code",
    label: "Code",
    icon: <CodeIcon />,
    active: false,
    soon: true,
    teaser: "Syntax-highlighted code snapshots are coming next week! Drop your email to get early access.",
  },
  {
    id: "content",
    label: "Content",
    icon: <TextIcon />,
    active: false,
    soon: true,
    teaser: "Tweet & text content mode is dropping soon! Get notified the moment it goes live.",
  },
];

export function ModeSelector() {
  const [popover, setPopover] = useState<{ id: string; teaser: string } | null>(null);

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Mode
      </label>

      <div className="flex gap-1.5">
        {MODES.map((mode) => (
          <div key={mode.id} className="relative flex-1">
            <button
              disabled={mode.soon}
              onClick={() => {
                track("mode_click", { mode: mode.id, is_soon: mode.soon });
                if (mode.soon) setPopover({ id: mode.id, teaser: mode.teaser });
              }}
              className={`relative w-full flex flex-col items-center gap-1 py-2.5 px-1 rounded-lg border text-center transition-all ${
                mode.active && !mode.soon
                  ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                  : mode.soon
                  ? "border-[#1e1e1e] bg-[#0a0a0a] text-[#3a3a3a] cursor-pointer hover:border-neon-purple/30 hover:text-text-muted"
                  : "border-border bg-surface text-text-muted"
              }`}
            >
              {mode.icon}
              <span className="text-[10px] font-medium leading-none">{mode.label}</span>

              {mode.soon && (
                <span className="absolute -top-1.5 -right-1 text-[8px] font-bold px-1 py-0.5 rounded bg-linear-to-r from-neon-purple to-neon-pink text-white leading-none tracking-wide shadow-sm shadow-neon-purple/40">
                  SOON
                </span>
              )}
            </button>

            {popover?.id === mode.id && (
              <EmailCapturePopover
                teaser={popover.teaser}
                onClose={() => setPopover(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
