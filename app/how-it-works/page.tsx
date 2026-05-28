import { LandingShell } from "@/components/layout/LandingShell";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getHowItWorksJsonLd } from "@/lib/json-ld";
import { LANDING_PAGE_META } from "@/lib/site";
import { createLandingMetadata } from "@/lib/landing-metadata";

export const metadata = createLandingMetadata({
  path: "/how-it-works",
  ...LANDING_PAGE_META.howItWorks,
});

const STEPS = [
  {
    title: "Paste your code or upload a screenshot",
    body: "Open KromaStudio and switch to Code mode to paste a snippet, or stay in Image mode to drop in a screenshot. Supports 25 languages including TypeScript, JavaScript, Python, Java, Kotlin, Swift, PHP, Ruby, Go, Rust, and more.",
  },
  {
    title: "Customize the look",
    body: "Pick a syntax theme like Dracula or One Dark Pro, choose from 12 gradient backgrounds, adjust padding and shadows, and optionally add a headline overlay for social posts.",
  },
  {
    title: "Export HD PNG or animated video",
    body: "Click Export for a 2× resolution PNG, or open Animate to render Float, 3D Tilt, or Auto Scroll loops as .webm — ready for Twitter, LinkedIn, or Reels.",
  },
];

const FAQ = [
  {
    q: "Is KromaStudio free?",
    a: "Yes. KromaStudio is completely free with no sign-up required.",
  },
  {
    q: "Does my code leave my browser?",
    a: "No. KromaStudio runs 100% client-side. Your code and images never leave your device.",
  },
  {
    q: "What code themes are supported?",
    a: "15 themes: Dracula, One Dark Pro, GitHub Dark, Night Owl, Tokyo Night, Catppuccin Mocha, Catppuccin Latte, Nord, Monokai, Synthwave \u201884, Solarized Dark, Rosé Pine, Material Ocean, Vitesse Dark, and GitHub Light.",
  },
  {
    q: "Can I export animated video loops?",
    a: "Yes. Use the Animate panel to pick Float, 3D Tilt, or Auto Scroll, then render a looping .webm — already live, 100% client-side.",
  },
  {
    q: "Can I create browser mockups too?",
    a: "Yes. Switch to Image mode to wrap screenshots in macOS, Windows, or minimal browser frames.",
  },
];

const jsonLd = getHowItWorksJsonLd();

export default function HowItWorksPage() {
  return (
    <LandingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            How to Make Aesthetic Code Screenshots
          </h1>
          <p className="text-base leading-relaxed text-text-muted">
            KromaStudio is a free online tool for developers and designers who want
            polished code screenshots and browser mockups without opening Figma or
            Photoshop. Everything runs in your browser — no account, no upload.
          </p>
        </div>

        <section className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold">Three steps</h2>
          <ol className="flex flex-col gap-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-white">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Frequently asked questions</h2>
          <dl className="flex flex-col gap-4">
            {FAQ.map((item) => (
              <div key={item.q}>
                <dt className="text-sm font-semibold text-white">{item.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <TrackedLink
          href="/"
          label="Try KromaStudio Free"
          location="how_it_works_cta"
          className="inline-flex w-fit items-center justify-center rounded-xl bg-linear-to-r from-neon-purple to-neon-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Try KromaStudio Free
        </TrackedLink>
      </article>
    </LandingShell>
  );
}
