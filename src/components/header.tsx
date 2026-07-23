import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CoffeeIcon } from "@/components/coffee-icon";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ProgressBadge } from "@/components/progress-badge";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-semibold text-[var(--foreground)]"
        >
          <CoffeeIcon className="h-6 w-6 shrink-0 text-[var(--accent)]" />
          <span className="truncate text-sm sm:text-base">{t("brand")}</span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <ProgressBadge />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
