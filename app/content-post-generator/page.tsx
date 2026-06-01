import { LandingShell } from "@/components/layout/LandingShell";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getContentPostJsonLd } from "@/lib/json-ld";
import {
  FAQS,
  HERO_TRUST_BADGES,
  HOW_TO_STEPS,
  RELATED_TOOLS,
  TEMPLATES,
  USE_CASES,
} from "@/lib/landing/content-post-generator";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

const jsonLd = getContentPostJsonLd();

export const metadata = createLandingMetadata({
  path: "/content-post-generator",
  ...LANDING_PAGE_META.contentPost,
});

const ctaPrimaryClassName =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

const ctaSecondaryClassName =
  "inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple";

export default function ContentPostGeneratorPage() {
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
              {HERO_TRUST_BADGES.join(" · ")}
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              Free Social Post Card Maker for Developers and Founders
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              Turn plain text into polished tweet cards, LinkedIn post images, announcement
              graphics, metrics snapshots, and more — all from one free visual design tool.
              Unlike AI text generators (Hootsuite, Buffer, Canva), KromaStudio is a
              visual card designer: you control the layout, brand colors, avatar, and export
              a sharp PNG or a looping .webm animation. No sign-up, no design skills needed.
            </p>

            <div className="flex flex-wrap gap-3">
              <StudioCTAButton
                mode="content"
                label="Open Content Post Generator"
                location="content_landing_primary"
                className={ctaPrimaryClassName}
              >
                Open Content Post Generator
              </StudioCTAButton>
              <TrackedLink
                href="/code-screenshot-generator"
                label="Code Screenshots"
                location="content_landing_secondary_code"
                className={ctaSecondaryClassName}
              >
                Code Screenshots
              </TrackedLink>
              <TrackedLink
                href="/browser-mockup-generator"
                label="Browser Mockups"
                location="content_landing_secondary_mockup"
                className={ctaSecondaryClassName}
              >
                Browser Mockups
              </TrackedLink>
            </div>
          </div>

          {/* Differentiation from AI text generators */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Visual card maker — not an AI text generator</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Most tools called "social post generator" use AI to write text captions.
              KromaStudio is different — it&apos;s a visual card designer that turns your
              content into a shareable image. You write the copy; KromaStudio makes it
              look polished and ready to post.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  name: "Designed for developers & founders",
                  body: "Templates built for what developers actually share: tweet screenshots, metrics cards, code + announcement combos, and launch threads.",
                },
                {
                  name: "Export a real image, not a text draft",
                  body: "Every export is a high-resolution PNG or animated .webm — attach it to your tweet, LinkedIn post, or Product Hunt gallery directly.",
                },
                {
                  name: "No AI hallucinations, no subscription",
                  body: "You control every word. No AI rewrites, no paywalled templates, no sign-up — just a fast, free canvas for your content.",
                },
                {
                  name: "Brand-consistent across every post",
                  body: "Set your avatar, handle, accent color once and every card exports in the same style — builds recognizable brand presence over time.",
                },
              ].map((item) => (
                <li key={item.name} className="flex flex-col gap-1 rounded-xl border border-border p-4">
                  <span className="text-sm font-semibold text-white">{item.name}</span>
                  <span className="text-sm leading-relaxed text-text-muted">{item.body}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Templates grid */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">10 social post card templates</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Each template is pre-sized and styled for social feeds. Pick the one that fits
              your content, customize text and author, and export.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TEMPLATES.map((template) => (
                <li
                  key={template.name}
                  className="flex flex-col gap-1 rounded-xl border border-border p-4"
                >
                  <span className="text-sm font-semibold text-white">{template.name}</span>
                  <span className="text-sm leading-relaxed text-text-muted">
                    {template.description}
                  </span>
                  <span className="mt-1 text-xs text-text-muted opacity-70">
                    Best for: {template.bestFor}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* How it works */}
          <section className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">How to create a social post card</h2>
            <ol className="flex flex-col gap-6">
              {HOW_TO_STEPS.map((step, index) => (
                <li key={step.title} className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-white">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Use cases */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Built for developer and founder content</h2>
            <ul className="flex flex-col gap-5">
              {USE_CASES.map((uc) => (
                <li key={uc.title} className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-white">{uc.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{uc.body}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Frequently asked questions</h2>
            <dl className="flex flex-col gap-4">
              {FAQS.map((item) => (
                <div key={item.q}>
                  <dt className="text-sm font-semibold text-white">{item.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                    {item.a}
                    {item.href && item.linkLabel && (
                      <>
                        {" "}
                        <TrackedLink
                          href={item.href}
                          label={item.linkLabel}
                          location="content_landing_faq_link"
                          className="text-neon-purple transition-colors hover:text-white"
                        >
                          {item.linkLabel} →
                        </TrackedLink>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Related tools */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Explore KromaStudio tools</h2>
            <ul className="flex flex-col gap-3">
              {RELATED_TOOLS.map((tool) => (
                <li key={tool.href}>
                  <TrackedLink
                    href={tool.href}
                    label={tool.label}
                    location="content_landing_related"
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="text-sm font-semibold text-neon-purple transition-colors group-hover:text-white">
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
