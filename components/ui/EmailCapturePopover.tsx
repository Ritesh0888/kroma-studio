"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

interface Props {
  teaser: string;
  feature?: string;
  onClose: () => void;
}

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

export function EmailCapturePopover({ teaser, feature, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

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
  }

  const isAlreadySaved = !submitted && alreadySaved(email.trim());

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 z-50 mt-2 rounded-xl border border-[#a855f7]/30 bg-[#0d0d1a] shadow-2xl shadow-[#a855f7]/20 overflow-hidden"
      style={{ top: "100%" }}
    >
      {/* Neon top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#a855f7]" />

      <div className="p-4">
        {submitted ? (
          <div className="flex flex-col items-center gap-2 py-2 text-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white">You&apos;re on the list!</p>
            <p className="text-xs text-[#6b6b6b]">We&apos;ll ping you the moment it launches.</p>
            <button
              onClick={onClose}
              className="mt-1 text-xs text-[#a855f7] hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Teaser text */}
            <p className="text-xs text-[#c0c0c0] leading-relaxed mb-3">{teaser}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                ref={inputRef}
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="w-full px-3 py-2 rounded-lg bg-[#111] border border-[#2a2a2a] focus:border-[#a855f7] text-xs text-white placeholder-[#3a3a3a] outline-none transition-colors"
              />
              {error && (
                <p className="text-[10px] text-[#ec4899]">{error}</p>
              )}
              {isAlreadySaved && (
                <p className="text-[10px] text-[#a855f7]">Already registered!</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-xs font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loading ? "Sending…" : "Notify Me — It's Free"}
              </button>
            </form>

            <button
              onClick={onClose}
              className="mt-2 w-full text-center text-[10px] text-[#3a3a3a] hover:text-[#6b6b6b] transition-colors"
            >
              Maybe later
            </button>
          </>
        )}
      </div>
    </div>
  );
}
