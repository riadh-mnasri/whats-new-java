import { highlightJava } from "@/lib/highlight-java";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const html = highlightJava(code.trim());

  return (
    <pre className="java-code-block mt-3 p-3 text-[13px] leading-relaxed sm:p-4">
      {/* Contenu genere localement a partir de nos propres extraits de code, pas d'entree utilisateur. */}
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
