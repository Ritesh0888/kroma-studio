import { VSCODE_MARKETPLACE_URL } from "@/lib/site";

export type ComparisonRow = {
  feature: string;
  carbon: string;
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
  "You want a VS Code shortcut — select code and open KromaStudio with Cmd+Shift+K instead of pasting into a browser tab.",
  "You need a real browser frame around a product screenshot — not just code styled inside a window.",
  "A single code card isn't cutting it; you want tweet cards, LinkedIn layouts, or a metrics snapshot.",
  "You'd rather export a short looping .webm for Reels or dev Twitter than stop at a static PNG.",
  "Headlines and gradient backgrounds help your post stand out without opening another design tool.",
  "You're done switching between Carbon, a mockup app, and something else just to ship one launch thread.",
  "You want to paste, customize, and export — no account, even though Carbon's saved snippets need a login.",
  "You like that both tools are open source, but you want mockups and animation in the same repo you can self-host.",
] as const;

/** Other tools developers compare with Carbon */
export const OTHER_ALTERNATIVES = [
  {
    name: "Ray.so",
    bestFor: "Fast, minimal code cards with polished defaults and URL-based PNG generation",
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
    bestFor: "Minimal, open-source code images with multiple blocks in one image",
  },
  {
    name: "Hackreels",
    bestFor: "Animated code diff videos in 4K, GIF, or WebM (paid render time)",
  },
] as const;

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Code Screenshots",
    carbon: "Excellent — 150+ themes, mature defaults, broad language support",
    kromaStudio: "Excellent — Convert code to image with Shiki highlighting, 15 themes, headline overlays",
    summary:
      "Both make beautiful code snippets. Carbon has been the go-to for years — huge theme library, polished defaults. KromaStudio holds up on quality and adds things Carbon doesn't touch: headline overlays, gradients, mockups, and social templates.",
  },
  {
    feature: "VS Code Extension",
    carbon: "No official extension — use carbon-now-cli from the terminal",
    kromaStudio: "Free extension — select code, Cmd+Shift+K, open in browser",
    summary:
      "Carbon's automation story is carbon-now-cli and gist URLs. KromaStudio adds a free VS Code extension: select a snippet in the editor, run Capture Selection, and the browser studio opens with language and theme already set.",
  },
  {
    feature: "Browser Mockups",
    carbon: "Code window chrome only — not product screenshot frames",
    kromaStudio: "macOS, Windows, Minimal browser frames for app screenshots",
    summary:
      "Carbon puts your code inside a window frame — macOS-style dots, sharp edges, or none. It won't wrap an app screenshot in browser chrome. For launch posts or portfolio previews, that's usually a separate tool.",
  },
  {
    feature: "Social Content Posts",
    carbon: "Code cards only",
    kromaStudio: "10 templates — Tweet, LinkedIn, Thread, Carousel, Metrics, and more",
    summary:
      "Carbon is perfect when the post is just a snippet. If you're building an announcement, thread, or carousel, you'll want more layout than a code block alone.",
  },
  {
    feature: "Animated Exports",
    carbon: "Static PNG and SVG export",
    kromaStudio: "Animated .webm loops (Float, 3D Tilt, Auto Scroll)",
    summary:
      "Carbon does still images well — PNG and SVG cover most READMEs, blogs, and tweets. Motion is a different story; KromaStudio can export a looping .webm when you need that.",
  },
  {
    feature: "Theme Library",
    carbon: "150+ syntax themes with deep font and color controls",
    kromaStudio: "15 Shiki themes + 12 gradient presets",
    summary:
      "Carbon wins here — 150+ themes and fine control over fonts, padding, and shadows. KromaStudio has 15 curated themes (Catppuccin, Nord, Tokyo Night, and others). If you live and die by theme count, stick with Carbon. If you want mockups or video in the same tool, KromaStudio is the wider pick.",
  },
  {
    feature: "Automation & CLI",
    carbon: "carbon-now-cli, gist URLs, embed URLs, shareable links",
    kromaStudio: "VS Code extension + browser studio (no CLI yet)",
    summary:
      "Carbon's ecosystem is hard to beat: carbon-now-cli for terminal workflows, gist URLs, embed links. KromaStudio adds a free VS Code extension for in-editor capture plus a browser studio — no CLI yet, but paste-free handoff from VS Code.",
  },
  {
    feature: "Export Formats",
    carbon: "PNG, SVG, clipboard copy; shareable links",
    kromaStudio: "PNG (2×) + .webm video",
    summary:
      "Carbon gives you PNG, SVG, and share links that preview nicely on Twitter and Slack. KromaStudio does 2× PNG plus .webm from the same canvas — handy when one snippet becomes both a feed image and a short clip.",
  },
  {
    feature: "Snippet Management",
    carbon: "Optional account — save snippets, share links, embed in blogs",
    kromaStudio: "No account — local browser workflow",
    summary:
      "Sign in to Carbon and you can save snippets and embed them in a blog post. KromaStudio skips accounts entirely — everything stays in your browser until you hit export.",
  },
  {
    feature: "Open Source",
    carbon: "MIT licensed — 36k+ GitHub stars, self-hostable",
    kromaStudio: "MIT licensed — open source on GitHub, self-hostable",
    summary:
      "Both are MIT open source and you can self-host either one. Carbon has the bigger community and carbon-now-cli. KromaStudio packs code screenshots, mockups, social templates, and .webm export into one repo — all client-side.",
  },
  {
    feature: "Ease of Use",
    carbon: "Very mature — paste, drop file, or load a GitHub gist",
    kromaStudio: "Fast — three modes, more options",
    summary:
      "Carbon is flexible: paste, drop a file, or load a gist from the URL. KromaStudio's UI is a bit busier because it does more than code cards — but the core flow is still paste, pick a theme, export.",
  },
  {
    feature: "Developer Workflow",
    carbon: "Focused code tool + CLI and embed ecosystem",
    kromaStudio: "All-in-one — code, mockups, social, animation",
    summary:
      "Carbon does one thing and has great tooling around it. KromaStudio is for people who'd rather keep code shots, mockups, launch graphics, and short clips in one tab.",
  },
];

