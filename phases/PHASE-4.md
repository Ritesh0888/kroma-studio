# Phase 4: Monetization Integration & Viral Launch Plan (Days 22–30)

> **Goal:** Finalize for production launch with high-intent ad placements, a watermark reward system, and viral growth loops.

---

## 1. Auto-Refresh Ad Zones

### Hook: `useAutoRefreshAds.ts`

```ts
'use client'
import { useEffect } from 'react'

export function useAutoRefreshAds(containerIds: string[], intervalMs = 45_000) {
  useEffect(() => {
    const refresh = () => {
      containerIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        // Push new ad unit to AdSense / Ezoic
        if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
          // Remove and re-insert the <ins> tag to trigger a fresh request
          const ins = el.querySelector('ins.adsbygoogle')
          if (ins) {
            el.innerHTML = el.innerHTML // reset
            ;(window as any).adsbygoogle.push({})
          }
        }
      })
    }

    const timer = setInterval(refresh, intervalMs)
    return () => clearInterval(timer)
  }, [containerIds, intervalMs])
}
```

### Ad Zone Container IDs
- `ad-right-sidebar-top` — 300×250 display (Right Sidebar, above fold)
- `ad-right-sidebar-bottom` — 300×600 large rectangle (Right Sidebar, below fold)
- `ad-footer` — 728×90 leaderboard (Bottom Footer bar)

### AdSense Script Integration (`app/layout.tsx`)
```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

### Ezoic Alternative
Replace AdSense with Ezoic's `<ez-ad-unit>` custom element for higher RPM. Works identically with the `useAutoRefreshAds` hook.

---

## 2. High-CTR Video Loader Ad

### Component: `RenderingOverlay.tsx` (extends Phase 3)

When recording is active, show a full-viewport overlay:

```tsx
<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur flex flex-col items-center justify-center gap-6">
  {/* Premium loading animation */}
  <div className="relative">
    <div className="w-24 h-24 rounded-full border-4 border-[#a855f7]/20 border-t-[#a855f7] animate-spin" />
    <div className="absolute inset-0 flex items-center justify-center">
      <svg ...>{/* Video camera icon */}</svg>
    </div>
  </div>
  
  <div className="text-center">
    <h2>Rendering Studio Quality Video...</h2>
    <p>Encoding at 60fps · WebM/VP9</p>
    {/* Progress bar synced to recordDuration */}
    <ProgressBar duration={recordDuration} />
  </div>

  {/* HIGH-VISIBILITY AD PLACEMENT — 100% eyesight capture */}
  <div className="mt-4 rounded-2xl overflow-hidden border border-white/5">
    <ins
      className="adsbygoogle"
      style={{ display: 'block', width: 336, height: 280 }}
      data-ad-slot="XXXXXXXXXX"
    />
  </div>
  
  <p className="text-xs text-white/30">
    Your download will begin automatically
  </p>
</div>
```

**Rationale:** During the 5–10 second encoding window, user has nothing to do. 100% attention is on the overlay → highest possible CTR for the embedded ad unit.

---

## 3. Watermark Reward System

### Current Watermark (Phase 1)
`via KromaStudio` — subtle, bottom-right corner of `#studio-canvas`.

### Zustand State Additions
```ts
watermarkVisible: boolean   // default: true
setWatermarkVisible: (v: boolean) => void
```

### Toggle Button in RightSidebar
```tsx
<button onClick={() => {
  if (watermarkVisible) setShowWatermarkModal(true)
  else setWatermarkVisible(true)
}}>
  {watermarkVisible ? '✓ Watermark On' : 'Remove Watermark'}
</button>
```

### Reward Modal: `WatermarkModal.tsx`

```tsx
<Modal>
  <h2>Remove Watermark for Free</h2>
  <p>Share KromaStudio on social media to unlock watermark-free exports.</p>
  
  <div className="flex flex-col gap-3">
    {/* Twitter / X */}
    <a
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        'Just created a 🔥 browser mockup with @KromaStudio — 100% free & client-side!\n\nkromastudio.online'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        setWatermarkVisible(false)
        setShowWatermarkModal(false)
      }}
      className="btn-twitter"
    >
      Share on X (Twitter) to Remove
    </a>
    
    {/* LinkedIn */}
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        'https://kromastudio.online'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        setWatermarkVisible(false)
        setShowWatermarkModal(false)
      }}
      className="btn-linkedin"
    >
      Share on LinkedIn to Remove
    </a>
  </div>
  
  <p className="text-xs text-muted">
    We trust you — clicking opens the share intent. No verification needed.
  </p>
</Modal>
```

---

## 4. SEO & Virality Setup

### Meta Tags (`app/layout.tsx`)
```tsx
openGraph: {
  title: 'KromaStudio — Free Browser Mockup Generator',
  description: 'Turn screenshots & code into premium aesthetic images and looping videos. 100% free, zero sign-up, runs in your browser.',
  url: 'https://kromastudio.online',
  images: [{ url: '/og-image.png', width: 1200, height: 630 }],
}
twitter: {
  card: 'summary_large_image',
  site: '@KromaStudio',
  creator: '@KromaStudio',
}
```

### Viral Loops
1. **Watermark Reward** — Every exported image promotes the brand passively.
2. **Share-to-Remove** — Active social sharing tied to watermark removal.
3. **"Made with KromaStudio" badge** — Optional clickable badge overlay (links to homepage).
4. **Export filename** — `kromastudio-{timestamp}.png` keeps brand in user's file system.

---

## Files to Create / Modify

```
components/
  ads/
    AdZone.tsx              ← Reusable AdSense/Ezoic slot component
    FooterAdBar.tsx         ← 728×90 leaderboard footer
  modals/
    WatermarkModal.tsx      ← Share-to-remove flow
  overlays/
    RenderingOverlay.tsx    ← Video encoding overlay with inline ad
hooks/
  useAutoRefreshAds.ts      ← 45-second programmatic ad refresh
app/
  layout.tsx                ← AdSense script, OG meta tags
```

Modify `StudioCanvas.tsx` to read `watermarkVisible` from store.
Modify `RightSidebar.tsx` to add watermark toggle + ad zone containers with correct IDs.
Add `FooterAdBar` to `app/page.tsx` below the three-column layout.
