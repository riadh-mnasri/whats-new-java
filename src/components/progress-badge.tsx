"use client";

import { useTranslations } from "next-intl";
import { javaVersions } from "@/content/java-versions";
import { useExploredVersions } from "@/hooks/use-explored-versions";
import { ProgressRing } from "@/components/progress-ring";

export function ProgressBadge() {
  const t = useTranslations("progress");
  const { explored } = useExploredVersions();
  const total = javaVersions.length;
  const ratio = total > 0 ? explored.length / total : 0;

  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] py-1 pr-2.5 pl-1.5 text-[11px] font-medium text-[var(--foreground)]/75 sm:text-xs">
      <ProgressRing value={ratio} size={20} strokeWidth={2.5} />
      {t("label", { explored: explored.length, total })}
    </span>
  );
}
