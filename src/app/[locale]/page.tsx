import { getTranslations, setRequestLocale } from "next-intl/server";
import { javaVersions } from "@/content/java-versions";
import { VersionCard } from "@/components/version-card";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  // Les versions les plus recentes en premier : c'est un catalogue de "quoi de neuf",
  // pas un cours d'histoire.
  const versionsMostRecentFirst = [...javaVersions].reverse();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-8">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-[var(--foreground)]/70 sm:text-base">
          {t("subtitle")}
        </p>
        <p className="mt-1 text-xs text-[var(--foreground)]/50">
          {t("timelineHint")}
        </p>
      </header>

      <ol className="relative space-y-4 border-l-2 border-[var(--border)] pl-4 sm:pl-6">
        {versionsMostRecentFirst.map((version) => (
          <li key={version.version} className="relative list-none">
            <span
              className="absolute top-6 -left-[1.28rem] h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)] sm:-left-[1.53rem]"
              aria-hidden="true"
            />
            <VersionCard version={version} />
          </li>
        ))}
      </ol>
    </main>
  );
}
