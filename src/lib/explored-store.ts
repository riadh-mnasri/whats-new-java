// Petit store module-level pour persister les versions "explorees" dans localStorage.
// Pense pour etre consomme via useSyncExternalStore (voir src/hooks/use-explored-versions.ts).

const STORAGE_KEY = "whats-new-java:explored-versions";

type Listener = () => void;

class ExploredStore {
  private explored: Set<number> = new Set();
  private snapshot: number[] = [];
  private listeners: Set<Listener> = new Set();
  private initialized = false;

  private ensureInitialized() {
    if (this.initialized || typeof window === "undefined") {
      return;
    }
    this.initialized = true;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.explored = new Set(parsed.filter((v) => typeof v === "number"));
        }
      }
    } catch {
      // localStorage indisponible ou contenu corrompu : on repart d'un etat vide.
      this.explored = new Set();
    }
    this.snapshot = this.computeSnapshot();
  }

  private computeSnapshot(): number[] {
    return Array.from(this.explored).sort((a, b) => a - b);
  }

  private persist() {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.snapshot));
    } catch {
      // Quota depasse ou navigation privee : l'etat reste en memoire pour la session en cours.
    }
  }

  private notify() {
    for (const listener of this.listeners) {
      listener();
    }
  }

  subscribe = (listener: Listener): (() => void) => {
    this.ensureInitialized();
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  getSnapshot = (): number[] => {
    this.ensureInitialized();
    return this.snapshot;
  };

  getServerSnapshot = (): number[] => {
    return [];
  };

  toggle = (version: number): void => {
    this.ensureInitialized();
    if (this.explored.has(version)) {
      this.explored.delete(version);
    } else {
      this.explored.add(version);
    }
    this.snapshot = this.computeSnapshot();
    this.persist();
    this.notify();
  };
}

export const exploredStore = new ExploredStore();
