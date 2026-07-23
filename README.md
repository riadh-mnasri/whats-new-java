# Quoi de neuf en Java

Un catalogue navigable des nouveautes de Java, version par version, de Java 8 (2014) a Java 25 (2025). Ce n'est pas une application de flashcards ni de repetition espacee : c'est une frise chronologique consultable, pensee comme une documentation interactive plutot que comme un quiz.

Projet personnel de Riadh MNASRI.

## Stack

- [Next.js](https://nextjs.org) (App Router) avec Turbopack
- TypeScript
- Tailwind CSS v4
- [next-intl](https://next-intl.dev) pour le bilinguisme FR/EN (routes `/fr/...` et `/en/...`)
- Aucune base de donnees : le contenu est statique (`src/content/java-versions.ts`) et la seule donnee utilisateur (les versions marquees comme explorees) est stockee dans le `localStorage` du navigateur.

## Demarrage

Installer les dependances :

```bash
npm install
```

Lancer le serveur de developpement (port dedie **3535**) :

```bash
npm run dev
```

L'application est disponible sur [http://localhost:3535](http://localhost:3535).

## Verifications

Construire l'application (verifie que tout compile) :

```bash
npm run build
```

Lancer le linter :

```bash
npm run lint
```

Il n'y a pas de suite de tests automatises pour ce projet : c'est une application personnelle legere, sans infrastructure de test dediee.

Pour lancer l'application construite en mode production locale :

```bash
npm run start
```

Elle ecoute egalement sur le port 3535.

## Structure du projet

- `src/app/[locale]/` : routes de l'application (accueil, detail par version), une par langue.
- `src/content/java-versions.ts` : le contenu du catalogue (une entree par version de Java, avec highlights bilingues et extraits de code).
- `src/components/` : composants d'interface (en-tete, frise, carte de version, bloc de code, etc).
- `src/hooks/` et `src/lib/` : le petit systeme de suivi de progression ("versions explorees") persiste en localStorage.
- `messages/fr.json` et `messages/en.json` : les textes d'interface (chrome de l'application).

## Fonctionnalite bonus : suivi de progression

Chaque version peut etre marquee comme "explorée" d'un simple tap. Un compteur (par exemple 12/19) est visible dans l'en-tete. Cet etat est purement local au navigateur (localStorage), il n'y a pas de compte utilisateur ni de synchronisation entre appareils.

## Deploiement

Le projet est concu pour etre deploye sur [Vercel](https://vercel.com). Un push sur la branche `main` d'un depot connecte a Vercel declenche automatiquement un deploiement.

## Notes de contenu

Le catalogue couvre Java 8 a Java 25 (LTS de septembre 2025). Java 26 n'est pas encore documente dans ce catalogue : au moment de la redaction, son contenu definitif n'etait pas connu avec suffisamment de certitude pour l'inclure sans risquer d'inventer des fonctionnalites.
