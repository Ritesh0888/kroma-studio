# Phase 3: Animation Loop & Video Export Engine (Days 15–21)

> **Status: COMPLETE** — shipped on `phase-3` branch, PR merged to `main`.
>
> **Goal:** The core differentiator. Turn static mockups into looping animated video clips, 100% client-side using Framer Motion + MediaRecorder API.

---

## Architecture Overview

```
┌─────────────────────────────────────────┐
│           Animation Controller           │
│  (Left Sidebar — AnimationControls)     │
├─────────────────────────────────────────┤
│  Preset: None / Float / Tilt / Scroll   │
│  Duration: 5s / 10s                     │
└────────────────┬────────────────────────┘
                 │ writes Zustand
                 ▼
┌─────────────────────────────────────────┐
│         Framer Motion Canvas            │
│  AnimatedFrame.tsx wraps BrowserFrame   │
├─────────────────────────────────────────┤
│  float  → animate={{ y: [0, -14, 0] }} │
│  tilt   → animate={{ rotateX, rotateY }}│
│  scroll → measures #code-display DOM   │
│           y: [0, -scrollDist, 0]        │
└────────────────┬────────────────────────┘
                 │ captured by
                 ▼
┌─────────────────────────────────────────┐
│     useVideoRecorder hook               │
│  html-to-image toCanvas (pixelRatio:2) │
│  → offscreen <canvas> 2× Retina        │
│  → captureStream(60fps)                 │
│  → MediaRecorder (vp9/vp8/webm)         │
│  → progress → Zustand recordingProgress│
│  → .webm Blob → instant download       │
└────────────────┬────────────────────────┘
                 │ while recording
                 ▼
┌─────────────────────────────────────────┐
│     RenderingOverlay (fixed z-50)       │
│  "Generating Studio Quality Video…"     │
│  progress bar reads recordingProgress  │
│  Phase 4 ad slot reserved (hidden)     │
└─────────────────────────────────────────┘
```

---

## 1. Framer Motion Animation Presets

### Installed dependency
```bash
npm install framer-motion
```

### Preset: `float`
```ts
animate={{ y: [0, -14, 0] }}
transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
```

### Preset: `tilt`
```ts
animate={{ rotateX: [0, 4, 0, -4, 0], rotateY: [0, 6, 0, -6, 0] }}
transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
style={{ perspective: 1000, transformStyle: "preserve-3d" }}
```

### Preset: `scroll`
```ts
// Measures actual DOM overflow of #code-display at mount via ResizeObserver
// Falls back to no movement if content fits in viewport
animate={{ y: scrollDist > 0 ? [0, -scrollDist, 0] : 0 }}
transition={{ duration: recordDuration, repeat: Infinity, ease: "linear" }}
```

### Zustand State Additions
```ts
animationPreset: 'none' | 'float' | 'tilt' | 'scroll'  // default: 'none'
recordDuration:  5 | 10                                  // default: 5
isRecording:     boolean                                 // default: false
recordingProgress: number                                // 0–100, default: 0

setAnimationPreset:    (p: AnimationPreset) => void
setRecordDuration:     (d: 5 | 10) => void
setIsRecording:        (v: boolean) => void
setRecordingProgress:  (p: number) => void
```

---

## 2. Client-Side Video Recorder

### Hook: `hooks/useVideoRecorder.ts`

Key implementation details:
- Grabs `#studio-canvas` DOM node
- First snapshot uses `html-to-image` `toCanvas(node, { pixelRatio: 2 })` — Retina 2× quality
- Offscreen `<canvas>` is sized to the 2× snapshot dimensions
- `captureStream(60)` feeds a `MediaRecorder` with `vp9` codec at `8 Mbps`
- rAF loop re-snapshots at `pixelRatio: 2` every frame; calls `setRecordingProgress` with `elapsed / total * 100`
- Auto-stops after `recordDuration` seconds; downloads as `kromastudio-{timestamp}.webm`
- Double-start guard: `if (recorderRef.current) return`
- Full error handling: `MediaRecorder.onerror`, try/catch, analytics events on start/complete/error

