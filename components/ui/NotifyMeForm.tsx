"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NOTIFY_ME_CTA } from "@/lib/copy";
import { track } from "@/lib/analytics";

const STORAGE_KEY = "kroma_early_access_emails";

function saveEmail(email: string) {
  try {
    const existing: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
  } catch {
    // localStorage unavailable
  }
}

function alreadySaved(email: string): boolean {
  try {
    const existing: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return existing.includes(email);
  } catch {
    return false;
  }
}

type NotifyMeFormProps = {
  feature?: string;
  teaser?: string;
  showTitle?: boolean;
  onSuccess?: () => void;
  onDismiss?: (reason: "maybe_later" | "close_button") => void;
  compact?: boolean;
};

export function NotifyMeForm({
  feature,
  teaser,
  showTitle = true,
  onSuccess,
  onDismiss,
  compact = false,
}: NotifyMeFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!compact) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [compact]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Valid email chahiye!");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, feature }),
      });
    } catch {
      // silent — still mark as submitted locally
    } finally {
      setLoading(false);
    }
    track("waitlist_signup", { feature: feature ?? "unknown" });
    saveEmail(trimmed);
    setSubmitted(true);
    onSuccess?.();
  }

  const handleDismiss = useCallback(
    (reason: "maybe_later" | "close_button") => {
      track("email_capture_dismiss", { feature: feature ?? "unknown", reason });
      onDismiss?.(reason);
    },
    [feature, onDismiss],
  );

  const isAlreadySaved = !submitted && alreadySaved(email.trim());

  if (submitted) {
    return (
      <div className={`flex flex-col items-center gap-2 text-center ${compact ? "py-1" : "py-2"}`}>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-neon-purple to-neon-pink">
          <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-sm font-semibold text-white">You&apos;re on the list!</p>
        <p className="text-xs text-text-muted">We&apos;ll ping you the moment it launches.</p>
        {onDismiss && (
          <button
            type="button"
            onClick={() => handleDismiss("close_button")}
            className="mt-1 text-xs text-neon-purple hover:underline"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {showTitle && (
        <p className="text-sm font-semibold text-white">{NOTIFY_ME_CTA}</p>
      )}
      {teaser && (
        <p className={`leading-relaxed text-[#c0c0c0] ${compact ? "text-xs" : "text-xs mb-1"}`}>
          {teaser}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          ref={inputRef}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className="w-full rounded-lg border border-border bg-[#111] px-3 py-2 text-xs text-white placeholder-[#3a3a3a] outline-none transition-colors focus:border-neon-purple"
        />
        {error && <p className="text-[10px] text-neon-pink">{error}</p>}
        {isAlreadySaved && (
          <p className="text-[10px] text-neon-purple">Already registered!</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-linear-to-r from-neon-purple to-neon-pink py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Sending…" : NOTIFY_ME_CTA}
        </button>
      </form>

      {onDismiss && (
        <button
          type="button"
          onClick={() => handleDismiss("maybe_later")}
          className="w-full text-center text-[10px] text-[#3a3a3a] transition-colors hover:text-text-muted"
        >
          Maybe later
        </button>
      )}
    </div>
  );
}
