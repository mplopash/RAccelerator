import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "How RAccelerator is organized, and which Next.js performance features are enabled.",
};

const folders = [
  {
    path: "src/app",
    note: "Routes, layouts, metadata, and the health endpoint",
  },
  { path: "src/components", note: "Shared server-rendered UI" },
  { path: "src/lib", note: "Site config and other framework-free helpers" },
  { path: "public", note: "Static files served as-is" },
] as const;

const choices = [
  {
    name: "Server Components",
    detail:
      "The shell renders to HTML. Client components are reserved for interaction.",
  },
  {
    name: "Cache Components",
    detail:
      "Caching is explicit and composable, so static shells stay fast as data is added.",
  },
  {
    name: "Partial prefetching",
    detail: "Links prefetch the static part of a route before the click.",
  },
  {
    name: "React Compiler",
    detail:
      "The Rust compiler inside Turbopack memoizes components without a Babel plugin.",
  },
  {
    name: "Inline CSS",
    detail:
      "Tailwind is inlined into the document so the first visit does not wait on a stylesheet.",
  },
  {
    name: "next/font and next/image",
    detail:
      "Geist is self-hosted with swap, and images are served as AVIF or WebP.",
  },
] as const;

const scripts = [
  { command: "npm run dev", note: "Turbopack dev server" },
  { command: "npm run build", note: "Production build" },
  { command: "npm run start", note: "Serve the production build" },
  {
    command: "npm run lint",
    note: "ESLint with Next.js core web vitals rules",
  },
  { command: "npm run typecheck", note: "TypeScript without emitting files" },
] as const;

export default function ArchitecturePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
      <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
        Project map
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-ink md:text-5xl">
        A small structure that can grow.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        Routes live in the App Router. Shared UI stays in components. Config
        that is not a route stays in lib, so folders do not accidentally become
        URLs.
      </p>

      <section className="mt-14" aria-labelledby="folders">
        <h2 id="folders" className="text-sm font-medium text-ink">
          Folders
        </h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {folders.map((folder) => (
            <li
              key={folder.path}
              className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6"
            >
              <p className="font-mono text-sm text-ink">{folder.path}</p>
              <p className="text-sm leading-7 text-muted">{folder.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="choices">
        <h2 id="choices" className="text-sm font-medium text-ink">
          Performance choices
        </h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {choices.map((choice) => (
            <li key={choice.name} className="border border-line bg-surface p-5">
              <h3 className="text-base font-medium text-ink">{choice.name}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {choice.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="scripts">
        <h2 id="scripts" className="text-sm font-medium text-ink">
          Scripts
        </h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {scripts.map((script) => (
            <li
              key={script.command}
              className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:items-center sm:gap-6"
            >
              <code className="font-mono text-sm text-ink">
                {script.command}
              </code>
              <p className="text-sm text-muted">{script.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
