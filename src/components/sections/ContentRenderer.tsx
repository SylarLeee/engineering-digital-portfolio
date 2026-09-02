import type { PortfolioSection } from "@/content/schema";
import { Section } from "@/components/common/Section";
import { SectionIntro } from "@/components/common/SectionIntro";
import { ArchitectureDiagram } from "@/components/workflow/ArchitectureDiagram";
import { WorkflowExpandable } from "@/components/workflow/WorkflowExpandable";
import { MechanismCard } from "@/components/workflow/MechanismCard";

function RenderSection({ section }: { section: PortfolioSection }) {
  if (section.type === "architecture") {
    return <Section id={section.id} theme={section.theme}><SectionIntro eyebrow={section.eyebrow} title={section.title} description={section.description} /><ArchitectureDiagram layers={section.layers} /></Section>;
  }
  if (section.type === "workflow") {
    return <Section id={section.id} theme={section.theme}><SectionIntro eyebrow={section.eyebrow} title={section.title} description={section.description} /><WorkflowExpandable workflows={section.workflows} /></Section>;
  }
  if (section.type === "principles") {
    return <Section id={section.id} theme={section.theme}><SectionIntro eyebrow={section.eyebrow} title={section.title} description={section.description} /><div className="principle-grid">{section.items.map((item) => <MechanismCard key={item.label} index={item.label} title={item.title} description={item.description} />)}</div></Section>;
  }
  return <Section id={section.id} theme={section.theme}><SectionIntro eyebrow={section.eyebrow} title={section.title} description={section.description} /><div className="content-placeholder"><span>CONTENT INTERFACE</span><p>{section.note}</p></div></Section>;
}

export function ContentRenderer({ sections }: { sections: PortfolioSection[] }) {
  return <>{sections.map((section) => <RenderSection key={section.id} section={section} />)}</>;
}
