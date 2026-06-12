import { LandingShell } from "@/components/layout/LandingShell";
import { landingBadge, landingCard, landingCardLg, landingCtaPrimary, landingCtaSecondary, landingEyebrow, landingH1, landingH2, landingH3, landingProseLink } from "@/lib/landing-ui";
import { LandingInlineLink } from "@/components/landing/LandingInlineLink";
import { ScreenshotFigure } from "@/components/landing/ScreenshotFigure";
import { SwitchCardIcon } from "@/components/landing/SwitchCardIcon";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getSnappifyAlternativeJsonLd } from "@/lib/json-ld";
import {
  COMPARISON_ROWS,
  FAQS,
  KEY_DIFFERENCES,
  OTHER_ALTERNATIVES,
  WHY_SWITCH_POINTS,
} from "@/lib/landing/snappify-alternative";
import {
  AUDIENCE_SECTIONS,
  FEATURE_SECTIONS,
  HERO_TRUST_BADGES,
  INTERNAL_LINKS,
  SCREENSHOT_SLOTS,
  SWITCH_CARDS,
  TRUST_BUILDERS,
  USE_CASES,
} from "@/lib/landing/carbon-alternative";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/snappify-alternative",
  ...LANDING_PAGE_META.snappifyAlternative,
});

const jsonLd = getSnappifyAlternativeJsonLd();

export default function SnappifyAlternativePage() {
  const heroShot = SCREENSHOT_SLOTS.hero;
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
              Snappify alternative · 100% Free · No watermarks
            </p>
            <h1 className={landingH1}>
              Free Snappify Alternative for Code Screenshots & Video
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              Snappify is an amazing tool if you want to build a full 20-slide code presentation. But if you just want to export a beautiful code screenshot or an animated .webm video without hitting a paywall or dealing with watermarks, KromaStudio is your best bet. KromaStudio offers{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshots"
                location="snappify_hero_inline_code"
              >
                code screenshots
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="snappify_hero_inline_mockup"
              >
                browser mockups
              </LandingInlineLink>
              , and{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Social content"
                location="snappify_hero_inline_social"
              >
                social templates
              </LandingInlineLink>{" "}
              in one place. Everything runs{" "}
              <LandingInlineLink
                href="/privacy"
                label="Client-side privacy"
                location="snappify_hero_inline_privacy"
              >
                client-side
              </LandingInlineLink>
              , open-source, and free.
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
                label="Try KromaStudio Free"
                location="snappify_hero_cta"
                className={landingCtaPrimary}
              >
                Try KromaStudio Free
              </StudioCTAButton>
              <TrackedLink
                href="#live-examples"
                label="See Live Examples"
                location="snappify_hero_secondary"
                className={landingCtaSecondary}
              >
                See Live Examples
              </TrackedLink>
            </div>
          </div>

          <ScreenshotFigure src={heroShot.src} alt={heroShot.alt} />

          {/* Why Developers Switch */}
          <section className="flex flex-col gap-5">
            <h2 className={landingH2}>
              What KromaStudio Adds Beyond Code Cards
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {SWITCH_CARDS.map((card) => (
                <div
                  key={card.title}
                  className={`${landingCard} gap-3`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-purple/10 text-neon-purple">
                      <SwitchCardIcon name={card.icon} />
                    </span>
                    <h3 className={`${landingH3} text-sm`}>{card.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">{card.body}</p>
                  <LandingInlineLink
                    href={card.href}
                    label={card.linkLabel}
                    location="snappify_switch_card_link"
                  >
                    {card.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>
          </section>

          {/* Why Developers Look for a Snappify Alternative */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>
              Why Developers Look for Snappify Alternatives
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              If you have used Snappify, you know it is incredibly feature-rich. But that complexity comes with a price tag. The free tier adds watermarks and limits your slides. If you don&apos;t need a full presentation editor, KromaStudio offers a faster, free path to a polished result.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {WHY_SWITCH_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Comparison table */}
          <section className="flex flex-col gap-6">
            <h2 className={landingH2}>KromaStudio vs Snappify</h2>
            <div className={`overflow-x-auto ${landingCard} !gap-0 !p-0`}>
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className={`px-4 py-3 ${landingH3}`}>Feature</th>
                    <th className={`px-4 py-3 ${landingH3}`}>Snappify</th>
                    <th className={`px-4 py-3 ${landingH3}`}>KromaStudio</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-border last:border-0">
                      <td className={`px-4 py-3 font-medium ${landingH3}`}>{row.feature}</td>
                      <td className="px-4 py-3 text-text-muted">{row.snappify}</td>
                      <td className="px-4 py-3 text-text-muted">{row.kromaStudio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ScreenshotFigure src={comparisonShot.src} alt={comparisonShot.alt} />

            <div className="flex flex-col gap-6">
              <h3 className={`${landingH3} text-base`}>
                3 Key Differences
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
                    location="snappify_key_diff_link"
                  >
                    {diff.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>

            <StudioCTAButton
              mode="code"
              label="Try KromaStudio Free"
              location="snappify_comparison_cta"
              className={`${landingCtaPrimary} w-fit`}
            >
              Try KromaStudio Free
            </StudioCTAButton>
          </section>

          {/* Features + screenshot slots */}
          <section id="live-examples" className="flex scroll-mt-8 flex-col gap-6">
            <h2 className={landingH2}>
              Features That Make KromaStudio Different
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
                      location="snappify_feature_link"
                      className="w-fit {landingProseLink}"
                    >
                      {section.link.label} →
                    </TrackedLink>
                  )}
                </div>
              );
            })}
          </section>

          {/* Other alternatives */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>
              Other Snappify Alternatives to Consider
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {OTHER_ALTERNATIVES.map((item) => (
                <li key={item.name}>
                  <strong className={landingH3}>{item.name}</strong> —{" "}
                  {item.bestFor}
                </li>
              ))}
            </ul>
          </section>

          {/* Audience */}
          <section className="flex flex-col gap-6">
            <h2 className={landingH2}>Who Should Use KromaStudio?</h2>
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
                    location="snappify_use_case_link"
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
                Create More Than Code Screenshots
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                Code, screenshots, mockups, social cards — one free tool. No account
                needed.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <StudioCTAButton
                  mode="code"
                  label="Start Creating Free"
                  location="snappify_pre_faq_cta"
                  className={landingCtaPrimary}
                >
                  Start Creating Free
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
                          location="snappify_faq_link"
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

          {/* Final verdict */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>Final Verdict</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              <strong className={landingH3}>Stick with Snappify</strong> if
              you need a full multi-slide presentation editor with custom keyframe animations. It is the best tool on the market for that specific use case.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              <strong className={landingH3}>Try KromaStudio</strong> if
              you want to instantly generate an animated code loop, a browser mockup, or a code screenshot without dealing with watermarks or paying a monthly fee.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StudioCTAButton
                mode="code"
                label="Try KromaStudio Free"
                location="snappify_verdict_cta"
                className={landingCtaPrimary}
              >
                Try KromaStudio Free
              </StudioCTAButton>
            </div>
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
                    location="snappify_internal_link"
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
