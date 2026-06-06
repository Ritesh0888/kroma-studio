"use client";

import { Suspense } from "react";
import { useExtensionHandoff } from "@/hooks/useExtensionHandoff";

function ExtensionHandoffInner() {
  useExtensionHandoff();
  return null;
}

/** Suspense boundary for useSearchParams on the studio homepage. */
export function ExtensionHandoff() {
  return (
    <Suspense fallback={null}>
      <ExtensionHandoffInner />
    </Suspense>
  );
}
