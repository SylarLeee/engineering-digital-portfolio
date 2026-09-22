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

function TrustedStateSection() {
  const gates = [
    { label: "Evidence", title: "证据门槛", tone: "blue", icon: FileSearch },
    { label: "Scope", title: "边界门槛", tone: "cyan", icon: Crosshair },
    { label: "State", title: "状态门槛", tone: "violet", icon: LockKeyhole },
    { label: "Revision", title: "修订门槛", tone: "orange", icon: RefreshCw },
  ];

  return (
    <section className="case02-rg-section case02-rg-section--trusted" aria-labelledby="case02-rg-trusted-title">
      <GovernanceHeading
        index="01"
        eyebrow="FROM AI OUTPUT TO TRUSTED STATE"
        title="从「AI输出」到「可信状态」"
        description="AI生成完成只代表任务执行结束；结果必须跨过治理门槛，才能升级为可接受、可发布的可信状态。"
      />
      <div className="case02-rg-gate-rail" aria-label="AI生成结果通过四个治理门槛升级为可信状态">
        <article className="case02-rg-state-node case02-rg-state-node--source">
          <FileOutput size={25} aria-hidden="true" />
          <span>RAW OUTPUT</span>
          <h4>AI生成结果</h4>
          <p>Generated · Unverified</p>
        </article>
        <ArrowRight className="case02-rg-arrow" size={21} aria-hidden="true" />
        {gates.map((gate, index) => {
          const Icon = gate.icon;
          return (
            <div className="case02-rg-gate-step" key={gate.label}>
              <article className={`case02-rg-gate case02-rg-gate--${gate.tone}`}>
                <span>GATE {String(index + 1).padStart(2, "0")}</span>
                <Icon size={22} aria-hidden="true" />
                <h4>{gate.label}</h4>
                <p>{gate.title}</p>
              </article>
              <ArrowRight className="case02-rg-arrow" size={21} aria-hidden="true" />
            </div>
          );
        })}
        <article className="case02-rg-state-node case02-rg-state-node--trusted">
          <CircleCheck size={27} aria-hidden="true" />
          <span>TRUSTED STATE</span>
          <h4>可信状态</h4>
          <p>Verified · Publishable</p>
        </article>
      </div>
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
        index="02"
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
        index="03"
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
        index="04"
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
        index="05"
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
        <div>
          <p>CASE 02 — PAGE 03 / AI GOVERNANCE</p>
          <h2 id="case02-rg-title">AI可靠性治理</h2>
          <strong>让AI的生成结果，成为可以被信任、可以被发布的研究结论</strong>
          <span>AI可以快速生成内容，但生成完成并不等于结果可信。本页展示如何通过证据、边界、状态、修订四个维度的治理机制，将不稳定的AI输出逐步转化为可靠、可追溯、可发布的研究结论。</span>
        </div>
        <div className="case02-rg-hero-visual" aria-label="不确定输出经过治理逐步转化为 Reliable Insight">
          <article><span>UNCERTAIN</span><b>AI Output</b><i>?</i></article>
          <div><ShieldCheck size={27} aria-hidden="true" /><span>GOVERNANCE</span><i /><i /><i /></div>
          <article><span>TRUSTED</span><b>Reliable Insight</b><CircleCheck size={27} aria-hidden="true" /></article>
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