export const FEATURE_SECTIONS: FeatureSection[] = [
  {
    title: "VS Code Extension",
    body: "Install KromaStudio from the Visual Studio Marketplace, select code in VS Code or Cursor, and press Cmd+Shift+K (macOS) or Ctrl+Shift+K (Windows/Linux). Your snippet opens in KromaStudio ready to style and export — no copy-paste from the editor.",
    link: { href: VSCODE_MARKETPLACE_URL, label: "Install VS Code Extension" },
  },
  {
    title: "Browser Mockup Generator",
    body: "Drop a screenshot into macOS, Windows, or minimal browser chrome. Tweak padding, corners, shadows, and aspect ratio, then export a PNG ready for a launch post or README hero.",
    link: { href: "/browser-mockup-generator", label: "Browser Mockup Generator" },
  },
  {
    title: "Social Content Generator",
    body: "Tweet cards, LinkedIn posts, threads, carousels, metrics snapshots — pick a template, fill in author and accent color, export PNG or a looping .webm.",
    link: { href: "/content-post-generator", label: "Social Content Generator" },
  },
  {
    title: "Animated Code Screenshots",
    body: "Pick Float, 3D Tilt, or Auto Scroll, render a looping .webm at 2× resolution, and post it — no After Effects, no screen recording.",
    link: { href: "/how-it-works", label: "How to export animated code" },
  },
  {
    title: "Theme Customization",
    body: "15 Shiki themes, 12 gradient presets, or roll your own two-color gradient. Toggle line numbers, bump font size, add a headline for social.",
    link: { href: "/code-screenshot-generator", label: "Code Screenshot Generator" },
  },
  {
    title: "Privacy-First Client-Side Processing",
    body: "Everything renders in your browser — nothing gets uploaded. KromaStudio is MIT open source on GitHub, same as Carbon, so you can self-host if you want full control.",
    link: { href: "/privacy", label: "Privacy policy" },
  },
  {
    title: "Fast Export Workflow",
    body: "Paste code, pick a theme, download a sharp 2× PNG in seconds. Same canvas does static PNG and animated .webm — one workflow for docs, feeds, and launch threads.",
    link: { href: "/how-it-works", label: "How it works" },
  },
];

