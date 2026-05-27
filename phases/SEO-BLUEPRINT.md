# KromaStudio.in — Master SEO Blueprint
**Phase-Wise Technical & Organic SEO Strategy for High Google Indexation**

---

## Phase 1: Meta Tag & Open Graph Optimization (Code Level)

Next.js App Router ke dynamic metadata framework ka use karke saare tags ko structure karna hai. Isse jab koi link social media par share karega toh click-through rate (CTR) maximize hoga.

### 1. `layout.tsx` Configuration

`src/app/layout.tsx` me ye metadata config inject karo:

```ts
export const metadata = {
  title: "KromaStudio | Aesthetic Code Screenshots & Mockup Generator",
  description: "Turn raw code, screenshots, and tweets into stunning, professional graphics and animations.",
  keywords: ["code mockup generator", "aesthetic screenshot editor", "browser frame mockup", "tweet screenshot maker"],
  openGraph: {
    title: "KromaStudio | Aesthetic Mockups Instantly",
    description: "Stop posting boring screenshots. Make them pop with premium backgrounds and layouts.",
    url: "https://www.kromastudio.in",
    siteName: "KromaStudio",
    images: [
      {
        url: "https://www.kromastudio.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "KromaStudio Interface Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KromaStudio | Aesthetic Code & Mockups",
    description: "Generate dynamic loops and browser frame mockups for free.",
    images: ["https://www.kromastudio.in/og-image.png"],
  },
};
```

> **Action Item:** `public/` folder me ek 1200×630 pixel ka dashboard screenshot ya banner design karke `og-image.png` naam se save kar dena. Yeh Twitter/LinkedIn indexation ke liye mandatory hai.

### Deferred: Social handles (add when accounts exist)

No social profile handles are wired in production code until real accounts exist. When ready:

- [ ] Create X/Twitter (and any other) accounts; confirm final handle
- [ ] Add `TWITTER_HANDLE` in `lib/site.ts`
- [ ] Wire `twitter.site` / `twitter.creator` in `app/layout.tsx` and `lib/landing-metadata.ts`
- [ ] Add Organization `sameAs` URL(s) in `lib/json-ld.ts`
- [ ] Update `app/privacy/page.tsx` Contact section with real contact/handle
- [ ] Re-enable off-page social item in `docs/seo-runbook.md` with real handle
- [ ] Optional: add `@handle` to share tweet copy in `phases/PHASE-4.md` / `WatermarkModal` if desired

---

## Phase 2: Indexing Files Automation (Robots & Sitemap)

Google ke crawlers ko site ka rasta dikhane ke liye robots aur sitemap files ko automation template ke roop me Next.js app ke andar lagana hoga.

### 1. `src/app/robots.ts`

```ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.kromastudio.in/sitemap.xml',
  };
}
```

### 2. `src/app/sitemap.ts`

```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.kromastudio.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
```

---

## Phase 3: Semantic HTML Hierarchy & Keyword Matrix

Google text content ko read karke hi site ki relevancy decide karta hai. Page components me headings ka implementation isi order me hona chahiye:

- **`<h1>` Tag:** Pure page par sirf ek hi H1 hona chahiye. Isme main tagline aayega.
  - Example: `<h1>Stop Posting Boring Screenshots. Make Code & Mockups Aesthetic.</h1>`
- **`<h2>` Tags:** Different features aur mode headers ke liye.
  - Examples: "Premium Browser Frame Mockups", "Syntax Highlighted Code Mode", "Auto-Refreshing Analytics Workspace"
- **Image Alt Tags:** Preset gradients ke circles aur icons par proper alt description — e.g., `alt="Cyberpunk Neon Preset Background"`. Google Image Search se traffic lane me yeh help karega.

### Target Long-Tail Keywords Strategy

| Target Keyword Group | User Search Intent | Where to Use in Code |
|---|---|---|
| Code Snippet Beautifier | Developers seeking beautiful syntax snaps | Code Mode Sidebar Panel Description |
| Browser Mockup Online | Designers needing clean browser frames | Canvas Tooltip and Feature H2 |
| Aesthetic Video Loop Maker | Reels creators looking for motion assets | Phase 3 Disabled Area (SEO Text) |

---

## Phase 4: Schema Markup Injection (Rich Snippets)

Google structured data ko read karke search results me direct features dikhata hai. `layout.tsx` ya main root file me ye JSON-LD script inject karo:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "KromaStudio",
  "operatingSystem": "Browser",
  "applicationCategory": "DesignApplication",
  "browserRequirements": "Requires HTML5 canvas support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

// Inject inside return segment:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

## Phase 5: Webmaster Verification & Core Web Vitals

1. **Google Search Console Linkage:** Build ready hote hi domain provider (GoDaddy/Namecheap) me jaakar ek naya TXT record add karo jo GSC se milega. Sitemap link wahan submit kar do.

2. **Cumulative Layout Shift (CLS) Prevention:** Ad placeholders (right sidebar aur footer) ka layout fix rakho (e.g., `min-h-[250px]`). Agar ad load hote waqt content niche khisaka (Layout Shift), toh Google rankings penalty dega.

3. **Lazy Load Non-Critical Code:** Code mode aane par `shiki` ya heavy syntax highlighters ko dynamic imports (`next/dynamic`) se client-side lazy load karwana taaki initial load speed 100/100 rahe.
