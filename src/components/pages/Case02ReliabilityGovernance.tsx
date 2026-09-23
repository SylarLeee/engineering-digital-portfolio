import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Check,
  CircleCheck,
  CircleX,
  Crosshair,
  Database,
  FileCheck2,
  FileOutput,
  FileSearch,
  Flag,
  GitBranch,
  Layers3,
  LockKeyhole,
  RefreshCw,
  Scale,
  ScanSearch,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

function GovernanceHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="case02-rg-section-heading">
      <div><span>{index}</span><p>{eyebrow}</p></div>
      <h3>{title}</h3>
      <strong>{description}</strong>
    </header>
  );
}

function MiniNode({ id, title, muted = false, strong = false }: { id: string; title: string; muted?: boolean; strong?: boolean }) {
  return <span className={`case02-rg-mini-node${muted ? " is-muted" : ""}${strong ? " is-strong" : ""}`}><b>{id}</b><small>{title}</small></span>;
}

function MiniArrow({ down = false }: { down?: boolean }) {
  return <ArrowRight className={down ? "case02-rg-mini-arrow is-down" : "case02-rg-mini-arrow"} size={12} aria-hidden="true" />;
}

function MechanismCard({
  className,
  icon,
  title,
  term,
  note,
  slice,
  mapping,
}: {
  className: string;
  icon: ReactNode;
  title: string;
  term: string;
  note: string;
  slice: ReactNode;
  mapping: string;
}) {
  return (
    <article className={`case02-rg-mechanism-card ${className}`} tabIndex={0} aria-label={`${title}。${note}。真实工作流位置：${mapping}`}>
      <div className="case02-rg-mechanism-front">
        {icon}
        <h4>{title}</h4>
        <span>{term}</span>
        <p>{note}</p>
      </div>
      <div className="case02-rg-mechanism-slice" aria-hidden="true">{slice}</div>
    </article>
  );
}

