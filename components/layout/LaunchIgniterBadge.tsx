import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import {
  LAUNCH_IGNITER_BADGE_ALT,
  LAUNCH_IGNITER_BADGE_IMG,
  LAUNCH_IGNITER_URL,
} from "@/lib/site";

type LaunchIgniterBadgeProps = {
  location: string;
};

export function LaunchIgniterBadge({ location }: LaunchIgniterBadgeProps) {
  return (
    <TrackedExternalLink
      href={LAUNCH_IGNITER_URL}
      label={LAUNCH_IGNITER_BADGE_ALT}
      location={location}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={LAUNCH_IGNITER_BADGE_ALT}
    >
      <img
        src={LAUNCH_IGNITER_BADGE_IMG}
        alt={LAUNCH_IGNITER_BADGE_ALT}
        width={212}
        height={55}
        className="h-auto w-[180px] max-w-full sm:w-[212px]"
        loading="lazy"
        decoding="async"
      />
    </TrackedExternalLink>
  );
}
