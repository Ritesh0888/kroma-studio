import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { CTA_BLOCKS } from "@/lib/landing/home";
import {
  landingBody,
  landingBrandCtaLg,
  landingCardLg,
  landingCtaPrimary,
  landingCtaSecondary,
  landingEyebrow,
  landingH2,
} from "@/lib/landing-ui";
import { VSCODE_MARKETPLACE_URL } from "@/lib/site";

export function HomeFinalCTA() {
  const { developer, extension } = CTA_BLOCKS;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className={landingCardLg}>
        <p className={landingEyebrow}>{developer.eyebrow}</p>
        <h2 className={landingH2}>{developer.headline}</h2>
        <p className={`${landingBody} text-sm`}>{developer.body}</p>
        <div className="flex flex-wrap gap-3">
          <TrackedLink
            href={developer.primaryHref}
            label={developer.primaryLabel}
            location="home_final_cta_studio"
            className={landingBrandCtaLg}
          >
            {developer.primaryLabel}
          </TrackedLink>
          <TrackedLink
            href={developer.secondaryHref}
            label={developer.secondaryLabel}
            location="home_final_cta_how_it_works"
            className={landingCtaSecondary}
          >
            {developer.secondaryLabel}
          </TrackedLink>
        </div>
      </div>

      <div className={landingCardLg}>
        <p className={landingEyebrow}>{extension.eyebrow}</p>
        <h2 className={landingH2}>{extension.headline}</h2>
        <p className={`${landingBody} text-sm`}>{extension.body}</p>
        <TrackedExternalLink
          href={VSCODE_MARKETPLACE_URL}
          label={extension.primaryLabel}
          location="home_final_cta_vscode"
          className={landingCtaPrimary}
          target="_blank"
          rel="noopener noreferrer"
        >
          {extension.primaryLabel}
        </TrackedExternalLink>
      </div>
    </div>
  );
}
