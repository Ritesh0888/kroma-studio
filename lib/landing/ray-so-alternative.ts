export type ComparisonRow = {
  feature: string;
  raySo: string;
  kromaStudio: string;
  summary: string;
};

export type FeatureSection = {
  title: string;
  body: string;
  link?: { href: string; label: string };
};

export type AudienceSection = {
  title: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
};

export const WHY_SWITCH_POINTS = [
  "More customization and sharing options — headline overlays, shadow depth, and aspect ratio controls beyond a standard code card.",
  "Browser mockups — wrap product screenshots in macOS, Windows, or minimal chrome (separate from code-only window styling).",
  "Dedicated social templates — LinkedIn, threads, carousels, and metrics cards instead of code cards alone.",
  "Animation support — export looping .webm clips (Float, 3D Tilt, Auto Scroll) for Reels and dev Twitter.",
  "All-in-one workflow — code screenshots, image mockups, and social content in one free studio.",
  "No account required — full studio access with zero sign-up, matching the frictionless feel developers expect from Ray.so.",
] as const;

/** Other tools developers compare with Ray.so */
export const OTHER_ALTERNATIVES = [
  {
    name: "Carbon",
    bestFor: "Quick, open-source code cards with wide language support",
  },
  {
    name: "Snappify",
    bestFor: "Animated code presentations, diffs, and VS Code integration (paid tiers for advanced features)",
  },
  {
    name: "CodeImage",
    bestFor: "Deep static customization and self-hosting (open source)",
  },
  {
    name: "Chalk.ist",
    bestFor: "Minimal, open-source code images for blogs and tutorials",
  },
  {
    name: "Hackreels",
    bestFor: "Animated code diff videos in 4K, GIF, or WebM (paid render time)",
  },
] as const;

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Code Screenshots",
    raySo: "Excellent — fast, polished syntax cards",
    kromaStudio: "Excellent — Shiki highlighting, 15 themes",
    summary:
      "Both tools produce beautiful code screenshots. Ray.so is purpose-built for quick code cards with a minimal interface and polished defaults. KromaStudio matches that quality and adds headline overlays, line-number controls, and multi-mode workflows for mockups and social posts.",
  },
  {
    feature: "Browser Mockups",
    raySo: "Code images only — no product screenshot frames",
    kromaStudio: "macOS, Windows, Minimal browser frames",
    summary:
      "Ray.so is built for code snippet images, not wrapping product screenshots in browser chrome. If you need launch mockups or portfolio previews from app screenshots, KromaStudio Image mode handles that.",
  },
  {
    feature: "Social Content Posts",
    raySo: "Code cards only",
    kromaStudio: "10 templates — Tweet, LinkedIn, Thread, Carousel, Metrics, and more",
    summary:
      "Ray.so is ideal when your post is a single code snippet. KromaStudio Content mode adds tweet cards, LinkedIn layouts, announcement blocks, and metrics snapshots for broader social storytelling.",
  },
  {
    feature: "Animated Exports",
    raySo: "Static PNG and SVG export",
    kromaStudio: "Animated .webm loops (Float, 3D Tilt, Auto Scroll)",
    summary:
      "Ray.so focuses on still images — PNG and SVG — which is exactly what most README and tweet use cases need. KromaStudio adds optional animated .webm export when you want motion for LinkedIn or short-form video.",
  },
  {
    feature: "Multiple Themes",
    raySo: "~30 curated themes, custom colors, gradients",
    kromaStudio: "15 syntax themes + 12 gradient presets",
    summary:
      "Ray.so offers a large set of polished default themes and a fast theme picker. KromaStudio offers 15 Shiki themes including Catppuccin, Nord, and Tokyo Night. If theme count matters most, Ray.so’s library is larger; if you need mockups or motion alongside code, KromaStudio covers a broader workflow.",
  },
  {
    feature: "Programmatic Export",
    raySo: "URL query params for scripted PNG generation",
    kromaStudio: "Interactive browser studio (no public API yet)",
    summary:
      "Ray.so supports GET URL parameters so you can generate code images from shell scripts or editor extensions. KromaStudio is browser-first today: paste, customize, and export manually. For CI/CD automation, Ray.so or Ray by Tinte may fit better; for visual mockups and animation in one UI, KromaStudio does.",
  },
  {
    feature: "Export Formats",
    raySo: "PNG, SVG, clipboard copy; 2× retina export",
    kromaStudio: "PNG (2×) + .webm video",
    summary:
      "Ray.so exports sharp PNG and SVG files, including 2× resolution for retina displays. KromaStudio matches 2× PNG and adds .webm video export from the same editor — useful when one asset needs to work as both a feed post and a motion clip.",
  },
  {
    feature: "Ease of Use",
    raySo: "Very fast — paste and export",
    kromaStudio: "Fast — three modes, more options",
    summary:
      "Ray.so wins on simplicity for a single job: paste code, pick a theme, download. KromaStudio has a slightly broader UI because it covers mockups and social templates too, but the core code workflow is still paste → customize → export.",
  },
  {
    feature: "Privacy",
    raySo: "Browser-based; code images render locally",
    kromaStudio: "100% client-side — code and images stay on device",
    summary:
      "Ray.so renders code images in the browser using client-side export (html-to-image), so snippets are not sent to a server for image generation. KromaStudio uses the same local-first approach across Code, Image, and Content modes — including uploaded screenshots and social templates.",
  },
  {
    feature: "No Login Usage",
    raySo: "Usable without an account",
    kromaStudio: "Free, no sign-up required",
    summary:
      "Both tools let you create and export without creating an account. KromaStudio keeps the full studio — code, mockups, and content templates — available with zero registration friction.",
  },
  {
    feature: "Developer Workflow",
    raySo: "Single-purpose code card tool",
    kromaStudio: "All-in-one — code, mockups, social, animation",
    summary:
      "Ray.so fits a narrow, well-defined job. KromaStudio suits developers who want one tab open for code screenshots, product mockups, launch graphics, and animated clips — without jumping between apps.",
  },
];