export const AUDIENCE_SECTIONS: AudienceSection[] = [
  {
    title: "Frontend Developers",
    body: "Share component refactors, CSS tricks, and UI patterns with syntax-highlighted cards — then wrap app screenshots in browser frames for portfolio pieces.",
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
    q: "Does KromaStudio have a VS Code extension?",
    a: "Yes. Install it from the Visual Studio Marketplace, select code in VS Code or Cursor, and press Cmd+Shift+K or Ctrl+Shift+K to open the snippet in KromaStudio with syntax highlighting already applied.",
    href: VSCODE_MARKETPLACE_URL,
    linkLabel: "Install from Marketplace",
  },
  {
    q: "What is the best Carbon.now.sh alternative?",
    a: "Depends what you're making. Carbon is still great for pure code cards. Ray.so is fast if you want URL-based PNGs. Chalk.ist and CodeImage are solid open-source picks. Snappify and Hackreels if you need animated code video. KromaStudio fits when you want code shots plus mockups, social templates, and .webm export in one free, open-source studio.",
  },
  {
    q: "Is KromaStudio free?",
    a: "Yes — no sign-up, no paywall on the core studio.",
  },
  {
    q: "Is Carbon better than KromaStudio for code screenshots?",
    a: "For raw code cards and to convert code to image, Carbon has the edge: 150+ themes, SVG, embed links, and carbon-now-cli. KromaStudio makes more sense when you want to create beautiful code snippets and also need mockups, social layouts, headlines, or a .webm clip — and you'd rather not juggle three apps.",
  },
  {
    q: "Can I create browser mockups?",
    a: "Yes. Switch to Image mode, drop in a screenshot, pick macOS, Windows, or Minimal chrome, and export.",
    href: "/browser-mockup-generator",
    linkLabel: "Browser mockup generator",
  },
  {
    q: "Can I export animated screenshots?",
    a: "Yes. Open the Animate panel, pick Float, 3D Tilt, or Auto Scroll, and render a .webm — all in the browser.",
    href: "/how-it-works",
    linkLabel: "Export guide",
  },
  {
    q: "Does KromaStudio upload my code?",
    a: "No. Highlighting, rendering, and export all happen locally. Your code and images stay on your device.",
  },
  {
    q: "Can I use KromaStudio without signup?",
    a: "Yes. Open the studio, paste or upload, export — no account needed.",
  },
  {
    q: "What export formats are available?",
    a: "KromaStudio exports 2× PNG and .webm loops. Carbon also does SVG and shareable embed links.",
  },
  {
    q: "Is KromaStudio open source?",
    a: "Yes — MIT licensed on GitHub. Self-host the whole studio if you want; rendering stays client-side.",
    href: "/github-kroma-studio",
    linkLabel: "View on GitHub",
  },
  {
    q: "How does KromaStudio compare with Carbon?",
    a: "Both are MIT open source. Carbon is the classic code-screenshot tool — huge theme library, SVG, CLI, big community. KromaStudio does code shots too, plus mockups, social templates, and .webm video in one place.",
  },
  {
    q: "Can teams use KromaStudio?",
    a: "Sure — share the exported PNGs and .webm files however you like. There's no shared cloud account; each person uses the studio locally.",
  },
];

