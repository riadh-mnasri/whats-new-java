"use client";

import { useTranslations } from "next-intl";
import { javaVersions } from "@/content/java-versions";
import { useExploredVersions } from "@/hooks/use-explored-versions";

export function ProgressBadge() {
  const t = useTranslations("progress");
  const { explored } = useExploredVersions();
  const total = javaVersions.length;

  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--foreground)]/75 sm:text-xs">
      {t("label", { explored: explored.length, total })}
    </span>
  );
}
