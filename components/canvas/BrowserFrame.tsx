"use client";

import dynamic from "next/dynamic";
import { useStudioStore } from "@/store/useStudioStore";
import { ImageDropzone } from "./ImageDropzone";

const CodeDisplay = dynamic(
  () => import("./CodeDisplay").then((m) => ({ default: m.CodeDisplay })),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#1c1c1e]" /> }
);

export function BrowserFrame() {
  const mode = useStudioStore((s) => s.mode);

  return (
    <div className="flex flex-col w-full h-full bg-[#1c1c1e] rounded-lg overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#2c2c2e] border-b border-[#3a3a3c] shrink-0">
        {/* macOS dots */}
        <div className="flex items-center gap-1 md:gap-1.5">
          <span
            className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            style={{ background: "#ff5f57" }}
            title="Close"
          />
          <span
            className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            style={{ background: "#ffbd2e" }}
            title="Minimise"
          />
          <span
            className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            style={{ background: "#28c840" }}
            title="Maximise"
          />
        </div>

        {/* Fake URL bar */}
        <div className="flex-1 mx-2 md:mx-4">
          <div className="flex items-center gap-1.5 bg-[#1c1c1e] rounded-md px-2 md:px-3 py-0.5 md:py-1 max-w-xs mx-auto">
            <svg
              className="w-2.5 h-2.5 md:w-3 md:h-3 text-text-muted shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[9px] md:text-[11px] text-text-muted truncate select-none">
              kromastudio.in
            </span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-hidden">
        {mode === "code" ? <CodeDisplay /> : <ImageDropzone />}
      </div>
    </div>
  );
}
