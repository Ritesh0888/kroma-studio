# Phase 5: Content Mode & Social Post Generator

> **Goal:** Turn the existing `Content` mode teaser into a real social-content mockup editor for tweets, quotes, launch cards, and announcement posts.

---

## Why This Phase Exists

Phase 2 introduced `mode: 'mockup' | 'code' | 'content'` and added the `Content` tab in `ModeSelector`, but the product currently keeps it behind a `SOON` badge and email capture. This phase completes that deferred surface.

---

## 1. Content Mode Unlock

### Update `ModeSelector.tsx`
- Change `content` from `soon: true` to `soon: false`.
- Replace the `SOON` badge with `NEW` for the launch window.
- Track normal mode selection with `track("mode_click", { mode: "content", is_soon: false })`.

### Zustand State Additions
```ts
contentTemplate: "tweet" | "quote" | "announcement" | "testimonial"
contentText: string
contentAuthor: string
contentHandle: string
contentAvatarUrl: string | null
contentAccentColor: string
contentShowVerified: boolean
contentShowMetrics: boolean

setContentTemplate: (v: ContentTemplate) => void
setContentText: (v: string) => void
setContentAuthor: (v: string) => void
setContentHandle: (v: string) => void
setContentAvatarUrl: (v: string | null) => void
setContentAccentColor: (v: string) => void
setContentShowVerified: (v: boolean) => void
setContentShowMetrics: (v: boolean) => void
```

---

## 2. Canvas Rendering

### Component: `components/canvas/ContentDisplay.tsx`

Render inside `BrowserFrame` when `mode === "content"`.

Templates:
- **Tweet Card** — avatar, name, handle, text, optional verified badge, engagement row.
- **Quote Card** — large quote typography, author line, optional accent border.
- **Announcement Card** — headline, body, CTA-like footer text.
- **Testimonial Card** — quote, customer name, role/company.

Design requirements:
- Must render inside `#studio-canvas` so PNG and WebM exports capture it.
- Must work with all existing background presets, aspect ratios, frame padding, shadows, and watermark behavior.
- Must be readable at `1:1`, `16:9`, and `9:16`.
- Use existing project tokens where possible: `bg-surface`, `border-border`, `text-text-muted`, `text-neon-purple`.

---

## 3. Controls

### Component: `components/controls/ContentControls.tsx`

Desktop controls in `LeftSidebar`, mobile controls in `MobileControlSheet`.

Controls:
- Template selector.
- Main text textarea.
- Author/name input.
- Handle/subtitle input.
- Avatar upload or initials fallback.
- Accent color picker.
- Toggles for verified badge and metrics.

Mobile parity:
- Add content controls inside the existing `Code` tab or create a new `Content` tab if the sheet becomes crowded.
- Desktop and mobile should use the same `ContentControls` component.

---

## 4. Export & Viral Loop Integration

- Existing PNG export should work without changes because it captures `#studio-canvas`.
- Existing WebM recorder should work without changes because it snapshots the same DOM.
- Watermark reward flow from Phase 4 must apply to Content mode exports.
- Suggested export filenames can remain `kromastudio-{timestamp}.png` / `.webm`.

---

## 5. Analytics

Track:
- `content_template_select`
- `content_text_edit`
- `content_avatar_upload`
- `mode_click` for `content`
- Existing export/video events should include the current mode where practical.

---

## Files to Create / Modify

```
components/
  canvas/
    ContentDisplay.tsx       ← renders tweet/quote/announcement/testimonial cards
  controls/
    ContentControls.tsx      ← shared desktop/mobile content controls
components/
  canvas/
    BrowserFrame.tsx         ← render ContentDisplay when mode === "content"
  controls/
    ModeSelector.tsx         ← unlock Content mode
  layout/
    LeftSidebar.tsx          ← show ContentControls when mode === "content"
    MobileControlSheet.tsx   ← mobile parity for ContentControls
store/
  useStudioStore.ts          ← content template/text/author/avatar/accent state
```

---

## Verification Checklist

- Content mode can be selected on desktop and mobile.
- Each template renders correctly in `1:1`, `16:9`, `9:16`, and `free`.
- Long text wraps cleanly without overflowing the browser frame.
- PNG export captures content mode correctly.
- WebM export captures content mode correctly with existing animation presets where applicable.
- Watermark toggle/share-to-remove still works in content mode.
