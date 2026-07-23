# What's New in Java

A browsable catalog of what changed in Java, version by version, from Java 8 (2014) to Java 25 (2025). This is not a flashcard or spaced-repetition app: it's a scrollable timeline meant to work like interactive documentation, not a quiz.

Personal project by Riadh MNASRI.

## Stack

- [Next.js](https://nextjs.org) (App Router) with Turbopack
- TypeScript
- Tailwind CSS v4
- [next-intl](https://next-intl.dev) for FR/EN bilingual support (`/fr/...` and `/en/...` routes)
- No database: content is static (`src/content/java-versions.ts`) and the only user data (versions marked as explored) lives in the browser's `localStorage`.

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server (dedicated port **3535**):

```bash
npm run dev
```

The app is available at [http://localhost:3535](http://localhost:3535).

## Checks

Build the app (confirms everything compiles):

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

There is no automated test suite for this project: it's a lightweight personal app with no dedicated test setup.

To run the production build locally:

```bash
npm run start
```

It also listens on port 3535.

## Project structure

- `src/app/[locale]/`: app routes (home page, per-version detail page), one per language.
- `src/content/java-versions.ts`: the catalog content (one entry per Java version, with bilingual highlights and code snippets).
- `src/components/`: UI components (header, timeline, version card, code block, etc).
- `src/hooks/` and `src/lib/`: the small progress-tracking system ("explored versions") persisted to localStorage.
- `messages/fr.json` and `messages/en.json`: interface text (app chrome).

## Bonus feature: progress tracking

Each version can be marked as "explored" with a single tap. A counter (e.g. 12/19) is visible in the header. This state lives purely in the browser's localStorage: there is no user account and no cross-device sync.

## Deployment

The project is designed to be deployed on [Vercel](https://vercel.com). Pushing to the `main` branch of a Vercel-connected repository triggers an automatic deployment.

## Content notes

The catalog covers Java 8 through Java 25 (the September 2025 LTS). Java 26 is deliberately not covered yet: at the time of writing, its final contents were not known with enough confidence to include without risking invented features.
