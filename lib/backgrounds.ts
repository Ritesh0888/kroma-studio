export interface BackgroundPreset {
  id: string;
  label: string;
  css: string;
  previewFrom: string;
  previewTo: string;
}

export const BACKGROUND_PRESETS: BackgroundPreset[] = [
  {
    id: "midnight",
    label: "Midnight Purple",
    css: "linear-gradient(135deg, #0c0c1d, #1b1b3a, #a855f7)",
    previewFrom: "#0c0c1d",
    previewTo: "#a855f7",
  },
  {
    id: "cyberpunk",
    label: "Cyberpunk Neon",
    css: "linear-gradient(135deg, #0d0d0d, #1a0033, #00ffcc)",
    previewFrom: "#1a0033",
    previewTo: "#00ffcc",
  },
  {
    id: "synthwave",
    label: "Synthwave Dusk",
    css: "linear-gradient(135deg, #2d1b69, #11998e)",
    previewFrom: "#2d1b69",
    previewTo: "#11998e",
  },
  {
    id: "rose_galaxy",
    label: "Rose Galaxy",
    css: "linear-gradient(135deg, #1a1a2e, #16213e, #e94560)",
    previewFrom: "#16213e",
    previewTo: "#e94560",
  },
  {
    id: "aurora",
    label: "Aurora Borealis",
    css: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    previewFrom: "#0f2027",
    previewTo: "#2c5364",
  },
  {
    id: "glass",
    label: "Minimal Glass",
    css: "linear-gradient(135deg, #1c1c1e, #2c2c2e)",
    previewFrom: "#1c1c1e",
    previewTo: "#2c2c2e",
  },
  {
    id: "peach",
    label: "Peach Bloom",
    css: "linear-gradient(135deg, #f8cdda, #1d2b64)",
    previewFrom: "#f8cdda",
    previewTo: "#1d2b64",
  },
  {
    id: "matrix",
    label: "Matrix Rain",
    css: "linear-gradient(135deg, #000000, #003300)",
    previewFrom: "#001100",
    previewTo: "#003300",
  },
  {
    id: "neon_sunset",
    label: "Neon Sunset",
    css: "linear-gradient(135deg, #f953c6, #b91d73)",
    previewFrom: "#f953c6",
    previewTo: "#b91d73",
  },
  {
    id: "deep_ocean",
    label: "Deep Ocean",
    css: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #533483)",
    previewFrom: "#1a1a2e",
    previewTo: "#533483",
  },
  {
    id: "golden_hour",
    label: "Golden Hour",
    css: "linear-gradient(135deg, #f7971e, #ffd200)",
    previewFrom: "#f7971e",
    previewTo: "#ffd200",
  },
  {
    id: "void",
    label: "Void",
    css: "#000000",
    previewFrom: "#000000",
    previewTo: "#111111",
  },
];

export function getPresetById(id: string): BackgroundPreset {
  return (
    BACKGROUND_PRESETS.find((p) => p.id === id) ?? BACKGROUND_PRESETS[0]
  );
}
