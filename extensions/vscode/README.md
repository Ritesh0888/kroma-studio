# KromaStudio VS Code Extension (Phase 1)

Send selected code from VS Code to [KromaStudio](https://www.kromastudio.in) via URL handoff.

## Commands

| Command | Palette title |
|---------|---------------|
| `kromaStudio.captureSelection` | KromaStudio: Capture Selection |
| `kromaStudio.captureFile` | KromaStudio: Capture Current File |
| `kromaStudio.openStudio` | KromaStudio: Open Studio |

Default keybinding: `Cmd+Shift+K` (macOS) / `Ctrl+Shift+K` (Windows/Linux) for selection capture.

## Local development

```bash
cd extensions/vscode
npm install
npm run compile
```

Press **F5** in VS Code/Cursor with the `extensions/vscode` folder open to launch an Extension Development Host.

For local KromaStudio:

```json
"kromaStudio.studioUrl": "http://localhost:3000"
```

## URL payload contract

Handoff opens `/?src=vscode&mode=code&c=<base64url>&lang=...&theme=...&bg=...&intent=...&title=...`

The web app hydrates Zustand state on load via `hooks/useExtensionHandoff.ts`.
