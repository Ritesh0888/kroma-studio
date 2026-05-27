"use client";

import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { CenterPanel } from "@/components/layout/CenterPanel";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileControlSheet } from "@/components/layout/MobileControlSheet";
import { MobileAdFooter } from "@/components/layout/MobileAdFooter";
import { SeoHero } from "@/components/layout/SeoHero";
import { WatermarkModal } from "@/components/modals/WatermarkModal";

export default function Home() {
  return (
    <div
      className="flex flex-col"
      style={{ height: "100dvh", width: "100vw", overflow: "hidden", background: "#000" }}
    >
      <SeoHero />
      <main className="flex flex-1 min-h-0 flex-col md:flex-row">
        {/* SEO semantic content — h2s and supporting copy for crawlers */}
        <div className="sr-only" aria-hidden="false">
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
        <div className="hidden md:flex md:w-[25%] h-full min-h-0 shrink-0">
          <LeftSidebar />
        </div>

        {/* ── Shared canvas — flex-1 so it fills remaining space on both layouts ── */}
        <CenterPanel />

        {/* ── Desktop-only: right sidebar ── */}
        <div className="hidden md:flex md:w-[20%] h-full min-h-0 shrink-0">
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
