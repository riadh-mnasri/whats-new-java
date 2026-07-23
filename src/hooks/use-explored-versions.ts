"use client";

import { useCallback, useSyncExternalStore } from "react";
import { exploredStore } from "@/lib/explored-store";

export function useExploredVersions() {
  const explored = useSyncExternalStore(
    exploredStore.subscribe,
    exploredStore.getSnapshot,
    exploredStore.getServerSnapshot,
  );

  const toggle = useCallback((version: number) => {
    exploredStore.toggle(version);
  }, []);

  const isExplored = useCallback(
    (version: number) => explored.includes(version),
    [explored],
  );

  return { explored, toggle, isExplored };
}
