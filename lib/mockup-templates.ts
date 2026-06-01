import type { AspectRatio, ChromeStyle, DeviceFrameType } from "@/store/useStudioStore";

export interface MockupTemplate {
  id: string;
  name: string;
  description: string;
  /** CSS used for the thumbnail swatch preview only */
  thumbCss: string;
  // Canvas settings
  backgroundId: string;
  chromeStyle: ChromeStyle;
  deviceFrame: DeviceFrameType;
  padding: number;
  shadowDepth: number;
  borderRadius: number;
  aspectRatio: AspectRatio;
}

export const MOCKUP_TEMPLATES: MockupTemplate[] = [
  {
    id: "product-hunt",
    name: "Product Hunt",
    description: "Dark launch card for PH posts",
    thumbCss: "linear-gradient(135deg, #0c0c1d, #a855f7)",
    backgroundId: "void",
    chromeStyle: "chrome",
    deviceFrame: "none",
    padding: 24,
    shadowDepth: 70,
    borderRadius: 16,
    aspectRatio: "16:9",
  },
  {
    id: "app-store",
    name: "App Store",
    description: "Portrait screenshot for app listings",
    thumbCss: "linear-gradient(135deg, #1a1a2e, #533483)",
    backgroundId: "deep_ocean",
    chromeStyle: "safari",
    deviceFrame: "none",
    padding: 16,
    shadowDepth: 80,
    borderRadius: 12,
    aspectRatio: "9:16",
  },
  {
    id: "macos-desktop",
    name: "macOS Desktop",
    description: "Classic Mac screenshot showcase",
    thumbCss: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
    backgroundId: "charcoal",
    chromeStyle: "macos-dark",
    deviceFrame: "none",
    padding: 32,
    shadowDepth: 60,
    borderRadius: 20,
    aspectRatio: "16:9",
  },
  {
    id: "mobile-preview",
    name: "Mobile Preview",
    description: "Pixel 3 device frame for mobile apps",
    thumbCss: "linear-gradient(135deg, #0c0c1d, #1b1b3a)",
    backgroundId: "midnight",
    chromeStyle: "none",
    deviceFrame: "pixel3",
    padding: 48,
    shadowDepth: 60,
    borderRadius: 0,
    aspectRatio: "9:16",
  },
  {
    id: "android-preview",
    name: "Android",
    description: "Pixel 3 frame for Android apps",
    thumbCss: "linear-gradient(135deg, #1a1a2e, #0f3460)",
    backgroundId: "deep_ocean",
    chromeStyle: "none",
    deviceFrame: "pixel3",
    padding: 48,
    shadowDepth: 60,
    borderRadius: 0,
    aspectRatio: "9:16",
  },
  {
    id: "ipad-showcase",
    name: "iPad Showcase",
    description: "Landscape tablet for SaaS dashboards",
    thumbCss: "linear-gradient(135deg, #0f2027, #2c5364)",
    backgroundId: "aurora",
    chromeStyle: "none",
    deviceFrame: "none",
    padding: 40,
    shadowDepth: 65,
    borderRadius: 0,
    aspectRatio: "16:9",
  },
  {
    id: "macbook-hero",
    name: "MacBook Hero",
    description: "Hero banner showcase",
    thumbCss: "linear-gradient(135deg, #2d1b69, #11998e)",
    backgroundId: "synthwave",
    chromeStyle: "none",
    deviceFrame: "none",
    padding: 32,
    shadowDepth: 70,
    borderRadius: 0,
    aspectRatio: "16:9",
  },
  {
    id: "minimal-white",
    name: "Minimal White",
    description: "Clean light background for light mode apps",
    thumbCss: "#f0f0f0",
    backgroundId: "light-gray",
    chromeStyle: "chrome",
    deviceFrame: "none",
    padding: 24,
    shadowDepth: 25,
    borderRadius: 12,
    aspectRatio: "16:9",
  },
  {
    id: "dark-arc",
    name: "Dark Arc",
    description: "Glass background with Arc browser frame",
    thumbCss: "linear-gradient(135deg, #1c1c1e, #2c2c2e)",
    backgroundId: "glass",
    chromeStyle: "arc",
    deviceFrame: "none",
    padding: 24,
    shadowDepth: 55,
    borderRadius: 16,
    aspectRatio: "16:9",
  },
];
