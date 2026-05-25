# Phase 3: Animation Loop & Video Export Engine (Days 15–21)

> **Goal:** The core differentiator. Turn static mockups into looping animated video clips, 100% client-side using Framer Motion + MediaRecorder API.

---

## Architecture Overview

```
┌─────────────────────────────────────────┐
│           Animation Controller           │
│  (Left Sidebar — Animation section)     │
├─────────────────────────────────────────┤
│  Preset: None / Float / Tilt / Scroll   │
│  Duration: 5s / 10s                     │
│  FPS: 60                                │
└────────────────┬────────────────────────┘
                 │ triggers
                 ▼
┌─────────────────────────────────────────┐
│         Framer Motion Canvas            │
│  (wraps BrowserFrame inside StudioCanvas│
├─────────────────────────────────────────┤
│  animate={{ y: [0, -12, 0] }}  Float   │
│  animate={{ rotateX, rotateY }}  Tilt  │
│  animate={{ y: 0 → -scrollH }}  Scroll │
└────────────────┬────────────────────────┘
                 │ captured by
                 ▼
┌─────────────────────────────────────────┐
│     MediaRecorder (captureStream 60fps) │
│  → compiles to .webm Blob               │
│  → instant browser download             │
└─────────────────────────────────────────┘
```

---

## 1. Framer Motion Animation Presets

### Dependencies
```bash
npm install framer-motion
```

### Preset: `subtle-float`
```ts
// Smooth up-down hovering loop — 3s cycle
animate={{ y: [0, -14, 0] }}
transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
```

### Preset: `3d-tilt`
```ts
// Slow automatic 3D perspective rotation
animate={{ rotateX: [0, 4, 0, -4, 0], rotateY: [0, 6, 0, -6, 0] }}
transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
// Wrap element in: style={{ perspective: 1000, transformStyle: "preserve-3d" }}
```

### Preset: `auto-scroll`
```ts
// Vertical scroll revealing long code — only active in Code Mode
// scrollHeight is measured from the CodeDisplay element
animate={{ y: [0, -scrollHeight + visibleHeight] }}
transition={{ duration: recordDuration, ease: "linear", repeat: Infinity }}
```

### Zustand State Additions
```ts
animationPreset: 'none' | 'float' | 'tilt' | 'scroll'
recordDuration: 5 | 10
setAnimationPreset: (p: AnimationPreset) => void
setRecordDuration: (d: 5 | 10) => void
```

---

## 2. Client-Side Video Recorder

### Hook: `useVideoRecorder.ts`

```ts
export function useVideoRecorder() {
  async function startRecording() {
    // 1. Get the canvas element (the actual <canvas> inside the DOM,
    //    or use html2canvas to render #studio-canvas to an offscreen canvas)
    const canvasEl = document.querySelector('#studio-canvas canvas') as HTMLCanvasElement
    
    // 2. Capture stream at 60 FPS
    const stream = canvasEl.captureStream(60)
    
    // 3. Start MediaRecorder
    const recorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
      videoBitsPerSecond: 8_000_000,
    })
    
    const chunks: Blob[] = []
    recorder.ondataavailable = (e) => chunks.push(e.data)
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `kromastudio-${Date.now()}.webm`
      a.click()
      URL.revokeObjectURL(url)
    }
    
    recorder.start()
    
    // 4. Auto-stop after selected duration
    setTimeout(() => recorder.stop(), recordDuration * 1000)
  }
  
  return { startRecording }
}
```

### Important Notes
- `captureStream()` only works on actual `<canvas>` elements. The DOM-based approach requires an intermediate step:
  - Option A: Use `html2canvas` to render `#studio-canvas` to an offscreen `<canvas>`, then capture that canvas. Re-render each animation frame via `requestAnimationFrame`.
  - Option B (preferred for quality): Use **`@remotion/renderer`** or **`ffmpeg.wasm`** for frame-accurate MP4 encoding.
- For Phase 3, implement Option A first (simpler), then upgrade to ffmpeg.wasm for MP4 in Phase 3.5.

### Loading Overlay During Recording
- Show a `RenderingOverlay` component when recording is active.
- Display: "Rendering Studio Quality Video..." with a progress bar.
- This is also the **Phase 4 ad placement zone** (high-visibility native ad slot).

---

## 3. Right Sidebar: Render Animated Video Button

Replace the Phase 3 placeholder in `RightSidebar.tsx`:

```tsx
<button onClick={startRecording} disabled={isRecording}>
  {isRecording ? 'Recording…' : 'Render Animated Video'}
</button>
<select> {/* Duration: 5s / 10s */} </select>
```

---

## Files to Create / Modify

```
components/
  canvas/
    AnimatedFrame.tsx       ← Framer Motion wrapper around BrowserFrame
    RenderingOverlay.tsx    ← Full-screen loading UI during video capture
  controls/
    AnimationControls.tsx   ← Preset selector + duration picker
hooks/
  useVideoRecorder.ts       ← MediaRecorder + stream capture logic
```

Modify `StudioCanvas.tsx` to wrap the inner frame with `AnimatedFrame` when `animationPreset !== 'none'`.
Modify `RightSidebar.tsx` to replace Phase 3 placeholder with the Render Video CTA.
