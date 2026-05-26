"use client";

import { AdZone } from "@/components/ads/AdZone";
import { useAutoRefreshAds } from "@/hooks/useAutoRefreshAds";

const MOBILE_FOOTER_AD_ID = "ad-mobile-footer";

export function MobileAdFooter() {
  const refreshKeys = useAutoRefreshAds([MOBILE_FOOTER_AD_ID]);

  return (
    <div
      className="flex md:hidden items-center justify-center bg-[#080808] border-t border-surface-2 shrink-0"
      style={{ height: "50px", paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="w-full max-w-[320px]">
        <AdZone
          key={`${MOBILE_FOOTER_AD_ID}-${refreshKeys[MOBILE_FOOTER_AD_ID] ?? 0}`}
          id={MOBILE_FOOTER_AD_ID}
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_FOOTER}
          label="Sponsored · 320×50"
          width={320}
          height={50}
          format="horizontal"
        />
      </div>
    </div>
  );
}
