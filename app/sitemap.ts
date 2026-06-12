import { execSync } from "child_process";
import { MetadataRoute } from "next";
import { PUBLIC_ROUTES, SITE_URL } from "@/lib/site";
import { getSortedGuides } from "@/lib/guides";

const FALLBACK_DATE = "2026-05-26T01:58:56+05:30";

function getGitLastModified(pageFile: string): string {
  try {
    const result = execSync(`git log -1 --format=%cI -- "${pageFile}"`, {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim();
    return result || FALLBACK_DATE;
  } catch {
    return FALLBACK_DATE;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = PUBLIC_ROUTES.map(({ path, changeFrequency, priority, pageFile }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    changeFrequency,
    priority,
    lastModified: getGitLastModified(pageFile),
  }));

  const guideRoutes = getSortedGuides().map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: guide.date ? new Date(guide.date).toISOString() : FALLBACK_DATE,
  }));

  return [...staticRoutes, ...guideRoutes];
}
