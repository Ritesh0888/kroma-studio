import { LandingShell } from "@/components/layout/LandingShell";
import { landingBadge, landingCard, landingCardLg, landingCtaPrimary, landingCtaSecondary, landingEyebrow, landingH1, landingH2, landingH3, landingProseLink } from "@/lib/landing-ui";
import { LandingInlineLink } from "@/components/landing/LandingInlineLink";
import { ScreenshotFigure } from "@/components/landing/ScreenshotFigure";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getAnimatedCodeScreenshotJsonLd } from "@/lib/json-ld";
import {
  COMPARISON_ROWS,
  FAQS,
  KEY_DIFFERENCES,
  WHY_SWITCH_POINTS,
} from "@/lib/landing/animated-code-screenshot";
import {
  AUDIENCE_SECTIONS,
  FEATURE_SECTIONS,
  HERO_TRUST_BADGES,
  INTERNAL_LINKS,
  SCREENSHOT_SLOTS,
  TRUST_BUILDERS,
  USE_CASES,
} from "@/lib/landing/carbon-alternative";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/animated-code-screenshot",
  ...LANDING_PAGE_META.animatedCodeScreenshot,
});

const jsonLd = getAnimatedCodeScreenshotJsonLd();

export default function AnimatedCodeScreenshotPage() {
  const heroShot = SCREENSHOT_SLOTS.animatedExports;
  const comparisonShot = SCREENSHOT_SLOTS.comparison;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingShell width="wide">
        <article className="flex flex-col gap-10">
          {/* Hero */}
          <div className="flex flex-col gap-5">
            <p className={landingEyebrow}>
              60fps Looping Video · No Watermarks · Free
            </p>
            <h1 className={landingH1}>
              Animated Code Screenshot Generator
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              Static images are great, but motion stops the scroll. KromaStudio lets you turn any code snippet or{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="browser mockup"
                location="animated_hero_inline_mockup"
              >
                browser mockup
              </LandingInlineLink>{" "}
              into a buttery smooth 60fps looping video. Pick from 3D Tilt, Float, or Auto Scroll presets, and export directly to a .webm video in seconds. The rendering happens{" "}
              <LandingInlineLink
                href="/privacy"
                label="locally in your browser"
                location="animated_hero_inline_privacy"
              >
                locally in your browser
              </LandingInlineLink>
              , which means it is 100% free with absolutely no watermarks.
            </p>
            <div className="flex flex-wrap gap-2">
              {HERO_TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className={landingBadge}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StudioCTAButton
                mode="code"
                label="Create Animated Code Free"
                location="animated_hero_cta"
                className={landingCtaPrimary}
              >
                Create Animated Code Free
              </StudioCTAButton>
              <TrackedLink
                href="#live-examples"
                label="See Live Examples"
                location="animated_hero_secondary"
                className={landingCtaSecondary}
              >
                See Live Examples
              </TrackedLink>
            </div>
          </div>

          <ScreenshotFigure src={heroShot.src} alt={heroShot.alt} />

          {/* Why Switch */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>
              Why Upgrade to Animated Code?
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Platforms like X/Twitter and LinkedIn algorithmically favor video content over static images. A subtle floating animation or a dramatic 3D tilt makes your code stand out in a crowded feed.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {WHY_SWITCH_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Comparison table */}
          <section className="flex flex-col gap-6">
            <h2 className={landingH2}>Static Code Images vs KromaStudio Video</h2>
            <div className={`overflow-x-auto ${landingCard} !gap-0 !p-0`}>
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className={`px-4 py-3 ${landingH3}`}>Feature</th>
                    <th className={`px-4 py-3 ${landingH3}`}>Traditional Code Tools</th>
                    <th className={`px-4 py-3 ${landingH3}`}>KromaStudio</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-border last:border-0">
                      <td className={`px-4 py-3 font-medium ${landingH3}`}>{row.feature}</td>
                      <td className="px-4 py-3 text-text-muted">{row.traditional}</td>
                      <td className="px-4 py-3 text-text-muted">{row.kromaStudio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ScreenshotFigure src={comparisonShot.src} alt={comparisonShot.alt} />

            <div className="flex flex-col gap-6">
              <h3 className={`${landingH3} text-base`}>
                Core Differences
              </h3>
              {KEY_DIFFERENCES.map((diff) => (
                <div key={diff.title} className="flex flex-col gap-2">
                  <h4 className={`${landingH3} text-sm`}>{diff.title}</h4>
                  {diff.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <LandingInlineLink
                    href={diff.href}
                    label={diff.linkLabel}
                    location="animated_key_diff_link"
                  >
                    {diff.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>

            <StudioCTAButton
              mode="code"
              label="Try KromaStudio Free"
              location="animated_comparison_cta"
              className={`${landingCtaPrimary} w-fit`}
            >
              Try KromaStudio Free
            </StudioCTAButton>
          </section>

          {/* Features + screenshot slots */}
          <section id="live-examples" className="flex scroll-mt-8 flex-col gap-6">
            <h2 className={landingH2}>
              Create More with KromaStudio
            </h2>
            {FEATURE_SECTIONS.map((section) => {
              const shotKey =
                section.title === "Browser Mockup Generator"
                  ? "browserMockups"
                  : section.title === "Social Content Generator"
                    ? "socialContent"
                    : section.title === "Animated Code Screenshots"
                      ? "animatedExports"
                      : null;
              const shot = shotKey ? SCREENSHOT_SLOTS[shotKey] : null;

              return (
                <div key={section.title} className="flex flex-col gap-3">
                  <h3 className={`${landingH3} text-sm`}>{section.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{section.body}</p>
                  {shot && <ScreenshotFigure src={shot.src} alt={shot.alt} />}
                  {section.link && (
                    <TrackedLink
                      href={section.link.href}
                      label={section.link.label}
                      location="animated_feature_link"
                      className="w-fit {landingProseLink}"
                    >
                      {section.link.label} →
                    </TrackedLink>
                  )}
                </div>
              );
            })}
          </section>

          {/* Audience */}
          <section className="flex flex-col gap-6">
            <h2 className={landingH2}>Who Needs Animated Code?</h2>
            {AUDIENCE_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h3 className={`${landingH3} text-sm`}>{section.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{section.body}</p>
              </div>
            ))}
          </section>

          {/* Use cases */}
          <section className="flex flex-col gap-3">
            <h2 className={landingH2}>Real Use Cases</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {USE_CASES.map((useCase) => (
                <li key={useCase.text}>
                  {useCase.text}{" "}
                  <LandingInlineLink
                    href={useCase.href}
                    label={useCase.linkLabel}
                    location="animated_use_case_link"
                  >
                    {useCase.linkLabel} →
                  </LandingInlineLink>
                </li>
              ))}
            </ul>
          </section>

          {/* Trust builders */}
          <section className="flex flex-col gap-5">
            <h2 className={landingH2}>Why Developers Trust KromaStudio</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {TRUST_BUILDERS.map((item) => (
                <div
                  key={item.title}
                  className={landingCard}
                >
                  <h3 className={`${landingH3} text-sm`}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className={`${landingCardLg} gap-5`}>
            <ScreenshotFigure
              src={SCREENSHOT_SLOTS.finalCta.src}
              alt={SCREENSHOT_SLOTS.finalCta.alt}
            />
            <div className="flex flex-col gap-3">
              <h2 className={landingH2}>
                Start Animating Code
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                Free .webm exports. 60fps loops. No sign-up needed.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <StudioCTAButton
                  mode="code"
                  label="Create Animated Code Free"
                  location="animated_pre_faq_cta"
                  className={landingCtaPrimary}
                >
                  Create Animated Code Free
                </StudioCTAButton>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>Frequently Asked Questions</h2>
            <dl className="flex flex-col gap-4">
              {FAQS.map((item) => (
                <div key={item.q}>
                  <dt className={`${landingH3} text-sm`}>{item.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                    {item.a}
                    {item.href && item.linkLabel && (
                      <>
                        {" "}
                        <LandingInlineLink
                          href={item.href}
                          label={item.linkLabel}
                          location="animated_faq_link"
                        >
                          {item.linkLabel} →
                        </LandingInlineLink>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Internal links */}
          <section className="flex flex-col gap-3 border-t border-border pt-8">
            <h2 className={landingH2}>Explore KromaStudio Tools</h2>
            <ul className="flex flex-col gap-2">
              {INTERNAL_LINKS.map((link) => (
                <li key={link.href}>
                  <TrackedLink
                    href={link.href}
                    label={link.label}
                    location="animated_internal_link"
                    className={landingProseLink}
                  >
                    {link.label} →
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </LandingShell>
    </>
  );
}
