"use client";

import { useEffect, useRef } from "react";
import { CONTENT_TEMPLATES, useStudioStore } from "@/store/useStudioStore";
import { track } from "@/lib/analytics";

type ControlSource = "desktop" | "mobile";

const ACCENT_SWATCHES = ["#a855f7", "#ec4899", "#1d9bf0", "#10b981", "#f59e0b"];

export function ContentControls({ source = "desktop" }: { source?: ControlSource }) {
  const contentTemplate = useStudioStore((s) => s.contentTemplate);
  const setContentTemplate = useStudioStore((s) => s.setContentTemplate);
  const contentText = useStudioStore((s) => s.contentText);
  const setContentText = useStudioStore((s) => s.setContentText);
  const contentAuthor = useStudioStore((s) => s.contentAuthor);
  const setContentAuthor = useStudioStore((s) => s.setContentAuthor);
  const contentHandle = useStudioStore((s) => s.contentHandle);
  const setContentHandle = useStudioStore((s) => s.setContentHandle);
  const contentAvatarUrl = useStudioStore((s) => s.contentAvatarUrl);
  const setContentAvatarUrl = useStudioStore((s) => s.setContentAvatarUrl);
  const contentAccentColor = useStudioStore((s) => s.contentAccentColor);
  const setContentAccentColor = useStudioStore((s) => s.setContentAccentColor);
  const contentShowVerified = useStudioStore((s) => s.contentShowVerified);
  const setContentShowVerified = useStudioStore((s) => s.setContentShowVerified);
  const contentShowMetrics = useStudioStore((s) => s.contentShowMetrics);
  const setContentShowMetrics = useStudioStore((s) => s.setContentShowMetrics);
  const contentMetrics = useStudioStore((s) => s.contentMetrics);
  const setContentMetrics = useStudioStore((s) => s.setContentMetrics);

  const supportsAvatar = ["tweet", "linkedin", "video", "thread", "testimonial"].includes(contentTemplate);
  const supportsVerified = ["tweet", "linkedin", "thread"].includes(contentTemplate);
  const supportsMetrics = ["tweet", "linkedin", "metrics"].includes(contentTemplate);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      track("content_text_edit", {
        mode: "content",
        template: contentTemplate,
        source,
        length: contentText.length,
      });
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [contentText, contentTemplate, source]);

  const handleAvatarUpload = (file: File | null) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setContentAvatarUrl(reader.result);
        track("content_avatar_upload", {
          mode: "content",
          template: contentTemplate,
          source,
          extension: file.name.split(".").pop()?.toLowerCase() ?? "unknown",
          size_kb: Math.round(file.size / 1024),
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
          Template
        </label>
        <select
          value={contentTemplate}
          onChange={(event) => {
            const nextTemplate = event.target.value as typeof contentTemplate;
            setContentTemplate(nextTemplate);
            track("content_template_select", {
              mode: "content",
              source,
              template: nextTemplate,
            });
          }}
          className="w-full cursor-pointer rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] transition-colors hover:border-border focus:border-neon-purple/50 focus:outline-none"
        >
          {CONTENT_TEMPLATES.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
          Content
        </label>
        <textarea
          value={contentText}
          onChange={(event) => setContentText(event.target.value)}
          rows={6}
          placeholder="Write your post content..."
          className="w-full resize-none rounded-lg border border-[#1e1e1e] bg-surface px-3 py-2.5 text-xs leading-relaxed text-[#a0a0a0] placeholder:text-[#3a3a3a] transition-colors hover:border-border focus:border-neon-purple/50 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
            Author
          </label>
          <input
            type="text"
            value={contentAuthor}
            onChange={(event) => setContentAuthor(event.target.value)}
            placeholder="e.g. Kroma Team"
            className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] placeholder:text-[#3a3a3a] transition-colors hover:border-border focus:border-neon-purple/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
            Handle / Subtitle
          </label>
          <input
            type="text"
            value={contentHandle}
            onChange={(event) => setContentHandle(event.target.value)}
            placeholder="e.g. @kromastudio"
            className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] placeholder:text-[#3a3a3a] transition-colors hover:border-border focus:border-neon-purple/50 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
          Avatar
        </label>
        <div className="flex items-center gap-2">
          <label
            className={`inline-flex items-center justify-center rounded-lg border border-[#1e1e1e] bg-surface px-3 py-2 text-[11px] font-medium text-text-muted transition-colors ${
              supportsAvatar
                ? "cursor-pointer hover:border-border hover:text-[#a0a0a0]"
                : "cursor-not-allowed opacity-40"
            }`}
          >
            Upload
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={!supportsAvatar}
              onChange={(event) => handleAvatarUpload(event.target.files?.[0] ?? null)}
            />
          </label>

          {contentAvatarUrl && (
            <button
              onClick={() => setContentAvatarUrl(null)}
              disabled={!supportsAvatar}
              className={`rounded-lg border border-[#1e1e1e] bg-[#0a0a0a] px-3 py-2 text-[11px] font-medium transition-colors ${
                supportsAvatar
                  ? "text-[#7a7a7a] hover:border-border hover:text-text-muted"
                  : "cursor-not-allowed text-[#5a5a5a] opacity-40"
              }`}
            >
              Clear
            </button>
          )}

          <span className="truncate text-[10px] text-[#4a4a4a]">
            {supportsAvatar
              ? contentAvatarUrl
                ? "Custom avatar selected"
                : "Using initials fallback"
              : "Not used in this template"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
          Accent Color
        </label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={contentAccentColor}
            onChange={(event) => setContentAccentColor(event.target.value)}
            className="h-8 w-8 cursor-pointer rounded-lg border border-[#1e1e1e] bg-transparent"
          />
          <div className="flex flex-wrap gap-1.5">
            {ACCENT_SWATCHES.map((swatch) => (
              <button
                key={swatch}
                onClick={() => setContentAccentColor(swatch)}
                className={`h-6 w-6 rounded-md border-2 transition-transform ${
                  contentAccentColor === swatch
                    ? "scale-110 border-white"
                    : "border-transparent hover:scale-105"
                }`}
                style={{ background: swatch }}
                title={swatch}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
            Show verified badge
          </span>
          <button
            onClick={() => supportsVerified && setContentShowVerified(!contentShowVerified)}
            disabled={!supportsVerified}
            className={`relative h-5 w-9 rounded-full transition-colors ${
              !supportsVerified
                ? "cursor-not-allowed bg-[#1e1e1e] opacity-40"
                : contentShowVerified
                ? "bg-neon-purple"
                : "bg-[#1e1e1e]"
            }`}
            aria-label="Toggle verified badge"
          >
            <span
              className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                contentShowVerified ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
            Show metrics row
          </span>
          <button
            onClick={() => supportsMetrics && setContentShowMetrics(!contentShowMetrics)}
            disabled={!supportsMetrics}
            className={`relative h-5 w-9 rounded-full transition-colors ${
              !supportsMetrics
                ? "cursor-not-allowed bg-[#1e1e1e] opacity-40"
                : contentShowMetrics
                ? "bg-neon-purple"
                : "bg-[#1e1e1e]"
            }`}
            aria-label="Toggle metrics row"
          >
            <span
              className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                contentShowMetrics ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {supportsMetrics && contentShowMetrics && (
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
            Metrics Values
          </label>

          {contentTemplate === "tweet" && (
            <div className="grid grid-cols-2 gap-2">
              <input
                value={contentMetrics.reply}
                onChange={(event) => setContentMetrics({ reply: event.target.value })}
                placeholder="Reply"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.repost}
                onChange={(event) => setContentMetrics({ repost: event.target.value })}
                placeholder="Repost"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.like}
                onChange={(event) => setContentMetrics({ like: event.target.value })}
                placeholder="Like"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.bookmark}
                onChange={(event) => setContentMetrics({ bookmark: event.target.value })}
                placeholder="Bookmark"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
            </div>
          )}

          {contentTemplate === "linkedin" && (
            <div className="grid grid-cols-3 gap-2">
              <input
                value={contentMetrics.reactions}
                onChange={(event) => setContentMetrics({ reactions: event.target.value })}
                placeholder="Reactions"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.comments}
                onChange={(event) => setContentMetrics({ comments: event.target.value })}
                placeholder="Comments"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.repost}
                onChange={(event) => setContentMetrics({ repost: event.target.value })}
                placeholder="Reposts"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
            </div>
          )}

          {contentTemplate === "metrics" && (
            <div className="grid grid-cols-2 gap-2">
              <input
                value={contentMetrics.impressions}
                onChange={(event) => setContentMetrics({ impressions: event.target.value })}
                placeholder="Impressions"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.ctr}
                onChange={(event) => setContentMetrics({ ctr: event.target.value })}
                placeholder="CTR"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.leads}
                onChange={(event) => setContentMetrics({ leads: event.target.value })}
                placeholder="Leads"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
              <input
                value={contentMetrics.revenue}
                onChange={(event) => setContentMetrics({ revenue: event.target.value })}
                placeholder="Revenue"
                className="w-full rounded-lg border border-[#1e1e1e] bg-surface px-2.5 py-2 text-xs text-[#a0a0a0] focus:border-neon-purple/50 focus:outline-none"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
