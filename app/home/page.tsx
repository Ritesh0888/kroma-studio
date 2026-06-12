import { HomeFeatureCarousel } from "@/components/landing/home/HomeFeatureCarousel";
import { HomeFinalCTA } from "@/components/landing/home/HomeFinalCTA";
import { HomeGuidesStrip } from "@/components/landing/home/HomeGuidesStrip";
import { HomeHero } from "@/components/landing/home/HomeHero";
import { HomePillarGrid } from "@/components/landing/home/HomePillarGrid";
import { HomeProductTabs } from "@/components/landing/home/HomeProductTabs";
import { LandingSection } from "@/components/landing/LandingSection";
import { LandingShell } from "@/components/layout/LandingShell";
import { getSortedGuides } from "@/lib/guides";
import { getHomeLandingJsonLd } from "@/lib/json-ld";
import { createLandingMetadata } from "@/lib/landing-metadata";
import { LANDING_PAGE_META } from "@/lib/site";

export const metadata = createLandingMetadata({
  path: "/home",
  title: LANDING_PAGE_META.home.title,
  description: LANDING_PAGE_META.home.description,
});

const jsonLd = getHomeLandingJsonLd();
const guidePreview = getSortedGuides().slice(0, 3);

export default function HomeLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingShell width="wide">
        <div className="flex flex-col gap-16 md:gap-20">
          <HomeHero />

          <LandingSection eyebrow="Studio modes" title="One tool, four workflows">
            <HomeProductTabs />
          </LandingSection>

          <LandingSection eyebrow="Features" title="Ship visuals with confidence">
            <HomeFeatureCarousel />
          </LandingSection>

          <LandingSection eyebrow="Why KromaStudio" title="Built for trust">
            <HomePillarGrid />
          </LandingSection>

          <HomeGuidesStrip guides={guidePreview} />

          <HomeFinalCTA />
        </div>
      </LandingShell>
    </>
  );
}
