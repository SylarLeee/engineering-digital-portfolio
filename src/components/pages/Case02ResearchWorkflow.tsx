"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Bot, Crosshair, FileOutput, FileText, MousePointerClick, RefreshCw } from "lucide-react";
import { Case02WorkflowDetailPanel } from "@/components/pages/Case02WorkflowDetailPanel";
import { workflowDetails, type WorkflowId } from "@/content/case02-workflow-details";

export type WorkflowNodeContent = {
  index: string;
  label: string;
  title: string;
  details: string[];
  role: string;
  href: string;
};

export type ResearchWorkflowContent = {
  title: string;
  lead: string;
  interactionHint: string;
  input: { title: string; details: string[] };
  workflow01: WorkflowNodeContent;
  agent: { title: string; details: string[] };
  workflow02: WorkflowNodeContent;
  workflow03: WorkflowNodeContent;
  optimizationAgent: { title: string; details: string[] };
  output: { title: string; note: string };
  paths: {
    direct: { index: string; title: string; condition: string };
    external: { index: string; title: string; condition: string; loopNote: string };
  };
  conclusion: string;
  next: string;
};

function WorkflowNodeCard({ node, workflowId, onSelect, compact = false }: { node: WorkflowNodeContent; workflowId: WorkflowId; onSelect: (workflowId: WorkflowId) => void; compact?: boolean }) {
  return (
    <button type="button" className={compact ? "case02-workflow-node case02-workflow-node--compact" : "case02-workflow-node"} onClick={() => onSelect(workflowId)} aria-label={`在本区域查看${node.label}详情`}>
      <span>{node.index}</span>
      <FileText size={compact ? 22 : 28} aria-hidden="true" />
      <small>{node.label}</small>
      <h3>{node.title}</h3>
      <ul>{node.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      {!compact && <p>{node.role}</p>}
    </button>
  );
}

function AgentCard({ title, details, compact = false }: { title: string; details: string[]; compact?: boolean }) {
  return <article className={compact ? "case02-agent-node case02-agent-node--compact" : "case02-agent-node"}><Bot size={compact ? 23 : 31} aria-hidden="true" /><h3>{title}</h3><ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>;
}

function ReportOutput({ title, note }: { title: string; note: string }) {
  return <article className="case02-report-output"><FileOutput size={25} aria-hidden="true" /><div><h3>{title}</h3><p>{note}</p></div></article>;
}

function RevisionAgentCard() {
  return (
    <article className="case02-revision-agent">
      <Bot size={23} aria-hidden="true" />
      <div><h3>External AI 再修订</h3><ul><li>针对问题优化</li><li>调整内容与结论</li></ul></div>
    </article>
  );
}

export function Case02ResearchWorkflow({ workflow }: { workflow: ResearchWorkflowContent }) {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowId | null>(null);
  const activeDetail = activeWorkflow ? workflowDetails[activeWorkflow] : null;

  return (
    <section className="case02-research-workflow-section" aria-labelledby="case02-research-workflow-title">
      <header className="case02-research-workflow-heading">
        <div><h2 id="case02-research-workflow-title">{workflow.title}</h2><p>{workflow.lead}</p></div>
        {!activeDetail && (
          <div className="case02-workflow-guide">
            <span><MousePointerClick size={18} aria-hidden="true" />点击节点，在本区域查看详细设计</span>
            <div><i className="case02-legend-main" />主流程<i className="case02-legend-branch" />分支流程<RefreshCw size={17} aria-hidden="true" />返修回流</div>
          </div>
        )}
      </header>

      {activeDetail ? (
        <div className={`case02-inline-workflow-detail case02-workflow-detail-page--${activeDetail.theme}`} aria-live="polite">
          <div className="case02-inline-workflow-toolbar">
            <button type="button" onClick={() => setActiveWorkflow(null)}><ArrowLeft size={16} aria-hidden="true" />返回工作流总览</button>
            <p>当前：工作流 {activeDetail.index}</p>
            <nav aria-label="切换工作流详情">
              {(["workflow-01", "workflow-02", "workflow-03"] as const).map((workflowId, index) => (
                <span className="case02-inline-workflow-step" key={workflowId}>
                  <button type="button" className={activeWorkflow === workflowId ? "is-current" : ""} onClick={() => setActiveWorkflow(workflowId)}>{workflowDetails[workflowId].index}</button>
                  {index < 2 && <ArrowRight size={14} aria-hidden="true" />}
                </span>
              ))}
            </nav>
          </div>
          <Case02WorkflowDetailPanel workflow={activeDetail} embedded />
        </div>
      ) : (
        <>
          <div className="case02-workflow-architecture-scroll">
            <div className="case02-workflow-architecture" aria-label="AI竞品研究由研究需求输入、研究规划、AI Agent、输出治理和直接输出、外部修订两条路径组成">
              <article className="case02-workflow-input"><FileText size={29} aria-hidden="true" /><h3>{workflow.input.title}</h3><ul>{workflow.input.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>
              <ArrowRight className="case02-architecture-arrow" size={23} aria-hidden="true" />
              <WorkflowNodeCard node={workflow.workflow01} workflowId="workflow-01" onSelect={setActiveWorkflow} />
              <ArrowRight className="case02-architecture-arrow" size={23} aria-hidden="true" />
              <AgentCard title={workflow.agent.title} details={workflow.agent.details} />
              <ArrowRight className="case02-architecture-arrow" size={23} aria-hidden="true" />
              <WorkflowNodeCard node={workflow.workflow02} workflowId="workflow-02" onSelect={setActiveWorkflow} />
              <div className="case02-branch-origin" aria-hidden="true"><i /><i /></div>

              <div className="case02-governance-paths">
                <section className="case02-governance-path case02-governance-path--direct"><header><span>路径 {workflow.paths.direct.index}</span><h3>{workflow.paths.direct.title}</h3><p>{workflow.paths.direct.condition}</p></header><div className="case02-direct-line" aria-hidden="true"><i /></div><ReportOutput title={workflow.output.title} note={workflow.output.note} /></section>
                <section className="case02-governance-path case02-governance-path--external">
                  <header><span>路径 {workflow.paths.external.index}</span><h3>{workflow.paths.external.title}</h3><p>{workflow.paths.external.condition}</p></header>
                  <div className="case02-external-route">
                    <AgentCard title={workflow.optimizationAgent.title} details={workflow.optimizationAgent.details} compact />
                    <ArrowRight className="case02-path-arrow" size={20} aria-hidden="true" />
                    <WorkflowNodeCard node={workflow.workflow03} workflowId="workflow-03" onSelect={setActiveWorkflow} compact />
                    <div className="case02-route-decision">
                      <span>结果判断</span>
                      <div className="case02-route-result case02-route-result--pass"><b>通过</b><i aria-hidden="true" /><ReportOutput title={workflow.output.title} note={workflow.output.note} /></div>
                      <div className="case02-route-result case02-route-result--revise"><b>未通过</b><i aria-hidden="true" /><RevisionAgentCard /></div>
                    </div>
                    <div className="case02-external-loop" aria-label={workflow.paths.external.loopNote}><RefreshCw size={16} aria-hidden="true" /><span>{workflow.paths.external.loopNote}</span></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="case02-workflow-conclusion"><Crosshair size={35} aria-hidden="true" /><strong>{workflow.conclusion}</strong><span>{workflow.next}</span><ArrowRight size={26} aria-hidden="true" /></div>
        </>
      )}
    </section>
  );
}
