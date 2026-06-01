"use client";

/**
 * Device frames rendered as inline SVG overlays.
 *
 * Architecture:
 *  1. An outer flex container centers the phone in the canvas area.
 *  2. An aspect-ratio-locked inner div matches the phone's viewBox ratio exactly.
 *  3. The screen content div is absolutely positioned using the same fractions
 *     as the SVG screen hole — so they always align regardless of canvas size.
 *  4. The SVG overlay (pointer-events:none) draws the chassis on top.
 */

import { useStudioStore, type DeviceFrameType } from "@/store/useStudioStore";
import { ImageDropzone } from "./ImageDropzone";

/* ────────────────────────────────────────────────────────────
   Helpers
──────────────────────────────────────────────────────────── */

function rrect(x: number, y: number, w: number, h: number, r: number): string {
  return [
    `M ${x + r},${y}`,
    `H ${x + w - r}`,
    `A ${r},${r} 0 0 1 ${x + w},${y + r}`,
    `V ${y + h - r}`,
    `A ${r},${r} 0 0 1 ${x + w - r},${y + h}`,
    `H ${x + r}`,
    `A ${r},${r} 0 0 1 ${x},${y + h - r}`,
    `V ${y + r}`,
    `A ${r},${r} 0 0 1 ${x + r},${y}`,
    "Z",
  ].join(" ");
}

