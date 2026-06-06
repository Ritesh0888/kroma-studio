"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStudioStore } from "@/store/useStudioStore";

function decodeBase64Url(encoded: string): string {
  let base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4;
  if (pad) {
    base64 += "=".repeat(4 - pad);
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

/**
 * Reads VS Code extension handoff params from the URL and hydrates studio state.
 *
 * Expected params (from extensions/vscode):
 *   c / code  – base64url-encoded source code
 *   lang      – language identifier (e.g. "typescript")
 *   theme     – syntax theme preset
 *   bg        – background preset
 *   intent    – "static" | "animated"
 *   title     – original filename hint
 */
export function useExtensionHandoff() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const encoded = searchParams.get("c") ?? searchParams.get("code");
    if (!encoded) {
      return;
    }

    let code: string;
    try {
      code = decodeBase64Url(encoded);
    } catch {
      return;
    }

    const {
      setMode,
      setCodeContent,
      setCodeLanguage,
      setCodeTheme,
      setBackgroundId,
      setAnimationPreset,
    } = useStudioStore.getState();

    setMode("code");
    setCodeContent(code);

    const lang = searchParams.get("lang");
    const theme = searchParams.get("theme");
    const bg = searchParams.get("bg");
    const intent = searchParams.get("intent");

    if (lang) {
      setCodeLanguage(lang);
    }
    if (theme) {
      setCodeTheme(theme);
    }
    if (bg) {
      setBackgroundId(bg);
    }
    if (intent === "animated") {
      setAnimationPreset("float");
    }

    router.replace("/", { scroll: false });
  }, [searchParams, router]);
}
