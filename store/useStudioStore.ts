"use client";

import { create } from "zustand";

export type AspectRatio = "1:1" | "16:9" | "9:16" | "free";
export type StudioMode = "mockup" | "code" | "content";
export type ContentTemplate =
  | "tweet"
  | "linkedin"
  | "video"
  | "thread"
  | "quote"
  | "announcement"
  | "testimonial"
  | "carousel"
  | "before-after"
  | "metrics";
export type HeadlinePosition = "top" | "bottom";
export type AnimationPreset = "none" | "float" | "tilt" | "scroll";
export type ScrollSpeed = "slow" | "normal" | "fast";
export type ChromeStyle = "macos-dark" | "macos-light" | "windows" | "minimal" | "none";

export interface ContentMetrics {
  reply: string;
  repost: string;
  like: string;
  bookmark: string;
  reactions: string;
  comments: string;
  impressions: string;
  ctr: string;
  leads: string;
  revenue: string;
}

export interface AspectRatioDimensions {
  width: number;
  height: number;
}

export const ASPECT_RATIO_DIMENSIONS: Record<AspectRatio, AspectRatioDimensions | null> = {
  "1:1": { width: 600, height: 600 },
  "16:9": { width: 800, height: 450 },
  "9:16": { width: 450, height: 800 },
  free: null,
};

export const CODE_LANGUAGES = [
  { id: "typescript", label: "TypeScript" },
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "go", label: "Go" },
  { id: "rust", label: "Rust" },
  { id: "java", label: "Java" },
  { id: "kotlin", label: "Kotlin" },
  { id: "swift", label: "Swift" },
  { id: "c", label: "C" },
  { id: "cpp", label: "C++" },
  { id: "csharp", label: "C#" },
  { id: "php", label: "PHP" },
  { id: "ruby", label: "Ruby" },
  { id: "bash", label: "Bash" },
  { id: "sql", label: "SQL" },
  { id: "json", label: "JSON" },
  { id: "yaml", label: "YAML" },
  { id: "jsx", label: "JSX" },
  { id: "tsx", label: "TSX" },
  { id: "vue", label: "Vue" },
  { id: "svelte", label: "Svelte" },
  { id: "docker", label: "Docker" },
  { id: "markdown", label: "Markdown" },
] as const;

export const CODE_THEMES = [
  { id: "dracula", label: "Dracula" },
  { id: "one-dark-pro", label: "One Dark Pro" },
  { id: "github-dark", label: "GitHub Dark" },
  { id: "night-owl", label: "Night Owl" },
  { id: "tokyo-night", label: "Tokyo Night" },
  { id: "catppuccin-mocha", label: "Catppuccin Mocha" },
  { id: "catppuccin-latte", label: "Catppuccin Latte" },
  { id: "nord", label: "Nord" },
  { id: "monokai", label: "Monokai" },
  { id: "synthwave-84", label: "Synthwave '84" },
  { id: "solarized-dark", label: "Solarized Dark" },
  { id: "rose-pine", label: "Rosé Pine" },
  { id: "material-theme-ocean", label: "Material Ocean" },
  { id: "vitesse-dark", label: "Vitesse Dark" },
  { id: "github-light", label: "GitHub Light" },
] as const;

export const CONTENT_TEMPLATES = [
  { id: "tweet", label: "Tweet" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "video", label: "Video" },
  { id: "thread", label: "Thread" },
  { id: "quote", label: "Quote" },
  { id: "announcement", label: "Announcement" },
  { id: "testimonial", label: "Testimonial" },
  { id: "carousel", label: "Carousel" },
  { id: "before-after", label: "Before/After" },
  { id: "metrics", label: "Metrics" },
] as const;

const DEFAULT_CODE = `// Paste your code here
function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`;

interface StudioState {
  // Canvas
  padding: number;
  borderRadius: number;
  shadowDepth: number;
  aspectRatio: AspectRatio;
  freeCanvasW: number;
  freeCanvasH: number;
  backgroundId: string;
  customBgFrom: string;
  customBgTo: string;
  uploadedImage: string | null;
  isExporting: boolean;
  watermarkVisible: boolean;
  showWatermarkModal: boolean;

  // Mode
  mode: StudioMode;

  // Code mode
  codeContent: string;
  codeLanguage: string;
  codeTheme: string;
  showLineNumbers: boolean;
  codeWrap: boolean;
  codeFontSize: number;

