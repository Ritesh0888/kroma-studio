import { LandingShell } from "@/components/layout/LandingShell";
import { landingBrandCtaLg, landingCard, landingCtaSecondary, landingH1, landingH2, landingH3, landingProseLink } from "@/lib/landing-ui";
import { ScreenshotFigure } from "@/components/landing/ScreenshotFigure";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getHowItWorksJsonLd } from "@/lib/json-ld";
import { LANDING_PAGE_META, VSCODE_MARKETPLACE_URL } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/how-it-works",
  ...LANDING_PAGE_META.howItWorks,
});

const STEPS = [
  {
    title: "Paste your code or upload a screenshot",
    body: "Open KromaStudio and switch to Code mode to paste a snippet, or stay in Image mode to drop in a screenshot. Supports 25 languages including TypeScript, JavaScript, Python, Java, Kotlin, Swift, PHP, Ruby, Go, Rust, and more. Or install the VS Code extension and skip paste entirely — see below.",
  },
  {
    title: "Customize the look",
    body: "Pick a syntax theme like Dracula or One Dark Pro, choose from 12 gradient backgrounds, adjust padding and shadows, and optionally add a headline overlay for social posts.",
  },
  {
    title: "Export HD PNG or animated video",
    body: "Click Export for a 2× resolution PNG, or open Animate to render Float, 3D Tilt, or Auto Scroll loops as .webm — ready for Twitter, LinkedIn, or Reels.",
  },
];

const FAQ = [
  {
    q: "Is KromaStudio free?",
    a: "Yes. KromaStudio is completely free with no sign-up required.",
  },
  {
    q: "Does my code leave my browser?",
    a: "No. KromaStudio runs 100% client-side. Your code and images never leave your device.",
  },
  {
    q: "What code themes are supported?",
    a: "15 themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin Mocha, Catppuccin Latte, Nord, Monokai, Synthwave \u201884, Solarized Dark, Rosé Pine, Material Ocean, Vitesse Dark, and GitHub Light.",
  },
  {
    q: "Can I export animated video loops?",
    a: "Yes. Use the Animate panel to pick Float, 3D Tilt, or Auto Scroll, then render a looping .webm — already live, 100% client-side.",
  },
  {
    q: "Can I start from VS Code?",
    a: "Yes. Install the KromaStudio extension from the Visual Studio Marketplace, select code in VS Code or Cursor, and press Cmd+Shift+K (macOS) or Ctrl+Shift+K (Windows/Linux). KromaStudio opens in your browser with the snippet ready to style and export.",
  },
  {
    q: "Can I create browser mockups too?",
    a: "Yes. Switch to Image mode to wrap screenshots in macOS, Windows, or minimal browser frames.",
  },
];

const jsonLd = getHowItWorksJsonLd();

export default function HowItWorksPage() {
  return (
    <LandingShell width="wide">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className={landingH1}>
            How to Make Aesthetic Code Screenshots
          </h1>
          <p className="text-base leading-relaxed text-text-muted">
            KromaStudio is a free online tool for developers and designers who want
            polished code screenshots and browser mockups without opening Figma or
            Photoshop. Everything runs in your browser — no account, no upload.
          </p>
        </div>

        <section className={`${landingCard} gap-4 !p-5`}>
          <h2 className={landingH2}>Select in VS Code → open in KromaStudio</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Install the free KromaStudio VS Code extension, select a code snippet, and run
            Capture Selection (Cmd+Shift+K on macOS, Ctrl+Shift+K on Windows/Linux). Your
            snippet opens in KromaStudio with syntax highlighting, theme, and background already
            applied — then customize and export.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ScreenshotFigure
              src="/screenshots/vscode-before-selection.png"
              alt="Select code in VS Code and run KromaStudio Capture Selection"
            />
            <ScreenshotFigure
              src="/screenshots/vscode-after-kroma-studio.png"
              alt="Code snippet opened in KromaStudio with theme and background applied"
            />
          </div>
          <TrackedExternalLink
            href={VSCODE_MARKETPLACE_URL}
            label="Install VS Code Extension"
            location="how_it_works_vscode"
            className={landingCtaSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Install VS Code Extension
          </TrackedExternalLink>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className={landingH2}>Three steps</h2>
          <ol className="flex flex-col gap-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-2">
                <h3 className={`${landingH3} text-sm`}>
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className={landingH2}>Frequently asked questions</h2>
          <dl className="flex flex-col gap-4">
            {FAQ.map((item) => (
              <div key={item.q}>
                <dt className={`${landingH3} text-sm`}>{item.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-3 border-t border-border pt-6">
          <h2 className={landingH2}>Explore KromaStudio Tools</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <TrackedLink
                href="/snappify-alternative"
                label="KromaStudio vs Snappify"
                location="how_it_works_internal_snappify"
                className={landingProseLink}
              >
                KromaStudio vs Snappify →
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/secure-code-screenshot-generator"
                label="Secure Code Screenshot Generator"
                location="how_it_works_internal_secure"
                className={landingProseLink}
              >
                Secure Code Screenshot Generator →
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/animated-code-screenshot"
                label="Animated Code Screenshots"
                location="how_it_works_internal_animated"
                className={landingProseLink}
              >
                Animated Code Screenshots →
              </TrackedLink>
            </li>
          </ul>
        </section>

        <TrackedLink
          href="/"
          label="Try KromaStudio Free"
          location="how_it_works_cta"
          className={landingBrandCtaLg}
        >
          Try KromaStudio Free
        </TrackedLink>
      </article>
    </LandingShell>
  );
}
