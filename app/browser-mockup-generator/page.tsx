import { LandingShell } from "@/components/layout/LandingShell";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getBrowserMockupJsonLd } from "@/lib/json-ld";
import {
  BROWSER_FRAMES,
  FAQS,
  FRAME_CHOICE_GUIDE,
  HERO_TRUST_BADGES,
  HOW_TO_STEPS,
  RELATED_TOOLS,
  USE_CASES,
  WHY_USE_FRAMES,
} from "@/lib/landing/browser-mockup-generator";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/browser-mockup-generator",
  ...LANDING_PAGE_META.browserMockup,
});

const jsonLd = getBrowserMockupJsonLd();

const ctaPrimaryClassName =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

const ctaSecondaryClassName =
  "inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple";

export default function BrowserMockupGeneratorPage() {
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
              Free Browser Mockup Generator
            </h1>
            <p className="text-base leading-relaxed text-text-muted">
              Wrap any screenshot in a polished Chrome, Safari, Firefox, Arc, macOS, or Windows
              browser frame — or drop it into an iPhone, iPad, or MacBook device frame. Export
              a transparent PNG or a high-resolution 4× PNG without leaving your browser.
              No Figma, no Photoshop, no sign-up. Perfect for Product Hunt launch posts,
              portfolio case studies, and landing page heroes.
            </p>

            <div className="flex flex-wrap gap-3">
              <StudioCTAButton
                mode="mockup"
                label="Open Browser Mockup Generator"
                location="mockup_landing_primary"
                className={ctaPrimaryClassName}
              >
                Open Browser Mockup Generator
              </StudioCTAButton>
              <TrackedLink
                href="/code-screenshot-generator"
                label="Code Screenshots"
                location="mockup_landing_secondary"
                className={ctaSecondaryClassName}
              >
                Code Screenshots
              </TrackedLink>
            </div>
          </div>

          {/* Browser frame styles */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Available browser frame styles</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Choose the frame that matches your product and audience. Each style renders at 2× resolution for crisp exports.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {BROWSER_FRAMES.map((frame) => (
                <li
                  key={frame.name}
                  className="flex flex-col gap-1 rounded-xl border border-border p-4"
                >
                  <span className="text-sm font-semibold text-white">{frame.name}</span>
                  <span className="text-sm leading-relaxed text-text-muted">
                    {frame.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* How it works */}
          <section className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">How to create a browser mockup</h2>
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

          {/* Why use browser frames */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Why add a browser frame?</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WHY_USE_FRAMES.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 rounded-xl border border-border p-4"
                >
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                  <span className="text-sm leading-relaxed text-text-muted">{item.body}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Frame choice guide */}
          <section className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">
              Chrome vs Safari vs macOS — which frame to pick
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              {FRAME_CHOICE_GUIDE.intro}
            </p>
            <div className="flex flex-col gap-5">
              {FRAME_CHOICE_GUIDE.sections.map((s) => (
                <div key={s.heading} className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-white">{s.heading}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Device frames */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Device frames — iPhone, iPad & MacBook</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Beyond browser frames, KromaStudio includes realistic device bezels for iPhone,
              iPad, and MacBook. Switch between browser and device mode in the sidebar —
              same tool, same workflow, no extra software needed.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { name: "iPhone", body: "Perfect for mobile app screenshots, App Store previews, and iOS launch posts." },
                { name: "iPad", body: "Ideal for tablet UI showcases, productivity app demos, and portfolio case studies." },
                { name: "MacBook", body: "Great for desktop web apps, developer tool screenshots, and landing page heroes." },
              ].map((d) => (
                <li key={d.name} className="flex flex-col gap-1 rounded-xl border border-border p-4">
                  <span className="text-sm font-semibold text-white">{d.name}</span>
                  <span className="text-sm leading-relaxed text-text-muted">{d.body}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Export features */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Export options — transparent PNG, 4× resolution, animated .webm</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  name: "Transparent PNG",
                  body: "Remove the background entirely and export just the browser or device frame. Perfect for compositing into Figma, Photoshop, or a custom landing page design.",
                },
                {
                  name: "Up to 4× resolution",
                  body: "Choose 1×, 2×, 3×, or 4× export scale. At 4× a 16:9 canvas exports at 3200×1800 — sharp at any size from social posts to billboard prints.",
                },
                {
                  name: "Animated .webm loops",
                  body: "Switch to the Animate panel and export a Float or 3D Tilt loop — great for Product Hunt openers, landing page hero videos, and Twitter/X demo clips.",
                },
                {
                  name: "Background image upload",
                  body: "Drop any image as the canvas background — your own photo, a gradient texture, or a brand asset. Combine with noise overlay for depth.",
                },
              ].map((item) => (
                <li key={item.name} className="flex flex-col gap-1 rounded-xl border border-border p-4">
                  <span className="text-sm font-semibold text-white">{item.name}</span>
                  <span className="text-sm leading-relaxed text-text-muted">{item.body}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Use cases */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Who uses KromaStudio browser mockups</h2>
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
                          location="mockup_landing_faq_link"
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
                    location="mockup_landing_related"
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
