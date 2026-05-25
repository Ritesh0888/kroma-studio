"use client";

import { PaddingControl } from "@/components/controls/PaddingControl";
import { BorderRadiusControl } from "@/components/controls/BorderRadiusControl";
import { ShadowControl } from "@/components/controls/ShadowControl";
import { AspectRatioControl } from "@/components/controls/AspectRatioControl";
import { BackgroundControl } from "@/components/controls/BackgroundControl";
import { ModeSelector } from "@/components/controls/ModeSelector";
import { AnimationTeaser } from "@/components/controls/AnimationTeaser";

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mt-1">
      <span className="text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-widest whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#1e1e1e]" />
    </div>
  );
}

export function LeftSidebar() {
  return (
    <aside className="w-[25%] h-full flex flex-col bg-[#080808] border-r border-[#1a1a1a] overflow-y-auto shrink-0">
      {/* Logo / Brand */}
      <div className="px-4 py-4 border-b border-[#1a1a1a] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5z" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-bold text-white tracking-tight">
              Kroma
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
                Studio
              </span>
            </span>
            <span className="block text-[9px] text-[#4a4a4a] -mt-0.5 tracking-widest uppercase">
              Phase 1 · Mockup
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-5 overflow-y-auto">
        <div>
          <SectionDivider label="Mode" />
          <div className="mt-4">
            <ModeSelector />
          </div>
        </div>

        <div>
          <SectionDivider label="Canvas" />
          <div className="mt-4 flex flex-col gap-5">
            <AspectRatioControl />
            <BackgroundControl />
          </div>
        </div>

        <div>
          <SectionDivider label="Frame" />
          <div className="mt-4 flex flex-col gap-5">
            <PaddingControl />
            <BorderRadiusControl />
            <ShadowControl />
          </div>
        </div>

        <div>
          <SectionDivider label="Animate" />
          <div className="mt-4">
            <AnimationTeaser />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[#1a1a1a] shrink-0">
        <p className="text-[10px] text-[#3a3a3a] text-center">
          Phase 1 · Static Engine
        </p>
      </div>
    </aside>
  );
}
