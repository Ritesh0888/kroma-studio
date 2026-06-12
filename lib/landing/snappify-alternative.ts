export type ComparisonRow = {
  feature: string;
  snappify: string;
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
  "You want to export an animated code video without hitting a paywall or seeing a watermark.",
  "You don't need a full multi-slide presentation tool — you just want a beautiful, shareable snippet.",
  "You prefer a 100% client-side tool where your code never leaves the browser.",
  "You're tired of signing up for accounts just to save a high-res image of your code.",
  "You want to generate browser mockups and social cards (like Tweets or LinkedIn posts) from the same studio.",
] as const;

export const OTHER_ALTERNATIVES = [
  {
    name: "Carbon",
    bestFor: "Classic static code screenshots with 150+ themes and SVG export",
  },
  {
    name: "Ray.so",
    bestFor: "Fast, minimal code cards with polished defaults and URL-based generation",
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
    feature: "Pricing & Watermarks",
    snappify: "Free tier has watermarks and strict limits (3 snaps, 5 slides). Paid starts at $5/mo.",
    kromaStudio: "100% Free. No watermarks, no paywall, no limits.",
    summary: "Snappify is a powerful premium tool that limits the free tier with watermarks and a slide cap. KromaStudio is entirely free, open-source, and lets you convert code to image without watermarks on your beautiful code snippets.",
  },
  {
    feature: "Animated Video Export",
    snappify: "Yes, MP4/GIF export with custom keyframe animations (limited on Free).",
    kromaStudio: "Yes, looping .webm (Float, 3D Tilt, Auto Scroll) for free.",
    summary: "Snappify gives you deep control over custom animations, acting like a presentation deck. KromaStudio offers preset 60fps looping animations designed specifically for viral social media posts, and it's completely free.",
  },
  {
    feature: "Privacy & Processing",
    snappify: "Cloud-based processing. Requires sign-up and stores snaps on their servers.",
    kromaStudio: "100% Client-side. No sign-up required, code never leaves your browser.",
    summary: "If you're working with proprietary code, API keys, or sensitive logic, KromaStudio's zero-upload client-side architecture guarantees your data stays private. Snappify syncs to the cloud.",
  },
  {
    feature: "Multi-slide Presentations",
    snappify: "Excellent — drag & drop editor for full slide decks.",
    kromaStudio: "Single canvas only (no multi-slide decks).",
    summary: "If you are teaching a course and need a 20-slide animated presentation with speaker notes, Snappify is the better tool. KromaStudio focuses on creating that one perfect, scroll-stopping visual.",
  },
  {
    feature: "Browser Mockups",
    snappify: "Limited to code windows.",
    kromaStudio: "macOS, Windows, Minimal browser frames for app screenshots.",
    summary: "KromaStudio allows you to wrap actual app screenshots in a browser frame (Image mode), which is perfect for Product Hunt launches or landing page hero images.",
  },
  {
    feature: "Social Content Templates",
    snappify: "Code-centric canvas.",
    kromaStudio: "10 templates — Tweet, LinkedIn, Thread, Carousel, Metrics, and more.",
    summary: "KromaStudio includes a dedicated Content mode. You can generate a custom Tweet or LinkedIn post layout with your avatar, verified badge, and metrics.",
  },
  {
    feature: "Open Source",
    snappify: "Proprietary, closed-source SaaS.",
    kromaStudio: "MIT licensed — open source on GitHub, self-hostable.",
    summary: "KromaStudio is fully open-source. You can inspect the code, contribute, or even self-host it on your own domain.",
  },
];

export const KEY_DIFFERENCES = [
  {
    title: "Completely Free vs Freemium",
    href: "/",
    linkLabel: "Open KromaStudio",
    paragraphs: [
      "Snappify is a fantastic tool, but its free tier is heavily restricted with watermarks, a 5-slide limit, and only 3 saved snaps. To unlock its full potential, you need a subscription.",
      "KromaStudio provides HD PNG and 60fps .webm video exports for absolutely free, with zero watermarks. We believe developer tools for creating code screenshots shouldn't be paywalled.",
    ],
  },
  {
    title: "100% Client-Side Privacy",
    href: "/secure-code-screenshot-generator",
    linkLabel: "Learn about client-side privacy",
    paragraphs: [
      "Snappify requires an account and stores your presentations on their servers. This is great for syncing across devices, but a risk if you're pasting proprietary company code.",
      "KromaStudio processes everything in your browser. Your code never hits our servers, ensuring absolute end-to-end privacy for your secrets and algorithms.",
    ],
  },
  {
    title: "Complexity vs Speed",
    href: "/how-it-works",
    linkLabel: "See how fast KromaStudio is",
    paragraphs: [
      "Snappify is built like Figma or Google Slides for code. It has a rich-text editor, multi-element dragging, and complex keyframe animations.",
      "KromaStudio is optimized for speed. Paste your code, pick from 15 themes and 12 gradients, and export your animated loop or image in under 5 seconds.",
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "Is KromaStudio a completely free alternative to Snappify to convert code to image?",
    a: "Yes. Snappify has a free tier that includes watermarks and limits your storage. KromaStudio is 100% free, MIT open-source, and never adds watermarks to your exported beautiful code snippets or videos.",
  },
  {
    q: "Can I export animated code videos for free?",
    a: "Yes! While many tools charge for video exports, KromaStudio lets you export looping .webm animations (Float, 3D Tilt, Auto Scroll) directly from your browser, for free.",
    href: "/animated-code-screenshot",
    linkLabel: "Create animated code screenshots",
  },
  {
    q: "Do I need to create an account?",
    a: "No. KromaStudio requires zero sign-up. You can start creating immediately.",
  },
  {
    q: "When should I use Snappify instead?",
    a: "If you need to build a multi-slide presentation (like a PowerPoint deck but for code), or if you need custom step-by-step keyframe animations for a coding course, Snappify is the better choice. It's a full presentation tool.",
  },
  {
    q: "Is my code secure with KromaStudio?",
    a: "Absolutely. We use a 100% client-side architecture. Your code is processed in your browser and is never uploaded to any server.",
    href: "/privacy",
    linkLabel: "View our privacy policy",
  },
];
