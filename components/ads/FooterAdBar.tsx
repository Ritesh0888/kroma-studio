"use client";

import { AdZone } from "@/components/ads/AdZone";
import { useAutoRefreshAds } from "../../hooks/useAutoRefreshAds";

const FOOTER_AD_ID = "ad-footer";

export function FooterAdBar() {
  const refreshKeys = useAutoRefreshAds([FOOTER_AD_ID]);

  return (
    <div className="fixed bottom-0 left-[25vw] right-[20vw] z-20 hidden h-[106px] items-center justify-center border-t border-surface-2 bg-[#080808]/95 px-4 py-2 backdrop-blur md:flex">
      <div className="w-full max-w-[728px]">
        <AdZone
          key={`${FOOTER_AD_ID}-${refreshKeys[FOOTER_AD_ID] ?? 0}`}
          id={FOOTER_AD_ID}
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER}
          label="Sponsored · 728×90"
          width={728}
          height={90}
          format="horizontal"
        />
      </div>
    </div>
  );
}
