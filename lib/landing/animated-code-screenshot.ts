export type ComparisonRow = {
  feature: string;
  traditional: string;
  kromaStudio: string;
  summary: string;
};

export type FaqItem = {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
};

export const HOW_TO_STEPS = [
  {
    title: "Paste your snippet",
    body: "Enter the code you want to animate. Make sure it fits comfortably within the canvas to ensure the animation looks smooth.",
  },
  {
    title: "Pick an animation preset",
    body: "Open the Animate panel. Choose from Float (gentle vertical hover), 3D Tilt (dynamic depth), or Auto Scroll (perfect for long snippets).",
  },
  {
    title: "Export as .webm video",
    body: "Click the Export Video button. KromaStudio records a perfect 60fps loop directly in your browser. Download it and post it.",
  },
];

export const WHY_SWITCH_POINTS = [
  "You want to post code on X, LinkedIn, or TikTok and need a looping video format instead of a static image.",
  "You tried screen-recording your editor, but the quality is low, the frame rate stutters, and the background is boring.",
  "You don't have time to use After Effects or Premiere Pro just to make a 5-second code animation.",
  "You're tired of paying monthly subscriptions to tools that lock video export behind a premium tier.",
  "You want an all-in-one studio that can export both a high-res static PNG and an animated .webm from the exact same layout.",
] as const;

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Video Export",
    traditional: "Static PNG/SVG only.",
    kromaStudio: "60fps looping .webm video.",
    summary: "Traditional code screenshot tools like Carbon only produce static images. KromaStudio adds a native video export pipeline right into the browser.",
  },
  {
    feature: "Export Speed",
    traditional: "Screen recording requires manual setup and cropping.",
    kromaStudio: "1-click generation.",
    summary: "Instead of setting up OBS or QuickTime and cropping the video manually, KromaStudio programmatically renders and captures the exact canvas bounds.",
  },
  {
    feature: "Cost",
    traditional: "Animated code generators often charge $5-$20/month.",
    kromaStudio: "100% Free.",
    summary: "We don't charge for video exports. It's built on native web technologies so we don't have to pay for cloud rendering servers.",
  },
  {
    feature: "Watermarks",
    traditional: "Free video tiers usually slap a huge watermark on your code.",
    kromaStudio: "No watermarks.",
    summary: "Your code is your own. We never add KromaStudio watermarks to your exports, even on video.",
  },
];

export const KEY_DIFFERENCES = [
  {
    title: "No After Effects Required",
    href: "/how-it-works",
    linkLabel: "See how animation works",
    paragraphs: [
      "Creating smooth 3D tilts or floating animations used to require complex motion graphics software. It was overkill for a quick Twitter post.",
      "KromaStudio handles the easing, keyframes, and timing automatically. Pick a preset, hit export, and you get a buttery smooth 60fps loop.",
    ],
  },
  {
    title: "Client-Side Rendering",
    href: "/privacy",
    linkLabel: "Read about our client-side privacy",
    paragraphs: [
      "Video rendering is typically computationally expensive, which is why other tools send your code to a cloud server to render the video, charging you for 'server time'.",
      "KromaStudio uses the Canvas API and MediaRecorder to render the video locally using your device's GPU. It's faster, private, and completely free.",
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "What format does the animated code export in?",
    a: "KromaStudio exports videos in the .webm format. It is a highly optimized, web-friendly video format supported by Twitter/X, LinkedIn, and most modern social platforms.",
  },
  {
    q: "Why .webm and not .mp4 or .gif?",
    a: ".webm offers significantly better quality and file size compared to .gif, while remaining natively supported by modern browser rendering APIs. MP4 encoding in the browser requires heavy WebAssembly packages, which would slow down the tool.",
  },
  {
    q: "Are the animations seamless loops?",
    a: "Yes! Presets like Float and Auto Scroll are mathematically calculated to loop seamlessly. They look great when uploaded to platforms that auto-replay short videos.",
  },
  {
    q: "Do I have to pay to remove the watermark on videos?",
    a: "No. KromaStudio never adds watermarks to your exports, whether they are static PNGs or animated videos.",
  },
  {
    q: "Will this work on Safari?",
    a: "Safari has limited support for the MediaRecorder API needed to export .webm videos. For the best experience and smoothest 60fps recording, we strongly recommend using Google Chrome, Edge, or Arc.",
  },
];
