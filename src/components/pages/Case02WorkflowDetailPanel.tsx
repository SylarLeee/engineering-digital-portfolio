"use client";

import { useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, CircleCheck, CircleUserRound, Database, FileCheck2, FileOutput, FilePenLine, FileText, Gauge, GitBranch, ListChecks, MessageSquareText, PackageCheck, RefreshCw, Scale, Search, ShieldCheck, Target, TriangleAlert, UserCheck } from "lucide-react";
import type { DetailOutput, WorkflowDetail } from "@/content/case02-workflow-details";

type VisualNode = { id: string; title: string; subtitle?: string; description: string; icon: ReactNode };

function DetailAside({ workflow, collapsed, onToggle }: { workflow: WorkflowDetail; collapsed: boolean; onToggle: () => void }) {
  return (
    <aside className="case02-workflow-detail-aside" aria-label={`工作流 ${workflow.index} 详情侧边栏`}>
      <button
        type="button"
        className="case02-workflow-aside-toggle"
        aria-label={collapsed ? "展开工作流详情侧边栏" : "收起工作流详情侧边栏"}
        aria-expanded={!collapsed}
        onClick={onToggle}
      >
        {collapsed ? <ChevronLeft size={17} aria-hidden="true" /> : <ChevronRight size={17} aria-hidden="true" />}
        <span>{collapsed ? "展开详情" : "收起详情"}</span>
      </button>
      <span className="case02-workflow-aside-collapsed-label" aria-hidden={!collapsed}>工作流 {workflow.index} 简介</span>
      <header><ShieldCheck size={26} aria-hidden="true" /><div><h2>工作流 {workflow.index} 详情</h2><span>Workflow {workflow.index} Detail</span></div></header>
      <section><h3>核心目标</h3><p>{workflow.sidebar.goal}</p></section>
      <section><h3>关键价值</h3><ul>{workflow.sidebar.values.map((value) => <li key={value}>{value}</li>)}</ul></section>
      <section><h3>{workflow.sidebar.boundaryTitle}</h3><p>{workflow.sidebar.boundary}</p></section>
      <section className="case02-wd-aside-outputs"><h3>关键输出</h3>{workflow.outputs.map((output) => <div key={output.id}><FileCheck2 size={17} aria-hidden="true" /><span><b>{output.title}</b><small>{output.description}</small></span></div>)}</section>
    </aside>
  );
}

const workflow01Nodes: VisualNode[] = [
  { id: "W01-01", title: "目标解析", subtitle: "Goal Parser", description: "解析研究目标", icon: <Target size={27} /> },
  { id: "W01-02", title: "输入校验", description: "校验字段合法性", icon: <CheckCircle2 size={27} /> },
  { id: "W01-03", title: "量规检索", description: "匹配规则与量规", icon: <Database size={27} /> },
  { id: "W01-04", title: "任务规划（上层）", description: "定义范围与方法", icon: <GitBranch size={27} /> },
  { id: "W01-05", title: "任务规划（下层）", description: "编译执行约束", icon: <FileText size={27} /> },
  { id: "W01-G1", title: "门禁检查", subtitle: "G1｜Code", description: "验证执行条件", icon: <ShieldCheck size={27} /> },
];

function WorkflowModule({ node, order }: { node: VisualNode; order: number }) {
  return (
    <article className="case02-w01-module">
      <header><span>{node.id}</span><i aria-label={`模块 ${order} 就绪`} /></header>
      <div className="case02-w01-module-icon">{node.icon}</div>
      <h3>{node.title}</h3>
      {node.subtitle && <small>{node.subtitle}</small>}
      <p>{node.description}</p>
      <footer><b>MODULE {String(order).padStart(2, "0")}</b><span>READY</span></footer>
    </article>
  );
}

function WorkflowOutcomes() {
  return (
    <section className="case02-w01-outcomes" aria-label="工作流执行结果分流">
      <article className="case02-w01-outcome case02-w01-outcome--success">
        <header><div><span>RUNTIME STATUS</span><b>G1 CHECK</b></div><strong><CircleCheck size={17} aria-hidden="true" />PASS</strong></header>
        <p><b>生成标准化任务</b><small>6 个模块执行完成，任务门禁通过</small></p>
        <footer><code>RUN 01 · COMPLETE</code><span>NORMAL OUTPUT <ArrowDown size={15} aria-hidden="true" /></span></footer>
      </article>
      <article className="case02-w01-outcome case02-w01-outcome--failure">
        <header><div><span>RUNTIME STATUS</span><b>G1 CHECK</b></div><strong><TriangleAlert size={16} aria-hidden="true" />FAILED</strong></header>
        <p><b>返回错误信息</b><small>输入或门禁检查未通过</small></p>
        <footer><code>RUN 01 · STOPPED</code><span>EXCEPTION <ArrowDown size={15} aria-hidden="true" /></span></footer>
      </article>
    </section>
  );
}

