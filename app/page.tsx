"use client";

import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { CenterPanel } from "@/components/layout/CenterPanel";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileControlSheet } from "@/components/layout/MobileControlSheet";
import { MobileAdFooter } from "@/components/layout/MobileAdFooter";
import { SeoHero } from "@/components/layout/SeoHero";
import { STUDIO_HERO_HEADLINE } from "@/lib/site";
import { WatermarkModal } from "@/components/modals/WatermarkModal";

export default function Home() {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-black">
      <SeoHero />
      <main className="flex min-h-0 flex-1 basis-0 overflow-hidden flex-col md:flex-row">
        {/* SEO semantic content — single h1 for all viewports */}
        <div className="sr-only" aria-hidden="false">
          <h1>{STUDIO_HERO_HEADLINE}</h1>
          <h2>Premium Browser Frame Mockups</h2>
          <h2>Syntax-Highlighted Code Screenshots</h2>
          <h2>Code Themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night</h2>
          <h2>12 Aesthetic Gradient Background Presets for Developers &amp; Designers</h2>
          <h2>Headline Text Overlay for Viral Social Posts</h2>
          <h2>Export HD PNG Free — No Sign-Up Required</h2>
          <p>
            Free online tool to generate stunning browser mockups and syntax-highlighted code screenshots.
            Supports JavaScript, TypeScript, Python, HTML, CSS, Go, and Rust with themes including Dracula,
            One Dark Pro, GitHub Dark, Night Owl, and Tokyo Night. Add a custom headline text overlay and
            gradient background to create scroll-stopping social media graphics — 100% client-side, no sign-up required.
          </p>
        </div>
        {/* ── Mobile-only: fixed top header ── */}
        <MobileHeader />

        {/* ── Desktop-only: left sidebar ── */}
        <div className="hidden md:flex md:w-[25%] min-h-0 shrink-0 self-stretch overflow-hidden">
          <LeftSidebar />
        </div>

        {/* ── Shared canvas — flex-1 so it fills remaining space on both layouts ── */}
        <CenterPanel />

        {/* ── Desktop-only: right sidebar ── */}
        <div className="hidden md:flex md:w-[20%] min-h-0 shrink-0 self-stretch overflow-hidden">
          <RightSidebar />
        </div>

        {/* ── Mobile-only: tabbed control sheet + ad footer ── */}
        <MobileControlSheet />
        <MobileAdFooter />
        <WatermarkModal />
      </main>
    </div>
  );
}
