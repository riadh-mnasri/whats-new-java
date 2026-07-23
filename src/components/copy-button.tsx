"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function CopyButton({ code }: { code: string }) {
  const t = useTranslations("version");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Presse-papiers indisponible (permissions, contexte non securise) : on ignore silencieusement.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-md px-2 py-1 text-[11px] font-medium text-[var(--foreground)]/50 transition-colors hover:bg-[var(--foreground)]/5 hover:text-[var(--accent-strong)]"
    >
      {copied ? t("copied") : t("copy")}
    </button>
  );
}
