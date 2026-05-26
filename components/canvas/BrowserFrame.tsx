"use client";

import dynamic from "next/dynamic";
import { useStudioStore, type ChromeStyle } from "@/store/useStudioStore";
import { ImageDropzone } from "./ImageDropzone";

const CodeDisplay = dynamic(
  () => import("./CodeDisplay").then((m) => ({ default: m.CodeDisplay })),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#1c1c1e]" /> }
);

function MacOsDots({ size = "md" }: { size?: "sm" | "md" }) {
  const cls = size === "sm"
    ? "w-2 h-2 rounded-full"
    : "w-2.5 h-2.5 md:w-3 md:h-3 rounded-full";
  return (
    <div className="flex items-center gap-1 md:gap-1.5">
      <span className={cls} style={{ background: "#ff5f57" }} title="Close" />
      <span className={cls} style={{ background: "#ffbd2e" }} title="Minimise" />
      <span className={cls} style={{ background: "#28c840" }} title="Maximise" />
    </div>
  );
}

function LockIcon() {
  return (
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
  );
}

function ChromeBar({ style }: { style: ChromeStyle }) {
  if (style === "macos-dark") {
    return (
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#2c2c2e] border-b border-[#3a3a3c] shrink-0">
        <MacOsDots />
        <div className="flex-1 mx-2 md:mx-4">
          <div className="flex items-center gap-1.5 bg-[#1c1c1e] rounded-md px-2 md:px-3 py-0.5 md:py-1 max-w-xs mx-auto">
            <LockIcon />
            <span className="text-[9px] md:text-[11px] text-text-muted truncate select-none">
              kromastudio.in
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (style === "macos-light") {
    return (
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#e8e8e8] border-b border-[#d0d0d0] shrink-0">
        <MacOsDots />
        <div className="flex-1 mx-2 md:mx-4">
          <div className="flex items-center gap-1.5 bg-[#d4d4d4] rounded-md px-2 md:px-3 py-0.5 md:py-1 max-w-xs mx-auto">
            <svg
              className="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0"
              fill="#888"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[9px] md:text-[11px] text-[#555] truncate select-none">
              kromastudio.in
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (style === "windows") {
    return (
      <div className="flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-[#1a1a2e] border-b border-[#2a2a4e] shrink-0">
        <span className="text-[9px] md:text-[11px] text-[#8888aa] select-none flex-1">
          kromastudio.in
        </span>
        <div className="flex items-center gap-0">
          {/* Minimise */}
          <button className="flex items-center justify-center w-7 h-6 md:w-8 md:h-7 text-[#8888aa] hover:bg-[#2a2a4e] transition-colors text-[10px] select-none">
            &#x2014;
          </button>
          {/* Maximise */}
          <button className="flex items-center justify-center w-7 h-6 md:w-8 md:h-7 text-[#8888aa] hover:bg-[#2a2a4e] transition-colors text-[10px] select-none">
            &#x25A1;
          </button>
          {/* Close */}
          <button className="flex items-center justify-center w-7 h-6 md:w-8 md:h-7 text-[#8888aa] hover:bg-[#c42b1c] hover:text-white transition-colors text-[10px] select-none">
            &#x2715;
          </button>
        </div>
      </div>
    );
  }

  if (style === "minimal") {
    return (
      <div className="flex items-center gap-1.5 px-3 md:px-4 py-2 md:py-3 bg-[#1c1c1e] border-b border-border shrink-0">
        <MacOsDots size="sm" />
      </div>
    );
  }

  return null;
}

export function BrowserFrame() {
  const mode = useStudioStore((s) => s.mode);
  const chromeStyle = useStudioStore((s) => s.chromeStyle);

  const contentBg = chromeStyle === "macos-light" ? "bg-white" : "bg-[#1c1c1e]";

  return (
    <div className={`flex flex-col w-full h-full ${contentBg} overflow-hidden`}>
      <ChromeBar style={chromeStyle} />
      <div className="flex-1 overflow-hidden">
        {mode === "code" ? <CodeDisplay /> : <ImageDropzone />}
      </div>
    </div>
  );
}
