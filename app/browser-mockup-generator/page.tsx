import { LandingShell } from "@/components/layout/LandingShell";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/browser-mockup-generator",
  title: "Free Browser Mockup Generator | KromaStudio",
  description:
    "Wrap screenshots in premium browser frames online for free. macOS Dark, macOS Light, Windows, and Minimal styles. Export HD PNG mockups — 100% client-side.",
});

const FRAME_STYLES = [
  "macOS Dark",
  "macOS Light",
  "Windows",
  "Minimal",
];

export default function BrowserMockupGeneratorPage() {
  return (
    <LandingShell>
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Free Browser Mockup Generator
          </h1>
          <p className="text-base leading-relaxed text-text-muted">
            Need a clean browser frame mockup for a portfolio, pitch deck, or social
            post? KromaStudio lets you drop in any screenshot and wrap it in a polished
            macOS or Windows browser chrome — then export a high-resolution PNG without
            leaving your browser.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Browser frame styles</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Choose from {FRAME_STYLES.join(", ")} chrome styles. Adjust padding,
            corner radius, shadow, and aspect ratio to match your brand.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Perfect for designers and founders</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
            <li>Product launch posts with realistic browser previews</li>
            <li>Portfolio case studies and Dribbble shots</li>
            <li>Landing page hero assets and pitch decks</li>
            <li>Gradient backgrounds and headline overlays for social feeds</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Also includes code screenshots</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Switch to Code mode to create syntax-highlighted snippets with Dracula,
            One Dark Pro, and more — all in the same free tool.
          </p>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href="/"
            label="Open Browser Mockup Generator"
            location="mockup_landing_primary"
            className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Open Browser Mockup Generator
          </TrackedLink>
          <TrackedLink
            href="/code-screenshot-generator"
            label="Code Screenshots"
            location="mockup_landing_secondary"
            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple"
          >
            Code Screenshots
          </TrackedLink>
        </div>
      </article>
    </LandingShell>
  );
}
