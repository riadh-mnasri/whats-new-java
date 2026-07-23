"use client";

import { useTranslations } from "next-intl";
import { javaVersions } from "@/content/java-versions";
import { useExploredVersions } from "@/hooks/use-explored-versions";

export function HeroStats() {
  const t = useTranslations("home");
  const { explored } = useExploredVersions();
  const total = javaVersions.length;
  const ltsCount = javaVersions.filter((v) => v.isLts).length;
  const ratio = total > 0 ? explored.length / total : 0;
  const percent = Math.round(ratio * 100);

  const milestone =
    explored.length === 0
      ? t("milestone.start")
      : explored.length === total
        ? t("milestone.complete")
        : percent >= 50
          ? t("milestone.halfway")
          : t("milestone.progress");

  return (
    <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-3xl font-semibold text-[var(--foreground)]">
            {percent}%
          </span>
          <span className="text-sm text-[var(--foreground)]/60">
            {t("stats.explored", { explored: explored.length, total })}
          </span>
        </div>
        <span className="text-xs font-medium text-[var(--accent-strong)]">
          {milestone}
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[var(--background-accent)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] transition-[width] duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-3 text-xs text-[var(--foreground)]/50">
        {t("stats.ltsCount", { count: ltsCount })}
      </p>
    </div>
  );
}
