"use client";

import Image from "next/image";
import { useState } from "react";
import { HomeProductTabIcon } from "@/components/landing/home/HomeProductTabIcon";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { PRODUCT_TABS } from "@/lib/landing/home";
import {
  landingBody,
  landingCard,
  landingCtaSecondary,
  landingH2,
  landingMediaFrame,
  landingScreenshotImg,
} from "@/lib/landing-ui";

export function HomeProductTabs() {
  const [activeId, setActiveId] = useState(PRODUCT_TABS[0].id);
  const activeTab = PRODUCT_TABS.find((tab) => tab.id === activeId) ?? PRODUCT_TABS[0];

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Studio modes"
        className="landing-tab-track mx-auto w-full max-w-3xl"
      >
        {PRODUCT_TABS.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`landing-tab ${isActive ? "landing-tab--active" : ""}`}
            >
              <HomeProductTabIcon name={tab.icon} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className={landingH2}>{activeTab.headline}</h2>
          <p className={`${landingBody} text-sm md:text-base`}>{activeTab.description}</p>
          <div className="flex flex-wrap gap-3">
            {activeTab.studioMode ? (
              <StudioCTAButton
                mode={activeTab.studioMode}
                label={activeTab.ctaLabel}
                location={`home_product_tab_${activeTab.id}_studio`}
                className={landingCtaSecondary}
              >
                Try in Studio
              </StudioCTAButton>
            ) : null}
            <TrackedLink
              href={activeTab.ctaHref}
              label={activeTab.ctaLabel}
              location={`home_product_tab_${activeTab.id}_learn`}
              className={landingCtaSecondary}
            >
              {activeTab.ctaLabel}
            </TrackedLink>
          </div>
        </div>

        <div className={`${landingCard} !p-2`}>
          <div className={landingMediaFrame}>
            <Image
              src={activeTab.screenshot}
              alt={activeTab.screenshotAlt}
              width={1200}
              height={900}
              className={landingScreenshotImg}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={activeTab.id === PRODUCT_TABS[0].id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
