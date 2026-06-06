"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Reads VS Code extension handoff params from the URL and redirects to the
 * studio route so the editor is pre-populated with the captured code.
 *
 * Expected params (all optional):
 *   code      – base64-encoded source code
 *   lang      – language identifier (e.g. "typescript")
 *   theme     – syntax theme preset
 *   bg        – background preset
 *   intent    – "static" | "animated"
 *   filename  – original filename hint
 */
export function useExtensionHandoff() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return;

    const params = new URLSearchParams();
    params.set("code", code);

    const lang = searchParams.get("lang");
    const theme = searchParams.get("theme");
    const bg = searchParams.get("bg");
    const intent = searchParams.get("intent");
    const filename = searchParams.get("filename");

    if (lang) params.set("lang", lang);
    if (theme) params.set("theme", theme);
    if (bg) params.set("bg", bg);
    if (intent) params.set("intent", intent);
    if (filename) params.set("filename", filename);

    router.replace(`/studio?${params.toString()}`);
  }, [searchParams, router]);
}
