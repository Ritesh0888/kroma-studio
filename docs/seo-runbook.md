# KromaStudio SEO Runbook

Manual steps for Google Search Console setup, off-page promotion, and ongoing monitoring. Code changes alone do not complete these tasks.

## Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.kromastudio.in`
3. Verify ownership via DNS TXT record at your domain registrar
4. Copy the verification token into production env:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-token-here
   ```
5. Deploy, then confirm verification in GSC
6. Submit sitemap: `https://www.kromastudio.in/sitemap.xml`
7. URL Inspection → test homepage → Request indexing if not already indexed
8. Repeat URL Inspection for each landing page after deploy

### Launch Add-on: Content Route

- Confirm `https://www.kromastudio.in/content-post-generator` is indexed and returns canonical to itself.
- Verify page metadata in source (title, description, OG/Twitter tags) matches the content landing intent.
- Confirm primary CTA opens `/` and Content mode can be selected in studio.

## Vercel Domain Checklist

- Primary domain: `www.kromastudio.in`
- Apex `kromastudio.in` redirects to www (configured in `next.config.ts`)
- HTTPS enforced on both hosts
- Confirm single-hop redirect: `http://kromastudio.in` → `https://www.kromastudio.in`

## Structured Data Validation (after each deploy)

Run these URLs through [Rich Results Test](https://search.google.com/test/rich-results):

| URL | Expected schema |
|-----|-----------------|
| `https://www.kromastudio.in/` | WebSite, Organization, SoftwareApplication |
| `https://www.kromastudio.in/how-it-works` | HowTo, FAQPage |

Local validation before deploy:

```bash
node scripts/validate-json-ld.mjs
```

## Off-Page Promotion Checklist

Track completion and link each post back to `https://www.kromastudio.in`.

- [ ] Product Hunt launch with demo GIF
- [ ] Reddit post in r/webdev or r/reactjs
- [ ] Dev.to tutorial: "How to create aesthetic code screenshots"
- [ ] Social distribution (X/LinkedIn) — see `phases/SEO-BLUEPRINT.md` "Deferred: Social handles"
- [ ] GitHub README backlink (if repo is public)
- [ ] Share landing pages: `/code-screenshot-generator`, `/browser-mockup-generator`, `/content-post-generator`

## CLS / Layout Stability Checks

Before each release, verify ad placeholders retain fixed heights and do not shift the main layout when ads initialize:

- Desktop right sidebar ad slots: `300x250` placeholders
- Desktop footer ad slot: `728x90` placeholder
- Mobile footer ad slot: `320x50` placeholder

Manual check:

1. Load studio on desktop and mobile widths with throttled network.
2. Confirm canvas and sidebars do not jump when ad zones mount.
3. Run Lighthouse and ensure CLS remains stable (target as close to `0.00` as possible).

## Weekly Monitoring (GSC + Analytics)

| Check | Where | Action if issue |
|-------|-------|-----------------|
| Index coverage | GSC → Pages | Fix noindex/canonical issues on affected URLs |
| Search queries | GSC → Performance | Double down on rising long-tail terms |
| Structured data | GSC → Enhancements | Fix JSON-LD errors from Rich Results Test |
| Core Web Vitals | GSC → Experience | Profile LCP/CLS if "Needs improvement" |
| Referral traffic | GA4 → Acquisition | Measure off-page campaign impact |

## Success Signals (weeks to months)

- Homepage indexed with correct title and description
- Landing pages indexed for target keywords
- Impressions climbing in GSC Performance report
- Referral sessions from Product Hunt, Dev.to, or social posts