  // Content mode
  contentTemplate: ContentTemplate;
  contentText: string;
  contentAuthor: string;
  contentHandle: string;
  contentAvatarUrl: string | null;
  contentAccentColor: string;
  contentShowVerified: boolean;
  contentShowMetrics: boolean;
  contentMetrics: ContentMetrics;

  // Headline layer
  headlineEnabled: boolean;
  headlineText: string;
  headlineFontSize: number;
  headlineColor: string;
  headlinePosition: HeadlinePosition;

  // Canvas setters
  setPadding: (v: number) => void;
  setBorderRadius: (v: number) => void;
  setShadowDepth: (v: number) => void;
  setAspectRatio: (r: AspectRatio) => void;
  setFreeCanvasDims: (w: number, h: number) => void;
  setBackgroundId: (id: string) => void;
  setCustomBgFrom: (c: string) => void;
  setCustomBgTo: (c: string) => void;
  setUploadedImage: (url: string | null) => void;
  setIsExporting: (v: boolean) => void;
  setWatermarkVisible: (v: boolean) => void;
  setShowWatermarkModal: (v: boolean) => void;

  // Mode setters
  setMode: (m: StudioMode) => void;

  // Code setters
  setCodeContent: (c: string) => void;
  setCodeLanguage: (l: string) => void;
  setCodeTheme: (t: string) => void;
  toggleLineNumbers: () => void;
  toggleCodeWrap: () => void;
  setCodeFontSize: (s: number) => void;

  // Content setters
  setContentTemplate: (v: ContentTemplate) => void;
  setContentText: (v: string) => void;
  setContentAuthor: (v: string) => void;
  setContentHandle: (v: string) => void;
  setContentAvatarUrl: (v: string | null) => void;
  setContentAccentColor: (v: string) => void;
  setContentShowVerified: (v: boolean) => void;
  setContentShowMetrics: (v: boolean) => void;
  setContentMetrics: (patch: Partial<ContentMetrics>) => void;

  // Headline setters
  setHeadlineEnabled: (v: boolean) => void;
  setHeadlineText: (t: string) => void;
  setHeadlineFontSize: (s: number) => void;
  setHeadlineColor: (c: string) => void;
  setHeadlinePosition: (p: HeadlinePosition) => void;

  // Chrome style
  chromeStyle: ChromeStyle;
  setChromeStyle: (s: ChromeStyle) => void;

  // Animation
  animationPreset: AnimationPreset;
  recordDuration: 5 | 10;
  scrollSpeed: ScrollSpeed;
  isRecording: boolean;
  recordingProgress: number;

  // Animation setters
  setAnimationPreset: (p: AnimationPreset) => void;
  setRecordDuration: (d: 5 | 10) => void;
  setScrollSpeed: (s: ScrollSpeed) => void;
  setIsRecording: (v: boolean) => void;
  setRecordingProgress: (p: number) => void;
}

