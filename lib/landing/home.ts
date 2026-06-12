import type { StudioMode } from "@/store/useStudioStore";

export type ProductTabIcon = "code" | "browser" | "content" | "animated";

export type ProductTab = {
  id: string;
  label: string;
  icon: ProductTabIcon;
  headline: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
  ctaHref: string;
  ctaLabel: string;
  studioMode?: StudioMode;
};

export type FeatureSlide = {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
};

export type Pillar = {
  id: string;
  icon: "client-side" | "vscode" | "free";
  title: string;
  description: string;
};

export const HERO = {
  eyebrow: "Free · Client-side · No sign-up",
  headline: "Built for developers who ship scroll-stopping code visuals",
  subcopy:
    "Turn plain code into aesthetic screenshots, browser mockups, social post cards, and animated .webm loops — all in your browser. Your code never leaves your device.",
  trustBadges: [
    "15 syntax themes",
    "HD PNG & .webm export",
    "VS Code extension",
    "100% client-side",
  ] as const,
};

export const PRODUCT_TABS: ProductTab[] = [
  {
    id: "code",
    label: "Code Screenshots",
    icon: "code",
    headline: "Beautiful code snippets in seconds",
    description:
      "Paste code, pick a Dracula or Tokyo Night theme, add a gradient background, and export a polished PNG — no Carbon tab required.",
    screenshot: "/screenshots/code-snippet.png",
    screenshotAlt: "Syntax-highlighted code screenshot with gradient background",
    ctaHref: "/code-screenshot-generator",
    ctaLabel: "Explore code screenshots",
    studioMode: "code",
  },
  {
    id: "mockup",
    label: "Browser Mockups",
    icon: "browser",
    headline: "Wrap screenshots in premium browser frames",
    description:
      "Chrome, Safari, Firefox, macOS, and more. Add shadows, gradients, and export launch-ready mockups for READMEs and landing pages.",
    screenshot: "/screenshots/mockup-mode-macos.png",
    screenshotAlt: "macOS browser mockup with gradient background",
    ctaHref: "/browser-mockup-generator",
    ctaLabel: "Explore browser mockups",
    studioMode: "mockup",
  },
  {
    id: "content",
    label: "Content Posts",
    icon: "content",
    headline: "Social-ready post cards for LinkedIn and X",
    description:
      "Tweet cards, LinkedIn posts, metrics snapshots, and announcement templates — sized and styled for developer social feeds.",
    screenshot: "/screenshots/content-mode-linkedin.png",
    screenshotAlt: "LinkedIn-style developer content post card",
    ctaHref: "/content-post-generator",
    ctaLabel: "Explore content posts",
    studioMode: "content",
  },
  {
    id: "animated",
    label: "Animated Export",
    icon: "animated",
    headline: "Looping .webm videos from your code",
    description:
      "Float, 3D Tilt, and Auto Scroll presets turn static snippets into eye-catching motion for demos, reels, and launch threads.",
    screenshot: "/screenshots/video.png",
    screenshotAlt: "Animated code screenshot with 3D tilt effect",
    ctaHref: "/animated-code-screenshot",
    ctaLabel: "Explore animated export",
    studioMode: "code",
  },
];

export const FEATURE_CAROUSEL: FeatureSlide[] = [
  {
    id: "vscode",
    title: "VS Code handoff",
    description:
      "Select code in VS Code, open in KromaStudio with one click — syntax and language preserved.",
    screenshot: "/screenshots/vscode-after-kroma-studio.png",
    screenshotAlt: "VS Code extension opening code in KromaStudio",
  },
  {
    id: "themes",
    title: "15 syntax themes",
    description:
      "Dracula, Catppuccin, Nord, Monokai, Tokyo Night, Synthwave '84, Rosé Pine, and more — switch instantly.",
    screenshot: "/screenshots/code-mode-dark.png",
    screenshotAlt: "Code screenshot with dark syntax theme",
  },
  {
    id: "gradients",
    title: "12 gradient backgrounds",
    description:
      "Aesthetic presets plus solid colors and image uploads with noise overlay for a polished look.",
    screenshot: "/screenshots/gradient-backgrounds.png",
    screenshotAlt: "Gradient background presets in KromaStudio",
  },
  {
    id: "export",
    title: "HD PNG export",
    description:
      "Export at 1×, 2×, 3×, or 4× resolution. Transparent PNGs for mockups and presentations.",
    screenshot: "/screenshots/code-snippet.png",
    screenshotAlt: "High-resolution code screenshot export",
  },
  {
    id: "video",
    title: "Animated .webm loops",
    description:
      "60fps looping video with Float, 3D Tilt, and Auto Scroll — no watermarks, no account.",
    screenshot: "/screenshots/video.png",
    screenshotAlt: "Animated code video export preview",
  },
  {
    id: "privacy",
    title: "100% client-side",
    description:
      "Your code and images are processed locally. Nothing is uploaded to our servers.",
    screenshot: "/screenshots/vscode-before-selection.png",
    screenshotAlt: "Code selection in VS Code before export",
  },
];

export const PILLARS: Pillar[] = [
  {
    id: "client-side",
    icon: "client-side",
    title: "100% client-side",
    description:
      "Your code never leaves your browser. Zero uploads, no server rendering — safe for proprietary code.",
  },
  {
    id: "vscode",
    icon: "vscode",
    title: "VS Code extension",
    description:
      "Capture a selection and hand off to the browser studio with syntax and language intact.",
  },
  {
    id: "free",
    icon: "free",
    title: "Free, no watermarks",
    description:
      "HD PNG and animated .webm export with no paywall, no sign-up, and no branding on your visuals.",
  },
];

export const CTA_BLOCKS = {
  developer: {
    eyebrow: "For developers",
    headline: "Achieve new heights",
    body: "Open the studio, paste your code, and export a share-ready visual in under a minute.",
    primaryLabel: "Open Studio",
    primaryHref: "/",
    secondaryLabel: "See how it works",
    secondaryHref: "/how-it-works",
  },
  extension: {
    eyebrow: "For your workflow",
    headline: "From editor to export",
    body: "Install the VS Code extension and skip the copy-paste step entirely.",
    primaryLabel: "Install VS Code Extension",
    primaryHref: "vscode",
  },
} as const;
