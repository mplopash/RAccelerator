import { gapRows, rules } from "@/lib/content";

const statusClass = {
  Compliant: "text-accent",
  Partial: "text-[#f0c36a]",
  Gap: "text-[#ff8f8f]",
} as const;

const barClass = {
  Compliant: "bg-accent",
  Partial: "bg-[#f0c36a]",
  Gap: "bg-[#ff8f8f]",
} as const;

export function GapPanel() {
  return (
    <figure className="rounded-2xl border border-line bg-[#07182c] p-4 shadow-[0_24px_80px_rgb(0_0_0/0.28)] md:p-5">
      <figcaption className="mb-3 font-bold text-accent">
        GSPR Gaps Auto-Detected.
      </figcaption>
      <div className="rounded-xl border border-line bg-[#041428] p-4 md:p-5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#ff6b6b]" />
          <span className="size-2 rounded-full bg-[#f0c36a]" />
          <span className="size-2 rounded-full bg-accent" />
          <p className="ml-2 text-sm font-bold text-ink">GSPR Gap Assessment</p>
        </div>
        <dl className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-line px-3 py-3">
            <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
              Assessed
            </dt>
            <dd className="mt-1 text-2xl font-black text-ink">23/23</dd>
          </div>
          <div className="rounded-lg border border-line px-3 py-3">
            <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
              Compliant
            </dt>
            <dd className="mt-1 text-2xl font-black text-accent">18</dd>
          </div>
          <div className="rounded-lg border border-line px-3 py-3">
            <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
              Gaps found
            </dt>
            <dd className="mt-1 text-2xl font-black text-[#f0c36a]">5</dd>
          </div>
        </dl>
        <ul className="mt-5 space-y-3">
          {gapRows.map((row) => (
            <li key={row.name}>
              <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink">{row.name}</span>
                <span className={statusClass[row.status]}>{row.status}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${barClass[row.status]}`}
                  style={{ width: row.width }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

export function ClassReport() {
  return (
    <figure className="rounded-2xl border border-line bg-[#07182c] p-5 md:p-6">
      <figcaption className="text-sm font-bold tracking-[0.16em] text-muted uppercase">
        Device Classification Report
      </figcaption>
      <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-5">
        <div>
          <p className="text-[11px] tracking-[0.14em] text-muted uppercase">Class</p>
          <p className="mt-1 text-3xl font-black text-ink">IIb</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
            Confidence
          </p>
          <p className="mt-1 text-3xl font-black text-accent">97.3%</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
            Rules hit
          </p>
          <p className="mt-1 text-3xl font-black text-ink">9, 10, 11</p>
        </div>
      </div>
      <ul className="mt-4 divide-y divide-line">
        {rules.map((rule) => (
          <li key={rule.id} className="flex items-baseline justify-between gap-4 py-3">
            <p className="text-ink">
              <span className="font-bold">{rule.id}</span>
              <span className="text-muted"> — {rule.name}</span>
            </p>
            <p className="text-sm text-accent">{rule.weight}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">Annex VIII coverage Complete</p>
    </figure>
  );
}
