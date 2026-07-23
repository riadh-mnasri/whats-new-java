import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  getAdjacentVersions,
  getJavaVersion,
  javaVersions,
} from "@/content/java-versions";
import { CodeBlock } from "@/components/code-block";
import { ExploredToggle } from "@/components/explored-toggle";

type Props = {
  params: Promise<{ locale: string; version: string }>;
};

export function generateStaticParams() {
  return javaVersions.map((entry) => ({ version: String(entry.version) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, version } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  const entry = getJavaVersion(Number(version));
  if (!entry) {
    return {};
  }
  const loc = locale as "fr" | "en";
  return {
    title: `Java ${entry.version} : ${entry.headline[loc]}`,
    description: entry.headline[loc],
  };
}

export default async function VersionDetailPage({ params }: Props) {
  const { locale, version } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const entry = getJavaVersion(Number(version));
  if (!entry) {
    notFound();
  }

  const loc = locale as "fr" | "en";
  const t = await getTranslations("version");
  const { previous, next } = getAdjacentVersions(entry.version);

  const releaseDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(entry.releaseDate));

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-strong)] hover:underline"
      >
        <span aria-hidden="true">←</span> {t("backToTimeline")}
      </Link>

      <header className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Java {entry.version}
          </h1>
          {entry.isLts && (
            <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
              {t("ltsBadge")}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-[var(--foreground)]/50">
          {t("releasedOn", { date: releaseDate })}
        </p>
        <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/90">
          {entry.headline[loc]}
        </p>
        <ExploredToggle version={entry.version} />
      </header>

      <section className="mt-6 space-y-4">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          {t("highlightsTitle")}
        </h2>
        {entry.highlights.map((highlight, index) => (
          <article
            key={index}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm sm:p-5"
          >
            <h3 className="font-semibold text-[var(--foreground)]">
              {highlight.title[loc]}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/80">
              {highlight.description[loc]}
            </p>
            {highlight.code && <CodeBlock code={highlight.code} />}
          </article>
        ))}
      </section>

      <nav className="mt-8 flex items-center justify-between gap-3 text-sm">
        {previous ? (
          <Link
            href={`/versions/${previous.version}`}
            className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-medium text-[var(--foreground)]/80 transition-colors hover:border-[var(--accent)]/50"
          >
            <span aria-hidden="true">←</span>
            {t("previousVersion", { version: previous.version })}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/versions/${next.version}`}
            className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-medium text-[var(--foreground)]/80 transition-colors hover:border-[var(--accent)]/50"
          >
            {t("nextVersion", { version: next.version })}
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
