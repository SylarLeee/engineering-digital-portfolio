import Image from "next/image";
import {
  ArrowDown,
  ArrowLeftRight,
  ArrowRight,
  Bot,
  CircleCheck,
  ClipboardCheck,
  Crosshair,
  FileStack,
  GitBranch,
  Layers3,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
  Target,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Fragment } from "react";
import { Container } from "@/components/layout/Container";

const engineeringFlow = ["验收准备", "现场检查", "问题整改", "复验确认", "资料归档"];

const systemMethods = [
  { title: "流程", note: "工作如何流转", icon: GitBranch },
  { title: "规则", note: "边界与约束条件", icon: ShieldCheck },
  { title: "状态", note: "过程与结果追踪", icon: Layers3 },
  { title: "责任", note: "角色与协作关系", icon: UsersRound },
  { title: "验证", note: "质量与闭环机制", icon: CircleCheck },
];

const fieldPhotos = [
  {
    src: "/assets/images/case01/site-inspection-municipal.png",
    alt: "施工人员在市政管线现场进行检查",
  },
  {
    src: "/assets/images/case01/site-inspection-detail.jpg",
    alt: "施工人员在钢结构加工现场进行质量检查",
  },
  {
    src: "/assets/images/case01/site-coordination.png",
    alt: "工程项目多角色现场协作会议",
  },
];

const collaborationRoles = [
  {
    code: "01",
    title: "人",
    term: "Human Judgment",
    icon: UserRound,
    items: ["定义目标", "制定规则", "判断异常", "最终决策"],
  },
  {
    code: "02",
    title: "AI",
    term: "AI Execution",
    icon: Bot,
    items: ["检索信息", "分析整理", "生成内容", "执行任务"],
  },
  {
    code: "03",
    title: "系统",
    term: "System Governance",
    icon: ScanSearch,
    items: ["约束规则", "记录状态", "验证结果", "追踪闭环"],
  },
];

function SummarySectionHeading({
  index,
  title,
  eyebrow,
  description,
}: {
  index: string;
  title: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <header className="summary-section-heading">
      <span>{index}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <strong>{description}</strong>
      </div>
    </header>
  );
}

