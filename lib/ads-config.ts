export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

/** Production always; local when NEXT_PUBLIC_ADSENSE_DEV=true in .env.local */
export function isAdsenseEnabled() {
  if (!ADSENSE_CLIENT) return false;
  return (
    process.env.NODE_ENV === "production" ||
    process.env.NEXT_PUBLIC_ADSENSE_DEV === "true"
  );
}
