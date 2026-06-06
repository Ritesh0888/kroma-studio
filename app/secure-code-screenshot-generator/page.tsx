import { LandingShell } from "@/components/layout/LandingShell";
import { LandingInlineLink } from "@/components/landing/LandingInlineLink";
import { ScreenshotFigure } from "@/components/landing/ScreenshotFigure";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getSecureCodeScreenshotJsonLd } from "@/lib/json-ld";
import {
  COMPARISON_ROWS,
  FAQS,
  KEY_DIFFERENCES,
  WHY_SWITCH_POINTS,
} from "@/lib/landing/secure-code-screenshot";
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
  path: "/secure-code-screenshot-generator",
  ...LANDING_PAGE_META.secureCodeScreenshot,
});

const jsonLd = getSecureCodeScreenshotJsonLd();

const ctaPrimaryClassName =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

const ctaSecondaryClassName =
  "inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple";

export default function SecureCodeScreenshotPage() {
  const heroShot = SCREENSHOT_SLOTS.hero;
  const comparisonShot = SCREENSHOT_SLOTS.comparison;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingShell>
        <article className="flex flex-col gap-10">
          {/* Hero */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-medium uppercase tracking-widest text-neon-purple">
              100% Client-Side · Zero Uploads · Privacy First
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              Secure Code Screenshot Generator
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              Most code screenshot tools send your raw source code to a remote server for rendering. If you're working with proprietary logic, internal APIs, or secrets, that's a security risk. KromaStudio processes everything{" "}
              <LandingInlineLink
                href="/privacy"
                label="locally in your browser"
                location="secure_hero_inline_privacy"
              >
                locally in your browser
              </LandingInlineLink>
              . Your code never leaves your device. Export beautiful{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="code screenshots"
                location="secure_hero_inline_code"
              >
                code screenshots
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="browser mockups"
                location="secure_hero_inline_mockup"
              >
                browser mockups
              </LandingInlineLink>
              , and animated videos with zero latency and absolute peace of mind.
            </p>
            <div className="flex flex-wrap gap-2">
              {HERO_TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-white"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StudioCTAButton
                mode="code"
                label="Create Securely for Free"
                location="secure_hero_cta"
                className={ctaPrimaryClassName}
              >
                Create Securely for Free
              </StudioCTAButton>
              <TrackedLink
                href="#live-examples"
                label="See Live Examples"
                location="secure_hero_secondary"
                className={ctaSecondaryClassName}
              >
                See Live Examples
              </TrackedLink>
            </div>
          </div>

          <ScreenshotFigure src={heroShot.src} alt={heroShot.alt} />

          {/* Why Developers Demand Privacy */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">
              Why Server-Side Rendering is a Risk
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Whether you are an Indie Hacker pasting your secret algorithm, or an enterprise developer working with internal company schemas, you shouldn't have to choose between a beautiful presentation and data security. 
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {WHY_SWITCH_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Comparison table */}
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Client-Side vs Server-Side Generators</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-4 py-3 font-semibold text-white">Feature</th>
                    <th className="px-4 py-3 font-semibold text-white">Server-Side Tools (Carbon, etc.)</th>
                    <th className="px-4 py-3 font-semibold text-white">KromaStudio (Client-Side)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-medium text-white">{row.feature}</td>
                      <td className="px-4 py-3 text-text-muted">{row.serverSide}</td>
                      <td className="px-4 py-3 text-text-muted">{row.kromaStudio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ScreenshotFigure src={comparisonShot.src} alt={comparisonShot.alt} />

            <div className="flex flex-col gap-6">
              <h3 className="text-base font-semibold text-white">
                Core Differences
              </h3>
              {KEY_DIFFERENCES.map((diff) => (
                <div key={diff.title} className="flex flex-col gap-2">
                  <h4 className="text-sm font-semibold text-white">{diff.title}</h4>
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
                    location="secure_key_diff_link"
                  >
                    {diff.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>

            <StudioCTAButton
              mode="code"
              label="Try KromaStudio Free"
              location="secure_comparison_cta"
              className={`${ctaPrimaryClassName} w-fit`}
            >
              Try KromaStudio Free
            </StudioCTAButton>
          </section>

          {/* Features + screenshot slots */}
          <section id="live-examples" className="flex scroll-mt-8 flex-col gap-6">
            <h2 className="text-lg font-semibold">
              Secure Features
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
                  <h3 className="text-sm font-semibold text-white">{section.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{section.body}</p>
                  {shot && <ScreenshotFigure src={shot.src} alt={shot.alt} />}
                  {section.link && (
                    <TrackedLink
                      href={section.link.href}
                      label={section.link.label}
                      location="secure_feature_link"
                      className="w-fit text-sm text-neon-purple transition-colors hover:text-white"
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
            <h2 className="text-lg font-semibold">Who Needs a Secure Generator?</h2>
            {AUDIENCE_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-white">{section.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{section.body}</p>
              </div>
            ))}
          </section>

          {/* Use cases */}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Real Use Cases</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {USE_CASES.map((useCase) => (
                <li key={useCase.text}>
                  {useCase.text}{" "}
                  <LandingInlineLink
                    href={useCase.href}
                    label={useCase.linkLabel}
                    location="secure_use_case_link"
                  >
                    {useCase.linkLabel} →
                  </LandingInlineLink>
                </li>
              ))}
            </ul>
          </section>

          {/* Trust builders */}
          <section className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Our Privacy Commitment</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {TRUST_BUILDERS.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-4"
                >
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6">
            <ScreenshotFigure
              src={SCREENSHOT_SLOTS.finalCta.src}
              alt={SCREENSHOT_SLOTS.finalCta.alt}
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Create Securely
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                Zero uploads. No sign-up. 100% private.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <StudioCTAButton
                  mode="code"
                  label="Start Creating Free"
                  location="secure_pre_faq_cta"
                  className={ctaPrimaryClassName}
                >
                  Start Creating Free
                </StudioCTAButton>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
            <dl className="flex flex-col gap-4">
              {FAQS.map((item) => (
                <div key={item.q}>
                  <dt className="text-sm font-semibold text-white">{item.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                    {item.a}
                    {item.href && item.linkLabel && (
                      <>
                        {" "}
                        <LandingInlineLink
                          href={item.href}
                          label={item.linkLabel}
                          location="secure_faq_link"
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
            <h2 className="text-lg font-semibold">Explore KromaStudio Tools</h2>
            <ul className="flex flex-col gap-2">
              {INTERNAL_LINKS.map((link) => (
                <li key={link.href}>
                  <TrackedLink
                    href={link.href}
                    label={link.label}
                    location="secure_internal_link"
                    className="text-sm text-neon-purple transition-colors hover:text-white"
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
