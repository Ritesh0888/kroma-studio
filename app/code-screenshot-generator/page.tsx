import { LandingShell } from "@/components/layout/LandingShell";
import { landingBadge, landingCard, landingCardLg, landingCtaPrimary, landingCtaSecondary, landingEyebrow, landingH1, landingH2, landingH3, landingProseLink } from "@/lib/landing-ui";
import { ScreenshotFigure } from "@/components/landing/ScreenshotFigure";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getCodeScreenshotJsonLd } from "@/lib/json-ld";
import {
  ALL_LANGUAGES,
  ALL_THEMES,
  FAQS,
  HERO_TRUST_BADGES,
  HOW_TO_STEPS,
  RELATED_TOOLS,
  USE_CASES,
  WHY_KROMA,
} from "@/lib/landing/code-screenshot-generator";
import { LANDING_PAGE_META, VSCODE_MARKETPLACE_URL } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/code-screenshot-generator",
  ...LANDING_PAGE_META.codeScreenshot,
});

const jsonLd = getCodeScreenshotJsonLd();

export default function CodeScreenshotGeneratorPage() {
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
              {HERO_TRUST_BADGES.join(" · ")}
            </p>
            <h1 className={landingH1}>
              Free Code Screenshot Generator
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              Turn raw code snippets into scroll-stopping social graphics in seconds.
              KromaStudio runs entirely in your browser — paste code, pick a theme like
              Dracula or One Dark Pro, add a gradient background, and export a sharp PNG
              at 1×, 2×, 3×, or 4× resolution, or render an animated .webm loop.
              No sign-up, no server upload, no watermark.
            </p>

            <div className="flex flex-wrap gap-3">
              <StudioCTAButton
                mode="code"
                label="Open Code Screenshot Generator"
                location="code_landing_primary"
                className={landingCtaPrimary}
              >
                Open Code Screenshot Generator
              </StudioCTAButton>
              <TrackedExternalLink
                href={VSCODE_MARKETPLACE_URL}
                label="Install VS Code Extension"
                location="code_landing_vscode"
                className={landingCtaSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install VS Code Extension
              </TrackedExternalLink>
              <TrackedLink
                href="/browser-mockup-generator"
                label="Browser Mockups"
                location="code_landing_secondary"
                className={landingCtaSecondary}
              >
                Browser Mockups
              </TrackedLink>
            </div>
          </div>

          {/* How it works */}
          <section className="flex flex-col gap-5">
            <h2 className={landingH2}>How to create a code screenshot</h2>
            <ol className="flex flex-col gap-6">
              {HOW_TO_STEPS.map((step, index) => (
                <li key={step.title} className="flex flex-col gap-2">
                  <h3 className={`${landingH3} text-sm`}>
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {step.body}
                    {step.href && step.linkLabel && (
                      <>
                        {" "}
                        <TrackedExternalLink
                          href={step.href}
                          label={step.linkLabel}
                          location="code_landing_step_link"
                          className={landingProseLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {step.linkLabel} →
                        </TrackedExternalLink>
                      </>
                    )}
                  </p>
                  {index === 0 && (
                    <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <ScreenshotFigure
                        src="/screenshots/vscode-before-selection.png"
                        alt="Select code in VS Code and run KromaStudio Capture Selection"
                      />
                      <ScreenshotFigure
                        src="/screenshots/vscode-after-kroma-studio.png"
                        alt="Code snippet opened in KromaStudio with theme and background applied"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {/* Themes */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>15 syntax themes</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Every theme is powered by Shiki — the same syntax highlighter used by
              VS Code and the official TypeScript docs. Colors are accurate to the
              real editor, not approximations.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ALL_THEMES.map((theme) => (
                <li
                  key={theme.name}
                  className={landingCard}
                >
                  <span className={`${landingH3} text-sm`}>{theme.name}</span>
                  <span className="text-sm leading-relaxed text-text-muted">
                    {theme.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Languages */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>25 supported programming languages</h2>
            <div className="flex flex-col gap-4">
              {ALL_LANGUAGES.map((group) => (
                <div key={group.group} className="flex flex-col gap-2">
                  <h3 className={`${landingH3} text-sm`}>{group.group}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {group.languages.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why KromaStudio vs Carbon / Ray.so */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>
              What KromaStudio adds beyond Carbon and Ray.so
            </h2>
            <ul className="flex flex-col gap-5">
              {WHY_KROMA.map((item) => (
                <li key={item.title} className="flex flex-col gap-1">
                  <h3 className={`${landingH3} text-sm`}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <TrackedLink
                href="/carbon-alternative"
                label="KromaStudio vs Carbon"
                location="code_landing_carbon_compare"
                className={landingProseLink}
              >
                KromaStudio vs Carbon.now.sh →
              </TrackedLink>
              <TrackedLink
                href="/ray-so-alternative"
                label="KromaStudio vs Ray.so"
                location="code_landing_ray_so_compare"
                className={landingProseLink}
              >
                KromaStudio vs Ray.so →
              </TrackedLink>
            </div>
          </section>

          {/* Use cases */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>When developers use code screenshots</h2>
            <ul className="flex flex-col gap-5">
              {USE_CASES.map((uc) => (
                <li key={uc.title} className="flex flex-col gap-1">
                  <h3 className={`${landingH3} text-sm`}>{uc.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{uc.body}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>Frequently asked questions</h2>
            <dl className="flex flex-col gap-4">
              {FAQS.map((item) => (
                <div key={item.q}>
                  <dt className={`${landingH3} text-sm`}>{item.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                    {item.a}
                    {item.href && item.linkLabel && (
                      <>
                        {" "}
                        {item.href.startsWith("http") ? (
                          <TrackedExternalLink
                            href={item.href}
                            label={item.linkLabel}
                            location="code_landing_faq_link"
                            className={landingProseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.linkLabel} →
                          </TrackedExternalLink>
                        ) : (
                          <TrackedLink
                            href={item.href}
                            label={item.linkLabel}
                            location="code_landing_faq_link"
                            className={landingProseLink}
                          >
                            {item.linkLabel} →
                          </TrackedLink>
                        )}
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Related tools */}
          <section className="flex flex-col gap-4">
            <h2 className={landingH2}>Explore KromaStudio tools</h2>
            <ul className="flex flex-col gap-3">
              {RELATED_TOOLS.map((tool) => (
                <li key={tool.href}>
                  <TrackedLink
                    href={tool.href}
                    label={tool.label}
                    location="code_landing_related"
                    className="group flex flex-col gap-0.5"
                  >
                    <span className={`${landingProseLink} font-semibold`}>
                      {tool.label} →
                    </span>
                    <span className="text-sm text-text-muted">{tool.description}</span>
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