export const useStudioStore = create<StudioState>((set) => ({
  // Canvas defaults
  padding: 48,
  borderRadius: 16,
  shadowDepth: 60,
  aspectRatio: "16:9",
  freeCanvasW: 700,
  freeCanvasH: 500,
  backgroundId: "midnight",
  customBgFrom: "#a855f7",
  customBgTo: "#ec4899",
  uploadedImage: null,
  isExporting: false,
  watermarkVisible: true,
  showWatermarkModal: false,

  // Mode default
  mode: "mockup",

  // Code defaults
  codeContent: DEFAULT_CODE,
  codeLanguage: "typescript",
  codeTheme: "dracula",
  showLineNumbers: true,
  codeWrap: false,
  codeFontSize: 14,

  // Content defaults
  contentTemplate: "tweet",
  contentText: "Shipping a new content mode this week. Social cards now render directly in the studio with watermark-safe exports.",
  contentAuthor: "Kroma Team",
  contentHandle: "@kromastudio",
  contentAvatarUrl: null,
  contentAccentColor: "#a855f7",
  contentShowVerified: true,
  contentShowMetrics: true,
  contentMetrics: {
    reply: "42",
    repost: "128",
    like: "1.9K",
    bookmark: "67",
    reactions: "120",
    comments: "26",
    impressions: "124K",
    ctr: "8.4%",
    leads: "1,420",
    revenue: "$24.8K",
  },

  // Headline defaults
  headlineEnabled: false,
  headlineText: "How I optimized this UI in 30 minutes",
  headlineFontSize: 40,
  headlineColor: "#ffffff",
  headlinePosition: "top",

  // Chrome style default
  chromeStyle: "macos-dark",
  setChromeStyle: (s) => set({ chromeStyle: s }),

  // Animation defaults
  animationPreset: "none",
  recordDuration: 5,
  scrollSpeed: "normal",
  isRecording: false,
  recordingProgress: 0,

  // Canvas setters
  setPadding: (v) => set({ padding: v }),
  setBorderRadius: (v) => set({ borderRadius: v }),
  setShadowDepth: (v) => set({ shadowDepth: v }),
  setAspectRatio: (r) => set({ aspectRatio: r }),
  setFreeCanvasDims: (w, h) => set({ freeCanvasW: w, freeCanvasH: h }),
  setBackgroundId: (id) => set({ backgroundId: id }),
  setCustomBgFrom: (c) => set({ customBgFrom: c }),
  setCustomBgTo: (c) => set({ customBgTo: c }),
  setUploadedImage: (url) => set({ uploadedImage: url }),
  setIsExporting: (v) => set({ isExporting: v }),
  setWatermarkVisible: (v) => set({ watermarkVisible: v }),
  setShowWatermarkModal: (v) => set({ showWatermarkModal: v }),

  // Mode setters
  setMode: (m) => set({ mode: m }),

  // Code setters
  setCodeContent: (c) => set({ codeContent: c }),
  setCodeLanguage: (l) => set({ codeLanguage: l }),
  setCodeTheme: (t) => set({ codeTheme: t }),
  toggleLineNumbers: () => set((s) => ({ showLineNumbers: !s.showLineNumbers })),
  // When wrap turns ON, auto-disable line numbers — physical line numbers don't
  // correspond to visual rows when text wraps, which creates confusing gaps.
  // When wrap turns OFF, restore line numbers to whatever they were before.
  toggleCodeWrap: () => set((s) => ({
    codeWrap: !s.codeWrap,
    showLineNumbers: s.codeWrap ? s.showLineNumbers : false,
  })),
  setCodeFontSize: (s) => set({ codeFontSize: s }),

  // Content setters
  setContentTemplate: (v) => set({ contentTemplate: v }),
  setContentText: (v) => set({ contentText: v }),
  setContentAuthor: (v) => set({ contentAuthor: v }),
  setContentHandle: (v) => set({ contentHandle: v }),
  setContentAvatarUrl: (v) => set({ contentAvatarUrl: v }),
  setContentAccentColor: (v) => set({ contentAccentColor: v }),
  setContentShowVerified: (v) => set({ contentShowVerified: v }),
  setContentShowMetrics: (v) => set({ contentShowMetrics: v }),
  setContentMetrics: (patch) => set((s) => ({
    contentMetrics: {
      ...s.contentMetrics,
      ...patch,
    },
  })),

  // Headline setters
  setHeadlineEnabled: (v) => set({ headlineEnabled: v }),
  setHeadlineText: (t) => set({ headlineText: t }),
  setHeadlineFontSize: (s) => set({ headlineFontSize: s }),
  setHeadlineColor: (c) => set({ headlineColor: c }),
  setHeadlinePosition: (p) => set({ headlinePosition: p }),

  // Animation setters
  setAnimationPreset: (p) => set({ animationPreset: p }),
  setRecordDuration: (d) => set({ recordDuration: d }),
  setScrollSpeed: (s) => set({ scrollSpeed: s }),
  setIsRecording: (v) => set({ isRecording: v }),
  setRecordingProgress: (p) => set({ recordingProgress: p }),
}));

export function computeShadow(depth: number): string {
  if (depth === 0) return "none";
  const opacity = (depth / 100) * 0.9;
  const blur = (depth / 100) * 120;
  const spread = (depth / 100) * -10;
  return `0 ${blur * 0.33}px ${blur}px ${spread}px rgba(0,0,0,${opacity.toFixed(2)})`;
}

export function deriveAvatarInitials(name: string): string {
  const cleaned = name.trim().replace(/\s+/g, " ");
  if (!cleaned) return "KS";

  const parts = cleaned.split(" ");
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}
