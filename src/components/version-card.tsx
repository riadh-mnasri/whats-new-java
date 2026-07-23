"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { JavaVersion } from "@/content/java-versions";
import { useExploredVersions } from "@/hooks/use-explored-versions";

interface VersionCardProps {
  version: JavaVersion;
}

export function VersionCard({ version }: VersionCardProps) {
  const locale = useLocale() as "fr" | "en";
  const t = useTranslations("version");
  const { isExplored, toggle } = useExploredVersions();
  const explored = isExplored(version.version);

  const releaseDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
  }).format(new Date(version.releaseDate));

  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
        version.isLts
          ? "border-[var(--accent)]/40 bg-gradient-to-br from-[var(--surface)] to-[var(--accent)]/10 shadow-md hover:shadow-lg"
          : "border-[var(--border)] bg-[var(--surface)] shadow-sm hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-bold text-[var(--foreground)] ${version.isLts ? "text-2xl" : "text-xl"}`}
          >
            Java {version.version}
          </span>
          {version.isLts && (
            <span className="rounded-full bg-[var(--accent)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              {t("ltsBadge")}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => toggle(version.version)}
          aria-pressed={explored}
          className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-medium transition-colors duration-150 ${
            explored
              ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent-strong)]"
              : "border-[var(--border)] text-[var(--foreground)]/45 hover:border-[var(--accent)]/50"
          }`}
        >
          {explored ? `✓ ${t("exploredBadge")}` : t("markExplored")}
        </button>
      </div>

      <Link href={`/versions/${version.version}`} className="block px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
        <p className="text-xs text-[var(--foreground)]/50">
          {t("releasedOn", { date: releaseDate })}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/85">
          {version.headline[locale]}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-strong)] group-hover:underline">
          {t("viewDetails")}
          <span aria-hidden="true">→</span>
        </span>
      </Link>
    </div>
  );
}
