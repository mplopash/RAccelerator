"use client";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#110f0c",
          color: "#f4f0e6",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <main style={{ maxWidth: "36rem", padding: "2rem" }}>
          <p
            style={{
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: "0.75rem",
            }}
          >
            Application error
          </p>
          <h1 style={{ fontSize: "2rem", fontWeight: 500, marginTop: "1rem" }}>
            RAccelerator could not start this view.
          </h1>
          <p style={{ color: "#b3a89c", lineHeight: 1.7 }}>
            {error.digest ? `Reference ${error.digest}. ` : ""}
            Retry to render the application again.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: "1.5rem",
              height: "2.75rem",
              padding: "0 1.25rem",
              background: "#f4f0e6",
              color: "#141210",
              border: 0,
              font: "inherit",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
