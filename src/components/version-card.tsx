"use client";

import { useState } from "react";
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
  const [justToggled, setJustToggled] = useState(false);

  const releaseDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
  }).format(new Date(version.releaseDate));

  const handleToggle = () => {
    toggle(version.version);
    setJustToggled(true);
    window.setTimeout(() => setJustToggled(false), 350);
  };

  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
        version.isLts
          ? "border-[var(--accent)]/40 bg-gradient-to-br from-[var(--surface)] to-[var(--accent)]/10 shadow-md hover:shadow-lg hover:shadow-[var(--accent)]/10"
          : "border-[var(--border)] bg-[var(--surface)] shadow-sm hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-display font-semibold text-[var(--foreground)] ${version.isLts ? "text-2xl" : "text-xl"}`}
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
          onClick={handleToggle}
          aria-pressed={explored}
          aria-label={explored ? t("unmarkExplored") : t("markExplored")}
          title={explored ? t("unmarkExplored") : t("markExplored")}
          className={`shrink-0 grid h-7 w-7 place-items-center rounded-full border text-sm transition-colors duration-150 ${
            justToggled ? "pop-in" : ""
          } ${
            explored
              ? "border-[var(--accent)] bg-[var(--accent)] text-white"
              : "border-[var(--border)] text-[var(--foreground)]/35 hover:border-[var(--accent)]/50 hover:text-[var(--accent-strong)]"
          }`}
        >
          {explored ? "✓" : ""}
        </button>
      </div>

      <Link href={`/versions/${version.version}`} className="block px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
        <div className="flex items-center gap-2 text-xs text-[var(--foreground)]/50">
          <span>{t("releasedOn", { date: releaseDate })}</span>
          <span aria-hidden="true">·</span>
          <span>{t("highlightCount", { count: version.highlights.length })}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/85">
          {version.headline[locale]}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-strong)] group-hover:underline">
          {t("viewDetails")}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    </div>
  );
}
