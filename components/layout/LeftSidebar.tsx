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
    <aside className="w-full h-full flex flex-col bg-[#080808] border-r border-[#1a1a1a] shrink-0">
      {/* Logo / Brand */}
      <div className="px-4 py-4 border-b border-[#1a1a1a] shrink-0">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="KromaStudio Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg object-cover"
          />
          <div>
            <span className="text-sm font-bold text-white tracking-tight">
              Kroma
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
                Studio
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Controls — min-h-0 is required for flex overflow + scroll to work */}
      <div className="flex-1 min-h-0 px-4 py-4 flex flex-col gap-5 overflow-y-auto">
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
