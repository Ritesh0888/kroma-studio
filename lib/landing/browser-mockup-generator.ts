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

export type BrowserFrameEntry = {
  name: string;
  description: string;
};

export type WhyUseFrame = {
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
  "Chrome, Safari & Firefox frames",
  "Device frames — iPhone, iPad, MacBook",
  "Transparent PNG",
  "Up to 4× export",
  "100% client-side",
] as const;

export const BROWSER_FRAMES: BrowserFrameEntry[] = [
  {
    name: "Chrome",
    description: "Familiar tab strip and address bar — the frame most audiences recognise instantly.",
  },
  {
    name: "Safari",
    description: "Clean macOS address bar with traffic-light controls — ideal for Apple-first audiences.",
  },
  {
    name: "Firefox",
    description: "Rounded tab bar with a privacy-first feel — great for open-source projects.",
  },
  {
    name: "Arc",
    description: "Compact, modern sidebar-style chrome — stands out in a feed full of Chrome mockups.",
  },
  {
    name: "macOS Dark",
    description: "Classic dark traffic-light + URL pill — polished for dark-mode landing pages.",
  },
  {
    name: "macOS Light",
    description: "Same layout in light chrome — pairs cleanly with white or pastel backgrounds.",
  },
  {
    name: "Windows",
    description: "Windows title bar with minimize, maximize, close — authentic for Windows-first products.",
  },
  {
    name: "Minimal",
    description: "Traffic-light dots only, no URL bar — clean and distraction-free.",
  },
];

export const HOW_TO_STEPS: HowToStep[] = [
  {
    title: "Drop in your screenshot",
    body: "Open KromaStudio, switch to Image mode, and drag-and-drop your screenshot onto the canvas — or click to browse, or paste from clipboard. Supports PNG, JPG, WebP, and GIF.",
  },
  {
    title: "Pick a frame and customize",
    body: "Choose from Chrome, Safari, Firefox, Arc, macOS Dark/Light, Windows, or Minimal browser chrome. Adjust padding, corner radius, shadow depth, and aspect ratio. Optionally add a headline overlay for social posts.",
  },
  {
    title: "Export your PNG",
    body: "Click Export for a high-resolution PNG at 1×, 2×, 3×, or 4× scale — or toggle Transparent PNG to export without any background, ready for Figma or Photoshop compositing. All processing runs in your browser.",
  },
];

export const WHY_USE_FRAMES: WhyUseFrame[] = [
  {
    title: "Context and Clarity",
    body: "A browser frame instantly tells viewers they're looking at a real website or web app — no caption needed. It anchors the screenshot to a product.",
  },
  {
    title: "Professional Polish",
    body: "Raw screenshots look unfinished. A clean Chrome or Safari frame with a gradient background turns a plain capture into a launch-ready asset.",
  },
  {
    title: "Social Media Ready",
    body: "Polished browser mockups stand out on Twitter/X, LinkedIn, and Product Hunt — where first impressions determine whether someone clicks through.",
  },
  {
    title: "Better Presentations",
    body: "Clients and stakeholders understand your work better with proper browser context. Pitch decks and portfolio case studies read more professionally.",
  },
];

export const FRAME_CHOICE_GUIDE = {
  intro:
    "The frame you pick signals something to your audience before they read a word. Here's how to choose.",
  sections: [
    {
      heading: "When to use Chrome",
      body: "Default to Chrome. It's the browser most of your audience uses every day, so a Chrome frame reads as 'a real product on a real screen' without anyone consciously noticing the chrome. Best for SaaS dashboards, landing pages, and any launch post targeting a broad audience.",
    },
    {
      heading: "When to use Safari",
      body: "Choose Safari when your audience skews toward designers, agency people, or Apple-first founders. The rounded toolbar and traffic-light buttons signal a different kind of polish and pair well with light or minimal backgrounds. It also looks sharper on Retina screenshots.",
    },
    {
      heading: "When to use Arc or Firefox",
      body: "Arc and Firefox frames work as differentiation — pick them when your screenshot is going into a feed full of Chrome mockups and you want the thumbnail to feel slightly distinct. Arc works especially well for developer tools and productivity apps.",
    },
    {
      heading: "Match the theme to the screenshot",
      body: "A light UI inside a dark Safari frame looks wrong even if your brand is dark-mode. The frame and screenshot theme should agree — otherwise the eye reads the frame as a separate object rather than a window. For SaaS dashboards, light Chrome on a muted gradient usually works best. For developer tools, dark Arc or macOS Dark frames on a deep background look sharper in feeds.",
    },
  ],
};

