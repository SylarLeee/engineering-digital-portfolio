import { ArrowRight } from "lucide-react";

export function ProcessFlow({ steps }: { steps: Array<{ label: string; detail?: string }> }) {
  return <ol className="process-flow">{steps.map((step, index) => <li key={step.label}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{step.label}</strong>{step.detail && <small>{step.detail}</small>}</div>{index < steps.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>;
}
