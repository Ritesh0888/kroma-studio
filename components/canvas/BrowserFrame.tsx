"use client";

import dynamic from "next/dynamic";
import { useStudioStore, type ChromeStyle } from "@/store/useStudioStore";
import { ImageDropzone } from "./ImageDropzone";
import { ContentDisplay } from "./ContentDisplay";

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

function LockIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      className="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0"
      fill={color}
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

function FaviconOrGlobe({
  faviconDataUrl,
  className = "w-3 h-3 shrink-0",
  fallbackColor = "#5f6368",
}: {
  faviconDataUrl: string | null;
  className?: string;
  fallbackColor?: string;
}) {
  if (faviconDataUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={faviconDataUrl} className={`${className} object-contain`} alt="" />
    );
  }
  return (
    <svg className={className} fill={fallbackColor} viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

function ChromeBar({
  style,
  urlBarText,
  faviconDataUrl,
}: {
  style: ChromeStyle;
  urlBarText: string;
  faviconDataUrl: string | null;
}) {
  const displayUrl = urlBarText || "yourapp.com";

  if (style === "chrome") {
    return (
      <div className="shrink-0">
        {/* Tab strip */}
        <div className="flex items-end bg-[#dee1e6] px-2 pt-1.5 gap-0">
          <div className="flex items-center gap-1.5 bg-white rounded-t-md px-2.5 py-1 border-t border-l border-r border-[#c0c3c8] min-w-0 max-w-[180px]">
            <FaviconOrGlobe faviconDataUrl={faviconDataUrl} fallbackColor="#5f6368" />
            <span className="text-[9px] md:text-[10px] text-[#202124] truncate select-none flex-1">
              {displayUrl}
            </span>
            <span className="text-[#5f6368] text-[9px] shrink-0 ml-1">✕</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center pb-1.5">
            <button className="w-7 h-6 flex items-center justify-center text-[#5f6368] hover:bg-[#c8cace] text-[10px]">—</button>
            <button className="w-7 h-6 flex items-center justify-center text-[#5f6368] hover:bg-[#c8cace] text-[10px]">▢</button>
            <button className="w-7 h-6 flex items-center justify-center text-[#5f6368] hover:bg-red-500 hover:text-white text-[10px]">✕</button>
          </div>
        </div>
        {/* Address bar */}
        <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white border-b border-[#c8cace]">
          <button className="text-[#5f6368] text-[11px] px-0.5">←</button>
          <button className="text-[#5f6368] text-[11px] px-0.5 opacity-40">→</button>
          <button className="text-[#5f6368] text-[11px] px-0.5">↺</button>
          <div className="flex flex-1 items-center gap-1.5 bg-[#f1f3f4] rounded-full px-2.5 py-0.5 max-w-xs mx-auto">
            <LockIcon color="#5f6368" />
            <span className="text-[9px] md:text-[10px] text-[#202124] truncate select-none flex-1 text-center">
              {displayUrl}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (style === "safari") {
    return (
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-[#ececec] border-b border-[#d0d0d0] shrink-0">
        <MacOsDots />
        <button className="text-[#333] text-[11px] px-0.5 shrink-0">←</button>
        <button className="text-[#333] text-[11px] px-0.5 opacity-30 shrink-0">→</button>
        <div className="flex flex-1 items-center gap-1.5 bg-white rounded-md px-2 py-0.5 shadow-sm border border-[#d8d8d8] max-w-xs mx-auto">
          <LockIcon color="#888" />
          <span className="text-[9px] md:text-[10px] text-[#333] truncate select-none flex-1 text-center">
            {displayUrl}
          </span>
          {/* Reader icon */}
          <svg className="w-2.5 h-2.5 text-[#888] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        {/* Share icon */}
        <svg className="w-3.5 h-3.5 text-[#0077cc] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </div>
    );
  }

  if (style === "firefox") {
    return (
      <div className="shrink-0">
        {/* Tab bar */}
        <div className="flex items-end bg-[#2b2a33] px-2 pt-1.5">
          <div className="flex items-center gap-1.5 bg-[#42414d] rounded-t-md px-2.5 py-1 min-w-0 max-w-[180px]">
            <FaviconOrGlobe faviconDataUrl={faviconDataUrl} fallbackColor="#cfcfd8" />
            <span className="text-[9px] md:text-[10px] text-[#cfcfd8] truncate select-none flex-1">
              {displayUrl}
            </span>
            <span className="text-[#80808a] text-[9px] shrink-0 ml-1">✕</span>
          </div>
          <div className="flex-1" />
        </div>
        {/* Address bar */}
        <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#2b2a33] border-b border-[#42414d]">
          <button className="text-[#cfcfd8] text-[11px] px-0.5">←</button>
          <button className="text-[#cfcfd8] text-[11px] px-0.5 opacity-30">→</button>
          <button className="text-[#cfcfd8] text-[11px] px-0.5">↺</button>
          <div className="flex flex-1 items-center gap-1.5 bg-[#1c1b22] rounded-sm px-2.5 py-0.5 max-w-xs mx-auto border border-[#42414d]">
            {/* Shield icon */}
            <svg className="w-2.5 h-2.5 text-[#00ddff] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z" clipRule="evenodd" />
            </svg>
            <LockIcon color="#cfcfd8" />
            <span className="text-[9px] md:text-[10px] text-[#cfcfd8] truncate select-none flex-1 text-center">
              {displayUrl}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (style === "arc") {
    return (
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-[#1c1c28] border-b border-[#2a2a3e] shrink-0">
        <MacOsDots size="sm" />
        <div className="flex flex-1 items-center gap-1.5 bg-[#2a2a3e] rounded-full px-3 py-0.5 mx-auto max-w-xs">
          <FaviconOrGlobe faviconDataUrl={faviconDataUrl} fallbackColor="#a0a0b8" />
          <span className="text-[9px] md:text-[10px] text-[#a0a0b8] truncate select-none flex-1 text-center">
            {displayUrl}
          </span>
        </div>
      </div>
    );
  }

  if (style === "macos-dark") {
    return (
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#2c2c2e] border-b border-[#3a3a3c] shrink-0">
        <MacOsDots />
        <div className="flex-1 mx-2 md:mx-4">
          <div className="flex items-center gap-1.5 bg-[#1c1c1e] rounded-md px-2 md:px-3 py-0.5 md:py-1 max-w-xs mx-auto">
            <LockIcon color="currentColor" />
            <span className="text-[9px] md:text-[11px] text-text-muted truncate select-none">
              {displayUrl}
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
            <svg className="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0" fill="#888" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[9px] md:text-[11px] text-[#555] truncate select-none">
              {displayUrl}
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
          {displayUrl}
        </span>
        <div className="flex items-center gap-0">
          <button className="flex items-center justify-center w-7 h-6 md:w-8 md:h-7 text-[#8888aa] hover:bg-[#2a2a4e] transition-colors text-[10px] select-none">
            &#x2014;
          </button>
          <button className="flex items-center justify-center w-7 h-6 md:w-8 md:h-7 text-[#8888aa] hover:bg-[#2a2a4e] transition-colors text-[10px] select-none">
            &#x25A1;
          </button>
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
  const urlBarText = useStudioStore((s) => s.urlBarText);
  const faviconDataUrl = useStudioStore((s) => s.faviconDataUrl);

  const contentBg = chromeStyle === "macos-light" || chromeStyle === "safari" || chromeStyle === "chrome"
    ? "bg-white"
    : "bg-[#1c1c1e]";

  return (
    <div className={`flex flex-col w-full h-full ${contentBg} overflow-hidden`}>
      <ChromeBar style={chromeStyle} urlBarText={urlBarText} faviconDataUrl={faviconDataUrl} />
      <div className="flex-1 overflow-hidden">
        {mode === "code" && <CodeDisplay />}
        {mode === "mockup" && <ImageDropzone />}
        {mode === "content" && <ContentDisplay />}
      </div>
    </div>
  );
}
