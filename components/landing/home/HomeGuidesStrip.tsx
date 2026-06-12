import Link from "next/link";
import type { GuideMetadata } from "@/lib/guides";
import { landingBody, landingCard, landingEyebrow, landingH2 } from "@/lib/landing-ui";

type HomeGuidesStripProps = {
  guides: GuideMetadata[];
};

export function HomeGuidesStrip({ guides }: HomeGuidesStripProps) {
  if (guides.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className={landingEyebrow}>Guides</p>
          <h2 className={landingH2}>Latest tutorials</h2>
        </div>
        <Link
          href="/guides"
          className="shrink-0 text-xs font-medium text-[#1a73e8] transition-colors hover:text-[#1557b0]"
        >
          View all →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className={`${landingCard} group transition-shadow hover:shadow-[var(--landing-shadow-lg)]`}
          >
            <time className="text-[10px] uppercase tracking-widest text-text-muted">
              {guide.date}
            </time>
            <h3 className="text-sm font-medium text-[#202124] group-hover:text-[#1a73e8]">
              {guide.title}
            </h3>
            <p className={`${landingBody} line-clamp-2 text-xs`}>{guide.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
