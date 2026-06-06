export type FaqItem = {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
};

export type HowToStep = {
  title: string;
  body: string;
};

export type ThemeEntry = {
  name: string;
  description: string;
};

export type LanguageGroup = {
  group: string;
  languages: string[];
};

export type WhyKroma = {
  title: string;
  body: string;
};

export type UseCase = {
  title: string;
  body: string;
};

export type RelatedTool = {
  href: string;
  label: string;
  description: string;
};

export const HERO_TRUST_BADGES = [
  "Free",
  "No sign-up",
  "15 themes",
  "Up to 4× export",
  "Animated .webm",
  "100% client-side",
] as const;

export const ALL_THEMES: ThemeEntry[] = [
  { name: "Dracula", description: "Dark purple palette — the most-used dark theme for code sharing." },
  { name: "One Dark Pro", description: "Atom-inspired dark theme with muted, readable contrast." },
  { name: "GitHub Dark", description: "GitHub's official dark mode — familiar to every developer." },
  { name: "Night Owl", description: "Optimised for night-time readability with vivid token colors." },
  { name: "Tokyo Night", description: "Deep blue tones inspired by Tokyo neon lights." },
  { name: "Catppuccin Mocha", description: "Warm pastel dark theme from the Catppuccin palette." },
  { name: "Catppuccin Latte", description: "Light mode variant of Catppuccin — clean and soft." },
  { name: "Nord", description: "Arctic-inspired cool blue palette, minimal and distraction-free." },
  { name: "Monokai", description: "Classic Sublime Text theme with high-contrast token colors." },
  { name: "Synthwave '84", description: "Neon retro-futuristic palette for eye-catching social posts." },
  { name: "Solarized Dark", description: "Precision-designed contrast ratios for long reading sessions." },
  { name: "Rosé Pine", description: "Muted, nature-inspired dark theme — popular in aesthetic dev circles." },
  { name: "Material Ocean", description: "Deep ocean tones from the Material theme family." },
  { name: "Vitesse Dark", description: "Minimal, elegant dark theme by the creator of Slidev." },
  { name: "GitHub Light", description: "GitHub's light mode — great for documentation screenshots." },
];

export const ALL_LANGUAGES: LanguageGroup[] = [
  {
    group: "Web",
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "JSX", "TSX", "Vue", "Svelte"],
  },
  {
    group: "Systems & Backend",
    languages: ["Go", "Rust", "Python", "Java", "C", "C++", "C#", "Bash"],
  },
  {
    group: "Mobile",
    languages: ["Kotlin", "Swift"],
  },
  {
    group: "Data & Config",
    languages: ["SQL", "JSON", "YAML", "Docker", "Markdown", "PHP", "Ruby"],
  },
];

export const HOW_TO_STEPS: HowToStep[] = [
  {
    title: "Paste your code",
    body: "Open KromaStudio and switch to Code mode. Paste any snippet — the language is detected automatically, or you can select it manually from 25 supported languages.",
  },
  {
    title: "Pick a theme and background",
    body: "Choose from 15 syntax themes including Dracula, One Dark Pro, and Catppuccin. Then pick one of 12 gradient backgrounds or set a custom two-color gradient. Optionally enable a headline overlay for social posts.",
  },
  {
    title: "Export as PNG or animated .webm",
    body: "Click Export and choose 1×, 2×, 3×, or 4× resolution — at 4× a 16:9 canvas exports at 3200×1800, sharp at any size. Or open the Animate panel to render a looping Float, 3D Tilt, or Auto Scroll animation as a .webm — all in your browser, no upload required.",
  },
];

export const WHY_KROMA: WhyKroma[] = [
  {
    title: "Animated .webm export",
    body: "Carbon and Ray.so export static PNGs only. KromaStudio renders Float, 3D Tilt, and Auto Scroll loops as .webm — ready for Twitter/X, LinkedIn, and Product Hunt openers.",
  },
  {
    title: "Browser mockups in the same tool",
    body: "Switch to Image mode to wrap a product screenshot in Chrome, Safari, Firefox, or macOS browser frames — no second app needed.",
  },
  {
    title: "Headline overlay",
    body: "Add a customizable text headline directly on top of the code card — useful for 'Shipping X today' launch posts without opening a design tool.",
  },
  {
    title: "100% client-side",
    body: "Your code never touches a server. Unlike Carbon, which sends snippets to a cloud renderer, KromaStudio processes everything locally using the HTML Canvas API.",
  },
];

