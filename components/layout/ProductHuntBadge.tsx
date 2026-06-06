import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import {
  PRODUCT_HUNT_BADGE_ALT,
  PRODUCT_HUNT_BADGE_IMG,
  PRODUCT_HUNT_URL,
  SAASHUB_URL,
  SAASHUB_BADGE_IMG,
  SAASHUB_BADGE_ALT,
} from "@/lib/site";

type ProductHuntBadgeProps = {
  location: string;
};

export function ProductHuntBadge({ location }: ProductHuntBadgeProps) {
  return (
    <div className="flex justify-center gap-4 px-4 pb-1 pt-2 flex-wrap items-center">
      <TrackedExternalLink
        href={PRODUCT_HUNT_URL}
        label={PRODUCT_HUNT_BADGE_ALT}
        location={location}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={PRODUCT_HUNT_BADGE_ALT}
      >
        <img
          src={PRODUCT_HUNT_BADGE_IMG}
          alt={PRODUCT_HUNT_BADGE_ALT}
          width={250}
          height={54}
          className="h-[43px] sm:h-[54px] w-auto max-w-full"
          loading="lazy"
          decoding="async"
        />
      </TrackedExternalLink>
      <TrackedExternalLink
        href={SAASHUB_URL}
        label={SAASHUB_BADGE_ALT}
        location={location}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={SAASHUB_BADGE_ALT}
      >
        <img
          src={SAASHUB_BADGE_IMG}
          alt={SAASHUB_BADGE_ALT}
          width={150}
          height={54}
          className="h-[43px] sm:h-[54px] w-auto max-w-full"
          loading="lazy"
          decoding="async"
        />
      </TrackedExternalLink>
    </div>
  );
}
