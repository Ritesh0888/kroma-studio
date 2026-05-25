"use client";

import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { CenterPanel } from "@/components/layout/CenterPanel";
import { RightSidebar } from "@/components/layout/RightSidebar";

export default function Home() {
  return (
    <main className="flex h-screen w-screen overflow-hidden bg-black">
      <LeftSidebar />
      <CenterPanel />
      <RightSidebar />
    </main>
  );
}
