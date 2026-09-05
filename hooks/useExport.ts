"use client";

import { useState } from "react";
import { toPng } from "html-to-image";
import { useStudioStore } from "@/store/useStudioStore";
import { createExportAttemptId, track } from "@/lib/analytics";

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
  const exportScale = useStudioStore((s) => s.exportScale);
  const [exportedImageUrl, setExportedImageUrl] = useState<string | null>(null);

  async function exportPng(source: ExportSource) {
    const node = document.getElementById("studio-canvas");
    if (!node) return;

    const exportAttemptId = createExportAttemptId();
    const attemptProps = {
      source,
      mode,
      export_attempt_id: exportAttemptId,
      ...(mode === "content" ? { content_template: contentTemplate } : {}),
    };

    track("export_png_click", attemptProps);
    track("export_start", attemptProps);

    setIsExporting(true);
    try {
      const mobile = isMobileDevice();
      const ios = isIOSDevice();

      const dataUrl = await toPng(node, {
        // Cap at 1.5x on mobile — prevents Safari OOM crash
        pixelRatio: mobile ? Math.min(exportScale, 1.5) : exportScale,
        skipFonts: false,
        cacheBust: true,
      });

      if (ios) {
        setExportedImageUrl(dataUrl);
        track("export_png_success", {
          ...attemptProps,
          delivery: "ios_modal",
        });
        track("export_modal_open", { source: "ios" });
        return;
      }

      const link = document.createElement("a");
      link.download = `kromastudio-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      track("export_png_success", {
        ...attemptProps,
        delivery: "download",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("Export failed:", err);
      track("export_png_error", {
        ...attemptProps,
        error: message,
      });
    } finally {
      setIsExporting(false);
    }
  }

  async function exportTransparentPng(source: ExportSource) {
    const node = document.getElementById("studio-canvas");
    if (!node) return;

    setIsExporting(true);
    const savedBackground = node.style.background;
    node.style.background = "transparent";
    try {
      const mobile = isMobileDevice();
      const ios = isIOSDevice();

      const dataUrl = await toPng(node, {
        pixelRatio: mobile ? Math.min(exportScale, 1.5) : exportScale,
        skipFonts: false,
        cacheBust: true,
        // Must be explicitly set to force a transparent canvas — toPng
        // otherwise defaults to a white fill when no background is provided.
        backgroundColor: "rgba(0,0,0,0)",
      });

      if (ios) {
        setExportedImageUrl(dataUrl);
        track("export_transparent_png_success", { source, mode });
        track("export_modal_open", { source: "ios" });
        return;
      }

      const link = document.createElement("a");
      link.download = `kromastudio-transparent-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      track("export_transparent_png_success", { source, mode });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("Transparent export failed:", err);
      track("export_transparent_png_error", { source, mode, error: message });
    } finally {
      node.style.background = savedBackground;
      setIsExporting(false);
    }
  }

  function clearExportedImage() {
    setExportedImageUrl(null);
  }

  return { exportPng, exportTransparentPng, exportedImageUrl, clearExportedImage };
}
