import * as vscode from "vscode";
import {
  mapLanguageId,
  SUPPORTED_BACKGROUNDS,
  SUPPORTED_THEMES,
  type SupportedBackground,
  type SupportedTheme,
} from "./constants";

export type OpenMode = "external" | "simpleBrowser";
export type ModeIntent = "static" | "animated";

export interface HandoffPayload {
  code: string;
  language: string;
  title?: string;
  theme: SupportedTheme;
  background: SupportedBackground;
  intent: ModeIntent;
}

export interface HandoffOptions {
  studioUrl: string;
  theme: SupportedTheme;
  background: SupportedBackground;
  openMode: OpenMode;
  intent: ModeIntent;
}

const QUERY = {
  mode: "mode",
  code: "c",
  language: "lang",
  title: "title",
  theme: "theme",
  background: "bg",
  intent: "intent",
  source: "src",
} as const;

/** Max safe URL length before warning (browser limits vary ~2k–8k). */
const URL_LENGTH_WARN = 6000;

function encodeCode(code: string): string {
  const bytes = new TextEncoder().encode(code);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function buildHandoffUrl(
  payload: HandoffPayload,
  studioUrl: string,
): string {
  const base = studioUrl.replace(/\/$/, "");
  const params = new URLSearchParams();
  params.set(QUERY.source, "vscode");
  params.set(QUERY.mode, "code");
  params.set(QUERY.code, encodeCode(payload.code));
  params.set(QUERY.language, payload.language);
  params.set(QUERY.theme, payload.theme);
  params.set(QUERY.background, payload.background);
  params.set(QUERY.intent, payload.intent);

  if (payload.title) {
    params.set(QUERY.title, payload.title);
  }

  return `${base}/?${params.toString()}`;
}

export function getExtensionConfig(): HandoffOptions {
  const config = vscode.workspace.getConfiguration("kromaStudio");
  const studioUrl =
    config.get<string>("studioUrl") ?? "https://www.kromastudio.in";
  const theme = config.get<string>("defaultTheme") ?? "dracula";
  const background = config.get<string>("defaultBackground") ?? "midnight";
  const openMode = config.get<OpenMode>("openMode") ?? "external";
  const intent = config.get<ModeIntent>("modeIntent") ?? "static";

  return {
    studioUrl,
    theme: SUPPORTED_THEMES.includes(theme as SupportedTheme)
      ? (theme as SupportedTheme)
      : "dracula",
    background: SUPPORTED_BACKGROUNDS.includes(background as SupportedBackground)
      ? (background as SupportedBackground)
      : "midnight",
    openMode,
    intent,
  };
}

export async function openHandoffUrl(url: string, openMode: OpenMode): Promise<void> {
  if (openMode === "simpleBrowser") {
    await vscode.commands.executeCommand("simpleBrowser.show", url);
    return;
  }

  await vscode.env.openExternal(vscode.Uri.parse(url));
}

export async function handoffCode(
  code: string,
  languageId: string,
  title: string | undefined,
  options?: Partial<HandoffOptions>,
): Promise<boolean> {
  const config = { ...getExtensionConfig(), ...options };

  if (!code.trim()) {
    const choice = await vscode.window.showWarningMessage(
      "No code selected. Capture the entire file instead?",
      "Capture File",
      "Cancel",
    );

    if (choice === "Capture File") {
      await vscode.commands.executeCommand("kromaStudio.captureFile");
    }
    return false;
  }

  const url = buildHandoffUrl(
    {
      code,
      language: mapLanguageId(languageId),
      title,
      theme: config.theme,
      background: config.background,
      intent: config.intent,
    },
    config.studioUrl,
  );

  if (url.length > URL_LENGTH_WARN) {
    const proceed = await vscode.window.showWarningMessage(
      `Selection is large (${Math.round(url.length / 1024)}KB URL). Browser may truncate very long URLs. Continue anyway?`,
      "Continue",
      "Cancel",
    );
    if (proceed !== "Continue") {
      return false;
    }
  }

  await openHandoffUrl(url, config.openMode);
  return true;
}

export function getSelectionText(editor: vscode.TextEditor): string {
  const document = editor.document;
  const parts: string[] = [];

  for (const selection of editor.selections) {
    if (selection.isEmpty) {
      continue;
    }
    parts.push(document.getText(selection));
  }

  return parts.join("\n");
}

export function getActiveEditorOrWarn(): vscode.TextEditor | undefined {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    void vscode.window.showWarningMessage(
      "Open a file in the editor to capture code for KromaStudio.",
    );
  }
  return editor;
}