export const USE_CASES: UseCase[] = [
  {
    title: "Sharing on Twitter/X and LinkedIn",
    body: "Export a sharp 16:9 code card with a gradient background and headline. The 2× PNG looks crisp in feed and doesn't compress like a screenshot of your editor.",
  },
  {
    title: "Documentation and README hero images",
    body: "Use GitHub Dark or GitHub Light theme to create consistent, on-brand code images that match the GitHub UI. Export at 2× for Retina display sharpness.",
  },
  {
    title: "Presentations and slide decks",
    body: "Paste a snippet, pick a clean theme, set a solid or minimal background, and export a PNG that slots into Keynote, PowerPoint, or Google Slides without font issues.",
  },
  {
    title: "Blog posts and tutorials",
    body: "A themed code image reads far better than a raw code block screenshot and renders at any size. Dracula and One Dark Pro are the most popular themes for technical blog posts.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "Is KromaStudio free to use?",
    a: "Yes. KromaStudio is completely free — no sign-up, no watermark, no export limits. All features including animated export are free.",
  },
  {
    q: "Does my code get uploaded to a server?",
    a: "No. KromaStudio runs 100% client-side using the HTML Canvas API. Your code snippets never leave your device and are never stored or logged.",
  },
  {
    q: "What syntax themes are available?",
    a: "15 themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin Mocha, Catppuccin Latte, Nord, Monokai, Synthwave '84, Solarized Dark, Rosé Pine, Material Ocean, Vitesse Dark, and GitHub Light.",
  },
  {
    q: "What programming languages are supported?",
    a: "25 languages: TypeScript, JavaScript, Python, HTML, CSS, Go, Rust, Java, Kotlin, Swift, C, C++, C#, PHP, Ruby, Bash, SQL, JSON, YAML, JSX, TSX, Vue, Svelte, Docker, and Markdown.",
  },
  {
    q: "Can I export animated code screenshots?",
    a: "Yes. Open the Animate panel and choose Float, 3D Tilt, or Auto Scroll to render a looping .webm animation — great for Twitter/X demos and Product Hunt openers.",
  },
  {
    q: "How does KromaStudio compare to Carbon.now.sh?",
    a: "Carbon is excellent for quick code cards with 150+ themes. KromaStudio adds animated .webm export, browser mockups, social post templates, and headline overlays — all without a sign-up. Both are MIT open source.",
    href: "/carbon-alternative",
    linkLabel: "See full Carbon comparison",
  },
  {
    q: "How does KromaStudio compare to Ray.so?",
    a: "Ray.so is great for fast, minimal code cards. KromaStudio adds animated export, browser frame mockups, social templates, and runs fully client-side without a server upload.",
    href: "/ray-so-alternative",
    linkLabel: "See full Ray.so comparison",
  },
  {
    q: "What resolution does the PNG export at?",
    a: "Choose from 1×, 2×, 3×, or 4× export scale. At 4× a standard canvas exports at 3200×1800 — Retina-sharp for any display or print use. Most social sharing is best at 2× or 3×.",
  },
  {
    q: "Can I add a title or headline to my code screenshot?",
    a: "Yes. Toggle the Headline control to add custom text above or below the code block — useful for adding 'Just shipped:' or a function name to your post.",
  },
  {
    q: "Is KromaStudio open source?",
    a: "Yes. KromaStudio is MIT licensed and the full source is on GitHub — you can inspect the code, self-host, or contribute.",
    href: "/github-kroma-studio",
    linkLabel: "View on GitHub",
  },
];

export const RELATED_TOOLS: RelatedTool[] = [
  {
    href: "/browser-mockup-generator",
    label: "Browser Mockup Generator",
    description: "Wrap screenshots in Chrome, Safari, Firefox, or macOS frames.",
  },
  {
    href: "/content-post-generator",
    label: "Social Post Generator",
    description: "Create tweet cards, LinkedIn posts, and metrics snapshots.",
  },
  {
    href: "/carbon-alternative",
    label: "KromaStudio vs Carbon",
    description: "Side-by-side comparison with Carbon.now.sh.",
  },
  {
    href: "/ray-so-alternative",
    label: "KromaStudio vs Ray.so",
    description: "Side-by-side comparison with Ray.so.",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    description: "Three-step guide to making scroll-stopping visuals.",
  },
  {
    href: "/animated-code-screenshot",
    label: "Animated Code Screenshots",
    description: "Export 60fps looping .webm animations.",
  },
  {
    href: "/secure-code-screenshot-generator",
    label: "Secure Code Screenshots",
    description: "100% client-side privacy code rendering.",
  },
];