function TrustedStateSection() {

  return (
    <section className="case02-rg-section case02-rg-section--trusted case02-rg-section--overview" aria-labelledby="case02-rg-trusted-title">
      <header className="case02-rg-overview-heading">
        <div><span>机制总览</span><p>GOVERNANCE OVERVIEW</p></div>
        <h3 id="case02-rg-trusted-title">从「AI输出」到「可信状态」</h3>
        <strong>AI生成完成只代表候选结果形成；只有通过内容验证与状态裁决，Candidate 才能升级为可接受、可发布的可信状态。</strong>
      </header>
      <div className="case02-rg-trust-system" aria-label="AI候选结果经过内容验证与状态裁决；通过后升级为可信状态，不通过则进入修订治理并形成新的 Candidate 重新验证">
        <MechanismCard
          className="case02-rg-mechanism-card--source"
          icon={<FileOutput size={24} aria-hidden="true" />}
          title="AI生成结果"
          term="Generated Candidate"
          note="未经验证的候选输出"
          mapping="AI Agent → AI研究结果 → W02治理入口"
          slice={<div className="case02-rg-mini-chain case02-rg-mini-chain--source"><MiniNode id="AI" title="AI Agent" /><MiniArrow /><MiniNode id="OUTPUT" title="AI研究结果" /><MiniArrow /><MiniNode id="W02" title="治理入口" strong /></div>}
        />

        <ArrowRight className="case02-rg-system-arrow" size={22} aria-hidden="true" />

        <section className="case02-rg-validation-cluster" aria-label="内容验证">
          <header><b>内容验证</b><span>Content Validation</span></header>
          <div>
            <MechanismCard
              className="case02-rg-mechanism-card--evidence"
              icon={<FileSearch size={22} aria-hidden="true" />}
              title="证据验证"
              term="Evidence Validation"
              note="来源可追溯 · 引用可验证"
              mapping="W02 N1、N2、N3"
              slice={<><strong className="case02-rg-slice-label">W02</strong><div className="case02-rg-mini-chain case02-rg-mini-chain--vertical"><MiniNode id="N1" title="Evidence治理与事实层" strong /><MiniArrow /><MiniNode id="N2" title="SWOT战略提炼" muted /><MiniArrow /><MiniNode id="N3" title="结构与引用校验" strong /></div></>}
            />
            <MiniArrow />
            <MechanismCard
              className="case02-rg-mechanism-card--scope"
              icon={<Crosshair size={22} aria-hidden="true" />}
              title="边界控制"
              term="Scope Control"
              note="限制推理范围 · 防止语义越界"
              mapping="W02 N5A1、N5A2；W03 C2、C3"
              slice={<div className="case02-rg-mini-lanes"><div><strong>W02</strong><MiniNode id="N5A1" title="语义问题发现" strong /><MiniArrow /><MiniNode id="N5A2" title="规则执行 / 质量评分" /></div><div><strong>W03</strong><MiniNode id="C2" title="确定性边界审计" strong /><MiniArrow /><MiniNode id="C3" title="语义质量审计" strong /></div></div>}
            />
          </div>
        </section>

        <ArrowRight className="case02-rg-system-arrow" size={22} aria-hidden="true" />

        <MechanismCard
          className="case02-rg-mechanism-card--decision"
          icon={<Scale size={24} aria-hidden="true" />}
          title="状态裁决"
          term="State Decision"
          note="Candidate 是否允许升级？"
          mapping="W03 C3 → C4；PASS → C5 → C6，REVISE → 返修支线"
          slice={<><strong className="case02-rg-slice-label">W03</strong><div className="case02-rg-mini-decision"><div><MiniNode id="C3" title="语义质量审计" /><MiniArrow /><MiniNode id="C4" title="修订裁决" strong /></div><div><span className="is-pass">PASS</span><MiniNode id="C5" title="修订内容整合" /><MiniArrow /><MiniNode id="C6" title="最终状态适配" /></div><div><span className="is-reject">REVISE</span><small>进入返修支线</small></div></div></>}
        />

        <div className="case02-rg-branch-links" aria-hidden="true"><span className="is-pass">PASS <ArrowRight size={14} /></span><span className="is-reject">REJECT <ArrowRight size={14} /></span></div>

        <div className="case02-rg-state-outcomes">
          <MechanismCard
            className="case02-rg-mechanism-card--trusted"
            icon={<CircleCheck size={25} aria-hidden="true" />}
            title="可信状态"
            term="Trusted State"
            note="已验证 · 可发布"
            mapping="W03 C4 PASS → C5 → C6 → W3-2"
            slice={<><strong className="case02-rg-slice-label">W03 · PASS</strong><div className="case02-rg-mini-chain"><MiniNode id="C4" title="修订裁决" strong /><MiniArrow /><MiniNode id="C5" title="内容整合与状态更新" /><MiniArrow /><MiniNode id="C6" title="最终状态适配" /><MiniArrow /><MiniNode id="W3-2" title="发布态一致性校验" strong /></div></>}
          />
          <MechanismCard
            className="case02-rg-mechanism-card--revision"
            icon={<RefreshCw size={24} aria-hidden="true" />}
            title="修订治理"
            term="Revision Governance"
            note="定向修订 · 重新验证"
            mapping="W03 C4 REVISE → C8 → C9 → revision_guidance → External AI → AI_agent_output V2 → C1 → 重新审计"
            slice={<><strong className="case02-rg-slice-label">W03 · REVISE</strong><div className="case02-rg-mini-loop"><MiniNode id="C4" title="修订裁决" /><MiniArrow /><MiniNode id="C8" title="返修意见生成" /><MiniArrow /><MiniNode id="C9" title="返修指导治理" /><MiniArrow /><MiniNode id="GUIDE" title="revision_guidance" strong /><MiniArrow /><MiniNode id="AI" title="External AI修订" /><MiniArrow /><MiniNode id="V2" title="AI_agent_output V2" strong /><MiniArrow /><MiniNode id="C1" title="解析与Contract治理" /><MiniArrow /><span className="case02-rg-mini-return">重新审计</span></div></>}
          />
        </div>

        <div className="case02-rg-revalidate-loop" aria-hidden="true"><span><RefreshCw size={13} />New Candidate · 重新进入内容验证</span></div>
      </div>
      <div className="case02-rg-overview-guide" aria-hidden="true"><span>进入四个治理机制</span><ArrowDown size={17} /></div>
    </section>
  );
}

