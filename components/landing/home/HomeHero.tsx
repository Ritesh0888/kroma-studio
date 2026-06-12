import { TrackedLink } from "@/components/ui/TrackedLink";
import { HERO } from "@/lib/landing/home";
import {
  landingBadge,
  landingBodyLg,
  landingBrandCtaLg,
  landingCtaSecondary,
  landingEyebrow,
  landingH1,
} from "@/lib/landing-ui";

export function HomeHero() {
  return (
    <div className="flex flex-col items-center gap-8 py-6 text-center md:py-10">
      <p className={landingEyebrow}>{HERO.eyebrow}</p>
      <h1 className={`${landingH1} max-w-4xl`}>{HERO.headline}</h1>
      <p className={`${landingBodyLg} max-w-2xl`}>{HERO.subcopy}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <TrackedLink
          href="/"
          label="Open Studio"
          location="home_hero_cta_primary"
          className={landingBrandCtaLg}
        >
          Open Studio
        </TrackedLink>
        <TrackedLink
          href="/how-it-works"
          label="How It Works"
          location="home_hero_cta_secondary"
          className={landingCtaSecondary}
        >
          How It Works
        </TrackedLink>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {HERO.trustBadges.map((badge) => (
          <span key={badge} className={landingBadge}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
