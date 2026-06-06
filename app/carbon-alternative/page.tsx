import { LandingShell } from "@/components/layout/LandingShell";
import { LandingInlineLink } from "@/components/landing/LandingInlineLink";
import { ScreenshotFigure } from "@/components/landing/ScreenshotFigure";
import { SwitchCardIcon } from "@/components/landing/SwitchCardIcon";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getCarbonAlternativeJsonLd } from "@/lib/json-ld";
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
} from "@/lib/landing/carbon-alternative";
import { LANDING_PAGE_META, VSCODE_MARKETPLACE_URL } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/carbon-alternative",
  title: LANDING_PAGE_META.carbonAlternative.title,
  description: LANDING_PAGE_META.carbonAlternative.description,
});

const jsonLd = getCarbonAlternativeJsonLd();

const ctaPrimaryClassName =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

const ctaSecondaryClassName =
  "inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple";

export default function CarbonAlternativePage() {
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
              Carbon.now.sh alternative · Free · No sign-up
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              Carbon Alternative That Does More Than Code Screenshots
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              Carbon nails code cards — and honestly, for a plain snippet image it
              still holds up. But if you are also making launch mockups, social posts,
              or short video clips, you end up opening a few extra tabs. KromaStudio
              keeps{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshots"
                location="carbon_hero_inline_code"
              >
                code screenshots
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="carbon_hero_inline_mockup"
              >
                browser mockups
              </LandingInlineLink>
              , and{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Social content"
                location="carbon_hero_inline_social"
              >
                social templates
              </LandingInlineLink>{" "}
              in one place. Everything runs{" "}
              <LandingInlineLink
                href="/privacy"
                label="Client-side privacy"
                location="carbon_hero_inline_privacy"
              >
                client-side
              </LandingInlineLink>
              , free, no sign-up.
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
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <StudioCTAButton
                mode="code"
                label="Try KromaStudio Free"
                location="carbon_hero_cta"
                className={ctaPrimaryClassName}
              >
                Try KromaStudio Free
              </StudioCTAButton>
              <TrackedExternalLink
                href={VSCODE_MARKETPLACE_URL}
                label="Install VS Code Extension"
                location="carbon_hero_vscode"
                className={ctaSecondaryClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install VS Code Extension
              </TrackedExternalLink>
              <TrackedLink
                href="#live-examples"
                label="See Live Examples"
                location="carbon_hero_secondary"
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
                    location="carbon_switch_card_link"
                  >
                    {card.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>
          </section>

          {/* Why Developers Look for a Carbon Alternative */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">
              Why Developers Look for Carbon Alternatives
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              If you have used Carbon, you know it is good at what it does. People start
              looking elsewhere when they need{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="carbon_why_switch_inline"
              >
                browser mockups
              </LandingInlineLink>
              , social layouts, or a bit of motion — not just another code card.{" "}
              <LandingInlineLink
                href="/how-it-works"
                label="How it works"
                location="carbon_why_switch_how"
              >
                Here is how KromaStudio handles that
              </LandingInlineLink>
              .
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              {WHY_SWITCH_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {/* What is Carbon? */}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">What is Carbon?</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Carbon (carbon.now.sh) has been around since 2017 — MIT open source,
              36k+ GitHub stars, the tool most devs reach for when they need a pretty
              code image. Paste code, drop a file, or pull in a GitHub gist. Pick a
              theme, tweak fonts and padding, export PNG or SVG, or grab a share link
              that previews on Twitter and Slack.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              What keeps people on Carbon: 150+ themes, carbon-now-cli for terminal
              workflows, and defaults that just work. If all you need is a sharp code
              card — maybe with SVG or CLI automation — it is still hard to beat.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              KromaStudio is MIT open source too — you can self-host either project.
              The difference is scope: Carbon stays focused on code cards; KromaStudio
              adds mockups, social templates, and .webm export in the same codebase.
            </p>
          </section>

          {/* Comparison table + 5 key differences */}
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">KromaStudio vs Carbon</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Honest side-by-side below. Both are free, both are MIT open source. The
              gap is mostly what each tool tries to cover. More detail on our{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshot generator"
                location="carbon_compare_inline_code"
              >
                code
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockup generator"
                location="carbon_compare_inline_mockup"
              >
                mockup
              </LandingInlineLink>
              , or{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Content post generator"
                location="carbon_compare_inline_content"
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
                    <th className="px-4 py-3 font-semibold text-white">Carbon</th>
                    <th className="px-4 py-3 font-semibold text-white">KromaStudio</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-medium text-white">{row.feature}</td>
                      <td className="px-4 py-3 text-text-muted">{row.carbon}</td>
                      <td className="px-4 py-3 text-text-muted">{row.kromaStudio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ScreenshotFigure src={comparisonShot.src} alt={comparisonShot.alt} />

            <div className="flex flex-col gap-6">
              <h3 className="text-base font-semibold text-white">
                5 Key Differences Between Carbon and KromaStudio
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
                    location="carbon_key_diff_link"
                  >
                    {diff.linkLabel} →
                  </LandingInlineLink>
                </div>
              ))}
            </div>

            <StudioCTAButton
              mode="code"
              label="Try KromaStudio Free"
              location="carbon_comparison_cta"
              className={`${ctaPrimaryClassName} w-fit`}
            >
              Try KromaStudio Free
            </StudioCTAButton>
          </section>

          {/* Features + screenshot slots */}
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
                      location="carbon_feature_link"
                      className="w-fit text-sm text-neon-purple transition-colors hover:text-white"
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
            <h2 className="text-lg font-semibold">
              Other Carbon Alternatives to Consider
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              No single tool does everything. These come up a lot when people compare
              notes with Carbon:
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
              For a detailed Ray.so comparison, see our{" "}
              <LandingInlineLink
                href="/ray-so-alternative"
                label="KromaStudio vs Ray.so"
                location="carbon_other_alt_ray_so"
              >
                KromaStudio vs Ray.so
              </LandingInlineLink>{" "}
              page. KromaStudio fits when you want{" "}
              <LandingInlineLink
                href="/code-screenshot-generator"
                label="Code screenshots"
                location="carbon_other_alt_inline_code"
              >
                code screenshots
              </LandingInlineLink>{" "}
              plus{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="carbon_other_alt_inline_mockup"
              >
                product browser mockups
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Social post templates"
                location="carbon_other_alt_inline_social"
              >
                social post templates
              </LandingInlineLink>
              , and client-side .webm animation — free, in one studio, without combining
              three separate tools.
            </p>
          </section>

          {/* Audience */}
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Who Should Use KromaStudio?</h2>
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
                    location="carbon_use_case_link"
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
                Code, screenshots, mockups, social cards — one free tool. No account
                needed.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <StudioCTAButton
                  mode="code"
                  label="Start Creating Free"
                  location="carbon_pre_faq_cta"
                  className={ctaPrimaryClassName}
                >
                  Start Creating Free
                </StudioCTAButton>
                <StudioCTAButton
                  mode="content"
                  label="Explore Templates"
                  location="carbon_pre_faq_templates"
                  className={ctaSecondaryClassName}
                >
                  Explore Templates
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
                          location="carbon_faq_link"
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
            <h2 className="text-lg font-semibold">Final Verdict</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              <strong className="font-semibold text-white">Stick with Carbon</strong> if
              you want 150+ themes, SVG, embed links, or carbon-now-cli in your terminal.
              For a straight code card, it is still the one to beat.
            </p>
            <p className="text-sm leading-relaxed text-text-muted">
              <strong className="font-semibold text-white">Try KromaStudio</strong> if
              you are also making{" "}
              <LandingInlineLink
                href="/browser-mockup-generator"
                label="Browser mockups"
                location="carbon_verdict_inline_mockup"
              >
                browser mockups
              </LandingInlineLink>
              ,{" "}
              <LandingInlineLink
                href="/content-post-generator"
                label="Social post templates"
                location="carbon_verdict_inline_social"
              >
                social posts
              </LandingInlineLink>
              , or short .webm clips — and you would rather not hop between three apps. Both
              are MIT open source; KromaStudio just covers more ground in one repo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StudioCTAButton
                mode="code"
                label="Try KromaStudio Free"
                location="carbon_verdict_cta"
                className={ctaPrimaryClassName}
              >
                Try KromaStudio Free
              </StudioCTAButton>
              <TrackedLink
                href="/how-it-works"
                label="How It Works"
                location="carbon_verdict_secondary"
                className={ctaSecondaryClassName}
              >
                See How It Works
              </TrackedLink>
            </div>
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
                    location="carbon_internal_link"
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
