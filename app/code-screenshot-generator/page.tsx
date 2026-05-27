import { LandingShell } from "@/components/layout/LandingShell";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/code-screenshot-generator",
  ...LANDING_PAGE_META.codeScreenshot,
});

const THEMES = [
  "Dracula",
  "One Dark Pro",
  "GitHub Dark",
  "Night Owl",
  "Tokyo Night",
];

const LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML",
  "CSS",
  "Go",
  "Rust",
];

export default function CodeScreenshotGeneratorPage() {
  return (
    <LandingShell>
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Free Code Screenshot Generator
          </h1>
          <p className="text-base leading-relaxed text-text-muted">
            Turn raw code into scroll-stopping social graphics in seconds. KromaStudio
            is a free online code screenshot maker that runs entirely in your browser —
            paste a snippet, pick a syntax theme, add a gradient background, and export
            an HD PNG with no sign-up and no upload.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Why developers use KromaStudio</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
            <li>Syntax highlighting powered by Shiki — crisp, accurate colors</li>
            <li>12 aesthetic gradient presets designed for dark-mode feeds</li>
            <li>Optional headline overlay for Twitter and LinkedIn posts</li>
            <li>Line numbers toggle and 2× resolution PNG export</li>
            <li>100% client-side — your code never leaves your device</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Supported code themes</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Pick from popular developer themes: {THEMES.join(", ")}.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Supported languages</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Paste snippets in {LANGUAGES.join(", ")} and get instant highlighting.
          </p>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href="/"
            label="Open Code Screenshot Generator"
            location="code_landing_primary"
            className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Open Code Screenshot Generator
          </TrackedLink>
          <TrackedLink
            href="/browser-mockup-generator"
            label="Browser Mockups"
            location="code_landing_secondary"
            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple"
          >
            Browser Mockups
          </TrackedLink>
        </div>
      </article>
    </LandingShell>
  );
}
