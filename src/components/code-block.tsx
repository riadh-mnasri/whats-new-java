import { highlightJava } from "@/lib/highlight-java";
import { CopyButton } from "@/components/copy-button";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const trimmed = code.trim();
  const html = highlightJava(trimmed);

  return (
    <div className="java-code-block mt-3 overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]/40">
          Java
        </span>
        <CopyButton code={trimmed} />
      </div>
      <pre className="overflow-x-auto p-3 text-[13px] leading-relaxed sm:p-4">
        {/* Contenu genere localement a partir de nos propres extraits de code, pas d'entree utilisateur. */}
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
