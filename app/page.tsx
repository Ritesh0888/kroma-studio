"use client";

import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { CenterPanel } from "@/components/layout/CenterPanel";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileControlSheet } from "@/components/layout/MobileControlSheet";
import { MobileAdFooter } from "@/components/layout/MobileAdFooter";

export default function Home() {
  return (
    // Use 100dvh so mobile address bar doesn't cause overflow
    <main className="flex flex-col md:flex-row" style={{ height: "100dvh", width: "100vw", overflow: "hidden", background: "#000" }}>
      {/* SEO semantic headings — visually hidden, fully crawlable */}
      <div className="sr-only" aria-hidden="false">
        <h1>Stop Posting Boring Screenshots. Make Code &amp; Mockups Aesthetic.</h1>
        <h2>Premium Browser Frame Mockups</h2>
        <h2>Code Snippet Beautifier &amp; Screenshot Editor</h2>
        <h2>Aesthetic Background Presets for Developers &amp; Designers</h2>
        <p>Free online tool to generate stunning browser mockups, aesthetic code screenshots, and graphic assets — 100% client-side, no sign-up required.</p>
      </div>
      {/* ── Mobile-only: fixed top header ── */}
      <MobileHeader />

      {/* ── Desktop-only: left sidebar ── */}
      <div className="hidden md:flex md:w-[25%] h-full">
        <LeftSidebar />
      </div>

      {/* ── Shared canvas — flex-1 so it fills remaining space on both layouts ── */}
      <CenterPanel />

      {/* ── Desktop-only: right sidebar ── */}
      <div className="hidden md:flex md:w-[20%] h-full">
        <RightSidebar />
      </div>

      {/* ── Mobile-only: tabbed control sheet + ad footer ── */}
      <MobileControlSheet />
      <MobileAdFooter />
    </main>
  );
}
