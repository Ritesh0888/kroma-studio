import Link from "next/link";
import { LandingShell } from "@/components/layout/LandingShell";
import { landingBodyLg, landingCard, landingEyebrow, landingH1, landingH3 } from "@/lib/landing-ui";
import { getSortedGuides } from "@/lib/guides";
import { createLandingMetadata } from "@/lib/landing-metadata";
import { LANDING_PAGE_META } from "@/lib/site";

export const metadata = createLandingMetadata({
  path: "/guides",
  title: "Developer Guides & Tutorials - KromaStudio",
  description: "Learn how to create beautiful code snippets, browser mockups, and social media content for your developer brand.",
});

export default function GuidesIndexPage() {
  const guides = getSortedGuides();

  return (
    <LandingShell width="wide">
      <article className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className={landingEyebrow}>
            Blog & Tutorials
          </p>
          <h1 className={landingH1}>Developer Guides</h1>
          <p className={landingBodyLg}>
            Learn how to leverage KromaStudio to elevate your technical content, social media presence, and documentation.
          </p>
        </div>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className={`${landingCard} group !gap-3 !p-5 transition-shadow hover:shadow-[var(--landing-shadow-lg)]`}
            >
              <h2 className={`${landingH3} text-lg transition-colors group-hover:text-[#1a73e8]`}>
                {guide.title}
              </h2>
              <p className="flex-grow text-sm leading-relaxed text-text-muted">
                {guide.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-text-muted/80">{guide.date}</span>
                {guide.author && (
                  <span className="text-xs text-text-muted/80 font-medium">By {guide.author}</span>
                )}
              </div>
            </Link>
          ))}
        </section>
      </article>
    </LandingShell>
  );
}
