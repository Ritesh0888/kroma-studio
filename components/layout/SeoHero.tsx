import { STUDIO_MARQUEE_ITEMS } from "@/lib/site";

function MarqueeSegment({ copy }: { copy: "a" | "b" }) {
  return (
    <>
      {STUDIO_MARQUEE_ITEMS.map((item, index) => (
        <span
          key={`${copy}-${index}`}
          className="inline-flex shrink-0 items-center gap-8"
        >
          <span className="text-xs font-medium tracking-wide text-text-muted">
            {item}
          </span>
          <span
            aria-hidden
            className="bg-linear-to-r from-neon-purple to-neon-pink bg-clip-text text-[10px] text-transparent"
          >
            ◆
          </span>
        </span>
      ))}
    </>
  );
}

export function SeoHero() {
  return (
    <header className="hidden shrink-0 items-center gap-3 border-b border-surface-2 bg-[#080808] px-4 py-2 md:flex">
      <div
        className="seo-marquee relative min-w-0 flex-1 overflow-hidden"
      >
        <div className="seo-marquee-track flex w-max items-center">
          <MarqueeSegment copy="a" />
          <MarqueeSegment copy="b" />
        </div>
      </div>
    </header>
  );
}
