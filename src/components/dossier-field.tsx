import { metrics, standards } from "@/lib/content";

export function DossierField() {
  return (
    <div className="dossier" aria-hidden="true">
      <div className="dossier-grid" />
      <div className="dossier-glow" />
      <div className="dossier-dial">
        <span className="dossier-ring" />
        <span className="dossier-ring" />
        <span className="dossier-ring" />
      </div>
      <ul className="dossier-standards">
        {standards.map((standard) => (
          <li key={standard}>{standard}</li>
        ))}
      </ul>
      <ul className="dossier-metrics">
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
