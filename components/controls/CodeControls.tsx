"use client";

import { useStudioStore, CODE_LANGUAGES, CODE_THEMES } from "@/store/useStudioStore";

const FONT_SIZES = [12, 14, 16] as const;

function SelectRow({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly { id: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surface border border-[#1e1e1e] rounded-lg px-2.5 py-2 text-xs text-[#a0a0a0] appearance-none cursor-pointer hover:border-border focus:outline-none focus:border-neon-purple/50 transition-colors"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function CodeControls() {
  const codeContent = useStudioStore((s) => s.codeContent);
  const setCodeContent = useStudioStore((s) => s.setCodeContent);
  const codeLanguage = useStudioStore((s) => s.codeLanguage);
  const setCodeLanguage = useStudioStore((s) => s.setCodeLanguage);
  const codeTheme = useStudioStore((s) => s.codeTheme);
  const setCodeTheme = useStudioStore((s) => s.setCodeTheme);
  const showLineNumbers = useStudioStore((s) => s.showLineNumbers);
  const toggleLineNumbers = useStudioStore((s) => s.toggleLineNumbers);
  const codeWrap = useStudioStore((s) => s.codeWrap);
  const toggleCodeWrap = useStudioStore((s) => s.toggleCodeWrap);
  const codeFontSize = useStudioStore((s) => s.codeFontSize);
  const setCodeFontSize = useStudioStore((s) => s.setCodeFontSize);

  return (
    <div className="flex flex-col gap-4">
      {/* Code editor textarea */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
            Code
          </label>
          <button
            onClick={() => setCodeContent("")}
            className="text-[9px] text-border hover:text-text-muted transition-colors"
          >
            Clear
          </button>
        </div>
        <textarea
          value={codeContent}
          onChange={(e) => setCodeContent(e.target.value)}
          spellCheck={false}
          rows={10}
          placeholder="Paste your code here…"
          className="w-full bg-surface border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-[11px] text-[#a0a0a0] resize-none focus:outline-none focus:border-neon-purple/50 hover:border-border transition-colors placeholder:text-border leading-relaxed"
          style={{ fontFamily: "var(--font-geist-mono), 'Fira Code', monospace", tabSize: 2 }}
        />
      </div>

      <SelectRow
        label="Language"
        value={codeLanguage}
        onChange={setCodeLanguage}
        options={CODE_LANGUAGES}
      />

      <SelectRow
        label="Theme"
        value={codeTheme}
        onChange={setCodeTheme}
        options={CODE_THEMES}
      />

      {/* Font size */}
      <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
            Font Size
          </label>
          <div className="flex gap-1.5">
            {FONT_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setCodeFontSize(size)}
                className={`flex-1 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${
                  codeFontSize === size
                    ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                    : "border-[#1e1e1e] bg-surface text-text-muted hover:border-border hover:text-[#a0a0a0]"
                }`}
            >
              {size}px
            </button>
          ))}
        </div>
      </div>

      {/* Toggles row — Line Numbers + Wrap */}
      <div className="flex flex-col gap-3">
        <div className={`flex items-center justify-between transition-opacity ${codeWrap ? "opacity-40 pointer-events-none" : ""}`}>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
              Line Numbers
            </span>
            {codeWrap && (
              <span className="text-[9px] text-[#5a5a5a] leading-none">
                disabled in wrap mode
              </span>
            )}
          </div>
          <button
            onClick={toggleLineNumbers}
            disabled={codeWrap}
            className={`relative w-9 h-5 rounded-full transition-colors ${
              showLineNumbers && !codeWrap ? "bg-neon-purple" : "bg-[#1e1e1e]"
            }`}
            aria-label="Toggle line numbers"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                showLineNumbers && !codeWrap ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
            Wrap Long Lines
          </span>
          <button
            onClick={toggleCodeWrap}
            className={`relative w-9 h-5 rounded-full transition-colors ${
              codeWrap ? "bg-neon-purple" : "bg-[#1e1e1e]"
            }`}
            aria-label="Toggle line wrap"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                codeWrap ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
