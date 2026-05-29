import { LandingShell } from "@/components/layout/LandingShell";
import { LandingInlineLink } from "@/components/landing/LandingInlineLink";
import { ScreenshotFigure } from "@/components/landing/ScreenshotFigure";
import { SwitchCardIcon } from "@/components/landing/SwitchCardIcon";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getRaySoAlternativeJsonLd } from "@/lib/json-ld";
import {
  AUDIENCE_SECTIONS,
  COMPARISON_ROWS,
  FAQS,
  FEATURE_SECTIONS,
  HERO_TRUST_BADGES,
  INTERNAL_LINKS,
  KEY_DIFFERENCES,
  OTHER_ALTERNATIVES,
  SCREENSHOT_SLOTS,
  SWITCH_CARDS,
  TRUST_BUILDERS,
  USE_CASES,
  WHY_SWITCH_POINTS,
} from "@/lib/landing/ray-so-alternative";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/ray-so-alternative",
  title: LANDING_PAGE_META.raySoAlternative.title,
  description: LANDING_PAGE_META.raySoAlternative.description,
});

const jsonLd = getRaySoAlternativeJsonLd();

const ctaPrimaryClassName =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

const ctaSecondaryClassName =
  "inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple";

export default function RaySoAlternativePage() {
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
          {/* Hero — conversion-focused */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-medium uppercase tracking-widest text-neon-purple">
              Ray.so alternative · Free · No sign-up
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              Ray.so Alternative That Does More Than Code Screenshots
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              KromaStudio is a free studio for developers who need more than a code
              card alone. Create{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshots"
                location="ray_so_hero_inline_code"
              >
                syntax-highlighted screenshots
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="ray_so_hero_inline_mockup"
              >
                browser mockups
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Social content"
                location="ray_so_hero_inline_social"
              >
                social media visuals
              </LandingInlineLink>
              , and animated .webm exports — all from one{" "}
              <LandingInlineLink
                href="/privacy"
                label="Client-side privacy"
                location="ray_so_hero_inline_privacy"
              >
                client-side
              </LandingInlineLink>{" "}
              tool, without switching apps or creating an account.
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
                label="Try KromaStudio Free"
                location="ray_so_hero_cta"
                className={ctaPrimaryClassName}
              >
                Try KromaStudio Free
              </StudioCTAButton>
              <TrackedLink
                href="#live-examples"
                label="See Live Examples"
                location="ray_so_hero_secondary"
                className={ctaSecondaryClassName}
              >
                See Live Examples
              </TrackedLink>
            </div>
          </div>

          <ScreenshotFigure src={heroShot.src} alt={heroShot.alt} />

          {/* Why Developers Switch — skimmable cards */}
          <section className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">
              What KromaStudio Adds Beyond Code Cards
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {SWITCH_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-purple/10 text-neon-purple">
                      <SwitchCardIcon name={card.icon} />
                    </span>
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">{card.body}</p>
                  <LandingInlineLink
                    href={card.href}
                    label={card.linkLabel}
                    location="ray_so_switch_card_link"
                  >
                    {card.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>
          </section>

          {/* Existing — Why Developers Look for a Ray.so Alternative */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">
              Why Developers Look for Ray.so Alternatives
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Ray.so is a trusted{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshot tool"
                location="ray_so_why_switch_inline"
              >
                code screenshot tool
              </LandingInlineLink>
              . Developers often explore alternatives when they need more customization,
              different sharing options, animation, or a workflow that goes beyond a
              single static code card. See{" "}
              <LandingInlineLink
                href="/how-it-works"
                label="How it works"
                location="ray_so_why_switch_how"
              >
                how KromaStudio works
              </LandingInlineLink>
              .
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {WHY_SWITCH_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Existing — What is Ray.so? */}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">What is Ray.so?</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Ray.so is a popular online code beautifier built by the Raycast team. You
              paste a snippet, choose a theme and background, adjust padding and font size,
              and export a polished PNG or SVG — including 2× retina output. You can also
              use URL query parameters for programmatic image generation from shell
              scripts or editor extensions.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              Developers like Ray.so for its speed, clean defaults, and focused scope. It
              does one job well: turn raw code into a shareable image. If your needs stop
              at a syntax-highlighted card, Ray.so remains an excellent choice.
            </p>
          </section>

          {/* Comparison table + 5 key differences (optimized) */}
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">KromaStudio vs Ray.so</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              A side-by-side for developers comparing Ray.so with KromaStudio.
              Both are free to use; the main difference is workflow breadth. Jump
              to our{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshot generator"
                location="ray_so_compare_inline_code"
              >
                code
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockup generator"
                location="ray_so_compare_inline_mockup"
              >
                mockup
              </LandingInlineLink>
              , or{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Content post generator"
                location="ray_so_compare_inline_content"
              >
                social content
              </LandingInlineLink>{" "}
              pages for a deeper dive.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-4 py-3 font-semibold text-white">Feature</th>
                    <th className="px-4 py-3 font-semibold text-white">Ray.so</th>
                    <th className="px-4 py-3 font-semibold text-white">KromaStudio</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-medium text-white">{row.feature}</td>
                      <td className="px-4 py-3 text-text-muted">{row.raySo}</td>
                      <td className="px-4 py-3 text-text-muted">{row.kromaStudio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ScreenshotFigure src={comparisonShot.src} alt={comparisonShot.alt} />

            <div className="flex flex-col gap-6">
              <h3 className="text-base font-semibold text-white">
                5 Key Differences Between Ray.so and KromaStudio
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
                    location="ray_so_key_diff_link"
                  >
                    {diff.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>

            <StudioCTAButton
              mode="code"
              label="Try KromaStudio Free"
              location="ray_so_comparison_cta"
              className={`${ctaPrimaryClassName} w-fit`}
            >
              Try KromaStudio Free
            </StudioCTAButton>
          </section>

          {/* Existing — Features + screenshot slots */}
          <section id="live-examples" className="flex scroll-mt-8 flex-col gap-6">
            <h2 className="text-lg font-semibold">
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
                  <h3 className="text-sm font-semibold text-white">{section.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{section.body}</p>
                  {shot && <ScreenshotFigure src={shot.src} alt={shot.alt} />}
                  {section.link && (
                    <TrackedLink
                      href={section.link.href}
                      label={section.link.label}
                      location="ray_so_feature_link"
                      className="w-fit text-sm text-neon-purple transition-colors hover:text-white"
                    >
                      {section.link.label} →
                    </TrackedLink>
                  )}
                </div>
              );
            })}
          </section>

          {/* Existing — Other alternatives */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">
              Other Ray.so Alternatives to Consider
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Different tools fit different jobs. These are commonly compared with
              Ray.so — each excels at something specific:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {OTHER_ALTERNATIVES.map((item) => (
                <li key={item.name}>
                  <strong className="font-semibold text-white">{item.name}</strong> —{" "}
                  {item.bestFor}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-text-muted">
              KromaStudio fits when you want{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshots"
                location="ray_so_other_alt_inline_code"
              >
                code screenshots
              </LandingInlineLink>{" "}
              plus{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="ray_so_other_alt_inline_mockup"
              >
                product browser mockups
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Social post templates"
                location="ray_so_other_alt_inline_social"
              >
                social post templates
              </LandingInlineLink>
              , and client-side .webm animation — free, in one studio, without combining
              three separate tools.
            </p>
          </section>

          {/* Existing — Audience */}
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Who Should Use KromaStudio?</h2>
            {AUDIENCE_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-white">{section.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{section.body}</p>
              </div>
            ))}
          </section>

          {/* Existing — Use cases */}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Real Use Cases</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {USE_CASES.map((useCase) => (
                <li key={useCase.text}>
                  {useCase.text}{" "}
                  <LandingInlineLink
                    href={useCase.href}
                    label={useCase.linkLabel}
                    location="ray_so_use_case_link"
                  >
                    {useCase.linkLabel} →
                  </LandingInlineLink>
                </li>
              ))}
            </ul>
          </section>

          {/* Trust builders */}
          <section className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Why Developers Trust KromaStudio</h2>
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

          {/* Final conversion CTA — before FAQs */}
          <section className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6">
            <ScreenshotFigure
              src={SCREENSHOT_SLOTS.finalCta.src}
              alt={SCREENSHOT_SLOTS.finalCta.alt}
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Create More Than Code Screenshots
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                Turn code, screenshots, and ideas into beautiful visuals from one free
                tool —{" "}
                <LandingInlineLink
                  href="/browser-mockup-generator"
                  label="Mockups"
                  location="ray_so_pre_faq_inline_mockup"
                >
                  mockups
                </LandingInlineLink>
                ,{" "}
                <LandingInlineLink
                  href="/content-post-generator"
                  label="Social cards"
                  location="ray_so_pre_faq_inline_social"
                >
                  social cards
                </LandingInlineLink>
                , and motion exports included.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <StudioCTAButton
                  mode="code"
                  label="Start Creating Free"
                  location="ray_so_pre_faq_cta"
                  className={ctaPrimaryClassName}
                >
                  Start Creating Free
                </StudioCTAButton>
                <StudioCTAButton
                  mode="content"
                  label="Explore Templates"
                  location="ray_so_pre_faq_templates"
                  className={ctaSecondaryClassName}
                >
                  Explore Templates
                </StudioCTAButton>
              </div>
            </div>
          </section>

          {/* Existing — FAQ */}
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
                          location="ray_so_faq_link"
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

          {/* Existing — Final verdict */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Final Verdict</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              <strong className="font-semibold text-white">Choose Ray.so</strong> when
              you need a minimal, fast code card — paste, pick a theme, export PNG or
              SVG. Ray.so remains a strong choice for that focused workflow.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              <strong className="font-semibold text-white">Choose KromaStudio</strong>{" "}
              when you also need{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="ray_so_verdict_inline_mockup"
              >
                browser mockups
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Social post templates"
                location="ray_so_verdict_inline_social"
              >
                social post templates
              </LandingInlineLink>
              , or animated .webm code clips — without switching to a separate mockup
              or design tool.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StudioCTAButton
                mode="code"
                label="Try KromaStudio Free"
                location="ray_so_verdict_cta"
                className={ctaPrimaryClassName}
              >
                Try KromaStudio Free
              </StudioCTAButton>
              <TrackedLink
                href="/how-it-works"
                label="How It Works"
                location="ray_so_verdict_secondary"
                className={ctaSecondaryClassName}
              >
                See How It Works
              </TrackedLink>
            </div>
          </section>

          {/* Existing — Internal links */}
          <section className="flex flex-col gap-3 border-t border-border pt-8">
            <h2 className="text-lg font-semibold">Explore KromaStudio Tools</h2>
            <ul className="flex flex-col gap-2">
              {INTERNAL_LINKS.map((link) => (
                <li key={link.href}>
                  <TrackedLink
                    href={link.href}
                    label={link.label}
                    location="ray_so_internal_link"
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
