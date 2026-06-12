"use client";

import { useEffect, useRef, useState } from "react";

const GRID_CELL = 48;
const SPOTLIGHT_RADIUS = 220;

function buildSpotlightMask(x: number, y: number) {
  return `radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${x}px ${y}px, black 0%, transparent 100%), radial-gradient(ellipse 90% 80% at 50% 30%, black 15%, transparent 100%)`;
}

const baseGridStyle = {
  backgroundImage:
    "linear-gradient(rgba(60,64,67,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(60,64,67,0.06) 1px, transparent 1px)",
  backgroundSize: `${GRID_CELL}px ${GRID_CELL}px`,
  maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 15%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 90% 80% at 50% 30%, black 15%, transparent 100%)",
} as const;

export function LandingBackground() {
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | undefined>(undefined);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scheduleUpdate = () => {
      if (rafRef.current !== undefined) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = undefined;
        setSpotlight({ x: mouseRef.current.x, y: mouseRef.current.y });
      });
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
      scheduleUpdate();
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      scheduleUpdate();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current !== undefined) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden bg-[#f8f9fb]">
      {/* Soft ambient mesh — Antigravity-style light atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(66, 133, 244, 0.14), transparent 60%),
            radial-gradient(ellipse 60% 40% at 100% 20%, rgba(155, 114, 203, 0.1), transparent 55%),
            radial-gradient(ellipse 50% 45% at 0% 80%, rgba(52, 168, 83, 0.08), transparent 55%),
            radial-gradient(ellipse 45% 35% at 70% 60%, rgba(251, 188, 5, 0.06), transparent 50%),
            linear-gradient(180deg, #f8f9fb 0%, #f1f3f8 45%, #eef1f6 100%)
          `,
        }}
      />

      {/* Gentle floating shapes */}
      <div className="landing-orb landing-orb--a absolute -left-[10%] -top-[15%] h-[min(65vw,480px)] w-[min(65vw,480px)] rounded-full bg-[radial-gradient(circle,rgba(66,133,244,0.18)_0%,transparent_70%)] blur-[90px]" />
      <div className="landing-orb landing-orb--b absolute -right-[5%] top-[15%] h-[min(50vw,380px)] w-[min(50vw,380px)] rounded-full bg-[radial-gradient(circle,rgba(155,114,203,0.14)_0%,transparent_72%)] blur-[80px]" />
      <div className="landing-orb landing-orb--c absolute bottom-[-10%] left-[20%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-[radial-gradient(circle,rgba(52,168,83,0.1)_0%,transparent_70%)] blur-[85px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.35]" style={baseGridStyle} />

      {/* Bold grid spotlight — follows cursor */}
      {spotlight ? (
        <div
          className="landing-grid-spotlight absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "linear-gradient(rgba(60,64,67,0.22) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(60,64,67,0.22) 1.5px, transparent 1.5px)",
            backgroundSize: `${GRID_CELL}px ${GRID_CELL}px`,
            maskImage: buildSpotlightMask(spotlight.x, spotlight.y),
            WebkitMaskImage: buildSpotlightMask(spotlight.x, spotlight.y),
          }}
        />
      ) : null}

      {/* Top glow */}
      <div
        className="absolute left-1/2 top-0 h-[50vh] w-[min(100%,900px)] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,255,255,0.9) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
