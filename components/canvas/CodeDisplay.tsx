"use client";

import { useEffect, useState, useRef } from "react";
import { useStudioStore } from "@/store/useStudioStore";
import type { Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = import("shiki").then(({ createHighlighter }) =>
      createHighlighter({
        themes: [
          "dracula",
          "one-dark-pro",
          "github-dark",
          "night-owl",
          "tokyo-night",
        ],
        langs: [
          "typescript",
          "javascript",
          "python",
          "html",
          "css",
          "go",
          "rust",
        ],
      })
    );
  }
  return highlighterPromise;
}

export function CodeDisplay() {
  const codeContent = useStudioStore((s) => s.codeContent);
  const codeLanguage = useStudioStore((s) => s.codeLanguage);
  const codeTheme = useStudioStore((s) => s.codeTheme);
  const showLineNumbers = useStudioStore((s) => s.showLineNumbers);
  const codeWrap = useStudioStore((s) => s.codeWrap);
  const codeFontSize = useStudioStore((s) => s.codeFontSize);

  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const highlighterRef = useRef<Highlighter | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function highlight() {
      try {
        if (!highlighterRef.current) {
          highlighterRef.current = await getHighlighter();
        }
        if (cancelled) return;

        const result = highlighterRef.current.codeToHtml(codeContent, {
          lang: codeLanguage,
          theme: codeTheme,
        });

        if (!cancelled) {
          setHtml(result);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }

    highlight();
    return () => { cancelled = true; };
  }, [codeContent, codeLanguage, codeTheme]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#1c1c1e]">
        <div className="flex items-center gap-2 text-[#3a3a3a]">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-xs">Loading highlighter…</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-full overflow-auto"
      style={{ fontSize: `${codeFontSize}px` }}
    >
      <style>{`
        .shiki-code-display pre {
          margin: 0;
          padding: 16px;
          min-height: 100%;
          background: transparent !important;
          font-family: var(--font-geist-mono), 'Fira Code', 'Cascadia Code', monospace;
          font-size: inherit;
          line-height: 1.6;
          tab-size: 2;
          white-space: ${codeWrap ? "pre-wrap" : "pre"};
          word-break: ${codeWrap ? "break-all" : "normal"};
          overflow-wrap: ${codeWrap ? "anywhere" : "normal"};
        }
        .shiki-code-display code {
          font-family: inherit;
          font-size: inherit;
        }
        ${showLineNumbers ? `
        .shiki-code-display .line::before {
          content: attr(data-line);
          display: inline-block;
          width: 2em;
          margin-right: 1.5em;
          text-align: right;
          color: rgba(255,255,255,0.2);
          user-select: none;
          font-variant-numeric: tabular-nums;
        }
        ` : ""}
      `}</style>
      <div
        className="shiki-code-display w-full h-full"
        dangerouslySetInnerHTML={{ __html: addLineAttributes(html) }}
      />
    </div>
  );
}

function addLineAttributes(html: string): string {
  let lineNum = 1;
  return html.replace(/<span class="line">/g, () => {
    const attr = `<span class="line" data-line="${lineNum++}">`;
    return attr;
  });
}
