/** Map VS Code languageId values to KromaStudio CODE_LANGUAGES ids. */
const LANGUAGE_MAP: Record<string, string> = {
  typescript: "typescript",
  javascript: "javascript",
  javascriptreact: "jsx",
  typescriptreact: "tsx",
  python: "python",
  html: "html",
  css: "css",
  scss: "css",
  less: "css",
  go: "go",
  rust: "rust",
  java: "java",
  kotlin: "kotlin",
  swift: "swift",
  c: "c",
  cpp: "cpp",
  csharp: "csharp",
  fsharp: "csharp",
  php: "php",
  ruby: "ruby",
  shellscript: "bash",
  bash: "bash",
  sh: "bash",
  zsh: "bash",
  sql: "sql",
  json: "json",
  jsonc: "json",
  yaml: "yaml",
  vue: "vue",
  svelte: "svelte",
  dockerfile: "docker",
  markdown: "markdown",
  jsx: "jsx",
  tsx: "tsx",
};

export function mapLanguageId(languageId: string): string {
  const normalized = languageId.toLowerCase();
  return LANGUAGE_MAP[normalized] ?? "typescript";
}

export const SUPPORTED_THEMES = [
  "dracula",
  "one-dark-pro",
  "github-dark",
  "night-owl",
  "tokyo-night",
  "catppuccin-mocha",
  "catppuccin-latte",
  "nord",
  "monokai",
  "synthwave-84",
  "solarized-dark",
  "rose-pine",
  "material-theme-ocean",
  "vitesse-dark",
  "github-light",
] as const;

export const SUPPORTED_BACKGROUNDS = [
  "midnight",
  "cyberpunk",
  "synthwave",
  "rose_galaxy",
  "aurora",
  "glass",
  "peach",
  "matrix",
  "neon_sunset",
  "deep_ocean",
  "golden_hour",
  "white",
  "light-gray",
  "slate",
  "charcoal",
  "void",
] as const;

export type SupportedTheme = (typeof SUPPORTED_THEMES)[number];
export type SupportedBackground = (typeof SUPPORTED_BACKGROUNDS)[number];
