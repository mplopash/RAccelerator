import { metrics, standards } from "@/lib/content";

export function DossierField() {
  return (
    <div className="dossier" aria-hidden="true">
      <div className="dossier-grid" suppressHydrationWarning />
      <div className="dossier-glow" suppressHydrationWarning />
      <div className="dossier-dial" suppressHydrationWarning>
        <span className="dossier-ring" />
        <span className="dossier-ring" />
        <span className="dossier-ring" />
      </div>
      <ul className="dossier-standards" suppressHydrationWarning>
        {standards.map((standard) => (
          <li key={standard}>{standard}</li>
        ))}
      </ul>
      <ul className="dossier-metrics" suppressHydrationWarning>
        {metrics.map((metric) => (
          <li key={metric.label}>
            <span>{metric.value}</span>
            {metric.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
