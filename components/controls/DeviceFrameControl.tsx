"use client";

import { useStudioStore, type DeviceFrameType } from "@/store/useStudioStore";

/* ── Tiny SVG previews ── */

function NonePreview() {
  return (
    <svg viewBox="0 0 40 28" fill="none" className="w-full h-full">
      <rect x="4" y="2" width="32" height="24" rx="3" stroke="#444" strokeWidth="1.5" fill="#1a1a1a" />
      <line x1="4" y1="7" x2="36" y2="7" stroke="#333" strokeWidth="1" />
      <circle cx="8" cy="4.5" r="1" fill="#555" />
      <circle cx="11.5" cy="4.5" r="1" fill="#555" />
      <circle cx="15" cy="4.5" r="1" fill="#555" />
    </svg>
  );
}

function Pixel3Preview() {
  return (
    <svg viewBox="0 0 22 47" fill="none" className="w-full h-full">
      {/* chassis */}
      <rect x="0.5" y="0.5" width="21" height="46" rx="3.5" fill="#ebebeb" stroke="#2e2e2e" strokeWidth="0.8" />
      {/* screen */}
      <rect x="1.5" y="7" width="19" height="34" rx="2" fill="#0a0a0a" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* dual cameras left */}
      <circle cx="5" cy="3.5" r="1.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.5" />
      <circle cx="5" cy="3.5" r="0.8" fill="#1a1a1a" />
      <circle cx="8.5" cy="3.5" r="1.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.5" />
      <circle cx="8.5" cy="3.5" r="0.8" fill="#1a1a1a" />
      {/* speaker */}
      <rect x="11" y="2.2" width="7" height="2.5" rx="1.25" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* right sensor */}
      <circle cx="20" cy="3.5" r="1.2" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* home pill */}
      <rect x="8" y="43.5" width="6" height="1.5" rx="0.75" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* right buttons */}
      <rect x="21" y="14" width="1.5" height="5" rx="0.75" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.4" />
      <rect x="21" y="21" width="1.5" height="3.5" rx="0.75" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.4" />
    </svg>
  );
}

function IPhone11ProMaxPreview() {
  return (
    <svg viewBox="0 0 22 45" fill="none" className="w-full h-full">
      {/* chassis */}
      <rect x="0.5" y="0.5" width="21" height="44" rx="4" fill="#ebebeb" stroke="#2e2e2e" strokeWidth="0.8" />
      {/* screen */}
      <rect x="1.5" y="1.5" width="19" height="42" rx="3.5" fill="#0a0a0a" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* notch */}
      <path d="M7.5,1.5 H14.5 V4.5 A2,2 0 0 1 12.5,6.5 H9.5 A2,2 0 0 1 7.5,4.5 Z" fill="#ebebeb" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* front camera in notch */}
      <circle cx="13" cy="4" r="0.9" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      <circle cx="13" cy="4" r="0.45" fill="#1a1a1a" />
      {/* speaker in notch */}
      <rect x="8.5" y="3.2" width="3.5" height="1.2" rx="0.6" fill="#c0c0c0" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* bottom swipe bar */}
      <rect x="7.5" y="41.5" width="7" height="1.5" rx="0.75" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* left: silent switch */}
      <rect x="-0.3" y="11.5" width="1.2" height="2.5" rx="0.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* left: volume up */}
      <rect x="-0.3" y="15.5" width="1.2" height="4" rx="0.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* left: volume down */}
      <rect x="-0.3" y="21" width="1.2" height="4" rx="0.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* right: power button */}
      <rect x="21.1" y="15.5" width="1.2" height="6" rx="0.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
    </svg>
  );
}

function IPad97Preview() {
  return (
    <svg viewBox="0 0 28 40" fill="none" className="w-full h-full">
      {/* case */}
      <rect x="0.5" y="0.5" width="27" height="39" rx="2.5" fill="#ebebeb" stroke="#2e2e2e" strokeWidth="0.8" />
      {/* screen */}
      <rect x="2.5" y="4.5" width="23" height="29" rx="0.8" fill="#0a0a0a" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* front camera */}
      <circle cx="14" cy="2.5" r="0.8" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* home button */}
      <circle cx="14" cy="36.5" r="1.8" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.4" />
      <circle cx="14" cy="36.5" r="1.1" fill="none" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* power button top */}
      <rect x="18" y="0" width="5" height="1" rx="0.5" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      {/* volume right */}
      <rect x="27" y="10" width="1.2" height="5" rx="0.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
      <rect x="27" y="16.5" width="1.2" height="5" rx="0.6" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.3" />
    </svg>
  );
}

function AppleWatchS3Preview() {
  return (
    <svg viewBox="0 0 22 38" fill="none" className="w-full h-full">
      {/* Top band */}
      <path d="M 5.5,9 Q 5,5 5.5,1 Q 8,0 11,0.5 Q 14,0 16.5,1 Q 17,5 16.5,9 Z"
        fill="#ebebeb" stroke="#2e2e2e" strokeWidth="0.7" />
      {/* Bottom band */}
      <path d="M 5.5,29 Q 5,33 5.5,37 Q 8,38 11,37.5 Q 14,38 16.5,37 Q 17,33 16.5,29 Z"
        fill="#ebebeb" stroke="#2e2e2e" strokeWidth="0.7" />
      {/* Watch case */}
      <rect x="1.5" y="8.5" width="19" height="21" rx="5" fill="#ebebeb" stroke="#2e2e2e" strokeWidth="0.8" />
      {/* Screen */}
      <rect x="3" y="10" width="16" height="18" rx="4" fill="#0a0a0a" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* Digital crown */}
      <rect x="20.3" y="12.5" width="2" height="4.5" rx="1" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.4" />
      {/* Side button */}
      <rect x="20.3" y="18.5" width="2" height="3" rx="0.75" fill="#d4d4d4" stroke="#2e2e2e" strokeWidth="0.4" />
    </svg>
  );
}

/* ── Device options ── */
const DEVICES: {
  value: DeviceFrameType;
  label: string;
  preview: React.ReactNode;
}[] = [
  { value: "none",           label: "None",          preview: <NonePreview /> },
  { value: "pixel3",         label: "Pixel 3",       preview: <Pixel3Preview /> },
  { value: "iphone11promax", label: "iPhone 11 PM",  preview: <IPhone11ProMaxPreview /> },
  { value: "applewatchs3",   label: "Watch S3 38mm", preview: <AppleWatchS3Preview /> },
  { value: "ipad97",         label: "iPad 9.7\"",    preview: <IPad97Preview /> },
];

export function DeviceFrameControl() {
  const deviceFrame = useStudioStore((s) => s.deviceFrame);
  const setDeviceFrame = useStudioStore((s) => s.setDeviceFrame);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Device Frame
      </label>
      <div className="grid grid-cols-2 gap-1.5">
        {DEVICES.map(({ value, label, preview }) => {
          const active = deviceFrame === value;
          return (
            <button
              key={value}
              onClick={() => setDeviceFrame(value)}
              className={`flex flex-col items-center gap-1.5 py-2 px-1 rounded-xl border transition-all ${
                active
                  ? "bg-neon-purple/15 border-neon-purple shadow-sm shadow-neon-purple/20"
                  : "bg-[#111] border-[#222] hover:border-[#3a3a3a]"
              }`}
            >
              <div className="flex items-center justify-center" style={{ width: "100%", height: 44 }}>
                {preview}
              </div>
              <span
                className={`text-[9px] font-medium leading-none whitespace-nowrap ${
                  active ? "text-neon-purple" : "text-[#555]"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
