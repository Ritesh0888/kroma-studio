import { LandingShell } from "@/components/layout/LandingShell";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { GITHUB_REPO_URL, LANDING_PAGE_META, SITE_NAME } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/github-kroma-studio",
  ...LANDING_PAGE_META.github,
});

const ctaPrimaryClassName =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

export default function GitHubKromaStudioPage() {
  return (
    <LandingShell>
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Open Source on GitHub</h1>
          <p className="text-base leading-relaxed text-text-muted">
            {SITE_NAME} is MIT licensed — inspect the code, self-host, fork, or contribute.
          </p>
          <StudioCTAButton
            mode="code"
            label="Try KromaStudio Free"
            location="github_kroma_studio_hero_cta"
            className={`${ctaPrimaryClassName} w-fit`}
          >
            Try KromaStudio Free
          </StudioCTAButton>
        </div>

        <section className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5">
          <p className="text-sm font-medium text-white">Repository</p>
          <TrackedExternalLink
            href={GITHUB_REPO_URL}
            label="GitHub Repository URL"
            location="github_kroma_studio_repo_link"
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-sm text-neon-purple transition-colors hover:text-white"
          >
            {GITHUB_REPO_URL.replace("https://", "")}
          </TrackedExternalLink>
          <TrackedExternalLink
            href={GITHUB_REPO_URL}
            label="Open on GitHub"
            location="github_kroma_studio_repo_cta"
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimaryClassName}
          >
            Open on GitHub →
          </TrackedExternalLink>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">What you&apos;ll find</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
            <li>Full Next.js source — code screenshots, mockups, and social templates</li>
            <li>100% client-side rendering — no server upload for exports</li>
            <li>MIT License — free to use, modify, and self-host</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3 border-t border-border pt-6">
          <h2 className="text-lg font-semibold">Explore KromaStudio Tools</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <TrackedLink
                href="/code-screenshot-generator"
                label="Code Screenshot Generator"
                location="github_kroma_studio_internal_code"
                className="text-sm text-neon-purple transition-colors hover:text-white"
              >
                Code Screenshot Generator →
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/ray-so-alternative"
                label="KromaStudio vs Ray.so"
                location="github_kroma_studio_internal_ray_so"
                className="text-sm text-neon-purple transition-colors hover:text-white"
              >
                KromaStudio vs Ray.so →
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/carbon-alternative"
                label="KromaStudio vs Carbon"
                location="github_kroma_studio_internal_carbon"
                className="text-sm text-neon-purple transition-colors hover:text-white"
              >
                KromaStudio vs Carbon →
              </TrackedLink>
            </li>
          </ul>
        </section>

        <p className="text-sm text-text-muted">
          Prefer the live app?{" "}
          <TrackedLink
            href="/"
            label="Open Studio"
            location="github_kroma_studio_page_studio_link"
            className="text-neon-purple transition-colors hover:text-white"
          >
            Open KromaStudio →
          </TrackedLink>
        </p>
      </article>
    </LandingShell>
  );
}
