import { FAQS as CARBON_FAQS } from "@/lib/landing/carbon-alternative";
import { FAQS as RAY_SO_FAQS } from "@/lib/landing/ray-so-alternative";
import { FAQS as BROWSER_MOCKUP_FAQS, HOW_TO_STEPS as BROWSER_HOW_TO_STEPS } from "@/lib/landing/browser-mockup-generator";
import { FAQS as CODE_SCREENSHOT_FAQS, HOW_TO_STEPS as CODE_HOW_TO_STEPS } from "@/lib/landing/code-screenshot-generator";
import { FAQS as GITHUB_FAQS } from "@/lib/landing/github-kroma-studio";
import { FAQS as SNAPPIFY_FAQS } from "@/lib/landing/snappify-alternative";
import { FAQS as SECURE_FAQS } from "@/lib/landing/secure-code-screenshot";
import { FAQS as ANIMATED_FAQS, HOW_TO_STEPS as ANIMATED_HOW_TO_STEPS } from "@/lib/landing/animated-code-screenshot";
import { FAQS as CONTENT_POST_FAQS, HOW_TO_STEPS as CONTENT_HOW_TO_STEPS } from "@/lib/landing/content-post-generator";
import {
  OG_IMAGE,
  SITE_ALTERNATE_NAMES,
  SITE_META,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const FEATURE_LIST = [
  "Browser frame mockups — Chrome, Safari, Firefox, Arc, macOS Dark, macOS Light, Windows, Minimal styles",
  "Device frames — iPhone, iPad, MacBook",
  "Editable URL bar and custom favicon in browser tab",
  "Transparent PNG export",
  "Syntax-highlighted code screenshots",
  "15 code themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin Mocha, Catppuccin Latte, Nord, Monokai, Synthwave '84, Solarized Dark, Rosé Pine, Material Ocean, Vitesse Dark, GitHub Light",
  "25 supported languages: TypeScript, JavaScript, Python, HTML, CSS, Go, Rust, Java, Kotlin, Swift, C, C++, C#, PHP, Ruby, Bash, SQL, JSON, YAML, JSX, TSX, Vue, Svelte, Docker, Markdown",
  "Headline text overlay for social posts",
  "12 aesthetic gradient background presets plus solid colors",
  "Background image upload with noise overlay",
  "Image fit modes — contain, cover, fill",
  "Image zoom and position within frame",
  "Inner screenshot corner radius control",
  "Line numbers toggle",
  "Export scale selector — 1×, 2×, 3×, 4× resolution",
  "Animated video export — Float, 3D Tilt, Auto-Scroll loops as .webm",
  "VS Code extension — capture selection and hand off to browser",
  "Preset mockup template gallery",
  "Social content post templates — Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, Metrics",
  "Author, handle, avatar controls with initials fallback",
  "Accent color customization per template",
  "Mobile-friendly — native share to Photos on iOS & Android",
  "100% client-side — no upload, no sign-up",
];

/** Organization + app schema — safe on every page */
export function getRootJsonLd() {
  const ogImageUrl = `${SITE_URL}${OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE_NAME,
        url: SITE_URL,
        image: ogImageUrl,
        screenshot: ogImageUrl,
        operatingSystem: "Browser",
        applicationCategory: "DesignApplication",
        browserRequirements: "Requires HTML5 canvas support",
        description: SITE_META.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: FEATURE_LIST,
      },
    ],
  };
}

/** WebSite schema — homepage only per Google Site Names guidance */
export function getHomepageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: [...SITE_ALTERNATE_NAMES],
    url: `${SITE_URL}/`,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function getHowItWorksJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to create aesthetic code screenshots with KromaStudio",
        description:
          "Select code in VS Code or paste in the browser, pick a theme and gradient background, then export an HD PNG — all with no sign-up.",
        step: [
          {
            "@type": "HowToStep",
            name: "Select in VS Code → open in KromaStudio",
            text: "Install the KromaStudio VS Code extension, select a snippet, and run Capture Selection (Cmd+Shift+K / Ctrl+Shift+K). KromaStudio opens in your browser with language and theme applied.",
          },
          {
            "@type": "HowToStep",
            name: "Paste your code",
            text: "Switch to Code mode and paste a snippet. KromaStudio supports 25 languages including TypeScript, JavaScript, Python, Java, Kotlin, Swift, Rust, Go, PHP, Ruby, and more.",
          },
          {
            "@type": "HowToStep",
            name: "Customize the look",
            text: "Choose a syntax theme like Dracula or One Dark Pro, pick a gradient background, and optionally add a headline overlay.",
          },
          {
            "@type": "HowToStep",
            name: "Export HD PNG",
            text: "Click Export to download a 2× resolution PNG ready for Twitter, LinkedIn, or your portfolio.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is KromaStudio free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. KromaStudio is completely free with no sign-up required.",
            },
          },
          {
            "@type": "Question",
            name: "Does my code leave my browser?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. KromaStudio runs 100% client-side. Your code and images never leave your device.",
            },
          },
          {
            "@type": "Question",
            name: "What code themes are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KromaStudio offers 15 themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin Mocha, Catppuccin Latte, Nord, Monokai, Synthwave '84, Solarized Dark, Rosé Pine, Material Ocean, Vitesse Dark, and GitHub Light.",
            },
          },
          {
            "@type": "Question",
            name: "Can I start from VS Code?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Install the KromaStudio extension from the Visual Studio Marketplace, select code, and press Cmd+Shift+K or Ctrl+Shift+K to open the snippet in KromaStudio.",
            },
          },
          {
            "@type": "Question",
            name: "Can I create browser mockups too?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Switch to Image mode to wrap screenshots in macOS, Windows, or minimal browser frames.",
            },
          },
        ],
      },
    ],
  };
}

export function getRaySoAlternativeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: RAY_SO_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getCarbonAlternativeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CARBON_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getContentPostJsonLd() {
  const ogImageUrl = `${SITE_URL}${OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/content-post-generator#app`,
        name: "KromaStudio Content Post Generator",
        url: `${SITE_URL}/content-post-generator`,
        image: ogImageUrl,
        operatingSystem: "Browser",
        applicationCategory: "DesignApplication",
        browserRequirements: "Requires HTML5 canvas support",
        description:
          "Design social cards for X, LinkedIn, and product launches. Templates for tweets, LinkedIn posts, video previews, threads, quotes, announcements, testimonials, carousels, before-after stories, and metrics snapshots. HD PNG and animated .webm export — free, client-side, no sign-up.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        datePublished: "2024-01-01",
        dateModified: "2026-06-01",
        featureList: [
          "10 social post card templates: Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, Metrics",
          "Custom author, handle, and avatar with initials fallback",
          "Accent color and verified badge controls",
          "Editable metrics values (replies, reposts, likes, impressions, CTR, revenue)",
          "Export scale: 1×, 2×, 3×, 4× resolution",
          "Animated .webm video export",
          "Visual card designer — not an AI text generator",
          "100% client-side — no upload, no sign-up",
        ],
      },
      {
        "@type": "HowTo",
        name: "How to create social post cards with KromaStudio",
        description:
          "Pick a template, customize text and author, then export a 2× PNG or animated .webm — all in your browser with no sign-up.",
        step: CONTENT_HOW_TO_STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: CONTENT_POST_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

export function getBrowserMockupJsonLd() {
  const ogImageUrl = `${SITE_URL}${OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/browser-mockup-generator#app`,
        name: "KromaStudio Browser Mockup Generator",
        url: `${SITE_URL}/browser-mockup-generator`,
        image: ogImageUrl,
        operatingSystem: "Browser",
        applicationCategory: "DesignApplication",
        browserRequirements: "Requires HTML5 canvas support",
        description:
          "Wrap any screenshot in Chrome, Safari, Firefox, Arc, macOS, or Windows browser frames. Adjust padding, shadow, corner radius, and aspect ratio. Export a high-resolution PNG — free, no sign-up, 100% client-side.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        datePublished: "2024-01-01",
        dateModified: "2026-06-01",
        featureList: [
          "Browser frames: Chrome, Safari, Firefox, Arc, macOS Dark, macOS Light, Windows, Minimal",
          "Device frames: iPhone, iPad, MacBook",
          "Editable URL bar — enter any domain",
          "Custom favicon upload for browser tab",
          "Transparent PNG export — background-free",
          "Export scale: 1×, 2×, 3×, 4× resolution",
          "12 gradient background presets plus solid colors",
          "Background image upload with noise overlay",
          "Image fit mode — contain, cover, fill",
          "Image zoom and position within frame",
          "Inner screenshot corner radius",
          "Padding, corner radius, and shadow controls",
          "Aspect ratio presets: 1:1, 16:9, 9:16, Free",
          "Headline overlay for social posts",
          "Preset mockup template gallery",
          "Animated .webm export — Float and 3D Tilt loops",
          "100% client-side — no upload, no sign-up",
        ],
      },
      {
        "@type": "HowTo",
        name: "How to create a browser mockup with KromaStudio",
        description:
          "Drop a screenshot, pick a browser frame style, customize the look, and export a high-resolution PNG — all in your browser.",
        step: BROWSER_HOW_TO_STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: BROWSER_MOCKUP_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

export function getCodeScreenshotJsonLd() {
  const ogImageUrl = `${SITE_URL}${OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/code-screenshot-generator#app`,
        name: "KromaStudio Code Screenshot Generator",
        url: `${SITE_URL}/code-screenshot-generator`,
        image: ogImageUrl,
        operatingSystem: "Browser",
        applicationCategory: "DeveloperApplication",
        browserRequirements: "Requires HTML5 canvas support",
        description:
          "Turn code snippets into beautiful PNG screenshots or animated .webm videos. 15 syntax themes including Dracula and One Dark Pro, 25 languages, headline overlays, gradient backgrounds. 100% client-side, free, no sign-up.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        datePublished: "2026-05-25",
        dateModified: "2026-06-01",
        featureList: [
          "VS Code extension — capture selection and hand off to browser",
          "15 syntax themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin Mocha, Catppuccin Latte, Nord, Monokai, Synthwave '84, Solarized Dark, Rosé Pine, Material Ocean, Vitesse Dark, GitHub Light",
          "25 programming languages supported",
          "Export scale: 1×, 2×, 3×, 4× resolution",
          "12 gradient background presets plus solid colors",
          "Headline text overlay for social posts",
          "Line numbers toggle",
          "Animated .webm export — Float, 3D Tilt, Auto-Scroll loops",
          "100% client-side — code never leaves your browser",
        ],
      },
      {
        "@type": "HowTo",
        name: "How to create code screenshots with KromaStudio",
        description:
          "Paste your code, pick a theme and background, then export an HD PNG or animated .webm — all in your browser with no sign-up.",
        step: CODE_HOW_TO_STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: CODE_SCREENSHOT_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

export function getGithubKromaStudioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GITHUB_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getSnappifyAlternativeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SNAPPIFY_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getSecureCodeScreenshotJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SECURE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getAnimatedCodeScreenshotJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to create an animated code screenshot with KromaStudio",
        description: "Paste your snippet, pick an animation preset like Float or 3D Tilt, and export a 60fps .webm video.",
        step: ANIMATED_HOW_TO_STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: ANIMATED_FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}
