<div align="center">
  <img src="public/logo.png" width="96" alt="KromaStudio logo" />

  # KromaStudio

  *Turn plain code and ideas into scroll-stopping visuals*

  [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

  [Live site](https://www.kromastudio.in) • [How it works](https://www.kromastudio.in/how-it-works)
</div>

---

A free, client-side visual studio for developers and designers. Paste code, drop a screenshot, or compose a social card — then export a polished HD PNG or animated `.webm` in seconds. No sign-up, no server uploads, no watermark paywall.

## Features

- **Three creation modes** — Code screenshots, browser mockups, and social post cards from one unified editor
- **15 syntax themes** — Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin, Nord, Monokai, Synthwave '84, Rosé Pine, and more
- **26 supported languages** — TypeScript, JavaScript, Python, Go, Rust, HTML, CSS, SQL, and more
- **12 gradient backgrounds** — Curated presets (Midnight Purple, Cyberpunk Neon, Aurora Borealis…) plus custom color picker
- **Browser frame styles** — macOS dark/light, Windows, minimal, and frameless
- **Headline overlays** — Custom text layered on top of any canvas
- **Animations** — Float, 3D Tilt, and Auto Scroll presets, exported as 60 fps `.webm` loops
- **10 social post templates** — Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, Metrics
- **HD PNG export** — 2× pixel ratio on desktop, optimised 1.5× on mobile to prevent OOM crashes
- **100% client-side** — Your code and images never leave the browser

## 📸 Screenshots & Demos

<div align="center">

### Code Mode

<img src="screenshots/code-mode-light.png" width="48%" alt="KromaStudio Code Mode - Light theme" />
<img src="screenshots/code-mode-dark.png" width="48%" alt="KromaStudio Code Mode - Dark theme" />

### Mockup Mode

<img src="screenshots/mockup-mode-macos.png" width="48%" alt="KromaStudio Mockup Mode - macOS frame" />
<img src="screenshots/mockup-mode-windows.png" width="48%" alt="KromaStudio Mockup Mode - Windows frame" />

### Content Mode (Social Posts)

<img src="screenshots/content-mode-tweet.png" width="48%" alt="KromaStudio Content Mode - Tweet template" />
<img src="screenshots/content-mode-linkedin.png" width="48%" alt="KromaStudio Content Mode - LinkedIn template" />

### Theme Picker

<img src="screenshots/theme-picker.png" width="70%" alt="KromaStudio Theme Picker - 15 syntax themes" />

### Gradient Backgrounds

<img src="screenshots/gradient-backgrounds.png" width="80%" alt="KromaStudio 12 Gradient Backgrounds" />

</div>

## Studio Modes

| Mode | What it does |
|------|-------------|
| **Mockup** | Wrap any screenshot in a premium browser frame with gradient background and headline overlay |
| **Code** | Paste code, pick a syntax theme and language, style the frame, export share-ready visuals |
| **Content** | Compose social post cards from 10 templates with avatar, accent colour, metrics, and verified badge |

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or your preferred package manager)

### Installation

```bash
git clone https://github.com/your-org/kroma-studio.git
cd kroma-studio
npm install
```

### Environment variables

Create `.env.local` from the example below. All values use the `NEXT_PUBLIC_` prefix and are intentionally exposed to the browser.

```env
NEXT_PUBLIC_SITE_URL=https://www.kromastudio.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=

# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_TOP=
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_BOTTOM=
NEXT_PUBLIC_ADSENSE_SLOT_FOOTER=
NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_FOOTER=
NEXT_PUBLIC_ADSENSE_SLOT_RENDERING_OVERLAY=

# Set to true to load real AdSense slots on localhost (layout testing)
NEXT_PUBLIC_ADSENSE_DEV=false
```

> [!NOTE]
> Restart the dev server after changing `.env.local` — Next.js bakes `NEXT_PUBLIC_*` values into the client bundle at build time.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run validate:seo` | Validate all JSON-LD structured data |

## Project Structure

```
app/                    # Next.js App Router pages and API routes
  api/waitlist/         # Waitlist email capture endpoint (Resend)
  browser-mockup-generator/
  code-screenshot-generator/
  content-post-generator/
components/
  canvas/               # Studio canvas renderers (code, mockup, content)
  controls/             # Sidebar controls for each mode
  layout/               # Shell, sidebars, mobile layout
  modals/               # Watermark unlock modal
hooks/
  useExport.ts          # PNG export (html-to-image)
  useVideoRecorder.ts   # Animated .webm export (MediaRecorder, 60 fps)
lib/
  backgrounds.ts        # Gradient preset definitions
  site.ts               # Site-wide constants and SEO metadata
store/
  useStudioStore.ts     # Zustand global state (canvas, code, content, animation)
```

## Tech Stack

| Concern | Library |
|---------|---------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| State | Zustand 5 |
| Syntax highlighting | Shiki 4 |
| Animations | Framer Motion 12 |
| PNG export | html-to-image |
| Video export | MediaRecorder API + Canvas captureStream |
| Email | Resend |
| Analytics | Vercel Analytics + Google Analytics 4 |
| Ads | Google AdSense with auto-refresh |

## SEO & Structured Data

Each tool page ships with JSON-LD structured data and full Open Graph metadata. Validate the JSON-LD locally before deploying:

```bash
npm run validate:seo
```

See [docs/seo-runbook.md](docs/seo-runbook.md) for the full SEO setup guide and manual Google Search Console steps.

## 🤝 Contributing

We welcome contributions — bug reports, feature requests, and pull requests are all appreciated.

### Contribution flow

```mermaid
flowchart TD
    A([💡 Idea or Bug Found]) --> B[Search existing Issues]
    B --> C{Issue exists?}
    C -->|Yes| D[Comment on / pick up the issue]
    C -->|No| E[Open a new Issue]
    D --> F[Issue confirmed]
    E --> F
    F --> G[Fork the repo]
    G --> H["Create a branch\nfeature/* · fix/* · chore/*"]
    H --> I[Make your changes]
    I --> J["Run checks locally\nnpm run lint  ·  npm run build\nnpm run validate:seo"]
    J --> K{All checks pass?}
    K -->|No — fix issues| I
    K -->|Yes| L["Commit using Conventional Commits\nfeat(scope): description"]
    L --> M[Push branch & open PR]
    M --> N["Reference the issue\nCloses #NUMBER"]
    N --> O[Code review by maintainers]
    O --> P{Approved?}
    P -->|Changes requested| I
    P -->|Yes ✅| Q([Merged to main 🎉])
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide — branch naming, commit style, PR template, and code conventions.

### Current Contributors

<div align="center">
<img src="https://github.com/Ritesh0888.png" width="50" alt="Ritesh" />
</div>

## 🎯 Real Use Cases

### 1. GitHub README Badges

Turn raw code into a polished visual that makes your project README stand out.

**Before — plain fenced code block:**
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

**After — paste the same snippet into KromaStudio → pick a theme → export PNG:**

<img src="screenshots/code-snippet.png" width="80%" alt="Code snippet exported from KromaStudio" />

> A syntax-highlighted screenshot with a gradient background and browser frame, dropped straight into your README as an `<img>` tag. No more walls of monochrome text.

---

### 2. Twitter / X Viral Posts

> **[@yourhandle](https://x.com)**
>
> Just shipped `useOptimistic()` in 7 lines of React 19 🔥
>
> _(attach KromaStudio PNG — Dracula theme, Cyberpunk Neon gradient)_
>
> 🔁 847  ❤️ 4.2k  👁️ 120k

<img src="screenshots/twitter.png" width="70%" alt="Twitter viral code post made with KromaStudio" />

Code screenshots consistently outperform plain text tweets. Export at 2× and attach directly — no cropping needed.

---

### 3. Technical Blog Posts

Use the **Code mode** to produce consistent, on-brand code callouts for every article:

| Blog element | KromaStudio setting |
|---|---|
| Inline snippet highlight | Frameless · 8 px radius · transparent BG |
| Hero banner | Browser frame · gradient BG · headline overlay |
| Step-by-step diffs | Side-by-side exports, same theme |

<img src="screenshots/blog.png" width="80%" alt="Technical blog post code example made with KromaStudio" />

Drop the exported PNGs into Hashnode, Medium, or your own MDX blog — readers immediately know which part to focus on.

---

### 4. LinkedIn Professional Posts

Compose a **Content mode** card with your insight, avatar, and metrics, then attach the code screenshot as a second image. The combination drives 3–5× more impressions than text-only posts.

<img src="screenshots/linkedin.png" width="70%" alt="LinkedIn professional post made with KromaStudio" />

---

### 5. Tutorial Videos & Course Thumbnails

Export a **Mockup mode** frame with the browser chrome and a bold headline overlay — it becomes a ready-made thumbnail that looks consistent across your whole series.

<img src="screenshots/video.png" width="75%" alt="Tutorial video thumbnail made with KromaStudio" />

Export at 2× → drop into YouTube Studio, Loom, or Notion. Done.

---

## 🚧 Roadmap

<div align="center">

### Coming Soon

```mermaid
timeline
    title KromaStudio Roadmap
    Q2 2026 : 30+ Themes (In Progress)
    Q3 2026 : VSCode Extension
            : SVG Export
    Q4 2026 : iOS App
            : Android App
    Q1 2027 : Team Collaboration
    Q2 2027 : Public API
    Q3 2027 : AI Theme Suggestions
```

| Feature | Status | ETA |
|---------|--------|-----|
| **VSCode Extension** | 🚧 In Development | Q3 2026 |
| **iOS App** | 📋 Planned | Q4 2026 |
| **Android App** | 📋 Planned | Q4 2026 |
| **30+ Themes** | ✅ In Progress | Now |
| **SVG Export** | 📋 Planned | Q3 2026 |
| **Team Collaboration** | 📋 Planned | Q1 2027 |
| **API** | 📋 Planned | Q2 2027 |
| **AI Theme Suggestions** | 🧪 Research | Q3 2027 |

### Feature Request

Have an idea? [Open an issue](https://github.com/your-org/kroma-studio/issues) to suggest a feature!

</div>

## Deployment

The project is optimised for [Vercel](https://vercel.com). Set all `NEXT_PUBLIC_*` environment variables in the Vercel dashboard before deploying.

> [!TIP]
> The `kromastudio.in` apex domain is permanently redirected to `www.kromastudio.in` via a `next.config.ts` redirect rule — make sure your DNS points the `www` subdomain to Vercel.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
