"use client";

import { useState } from "react";
import { toPng } from "html-to-image";
import { useStudioStore } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|Android|Mobile/i.test(navigator.userAgent);
}

function isIOSDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad/i.test(navigator.userAgent);
}

export type ExportSource = "desktop" | "mobile";

export function useExport() {
  const setIsExporting = useStudioStore((s) => s.setIsExporting);
  const mode = useStudioStore((s) => s.mode);
  const contentTemplate = useStudioStore((s) => s.contentTemplate);
  const [exportedImageUrl, setExportedImageUrl] = useState<string | null>(null);

  async function exportPng(source: ExportSource) {
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
        setExportedImageUrl(dataUrl);
        track("export_png_success", {
          source,
          mode,
          delivery: "ios_modal",
          ...(mode === "content" ? { content_template: contentTemplate } : {}),
        });
        track("export_modal_open", { source: "ios" });
        return;
      }

      const link = document.createElement("a");
      link.download = `kromastudio-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      track("export_png_success", {
        source,
        mode,
        delivery: "download",
        ...(mode === "content" ? { content_template: contentTemplate } : {}),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("Export failed:", err);
      track("export_png_error", {
        source,
        mode,
        error: message,
        ...(mode === "content" ? { content_template: contentTemplate } : {}),
      });
    } finally {
      setIsExporting(false);
    }
  }

  function clearExportedImage() {
    setExportedImageUrl(null);
  }

  return { exportPng, exportedImageUrl, clearExportedImage };
}
