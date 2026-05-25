"use client";

import { useState } from "react";
import { toPng } from "html-to-image";
import { useStudioStore } from "@/store/useStudioStore";

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|Android|Mobile/i.test(navigator.userAgent);
}

function isIOSDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad/i.test(navigator.userAgent);
}

export function useExport() {
  const setIsExporting = useStudioStore((s) => s.setIsExporting);
  const [exportedImageUrl, setExportedImageUrl] = useState<string | null>(null);

  async function exportPng() {
    const node = document.getElementById("studio-canvas");
    if (!node) return;

    setIsExporting(true);
    try {
      const mobile = isMobileDevice();
      const ios = isIOSDevice();

      const dataUrl = await toPng(node, {
        // Cap at 1.5x on mobile — prevents Safari OOM crash
        pixelRatio: mobile ? 1.5 : 2,
        skipFonts: false,
        cacheBust: true,
      });

      if (ios) {
        // iOS Safari blocks programmatic downloads — show long-press modal instead
        setExportedImageUrl(dataUrl);
        return;
      }

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

  function clearExportedImage() {
    setExportedImageUrl(null);
  }

  return { exportPng, exportedImageUrl, clearExportedImage };
}
