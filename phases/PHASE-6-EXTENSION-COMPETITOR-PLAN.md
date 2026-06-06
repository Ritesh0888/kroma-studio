# Phase 6: VS Code Extension Competitive Execution Plan

> Goal: Build a VS Code extension for KromaStudio that matches screenshot-tool speed and beats competitors on creator workflow, reliability, and repeat usage.

---

## Scope Guardrails

- Do not create external GitHub issues as part of this phase.
- Build Kroma-owned capabilities first.
- Ship fast with URL handoff flow before investing in heavy embedded preview architecture.

---

## Phase 0 (Day 0-2): Positioning and Success Definition

### Objectives

- Freeze one-line positioning:
  - From selected code to share-ready assets in one flow.
- Define v1 boundaries to avoid overbuild.
- Lock measurement before implementation.

### Deliverables

- Final value proposition statement.
- v1 non-goals list.
- KPI baseline sheet.

### KPIs

- Activation rate: first command run after install.
- Handoff success rate: extension command to successful Kroma route open.
- Completion rate: route opened to export intent completion.

### Exit Criteria

- Team agrees on scope, non-goals, and first 3 KPIs.

---

## Phase 1 (Week 1): MVP Capture and Handoff

### Objectives

- Launch a reliable extension flow quickly.
- Mirror the proven Carbon-style fast workflow.

### Feature Set

1. Commands
- Capture selection as Kroma.
- Capture current file as Kroma.
- Open Kroma studio.

2. Entry points
- Command palette.
- Editor context menu.
- Optional keybinding.

3. URL payload contract
- code
- language
- title
- theme seed
- mode intent

4. Fallback behavior
- Empty selection warning and fallback path.
- Safe encoding for multiline and special characters.
- Large snippet handling with user notice.

5. Settings
- Default theme.
- Default background preset.
- Preferred open mode.

### Technical Dependencies

- Kroma route hydration on code generator entry.
- Zustand mapping for incoming payload defaults.

### Exit Criteria

- End-to-end flow works from selection to rendered Kroma screen in under 10 seconds median on local test setup.

---

## Phase 2 (Week 2): Competitor-Pain Fix Pack

### Why This Phase

Competitor open issues repeatedly highlight clipboard friction, selection edge-case failures, and language support gaps.

### Feature Set

1. Clipboard-first workflow
- Copy image oriented flow support after handoff.
- Reduce save-file-only friction.

2. Multi-cursor and non-contiguous selection support
- Prevent blank-output class failures.

3. Language reliability
- Improve language-id mapping.
- Add Svelte and uncommon id fallbacks.

4. Smart export naming defaults
- File/symbol/date naming template.

5. API compatibility hardening
- Keep architecture aligned with modern VS Code webview/resource expectations.

### Exit Criteria

- No regressions on multi-cursor capture tests.
- Non-standard language ids degrade gracefully.
- Clipboard-focused path validated.

---

## Phase 3 (Week 3-4): Differentiation Layer

### Objectives

Move from screenshot utility to creator workflow product.

### Feature Set

1. Social outcome presets
- X thread snippet preset.
- LinkedIn post preset.
- README asset preset.

2. Highlight semantics
- Focus/add/remove style intent.

3. Quick productivity actions
- Reopen last session.
- Jump to animated mode directly.
- Open mockup mode from image context.

4. Trust messaging
- Client-side rendering mode badge and short explanation.

### Exit Criteria

- Users can generate differentiated outputs beyond static screenshot workflows.

---

## Phase 4 (Week 5-6): Retention and Team Adoption

### Objectives

Improve repeat usage and team-level consistency.

### Feature Set

1. Workspace preset packs
- Import/export style presets as JSON.

2. Onboarding checklist
- Install -> select code -> choose preset -> export.

3. Telemetry refinement
- Validate event taxonomy with first cohort behavior.

4. In-extension feedback command
- Capture top pain points without issue automation.

### Exit Criteria

- 7-day repeat usage improves versus Phase 1 baseline.

---

## Phase 5 (Week 7+): Launch and Defensibility

### Objectives

Scale distribution and build product moat.

### Launch Sequence

1. Private VSIX alpha.
2. Closed beta.
3. Public Marketplace release.

### Marketplace Positioning

- Not just code screenshots.
- Screenshots + mockups + motion-ready creator outcomes.

### Iteration Cadence

- Weekly top-3 friction fixes.
- Monthly differentiator release.

### Exit Criteria

- Stable review velocity and retention trend.
- Clear feature moat versus screenshot-only competitors.

---

## Competitor-Derived Priority Map

### High Priority (Build First)

- Clipboard-oriented workflow.
- Multi-cursor/non-contiguous selection reliability.
- Better language support and fallback behavior.
- Faster no-friction command flow.

### Medium Priority

- Smart naming templates.
- Workspace style consistency features.

### Strategic Differentiators

- Animated workflow intent.
- Social template outcomes.
- Browser/mockup path in same ecosystem.

---

## Kroma Integration Points

- app/code-screenshot-generator/page.tsx
- store/useStudioStore.ts
- components/canvas/StudioCanvas.tsx
- hooks/useExport.ts
- hooks/useVideoRecorder.ts
- lib/analytics.ts
- lib/site.ts

---

## Verification Checklist

1. Commands tested with:
- empty selection
- small selection
- large selection
- multiline Unicode content

2. Selection model tests:
- contiguous selection
- non-contiguous selection
- multi-cursor scenarios

3. Language mapping tests:
- common languages
- Svelte
- unsupported ids fallback

4. Usability tests:
- command to render time
- command discoverability from context menu and palette

5. Stability checks:
- repeated launches
- payload decode integrity
- no blocking errors in extension runtime

---

## Decision Log

- Included: phase-wise extension execution plan and Kroma-side integration sequence.
- Excluded: opening competitor issues or managing external issue workflows.
- Chosen strategy: handoff-first launch for speed, then differentiation on creator outcomes and reliability.