function EvidenceSection() {
  const evidence = ["EV-01", "EV-02", "EV-03", "EV-04", "EV-05"];
  const facts = ["Fact A", "Fact B", "Fact C"];
  const inferences = ["Inference 01", "Inference 02"];

  return (
    <section className="case02-rg-section case02-rg-section--evidence" aria-labelledby="case02-rg-evidence-title">
      <GovernanceHeading
        index="01"
        eyebrow="EVIDENCE GOVERNANCE"
        title="证据治理：结论能否被追溯？"
        description="Evidence 是来源，Fact 是直接支持的事实，Inference 是基于事实的推断；重要结论必须能够沿证据链回溯。"
      />
      <div className="case02-rg-evidence-map" aria-label="Evidence 到 Fact 再到 Inference 的证据溯源网络">
        <section className="case02-rg-trace-column case02-rg-trace-column--pool">
          <header><Database size={19} aria-hidden="true" /><div><span>SOURCE</span><h4>Evidence Pool</h4></div></header>
          <div>{evidence.map((item) => <b key={item}>{item}<small>已记录来源</small></b>)}</div>
        </section>
        <div className="case02-rg-trace-link"><span>直接支持</span><ArrowRight size={22} aria-hidden="true" /></div>
        <section className="case02-rg-trace-column case02-rg-trace-column--fact">
          <header><FileCheck2 size={19} aria-hidden="true" /><div><span>VERIFIED</span><h4>Fact</h4></div></header>
          <div>{facts.map((item, index) => <b key={item}>{item}<small>{index === 0 ? "多源交叉验证" : "Evidence 可回溯"}</small></b>)}</div>
        </section>
        <div className="case02-rg-trace-link"><span>受控推断</span><ArrowRight size={22} aria-hidden="true" /></div>
        <section className="case02-rg-trace-column case02-rg-trace-column--inference">
          <header><GitBranch size={19} aria-hidden="true" /><div><span>DERIVED</span><h4>Inference</h4></div></header>
          <div>{inferences.map((item) => <b key={item}>{item}<small>基于 Fact 推导</small></b>)}</div>
        </section>
        <aside className="case02-rg-unsupported">
          <AlertTriangle size={21} aria-hidden="true" />
          <span>NO EVIDENCE PATH</span>
          <h4>Inference X</h4>
          <p>没有 Evidence 路径<br />不允许升级</p>
          <strong><CircleX size={15} aria-hidden="true" />BLOCKED</strong>
        </aside>
      </div>
      <div className="case02-rg-rule-strip"><ShieldCheck size={19} aria-hidden="true" /><strong>Inference 不能伪装成 Fact。</strong><span>Evidence → Fact → Inference 的关系必须可检查、可回溯。</span></div>
    </section>
  );
}

