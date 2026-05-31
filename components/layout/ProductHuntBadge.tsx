import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import {
  PRODUCT_HUNT_BADGE_ALT,
  PRODUCT_HUNT_BADGE_IMG,
  PRODUCT_HUNT_URL,
} from "@/lib/site";

type ProductHuntBadgeProps = {
  location: string;
};

export function ProductHuntBadge({ location }: ProductHuntBadgeProps) {
  return (
    <div className="flex justify-center px-4 pb-1 pt-2">
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
          className="h-auto w-[200px] max-w-full sm:w-[250px]"
          loading="lazy"
          decoding="async"
        />
      </TrackedExternalLink>
    </div>
  );
}
