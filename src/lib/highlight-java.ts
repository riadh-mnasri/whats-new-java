// Coloration syntaxique volontairement legere pour les extraits de code Java du catalogue.
// Pas de dependance externe : juste un decoupage en tokens (chaines, commentaires, mots-cles).

const JAVA_KEYWORDS = new Set([
  "abstract",
  "case",
  "class",
  "default",
  "enum",
  "exports",
  "extends",
  "final",
  "finally",
  "for",
  "if",
  "else",
  "implements",
  "import",
  "instanceof",
  "interface",
  "module",
  "new",
  "non-sealed",
  "package",
  "permits",
  "private",
  "protected",
  "public",
  "record",
  "requires",
  "return",
  "sealed",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "throws",
  "try",
  "catch",
  "var",
  "void",
  "when",
  "while",
  "yield",
]);

const TOKEN_PATTERN =
  /("""[\s\S]*?"""|"(?:[^"\\]|\\.)*"|\/\/[^\n]*|\b[A-Za-z_][A-Za-z0-9_]*\b)/g;

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function highlightJava(code: string): string {
  const escaped = escapeHtml(code);

  return escaped.replace(TOKEN_PATTERN, (token) => {
    if (token.startsWith('"')) {
      return `<span class="java-string">${token}</span>`;
    }
    if (token.startsWith("//")) {
      return `<span class="java-comment">${token}</span>`;
    }
    if (JAVA_KEYWORDS.has(token)) {
      return `<span class="java-keyword">${token}</span>`;
    }
    return token;
  });
}