export const FEATURE_SECTIONS: FeatureSection[] = [
  {
    title: "Browser Mockup Generator",
    body: "Drop any screenshot into macOS Dark, macOS Light, Windows, or Minimal browser chrome. Adjust padding, corner radius, shadow depth, and aspect ratio — then export a portfolio-ready PNG. Ideal for product launch posts and README hero images.",
    link: { href: "/browser-mockup-generator", label: "Browser Mockup Generator" },
  },
  {
    title: "Social Content Generator",
    body: "Build tweet cards, LinkedIn posts, thread previews, quote blocks, announcement cards, testimonials, carousels, before-after stories, and metrics snapshots. Customize author name, handle, avatar, and accent color — then export HD PNG or animated .webm.",
    link: { href: "/content-post-generator", label: "Social Content Generator" },
  },
  {
    title: "Animated Code Screenshots",
    body: "Apply Float, 3D Tilt, or Auto Scroll presets to any code card and render a looping .webm at 2× resolution. Share motion assets on LinkedIn, X, or Reels without After Effects or screen recording.",
    link: { href: "/how-it-works", label: "How to export animated code" },
  },
  {
    title: "Theme Customization",
    body: "Choose from 15 Shiki-powered syntax themes and 12 gradient background presets — or build a custom two-color gradient. Toggle line numbers, adjust font size, and add a headline overlay for social posts.",
    link: { href: "/code-screenshot-generator", label: "Code Screenshot Generator" },
  },
  {
    title: "Privacy-First Client-Side Processing",
    body: "Your code and images are rendered locally in the browser — the same approach Ray.so uses for code export. KromaStudio applies that local-first workflow across code screenshots, uploaded image mockups, and social content templates without requiring an account or cloud storage.",
    link: { href: "/privacy", label: "Privacy policy" },
  },
  {
    title: "Fast Export Workflow",
    body: "Paste a snippet, pick a theme, and download a 2× PNG in seconds. No account, no queue, no cloud storage step. The same canvas exports static images and animated video — one workflow for feeds, docs, and launch threads.",
    link: { href: "/how-it-works", label: "How it works" },
  },
];

export const AUDIENCE_SECTIONS: AudienceSection[] = [
  {
    title: "Frontend Developers",
    body: "Share component refactors, CSS tricks, and UI patterns with syntax-highlighted cards that match your preferred theme — then wrap app screenshots in browser frames for portfolio pieces.",
  },
  {
    title: "Backend Developers",
    body: "Post API handlers, database queries, and config snippets with syntax highlighting rendered in your browser. Export clean PNGs for internal docs or public blog posts.",
  },
  {
    title: "Indie Hackers",
    body: "Ship launch graphics, metrics cards, and product mockups from one free tool — no separate design subscription required for a polished build-in-public thread.",
  },
  {
    title: "Startup Founders",
    body: "Create announcement cards, before-after stories, and browser mockups for Product Hunt, LinkedIn, and investor updates — all from the same studio.",
  },
  {
    title: "Technical Writers",
    body: "Produce consistent code callouts for documentation and tutorials. Use the same theme across every article so readers recognize your brand instantly.",
  },
  {
    title: "Developer Advocates",
    body: "Turn conference snippets, sample repos, and tutorial code into share-ready visuals — static for blogs, animated for social reach.",
  },
];

