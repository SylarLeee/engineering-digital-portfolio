"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { WorkflowSection } from "@/content/schema";

type Workflow = WorkflowSection["workflows"][number];

function WorkflowItem({ workflow, defaultOpen }: { workflow: Workflow; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="workflow-item">
      <CollapsibleTrigger className="workflow-trigger">
        <span className="workflow-id">{workflow.id}</span><span className="workflow-name">{workflow.name}</span><span className="workflow-purpose">{workflow.purpose}</span><ChevronDown className={open ? "rotate-180" : ""} size={18} />
      </CollapsibleTrigger>
      <CollapsibleContent className="workflow-content">
        <div className="workflow-nodes">{workflow.nodes.map((node, index) => <span key={node}><em>{String(index + 1).padStart(2, "0")}</em>{node}</span>)}</div>
        <dl><div><dt>INPUT</dt><dd>{workflow.input}</dd></div><div><dt>OUTPUT</dt><dd>{workflow.output}</dd></div></dl>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function WorkflowExpandable({ workflows }: Pick<WorkflowSection, "workflows">) {
  return <div className="workflow-list">{workflows.map((workflow, index) => <WorkflowItem key={workflow.id} workflow={workflow} defaultOpen={index === 0} />)}</div>;
}
