import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]/70 px-4 py-6 text-center">
      <p className="text-xs text-[var(--foreground)]/60">{t("tagline")}</p>
      <p className="mt-1 text-xs text-[var(--foreground)]/45">
        {t("copyright", { year })}
      </p>
    </footer>
  );
}
