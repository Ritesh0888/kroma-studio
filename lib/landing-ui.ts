export const landingCtaPrimary = "landing-cta-primary";

export const landingCtaSecondary = "landing-cta-secondary";

export const landingBrandWordmark = "landing-brand-wordmark";

export const landingBrandCta = "landing-brand-cta";

export const landingBrandCtaLg = "landing-brand-cta-lg";

export const landingEyebrow = "landing-eyebrow";

export const landingH1 = "landing-h1";

export const landingH2 = "landing-h2";

export const landingH3 = "landing-h3";

export const landingProseLink = "landing-prose-link";

export const landingSection = "landing-section";

export const landingCard = "landing-card";

export const landingCardLg = "landing-card-lg";

export const landingBadge = "landing-badge";

export const landingFooterLink = "landing-footer-link";

export const landingNavLink = "landing-nav-link";

export const landingBody = "landing-body";

export const landingBodyLg = "landing-body-lg";

export const landingInlineLink = "landing-inline-link";

export const landingIconBtn = "landing-icon-btn";

export const landingMediaFrame = "landing-media-frame";

export const landingScreenshotImg = "landing-screenshot-img";

export const SHELL_CONTAINER_ARTICLE = "mx-auto w-full max-w-3xl px-6";

export const SHELL_CONTAINER_WIDE = "mx-auto w-full max-w-6xl px-6";

export function getShellContainer(width: "article" | "wide" = "article") {
  return width === "wide" ? SHELL_CONTAINER_WIDE : SHELL_CONTAINER_ARTICLE;
}
