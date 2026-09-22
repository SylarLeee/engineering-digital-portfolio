import { Fragment, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, BarChart3, Bot, Box, CircleCheck, ClipboardCheck, Code2, Crosshair, FileCheck2, FileText, Lightbulb, ListTodo, PencilRuler, RefreshCw, ShieldCheck, Users, TriangleAlert } from "lucide-react";
import { CaseHeader } from "@/components/case/CaseHeader";
import { CaseNavigator } from "@/components/case/CaseNavigator";
import { Container } from "@/components/layout/Container";
import { Case02ResearchWorkflow, type ResearchWorkflowContent } from "@/components/pages/Case02ResearchWorkflow";
import { Case02ReliabilityGovernance } from "@/components/pages/Case02ReliabilityGovernance";
import { getPageContent } from "@/content/loader";
import type { PortfolioPageContent } from "@/content/schema";

type AITool = {
  name: string;
  icon: string;
  brand: string;
  tag: string;
};

type Case02Content = PortfolioPageContent & {
  pageLabel: string;
  ecosystem: {
    title: string;
    lead: string;
    stages: Array<{
      index: string;
      title: string;
      description: string;
      tools: AITool[];
    }>;
  };
  problems: {
    title: string;
    lead: string;
    islands: {
      title: string;
      description: string;
      tools: Array<{ name: string; stage: string }>;
      breaks: Array<{ title: string; reasons: string[] }>;
      conclusion: string;
      equation: string;
    };
    deviation: {
      title: string;
      description: string;
      nodes: Array<{
        label: string;
        tool: string;
        stage: string;
        deviation: string;
        cumulative: string;
        alignment: string;
      }>;
      insight: string;
      detail: string;
      formula: string;
    };
  };
  governance: {
    title: string;
    lead: string;
    items: Array<{
      risk: string;
      riskDescription: string;
      control: string;
      controlDescription: string;
    }>;
    conclusion: string;
    detail: string;
    signature: string;
  };
  exploration: {
    title: string;
    lead: string;
    sideNote: string[];
    challengeTitle: string;
    challengeLead: string;
    challenges: Array<{ title: string; details: string[] }>;
    focusLabel: string;
    focusEyebrow: string;
    focusTitle: string;
    focusLead: string;
    source: { title: string; label: string; details: string[] };
    controls: Array<{ title: string; description: string }>;
    outcome: { title: string; details: string[] };
    conclusion: string;
    conclusionAside: string;
  };
  entryPoint: {
    eyebrow: string;
    title: string;
    lead: string;
    sideNote: string[];
    flowTitle: string;
    flowLead: string;
    stages: Array<{
      index: string;
      title: string;
      details: string[];
      selected?: boolean;
    }>;
    reasonsTitle: string;
    reasons: Array<{
      index: string;
      title: string;
      description: string;
    }>;
  };
  researchWorkflow: ResearchWorkflowContent;
};

function SectionHeading({ id, index, title, lead }: { id: string; index: string; title: string; lead: string }) {
  return (
    <header className="case02-section-heading">
      <span>{index}</span>
      <div><p>AI ECOSYSTEM / WORKFLOW</p><h2 id={id}>{title}</h2><strong>{lead}</strong></div>
    </header>
  );
}

function BrandCard({ tool }: { tool: AITool }) {
  return (
    <article className={`case02-brand-card case02-brand-card--${tool.brand}`}>
      <span className="case02-brand-mark" aria-hidden="true">
        <Image src={tool.icon} alt="" width={32} height={32} />
      </span>
      <div><strong>{tool.name}</strong><small>{tool.tag}</small></div>
    </article>
  );
}

function EcosystemMap({ page }: { page: Case02Content }) {
  return (
    <section className="case02-section" aria-labelledby="case02-ecosystem-title">
      <SectionHeading id="case02-ecosystem-title" index="01" title={page.ecosystem.title} lead={page.ecosystem.lead} />
      <div className="case02-workflow-map" aria-label="AI能力覆盖数字化产品流程的五阶段地图">
        {page.ecosystem.stages.map((stage, index) => (
          <Fragment key={stage.index}>
            <article className="case02-ai-stage" style={{ "--stage-order": index } as CSSProperties}>
              <header><span>{stage.index}</span><div><h3>{stage.title}</h3><p>{stage.description}</p></div></header>
              <div>{stage.tools.map((tool) => <BrandCard key={tool.name} tool={tool} />)}</div>
            </article>
            {index < page.ecosystem.stages.length - 1 && <ArrowRight className="case02-stage-arrow" size={20} aria-hidden="true" />}
          </Fragment>
        ))}
      </div>
      <div className="case02-section-bridge"><span>AI capability coverage</span><ArrowDown size={18} aria-hidden="true" /></div>
    </section>
  );
}

