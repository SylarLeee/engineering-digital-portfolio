export type FailureCardProps = { problem: string; diagnosis: string; decision: string; iteration: string };

export function FailureCard(props: FailureCardProps) {
  const entries = [["PROBLEM", props.problem], ["DIAGNOSIS", props.diagnosis], ["DECISION", props.decision], ["ITERATION", props.iteration]];
  return <article className="failure-card">{entries.map(([label, value], index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><p>{value}</p></div>)}</article>;
}