### Loading Overlay: `components/canvas/RenderingOverlay.tsx`
- Rendered in `CenterPanel` **outside** the `transform: scale()` wrapper (important — `position:fixed` inside a CSS transform is NOT viewport-fixed)
- Reads `recordingProgress` directly from Zustand — no local state timers
- Shows "Generating Studio Quality Video…" with a progress bar
- Phase 4 ad placement zone is reserved (invisible `opacity-0` element)

---

## 3. UI Components

### `components/controls/AnimationControls.tsx`
- Preset selector: None / Subtle Float / 3D Tilt / Auto Scroll
- Auto Scroll hidden in non-code modes (surfaces when `mode === 'code'` OR preset already set to scroll)
- Duration picker: 5s / 10s — only shown when a preset is active
- Tracks `animation_preset_select` analytics event

### Right Sidebar (Desktop)
- `AnimationControls` replaces the old SOON teaser
- "Render Animated Video" button: active when `animationPreset !== 'none'`, disabled during recording
- Shows `{recordDuration}s loop · 60fps · .webm · client-side` hint text

### Mobile (MobileControlSheet — Animate tab)
- Same `AnimationControls` component — full parity with desktop
- Render Animated Video button with same logic

---

## Files Created

```
components/
  canvas/
    AnimatedFrame.tsx       ← Framer Motion wrapper (float / tilt / scroll)
    RenderingOverlay.tsx    ← Full-screen progress UI during recording
  controls/
    AnimationControls.tsx   ← Preset selector + duration picker
  ui/
    CanvasErrorBoundary.tsx ← Class-based React error boundary for StudioCanvas
hooks/
  useVideoRecorder.ts       ← MediaRecorder + 2× Retina capture + progress
app/
  error.tsx                 ← Route-level branded error page
public/
  manifest.webmanifest      ← PWA manifest (Add to Home Screen)
```

## Files Modified

```
store/useStudioStore.ts           ← animationPreset, recordDuration, isRecording,
                                     recordingProgress + setters
components/canvas/StudioCanvas.tsx ← AnimatedFrame wraps BrowserFrame
components/canvas/CodeDisplay.tsx  ← id="code-display" for scroll measurement
components/layout/CenterPanel.tsx  ← CanvasErrorBoundary + RenderingOverlay (outside scale wrapper)
components/layout/LeftSidebar.tsx  ← AnimationTeaser → AnimationControls; footer updated
components/layout/RightSidebar.tsx ← Real Render button + AnimationControls
components/layout/MobileControlSheet.tsx ← Animate tab rebuilt with real controls
components/layout/MobileHeader.tsx ← Mobile export analytics fix (source: "mobile")
components/layout/MobileAdFooter.tsx ← safe-area-inset-bottom padding
app/layout.tsx                     ← viewport export, themeColor, manifest link
app/not-found.tsx                  ← page-specific metadata
```

---

## SEO & Mobile Improvements (shipped with Phase 3)

- `export const viewport: Viewport` with `viewportFit: "cover"` + `themeColor: "#080808"` — explicit instead of relying on Next.js defaults
- `manifest: "/manifest.webmanifest"` for PWA "Add to Home Screen"
- `app/not-found.tsx` — page-specific title/description added
- `MobileHeader` export click now tracks `source: "mobile"` (was missing)
- `MobileAdFooter` — `padding-bottom: env(safe-area-inset-bottom)` for notched iPhones
- JSON-LD featureList updated with animated video capability

---

## Phase 4 Hooks (Left Ready)

- `RenderingOverlay` has an invisible `opacity-0` div reserved for a Phase 4 native ad placement
- Ad zone is full-screen, high-visibility, zero CLS impact
