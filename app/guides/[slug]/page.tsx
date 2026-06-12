import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { LandingShell } from "@/components/layout/LandingShell";
import { landingBodyLg, landingEyebrow, landingH1 } from "@/lib/landing-ui";
import { getGuideBySlug, getSortedGuides } from "@/lib/guides";
import { createLandingMetadata } from "@/lib/landing-metadata";
import { getArticleJsonLd } from "@/lib/json-ld";

export async function generateStaticParams() {
  const guides = getSortedGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return {};
  }
  return createLandingMetadata({
    path: `/guides/${slug}`,
    title: `${guide.metadata.title} - KromaStudio Guides`,
    description: guide.metadata.description,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = getArticleJsonLd(guide.metadata);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingShell width="wide">
        <article className="mx-auto flex w-full max-w-3xl flex-col gap-8">
          <header className="flex flex-col gap-4 border-b border-border pb-8">
            <p className={landingEyebrow}>
              {guide.metadata.date} {guide.metadata.author ? `· ${guide.metadata.author}` : ""}
            </p>
            <h1 className={landingH1}>
              {guide.metadata.title}
            </h1>
            <p className={landingBodyLg}>
              {guide.metadata.description}
            </p>
          </header>
          
          <div className="prose prose-slate max-w-none">
            <MDXRemote source={guide.content} />
          </div>
        </article>
      </LandingShell>
    </>
  );
}
