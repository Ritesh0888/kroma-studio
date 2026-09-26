"use client";

import { useEffect } from "react";
import { useStudioStore } from "@/store/useStudioStore";

export function ExportToast() {
  const message = useStudioStore((s) => s.exportToast);
  const setExportToast = useStudioStore((s) => s.setExportToast);

  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setExportToast(null), 5000);
    return () => window.clearTimeout(timer);
  }, [message, setExportToast]);

  if (!message) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-20 left-1/2 z-50 max-w-sm -translate-x-1/2 rounded-xl border border-neon-purple/40 bg-[#141414] px-4 py-3 text-sm text-white shadow-lg shadow-black/40 md:bottom-6"
    >
      {message}
    </div>
  );
}