function ArtifactCard({ output }: { output: DetailOutput }) {
  const Icon = output.type === "A" ? FileOutput : PackageCheck;
  return (
    <article className={`case02-w01-artifact case02-w01-artifact--${output.type.toLowerCase()}`}>
      <header><span>{output.id}</span><b>OUTPUT {output.type}</b></header>
      <div><Icon size={24} aria-hidden="true" /><h3>{output.title}</h3></div>
      <p>{output.description}</p>
      <ul>{output.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

function WorkflowEngine() {
  return (
    <section className="case02-w01-engine">
      <header>
        <div><span>WORKFLOW ENGINE</span><h2><b>W01</b> Task Compilation Engine</h2><p>任务编译引擎｜从自然语言需求到可执行 AI Agent 任务</p></div>
        <strong><Gauge size={17} aria-hidden="true" />6 MODULES</strong>
      </header>
      <div className="case02-w01-engine-rail" aria-label="W01 任务编译引擎六个执行模块">
        {workflow01Nodes.map((node, index) => <WorkflowModule node={node} order={index + 1} key={node.id} />)}
      </div>
    </section>
  );
}

function Workflow01Canvas({ workflow }: { workflow: WorkflowDetail }) {
  const primaryInputs = ["research_goal", "competitors", "focus_module", "time_window"];
  const visibleInputs = primaryInputs.map((key) => workflow.input.items.find((item) => item.key === key)).filter(Boolean);
  return (
    <div className="case02-w01-console">
      <div className="case02-w01-runtime-layer">
        <aside className="case02-w01-schema">
          <header><Database size={15} aria-hidden="true" /><div><span>INPUT SCHEMA</span><h2>启动参数</h2></div></header>
          <dl>{visibleInputs.map((item) => item && <div key={item.id}><dt>{item.key}</dt><dd>{item.value}</dd></div>)}</dl>
          <p>…　+ 3 optional parameters</p>
        </aside>
        <div className="case02-w01-input-link" aria-hidden="true"><span>INPUT</span><ArrowRight size={17} /></div>
        <WorkflowEngine />
      </div>
      <WorkflowOutcomes />
      <section className="case02-w01-artifact-dock">
        <header><div><span>OUTPUT ARTIFACT</span><h2>执行结果</h2></div><p>任务编译完成后生成标准化执行输入</p></header>
        <div className="case02-w01-artifact-layout">
          <div className="case02-w01-artifact-group">{workflow.outputs.map((output) => <ArtifactCard output={output} key={output.id} />)}</div>
          <aside className="case02-w01-exception">
            <header><TriangleAlert size={16} aria-hidden="true" /><span>EXCEPTION</span></header>
            <div><b>E-01</b><h3>error_messages</h3></div>
            <p>输入不合法时返回可追踪错误</p>
          </aside>
        </div>
        <footer><CircleCheck size={15} aria-hidden="true" />task_book 与 research_scope 将作为后续 AI Agent 的执行输入。</footer>
      </section>
    </div>
  );
}

function MicroSteps({ items }: { items: string[] }) {
  return <div className="case02-wd-micro-steps">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

function ProcessArrow() {
  return <ArrowRight className="case02-wd-process-arrow" size={18} aria-hidden="true" />;
}

function Workflow02Canvas() {
  return (
    <div className="case02-wd-canvas case02-wd-canvas--governance-v2">
      <section className="case02-w02-human-layer">
        <header><CircleUserRound size={21} aria-hidden="true" /><div><h2>人类控制输入</h2><p>在关键节点引入人工判断，确保研究结果符合业务需求与质量标准。</p></div></header>
        <div>
          <article className="is-confirm"><span>01</span><UserCheck size={23} /><div><h3>结果确认</h3><p>确认研究方向、结论范围与核心结论</p></div></article>
          <article className="is-feedback"><span>02</span><MessageSquareText size={23} /><div><h3>用户反馈</h3><p>提供修改意见、补充信息或新的研究要求</p></div></article>
          <article className="is-accept"><span>03</span><CheckCircle2 size={23} /><div><h3>修订验收</h3><p>决定修订结果是否进入最终输出</p></div></article>
        </div>
      </section>

      <section className="case02-w02-governance-flow">
        <header><GitBranch size={22} aria-hidden="true" /><div><h2><b>W02</b> 治理主流程</h2><p>多层治理后，由人工决策选择处理路径，确保研究结果的准确性、完整性与可用性。</p></div><span>WORKFLOW 02<br />GOVERNANCE FLOW</span></header>
        <div className="case02-w02-flow-grid">
          <article className="case02-w02-stage is-source"><span>01</span><h3>AI 竞品研究结果</h3><Database size={28} /><p>来自工作流 01 的初步研究结果</p><MicroSteps items={["研究数据", "结论 / 发现 / 证据"]} /></article>
          <ProcessArrow />
          <article className="case02-w02-stage is-evidence"><span>02</span><h3>事实与证据治理</h3><FileCheck2 size={28} /><p>校验事实准确性、来源与证据链</p><MicroSteps items={["N1 事实校验", "N2 来源验证", "证据完整性"]} /></article>
          <ProcessArrow />
          <article className="case02-w02-stage is-audit"><span>03</span><h3>结构与语义审计</h3><ListChecks size={28} /><p>检查结构、语义边界与表达质量</p><MicroSteps items={["N3 结构检查", "N5A1 语义审计", "N5A2 质量评分"]} /></article>
          <ProcessArrow />
          <article className="case02-w02-stage is-review"><span>04</span><h3>研究结果评审</h3><div className="case02-w02-review-modes"><b><Gauge size={17} />N4 自动评审</b><b><UserCheck size={17} />N6 人工评审</b></div><small>N7 用户意见 → N8 意图识别 → N8.5 解包</small><div className="case02-w02-review-result"><em>通过</em><em>需修订</em></div></article>
          <ProcessArrow />
          <section className="case02-w02-routing-stage"><header><span>05</span><div><h3>反馈处理与修订策略</h3><p>根据评审结果和用户反馈，选择最合适的处理路径。</p></div></header><div className="case02-w02-route-selector"><b>需要修改？</b></div><div className="case02-w02-route-options"><article className="is-pass"><CircleCheck size={20} /><h4>无需修改</h4><p>结果符合要求<br />直接进入报告封装</p></article><article className="is-local"><FilePenLine size={20} /><h4>本地修复</h4><p>N9A 就地修正</p><strong>N9V 修订验证</strong></article><article className="is-external"><RefreshCw size={20} /><h4>外部 AI 修订</h4><p>N10 问题打包</p><strong>N11 修订指导语</strong></article></div></section>
        </div>
        <div className="case02-w02-control-links" aria-hidden="true"><span>结果确认 → 评审标准</span><span>用户反馈 → 修订策略</span><span>修订验收 → 报告封装</span></div>
      </section>

      <section className="case02-w02-output-layer">
        <header><FileOutput size={22} aria-hidden="true" /><div><h2>治理输出</h2><p>生成标准化研究报告，或输出修订指导语以支持进一步优化。</p></div></header>
        <div>
          <article className="case02-w02-output is-report"><header><b>A</b><div><h3>标准化报告输出</h3><p>整合通过治理的研究结果，生成高质量、可落地的标准化研究报告。</p></div><span>OUTPUT A</span></header><div className="case02-w02-output-chain"><strong>来源整理</strong><ProcessArrow /><strong>一致性校验</strong><ProcessArrow /><strong>内容装订</strong><ProcessArrow /><strong>标准化报告</strong></div></article>
          <article className="case02-w02-output is-guidance"><header><b>B</b><div><h3>修订指导语</h3><p>将问题结构化并生成修订指导，交由 External AI 完成深度修订。</p></div><span>OUTPUT B</span></header><div className="case02-w02-output-chain"><strong>问题打包</strong><ProcessArrow /><strong>指导语生成</strong><ProcessArrow /><strong>External AI 修订</strong></div><footer>含 Workflow03 所需治理资料包</footer></article>
        </div>
      </section>
    </div>
  );
}

function Workflow03Canvas() {
  return (
    <div className="case02-wd-canvas case02-wd-canvas--audit-v2">
      <section className="case02-w03-context-layer"><header><CircleUserRound size={21} aria-hidden="true" /><div><h2>外部修订输入</h2><p>汇聚修订结果、原始状态与返修上下文，为修订治理流程提供完整输入。</p></div></header><div><article><span>01</span><FileText size={23} /><div><h3>External AI 修订结果</h3><p>来自上一轮返修的候选修改结果</p></div></article><article><span>02</span><Database size={23} /><div><h3>原始治理状态</h3><p>原始研究状态 / Evidence / Branch / SWOT</p></div></article><article><span>03</span><MessageSquareText size={23} /><div><h3>返修指导上下文</h3><p>上一轮 revision_guidance 与任务 Contract</p></div></article></div></section>

      <section className="case02-w03-audit-flow"><header><GitBranch size={22} aria-hidden="true" /><div><h2><b>W03</b> 修订治理主流程</h2><p>对 External AI 候选修订再次审计与裁决，决定升级为正式状态或进入返修闭环。</p></div><span>WORKFLOW 03<br />GOVERNANCE FLOW</span></header><div className="case02-w03-flow-grid">
        <article className="case02-w03-stage"><span>01 / C1</span><h3>修订结果解析</h3><FileText size={28} /><p>恢复任务 Contract<br />解析候选修改状态</p><MicroSteps items={["解析修订内容", "恢复任务上下文", "识别修改范围"]} /></article><ProcessArrow />
        <article className="case02-w03-stage"><span>02 / C2</span><h3>边界审计</h3><Search size={28} /><p>检查研究范围<br />与确定性约束</p><MicroSteps items={["范围边界检查", "事实一致性验证", "约束条件审计"]} /></article><ProcessArrow />
        <article className="case02-w03-stage"><span>03 / C3</span><h3>语义质量审计</h3><ListChecks size={28} /><p>审查语义边界、证据支撑与表达质量</p><MicroSteps items={["语义一致性", "证据支撑", "表达质量"]} /></article><ProcessArrow />
        <article className="case02-w03-stage is-decision"><span>04 / C4</span><h3>修订裁决</h3><Scale size={28} /><p>综合审计结果<br />决定修订去向</p><div className="case02-w03-decision-diamond">是否符合<br />发布要求？</div><div><b>通过</b><b>需返修</b></div></article>
        <section className="case02-w03-pass-path"><article><span>05A / C5</span><h3>修订内容整合</h3><GitBranch size={22} /><MicroSteps items={["合并修订内容", "保留原始优势", "更新状态版本"]} /></article><ProcessArrow /><article><span>05B / C6</span><h3>最终状态适配</h3><Database size={22} /><MicroSteps items={["状态结构化", "版本标记更新", "输出发布版本"]} /></article><ProcessArrow /><div className="case02-w03-release-ready"><b>衍生处理</b><strong><ShieldCheck size={17} />发布一致性校验</strong><strong><Gauge size={17} />战略建议生成</strong></div></section>
        <section className="case02-w03-revision-path"><article><span>05C / C8</span><h3>问题转译</h3><TriangleAlert size={22} /><MicroSteps items={["问题归类整理", "影响范围标注", "返修优先级设定"]} /></article><ProcessArrow /><article><span>05D / C9</span><h3>返修指导治理</h3><FilePenLine size={22} /><MicroSteps items={["生成修订指导", "明确修改要求", "补充验收依据"]} /></article><ProcessArrow /><article className="is-external"><RefreshCw size={22} /><h3>External AI 返修</h3><p>执行下一轮受控修订</p></article></section>
      </div><div className="case02-w03-loopback"><RefreshCw size={17} /><span>新版本修订结果返回 C1，重新进入审计</span></div></section>

      <section className="case02-w03-output-layer"><header><FileOutput size={22} aria-hidden="true" /><div><h2>治理输出</h2><p>通过路径进入标准化报告封装；返修路径产出修订指导语，驱动下一轮 External AI 修订。</p></div></header><div><article className="case02-w03-output is-report"><header><b>A</b><div><h3>标准化报告输出</h3><p>将通过审计的修订结果整合为完整、可信、可发布的研究报告。</p></div><span>OUTPUT A</span></header><div className="case02-w03-output-chain"><strong>最终状态整理</strong><ProcessArrow /><strong>发布一致性校验<br />战略建议生成</strong><ProcessArrow /><strong>分段报告生成</strong><ProcessArrow /><strong>完整性校验</strong><ProcessArrow /><strong>标准化最终报告</strong></div></article><article className="case02-w03-output is-guidance"><header><b>B</b><div><h3>修订指导语</h3><p>将审计发现的问题治理为可执行的 revision_guidance。</p></div><span>OUTPUT B</span></header><div className="case02-w03-output-chain"><strong>问题定位</strong><ProcessArrow /><strong>修订意见生成</strong><ProcessArrow /><strong>指导语治理</strong><ProcessArrow /><strong>revision_guidance</strong></div></article></div></section>
    </div>
  );
}

export function Case02WorkflowDetailPanel({ workflow, embedded = false }: { workflow: WorkflowDetail; embedded?: boolean }) {
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);

  return (
    <div className={`case02-workflow-detail-panel case02-workflow-detail-page--${workflow.theme}${embedded ? " is-embedded" : ""}${isAsideCollapsed ? " is-aside-collapsed" : ""}`}>
      <section className="case02-workflow-detail-main">
        <header className="case02-workflow-detail-heading"><h1>{workflow.title}</h1><strong>{workflow.lead}</strong></header>
        <div className="case02-workflow-detail-scroll">
          {workflow.index === "01" && <Workflow01Canvas workflow={workflow} />}
          {workflow.index === "02" && <Workflow02Canvas />}
          {workflow.index === "03" && <Workflow03Canvas />}
        </div>
      </section>
      <DetailAside workflow={workflow} collapsed={isAsideCollapsed} onToggle={() => setIsAsideCollapsed((current) => !current)} />
    </div>
  );
}
