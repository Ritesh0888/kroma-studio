export type FaqItem = {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
};

export type HowToStep = {
  title: string;
  body: string;
};

export type TemplateEntry = {
  name: string;
  description: string;
  bestFor: string;
};

export type UseCase = {
  title: string;
  body: string;
};

export type RelatedTool = {
  href: string;
  label: string;
  description: string;
};

export const HERO_TRUST_BADGES = [
  "Free",
  "No sign-up",
  "10 visual card templates",
  "Not AI text — visual card designer",
  "Animated .webm",
  "100% client-side",
] as const;

export const TEMPLATES: TemplateEntry[] = [
  {
    name: "Tweet",
    description: "A styled Twitter/X post card with avatar, handle, likes, retweets, and reply count.",
    bestFor: "Sharing tweet screenshots as shareable images on LinkedIn or in blog posts.",
  },
  {
    name: "LinkedIn",
    description: "Professional post card with author name, headline, and engagement stats.",
    bestFor: "Repurposing LinkedIn posts as graphics for newsletters or other platforms.",
  },
  {
    name: "Video",
    description: "Video thumbnail card with a play button overlay, title, and author.",
    bestFor: "Promoting YouTube videos, Loom demos, or walkthrough clips.",
  },
  {
    name: "Thread",
    description: "Multi-card thread layout for storytelling or step-by-step breakdowns.",
    bestFor: "Developer tutorials, launch threads, and how-it-works explainers.",
  },
  {
    name: "Quote",
    description: "Large pull-quote card with author attribution and accent color.",
    bestFor: "Sharing testimonials, user feedback, or key insights from a talk.",
  },
  {
    name: "Announcement",
    description: "Bold launch card with headline, subtext, and a CTA badge.",
    bestFor: "Product launches, feature drops, and open-source releases.",
  },
  {
    name: "Testimonial",
    description: "Customer quote card with avatar, name, role, and company.",
    bestFor: "Social proof posts, case study headers, and landing page cards.",
  },
  {
    name: "Carousel",
    description: "Multi-slide layout with a consistent header and numbered pages.",
    bestFor: "LinkedIn carousels, educational series, and step-by-step guides.",
  },
  {
    name: "Before/After",
    description: "Two-panel comparison card showing a before and after state.",
    bestFor: "Code refactors, design improvements, and performance wins.",
  },
  {
    name: "Metrics",
    description: "Data card with key stats — replies, reposts, impressions, CTR, revenue.",
    bestFor: "Performance updates, monthly reviews, and growth milestone posts.",
  },
];

export const HOW_TO_STEPS: HowToStep[] = [
  {
    title: "Pick a template",
    body: "Open KromaStudio and switch to Content mode. Choose from 10 templates — Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, or Metrics.",
  },
  {
    title: "Customize text and author",
    body: "Edit the post text, author name, handle, and avatar. Set an accent color to match your brand. All edits are live on the canvas — no page reloads.",
  },
  {
    title: "Export as PNG or animated .webm",
    body: "Click Export for a high-resolution PNG at 1×, 2×, 3×, or 4× scale — ready to post on Twitter/X, LinkedIn, or attach to a Product Hunt launch. Or open Animate to render a Float, 3D Tilt, or Auto Scroll loop as .webm.",
  },
];

export const USE_CASES: UseCase[] = [
  {
    title: "Developer launch threads",
    body: "Combine an Announcement card for the hook, a Thread card for the breakdown, and a Metrics card for the traction update — all from one tool, all in a consistent style.",
  },
  {
    title: "Founder LinkedIn posts",
    body: "The LinkedIn template lets you turn a plain text update into a polished card with your name, avatar, and engagement stats — ready to post or embed in a newsletter.",
  },
  {
    title: "Open-source release posts",
    body: "Use the Announcement or Before/After template to show off a new feature, a performance win, or a code refactor. Export at 2× and attach to your release tweet.",
  },
  {
    title: "Repurposing testimonials and reviews",
    body: "Drop a customer quote into the Testimonial template, set your brand accent color, and export a PNG that works in landing pages, Product Hunt galleries, and social posts.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "What templates are available?",
    a: "10 templates: Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, and Metrics.",
  },
  {
    q: "Is the content post generator free?",
    a: "Yes. KromaStudio is completely free — no sign-up, no watermark, no export limits.",
  },
  {
    q: "Can I export animated social post videos?",
    a: "Yes. Open the Animate panel to render any content card as a looping Float, 3D Tilt, or Auto Scroll .webm — great for Twitter/X and LinkedIn feed videos.",
  },
  {
    q: "Does my content get uploaded to a server?",
    a: "No. KromaStudio runs 100% client-side. Your text, images, and exported files never leave your device.",
  },
  {
    q: "How is this different from Canva or Adobe Express?",
    a: "Canva and Adobe Express are broad design tools for general audiences. KromaStudio is purpose-built for developers and founders — with developer-specific templates (tweet cards, metrics, code + announcement combos), animated .webm export, and zero sign-up.",
  },
  {
    q: "Can I use my own avatar and brand colors?",
    a: "Yes. Upload a custom avatar (or use initials fallback), enter your handle and name, and set an accent color to match your brand palette.",
  },
  {
    q: "What resolution does the export PNG use?",
    a: "Choose from 1×, 2×, 3×, or 4× export scale. At 2× or 3× the card is sharp on Retina displays and social feed previews. At 4× it's print-ready.",
  },
  {
    q: "Can I create a Metrics card to show growth numbers?",
    a: "Yes. The Metrics template has editable fields for replies, reposts, likes, impressions, CTR, and revenue — fill in your numbers and export.",
  },
];

export const RELATED_TOOLS: RelatedTool[] = [
  {
    href: "/code-screenshot-generator",
    label: "Code Screenshot Generator",
    description: "Turn code snippets into beautiful syntax-highlighted images.",
  },
  {
    href: "/browser-mockup-generator",
    label: "Browser Mockup Generator",
    description: "Wrap screenshots in Chrome, Safari, Firefox, or macOS frames.",
  },
  {
    href: "/carbon-alternative",
    label: "KromaStudio vs Carbon",
    description: "Side-by-side comparison with Carbon.now.sh.",
  },
  {
    href: "/ray-so-alternative",
    label: "KromaStudio vs Ray.so",
    description: "Side-by-side comparison with Ray.so.",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    description: "Three-step guide to making scroll-stopping visuals.",
  },
];