/* ────────────────────────────────────────────────────────────
   Google Pixel 3
   viewBox 0 0 100 215
   Screen: x=4, y=28, w=92, h=173   rx=8
   Physical ref: 68.2 × 145.6 mm, screen ~63 × 135 mm
   Style: flat outline / wireframe (light chassis, dark stroke)
──────────────────────────────────────────────────────────── */
function Pixel3Frame() {
  const VW = 100, VH = 215;
  const sx = 4, sy = 28, sw = 92, sh = 173, sr = 8;

  const chassisPath = rrect(0, 0, VW, VH, 14);
  const screenHole  = rrect(sx, sy, sw, sh, sr);

  const STROKE = "#2e2e2e";
  const CHASSIS_FILL = "#ebebeb";
  const DETAIL_FILL = "#d4d4d4";

  return (
    /* Outer: size container so inner can use cqw/cqh */
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", containerType: "size" }}>
      {/*
        Inner: width = min(container-width, container-height × aspect-ratio).
        This is the correct "object-fit: contain" equivalent for a div — it
        never overflows either axis regardless of the canvas orientation.
      */}
      <div style={{ position: "relative", aspectRatio: `${VW}/${VH}`, width: `min(100cqw, calc(100cqh * ${VW} / ${VH}))` }}>

        {/* Screen content — fractions of VW×VH match SVG screen hole exactly.
            border-radius uses separate h/v % so corners stay circular on a non-square div. */}
        <div style={{
          position: "absolute",
          left: `${(sx / VW) * 100}%`,
          top: `${(sy / VH) * 100}%`,
          right: `${((VW - sx - sw) / VW) * 100}%`,
          bottom: `${((VH - sy - sh) / VH) * 100}%`,
          overflow: "hidden",
          background: "#050505",
          borderRadius: `${(sr / sw) * 100}% / ${(sr / sh) * 100}%`,
        }}>
          <ImageDropzone />
        </div>

        {/* SVG chassis overlay */}
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}
        >
          <defs>
            <filter id="p3-shadow" x="-10%" y="-5%" width="120%" height="110%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Chassis with screen punch-out */}
          <path
            fillRule="evenodd"
            fill={CHASSIS_FILL}
            stroke={STROKE}
            strokeWidth="1"
            filter="url(#p3-shadow)"
            d={`${chassisPath} ${screenHole}`}
          />

          {/* Camera 1 — wide angle */}
          <circle cx="14" cy="14" r="5" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.8" />
          <circle cx="14" cy="14" r="2.8" fill="#1a1a1a" />
          <circle cx="12.8" cy="12.8" r="1" fill="rgba(255,255,255,0.4)" />

          {/* Camera 2 — standard */}
          <circle cx="24.5" cy="14" r="5" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.8" />
          <circle cx="24.5" cy="14" r="2.8" fill="#1a1a1a" />
          <circle cx="23.3" cy="12.8" r="1" fill="rgba(255,255,255,0.4)" />

          {/* Speaker grille */}
          <rect x="34" y="9.5" width="32" height="9" rx="4.5" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.7" />
          {[38.5, 42.5, 46.5, 50.5, 54.5, 58.5, 62.5].map((cx) => (
            <circle key={cx} cx={cx} cy="14" r="1.3" fill="#aaaaaa" />
          ))}

          {/* Right IR sensor */}
          <circle cx="84" cy="14" r="3.2" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.7" />
          <circle cx="84" cy="14" r="1.6" fill="#1a1a1a" />
          <circle cx="83.1" cy="13.1" r="0.6" fill="rgba(255,255,255,0.38)" />

          {/* Screen inner border */}
          <rect x={sx} y={sy} width={sw} height={sh} rx={sr} fill="none" stroke={STROKE} strokeWidth="0.6" />

          {/* Bottom home pill */}
          <rect x="35" y={VH - 9.5} width="30" height="4.5" rx="2.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />

          {/* Right: volume + power */}
          <rect x={VW - 1.5} y="60" width="2.5" height="22" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />
          <rect x={VW - 1.5} y="87" width="2.5" height="13" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />
        </svg>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   iPhone 11 Pro Max
   viewBox 0 0 100 205
   Screen hole: x=3, y=3, w=94, h=199   rx=16
   Notch: centered, x=34, y=3, w=32, h=11 (rounded bottom corners)
   Physical ref: 77.8 × 157.5 mm
   Style: flat outline / wireframe (light chassis, dark stroke)
──────────────────────────────────────────────────────────── */
function IPhone11ProMaxFrame() {
  const VW = 100, VH = 205;
  const sx = 3, sy = 3, sw = 94, sh = 199, sr = 16;

  // Notch dimensions (centered at top of screen)
  const nx = 34, ny = 3, nw = 32, nh = 11, nbr = 6;

  const chassisPath = rrect(0, 0, VW, VH, 20);
  const screenHole  = rrect(sx, sy, sw, sh, sr);

  // Notch path: square top corners (flush with screen top), rounded bottom corners
  const notchPath = [
    `M ${nx},${ny}`,
    `H ${nx + nw}`,
    `V ${ny + nh - nbr}`,
    `A ${nbr},${nbr} 0 0 1 ${nx + nw - nbr},${ny + nh}`,
    `H ${nx + nbr}`,
    `A ${nbr},${nbr} 0 0 1 ${nx},${ny + nh - nbr}`,
    "Z",
  ].join(" ");

  const STROKE = "#2e2e2e";
  const CHASSIS_FILL = "#ebebeb";
  const DETAIL_FILL = "#d4d4d4";

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", containerType: "size" }}>
      <div style={{ position: "relative", aspectRatio: `${VW}/${VH}`, width: `min(100cqw, calc(100cqh * ${VW} / ${VH}))` }}>

        {/* Screen content — separate h/v % keeps corners circular on a non-square div */}
        <div style={{
          position: "absolute",
          left: `${(sx / VW) * 100}%`,
          top: `${(sy / VH) * 100}%`,
          right: `${((VW - sx - sw) / VW) * 100}%`,
          bottom: `${((VH - sy - sh) / VH) * 100}%`,
          overflow: "hidden",
          background: "#050505",
          borderRadius: `${(sr / sw) * 100}% / ${(sr / sh) * 100}%`,
        }}>
          <ImageDropzone />
        </div>

        {/* SVG chassis overlay */}
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}
        >
          <defs>
            <filter id="ip11-shadow" x="-10%" y="-5%" width="120%" height="110%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Chassis with screen punch-out */}
          <path
            fillRule="evenodd"
            fill={CHASSIS_FILL}
            stroke={STROKE}
            strokeWidth="1"
            filter="url(#ip11-shadow)"
            d={`${chassisPath} ${screenHole}`}
          />

          {/* Notch overlay */}
          <path
            fill={CHASSIS_FILL}
            stroke={STROKE}
            strokeWidth="0.6"
            d={notchPath}
          />

          {/* Notch: front camera (right side of notch) */}
          <circle cx={nx + nw - 7} cy={ny + 5.5} r="2.2" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.5" />
          <circle cx={nx + nw - 7} cy={ny + 5.5} r="1.1" fill="#1a1a1a" />
          <circle cx={nx + nw - 7.6} cy={ny + 4.9} r="0.4" fill="rgba(255,255,255,0.4)" />

          {/* Notch: speaker slit (center of notch) */}
          <rect x={nx + 5} y={ny + 3.5} width={nw - 16} height="3" rx="1.5" fill="#c0c0c0" stroke={STROKE} strokeWidth="0.4" />

          {/* Screen inner border */}
          <rect x={sx} y={sy} width={sw} height={sh} rx={sr} fill="none" stroke={STROKE} strokeWidth="0.5" />

          {/* Bottom swipe bar */}
          <rect x="33" y={VH - 7} width="34" height="4" rx="2" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.5" />

          {/* Left: silent switch */}
          <rect x="-1.5" y="55" width="2.5" height="9" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />
          {/* Left: volume up */}
          <rect x="-1.5" y="72" width="2.5" height="18" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />
          {/* Left: volume down */}
          <rect x="-1.5" y="95" width="2.5" height="18" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />

          {/* Right: power / lock button */}
          <rect x={VW - 1} y="70" width="2.5" height="28" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />
        </svg>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   iPad 9.7"
   viewBox 0 0 100 141  (480 × 680 px ratio)
   Case: full frame rx=8
   Screen: x=7, y=13, w=86, h=107   rx=2
   Home button bottom center, front camera top center
   Power button on top edge, volume on right side
──────────────────────────────────────────────────────────── */
function IPad97Frame() {
  const VW = 100, VH = 141;
  const sx = 7, sy = 13, sw = 86, sh = 107, sr = 2;

  const casePath   = rrect(0, 0, VW, VH, 8);
  const screenHole = rrect(sx, sy, sw, sh, sr);

  const STROKE = "#2e2e2e";
  const CHASSIS_FILL = "#ebebeb";
  const DETAIL_FILL  = "#d4d4d4";

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", containerType: "size" }}>
      <div style={{ position: "relative", aspectRatio: `${VW}/${VH}`, width: `min(100cqw, calc(100cqh * ${VW} / ${VH}))` }}>

        {/* Screen content */}
        <div style={{
          position: "absolute",
          left:   `${(sx / VW) * 100}%`,
          top:    `${(sy / VH) * 100}%`,
          right:  `${((VW - sx - sw) / VW) * 100}%`,
          bottom: `${((VH - sy - sh) / VH) * 100}%`,
          overflow: "hidden",
          background: "#050505",
          borderRadius: `${(sr / sw) * 100}% / ${(sr / sh) * 100}%`,
        }}>
          <ImageDropzone />
        </div>

        {/* SVG chassis overlay */}
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}
        >
          <defs>
            <filter id="ipad97-shadow" x="-10%" y="-5%" width="120%" height="110%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Case with screen punch-out */}
          <path
            fillRule="evenodd"
            fill={CHASSIS_FILL}
            stroke={STROKE}
            strokeWidth="1"
            filter="url(#ipad97-shadow)"
            d={`${casePath} ${screenHole}`}
          />

          {/* Screen inner border */}
          <rect x={sx} y={sy} width={sw} height={sh} rx={sr} fill="none" stroke={STROKE} strokeWidth="0.5" />

          {/* Front camera — top center */}
          <circle cx="50" cy="6.5" r="1.5" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.5" />
          <circle cx="50" cy="6.5" r="0.7" fill="#1a1a1a" />
          <circle cx="49.4" cy="5.9" r="0.3" fill="rgba(255,255,255,0.4)" />

          {/* Home button — bottom center */}
          <circle cx="50" cy="133" r="4.5" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.7" />
          <circle cx="50" cy="133" r="2.8" fill="none" stroke={STROKE} strokeWidth="0.5" />

          {/* Power / sleep button — top right edge */}
          <rect x="74" y="-1" width="13" height="2" rx="1" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />

          {/* Volume up — right side */}
          <rect x={VW - 1} y="32" width="2.5" height="14" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />
          {/* Volume down — right side */}
          <rect x={VW - 1} y="50" width="2.5" height="14" rx="1.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.6" />
        </svg>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Apple Watch Series 3 — 38 mm
   viewBox 0 0 100 175
   Watch case: x=8, y=40, w=84, h=95   rx=22
   Screen hole: x=13, y=45, w=74, h=85  rx=18
   Bands top (y 2→40) and bottom (y 135→173) with organic curves
──────────────────────────────────────────────────────────── */
function AppleWatchS3Frame() {
  const VW = 100, VH = 175;
  // Watch case
  const wx = 8, wy = 40, ww = 84, wh = 95, wr = 22;
  // Screen
  const sx = 13, sy = 45, sw = 74, sh = 85, sr = 18;

  const casePath  = rrect(wx, wy, ww, wh, wr);
  const screenHole = rrect(sx, sy, sw, sh, sr);

  const STROKE = "#2e2e2e";
  const CHASSIS_FILL = "#ebebeb";
  const DETAIL_FILL = "#d4d4d4";

  // Bottom of watch case
  const caseBottom = wy + wh; // 135

  // Top band: organic bezier, connects case top → band top
  const topBand = [
    `M 23,${wy}`,
    `Q 20,20 22,3`,
    `Q 35,0 50,1`,
    `Q 65,0 78,3`,
    `Q 80,20 77,${wy}`,
    "Z",
  ].join(" ");

  // Bottom band: mirrors top
  const bottomBand = [
    `M 23,${caseBottom}`,
    `Q 20,${caseBottom + 20} 22,${VH - 3}`,
    `Q 35,${VH} 50,${VH - 1}`,
    `Q 65,${VH} 78,${VH - 3}`,
    `Q 80,${caseBottom + 20} 77,${caseBottom}`,
    "Z",
  ].join(" ");

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", containerType: "size" }}>
      <div style={{ position: "relative", aspectRatio: `${VW}/${VH}`, width: `min(100cqw, calc(100cqh * ${VW} / ${VH}))` }}>

        {/* Screen content */}
        <div style={{
          position: "absolute",
          left: `${(sx / VW) * 100}%`,
          top: `${(sy / VH) * 100}%`,
          right: `${((VW - sx - sw) / VW) * 100}%`,
          bottom: `${((VH - sy - sh) / VH) * 100}%`,
          overflow: "hidden",
          background: "#050505",
          borderRadius: `${(sr / sw) * 100}% / ${(sr / sh) * 100}%`,
        }}>
          <ImageDropzone />
        </div>

        {/* SVG chassis overlay */}
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}
        >
          <defs>
            <filter id="aws3-shadow" x="-15%" y="-5%" width="130%" height="110%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Bands — drawn behind case */}
          <path fill={CHASSIS_FILL} stroke={STROKE} strokeWidth="1" d={topBand} />
          <path fill={CHASSIS_FILL} stroke={STROKE} strokeWidth="1" d={bottomBand} />

          {/* Watch case with screen punch-out */}
          <path
            fillRule="evenodd"
            fill={CHASSIS_FILL}
            stroke={STROKE}
            strokeWidth="1"
            filter="url(#aws3-shadow)"
            d={`${casePath} ${screenHole}`}
          />

          {/* Screen inner border */}
          <rect x={sx} y={sy} width={sw} height={sh} rx={sr} fill="none" stroke={STROKE} strokeWidth="0.5" />

          {/* Digital crown — right side */}
          <rect x={wx + ww - 0.5} y={wy + 22} width="4.5" height="18" rx="2.25" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.7" />

          {/* Side button — right side, below crown */}
          <rect x={wx + ww - 0.5} y={wy + 46} width="4.5" height="11" rx="1.75" fill={DETAIL_FILL} stroke={STROKE} strokeWidth="0.7" />
        </svg>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Dispatcher
──────────────────────────────────────────────────────────── */
interface DeviceFrameProps {
  device: DeviceFrameType;
}

export function DeviceFrame({ device }: DeviceFrameProps) {
  if (device === "pixel3") return <Pixel3Frame />;
  if (device === "iphone11promax") return <IPhone11ProMaxFrame />;
  if (device === "applewatchs3") return <AppleWatchS3Frame />;
  if (device === "ipad97") return <IPad97Frame />;
  return null;
}

export function useDeviceFrame() {
  return useStudioStore((s) => s.deviceFrame);
}