export const USE_CASES = [
  {
    text: "Sharing a refactored React hook on LinkedIn with a headline overlay and gradient background",
    href: "/code-screenshot-generator",
    linkLabel: "Code screenshots for LinkedIn",
  },
  {
    text: "Embedding syntax-highlighted snippets in a technical blog post or Dev.to article",
    href: "/code-screenshot-generator",
    linkLabel: "Blog-ready code images",
  },
  {
    text: "Wrapping a product screenshot in a macOS browser frame for a launch announcement",
    href: "/browser-mockup-generator",
    linkLabel: "Launch mockups",
  },
  {
    text: "Creating documentation screenshots with consistent Dracula or Nord theming",
    href: "/how-it-works",
    linkLabel: "Theming workflow",
  },
  {
    text: "Building a developer portfolio page with mockup-style project previews",
    href: "/browser-mockup-generator",
    linkLabel: "Portfolio mockups",
  },
  {
    text: "Publishing animated code loops for X, LinkedIn, or short-form video feeds",
    href: "/how-it-works",
    linkLabel: "Animated export guide",
  },
] as const;

export const FAQS: FaqItem[] = [
  {
    q: "What is the best Ray.so alternative?",
    a: "It depends on your goal. For quick static code cards, Carbon and Chalk.ist are popular free picks. For animated code videos, Snappify and Hackreels are common recommendations. For browser mockups, social post templates, and animated .webm export in one free client-side studio, KromaStudio is a strong fit — especially when your workflow goes beyond a single code snippet image.",
  },
  {
    q: "Is KromaStudio free?",
    a: "Yes. KromaStudio is free to use with no sign-up and no paywall on core studio features.",
  },
  {
    q: "Can I create browser mockups?",
    a: "Yes. Switch to Image mode to wrap any screenshot in macOS, Windows, or Minimal browser frames. Adjust padding, shadows, and aspect ratio, then export HD PNG.",
    href: "/browser-mockup-generator",
    linkLabel: "Browser mockup generator",
  },
  {
    q: "Can I export animated screenshots?",
    a: "Yes. Use the Animate panel to apply Float, 3D Tilt, or Auto Scroll presets and render a looping .webm file — 100% client-side.",
    href: "/how-it-works",
    linkLabel: "Export guide",
  },
  {
    q: "Does KromaStudio upload my code?",
    a: "No. Syntax highlighting, rendering, and export all happen locally in your browser. Your code and images never leave your device.",
  },
  {
    q: "Can I use it without signup?",
    a: "Yes. Open KromaStudio, paste your code or drop a screenshot, and export immediately — no account required.",
  },
  {
    q: "What export formats are available?",
    a: "KromaStudio exports 2× resolution PNG for static images and .webm for animated loops. Both are generated from the same canvas.",
  },
  {
    q: "Is KromaStudio suitable for social media content?",
    a: "Yes. Content mode includes templates for tweets, LinkedIn posts, threads, carousels, metrics cards, and more. Code mode supports headline overlays and gradient backgrounds for social posts.",
  },
  {
    q: "How does KromaStudio compare with Ray.so?",
    a: "Ray.so excels at fast, minimal code cards with polished themes and PNG/SVG export. KromaStudio covers code screenshots too and adds browser mockups, social post templates, and animated .webm video — all in one free studio.",
  },
  {
    q: "Can teams use KromaStudio?",
    a: "Yes. Teams can share exported PNGs and .webm files freely. Because processing is client-side, there is no shared cloud storage or team account required — each developer uses the studio locally.",
  },
];

