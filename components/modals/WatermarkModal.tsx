"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { SITE_URL } from "@/lib/site";
import { useStudioStore } from "@/store/useStudioStore";

const SHARE_TEXT = `Just created a premium browser mockup with KromaStudio - 100% free and client-side.\n\n${SITE_URL}`;
const TWITTER_SHARE_URL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}`;
const LINKEDIN_SHARE_URL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`;

export function WatermarkModal() {
  const showWatermarkModal = useStudioStore((s) => s.showWatermarkModal);
  const setShowWatermarkModal = useStudioStore((s) => s.setShowWatermarkModal);
  const setWatermarkVisible = useStudioStore((s) => s.setWatermarkVisible);

  useEffect(() => {
    if (!showWatermarkModal) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        track("watermark_modal_dismiss", { reason: "escape" });
        setShowWatermarkModal(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [setShowWatermarkModal, showWatermarkModal]);

  if (!showWatermarkModal) return null;

  const dismissWatermarkModal = (reason: "backdrop" | "close_button") => {
    track("watermark_modal_dismiss", { reason });
    setShowWatermarkModal(false);
  };

  const unlockWatermark = (platform: "twitter" | "linkedin") => {
    track("share_intent_clicked", { platform });
    setWatermarkVisible(false);
    setShowWatermarkModal(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm"
      onClick={(event) => event.target === event.currentTarget && dismissWatermarkModal("backdrop")}
    >
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#080808] shadow-2xl shadow-neon-purple/10">
        <div className="flex items-start justify-between border-b border-surface-2 px-5 py-4">
          <div>
            <p className="text-base font-semibold text-white">Remove Watermark for Free</p>
            <p className="mt-1 text-xs leading-relaxed text-text-muted">
              Share KromaStudio once to unlock watermark-free exports in this session.
            </p>
          </div>
          <button
            onClick={() => dismissWatermarkModal("close_button")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-text-muted transition-colors hover:text-white"
            aria-label="Close watermark modal"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-3 px-5 py-5">
          <a
            href={TWITTER_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => unlockWatermark("twitter")}
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Share on X to Remove
          </a>
          <a
            href={LINKEDIN_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => unlockWatermark("linkedin")}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#0a66c2] px-4 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Share on LinkedIn to Remove
          </a>

          <div className="rounded-xl border border-surface-2 bg-surface px-3 py-3">
            <p className="text-[11px] leading-relaxed text-text-muted">
              Honor-system unlock: clicking a share option opens the social share intent and removes the
              watermark. No account, upload, or verification needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