export function SummaryPage() {
  return (
    <main className="summary-page">
      <section className="summary-hero" aria-labelledby="summary-title">
        <Container>
          <p className="summary-page-label">SUMMARY · CAPABILITY SYNTHESIS</p>
          <div className="summary-hero-layout">
            <div className="summary-hero-copy">
              <span>基于真实业务，走向更大的可能</span>
              <h1 id="summary-title">从工程现场，到系统，再到人机协作</h1>
              <p>6年+工程项目经验，让我从真实业务理解问题；两个项目进一步让我形成以流程、规则和验证为基础的系统化工作方式，并开始探索 AI 如何进入专业工作流程。</p>
            </div>
            <div className="summary-progression" aria-label="从真实工程经验到系统化问题解决，再到新时代人机协作的能力递进">
              <article><span>01</span><div><b>真实工程经验</b><small>理解业务现场</small></div></article>
              <ArrowDown size={18} aria-hidden="true" />
              <article><span>02</span><div><b>系统化问题解决</b><small>组织流程与规则</small></div></article>
              <ArrowDown size={18} aria-hidden="true" />
              <article><span>03</span><div><b>新时代人机协作</b><small>让 AI 进入受控流程</small></div></article>
            </div>
          </div>
        </Container>
      </section>

      <section className="summary-section summary-section--engineering">
        <Container>
          <SummarySectionHeading
            index="01"
            title="理解真实工程"
            eyebrow="来自一线的业务视角"
            description="6年+工程项目经验，让我熟悉施工现场的工作方式、任务逻辑与多角色协作，也理解质量管理与验收过程中真实存在的信息、流程与协同问题。"
          />

          <div className="summary-engineering-statement">
            <Crosshair size={24} aria-hidden="true" />
            <strong>工程现场不是单一的检查动作，而是多角色、多信息、多状态的持续协作。</strong>
          </div>

          <div className="summary-process-block">
            <header><ClipboardCheck size={20} aria-hidden="true" /><div><b>工程验收典型流程</b><span>Typical Acceptance Flow</span></div></header>
            <div className="summary-engineering-flow">
              {engineeringFlow.map((step, index) => (
                <Fragment key={step}>
                  <article><span>0{index + 1}</span><b>{step}</b></article>
                  {index < engineeringFlow.length - 1 && <ArrowRight size={18} aria-hidden="true" />}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="summary-field-gallery">
            {fieldPhotos.map((photo) => (
              <figure key={photo.src}>
                <div><Image src={photo.src} alt={photo.alt} width={1600} height={1000} sizes="(max-width: 760px) 100vw, 33vw" /></div>
                <figcaption>真实的工程场景</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="summary-section summary-section--system">
        <Container>
          <SummarySectionHeading
            index="02"
            title="用系统思维解决复杂问题"
            eyebrow="从流程到规则，让复杂工作可管理、可验证"
            description="面对复杂业务，我关注的不只是“怎么做”，更关注流程如何运行、规则如何约束、状态如何变化，以及结果如何被验证。这也是我理解工程数字化产品的方式。"
          />

          <div className="summary-method-strip" aria-label="系统化问题解决的五个关注点">
            {systemMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Fragment key={method.title}>
                  <article><span>0{index + 1}</span><Icon size={21} aria-hidden="true" /><div><b>{method.title}</b><small>{method.note}</small></div></article>
                  {index < systemMethods.length - 1 && <ArrowRight size={16} aria-hidden="true" />}
                </Fragment>
              );
            })}
          </div>

          <div className="summary-case-evidence">
            <article className="summary-evidence-card summary-evidence-card--case01">
              <header><span>CASE 01</span><h3>工程质量验收数字化方案</h3><p>将现场流程转化为可执行的产品系统。</p></header>
              <div>
                <section><ClipboardCheck size={20} /><div><b>任务中心</b><small>支持验收任务管理</small></div></section>
                <section><FileStack size={20} /><div><b>图纸中心</b><small>支持资料快速调用</small></div></section>
                <section><RefreshCw size={20} /><div><b>问题闭环</b><small>实现整改与验收追踪</small></div></section>
              </div>
            </article>

            <article className="summary-evidence-card summary-evidence-card--case02">
              <header><span>CASE 02</span><h3>AI竞品研究治理系统</h3><p>将研究流程转化为受治理的 AI 工作流。</p></header>
              <div className="summary-ai-mechanisms">
                <section><b>Scope</b><small>明确研究范围</small></section>
                <section><b>Evidence</b><small>确保结论有据可依</small></section>
                <section><b>Audit</b><small>识别问题与边界控制</small></section>
                <section><b>Revision</b><small>支持迭代与结果优化</small></section>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="summary-section summary-section--collaboration">
        <Container>
          <SummarySectionHeading
            index="03"
            title="探索 AI 时代的人机协作"
            eyebrow="让专业判断与 AI 能力更好结合"
            description="我关注的不是 AI 替代专业能力，而是如何在专业工作中建立人机协作机制：让 AI 承担可规则化、可重复的工作，同时保留人的目标定义、判断、验证与最终决策。"
          />

          <div className="summary-collaboration-model" aria-label="人、AI与系统之间的双向协作关系">
            {collaborationRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Fragment key={role.title}>
                  <article>
                    <header><span>{role.code}</span><Icon size={27} aria-hidden="true" /></header>
                    <h3>{role.title}</h3><small>{role.term}</small>
                    <ul>{role.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                  {index < collaborationRoles.length - 1 && <div className="summary-collaboration-link"><ArrowLeftRight size={27} aria-hidden="true" /><span>协同</span></div>}
                </Fragment>
              );
            })}
          </div>

          <div className="summary-collaboration-principle">
            <ShieldCheck size={25} aria-hidden="true" />
            <div><strong>AI进入专业工作流程后，仍然需要人的判断与系统治理。</strong><span>Human Judgment × AI Execution × System Governance</span></div>
          </div>

          <div className="summary-case02-bridge">
            <Bot size={25} aria-hidden="true" />
            <div><strong>Case 02 让我进一步实践了这种协作方式：</strong><p>将人的专业判断转化为规则，让 AI 进入流程执行，并通过 Evidence、Scope、Audit 与 Revision 对结果进行约束与验证。</p></div>
          </div>
        </Container>
      </section>

      <section className="summary-career">
        <Container>
          <div>
            <span>我的职业方向</span>
            <h2>熟悉真实工程流程，形成系统化的问题解决方式，并持续探索 AI 时代的专业人机协作。</h2>
            <p>工程数字化产品 <i /> 行业产品 <i /> 工程 BA</p>
          </div>
          <Target size={54} strokeWidth={1.4} aria-hidden="true" />
        </Container>
      </section>
    </main>
  );
}
