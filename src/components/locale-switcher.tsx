"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("localeSwitcher");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center gap-0.5 rounded-full border border-[var(--border)] bg-[var(--surface)] p-0.5"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            aria-current={active}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-150 ${
              active
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
            }`}
          >
            {t(loc)}
          </button>
        );
      })}
    </div>
  );
}
