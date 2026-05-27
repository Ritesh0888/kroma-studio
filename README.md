This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create `.env.local` for local development and add the same values to your production hosting environment:

```env
NEXT_PUBLIC_SITE_URL=https://www.kromastudio.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-7297785010128160
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_TOP=1769954222
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_BOTTOM=8619948978
NEXT_PUBLIC_ADSENSE_SLOT_FOOTER=1397584983
NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_FOOTER=8947252033
NEXT_PUBLIC_ADSENSE_SLOT_RENDERING_OVERLAY=5517627547
```

`NEXT_PUBLIC_*` values are intentionally exposed to the browser. Restart the dev server after changing them.

SEO setup and manual GSC steps: see [`docs/seo-runbook.md`](docs/seo-runbook.md). Validate SEO structure locally with `npm run validate:seo`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
