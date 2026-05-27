"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { toCanvas } from "html-to-image";
import { useStudioStore } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|Android|Mobile/i.test(navigator.userAgent);
}

// Matches Safari but NOT Chrome/Edge/Brave (all of which include "Safari" in their UA).
// crios = Chrome iOS, fxios = Firefox iOS.
function isSafariBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
}

function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  // Revoke after a short delay so the browser completes the download handoff
  setTimeout(() => URL.revokeObjectURL(url), 5_000);
}

export function useVideoRecorder() {
  const recordDuration = useStudioStore((s) => s.recordDuration);
  const animationPreset = useStudioStore((s) => s.animationPreset);
  const mode = useStudioStore((s) => s.mode);
  const setIsRecording = useStudioStore((s) => s.setIsRecording);
  const setRecordingProgress = useStudioStore((s) => s.setRecordingProgress);

  // Evaluated after hydration only — navigator is undefined on the server,
  // so initialising to false ensures SSR and first client render match.
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(isSafariBrowser());
  }, []);
  const rafRef = useRef<number | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const startTimeRef = useRef<number>(0);

  const startRecording = useCallback(async () => {
    // Guard: prevent double-starting
    if (recorderRef.current) return;

    const source = isMobileDevice() ? "mobile" : "desktop";

    // Safari does not support captureStream() on canvas elements — block early.
    if (isSafari) {
      track("video_record_error", { error: "Safari not supported", source, mode });
      alert("Video export requires Chrome, Edge, or Firefox. Safari does not support canvas recording.");
      return;
    }

    const node = document.getElementById("studio-canvas");
    if (!node) {
      console.error("[VideoRecorder] #studio-canvas not found");
      track("video_record_error", { error: "Canvas not found", source, mode });
      return;
    }

    if (typeof MediaRecorder === "undefined") {
      track("video_record_error", { error: "MediaRecorder not supported", source, mode });
      alert("Video recording is not supported in this browser. Try Chrome or Edge.");
      return;
    }

    track("video_record_start", { preset: animationPreset, duration: recordDuration, source, mode });
    setIsRecording(true);
    setRecordingProgress(0);

    try {
      // First snapshot at 2× pixel ratio to determine output dimensions.
      // fetchRequestInit: cors prevents SecurityError when the canvas contains
      // cross-origin images or Google/Geist web fonts loaded via CDN.
      const snapshotCanvas = await toCanvas(node, {
        cacheBust: true,
        skipFonts: false,
        pixelRatio: 2,
        fetchRequestInit: { mode: "cors", credentials: "omit" },
      });
      const { width, height } = snapshotCanvas;

      // Persistent offscreen canvas — MediaRecorder streams this
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const ctx = offscreen.getContext("2d")!;

      // Draw the first snapshot so the stream has content before recorder.start()
      ctx.drawImage(snapshotCanvas, 0, 0, width, height);

      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
        ? "video/webm;codecs=vp9"
        : MediaRecorder.isTypeSupported("video/webm;codecs=vp8")
        ? "video/webm;codecs=vp8"
        : "video/webm";

      const stream = offscreen.captureStream(60);
      const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 8_000_000,
      });
      recorderRef.current = recorder;

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        const blob = new Blob(chunks, { type: "video/webm" });
        triggerDownload(blob, `kromastudio-${Date.now()}.webm`);

        // Explicit GC — sever all references so the GC can reclaim the GPU
        // texture and JS heap consumed during the 60-FPS capture loop.
        ctx.clearRect(0, 0, offscreen.width, offscreen.height);
        offscreen.width = 0; // detaches the GPU-backed texture
        chunks.length = 0;   // release accumulated Blob references
        recorderRef.current = null;

        setIsRecording(false);
        setRecordingProgress(0);
        track("video_record_complete", {
          preset: animationPreset,
          duration: recordDuration,
          source,
          mode,
          sizeKb: Math.round(blob.size / 1024),
        });
      };

      recorder.onerror = (e) => {
        console.error("[VideoRecorder] MediaRecorder error", e);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setIsRecording(false);
        setRecordingProgress(0);
        track("video_record_error", { error: "MediaRecorder error", source, mode });
      };

      // rAF loop: snapshot DOM at 2× each frame, update progress, paint offscreen canvas
      let running = true;
      async function captureFrame() {
        if (!running) return;

        // Update progress in Zustand so RenderingOverlay can read it directly
        const elapsed = Date.now() - startTimeRef.current;
        const pct = Math.min((elapsed / (recordDuration * 1000)) * 100, 99);
        setRecordingProgress(pct);

        try {
          const frameCanvas = await toCanvas(node!, {
            cacheBust: false,
            skipFonts: true,
            pixelRatio: 2,
            fetchRequestInit: { mode: "cors", credentials: "omit" },
          });
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(frameCanvas, 0, 0, width, height);
        } catch {
          // silently skip a dropped frame — stream holds last good frame
        }

        rafRef.current = requestAnimationFrame(captureFrame);
      }

      startTimeRef.current = Date.now();
      recorder.start(100); // collect data every 100ms
      captureFrame();

      // Auto-stop after selected duration
      setTimeout(() => {
        running = false;
        if (recorderRef.current && recorderRef.current.state !== "inactive") {
          recorderRef.current.stop();
        }
        recorderRef.current = null;
      }, recordDuration * 1000);

    } catch (err) {
      console.error("[VideoRecorder] Failed to start recording", err);
      setIsRecording(false);
      setRecordingProgress(0);
      track("video_record_error", {
        error: err instanceof Error ? err.message : "unknown",
        source,
        mode,
      });
    }
  }, [recordDuration, animationPreset, mode, isSafari, setIsRecording, setRecordingProgress]);

  return { startRecording, isSafari };
}
