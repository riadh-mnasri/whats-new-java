import { getTranslations, setRequestLocale } from "next-intl/server";
import { javaVersions } from "@/content/java-versions";
import { VersionCard } from "@/components/version-card";
import { HeroStats } from "@/components/hero-stats";
import { Reveal } from "@/components/reveal";

type Props = {
  params: Promise<{ locale: string }>;
};

type Era = "today" | "cloudEra" | "modernization" | "foundations";

function eraFor(version: number): Era {
  if (version >= 22) return "today";
  if (version >= 18) return "cloudEra";
  if (version >= 12) return "modernization";
  return "foundations";
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  // Les versions les plus recentes en premier : c'est un catalogue de "quoi de neuf",
  // pas un cours d'histoire.
  const versionsMostRecentFirst = [...javaVersions].reverse();

  const sections: { era: Era; versions: typeof javaVersions }[] = [];
  for (const version of versionsMostRecentFirst) {
    const era = eraFor(version.version);
    const last = sections[sections.length - 1];
    if (last && last.era === era) {
      last.versions.push(version);
    } else {
      sections.push({ era, versions: [version] });
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-8">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-[var(--foreground)]/70 sm:text-base">
          {t("subtitle")}
        </p>
        <p className="mt-1 text-xs text-[var(--foreground)]/50">
          {t("timelineHint")}
        </p>
        <HeroStats />
      </header>

      <div className="mt-8 space-y-10">
        {sections.map((section) => (
          <section key={`${section.era}-${section.versions[0].version}`}>
            <Reveal>
              <h2 className="font-display mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent-strong)]">
                {t(`eras.${section.era}`)}
              </h2>
            </Reveal>
            <div className="relative">
              <div
                className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-[var(--accent)] to-transparent"
                aria-hidden="true"
              />
              <ol className="space-y-4 pl-4 sm:pl-6">
                {section.versions.map((version, index) => (
                <li key={version.version} className="relative list-none">
                  <span
                    className={`absolute top-6 -left-[1.28rem] rounded-full ring-4 ring-[var(--background)] sm:-left-[1.53rem] ${
                      version.isLts
                        ? "h-3 w-3 bg-[var(--accent)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_25%,transparent)]"
                        : "h-2.5 w-2.5 bg-[var(--accent)]/60"
                    }`}
                    aria-hidden="true"
                  />
                  <Reveal delay={index * 60}>
                    <VersionCard version={version} />
                  </Reveal>
                </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
