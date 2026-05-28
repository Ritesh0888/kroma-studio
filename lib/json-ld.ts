import { OG_IMAGE, SITE_META, SITE_NAME, SITE_URL } from "@/lib/site";

const FEATURE_LIST = [
  "Browser frame mockups — macOS Dark, macOS Light, Windows, Minimal styles",
  "Syntax-highlighted code screenshots",
  "15 code themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin Mocha, Catppuccin Latte, Nord, Monokai, Synthwave '84, Solarized Dark, Rosé Pine, Material Ocean, Vitesse Dark, GitHub Light",
  "25 supported languages: TypeScript, JavaScript, Python, HTML, CSS, Go, Rust, Java, Kotlin, Swift, C, C++, C#, PHP, Ruby, Bash, SQL, JSON, YAML, JSX, TSX, Vue, Svelte, Docker, Markdown",
  "Headline text overlay for social posts",
  "12 aesthetic gradient background presets",
  "Line numbers toggle",
  "HD PNG export at 2× resolution",
  "Animated video export — Float, 3D Tilt, Auto-Scroll loops as .webm",
  "Social content post templates — Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, Metrics",
  "Author, handle, avatar controls with initials fallback",
  "Accent color customization per template",
  "Mobile-friendly — native share to Photos on iOS & Android",
  "100% client-side — no upload, no sign-up",
];

export function getRootJsonLd() {
  const ogImageUrl = `${SITE_URL}${OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
      },
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

export function getHowItWorksJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to create aesthetic code screenshots with KromaStudio",
        description:
          "Paste your code, pick a theme and gradient background, then export an HD PNG — all in your browser with no sign-up.",
        step: [
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
        featureList: [
          "10 social post templates: Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, Metrics",
          "Custom author, handle, and avatar with initials fallback",
          "Accent color and verified badge controls",
          "Editable metrics values (replies, reposts, likes, impressions, CTR, revenue)",
          "HD PNG export at 2× resolution",
          "Animated .webm video export",
          "100% client-side — no upload, no sign-up",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What social post templates are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KromaStudio offers 10 templates: Tweet, LinkedIn, Video, Thread, Quote, Announcement, Testimonial, Carousel, Before/After, and Metrics.",
            },
          },
          {
            "@type": "Question",
            name: "Can I export social cards as video?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can export any content card as an animated .webm loop (Float, 3D Tilt, Auto-Scroll) or as a static HD PNG.",
            },
          },
          {
            "@type": "Question",
            name: "Is the content post generator free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. KromaStudio is completely free with no sign-up required. Everything runs in your browser.",
            },
          },
        ],
      },
    ],
  };
}
