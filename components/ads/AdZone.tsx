"use client";

import { useEffect, useRef, useState } from "react";
import { ADSENSE_CLIENT, isAdsenseEnabled } from "@/lib/ads-config";
import {
  isAdZoneVisible,
  isExpectedDevAdsenseError,
  pushAdsenseSlot,
  waitForAdsenseScript,
} from "@/lib/adsense-push";

interface AdZoneProps {
  id: string;
  slot?: string;
  label: string;
  width: number;
  height: number;
  className?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  /** When true, ad slot keeps a fixed box so iframes cannot blow out the studio layout. */
  fixedSize?: boolean;
}

export function AdZone({
  id,
  slot,
  label,
  width,
  height,
  className = "",
  format = "auto",
  fixedSize = true,
}: AdZoneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [adFailed, setAdFailed] = useState(false);
  const hasConfig = isAdsenseEnabled() && Boolean(ADSENSE_CLIENT && slot);

  useEffect(() => {
    if (!hasConfig) return;

    let cancelled = false;

    async function initAd() {
      const container = containerRef.current;
      if (!container || cancelled) return;

      if (!isAdZoneVisible(container)) return;

      const ins = container.querySelector("ins.adsbygoogle");
      if (!(ins instanceof HTMLElement)) return;

      const scriptReady = await waitForAdsenseScript();
      if (!scriptReady || cancelled) {
        setAdFailed(true);
        return;
      }

      if (!isAdZoneVisible(container)) return;

      try {
        pushAdsenseSlot(ins);
      } catch (error) {
        if (isExpectedDevAdsenseError(error)) {
          console.debug("[AdZone] AdSense skipped in dev (expected on localhost)", { id });
        } else {
          console.warn("[AdZone] AdSense push failed", { id, error });
        }
        setAdFailed(true);
      }
    }

    const timeout = window.setTimeout(() => {
      void initAd();
    }, 100);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [hasConfig, id]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative mx-auto flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-surface-2 bg-[#080808] ${className}`}
      style={{
        width: "100%",
        maxWidth: `${width}px`,
        height: `${height}px`,
        maxHeight: `${height}px`,
        minHeight: `${height}px`,
        contain: "layout size",
      }}
      aria-label={label}
    >
      {hasConfig && (
        <ins
          className="adsbygoogle block overflow-hidden"
          style={{
            display: "block",
            width: fixedSize ? `${width}px` : "100%",
            height: `${height}px`,
            maxHeight: `${height}px`,
            overflow: "hidden",
          }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={fixedSize ? "false" : "true"}
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
        <span className="pointer-events-none absolute bottom-2 right-2 text-[8px] uppercase tracking-widest text-white/20">
          Sponsored
        </span>
      )}
    </div>
  );
}
