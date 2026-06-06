export type ComparisonRow = {
  feature: string;
  serverSide: string;
  kromaStudio: string;
  summary: string;
};

export type FaqItem = {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
};

export const WHY_SWITCH_POINTS = [
  "You are working with proprietary logic, internal APIs, or database schemas that cannot legally leave your machine.",
  "You need to quickly share a snippet with a colleague, but it contains secrets or tokens.",
  "You don't want to sign up or agree to complex cloud processing terms just to format text into an image.",
  "You've noticed other tools lag while generating the image on a remote server.",
  "You prefer using tools that adhere to a zero-trust, privacy-first security model.",
] as const;

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Data Processing",
    serverSide: "Your code is sent to an external server via API. The image is rendered remotely and returned.",
    kromaStudio: "100% Client-side. Processing happens locally using DOM-to-Canvas rendering.",
    summary: "Server-side tools expose your raw code to the network. KromaStudio operates completely in your browser, guaranteeing zero data transmission.",
  },
  {
    feature: "Latency",
    serverSide: "Depends on server load, network speed, and API rate limits.",
    kromaStudio: "Instant zero-latency. Bypasses the network entirely.",
    summary: "By cutting out the server roundtrip, KromaStudio renders your code into an image the exact millisecond you hit Export.",
  },
  {
    feature: "Offline Support",
    serverSide: "Requires a constant internet connection to render images.",
    kromaStudio: "Works offline once the initial page has loaded.",
    summary: "Since no external APIs are required, KromaStudio's core logic remains fully functional even if your connection drops.",
  },
  {
    feature: "Data Retention",
    serverSide: "Requires trusting the third-party's privacy policy and server cache wiping mechanisms.",
    kromaStudio: "No server = no data retention. State is held in temporary browser memory.",
    summary: "KromaStudio has no backend database or cloud storage. When you close the tab, your code disappears.",
  },
  {
    feature: "API Keys & Secrets",
    serverSide: "Extremely risky. Do not paste keys into cloud tools.",
    kromaStudio: "Safe. Code never leaves your local device.",
    summary: "While you should always be cautious with secrets, KromaStudio's client-side nature means your secrets are never transmitted across the web.",
  },
];

export const KEY_DIFFERENCES = [
  {
    title: "Zero-Trust Architecture",
    href: "/privacy",
    linkLabel: "Read our privacy policy",
    paragraphs: [
      "When you use a cloud-based code screenshot generator, you have to trust their infrastructure. Even if they promise not to log your data, your code travels across the internet.",
      "KromaStudio operates on a zero-trust model. By utilizing modern browser APIs like the Canvas API and WebCrypto, we remove the server completely. You can verify this by checking your browser's Network tab — no code is ever uploaded.",
    ],
  },
  {
    title: "No Sign-Up or Telemetry",
    href: "/",
    linkLabel: "Try it instantly",
    paragraphs: [
      "We don't need your email address to render an image. We don't track the snippets you paste. We don't save your exported files.",
      "KromaStudio provides a frictionless, private workflow. Open the page, paste your proprietary code, and export your HD PNG or .webm without leaving a digital footprint.",
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "How can I be sure KromaStudio doesn't upload my code?",
    a: "You can verify this yourself using your browser's Developer Tools. Open the Network tab, paste your code, and click Export. You will see that zero network requests are made. The entire rendering process uses JavaScript and the Canvas API locally.",
  },
  {
    q: "Does KromaStudio store my exported images?",
    a: "No. Images and videos are generated directly in your browser's memory and downloaded straight to your local file system. We have no servers to store them on.",
  },
  {
    q: "Is it safe to paste API keys and passwords?",
    a: "Yes. Because KromaStudio is 100% client-side, any text you paste never leaves your local machine. However, as a general best practice, you should still redact highly sensitive production keys before sharing screenshots publicly.",
  },
  {
    q: "Can I use KromaStudio offline?",
    a: "Yes. Once the initial application assets (HTML, CSS, JS) are loaded into your browser, the studio functions offline. You can test this by disabling your internet connection and exporting a snippet.",
  },
  {
    q: "Why do other tools use servers?",
    a: "Some tools rely on server-side technologies like Puppeteer (headless Chrome) to render images, or they offer cloud storage to save your snippets across devices. KromaStudio sacrifices cloud storage in favor of absolute privacy and speed.",
  },
];
