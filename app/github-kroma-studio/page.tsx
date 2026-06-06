import { LandingShell } from "@/components/layout/LandingShell";
import { LandingInlineLink } from "@/components/landing/LandingInlineLink";
import { StudioCTAButton } from "@/components/ui/StudioCTAButton";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { GITHUB_REPO_URL, LANDING_PAGE_META, SITE_NAME } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";
import { getGithubKromaStudioJsonLd } from "@/lib/json-ld";
import { TECH_STACK, SELF_HOST_STEPS, FAQS } from "@/lib/landing/github-kroma-studio";

export const metadata = createLandingMetadata({
  path: "/github-kroma-studio",
  ...LANDING_PAGE_META.github,
});

const jsonLd = getGithubKromaStudioJsonLd();

const ctaPrimaryClassName =
  "inline-flex items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90";

const ctaSecondaryClassName =
  "inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-neon-purple";

export default function GitHubKromaStudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingShell>
        <article className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-xs font-medium uppercase tracking-widest text-neon-purple">
              MIT Open Source · Self-Hostable
            </p>
            <h1 className="text-3xl font-bold tracking-tight">Open Source on GitHub</h1>
            <p className="text-base leading-relaxed text-text-muted">
              {SITE_NAME} is MIT licensed — inspect the code, fork it, contribute, or self-host your own instance. We believe developer tools should be open, transparent, and respect your privacy. Everything from syntax highlighting to video export runs 100% locally in your browser.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StudioCTAButton
                mode="code"
                label="Try KromaStudio Free"
                location="github_kroma_studio_hero_cta"
                className={`${ctaPrimaryClassName} w-fit`}
              >
                Try KromaStudio Free
              </StudioCTAButton>
              <TrackedExternalLink
                href={GITHUB_REPO_URL}
                label="Open on GitHub"
                location="github_kroma_studio_repo_cta"
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaSecondaryClassName} w-fit`}
              >
                Open on GitHub →
              </TrackedExternalLink>
            </div>
          </div>

          <section className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold text-white">Repository</h2>
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
            </div>
          </section>

          {/* What you'll find */}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">What You&apos;ll Find in the Source</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
              <li>Full Next.js source code for the studio editor and all marketing landing pages.</li>
              <li>100% client-side rendering architecture — zero backend processing.</li>
              <li>Implementations of Shiki syntax highlighting, Framer Motion animations, and Canvas manipulations.</li>
              <li>MIT License — free to use, modify, and self-host for your own personal or commercial projects.</li>
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Our Tech Stack</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              We built KromaStudio using modern tools to ensure a fast, robust, and beautiful experience that lives entirely in the browser. Here is what makes the magic happen:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-4 py-3 font-semibold text-white">Category</th>
                    <th className="px-4 py-3 font-semibold text-white">Technology</th>
                    <th className="px-4 py-3 font-semibold text-white">Why we use it</th>
                  </tr>
                </thead>
                <tbody>
                  {TECH_STACK.map((item) => (
                    <tr key={item.technology} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-medium text-white">{item.category}</td>
                      <td className="px-4 py-3 font-medium text-white">{item.technology}</td>
                      <td className="px-4 py-3 text-text-muted">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Self-hosting Steps */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Self-Host KromaStudio</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Want to run your own instance? It takes less than two minutes. The project is a standard Next.js application.
            </p>
            <div className="flex flex-col gap-4">
              {SELF_HOST_STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4">
                  <h3 className="text-sm font-semibold text-white">
                    {idx + 1}. {step.title}
                  </h3>
                  <pre className="overflow-x-auto rounded bg-black p-3 text-xs leading-relaxed text-text-muted">
                    <code>{step.code}</code>
                  </pre>
                </div>
              ))}
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
                          location="github_faq_link"
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
                  href="/browser-mockup-generator"
                  label="Browser Mockup Generator"
                  location="github_kroma_studio_internal_mockup"
                  className="text-sm text-neon-purple transition-colors hover:text-white"
                >
                  Browser Mockup Generator →
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
    </>
  );
}
