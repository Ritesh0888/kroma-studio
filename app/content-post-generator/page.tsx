import { LandingShell } from "@/components/layout/LandingShell";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getContentPostJsonLd } from "@/lib/json-ld";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

const jsonLd = getContentPostJsonLd();

export const metadata = createLandingMetadata({
  path: "/content-post-generator",
  ...LANDING_PAGE_META.contentPost,
});

const TEMPLATES = [
  "Tweet",
  "LinkedIn",
  "Video",
  "Thread",
  "Quote",
  "Announcement",
  "Testimonial",
  "Carousel",
  "Before/After",
  "Metrics",
];

export default function ContentPostGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingShell>
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Free Social Content Post Generator
          </h1>
          <p className="text-base leading-relaxed text-text-muted">
            Design social cards for X, LinkedIn, and product launch posts in seconds.
            KromaStudio Content mode helps you turn plain text into polished visuals with
            templates for tweets, LinkedIn posts, video previews, threads, quotes, announcements,
            testimonials, carousels, before-after stories, and metrics snapshots.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Built for creators, devrels, and founders</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
            <li>Template presets for {TEMPLATES.join(", ")}</li>
            <li>Author, handle, and avatar controls with initials fallback</li>
            <li>Accent color customization for brand consistency</li>
            <li>HD PNG export and animated .webm loops from the same canvas</li>
            <li>100% client-side workflow with no sign-up required</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Why this route exists</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Just like our code and browser mockup pages, this landing route is tuned for search
            discovery while opening the same studio editor where Content mode is fully interactive.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Best templates for growth content</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
            <li>LinkedIn + Thread templates for thought-leadership posts</li>
            <li>Video post template for teaser clips and walkthrough previews</li>
            <li>Carousel and Before/After for storytelling and product updates</li>
            <li>Metrics cards for performance proof and case studies</li>
          </ul>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <StudioCTAButton
            mode="content"
            label="Open Content Post Generator"
            location="content_landing_primary"
            className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Open Content Post Generator
          </StudioCTAButton>
          <TrackedLink
            href="/code-screenshot-generator"
            label="Code Screenshots"
            location="content_landing_secondary_code"
            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple"
          >
            Code Screenshots
          </TrackedLink>
          <TrackedLink
            href="/browser-mockup-generator"
            label="Browser Mockups"
            location="content_landing_secondary_mockup"
            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple"
          >
            Browser Mockups
          </TrackedLink>
        </div>
      </article>
    </LandingShell>
    </>
  );
}
