import Link from "next/link";

const measures = [
  { label: "Bundler", value: "Turbopack" },
  { label: "Rendering", value: "Server Components" },
  { label: "Compiler", value: "React Compiler" },
  { label: "Images", value: "AVIF and WebP" },
] as const;

const principles = [
  {
    index: "01",
    title: "HTML first",
    body: "Routes render on the server. Interactivity is added only where a component needs it, so the first load stays small.",
  },
  {
    index: "02",
    title: "Cached by default",
    body: "Cache Components and partial prefetching keep repeat navigation close to instant without opting every route into dynamic rendering.",
  },
  {
    index: "03",
    title: "Short edit loop",
    body: "Turbopack is the default bundler for development and production builds, with the React Compiler running natively in Rust.",
  },
] as const;

export default function Home() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] md:py-24">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
              Performance foundation
            </p>
            <h1 className="mt-5 max-w-xl text-5xl font-medium tracking-tight text-ink md:text-6xl md:leading-[1.05]">
              A React app set up to stay fast.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              RAccelerator is a Next.js, React, and Tailwind project with the
              production defaults already in place: typed routes, optimized
              fonts, modern image formats, and a server-rendered shell.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/architecture"
                className="inline-flex h-11 items-center bg-ink px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View architecture
              </Link>
              <a
                href="https://nextjs.org/docs"
                className="inline-flex h-11 items-center border border-line bg-surface px-5 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Next.js docs
              </a>
            </div>
          </div>
          <aside className="border border-line bg-surface">
            <p className="border-b border-line px-5 py-3 font-mono text-xs tracking-[0.18em] text-muted uppercase">
              Runtime
            </p>
            <dl>
              {measures.map((measure) => (
                <div
                  key={measure.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4 last:border-b-0"
                >
                  <dt className="text-sm text-muted">{measure.label}</dt>
                  <dd className="text-sm font-medium text-ink">
                    {measure.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
      <section
        className="mx-auto max-w-6xl px-6 py-16 md:py-20"
        aria-labelledby="principles"
      >
        <h2
          id="principles"
          className="text-sm font-medium tracking-tight text-ink"
        >
          What this setup protects
        </h2>
        <ol className="mt-8 grid gap-px bg-line md:grid-cols-3">
          {principles.map((principle) => (
            <li key={principle.index} className="bg-background p-6">
              <p className="font-mono text-xs text-accent">{principle.index}</p>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {principle.body}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