export const INTERNAL_LINKS = [
  { href: "/code-screenshot-generator", label: "Code Screenshot Generator" },
  { href: "/browser-mockup-generator", label: "Browser Mockup Generator" },
  { href: "/content-post-generator", label: "Social Content Post Generator" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

/** CRO — hero trust badges */
export const HERO_TRUST_BADGES = [
  "15 Syntax Themes",
  "10 Social Templates",
  "100% Client-Side",
  "No Sign-Up",
] as const;

/** CRO — skimmable switch cards (placed after hero) */
export const SWITCH_CARDS = [
  {
    icon: "browser",
    title: "Browser Mockups",
    body: "Ray.so is built for syntax-highlighted code images. KromaStudio also wraps app screenshots in macOS or Windows browser frames — useful for launch posts, portfolios, and README heroes without opening another mockup tool.",
    href: "/browser-mockup-generator",
    linkLabel: "Browser mockup generator",
  },
  {
    icon: "social",
    title: "Social Media Content Templates",
    body: "Go beyond a single code snippet image. Build tweet cards, LinkedIn posts, threads, carousels, and metrics snapshots with author, handle, and accent controls — then export in one click.",
    href: "/content-post-generator",
    linkLabel: "Social content templates",
  },
  {
    icon: "animated",
    title: "Animated Exports",
    body: "Ray.so exports clean PNG and SVG stills, which covers most README and blog use cases. KromaStudio can also export looping .webm clips (Float, 3D Tilt, Auto Scroll) when you want motion for LinkedIn, X, or Reels.",
    href: "/how-it-works",
    linkLabel: "How animation export works",
  },
  {
    icon: "workflow",
    title: "All-in-One Workflow",
    body: "Some teams use Ray.so for code cards, then switch to other apps for mockups or social graphics. KromaStudio keeps Code, Image, and Content modes in one free studio tab.",
    href: "/",
    linkLabel: "Open KromaStudio",
  },
  {
    icon: "privacy",
    title: "Client-Side Privacy",
    body: "Ray.so renders code images locally in the browser. KromaStudio uses the same approach for code, uploaded screenshots, and social templates — processing stays on your device.",
    href: "/privacy",
    linkLabel: "Privacy policy",
  },
] as const;

/** CRO — condensed comparison narratives (replaces per-row repetition after table) */
export const KEY_DIFFERENCES = [
  {
    title: "Browser Mockups",
    href: "/browser-mockup-generator",
    linkLabel: "Try browser mockups",
    paragraphs: [
      "Ray.so is built for syntax-highlighted code images. When you need a product screenshot inside realistic browser chrome for a launch thread or portfolio, you would normally open a separate mockup tool.",
      "KromaStudio Image mode wraps any screenshot in macOS, Windows, or Minimal frames with padding, shadows, and aspect ratio controls — then exports HD PNG from the same canvas.",
    ],
  },
  {
    title: "Social Content Creation",
    href: "/content-post-generator",
    linkLabel: "Explore social templates",
    paragraphs: [
      "A code card works for one tweet. Announcements, threads, carousels, and metrics proof need structured layouts — not just highlighted syntax.",
      "KromaStudio Content mode includes ten templates (Tweet, LinkedIn, Thread, Carousel, Metrics, and more) with editable author fields and accent colors, so social posts can stay on-brand in one editor.",
    ],
  },
  {
    title: "Animated Exports",
    href: "/how-it-works",
    linkLabel: "See export steps",
    paragraphs: [
      "Ray.so delivers polished still images — PNG and SVG — which is ideal for docs and static posts. It does not export motion assets.",
      "KromaStudio adds optional .webm loops (Float, 3D Tilt, Auto Scroll) rendered client-side. One snippet can become both a feed PNG and a motion clip for short-form video.",
    ],
  },
  {
    title: "Export Workflow",
    href: "/code-screenshot-generator",
    linkLabel: "Code screenshot generator",
    paragraphs: [
      "Ray.so is quick for a single code card: paste, theme, download. It also supports URL query parameters for scripted PNG generation from shell scripts or editor extensions.",
      "KromaStudio covers 2× PNG and .webm from the same editor across code, mockups, and social templates. Pick Ray.so for a focused code-card workflow; pick KromaStudio when you want several export types in one place.",
    ],
  },
  {
    title: "Privacy",
    href: "/privacy",
    linkLabel: "Read privacy policy",
    paragraphs: [
      "Ray.so renders code images in the browser using client-side export — snippets are not sent to a server for image generation.",
      "KromaStudio applies the same local-first model across Code, Image, and Content modes, including uploaded screenshots and social templates — no account, no cloud storage step.",
    ],
  },
] as const;

/** CRO — trust signals */
export const TRUST_BUILDERS = [
  {
    title: "100% Client-Side Processing",
    body: "Syntax highlighting, mockup rendering, and export run in your browser — not on a remote renderer.",
  },
  {
    title: "No Account Required",
    body: "Open the studio, paste or upload, and export. Zero registration friction.",
  },
  {
    title: "No Server Uploads",
    body: "Your code and screenshots stay on your device during editing and export.",
  },
  {
    title: "Fast Local Exports",
    body: "2× PNG and .webm loops generate from the canvas in seconds — no queue or cloud wait.",
  },
  {
    title: "Free to Use",
    body: "Core studio features — code, mockups, content templates, and animation — are free with no paywall.",
  },
] as const;

/** Visual assets served from public/screenshots/ */
export const SCREENSHOT_SLOTS = {
  hero: {
    src: "/screenshots/code-mode-dark.png",
    alt: "KromaStudio code screenshot editor with syntax themes and gradient background",
  },
  comparison: {
    src: "/screenshots/code-snippet.png",
    alt: "Syntax-highlighted code screenshot exported from KromaStudio",
  },
  browserMockups: {
    src: "/screenshots/mockup-mode-macos.png",
    alt: "KromaStudio browser mockup with macOS frame and gradient background",
  },
  socialContent: {
    src: "/screenshots/content-mode-linkedin.png",
    alt: "KromaStudio LinkedIn social content template",
  },
  animatedExports: {
    src: "/screenshots/video.png",
    alt: "KromaStudio animated code screenshot export",
  },
  finalCta: {
    src: "/screenshots/gradient-backgrounds.png",
    alt: "KromaStudio gradient background presets",
  },
} as const;
