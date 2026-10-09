import { gapRows, rules } from "@/lib/content";

const statusClass = {
  Compliant: "text-accent",
  Partial: "text-[#9a6410]",
  Gap: "text-[#b42318]",
} as const;

const markClass = {
  Compliant: "bg-accent",
  Partial: "bg-[#c4841d]",
  Gap: "bg-[#d64545]",
} as const;

export function GapPanel({ className = "" }: { className?: string }) {
  return (
    <figure
      id="gap-panel"
      className={`rounded-2xl border border-stroke bg-surface/70 p-5 backdrop-blur-xl backdrop-saturate-150 md:p-6 ${className}`}
    >
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
          GSPR Gaps Auto-Detected.
        </p>
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          GSPR Gap Assessment
        </p>
      </figcaption>
      <dl className="mt-6 grid grid-cols-3">
        <div className="pr-3">
          <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Assessed
          </dt>
          <dd className="mt-2 text-3xl font-black tracking-tight text-ink md:text-4xl">
            23/23
          </dd>
        </div>
        <div className="border-l border-stroke px-3">
          <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Compliant
          </dt>
          <dd className="mt-2 text-3xl font-black tracking-tight text-accent md:text-4xl">
            18
          </dd>
        </div>
        <div className="border-l border-stroke pl-3">
          <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Gaps found
          </dt>
          <dd className="mt-2 text-3xl font-black tracking-tight text-[#9a6410] md:text-4xl">
            5
          </dd>
        </div>
      </dl>
      <ul className="mt-6 border-t border-stroke">
        {gapRows.map((row) => (
          <li key={row.name} className="border-b border-stroke py-3">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-sm text-ink">{row.name}</p>
              <p className={`font-mono text-[11px] tracking-[0.12em] uppercase ${statusClass[row.status]}`}>
                {row.status} {row.width}
              </p>
            </div>
            <div className="mt-2 h-px bg-stroke/25">
              <div className={`h-px ${markClass[row.status]}`} style={{ width: row.width }} />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function ClassReport() {
  return (
    <figure className="rounded-2xl border border-stroke bg-surface/70 p-5 backdrop-blur-xl backdrop-saturate-150 md:p-6">
      <figcaption className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
        Device Classification Report
      </figcaption>
      <div className="mt-6 grid grid-cols-3 border-y border-stroke py-5">
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">Class</p>
          <p className="mt-2 text-3xl font-black text-ink">IIb</p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Confidence
          </p>
          <p className="mt-2 text-3xl font-black text-accent">97.3%</p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            Rules hit
          </p>
          <p className="mt-2 text-3xl font-black text-ink">9, 10, 11</p>
        </div>
      </div>
      <ul className="mt-2">
        {rules.map((rule) => (
          <li
            key={rule.id}
            className="flex items-baseline justify-between gap-4 border-b border-stroke py-3"
          >
            <p className="text-ink">
              <span className="font-bold">{rule.id}</span>
              <span className="text-muted"> — {rule.name}</span>
            </p>
            <p className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
              {rule.weight}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
        Annex VIII coverage Complete
      </p>
    </figure>
  );
}