function ToolIslands({ page }: { page: Case02Content }) {
  return (
    <article className="case02-problem-card">
      <header><span>PROBLEM 01</span><h3>{page.problems.islands.title}</h3><p>{page.problems.islands.description}</p></header>
      <div className="case02-island-scroll">
        <div className="case02-island-map" aria-label="从研究到验证的AI工具链：四处工具交接均存在输入输出断裂">
          {page.problems.islands.tools.map((tool, index) => (
            <Fragment key={tool.name}>
              <div className="case02-island-node">
                <span>0{index + 1}</span>
                <small>{tool.stage}</small>
                <strong>{tool.name}</strong>
              </div>
              {index < page.problems.islands.tools.length - 1 && (
                <div className="case02-flow-link case02-flow-link--broken">
                  <div className="case02-flow-break"><i /><b aria-hidden="true">×</b><i /></div>
                  <div className="case02-break-card">
                    <strong><TriangleAlert size={13} aria-hidden="true" />{page.problems.islands.breaks[index].title}</strong>
                    <ul>{page.problems.islands.breaks[index].reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
                    <span>……</span>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="case02-island-summary">
        <p>{page.problems.islands.conclusion}</p>
        <strong>{page.problems.islands.equation}</strong>
      </div>
    </article>
  );
}

function DeviationMap({ page }: { page: Case02Content }) {
  const positions = [
    { x: "13%", y: "11%" },
    { x: "31%", y: "16%" },
    { x: "49%", y: "23%" },
    { x: "67%", y: "34%" },
    { x: "84%", y: "46%" },
  ];

  return (
    <article className="case02-problem-card case02-problem-card--deviation">
      <header><span>PROBLEM 02</span><h3>{page.problems.deviation.title}</h3><p>{page.problems.deviation.description}</p></header>
      <div className="case02-deviation-scroll">
        <div className="case02-deviation-map" aria-label="五个AI节点连续传递后，对齐度从100%下降至69%的偏移示意">
          <div className="case02-chart-origin"><strong>初始目标</strong><span>100% 对齐</span></div>
          <div className="case02-chart-expected"><strong>理想输出方向</strong><span>保持 100% 对齐</span></div>
          <div className="case02-chart-generated"><strong>最终输出<br />69% 对齐</strong><span>总偏差 31%</span></div>
          <svg viewBox="0 0 1000 390" role="img" aria-label="理想假设中每个AI节点仅产生约5%偏差，累计偏差仍会逐步增加">
            <defs><marker id="case02-delta-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker></defs>
            <g className="case02-chart-grid">
              <path d="M80 90 H900 M80 150 H900 M80 210 H900 M80 270 H900" />
              <path d="M110 70 V300 M285 70 V300 M460 70 V300 M635 70 V300 M810 70 V300" />
            </g>
            <g className="case02-chart-scale"><text x="20" y="95">100%</text><text x="30" y="155">80%</text><text x="30" y="215">60%</text><text x="30" y="275">40%</text></g>
            <path className="case02-goal-path" d="M110 90 H900" />
            <path className="case02-deviation-path" d="M110 90 L285 110 L460 140 L635 185 L810 235" />
            <path className="case02-delta-path" d="M900 94 V235" markerEnd="url(#case02-delta-arrow)" />
            <g className="case02-chart-points"><circle cx="110" cy="90" r="7" /><circle cx="285" cy="110" r="7" /><circle cx="460" cy="140" r="7" /><circle cx="635" cy="185" r="7" /><circle cx="810" cy="235" r="7" /></g>
            <g className="case02-chart-stages">
              {page.problems.deviation.nodes.map((node, index) => <text key={node.stage} x={[110, 285, 460, 635, 810][index]} y="330" textAnchor="middle"><tspan>{node.stage}</tspan><tspan x={[110, 285, 460, 635, 810][index]} dy="20">{["Research", "Insight", "Design", "Prototype", "Validation"][index]}</tspan></text>)}
            </g>
          </svg>
          {page.problems.deviation.nodes.map((node, index) => (
            <div className="case02-deviation-node" key={node.label} style={{ "--node-x": positions[index].x, "--node-y": positions[index].y } as CSSProperties}>
              <header><span>{node.label}</span><strong>{node.tool}</strong></header>
              <dl><div><dt>输出偏差</dt><dd>{node.deviation}</dd></div><div><dt>累计偏差</dt><dd>{node.cumulative}</dd></div></dl>
            </div>
          ))}
        </div>
      </div>
      <div className="case02-deviation-summary"><div><strong>{page.problems.deviation.insight}</strong><p>{page.problems.deviation.detail}</p></div><span>{page.problems.deviation.formula}</span></div>
    </article>
  );
}

function Problems({ page }: { page: Case02Content }) {
  return (
    <section className="case02-section case02-section--problems" aria-labelledby="case02-problems-title">
      <SectionHeading id="case02-problems-title" index="02" title={page.problems.title} lead={page.problems.lead} />
      <div className="case02-problem-grid"><ToolIslands page={page} /><DeviationMap page={page} /></div>
      <div className="case02-section-bridge"><span>system reliability gap</span><ArrowDown size={18} aria-hidden="true" /></div>
    </section>
  );
}

function Governance({ page }: { page: Case02Content }) {
  const controlIcons = [Crosshair, FileCheck2, ShieldCheck, RefreshCw];

  return (
    <section className="case02-section case02-section--governance" aria-labelledby="case02-governance-title">
      <SectionHeading id="case02-governance-title" index="03" title={page.governance.title} lead={page.governance.lead} />
      <div className="case02-governance-scroll">
        <div className="case02-governance-matrix" aria-label="AI工作流常见风险与对应治理机制">
          <div className="case02-matrix-label"><strong>常见风险</strong><span>RISKS</span></div>
          {page.governance.items.map((item) => (
            <article className="case02-risk-cell" key={item.risk}>
              <strong><TriangleAlert size={17} aria-hidden="true" />{item.risk}</strong>
              <p>{item.riskDescription}</p>
            </article>
          ))}
          <div className="case02-matrix-label case02-matrix-label--controls"><strong>治理机制</strong><span>GOVERNANCE</span></div>
          {page.governance.items.map((item, index) => {
            const ControlIcon = controlIcons[index];
            return (
              <article className="case02-governance-cell" key={item.control}>
                <span><ControlIcon size={25} aria-hidden="true" /></span>
                <div><strong>{item.control}</strong><p>{item.controlDescription}</p></div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="case02-governance-conclusion">
        <div><strong>{page.governance.conclusion}</strong><p>{page.governance.detail}</p></div>
        <span>{page.governance.signature}</span>
      </div>
      <div className="case02-section-bridge"><span>workflow exploration</span><ArrowDown size={18} aria-hidden="true" /></div>
    </section>
  );
}

function Exploration({ page }: { page: Case02Content }) {
  const challengeIcons = [Box, ListTodo, FileText, ShieldCheck, Crosshair, Users];
  const controlIcons = [FileCheck2, CircleCheck, RefreshCw];

  return (
    <section className="case02-section case02-section--exploration" aria-labelledby="case02-exploration-title">
      <header className="case02-exploration-heading">
        <div>
          <p>SECTION 04</p>
          <h2 id="case02-exploration-title">{page.exploration.title}</h2>
          <strong>{page.exploration.lead}</strong>
        </div>
        <aside>{page.exploration.sideNote.map((line) => <span key={line}>{line}</span>)}</aside>
      </header>

      <div className="case02-exploration-layout">
        <article className="case02-challenge-space">
          <header><h3>{page.exploration.challengeTitle}</h3><p>{page.exploration.challengeLead}</p></header>
          <div className="case02-challenge-grid">
            {page.exploration.challenges.map((challenge, index) => {
              const ChallengeIcon = challengeIcons[index];
              return (
                <section key={challenge.title}>
                  <ChallengeIcon size={28} aria-hidden="true" />
                  <h4>{challenge.title}</h4>
                  <p>{challenge.details.map((detail) => <span key={detail}>{detail}</span>)}</p>
                </section>
              );
            })}
          </div>
        </article>

        <div className="case02-focus-arrow">
          <ArrowRight size={54} strokeWidth={1.4} aria-hidden="true" />
          <strong>{page.exploration.focusLabel}</strong>
          <span>FOCUS</span>
        </div>

        <article className="case02-focus-panel">
          <header>
            <span>{page.exploration.focusEyebrow}</span>
            <h3>{page.exploration.focusTitle}</h3>
            <p>{page.exploration.focusLead}</p>
          </header>
          <div className="case02-reliability-flow" aria-label="AI Agent输出通过规则约束、质量检查和反馈机制转化为更可靠的研究结果">
            <section className="case02-agent-source">
              <Bot size={30} aria-hidden="true" />
              <h4>{page.exploration.source.title}</h4>
              <strong>{page.exploration.source.label}</strong>
              <p>{page.exploration.source.details.map((detail) => <span key={detail}>{detail}</span>)}</p>
            </section>
            <ArrowRight className="case02-reliability-arrow" size={28} aria-hidden="true" />
            <div className="case02-control-stack">
              {page.exploration.controls.map((control, index) => {
                const ControlIcon = controlIcons[index];
                return <section key={control.title}><ControlIcon size={22} aria-hidden="true" /><div><h4>{control.title}</h4><p>{control.description}</p></div></section>;
              })}
            </div>
            <ArrowRight className="case02-reliability-arrow" size={28} aria-hidden="true" />
            <section className="case02-reliable-outcome">
              <FileCheck2 size={31} aria-hidden="true" />
              <h4>{page.exploration.outcome.title}</h4>
              <p>{page.exploration.outcome.details.map((detail) => <span key={detail}>{detail}</span>)}</p>
            </section>
          </div>
        </article>
      </div>

      <div className="case02-exploration-conclusion">
        <strong>{page.exploration.conclusion}</strong>
        <span>{page.exploration.conclusionAside}</span>
        <ArrowRight size={28} aria-hidden="true" />
      </div>
    </section>
  );
}

function EntryPointSelection({ page }: { page: Case02Content }) {
  const stageIcons = [Users, BarChart3, Lightbulb, PencilRuler, Code2, ClipboardCheck];

  return (
    <section className="case02-selection-section" aria-labelledby="case02-selection-title">
      <header className="case02-selection-heading">
        <div>
          <p>{page.entryPoint.eyebrow}</p>
          <h2 id="case02-selection-title">{page.entryPoint.title}</h2>
          <strong>{page.entryPoint.lead}</strong>
        </div>
        <aside>{page.entryPoint.sideNote.map((line) => <span key={line}>{line}</span>)}</aside>
      </header>

      <div className="case02-entry-selection">
        <article className="case02-product-flow-panel">
          <header>
            <h3>{page.entryPoint.flowTitle}</h3>
            <p>{page.entryPoint.flowLead}</p>
          </header>
          <div className="case02-product-flow-scroll">
            <div className="case02-product-flow" aria-label="数字化产品完整流程，其中竞品分析被选为AI可靠性治理的第一个探索场景">
              {page.entryPoint.stages.map((stage, index) => {
                const StageIcon = stageIcons[index];
                return (
                  <Fragment key={stage.index}>
                    <section className={stage.selected ? "case02-flow-stage case02-flow-stage--selected" : "case02-flow-stage"}>
                      <StageIcon size={25} aria-hidden="true" />
                      <span>{stage.index}</span>
                      <h4>{stage.title}{stage.selected && <b aria-label="已选择">★</b>}</h4>
                      <p>{stage.details.map((detail) => <small key={detail}>{detail}</small>)}</p>
                    </section>
                    {index < page.entryPoint.stages.length - 1 && <ArrowRight className="case02-flow-stage-arrow" size={18} aria-hidden="true" />}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </article>

        <aside className="case02-selection-reasons">
          <h3>{page.entryPoint.reasonsTitle}</h3>
          <div>
            {page.entryPoint.reasons.map((reason) => (
              <article key={reason.index}>
                <CircleCheck size={21} aria-hidden="true" />
                <div><span>{reason.index}</span><h4>{reason.title}</h4><p>{reason.description}</p></div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export function Case02Page({ showCaseNavigator = true }: { showCaseNavigator?: boolean }) {
  const page = getPageContent("case02") as Case02Content;
  return (
    <div className="case02-page">
      <CaseHeader project={page.title} background={page.subtitle} status={page.status} />
      <main className="case02-page01">
        <Container><p className="case02-page-label">01 / {page.pageLabel}</p></Container>
        <Container><EcosystemMap page={page} /><Problems page={page} /><Governance page={page} /><Exploration page={page} /></Container>
      </main>
      <main className="case02-page02">
        <Container><EntryPointSelection page={page} /><Case02ResearchWorkflow workflow={page.researchWorkflow} /></Container>
      </main>
      <main className="case02-page03">
        <Container><Case02ReliabilityGovernance /></Container>
      </main>
      {showCaseNavigator && <CaseNavigator currentId="case02" />}
    </div>
  );
}
