import { LandingShell } from "@/components/layout/LandingShell";
import { createLandingMetadata } from "@/lib/landing-metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = createLandingMetadata({
  path: "/privacy",
  title: "Privacy Policy | KromaStudio",
  description:
    "KromaStudio privacy policy. Learn how we handle analytics, ads, and your data. 100% client-side processing — your code never leaves your browser.",
});

export default function PrivacyPage() {
  return (
    <LandingShell>
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-text-muted">Last updated: May 27, 2026</p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            {SITE_NAME} ({SITE_URL}) is a client-side design tool. Your code snippets,
            screenshots, and exported images are processed locally in your browser and
            are not uploaded to our servers.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Analytics</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            We use Google Analytics 4 and Vercel Analytics to understand aggregate usage
            patterns (page views, feature clicks). These services may collect anonymized
            data such as browser type, device type, and general location.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Advertising</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            We may display ads through Google AdSense. Google and its partners may use
            cookies to serve ads based on your prior visits. You can opt out of
            personalized advertising via Google&apos;s Ads Settings.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Questions about this policy? Contact details will be published here when available.
          </p>
        </section>
      </article>
    </LandingShell>
  );
}
