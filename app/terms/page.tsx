import { LandingShell } from "@/components/layout/LandingShell";
import { LANDING_PAGE_META, SITE_NAME, SITE_URL } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/terms",
  ...LANDING_PAGE_META.terms,
});

export default function TermsPage() {
  return (
    <LandingShell>
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
          <p className="text-sm text-text-muted">Last updated: May 27, 2026</p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Acceptance</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            By using {SITE_NAME} ({SITE_URL}), you agree to these terms. If you do not
            agree, please do not use the service.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Service description</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            {SITE_NAME} provides a free, browser-based tool for creating code
            screenshots and browser mockups. The service is provided &quot;as is&quot;
            without warranties of any kind.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Your content</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            You retain all rights to code, images, and exports you create. Because
            processing happens locally in your browser, we do not store or access your
            content.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Acceptable use</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Do not use {SITE_NAME} for unlawful purposes or to generate content that
            violates applicable laws or third-party rights.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Changes</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            We may update these terms from time to time. Continued use of the service
            after changes constitutes acceptance of the updated terms.
          </p>
        </section>
      </article>
    </LandingShell>
  );
}