function ScopeSection() {
  return (
    <section className="case02-rg-section case02-rg-section--scope" aria-labelledby="case02-rg-scope-title">
      <GovernanceHeading
        index="02"
        eyebrow="SCOPE GOVERNANCE"
        title="边界治理：AI可以推到哪里？"
        description="Evidence 真实不代表结论可以无限扩张。Research Scope 用来限定 AI 能够从事实推到多远。"
      />
      <div className="case02-rg-scope-layout">
        <div className="case02-rg-scope-radius" aria-label="从事实到越界战略结论的推理半径">
          <div className="case02-rg-orbit case02-rg-orbit--out"><span>战略结论 / 全市场判断</span><b>越界</b></div>
          <div className="case02-rg-orbit case02-rg-orbit--edge"><span>扩展推断</span><b>接近边界</b></div>
          <div className="case02-rg-orbit case02-rg-orbit--supported"><span>Supported Inference</span><b>合理推断</b></div>
          <div className="case02-rg-orbit case02-rg-orbit--fact"><Database size={23} aria-hidden="true" /><span>Fact</span><b>已被证据支持</b></div>
          <div className="case02-rg-scope-boundary"><Crosshair size={16} aria-hidden="true" />RESEARCH SCOPE</div>
        </div>
        <div className="case02-rg-scope-compare">
          <article className="case02-rg-scope-card is-valid">
            <header><CircleCheck size={19} aria-hidden="true" /><div><span>WITHIN SCOPE</span><h4>合理的推理范围</h4></div></header>
            <ul><li>基于3个竞品进行功能比较</li><li>分析其定价策略差异</li><li>推断当前目标用户群体</li></ul>
          </article>
          <article className="case02-rg-scope-card is-invalid">
            <header><AlertTriangle size={19} aria-hidden="true" /><div><span>OUT OF SCOPE</span><h4>越界的推理范围</h4></div></header>
            <ul><li>整个市场存在竞争空白</li><li>预测行业未来格局</li><li>给出公司级战略结论</li></ul>
          </article>
        </div>
      </div>
      <div className="case02-rg-scope-conclusion"><strong>证据真实，不代表结论可以无限扩张。</strong><span>Research Scope 定义 AI 推理边界。</span></div>
    </section>
  );
}

function StateSection() {
  return (
    <section className="case02-rg-section case02-rg-section--state" aria-labelledby="case02-rg-state-title">
      <GovernanceHeading
        index="03"
        eyebrow="STATE GOVERNANCE"
        title="状态治理：不让未经验证的修改污染已通过的结果"
        description="新的 Candidate 不能直接覆盖已验证的 Baseline；只有经过审计并通过，才允许升级正式状态。"
      />
      <div className="case02-rg-state-model" aria-label="Baseline 与 Candidate 双轨可信状态隔离模型">
        <div className="case02-rg-lane-label"><span>TRUSTED LANE</span><b>Baseline</b></div>
        <article className="case02-rg-version-card is-baseline">
          <header><ShieldCheck size={22} aria-hidden="true" /><span>BASELINE</span></header><h4>V1</h4><p>已验证 · 可发布</p>
        </article>
        <div className="case02-rg-state-hold"><LockKeyhole size={17} aria-hidden="true" /><span>保持隔离</span></div>
        <article className="case02-rg-version-card is-promoted">
          <header><CircleCheck size={22} aria-hidden="true" /><span>BASELINE</span></header><h4>V2</h4><p>Promoted · 可发布</p>
        </article>

        <div className="case02-rg-lane-label"><span>CHANGE LANE</span><b>Candidate</b></div>
        <article className="case02-rg-version-card is-candidate">
          <header><Layers3 size={22} aria-hidden="true" /><span>CANDIDATE</span></header><h4>V2</h4><p>External AI / 修复节点</p>
        </article>
        <section className="case02-rg-audit-core">
          <header><ScanSearch size={22} aria-hidden="true" /><div><span>GOVERNANCE NODE</span><h4>Audit</h4></div></header>
          <ul><li>Contract 审计</li><li>边界审计</li><li>语义审计</li></ul>
        </section>
        <div className="case02-rg-audit-outcomes">
          <div className="is-pass"><Check size={16} aria-hidden="true" /><b>PASS</b><span>Promote</span></div>
          <div className="is-reject"><CircleX size={16} aria-hidden="true" /><b>REJECT</b><span>保持 V1</span></div>
        </div>
        <svg className="case02-rg-state-lines" viewBox="0 0 1000 350" preserveAspectRatio="none" aria-hidden="true">
          <path className="candidate-in" d="M250 264 H420" />
          <path className="pass-up" d="M590 235 C680 235 635 86 745 86" />
          <path className="reject-back" d="M590 280 C690 330 285 335 250 300" />
          <path className="baseline-lock" d="M250 86 H745" />
        </svg>
      </div>
      <div className="case02-rg-state-insight"><LockKeyhole size={20} aria-hidden="true" /><div><strong>失败 Candidate 不会污染 Baseline。</strong><span>未经验证的新结果始终停留在候选轨道。</span></div></div>
    </section>
  );
}

