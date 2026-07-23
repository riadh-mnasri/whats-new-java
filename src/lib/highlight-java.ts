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

// Types courants du JDK et primitifs : coloration distincte pour repérer d'un coup d'oeil les signatures.
const JAVA_TYPES = new Set([
  "boolean",
  "byte",
  "char",
  "double",
  "float",
  "int",
  "long",
  "short",
  "String",
  "Object",
  "List",
  "Map",
  "Set",
  "Optional",
  "Stream",
  "IntStream",
  "Collection",
  "Collectors",
  "Thread",
  "Runnable",
  "Callable",
  "Future",
  "Executor",
  "ExecutorService",
  "Executors",
  "Path",
  "Files",
  "Pattern",
  "Matcher",
  "Comparator",
  "Function",
  "Predicate",
  "Consumer",
  "Supplier",
]);

const TOKEN_PATTERN =
  /("""[\s\S]*?"""|"(?:[^"\\]|\\.)*"|\/\/[^\n]*|@[A-Za-z_][A-Za-z0-9_]*|\b\d+(?:\.\d+)?[LlFfDd]?\b|\b[A-Za-z_][A-Za-z0-9_]*\b)/g;

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
    if (token.startsWith("@")) {
      return `<span class="java-annotation">${token}</span>`;
    }
    if (/^\d/.test(token)) {
      return `<span class="java-number">${token}</span>`;
    }
    if (JAVA_KEYWORDS.has(token)) {
      return `<span class="java-keyword">${token}</span>`;
    }
    if (JAVA_TYPES.has(token)) {
      return `<span class="java-type">${token}</span>`;
    }
    return token;
  });
}
