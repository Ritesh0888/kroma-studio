"use client";

import { useCallback, useEffect, useRef } from "react";
import { NotifyMeForm } from "@/components/ui/NotifyMeForm";
import { track } from "@/lib/analytics";

interface Props {
  teaser: string;
  feature?: string;
  onClose: () => void;
}

export function EmailCapturePopover({ teaser, feature, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleDismiss = useCallback(
    (reason: "outside_click" | "escape" | "close_button" | "maybe_later") => {
      track("email_capture_dismiss", { feature: feature ?? "unknown", reason });
      onClose();
    },
    [feature, onClose],
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handleDismiss("outside_click");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleDismiss]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleDismiss("escape");
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleDismiss]);

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-neon-purple/30 bg-[#0d0d1a] shadow-2xl shadow-neon-purple/20"
      style={{ top: "100%" }}
    >
      <div className="h-px w-full bg-linear-to-r from-neon-purple via-neon-pink to-neon-purple" />

      <div className="p-4">
        <NotifyMeForm
          feature={feature}
          teaser={teaser}
          onDismiss={() => handleDismiss("maybe_later")}
        />
      </div>
    </div>
  );
}
