"use client";

import { create } from "zustand";

export type AspectRatio = "1:1" | "16:9" | "9:16" | "free";

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

interface StudioState {
  padding: number;
  borderRadius: number;
  shadowDepth: number;
  aspectRatio: AspectRatio;
  backgroundId: string;
  customBgFrom: string;
  customBgTo: string;
  uploadedImage: string | null;
  isExporting: boolean;

  setPadding: (v: number) => void;
  setBorderRadius: (v: number) => void;
  setShadowDepth: (v: number) => void;
  setAspectRatio: (r: AspectRatio) => void;
  setBackgroundId: (id: string) => void;
  setCustomBgFrom: (c: string) => void;
  setCustomBgTo: (c: string) => void;
  setUploadedImage: (url: string | null) => void;
  setIsExporting: (v: boolean) => void;
}

export const useStudioStore = create<StudioState>((set) => ({
  padding: 48,
  borderRadius: 16,
  shadowDepth: 60,
  aspectRatio: "16:9",
  backgroundId: "midnight",
  customBgFrom: "#a855f7",
  customBgTo: "#ec4899",
  uploadedImage: null,
  isExporting: false,

  setPadding: (v) => set({ padding: v }),
  setBorderRadius: (v) => set({ borderRadius: v }),
  setShadowDepth: (v) => set({ shadowDepth: v }),
  setAspectRatio: (r) => set({ aspectRatio: r }),
  setBackgroundId: (id) => set({ backgroundId: id }),
  setCustomBgFrom: (c) => set({ customBgFrom: c }),
  setCustomBgTo: (c) => set({ customBgTo: c }),
  setUploadedImage: (url) => set({ uploadedImage: url }),
  setIsExporting: (v) => set({ isExporting: v }),
}));

export function computeShadow(depth: number): string {
  if (depth === 0) return "none";
  const opacity = (depth / 100) * 0.9;
  const blur = (depth / 100) * 120;
  const spread = (depth / 100) * -10;
  return `0 ${blur * 0.33}px ${blur}px ${spread}px rgba(0,0,0,${opacity.toFixed(2)})`;
}