function RevisionSection() {
  const steps = [
    { label: "Audit Failure", title: "发现问题", description: "定位审计失败点", icon: AlertTriangle, tone: "red" },
    { label: "Human Input", title: "确认问题", description: "确认方向与标准", icon: UserCheck, tone: "violet" },
    { label: "Revision Guidance", title: "生成修订指导", description: "形成可执行约束", icon: Wrench, tone: "orange" },
    { label: "External Revision", title: "External AI 修订", description: "执行具体内容修改", icon: RefreshCw, tone: "orange" },
    { label: "Candidate V2", title: "新候选结果", description: "隔离为 Candidate", icon: Layers3, tone: "violet" },
    { label: "Re-Audit", title: "重新审计", description: "再次检查可信条件", icon: ScanSearch, tone: "blue" },
  ];

  return (
    <section className="case02-rg-section case02-rg-section--revision" aria-labelledby="case02-rg-revision-title">
      <GovernanceHeading
        index="04"
        eyebrow="REVISION GOVERNANCE"
        title="修订治理：定向返修，而不是重新生成"
        description="失败结果被转译为明确、可执行的返修指导；External AI 只负责具体修改，新 Candidate 必须重新进入审计。"
      />
      <div className="case02-rg-revision-loop" aria-label="从审计失败到定向返修并重新审计的治理闭环">
        <div className="case02-rg-revision-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="case02-rg-revision-step-wrap" key={step.label}>
                <article className={`case02-rg-revision-step case02-rg-revision-step--${step.tone}`}>
                  <span>{step.label}</span><Icon size={24} aria-hidden="true" /><h4>{step.title}</h4><p>{step.description}</p>
                </article>
                {index < steps.length - 1 && <ArrowRight size={20} aria-hidden="true" />}
              </div>
            );
          })}
        </div>
        <div className="case02-rg-revision-decision">
          <Scale size={19} aria-hidden="true" /><strong>审计结果</strong>
          <span className="is-pass"><Check size={14} />通过 → 升级正式状态</span>
          <span className="is-retry"><RefreshCw size={14} />不通过 → 再次返修</span>
        </div>
        <div className="case02-rg-human-role"><UserCheck size={19} aria-hidden="true" /><div><strong>Human controls</strong><span>问题是否成立 · 修改方向 · 验收标准</span></div></div>
        <div className="case02-rg-ai-role"><Wrench size={19} aria-hidden="true" /><div><strong>AI executes</strong><span>在明确约束内执行具体内容修订</span></div></div>
        <div className="case02-rg-loop-line" aria-hidden="true"><span>RE-AUDIT FAILED · RETURN TO REVISION</span><RefreshCw size={17} /></div>
      </div>
      <footer className="case02-rg-final-equation">
        <div><span>Evidence可信</span><b>+</b><span>Inference边界可信</span><b>+</b><span>State可信</span><b>+</b><span>Revision可信</span></div>
        <ArrowDown size={20} aria-hidden="true" />
        <strong><Flag size={20} aria-hidden="true" />Trusted / Publishable Output</strong>
      </footer>
    </section>
  );
}

