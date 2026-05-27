"use client";

import { useEffect } from "react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { track } from "@/lib/analytics";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("[AppError]", error);
    track("app_error", { message: error.message, digest: error.digest ?? "" });
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-semibold text-neon-purple uppercase tracking-[0.2em] mb-4">
          Error
        </p>
        <h1 className="text-2xl font-bold text-white mb-3">Something went wrong</h1>
        <p className="text-sm text-[#4a4a4a] leading-relaxed mb-8">
          An unexpected error occurred. You can try again or refresh the page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              track("app_error_retry_click");
              unstable_retry();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-neon-purple to-neon-pink text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
          <TrackedLink
            href="/"
            label="Back to Studio"
            location="error_back_to_studio"
            onClick={() => track("app_error_back_to_studio_click")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-text-muted text-sm font-medium hover:border-neon-purple/30 hover:text-white transition-all"
          >
            Back to Studio
          </TrackedLink>
        </div>
      </div>
      <p className="absolute bottom-6 text-[10px] text-border tracking-widest uppercase">
        www.kromastudio.in
      </p>
    </main>
  );
}
