"use client";

import { useRef, useEffect } from "react";
import { useStudioStore } from "@/store/useStudioStore";

export function HeadlineLayer() {
  const headlineText = useStudioStore((s) => s.headlineText);
  const setHeadlineText = useStudioStore((s) => s.setHeadlineText);
  const headlineFontSize = useStudioStore((s) => s.headlineFontSize);
  const headlineColor = useStudioStore((s) => s.headlineColor);
  const headlinePosition = useStudioStore((s) => s.headlinePosition);

  const ref = useRef<HTMLDivElement>(null);

  // Sync external text changes into the contentEditable div without resetting cursor
  useEffect(() => {
    if (ref.current && ref.current.textContent !== headlineText) {
      ref.current.textContent = headlineText;
    }
  }, [headlineText]);

  const positionStyle =
    headlinePosition === "top"
      ? { top: 0, paddingTop: "12px", paddingBottom: "8px" }
      : { bottom: 0, paddingTop: "8px", paddingBottom: "12px" };

  return (
    <div
      className="absolute left-0 right-0 flex items-center justify-center px-4 z-10 pointer-events-none"
      style={positionStyle}
    >
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setHeadlineText((e.currentTarget as HTMLDivElement).textContent ?? "")}
        className="pointer-events-auto outline-none text-center font-bold leading-tight max-w-full cursor-text select-text wrap-break-word"
        style={{
          fontSize: `${headlineFontSize}px`,
          color: headlineColor,
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          minWidth: "40px",
          wordBreak: "break-word",
        }}
        spellCheck={false}
      />
    </div>
  );
}
