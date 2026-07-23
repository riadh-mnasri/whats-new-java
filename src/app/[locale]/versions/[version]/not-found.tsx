import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function VersionNotFound() {
  const t = await getTranslations("version");

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-5xl" aria-hidden="true">
        ☕
      </p>
      <h1 className="mt-4 text-2xl font-bold text-[var(--foreground)]">
        {t("notFoundTitle")}
      </h1>
      <p className="mt-2 max-w-sm text-sm text-[var(--foreground)]/60">
        {t("notFoundDescription")}
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
      >
        {t("backHome")}
      </Link>
    </main>
  );
}
