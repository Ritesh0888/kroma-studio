"use client";

import { useState } from "react";
import { useStudioStore, type StudioMode } from "@/store/useStudioStore";
import { EmailCapturePopover } from "../ui/EmailCapturePopover";
import { track } from "@/lib/analytics";

interface ModeConfig {
  id: StudioMode;
  label: string;
  icon: React.ReactNode;
  soon: boolean;
  isNew: boolean;
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

const MODES: ModeConfig[] = [
  {
    id: "mockup",
    label: "Mockup",
    icon: <ImageIcon />,
    soon: false,
    isNew: false,
    teaser: "",
  },
  {
    id: "code",
    label: "Code",
    icon: <CodeIcon />,
    soon: false,
    isNew: true,
    teaser: "",
  },
  {
    id: "content",
    label: "Content",
    icon: <TextIcon />,
    soon: true,
    isNew: false,
    teaser: "Tweet & text cards for social posts are still in the works. Notify me when Content mode launches — it's free.",
  },
];

export function ModeSelector() {
  const mode = useStudioStore((s) => s.mode);
  const setMode = useStudioStore((s) => s.setMode);
  const [popover, setPopover] = useState<{ id: string; teaser: string } | null>(null);

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Mode
      </label>

      <div className="flex gap-1.5">
        {MODES.map((m) => (
          <div key={m.id} className="relative flex-1">
            <button
              onClick={() => {
                track("mode_click", {
                  mode: m.id,
                  is_soon: m.soon,
                  previous_mode: mode,
                });
                if (m.soon) {
                  track("email_capture_open", { feature: "Content" });
                  setPopover({ id: m.id, teaser: m.teaser });
                } else {
                  setMode(m.id);
                  setPopover(null);
                }
              }}
              className={`relative w-full flex flex-col items-center gap-1 py-2.5 px-1 rounded-lg border text-center transition-all ${
                mode === m.id && !m.soon
                  ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                  : m.soon
                  ? "border-[#1e1e1e] bg-[#0a0a0a] text-[#3a3a3a] cursor-pointer hover:border-neon-purple/30 hover:text-text-muted"
                  : "border-[#1e1e1e] bg-[#0a0a0a] text-text-muted hover:border-border hover:text-[#a0a0a0]"
              }`}
            >
              {m.icon}
              <span className="text-[10px] font-medium leading-none">{m.label}</span>

              {m.soon && (
                <span className="absolute -top-1.5 -right-1 text-[8px] font-bold px-1 py-0.5 rounded bg-linear-to-r from-neon-purple to-neon-pink text-white leading-none tracking-wide shadow-sm shadow-neon-purple/40">
                  SOON
                </span>
              )}
              {m.isNew && (
                <span className="absolute -top-1.5 -right-1 text-[8px] font-bold px-1 py-0.5 rounded bg-linear-to-r from-neon-purple to-neon-pink text-white leading-none tracking-wide shadow-sm shadow-neon-purple/40">
                  NEW
                </span>
              )}
            </button>

            {popover?.id === m.id && m.soon && (
              <EmailCapturePopover
                teaser={popover.teaser}
                feature="Content"
                onClose={() => setPopover(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
