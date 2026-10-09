"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24">
      <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
        Error
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink">
        This page failed to render.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Retry the segment. The rest of the application is still available.
      </p>
      {error.digest ? (
        <p className="mt-4 font-mono text-xs text-muted">
          Reference {error.digest}
        </p>
      ) : null}
      <button
        type="button"
        onClick={() => retry()}
        className="mt-8 inline-flex h-11 w-fit items-center bg-ink px-5 text-sm font-medium text-background"
      >
        Try again
      </button>
    </main>
  );
}
