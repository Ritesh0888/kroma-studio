"use client";

import { useEffect, useMemo, useState } from "react";

export function useAutoRefreshAds(containerIds: string[], intervalMs = 45_000) {
  const idsKey = containerIds.join("|");
  const ids = useMemo(() => (idsKey ? idsKey.split("|") : []), [idsKey]);
  const [refreshKeys, setRefreshKeys] = useState<Record<string, number>>(() =>
    Object.fromEntries(containerIds.map((id) => [id, 0])),
  );

  useEffect(() => {
    if (ids.length === 0 || intervalMs <= 0) return;

    const timer = window.setInterval(() => {
      setRefreshKeys((current) => {
        const next = { ...current };
        ids.forEach((id) => {
          next[id] = (next[id] ?? 0) + 1;
        });
        return next;
      });
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [ids, intervalMs]);

  return refreshKeys;
}