export function Case02ReliabilityGovernance() {
  return (
    <section className="case02-rg-page" aria-labelledby="case02-rg-title">
      <header className="case02-rg-hero">
        <div className="case02-rg-hero-copy">
          <p className="case-page-level-label">Page03｜治理机制</p>
          <h2 id="case02-rg-title">从工作流实践到可靠性治理探索</h2>
          <small>From Workflow Practice to Reliability Governance</small>
          <strong>总结前述工作流中，用于降低 AI 输出不确定性的关键治理机制</strong>
          <em>Key mechanisms extracted from the workflow to reduce uncertainty in AI outputs</em>
          <span>
            前述工作流并不是通过一次生成获得可靠结果，而是在不同节点反复进行验证与状态控制。证据验证与边界控制用于判断内容是否成立；状态治理决定 Candidate 是否能够进入正式状态；当验证失败时，修订治理会生成新的 Candidate，并使其重新进入验证流程。
            <br />本页将这些分散在 W02 / W03 中的机制抽离出来，说明它们分别解决什么问题，以及如何协同。
          </span>
        </div>
        <div className="case02-rg-hero-visual" aria-label="从 W02 与 W03 工作流中提炼内容验证、状态裁决与修订闭环">
          <header>
            <div><GitBranch size={18} aria-hidden="true" /><h3>从工作流到治理机制</h3></div>
            <span>From Workflow to Governance Mechanisms</span>
          </header>
          <div className="case02-rg-hero-visual-body">
            <section className="case02-rg-hero-workflows" aria-label="机制来源工作流切片">
              <article>
                <header><b>W02</b><span>研究结果治理</span></header>
                <div>
                  <i><b>N1</b><small>证据</small></i><ArrowRight size={10} />
                  <i><b>N3</b><small>引用</small></i><ArrowRight size={10} />
                  <i><b>N5A1</b><small>语义</small></i><ArrowRight size={10} />
                  <i><b>N5A2</b><small>评分</small></i><ArrowRight size={10} />
                  <i><b>N4</b><small>评审</small></i>
                </div>
              </article>
              <article>
                <header><b>W03</b><span>修订结果治理</span></header>
                <div>
                  <i><b>C1</b><small>解析</small></i><ArrowRight size={10} />
                  <i><b>C2</b><small>边界</small></i><ArrowRight size={10} />
                  <i><b>C3</b><small>语义</small></i><ArrowRight size={10} />
                  <i className="is-decision"><b>C4</b><small>裁决</small></i>
                </div>
                <footer><span>C5 / C6 · 正式状态</span><span>C8 / C9 · 返修治理</span></footer>
              </article>
            </section>

            <div className="case02-rg-hero-extract" aria-hidden="true">
              <span>机制提炼</span><ArrowRight size={18} /><small>ABSTRACT</small>
            </div>

            <section className="case02-rg-hero-mechanisms" aria-label="抽象后的治理机制">
              <div className="case02-rg-hero-validation">
                <header><b>内容验证</b><span>Content Validation</span></header>
                <div>
                  <article className="is-evidence"><FileSearch size={16} /><b>证据验证</b><small>Evidence Validation</small></article>
                  <span>+</span>
                  <article className="is-scope"><Crosshair size={16} /><b>边界控制</b><small>Scope Control</small></article>
                </div>
              </div>
              <ArrowDown className="case02-rg-hero-down" size={16} aria-hidden="true" />
              <article className="case02-rg-hero-decision">
                <Scale size={17} /><div><b>状态裁决</b><small>State Decision</small></div>
              </article>
              <div className="case02-rg-hero-outcomes">
                <article className="is-formal"><span>PASS</span><CircleCheck size={16} /><div><b>正式状态</b><small>Formal State</small></div></article>
                <article className="is-revision"><span>FAIL</span><RefreshCw size={16} /><div><b>修订治理</b><small>Revision Governance</small></div></article>
              </div>
              <div className="case02-rg-hero-loop" aria-label="修订生成新的 Candidate 并重新进入内容验证">
                <RefreshCw size={12} /><span><b>New Candidate</b> · 重新进入验证</span>
              </div>
            </section>
          </div>
        </div>
      </header>
      <TrustedStateSection />
      <EvidenceSection />
      <ScopeSection />
      <StateSection />
      <RevisionSection />
    </section>
  );
}
