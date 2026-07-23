"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useExploredVersions } from "@/hooks/use-explored-versions";

export function ExploredToggle({ version }: { version: number }) {
  const t = useTranslations("version");
  const { isExplored, toggle } = useExploredVersions();
  const explored = isExplored(version);
  const [justToggled, setJustToggled] = useState(false);

  const handleToggle = () => {
    toggle(version);
    setJustToggled(true);
    window.setTimeout(() => setJustToggled(false), 350);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={explored}
      className={`mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-150 ${
        justToggled ? "pop-in" : ""
      } ${
        explored
          ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent-strong)]"
          : "border-[var(--border)] text-[var(--foreground)]/60 hover:border-[var(--accent)]/50 hover:text-[var(--foreground)]"
      }`}
    >
      <span aria-hidden="true">{explored ? "✓" : "○"}</span>
      {explored ? t("exploredBadge") : t("markExplored")}
    </button>
  );
}
