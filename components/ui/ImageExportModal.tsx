"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

type DismissReason = "close_button" | "backdrop" | "escape";

interface Props {
  imageUrl: string;
  onClose: () => void;
}

export function ImageExportModal({ imageUrl, onClose }: Props) {
  const dismiss = (reason: DismissReason) => {
    track("export_modal_dismiss", { reason });
    onClose();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss("escape");
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && dismiss("backdrop")}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a1a1a] shrink-0">
        <div>
          <p className="text-sm font-semibold text-white">Your Image is Ready</p>
          <p className="text-xs text-[#6b6b6b] mt-0.5">Long press the image to save to Camera Roll</p>
        </div>
        <button
          onClick={() => dismiss("close_button")}
          className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#6b6b6b] hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Exported mockup"
          className="max-w-full max-h-full rounded-xl shadow-2xl shadow-[#a855f7]/10 border border-[#2a2a2a]"
          style={{ touchAction: "none" }}
        />
      </div>

      {/* Instructions */}
      <div className="px-4 py-4 border-t border-[#1a1a1a] shrink-0 flex flex-col gap-3">
        <div className="flex items-start gap-3 bg-[#0a0a0a] rounded-xl p-3 border border-[#1e1e1e]">
          <div className="w-8 h-8 rounded-lg bg-[#a855f7]/10 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Long press to save</p>
            <p className="text-xs text-[#6b6b6b] mt-0.5 leading-relaxed">
              Press and hold the image above, then tap <strong className="text-[#a0a0a0]">&quot;Save to Photos&quot;</strong> or <strong className="text-[#a0a0a0]">&quot;Download Image&quot;</strong>
            </p>
          </div>
        </div>

        <button
          onClick={() => dismiss("close_button")}
          className="w-full py-2.5 rounded-xl border border-[#2a2a2a] text-sm text-[#6b6b6b] hover:text-white transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
