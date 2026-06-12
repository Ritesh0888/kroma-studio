"use client";

import Image from "next/image";
import { useRef } from "react";
import { FEATURE_CAROUSEL } from "@/lib/landing/home";
import {
  landingBody,
  landingCard,
  landingIconBtn,
  landingMediaFrame,
  landingScreenshotImg,
} from "@/lib/landing-ui";

export function HomeFeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -el.clientWidth * 0.85 : el.clientWidth * 0.85;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <p className={`${landingBody} text-sm`}>
          Everything you need to ship beautiful developer visuals
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous features"
            onClick={() => scrollBy("left")}
            className={landingIconBtn}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next features"
            onClick={() => scrollBy("right")}
            className={landingIconBtn}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="landing-carousel-scroll hide-scrollbar flex gap-4 overflow-x-auto pb-2"
      >
        {FEATURE_CAROUSEL.map((slide) => (
          <article
            key={slide.id}
            className={`${landingCard} w-[min(85vw,320px)] shrink-0 snap-start`}
          >
            <div className={landingMediaFrame}>
              <Image
                src={slide.screenshot}
                alt={slide.screenshotAlt}
                width={1200}
                height={750}
                className={landingScreenshotImg}
                sizes="320px"
              />
            </div>
            <h3 className="text-sm font-medium text-[#202124]">{slide.title}</h3>
            <p className={`${landingBody} text-xs`}>{slide.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
