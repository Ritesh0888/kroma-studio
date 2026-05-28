"use client";

import { deriveAvatarInitials, useStudioStore } from "@/store/useStudioStore";

function useIsPortrait() {
  const aspectRatio = useStudioStore((s) => s.aspectRatio);
  return aspectRatio === "9:16";
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-[#1d9bf0] p-0.5" aria-label="Verified account">
      <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 1.5l2.14 2.2 3.03-.27.94 2.9 2.68 1.45-1.33 2.74 1.33 2.74-2.68 1.45-.94 2.9-3.03-.27L10 18.5l-2.14-2.2-3.03.27-.94-2.9-2.68-1.45 1.33-2.74-1.33-2.74 2.68-1.45.94-2.9 3.03.27L10 1.5zm-1.18 11.22l5.03-5.03-1.06-1.06-3.97 3.97-1.67-1.67-1.06 1.06 2.73 2.73z" />
      </svg>
    </span>
  );
}

function Avatar({
  src,
  author,
  accentColor,
}: {
  src: string | null;
  author: string;
  accentColor: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${author} avatar`}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
      style={{ background: accentColor }}
      aria-label="Avatar initials"
    >
      {deriveAvatarInitials(author)}
    </div>
  );
}

function TweetCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAvatarUrl = useStudioStore((s) => s.contentAvatarUrl);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);
  const contentShowVerified = useStudioStore((s) => s.contentShowVerified);
  const contentShowMetrics = useStudioStore((s) => s.contentShowMetrics);
  const contentMetrics = useStudioStore((s) => s.contentMetrics);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-4 md:p-6">
      <header className="flex items-center gap-3">
        <Avatar src={contentAvatarUrl} author={contentAuthor} accentColor={contentAccentColor} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-semibold text-white md:text-base">{contentAuthor}</p>
            {contentShowVerified && <VerifiedBadge />}
          </div>
          <p className="truncate text-xs text-text-muted md:text-sm">{contentHandle}</p>
        </div>
      </header>

      <p className={`mt-4 whitespace-pre-wrap wrap-break-word leading-relaxed text-white ${isPortrait ? "text-xs" : "text-sm md:text-base"}`}>
        {contentText}
      </p>

      {contentShowMetrics && (
        <footer className={`mt-auto grid gap-2 pt-4 text-text-muted ${isPortrait ? "grid-cols-2 text-[10px]" : "grid-cols-4 text-[11px] md:text-xs"}`}>
          <div className="rounded-lg border border-surface-2 px-2 py-1.5">Reply {contentMetrics.reply}</div>
          <div className="rounded-lg border border-surface-2 px-2 py-1.5">Repost {contentMetrics.repost}</div>
          <div className="rounded-lg border border-surface-2 px-2 py-1.5">Like {contentMetrics.like}</div>
          <div className="rounded-lg border border-surface-2 px-2 py-1.5">Bookmark {contentMetrics.bookmark}</div>
        </footer>
      )}
    </article>
  );
}

function LinkedInCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAvatarUrl = useStudioStore((s) => s.contentAvatarUrl);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);
  const contentShowVerified = useStudioStore((s) => s.contentShowVerified);
  const contentShowMetrics = useStudioStore((s) => s.contentShowMetrics);
  const contentMetrics = useStudioStore((s) => s.contentMetrics);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-4 md:p-6">
      <header className="flex items-center gap-3">
        <Avatar src={contentAvatarUrl} author={contentAuthor} accentColor={contentAccentColor} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-semibold text-white md:text-base">{contentAuthor}</p>
            {contentShowVerified && <VerifiedBadge />}
          </div>
          <p className="truncate text-xs text-text-muted md:text-sm">{contentHandle}</p>
        </div>
      </header>

      <p className={`mt-4 whitespace-pre-wrap wrap-break-word leading-relaxed text-white ${isPortrait ? "text-xs" : "text-sm md:text-base"}`}>
        {contentText}
      </p>

      {contentShowMetrics && (
        <footer className={`mt-auto grid gap-2 pt-4 text-text-muted ${isPortrait ? "grid-cols-1 text-[10px]" : "grid-cols-3 text-[11px] md:text-xs"}`}>
          <div className="rounded-lg border border-surface-2 px-2 py-1.5">{contentMetrics.reactions} Reactions</div>
          <div className="rounded-lg border border-surface-2 px-2 py-1.5">{contentMetrics.comments} Comments</div>
          <div className="rounded-lg border border-surface-2 px-2 py-1.5">{contentMetrics.repost} Reposts</div>
        </footer>
      )}
    </article>
  );
}

function ThreadCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAvatarUrl = useStudioStore((s) => s.contentAvatarUrl);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);

  const parts = contentText.split("\n").filter(Boolean);
  const threadItems = (parts.length ? parts : [contentText]).slice(0, 4);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-4 md:p-6">
      <header className="mb-3 flex items-center gap-3">
        <Avatar src={contentAvatarUrl} author={contentAuthor} accentColor={contentAccentColor} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white md:text-base">{contentAuthor}</p>
          <p className="truncate text-xs text-text-muted md:text-sm">{contentHandle}</p>
        </div>
      </header>

      <div className="flex flex-col gap-3 overflow-auto">
        {threadItems.map((item, index) => (
          <div key={`${item}-${index}`} className="rounded-xl border border-surface-2 p-3">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              Post {index + 1}
            </p>
            <p className={`whitespace-pre-wrap wrap-break-word leading-relaxed text-white ${isPortrait ? "text-xs" : "text-sm md:text-base"}`}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function QuoteCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-5 md:p-8">
      <div className="h-1 w-14 rounded-full" style={{ background: contentAccentColor }} />
      <blockquote className={`mt-4 whitespace-pre-wrap wrap-break-word font-semibold leading-tight text-white ${isPortrait ? "text-base" : "text-lg md:text-3xl"}`}>
        &quot;{contentText}&quot;
      </blockquote>
      <footer className="mt-auto pt-6">
        <p className="text-sm font-semibold text-white md:text-base">{contentAuthor}</p>
        <p className="text-xs text-text-muted md:text-sm">{contentHandle}</p>
      </footer>
    </article>
  );
}

function AnnouncementCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-5 md:p-8">
      <span
        className="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
        style={{ background: contentAccentColor }}
      >
        Announcement
      </span>
      <h3 className={`mt-4 font-bold tracking-tight text-white ${isPortrait ? "text-lg" : "text-xl md:text-3xl"}`}>{contentAuthor}</h3>
      <p className={`mt-3 whitespace-pre-wrap wrap-break-word leading-relaxed text-text-muted ${isPortrait ? "text-xs" : "text-sm md:text-base"}`}>
        {contentText}
      </p>
      <p className="mt-auto pt-6 text-xs font-semibold uppercase tracking-wider text-white md:text-sm">
        {contentHandle || "Learn more"}
      </p>
    </article>
  );
}

function TestimonialCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAvatarUrl = useStudioStore((s) => s.contentAvatarUrl);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-5 md:p-8">
      <p className="text-3xl leading-none" style={{ color: contentAccentColor }}>
        &quot;
      </p>
      <blockquote className={`mt-2 whitespace-pre-wrap wrap-break-word leading-relaxed text-white ${isPortrait ? "text-xs" : "text-sm md:text-lg"}`}>
        {contentText}
      </blockquote>

      <footer className="mt-auto flex items-center gap-3 pt-6">
        <Avatar src={contentAvatarUrl} author={contentAuthor} accentColor={contentAccentColor} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white md:text-base">{contentAuthor}</p>
          <p className="truncate text-xs text-text-muted md:text-sm">{contentHandle}</p>
        </div>
      </footer>
    </article>
  );
}

function CarouselCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);

  const slides = contentText.split("\n").filter(Boolean).slice(0, 3);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-5 md:p-8">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-white md:text-base">{contentAuthor}</p>
        <p className="text-xs text-text-muted">{contentHandle || "1/3"}</p>
      </div>

      <div className={`grid flex-1 gap-3 ${isPortrait ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"}`}>
        {(slides.length ? slides : [contentText, "Add second point", "Add third point"]).map((slide, index) => (
          <div
            key={`${slide}-${index}`}
            className="rounded-xl border border-surface-2 p-3"
            style={{ borderColor: index === 0 ? contentAccentColor : undefined }}
          >
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              Slide {index + 1}
            </p>
            <p className="whitespace-pre-wrap wrap-break-word text-xs leading-relaxed text-white md:text-sm">
              {slide}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function BeforeAfterCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);

  const [before = "Before: Slow, cluttered, unclear.", after = "After: Fast, clean, and conversion-focused."] =
    contentText.split("\n").filter(Boolean);

  return (
    <article className="mx-auto flex min-h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-5 md:p-8">
      <h3 className="text-lg font-bold text-white md:text-2xl">{contentAuthor}</h3>
      <p className="mt-1 text-xs text-text-muted md:text-sm">{contentHandle}</p>

      <div className={`mt-4 grid flex-1 grid-cols-1 gap-3 ${isPortrait ? "" : "sm:grid-cols-2"}`}>
        <div className="rounded-xl border border-surface-2 p-4">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#f97316]">Before</p>
          <p className="whitespace-pre-wrap wrap-break-word text-sm leading-relaxed text-white">{before}</p>
        </div>
        <div className="rounded-xl border p-4" style={{ borderColor: contentAccentColor }}>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider" style={{ color: contentAccentColor }}>
            After
          </p>
          <p className="whitespace-pre-wrap wrap-break-word text-sm leading-relaxed text-white">{after}</p>
        </div>
      </div>
    </article>
  );
}

function MetricsCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);
  const contentShowMetrics = useStudioStore((s) => s.contentShowMetrics);
  const contentMetrics = useStudioStore((s) => s.contentMetrics);

  return (
    <article className="mx-auto flex h-full w-full max-w-3xl flex-col rounded-2xl border border-border bg-surface p-5 md:p-8">
      <h3 className="text-lg font-bold text-white md:text-2xl">{contentAuthor}</h3>
      <p className="mt-1 text-xs text-text-muted md:text-sm">{contentHandle}</p>
      <p className={`mt-4 whitespace-pre-wrap wrap-break-word leading-relaxed text-white ${isPortrait ? "text-xs" : "text-sm md:text-base"}`}>
        {contentText}
      </p>

      {contentShowMetrics && (
        <div className={`mt-auto grid gap-3 pt-6 ${isPortrait ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
          {[
            ["Impressions", contentMetrics.impressions],
            ["CTR", contentMetrics.ctr],
            ["Leads", contentMetrics.leads],
            ["Revenue", contentMetrics.revenue],
          ].map(([k, v]) => (
            <div key={k} className={`rounded-xl border border-surface-2 ${isPortrait ? "px-2 py-2" : "px-3 py-2"}`}>
              <p className="text-[10px] uppercase tracking-wider text-text-muted">{k}</p>
              <p className={`mt-1 font-semibold ${isPortrait ? "text-xs" : "text-sm"}`} style={{ color: contentAccentColor }}>{v}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export function ContentDisplay() {
  const contentTemplate = useStudioStore((s) => s.contentTemplate);

  return (
    <div className="hide-scrollbar h-full w-full overflow-auto p-3 md:p-5">
      {contentTemplate === "tweet" && <TweetCard />}
      {contentTemplate === "linkedin" && <LinkedInCard />}
      {contentTemplate === "video" && <VideoCard />}
      {contentTemplate === "thread" && <ThreadCard />}
      {contentTemplate === "quote" && <QuoteCard />}
      {contentTemplate === "announcement" && <AnnouncementCard />}
      {contentTemplate === "testimonial" && <TestimonialCard />}
      {contentTemplate === "carousel" && <CarouselCard />}
      {contentTemplate === "before-after" && <BeforeAfterCard />}
      {contentTemplate === "metrics" && <MetricsCard />}
    </div>
  );
}

function VideoCard() {
  const isPortrait = useIsPortrait();
  const contentText = useStudioStore((s) => s.contentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);
  const contentAvatarUrl = useStudioStore((s) => s.contentAvatarUrl);

  const lines = contentText.split("\n").filter(Boolean);
  const title = lines[0] ?? contentText;
  const caption = lines[1] ?? "Tap to play full walkthrough";

  return (
    <article className="mx-auto grid min-h-full w-full max-w-3xl grid-rows-[auto_1fr_auto] gap-3 rounded-2xl border border-border bg-surface p-4 md:p-6">
      <header className="flex items-center gap-3">
        <Avatar src={contentAvatarUrl} author={contentAuthor} accentColor={contentAccentColor} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white md:text-base">{contentAuthor}</p>
          <p className="truncate text-xs text-text-muted md:text-sm">{contentHandle}</p>
        </div>
      </header>

      <div className="relative overflow-hidden rounded-xl border border-surface-2 bg-[#09090b]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${contentAccentColor}, transparent 60%)`,
          }}
        />
        <div className="relative flex h-full min-h-45 flex-col justify-between p-4 md:min-h-55 md:p-5">
          <p className={`max-w-[90%] whitespace-pre-wrap wrap-break-word font-semibold leading-snug text-white ${isPortrait ? "text-xs" : "text-sm md:text-lg"}`}>
            {title}
          </p>

          <div className="flex items-center justify-between">
            <p className="max-w-[70%] truncate text-xs text-text-muted md:text-sm">{caption}</p>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full text-white"
              style={{ background: contentAccentColor }}
              aria-label="Video play button preview"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4.5v11l9-5.5-9-5.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between text-[11px] text-text-muted md:text-xs">
        <span>Video Post</span>
        <span>02:18</span>
      </footer>
    </article>
  );
}