export const USE_CASES: UseCase[] = [
  {
    title: "SaaS founders",
    body: "Wrap your product screenshot in a Chrome frame for launch day on Product Hunt or Twitter/X. Add a headline overlay like 'Ship faster' and export in 16:9 for the hero shot.",
  },
  {
    title: "Designers and portfolio owners",
    body: "Present case studies and Dribbble shots with a Safari frame on a minimal background — no Figma or Photoshop needed, and everything exports at Retina resolution.",
  },
  {
    title: "Developers and open-source authors",
    body: "Drop your app screenshot into a macOS Dark or Arc frame for a README hero image. Export at 2× scale, commit to the repo, and use it as the OG image.",
  },
  {
    title: "Marketers and content creators",
    body: "Create consistent browser-framed visuals for blog post headers, LinkedIn carousel slides, and ad creatives — all from one tool without a design subscription.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "What browser frames are available?",
    a: "KromaStudio includes Chrome, Safari, Firefox, Arc, macOS Dark, macOS Light, Windows, and Minimal frames. All 8 styles are free with no export limits.",
  },
  {
    q: "Is the browser mockup generator free?",
    a: "Yes. KromaStudio is completely free with no sign-up, no watermark, and no export limits. Everything runs in your browser.",
  },
  {
    q: "Can I export a browser mockup with a transparent background?",
    a: "Yes. Toggle 'Transparent PNG' in the export panel to remove the background entirely — perfect for compositing into Figma, Photoshop, or a custom design.",
  },
  {
    q: "What resolution does the browser mockup export at?",
    a: "You can export at 1×, 2×, 3×, or 4× resolution. The 4× setting gives you a 3200×1800 PNG at 16:9 — sharp enough for any Retina display or print use.",
  },
  {
    q: "Can I customize the URL in the address bar?",
    a: "Yes. Type any URL into the URL bar control and the browser frame will render it live. Great for making mockups feel like a real product session.",
  },
  {
    q: "Can I add a custom favicon to the browser tab?",
    a: "Yes. Upload any PNG, SVG, or ICO file and it will appear inside the active tab of Chrome and Safari frames — making the mockup feel like a real browser session.",
  },
  {
    q: "Are device frames (iPhone, iPad, MacBook) available?",
    a: "Yes. KromaStudio includes device frames for iPhone, iPad, and MacBook. Switch from a browser frame to a device frame in the sidebar to wrap your screenshot in a realistic device bezel.",
  },
  {
    q: "How do I create a browser mockup for a Product Hunt launch?",
    a: "Upload your product screenshot, select Chrome or Safari frame, set a gradient background, and export in 16:9 aspect ratio at 2× or 3×. The result is sized correctly for the Product Hunt gallery and Twitter/X cards.",
  },
  {
    q: "Can I add a headline to my browser mockup?",
    a: "Yes. Toggle the Headline option to add text on top of or below the browser frame — useful for launch posts and social media cards.",
  },
  {
    q: "Does my screenshot get uploaded to a server?",
    a: "No. KromaStudio processes everything 100% client-side in your browser. Your images never leave your device.",
  },
  {
    q: "What image formats can I upload?",
    a: "PNG, JPG, WebP, and GIF are all supported. Drop the file, click to browse, or paste directly from your clipboard.",
  },
  {
    q: "Can I export animated browser mockup videos?",
    a: "Yes. Switch to the Animate panel and choose Float or 3D Tilt to render a looping .webm — great for Product Hunt openers and Twitter/X demo clips.",
  },
];

export const RELATED_TOOLS: RelatedTool[] = [
  {
    href: "/code-screenshot-generator",
    label: "Code Screenshot Generator",
    description: "Turn code snippets into beautiful syntax-highlighted images.",
  },
  {
    href: "/content-post-generator",
    label: "Social Post Card Maker",
    description: "Create tweet cards, LinkedIn post images, and metrics snapshots.",
  },
  {
    href: "/carbon-alternative",
    label: "KromaStudio vs Carbon",
    description: "Free browser mockups + code screenshots vs Carbon.now.sh.",
  },
  {
    href: "/ray-so-alternative",
    label: "KromaStudio vs Ray.so",
    description: "How KromaStudio compares to Ray.so for code and mockup visuals.",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    description: "Three-step guide to making scroll-stopping visuals.",
  },
];
