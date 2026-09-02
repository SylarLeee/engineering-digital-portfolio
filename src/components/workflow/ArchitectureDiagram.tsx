import type { ArchitectureSection } from "@/content/schema";

export function ArchitectureDiagram({ layers }: Pick<ArchitectureSection, "layers">) {
  return <div className="architecture-diagram">{layers.map((layer, index) => <div className="architecture-layer" key={layer.index}><span>{layer.index}</span><div><strong>{layer.name}</strong><p>{layer.detail}</p></div>{index < layers.length - 1 && <i aria-hidden="true" />}</div>)}</div>;
}
