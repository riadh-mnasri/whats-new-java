import Link from "next/link";

// Filet de securite global, en dehors du segment [locale] : ne s'affiche que si le
// routage de locale echoue completement avant d'atteindre la mise en page localisee.
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          fontFamily: "system-ui, sans-serif",
          background: "#f8f0e3",
          color: "#2c1c10",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <p style={{ fontSize: "3rem" }} aria-hidden="true">
          ☕
        </p>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>404</h1>
        <p style={{ fontSize: "0.95rem", opacity: 0.7 }}>
          Page introuvable / Page not found.
        </p>
        <Link
          href="/"
          style={{
            marginTop: "0.5rem",
            borderRadius: "999px",
            background: "#b5651d",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Accueil / Home
        </Link>
      </body>
    </html>
  );
}
