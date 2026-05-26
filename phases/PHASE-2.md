# Phase 2: Code Highlighting & Advanced Customization (Days 8–14)

> **Goal:** Build internal feature modes for the Center Canvas. Add Code Mode with live syntax highlighting, premium aesthetic presets, and a scroll-stopping headline layer.

---

## Mode Selector

Add a "Mode Selector" tab UI to the Left Sidebar with three modes:

| Mode | Icon | Description |
|------|------|-------------|
| `mockup` | 🖼 | Current Phase 1 image upload (default) |
| `code` | `</>` | Syntax-highlighted code editor |
| `content` | 📝 | Rich text / tweet mockup |

Store the active mode in Zustand: `mode: 'mockup' | 'code' | 'content'`

> **Deferred:** The `content` mode tab was added as a teaser/lead-capture surface only. The full rich text / tweet mockup editor is planned separately in `PHASE-5.md`.

---

## 1. Code Mode Integration

### Libraries
- **`shiki`** — zero-dependency, WASM-powered syntax highlighter. Use `createHighlighter` with `bundledLanguages` and `bundledThemes`.
- Fallback: **`prismjs`** if shiki WASM causes bundle issues.

### Supported Languages
- JavaScript / TypeScript
- Python
- HTML / CSS
- Go
- Rust (bonus)

### Theme Selector Dropdown
Replace image drop zone with a `<textarea>` (monospaced) and a rendered `<pre>` block inside the BrowserFrame:

| Theme ID | Display Name |
|----------|-------------|
| `dracula` | Dracula |
| `one-dark-pro` | One Dark Pro |
| `github-dark` | GitHub Dark |
| `night-owl` | Night Owl |
| `tokyo-night` | Tokyo Night |

### Implementation Notes
- `shiki` is async — initialise once at module level with `React.use()` or in a `useEffect` on mount.
- Render the highlighted HTML via `dangerouslySetInnerHTML` inside the browser frame content area.
- Line numbers: optional toggle in the left sidebar.
- Font: `font-mono` (Geist Mono already loaded), size selector 12px / 14px / 16px.

---

## 2. Aesthetic Background Presets (Expanded)

Add 4 more gradients beyond the Phase 1 set (total 12):

| id | Label | CSS |
|----|-------|-----|
| `neon_sunset` | Neon Sunset | `linear-gradient(135deg, #f953c6, #b91d73)` |
| `deep_ocean` | Deep Ocean | `linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #533483)` |
| `golden_hour` | Golden Hour | `linear-gradient(135deg, #f7971e, #ffd200)` |
| `void` | Void | `#000000` (solid black) |

---

## 3. Scroll-Stopping Headline Layer

Add an **optional editable text block** layered _above_ the BrowserFrame but _inside_ the `#studio-canvas` gradient background.

### Zustand State Additions
```ts
headlineText: string          // default: ''
headlineEnabled: boolean      // default: false
headlineFontSize: number      // 24–72px, default 40
headlineColor: string         // default: '#ffffff'
headlinePosition: 'top' | 'bottom'  // default: 'top'
```

### Component: `HeadlineLayer.tsx`
- Renders as an absolutely positioned `contentEditable` div inside `StudioCanvas`.
- Font: bold, white, `font-sans`.
- Toggle button in Left Sidebar: "Add Headline".
- When `headlineEnabled` is true, the BrowserFrame shifts down slightly (CSS `translateY`) to make room.

### Example Headlines
```
How I optimized this UI in 30 minutes
This code pattern changed everything
The cleanest API design I've seen
```

---

## Zustand Store Additions for Phase 2

```ts
// Mode
mode: 'mockup' | 'code' | 'content'
setMode: (m: Mode) => void

// Code
codeContent: string
setCodeContent: (c: string) => void
codeLanguage: string
setCodeLanguage: (l: string) => void
codeTheme: string
setCodeTheme: (t: string) => void
showLineNumbers: boolean
toggleLineNumbers: () => void
codeFontSize: number
setCodeFontSize: (s: number) => void

// Headline
headlineEnabled: boolean
headlineText: string
headlineFontSize: number
headlineColor: string
headlinePosition: 'top' | 'bottom'
setHeadlineEnabled: (v: boolean) => void
setHeadlineText: (t: string) => void
setHeadlineFontSize: (s: number) => void
setHeadlineColor: (c: string) => void
setHeadlinePosition: (p: 'top' | 'bottom') => void
```

---

## Files to Create / Modify

```
components/
  canvas/
    CodeDisplay.tsx         ← shiki-rendered code block
    HeadlineLayer.tsx       ← editable headline overlay
  controls/
    ModeSelector.tsx        ← Tab switcher: Mockup / Code / Content
    CodeControls.tsx        ← Language, theme, font size, line numbers
    HeadlineControls.tsx    ← Toggle, text, size, color, position
```

Modify `BrowserFrame.tsx` to conditionally render `ImageDropzone` or `CodeDisplay` based on `mode`.
Modify `StudioCanvas.tsx` to include `HeadlineLayer` when `headlineEnabled`.
