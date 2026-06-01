"use client";

import { useStudioStore, computeShadow, ASPECT_RATIO_DIMENSIONS } from "@/store/useStudioStore";
import { getPresetById } from "@/lib/backgrounds";
import { BrowserFrame } from "./BrowserFrame";
import { HeadlineLayer } from "./HeadlineLayer";
import { AnimatedFrame } from "./AnimatedFrame";
import { DeviceFrame } from "./DeviceFrame";

const HEADLINE_RESERVE = 64;

// Inline SVG noise filter as a data URL — works with html-to-image capture
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function StudioCanvas() {
  const padding = useStudioStore((s) => s.padding);
  const borderRadius = useStudioStore((s) => s.borderRadius);
  const shadowDepth = useStudioStore((s) => s.shadowDepth);
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  const backgroundId = useStudioStore((s) => s.backgroundId);
  const customBgFrom = useStudioStore((s) => s.customBgFrom);
  const customBgTo = useStudioStore((s) => s.customBgTo);
  const backgroundImage = useStudioStore((s) => s.backgroundImage);
  const noiseIntensity = useStudioStore((s) => s.noiseIntensity);
  const headlineEnabled = useStudioStore((s) => s.headlineEnabled);
  const headlinePosition = useStudioStore((s) => s.headlinePosition);
  const watermarkVisible = useStudioStore((s) => s.watermarkVisible);
  const deviceFrame = useStudioStore((s) => s.deviceFrame);

  const backgroundCss = backgroundImage
    ? undefined
    : backgroundId === "custom"
    ? `linear-gradient(135deg, ${customBgFrom}, ${customBgTo})`
    : getPresetById(backgroundId).css;

  const dims = ASPECT_RATIO_DIMENSIONS[aspectRatio];
  const isFree = aspectRatio === "free";
  const shadow = computeShadow(shadowDepth);

  // Reserve space for the headline so it doesn't overlap the frame
  const paddingTop = headlineEnabled && headlinePosition === "top"
    ? Math.max(padding, HEADLINE_RESERVE)
    : padding;
  const paddingBottom = headlineEnabled && headlinePosition === "bottom"
    ? Math.max(padding, HEADLINE_RESERVE)
    : padding;

  const hasDeviceFrame = deviceFrame !== "none";

  return (
    <div
      id="studio-canvas"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        width: isFree ? "100%" : `${dims!.width}px`,
        height: isFree ? "100%" : `${dims!.height}px`,
        background: backgroundCss,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${padding}px`,
        paddingRight: `${padding}px`,
        flexShrink: 0,
      }}
    >
      {/* Background image layer */}
      {backgroundImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ zIndex: 0 }}
          draggable={false}
        />
      )}

      {/* Noise grain overlay */}
      {noiseIntensity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            zIndex: 1,
            backgroundImage: NOISE_SVG,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity: noiseIntensity / 200,
            mixBlendMode: "overlay",
          }}
        />
      )}

      {/* Headline text overlay */}
      {headlineEnabled && <HeadlineLayer />}

      {/* Inner frame — device frame or browser frame */}
      <AnimatedFrame
        className="w-full h-full"
        style={{
          borderRadius: hasDeviceFrame ? 0 : `${borderRadius}px`,
          boxShadow: hasDeviceFrame ? "none" : shadow,
          overflow: hasDeviceFrame ? "visible" : "hidden",
          background: hasDeviceFrame ? "transparent" : undefined,
          position: "relative",
          zIndex: 2,
        }}
      >
        {hasDeviceFrame ? (
          <DeviceFrame device={deviceFrame} />
        ) : (
          <BrowserFrame />
        )}
      </AnimatedFrame>

      {/* Watermark */}
      {watermarkVisible && (
        <span className="absolute bottom-1.5 right-2 text-xs opacity-50 select-none pointer-events-none font-sans" style={{ zIndex: 3 }}>
          via KromaStudio
        </span>
      )}
    </div>
  );
}
