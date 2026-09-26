"use client";

import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { landingCtaPrimary, landingCtaSecondary } from "@/lib/landing-ui";
import type { StudioMode } from "@/store/useStudioStore";

type Props = {
  primaryMode: StudioMode;
  primaryLabel: string;
  location: string;
};

export function GuideStudioCTA({ primaryMode, primaryLabel, location }: Props) {
  const secondaryMode = primaryMode === "mockup" ? "code" : "mockup";
  const secondaryLabel =
    secondaryMode === "mockup" ? "Open Browser Mockups" : "Open Code Screenshots";

  return (
    <div className="not-prose flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
      <p className="text-sm font-semibold text-white">Create this in KromaStudio</p>
      <p className="text-sm leading-relaxed text-text-muted">
        Free, no sign-up — export a polished PNG in your browser.
      </p>
      <div className="flex flex-wrap gap-3">
        <StudioCTAButton
          mode={primaryMode}
          label={primaryLabel}
          location={`${location}_primary`}
          className={landingCtaPrimary}
        >
          {primaryLabel}
        </StudioCTAButton>
        <StudioCTAButton
          mode={secondaryMode}
          label={secondaryLabel}
          location={`${location}_secondary`}
          className={landingCtaSecondary}
        >
          {secondaryLabel}
        </StudioCTAButton>
      </div>
    </div>
  );
}
