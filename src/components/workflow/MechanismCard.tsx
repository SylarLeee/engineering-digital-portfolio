import { ShieldCheck } from "lucide-react";

export function MechanismCard({ index, title, description }: { index: string; title: string; description: string }) {
  return <article className="mechanism-card"><span>{index}</span><ShieldCheck size={20} /><h3>{title}</h3><p>{description}</p></article>;
}
