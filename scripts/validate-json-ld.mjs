import { readFileSync } from "node:fs";

function extractJsonLdBlocks(source, label) {
  const matches = [...source.matchAll(/JSON\.stringify\(([\s\S]*?)\)\s*\}/g)];
  if (matches.length === 0) {
    throw new Error(`${label}: no JSON-LD blocks found`);
  }
  return matches.length;
}

function validateSiteModule() {
  const site = readFileSync("lib/site.ts", "utf8");
  if (!site.includes("https://www.kromastudio.in")) {
    throw new Error("lib/site.ts: canonical URL must use www.kromastudio.in");
  }
  if (!site.includes("PUBLIC_ROUTES")) {
    throw new Error("lib/site.ts: missing PUBLIC_ROUTES");
  }
  console.log("✓ lib/site.ts canonical URL and routes");
}

function validateJsonLdModule() {
  const jsonLd = readFileSync("lib/json-ld.ts", "utf8");
  for (const type of ["WebSite", "Organization", "SoftwareApplication", "HowTo", "FAQPage"]) {
    if (!jsonLd.includes(`"@type": "${type}"`)) {
      throw new Error(`lib/json-ld.ts: missing @type ${type}`);
    }
  }
  console.log("✓ lib/json-ld.ts schema types");
}

function validateLayout() {
  const layout = readFileSync("app/layout.tsx", "utf8");
  if (!layout.includes("getRootJsonLd")) {
    throw new Error("app/layout.tsx: must use getRootJsonLd()");
  }
  if (!layout.includes("preconnect")) {
    throw new Error("app/layout.tsx: missing preconnect hints");
  }
  console.log("✓ app/layout.tsx JSON-LD and preconnect");
}

function validateHowItWorks() {
  const page = readFileSync("app/how-it-works/page.tsx", "utf8");
  if (!page.includes("getHowItWorksJsonLd")) {
    throw new Error("app/how-it-works/page.tsx: must use getHowItWorksJsonLd()");
  }
  extractJsonLdBlocks(page, "how-it-works");
  console.log("✓ app/how-it-works/page.tsx FAQ/HowTo JSON-LD");
}

function validateRaySoAlternative() {
  const page = readFileSync("app/ray-so-alternative/page.tsx", "utf8");
  if (!page.includes("getRaySoAlternativeJsonLd")) {
    throw new Error("app/ray-so-alternative/page.tsx: must use getRaySoAlternativeJsonLd()");
  }
  extractJsonLdBlocks(page, "ray-so-alternative");
  console.log("✓ app/ray-so-alternative/page.tsx FAQ JSON-LD");
}

function validateSitemap() {
  const sitemap = readFileSync("app/sitemap.ts", "utf8");
  if (sitemap.includes("new Date()")) {
    throw new Error("app/sitemap.ts: must not use unstable new Date() for lastModified");
  }
  if (!sitemap.includes("PUBLIC_ROUTES")) {
    throw new Error("app/sitemap.ts: must map PUBLIC_ROUTES");
  }
  console.log("✓ app/sitemap.ts");
}

function validateRobots() {
  const robots = readFileSync("app/robots.ts", "utf8");
  if (!robots.includes('disallow: ["/api/"]')) {
    throw new Error('app/robots.ts: must disallow /api/');
  }
  console.log("✓ app/robots.ts");
}

try {
  validateSiteModule();
  validateJsonLdModule();
  validateLayout();
  validateHowItWorks();
  validateRaySoAlternative();
  validateSitemap();
  validateRobots();
  console.log("\nAll JSON-LD and SEO structure validations passed.");
  console.log("After deploy, verify live URLs at https://search.google.com/test/rich-results");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
