import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24">
      <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink">
        This page is not in the project.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The address does not match a route. Head back to the overview.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center bg-ink px-5 text-sm font-medium text-background"
      >
        Back to overview
      </Link>
    </main>
  );
}
