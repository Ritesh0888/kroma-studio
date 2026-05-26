"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdZoneProps {
  id: string;
  slot?: string;
  label: string;
  width: number;
  height: number;
  className?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
}

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const ADSENSE_ENABLED = process.env.NODE_ENV === "production";

export function AdZone({
  id,
  slot,
  label,
  width,
  height,
  className = "",
  format = "auto",
}: AdZoneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [adFailed, setAdFailed] = useState(false);
  const hasConfig = ADSENSE_ENABLED && Boolean(ADSENSE_CLIENT && slot);

  useEffect(() => {
    if (!hasConfig) return;

    const timeout = window.setTimeout(() => {
      const rect = containerRef.current?.getBoundingClientRect();

      if (!rect || rect.width < 1 || rect.height < 1) return;

      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (error) {
        console.warn("[AdZone] AdSense push failed", { id, error });
        setAdFailed(true);
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [hasConfig, id]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-surface-2 bg-[#080808] ${className}`}
      style={{
        width: "100%",
        maxWidth: `${width}px`,
        minHeight: `${height}px`,
      }}
      aria-label={label}
    >
      {hasConfig && (
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", minHeight: `${height}px` }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      )}

      {(!hasConfig || adFailed) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-surface">
            <svg className="h-4 w-4 text-border" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
            </svg>
          </div>
          <span className="text-[9px] uppercase tracking-widest text-border">{label}</span>
        </div>
      )}

      {hasConfig && !adFailed && (
        <span className="absolute bottom-2 right-2 text-[8px] uppercase tracking-widest text-white/20">
          Sponsored
        </span>
      )}
    </div>
  );
}
