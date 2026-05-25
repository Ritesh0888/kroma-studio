"use client";

import { toPng } from "html-to-image";
import { useStudioStore } from "@/store/useStudioStore";

export function useExport() {
  const setIsExporting = useStudioStore((s) => s.setIsExporting);

  async function exportPng() {
    const node = document.getElementById("studio-canvas");
    if (!node) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(node, {
        pixelRatio: 2,
        skipFonts: false,
        cacheBust: true,
      });

      const link = document.createElement("a");
      link.download = `kromastudio-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setIsExporting(false);
    }
  }

  return { exportPng };
}
