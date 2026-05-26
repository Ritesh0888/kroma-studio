"use client";

import { create } from "zustand";

export type AspectRatio = "1:1" | "16:9" | "9:16" | "free";
export type StudioMode = "mockup" | "code" | "content";
export type HeadlinePosition = "top" | "bottom";
export type AnimationPreset = "none" | "float" | "tilt" | "scroll";
export type ScrollSpeed = "slow" | "normal" | "fast";
export type ChromeStyle = "macos-dark" | "macos-light" | "windows" | "minimal" | "none";

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
] as const;

export const CODE_THEMES = [
  { id: "dracula", label: "Dracula" },
  { id: "one-dark-pro", label: "One Dark Pro" },
  { id: "github-dark", label: "GitHub Dark" },
  { id: "night-owl", label: "Night Owl" },
  { id: "tokyo-night", label: "Tokyo Night" },
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
  backgroundId: string;
  customBgFrom: string;
  customBgTo: string;
  uploadedImage: string | null;
  isExporting: boolean;

  // Mode
  mode: StudioMode;

  // Code mode
  codeContent: string;
  codeLanguage: string;
  codeTheme: string;
  showLineNumbers: boolean;
  codeWrap: boolean;
  codeFontSize: number;

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
  setBackgroundId: (id: string) => void;
  setCustomBgFrom: (c: string) => void;
  setCustomBgTo: (c: string) => void;
  setUploadedImage: (url: string | null) => void;
  setIsExporting: (v: boolean) => void;

  // Mode setters
  setMode: (m: StudioMode) => void;

  // Code setters
  setCodeContent: (c: string) => void;
  setCodeLanguage: (l: string) => void;
  setCodeTheme: (t: string) => void;
  toggleLineNumbers: () => void;
  toggleCodeWrap: () => void;
  setCodeFontSize: (s: number) => void;

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
  backgroundId: "midnight",
  customBgFrom: "#a855f7",
  customBgTo: "#ec4899",
  uploadedImage: null,
  isExporting: false,

  // Mode default
  mode: "mockup",

  // Code defaults
  codeContent: DEFAULT_CODE,
  codeLanguage: "typescript",
  codeTheme: "dracula",
  showLineNumbers: true,
  codeWrap: false,
  codeFontSize: 14,

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
  setBackgroundId: (id) => set({ backgroundId: id }),
  setCustomBgFrom: (c) => set({ customBgFrom: c }),
  setCustomBgTo: (c) => set({ customBgTo: c }),
  setUploadedImage: (url) => set({ uploadedImage: url }),
  setIsExporting: (v) => set({ isExporting: v }),

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
