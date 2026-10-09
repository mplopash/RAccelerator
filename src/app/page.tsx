import Link from "next/link";

const ticker =
  "Editorial type  ·  Custom cursor  ·  Scroll index  ·  Horizontal track  ·  Hairline rules  ·  Grain  ·  Sticky nav  ·  ";

const ideas = [
  {
    index: "01",
    title: "Type carries the page",
    body: "Award sites lead with a few huge words, wide tracking on the small labels, and almost no chrome around them.",
  },
  {
    index: "02",
    title: "The pointer is part of the brand",
    body: "A dot and a delayed ring replace the arrow on desktop. It grows over links and disappears for touch and reduced motion.",
  },
  {
    index: "03",
    title: "Scroll changes the frame",
    body: "Vertical scrolling drives a horizontal track, reveals type as it enters, and advances the index in the corner.",
  },
] as const;

const frames = [
  { index: "01", name: "Cursor", note: "Dot, delayed ring, blend difference" },
  { index: "02", name: "Scroll", note: "Sticky stage, track tied to the page" },
  {
    index: "03",
    name: "Type",
    note: "Oversized line, mono index, wide labels",
  },
  {
    index: "04",
    name: "Field",
    note: "Near-black ground, grain, hairline rules",
  },
  {
    index: "05",
    name: "Chrome",
    note: "Fixed nav, one accent, no extra panels",
  },
] as const;

export default function Home() {
  return (
    <main>
      <section className="relative -mt-16 flex min-h-svh flex-col justify-end px-5 pt-28 pb-10 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
          001 — Interface study
        </p>
        <h1 className="mt-6 max-w-6xl text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.88] font-medium tracking-[-0.045em] text-ink">
          Motion with
          <span className="block text-foreground/45">a still page.</span>
        </h1>
        <div className="mt-8 flex max-w-xl flex-col gap-8 md:mt-10 md:max-w-none md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-7 text-muted">
            This is the starting frame for an award-style interface: giant type,
            a custom pointer, and scroll that moves the next frame into place.
          </p>
          <Link
            href="/architecture"
            className="inline-flex h-12 w-fit items-center bg-accent px-5 text-sm font-medium text-background"
          >
            View the setup
          </Link>
        </div>
        <p className="mt-16 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          Scroll
        </p>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track py-3 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          <span className="px-4">{ticker.repeat(2)}</span>
          <span className="px-4">{ticker.repeat(2)}</span>
        </div>
      </div>

      <section className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="ideas">
        <h2
          id="ideas"
          className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase"
        >
          What the winning sites repeat
        </h2>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {ideas.map((idea) => (
            <li
              key={idea.index}
              className="reveal grid gap-4 py-8 md:grid-cols-[6rem_minmax(0,18rem)_1fr] md:items-baseline md:gap-8"
            >
              <p className="font-mono text-sm text-accent">{idea.index}</p>
              <h3 className="text-2xl font-medium tracking-tight text-ink">
                {idea.title}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-muted">
                {idea.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pin" aria-labelledby="frames">
        <div className="pin-sticky staff">
          <div className="w-full">
            <h2 id="frames" className="sr-only">
              Motion frames
            </h2>
            <div className="pin-track">
              {frames.map((frame) => (
                <article
                  key={frame.index}
                  className="flex h-[58vh] w-[72vw] shrink-0 flex-col justify-between border border-line bg-surface p-6 md:w-[28rem]"
                >
                  <p className="font-mono text-[11px] tracking-[0.22em] text-accent">
                    {frame.index}
                  </p>
                  <div>
                    <h3 className="text-4xl font-medium tracking-tight text-ink">
                      {frame.name}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
                      {frame.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