export const INTERNAL_LINKS = [
  { href: "/code-screenshot-generator", label: "Code Screenshot Generator" },
  { href: "/browser-mockup-generator", label: "Browser Mockup Generator" },
  { href: "/content-post-generator", label: "Social Content Post Generator" },
  { href: "/animated-code-screenshot", label: "Animated Code Screenshots" },
  { href: "/secure-code-screenshot-generator", label: "Secure Client-Side Generator" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/ray-so-alternative", label: "KromaStudio vs Ray.so" },
  { href: "/snappify-alternative", label: "KromaStudio vs Snappify" },
  { href: "/github-kroma-studio", label: "Open Source on GitHub" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

/** CRO — hero trust badges */
export const HERO_TRUST_BADGES = [
  "VS Code Extension",
  "15 Syntax Themes",
  "10 Social Templates",
  "MIT Open Source",
  "100% Client-Side",
  "No Sign-Up",
] as const;

/** CRO — skimmable switch cards (placed after hero) */
export const SWITCH_CARDS = [
  {
    icon: "workflow",
    title: "VS Code Extension",
    body: "Carbon's editor workflow is carbon-now-cli from the terminal. KromaStudio ships a free VS Code extension — select code, press Cmd+Shift+K, and open the browser studio without copy-paste.",
    href: VSCODE_MARKETPLACE_URL,
    linkLabel: "Install VS Code Extension",
  },
  {
    icon: "browser",
    title: "Browser Mockups",
    body: "Carbon styles code inside a window. KromaStudio can wrap an actual app screenshot in macOS or Windows chrome — handy for launch posts and portfolio shots without a second tool.",
    href: "/browser-mockup-generator",
    linkLabel: "Browser mockup generator",
  },
  {
    icon: "social",
    title: "Social Media Content Templates",
    body: "One code image is fine for a quick tweet. For threads, carousels, or a metrics card, you'll want proper layout — not just highlighted syntax.",
    href: "/content-post-generator",
    linkLabel: "Social content templates",
  },
  {
    icon: "animated",
    title: "Animated Exports",
    body: "Carbon's PNG and SVG stills cover most docs and blog posts. When you want a looping clip for LinkedIn or Reels, KromaStudio can export .webm too.",
    href: "/how-it-works",
    linkLabel: "How animation export works",
  },
  {
    icon: "workflow",
    title: "All-in-One Workflow",
    body: "Lots of teams use Carbon for the code card, then open something else for mockups or social graphics. KromaStudio keeps code, mockups, and content templates in one tab.",
    href: "/",
    linkLabel: "Open KromaStudio",
  },
  {
    icon: "privacy",
    title: "Open Source & Client-Side Privacy",
    body: "Both are MIT open source — fork it, self-host it, inspect the code. KromaStudio runs everything locally in your browser, no account required.",
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
      "Carbon puts your code in a styled window. When you need a product screenshot sitting inside browser chrome for a launch thread, that's usually a different app.",
      "KromaStudio Image mode wraps any screenshot in macOS, Windows, or Minimal frames — padding, shadows, aspect ratio — and exports a PNG from the same place.",
    ],
  },
  {
    title: "Social Content Creation",
    href: "/content-post-generator",
    linkLabel: "Explore social templates",
    paragraphs: [
      "A code card works for a single tweet. Announcements, threads, and carousels need more structure than syntax highlighting alone.",
      "Content mode has ten templates — Tweet, LinkedIn, Thread, Carousel, Metrics, and more — with editable author fields so posts stay on-brand.",
    ],
  },
  {
    title: "Animated Exports",
    href: "/how-it-works",
    linkLabel: "See export steps",
    paragraphs: [
      "Carbon's PNG and SVG output is polished — great for docs, blogs, and embeddable snippets. It doesn't do motion.",
      "KromaStudio can export a .webm loop (Float, 3D Tilt, Auto Scroll) from the same snippet — one PNG for the feed, one clip for short-form video.",
    ],
  },
  {
    title: "Theme Library & Automation",
    href: "/code-screenshot-generator",
    linkLabel: "Code screenshot generator",
    paragraphs: [
      "Carbon has had years to build out 150+ themes, carbon-now-cli, gist URLs, and embed links. Hard to argue with that depth.",
      "KromaStudio trades theme count for breadth — 15 curated themes, a free VS Code extension, mockups, social layouts, and .webm from one editor. Pick Carbon for CLI and themes; pick KromaStudio when you want editor capture and fewer tabs open.",
    ],
  },
  {
    title: "Privacy & Open Source",
    href: "/privacy",
    linkLabel: "Read privacy policy",
    paragraphs: [
      "Carbon is MIT licensed with 36k+ GitHub stars. Self-host it, save snippets in the cloud if you sign in — it's been the standard for a reason.",
      "KromaStudio is MIT open source too. Self-host it, skip the account, and keep code, mockups, and social templates processing locally in your browser.",
    ],
  },
] as const;

/** CRO — trust signals */
export const TRUST_BUILDERS = [
  {
    title: "Runs in Your Browser",
    body: "Highlighting, mockups, and export happen locally — not on a remote server.",
  },
  {
    title: "No Account Needed",
    body: "Open it, paste or upload, export. That's it.",
  },
  {
    title: "Nothing Gets Uploaded",
    body: "Your code and screenshots stay on your machine while you work.",
  },
  {
    title: "Fast Exports",
    body: "2× PNG and .webm loops render in seconds — no queue, no waiting.",
  },
  {
    title: "MIT Open Source",
    body: "On GitHub under MIT — read the code, self-host, fork, or contribute.",
  },
  {
    title: "Free",
    body: "Code, mockups, templates, animation — no paywall on the core studio.",
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
