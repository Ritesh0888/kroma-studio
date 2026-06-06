export type TechStackItem = {
  category: string;
  technology: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
};

export const TECH_STACK: TechStackItem[] = [
  {
    category: "Framework",
    technology: "Next.js 16 (App Router)",
    description: "React framework for production. We rely on the App Router for clean routing and layout structures without any server-side rendering for the core studio logic.",
  },
  {
    category: "UI & Styling",
    technology: "React 19 + Tailwind CSS 4",
    description: "Modern component architecture combined with the latest utility-first CSS framework for fast, consistent, and responsive design.",
  },
  {
    category: "State Management",
    technology: "Zustand 5",
    description: "A small, fast, and scalable bearbones state-management solution. Used to keep the studio canvas in sync with the sidebar controls.",
  },
  {
    category: "Syntax Highlighting",
    technology: "Shiki 4",
    description: "A beautiful and powerful syntax highlighter based on TextMate grammars. Provides the core magic behind our 15 built-in themes and accurate tokenization.",
  },
  {
    category: "Animations",
    technology: "Framer Motion 12",
    description: "Production-ready motion library for React. Powers the 3D Tilt, Auto Scroll, and Float animations before they are exported as video.",
  },
  {
    category: "Export (Image)",
    technology: "html-to-image",
    description: "Generates an image from a DOM node using HTML5 canvas and SVG. We use it to produce high-resolution, 2× PNG exports of your code snippets and mockups.",
  },
  {
    category: "Export (Video)",
    technology: "MediaRecorder API + Canvas captureStream",
    description: "Native browser APIs to record the animated DOM elements into a smooth 60fps .webm video loop — all happening locally without a server.",
  },
];

export const SELF_HOST_STEPS = [
  {
    title: "Clone the Repository",
    code: "git clone https://github.com/Ritesh0888/kroma-studio.git\ncd kroma-studio",
  },
  {
    title: "Install Dependencies",
    code: "npm install",
  },
  {
    title: "Set Up Environment Variables",
    code: "cp .env.local.example .env.local\n# Edit .env.local to match your URLs if needed",
  },
  {
    title: "Run the Development Server",
    code: "npm run dev",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "Why is KromaStudio open source?",
    a: "We believe developer tools should be transparent. By open-sourcing the project, you can inspect how we handle your code, verify our privacy claims, and even self-host the studio if you prefer.",
  },
  {
    q: "Can I self-host KromaStudio?",
    a: "Yes. The project is MIT licensed. You can clone the repository, install dependencies via npm, and run it locally or deploy it to your own infrastructure like Vercel.",
  },
  {
    q: "How does the client-side rendering work?",
    a: "We use modern browser APIs. Shiki highlights the code in the DOM, html-to-image converts that DOM into a high-res PNG via Canvas, and MediaRecorder captures the Canvas stream to encode .webm videos directly on your device.",
  },
  {
    q: "Can I contribute a new theme or language?",
    a: "Absolutely. We welcome pull requests! Since we use Shiki, adding a new theme or language is generally straightforward. Please check our CONTRIBUTING.md file in the repo.",
  },
  {
    q: "Is there a server processing my code?",
    a: "No. Your code is never sent to a backend server. Everything from syntax highlighting to video export happens 100% locally in your browser memory.",
    href: "/privacy",
    linkLabel: "Read privacy policy",
  },
];
