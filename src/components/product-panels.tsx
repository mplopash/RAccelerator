import { rules } from "@/lib/content";

const summary = [
  { label: "Class", value: "IIb" },
  { label: "Confidence", value: "97.3%" },
] as const;

export function ClassReport() {
  return (
    <table className="data-table class-table">
      <tbody>
        {summary.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
        {rules.map((rule) => (
          <tr key={rule.id}>
            <th scope="row">{rule.id}</th>
            <td>
              {rule.name}
              <span className="text-muted"> · {rule.weight}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
