import { Fragment, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, Check, Minus } from "lucide-react";
import { CaseHeader } from "@/components/case/CaseHeader";
import { CaseSideNav } from "@/components/case/CaseSideNav";
import { CaseNavigator } from "@/components/case/CaseNavigator";
import { Container } from "@/components/layout/Container";
import { Lightbox } from "@/components/gallery/Lightbox";
import { Eyebrow } from "@/components/common/Typography";
import { getPageContent } from "@/content/loader";
import type { PortfolioPageContent } from "@/content/schema";

type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

type CasePage04 = {
  id: "page04";
  index: string;
  label: string;
  title: string;
  lead: string;
  experience: {
    title: string;
    identity: string;
    description: string;
    tags: string[];
    images: CaseImage[];
  };
  workflow: {
    title: string;
    stages: Array<{
      index: string;
      title: string;
      behavior: string;
      information: string;
      goal: string;
    }>;
  };
  conclusion: string;
};

type CasePage05 = {
  id: "page05";
  index: string;
  label: string;
  title: string;
  lead: string;
  insightTable: {
    stages: Array<{
      key: "preparation" | "commute" | "inspection" | "acceptance" | "archive";
      title: string;
      subtitle?: string;
    }>;
    scenarios: Array<{
      title: string;
      insight: string;
      pathRows: Array<{
        tone: "primary" | "alert";
        label?: string;
        points: string[];
      }>;
      painCells: Array<{
        stage: "preparation" | "commute" | "inspection" | "acceptance" | "archive";
        items: Array<{
          pain: string;
          detail: string;
          opportunity: string;
        }>;
      }>;
    }>;
  };
};

type CasePage06 = {
  id: "page06";
  index: string;
  label: string;
  title: string;
  lead: string;
  opportunities: {
    title: string;
    items: Array<{ problem: string; opportunity: string }>;
  };
  matrix: {
    title: string;
    userValue: string[];
    feasibility: string[];
    items: Array<{
      title: string;
      userValue: number;
      feasibility: number;
      priority?: "P0";
    }>;
  };
  decisions: {
    title: string;
    items: Array<{
      index: string;
      title: string;
      score: string;
      rootCause: string;
      businessValue: string;
      feasibility: string;
      delivery: string[];
    }>;
  };
};

type CasePage07 = {
  id: "page07";
  index: string;
  label: string;
  title: string;
  lead: string;
  workflow: {
    title: string;
    legends: Array<{
      key: "task" | "drawing" | "general";
      label: string;
    }>;
    steps: Array<{
      index: string;
      title: string;
      system: "task" | "drawing" | "general";
      systemLabel: string;
    }>;
  };
  architecture: {
    title: string;
    description: string;
    root: string;
    modules: Array<{
      key: "task" | "drawing" | "support";
      title: string;
      description: string;
      capabilities: string[];
    }>;
    outcome: string;
  };
};

type CasePage08 = {
  id: "page08";
  index: string;
  label: string;
  title: string;
  lead: string;
  journey: {
    title: string;
    intro: string;
    image: CaseImage;
    stages: Array<{
      index: string;
      title: string;
      problem: string;
      decision: string;
      value: string;
    }>;
    summary: string;
  };
  decisions: {
    title: string;
    items: Array<{
      index: string;
      kind: "defensive" | "progressive" | "linked-search";
      title: string;
      context: string;
      decision: string;
      value: string;
      visuals: Array<{
        label: string;
        title: string;
        image: CaseImage;
      }>;
    }>;
  };
  principles: {
    title: string;
    items: Array<{ index: string; title: string; description: string }>;
    statement: string;
  };
};

type CasePage09 = {
  id: "page09";
  index: string;
  label: string;
  title: string;
  lead: string;
  goals: {
    title: string;
    coreLabel: string;
    supportLabel: string;
    items: Array<{
      index: string;
      priority: "core" | "support";
      title: string;
      hypothesis: string;
      points: string[];
      image?: CaseImage;
    }>;
  };
  test: {
    title: string;
    sample: string;
    userTypes: string[];
    methods: string[];
    environments: string[];
  };
  findings: {
    title: string;
    items: Array<{
      title: string;
      quotes: string[];
      problem: string;
      judgment: string;
      change: string;
    }>;
  };
  boundary: { title: string; validated: string[]; notValidated: string[] };
  conclusion: string;
};

type CasePage10 = {
  id: "page10";
  index: string;
  label: string;
  title: string;
  lead: string;
  image: CaseImage;
  method: {
    title: string;
    label: string;
    capabilities: Array<{ index: string; title: string; description: string }>;
  };
};

type CasePage11 = {
  id: "page11";
  index: string;
  label: string;
  title: string;
  lead: string;
  mvp: {
    title: string;
    subtitle: string;
    capabilities: Array<{
      index: string;
      title: string;
      userValue: number;
      feasibility: number;
      description: string;
    }>;
    opportunityTitle: string;
    opportunity: string;
    image: CaseImage;
  };
  evolution: {
    title: string;
    subtitle: string;
    directions: Array<{
      index: string;
      title: string;
      capability: string;
      userValue: number;
      feasibility: number;
      current: string;
      future: string;
      value: string;
    }>;
  };
  roadmap: {
    title: string;
    phases: Array<{ index: string; title: string; status: string }>;
    conclusion: string;
  };
};

type CasePage12 = {
  id: "page12";
  index: string;
  label: string;
  title: string;
  lead: string;
  differentiation: {
    title: string;
    items: Array<{
      index: string;
      title: string;
      core: string[];
      evidence: string[];
      statement: string;
    }>;
  };
  framework: {
    title: string;
    subtitle: string;
    nodes: Array<{ index: string; title: string; evidence: string }>;
  };
  fit: {
    title: string;
    subtitle: string;
    items: Array<{
      index: string;
      title: string;
      involves: string[];
      label: string;
      evidence: string;
    }>;
  };
  conclusion: string;
};

type Case01Content = PortfolioPageContent & {
  casePages: [CasePage04, CasePage05, CasePage06, CasePage07, CasePage08, CasePage09, CasePage10, CasePage11, CasePage12];
};

function CasePageHeading({ id, index, label, title, lead }: { id: string; index: string; label: string; title: string; lead: string }) {
  return (
    <header className="case01-page-heading">
      <div className="case01-chapter-kicker">
        <span className="case01-page-number">{index}</span>
        <Eyebrow>{label}</Eyebrow>
      </div>
      <h2 id={`case01-${id}-title`}>{title}</h2>
      <p className="case01-page-lead">{lead}</p>
    </header>
  );
}

function CompactSectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="case01-section-heading">
      <span>{index}</span>
      <h3>{title}</h3>
    </div>
  );
}

function Page04({ page }: { page: CasePage04 }) {
  return (
    <section id={page.id} className="case01-chapter case01-chapter--scene" aria-labelledby="case01-page04-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />

        <div className="case01-block case01-experience-block">
          <div className="case01-experience-copy">
            <CompactSectionHeading index="01" title={page.experience.title} />
            <strong className="case01-role-statement">{page.experience.identity}</strong>
            <p>{page.experience.description}</p>
            <div className="case01-tag-list" aria-label="专业监理工程师职责">
              {page.experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="case01-evidence-grid">
            {page.experience.images.map((image) => (
              <figure key={image.src}>
                <Lightbox {...image} />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="case01-block">
          <CompactSectionHeading index="02" title={page.workflow.title} />
          <div className="case01-workflow-map case01-workflow-map--three-row">
            {page.workflow.stages.map((stage, index) => (
              <Fragment key={stage.index}>
                <article>
                  <div><span>{stage.index}</span><h4>{stage.title}</h4></div>
                  <dl>
                    <div><dt>用户行为</dt><dd>{stage.behavior}</dd></div>
                    <div><dt>使用信息</dt><dd>{stage.information}</dd></div>
                    <div><dt>工作目标</dt><dd>{stage.goal}</dd></div>
                  </dl>
                </article>
                {index < page.workflow.stages.length - 1 && <ArrowRight size={18} aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="case01-block case01-page-takeaway">
          <span>03 / 页面结论</span>
          <p>{page.conclusion}</p>
        </div>
      </Container>
    </section>
  );
}

function Page05({ page }: { page: CasePage05 }) {
  return (
    <section id={page.id} className="case01-chapter case01-chapter--modeling" aria-labelledby="case01-page05-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />

        <div className="case01-insight-table-shell" role="region" aria-label="三种验收情境下的流程、痛点与产品机会" tabIndex={0}>
          <div className="case01-insight-table" role="table">
            <div className="case01-insight-table-head" role="row">
              <div aria-hidden="true" />
              {page.insightTable.stages.map((stage) => (
                <div key={stage.key} role="columnheader">
                  <strong>{stage.title}</strong>
                  {stage.subtitle && <small>{stage.subtitle}</small>}
                </div>
              ))}
            </div>

            {page.insightTable.scenarios.map((scenario) => (
              <section className="case01-insight-scenario" key={scenario.title} aria-label={scenario.title}>
                <div className="case01-insight-process-row" role="row">
                  <h3 className="case01-insight-row-label" role="rowheader">{scenario.title}</h3>
                  <div className="case01-insight-path-area" role="cell">
                    <div className="case01-insight-paths">
                      {scenario.pathRows.map((pathRow, pathIndex) => {
                        const activeIndexes = pathRow.points.flatMap((point, index) => point ? [index] : []);
                        const firstActive = activeIndexes[0];
                        const lastActive = activeIndexes.at(-1);

                        return (
                          <div className={`case01-insight-path-row case01-insight-path-row--${pathRow.tone}${pathRow.label ? " case01-insight-path-row--labeled" : ""}`} key={`${scenario.title}-${pathIndex}`}>
                            {pathRow.points.map((point, pointIndex) => (
                              <div
                                className={`case01-insight-path-slot${point ? " case01-insight-path-slot--active" : ""}${pointIndex === firstActive ? " case01-insight-path-slot--first" : ""}${pointIndex === lastActive ? " case01-insight-path-slot--last" : ""}`}
                                key={`${point || "empty"}-${pointIndex}`}
                              >
                                {point && pointIndex === firstActive && pathRow.label && <b className="case01-insight-path-label">{pathRow.label}</b>}
                                {point && <span>{point}</span>}
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                    <p className="case01-insight-note"><strong>洞察</strong>{scenario.insight}</p>
                  </div>
                </div>

                <div className="case01-insight-pain-row" role="row">
                  <div className="case01-insight-row-label" role="rowheader"><span>痛点</span><span>及</span><span>优化机会</span></div>
                  {page.insightTable.stages.map((stage) => {
                    const cell = scenario.painCells.find((item) => item.stage === stage.key);
                    return (
                      <div className="case01-insight-pain-cell" key={`${scenario.title}-${stage.key}`} role="cell">
                        {cell?.items.map((item) => (
                          <article key={item.pain}>
                            <h4>{item.pain}</h4>
                            <p>{item.detail}</p>
                            <strong><ArrowRight size={13} aria-hidden="true" />{item.opportunity}</strong>
                          </article>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Page06({ page }: { page: CasePage06 }) {
  const opportunityRows = Array.from(
    { length: Math.ceil(page.opportunities.items.length / 2) },
    (_, index) => page.opportunities.items.slice(index * 2, index * 2 + 2),
  );

  return (
    <section id={page.id} className="case01-chapter case01-chapter--system" aria-labelledby="case01-page06-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />

        <div className="case01-block">
          <CompactSectionHeading index="01" title={page.opportunities.title} />
          <div className="case01-opportunity-table">
            <div className="case01-opportunity-table-head">
              <span>痛点</span><span>产品机会</span><span>痛点</span><span>产品机会</span>
            </div>
            {opportunityRows.map((row, rowIndex) => (
              <div className="case01-opportunity-row" key={`opportunity-row-${rowIndex}`}>
                {row.map((item) => (
                  <Fragment key={`${item.problem}-${item.opportunity}`}>
                    <strong>{item.problem}</strong>
                    <strong><ArrowRight size={15} aria-hidden="true" />{item.opportunity}</strong>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="case01-block case01-evaluation-block">
          <CompactSectionHeading index="02" title={page.matrix.title} />
          <div className="case01-score-matrix" aria-label="十四个产品机会的用户价值与落地可行性评分矩阵">
            <div className="case01-score-detail" tabIndex={0} aria-label="查看评分细则">
              <span>查看评分细则</span>
              <div className="case01-score-detail-preview" role="tooltip">
                <Image
                  src="/assets/images/case01/portfolio-08-scoring.png"
                  alt="功能优先级评估原始评分细则"
                  width={1440}
                  height={1963}
                  sizes="(max-width: 720px) 92vw, 760px"
                />
              </div>
            </div>
            <div className="case01-score-legend"><span aria-hidden="true">★</span>P0 截流点：用户价值 ≥ 8，落地可行性 ≥ 8</div>
            <div className="case01-score-plot">
              <div className="case01-score-focus" aria-hidden="true" />
              <div className="case01-score-threshold case01-score-threshold--x" aria-hidden="true" />
              <div className="case01-score-threshold case01-score-threshold--y" aria-hidden="true" />
              {page.matrix.items.map((item) => {
                const style = {
                  "--score-x": `${4 + ((item.userValue - 4) / 6) * 92}%`,
                  "--score-y": `${4 + ((item.feasibility - 4) / 6) * 92}%`,
                } as CSSProperties;
                const positionClass = item.title === "图纸即时调用"
                  ? " case01-score-point--label-top"
                  : item.title === "自动聚合排序"
                    ? " case01-score-point--label-bottom"
                    : "";
                const edgeClass = item.userValue >= 9.5 ? " case01-score-point--align-end" : "";

                return (
                  <button
                    className={`case01-score-point${item.priority ? " case01-score-point--p0" : ""}${positionClass}${edgeClass}`}
                    data-score={`用户价值 ${item.userValue} / 落地可行性 ${item.feasibility}`}
                    key={item.title}
                    style={style}
                    type="button"
                    aria-label={`${item.title}：用户价值 ${item.userValue}，落地可行性 ${item.feasibility}${item.priority ? "，P0" : ""}`}
                  >
                    <span>{item.title}</span>
                  </button>
                );
              })}
              <span className="case01-score-tick case01-score-tick--x-min">4</span>
              <span className="case01-score-tick case01-score-tick--x-max">10</span>
              <span className="case01-score-tick case01-score-tick--y-min">4</span>
              <span className="case01-score-tick case01-score-tick--y-max">10</span>
            </div>
            <div className="case01-score-axis case01-score-axis--x" tabIndex={0}>
              <span>用户价值</span>
              <div className="case01-score-axis-tooltip" role="tooltip">
                <strong>用户价值评价维度</strong>
                <ul>{page.matrix.userValue.map((item) => <li key={item}>{item}</li>)}</ul>
                <small>悬停数据点可查看具体评分</small>
              </div>
            </div>
            <div className="case01-score-axis case01-score-axis--y" tabIndex={0}>
              <span>落地可行性</span>
              <div className="case01-score-axis-tooltip" role="tooltip">
                <strong>落地可行性评价维度</strong>
                <ul>{page.matrix.feasibility.map((item) => <li key={item}>{item}</li>)}</ul>
                <small>分数越高，实施依赖与复杂度越低</small>
              </div>
            </div>
          </div>
        </div>

        <div className="case01-block">
          <CompactSectionHeading index="03" title={page.decisions.title} />
          <div className="case01-p0-emphasis">
            <div className="case01-p0-grid">
              {page.decisions.items.map((item) => (
                <article key={item.index}>
                  <header>
                    <span>P0 · {item.index}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <small>{item.score}</small>
                    </div>
                  </header>
                  <dl>
                    <div><dt>问题根因</dt><dd>{item.rootCause}</dd></div>
                    <div><dt>业务价值</dt><dd>{item.businessValue}</dd></div>
                    <div><dt>落地判断</dt><dd>{item.feasibility}</dd></div>
                  </dl>
                  <div className="case01-p0-delivery">
                    <strong>子功能交付优先级</strong>
                    <ul>{item.delivery.map((line) => <li key={line}>{line}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
            <p className="case01-p0-strategy">
              <span>策略核心</span>
              不在末端优化体验，而在源头截断错误；其余机会按模块优先级进入后续迭代。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Page07({ page }: { page: CasePage07 }) {
  return (
    <section id={page.id} className="case01-chapter case01-chapter--architecture" aria-labelledby="case01-page07-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />

        <div className="case01-block case01-product-workflow-block">
          <CompactSectionHeading index="01" title={page.workflow.title} />
          <ul className="case01-flow-legend" aria-label="工作流节点类型">
            {page.workflow.legends.map((item) => (
              <li className={`case01-flow-legend--${item.key}`} key={item.key}>{item.label}</li>
            ))}
          </ul>
          <div className="case01-closed-loop" aria-label="产品化后的八步验收任务闭环">
            <div className="case01-closed-loop-row">
              {page.workflow.steps.map((step, index) => (
                <Fragment key={step.index}>
                  <article className={`case01-flow-node case01-flow-node--${step.system}`}>
                    <header><span>{step.index}</span><small>{step.systemLabel}</small></header>
                    <h4>{step.title}</h4>
                  </article>
                  {index < page.workflow.steps.length - 1 && <ArrowRight size={17} aria-hidden="true" />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="case01-block case01-business-architecture-block">
          <div className="case01-region-intro">
            <CompactSectionHeading index="02" title={page.architecture.title} />
            <p>{page.architecture.description}</p>
          </div>
          <div className="case01-business-architecture">
            <div className="case01-business-architecture-root">
              <small>产品系统</small>
              <strong>{page.architecture.root}</strong>
            </div>
            <div className="case01-business-architecture-connector" aria-hidden="true" />
            <div className="case01-business-architecture-modules">
              {page.architecture.modules.map((module) => (
                <article className={`case01-business-module case01-business-module--${module.key}`} key={module.key}>
                  <header><span>{module.key === "task" ? "01" : module.key === "drawing" ? "02" : "03"}</span><h4>{module.title}</h4></header>
                  <p>{module.description}</p>
                  <ul>{module.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="case01-business-architecture-outcome">
              <span>闭环结果</span>
              <strong>{page.architecture.outcome}</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Page08({ page }: { page: CasePage08 }) {
  return (
    <section id={page.id} className="case01-chapter case01-chapter--interaction" aria-labelledby="case01-page08-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />
        <div className="case01-block case01-task-journey">
          <CompactSectionHeading index="01" title={page.journey.title} />
          <p className="case01-task-journey-intro">{page.journey.intro}</p>
          <div className="case01-task-flow" aria-label="一次验收任务的四阶段使用路径">
            <figure className="case01-task-flow-image"><Lightbox {...page.journey.image} /></figure>
            <div className="case01-task-flow-notes">
              {page.journey.stages.map((stage) => (
                <article className="case01-task-flow-stage" key={stage.index}>
                  <header><span>{stage.index}</span><h4>{stage.title}</h4></header>
                  <dl>
                    <div><dt>现场问题：</dt><dd>{stage.problem}</dd></div>
                    <div><dt>产品决策：</dt><dd>{stage.decision}</dd></div>
                    <div><dt>产生价值：</dt><dd>{stage.value}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
          <p className="case01-task-journey-summary">{page.journey.summary}</p>
        </div>

        <div className="case01-block case01-field-decisions">
          <CompactSectionHeading index="02" title={page.decisions.title} />
          <div className="case01-field-decision-list">
            {page.decisions.items.map((item) => (
              <article className={`case01-field-decision case01-field-decision--${item.kind}`} key={item.index}>
                <header className="case01-field-decision-heading">
                  <span>设计决策 {item.index}</span>
                  <h4>{item.title}</h4>
                </header>
                <div className="case01-field-decision-copy">
                  <dl>
                    <div><dt>场景：</dt><dd>{item.context}</dd></div>
                    <div><dt>决策：</dt><dd>{item.decision}</dd></div>
                    <div><dt>价值：</dt><dd>{item.value}</dd></div>
                  </dl>
                </div>
                <div className="case01-field-decision-visuals">
                  {item.visuals.map((visual, visualIndex) => (
                    <Fragment key={visual.label}>
                      <article>
                        <header><small>{visual.label}</small>{visual.title && <strong>{visual.title}</strong>}</header>
                        <figure>
                          <Lightbox {...visual.image} />
                          <figcaption>{visual.image.caption}</figcaption>
                        </figure>
                      </article>
                      {item.kind === "defensive" && visualIndex === 0 && (
                        <ArrowRight className="case01-defensive-arrow" size={30} strokeWidth={2.5} aria-hidden="true" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="case01-block case01-design-principles">
          <header><span>总结</span><h3>{page.principles.title}</h3></header>
          <div className="case01-design-principle-cards">
            {page.principles.items.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p>{page.principles.statement}</p>
        </div>
      </Container>
    </section>
  );
}

function Page09({ page }: { page: CasePage09 }) {
  const renderGoalGroup = (priority: "core" | "support", label: string) => (
    <div className={`case01-validation-goal-group case01-validation-goal-group--${priority}`}>
      <p className="case01-validation-group-label">{label}</p>
      <div>
        {page.goals.items.filter((item) => item.priority === priority).map((item) => (
          <article className="case01-validation-goal" key={item.index}>
            <header><span>验证 {item.index}</span><h4>{item.title}</h4></header>
            {item.image && (
              <figure><Lightbox {...item.image} /><figcaption>{item.image.caption}</figcaption></figure>
            )}
            <div className="case01-validation-goal-copy">
              <div><strong>产品假设</strong><p>{item.hypothesis}</p></div>
              <div><strong>验证重点</strong><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section id={page.id} className="case01-chapter case01-chapter--validation" aria-labelledby="case01-page09-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />

        <div className="case01-block case01-validation-goals">
          <CompactSectionHeading index="01" title={page.goals.title} />
          {renderGoalGroup("core", page.goals.coreLabel)}
          {renderGoalGroup("support", page.goals.supportLabel)}
        </div>

        <div className="case01-block case01-test-setup">
          <CompactSectionHeading index="02" title={page.test.title} />
          <div className="case01-test-summary">
            <article><span>{page.test.sample}</span><small>参与者</small></article>
            <article><div>{page.test.userTypes.map((item) => <strong key={item}>{item}</strong>)}</div><small>用户类型</small></article>
            <article><div>{page.test.methods.map((item) => <strong key={item}>{item}</strong>)}</div><small>方法</small></article>
            <article><div>{page.test.environments.map((item) => <strong key={item}>{item}</strong>)}</div><small>环境</small></article>
          </div>
        </div>

        <div className="case01-block">
          <CompactSectionHeading index="03" title={page.findings.title} />
          <div className="case01-validation-findings">
            {page.findings.items.map((item, index) => (
              <article key={item.title}>
                <header><span>发现 0{index + 1}</span><h4>{item.title}</h4></header>
                <div className="case01-product-finding">
                  <div className="case01-product-finding-quotes">
                    <small>用户原话</small>
                    {item.quotes.map((quote) => <blockquote key={quote}>{quote}</blockquote>)}
                  </div>
                  <dl>
                    <div><dt>问题</dt><dd>{item.problem}</dd></div>
                    <div><dt>产品判断</dt><dd>{item.judgment}</dd></div>
                    <div className="case01-validation-change"><dt>产品调整</dt><dd>{item.change}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="case01-block case01-validation-boundary">
          <CompactSectionHeading index="04" title={page.boundary.title} />
          <div>
            <article>
              <header><Check size={18} aria-hidden="true" /><strong>已验证</strong></header>
              <ul>{page.boundary.validated.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <header><Minus size={18} aria-hidden="true" /><strong>未验证</strong></header>
              <ul>{page.boundary.notValidated.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>

        <div className="case01-block case01-validation-conclusion">
          <span>总结</span><p>{page.conclusion}</p>
        </div>
      </Container>
    </section>
  );
}

function Page10({ page }: { page: CasePage10 }) {
  return (
    <section id={page.id} className="case01-chapter case01-chapter--reflection" aria-labelledby="case01-page10-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />
        <figure className="case01-block case01-iteration-artifact">
          <Lightbox {...page.image} />
          <figcaption>{page.image.caption}</figcaption>
        </figure>
        <div className="case01-block case01-method-summary">
          <CompactSectionHeading index={page.method.label} title={page.method.title} />
          <div className="case01-method-capabilities">
            {page.method.capabilities.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Page11({ page }: { page: CasePage11 }) {
  return (
    <section id={page.id} className="case01-chapter case01-chapter--evolution" aria-labelledby="case01-page11-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />

        <div className="case01-block case01-platform-mvp">
          <CompactSectionHeading index="01" title={page.mvp.title} />
          <p className="case01-platform-section-lead">{page.mvp.subtitle}</p>
          <div className="case01-platform-mvp-layout">
            <div className="case01-platform-capabilities">
              <span className="case01-platform-column-label">当前能力</span>
              {page.mvp.capabilities.map((item) => (
                <article key={item.index}>
                  <header><span>{item.index}</span><h4>{item.title}</h4></header>
                  <div className="case01-platform-scores"><span>用户价值 {item.userValue}</span><span>落地可行性 {item.feasibility}</span></div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="case01-platform-opportunity">
              <span className="case01-platform-column-label">{page.mvp.opportunityTitle}</span>
              <p>{page.mvp.opportunity}</p>
              <figure><Lightbox {...page.mvp.image} /><figcaption>{page.mvp.image.caption}</figcaption></figure>
            </div>
          </div>
        </div>

        <div className="case01-block case01-platform-evolution">
          <CompactSectionHeading index="02" title={page.evolution.title} />
          <p className="case01-platform-section-lead">{page.evolution.subtitle}</p>
          <div className="case01-evolution-directions">
            {page.evolution.directions.map((item) => (
              <article key={item.index}>
                <header><span>{item.index}</span><h4>{item.title}</h4></header>
                <div className="case01-evolution-meta"><strong>{item.capability}</strong><span>用户价值 {item.userValue} · 落地可行性 {item.feasibility}</span></div>
                <div className="case01-evolution-shift">
                  <div><small>当前</small><p>{item.current}</p></div>
                  <ArrowRight size={20} aria-hidden="true" />
                  <div><small>未来</small><p>{item.future}</p></div>
                </div>
                <div className="case01-evolution-value"><small>业务价值</small><strong>{item.value}</strong></div>
              </article>
            ))}
          </div>
        </div>

        <div className="case01-block case01-platform-roadmap">
          <CompactSectionHeading index="03" title={page.roadmap.title} />
          <div className="case01-roadmap-phases">
            {page.roadmap.phases.map((phase, index) => (
              <Fragment key={phase.index}>
                <article><span>{phase.index}</span><small>{phase.status}</small><h4>{phase.title}</h4></article>
                {index < page.roadmap.phases.length - 1 && <ArrowRight size={24} aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
          <p className="case01-roadmap-conclusion">{page.roadmap.conclusion}</p>
        </div>
      </Container>
    </section>
  );
}

function Page12({ page }: { page: CasePage12 }) {
  return (
    <section id={page.id} className="case01-chapter case01-chapter--positioning" aria-labelledby="case01-page12-title">
      <Container>
        <CasePageHeading id={page.id} index={page.index} label={page.label} title={page.title} lead={page.lead} />

        <div className="case01-block case01-positioning-section">
          <CompactSectionHeading index="01" title={page.differentiation.title} />
          <div className="case01-difference-cards">
            {page.differentiation.items.map((item) => (
              <article key={item.index}>
                <header><span>{item.index}</span><h4>{item.title}</h4></header>
                <div className="case01-difference-detail">
                  <div><small>核心能力</small><p>{item.core.join(" · ")}</p></div>
                  <div><small>本 Case 对应证据</small><ul>{item.evidence.map((evidence) => <li key={evidence}>{evidence}</li>)}</ul></div>
                </div>
                <p className="case01-difference-statement">{item.statement}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case01-block case01-positioning-section case01-judgment-framework">
          <CompactSectionHeading index="02" title={page.framework.title} />
          <p className="case01-platform-section-lead">{page.framework.subtitle}</p>
          <div className="case01-framework-flow">
            {page.framework.nodes.map((node, index) => (
              <Fragment key={node.index}>
                <article>
                  <span>{node.index}</span>
                  <h4>{node.title}</h4>
                  <small>CASE 映射</small>
                  <p>{node.evidence}</p>
                </article>
                {index < page.framework.nodes.length - 1 && <ArrowRight size={20} aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="case01-block case01-positioning-section">
          <CompactSectionHeading index="03" title={page.fit.title} />
          <p className="case01-platform-section-lead">{page.fit.subtitle}</p>
          <div className="case01-fit-cards">
            {page.fit.items.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h4>{item.title}</h4>
                <ul>{item.involves.map((point) => <li key={point}>{point}</li>)}</ul>
                <div><small>{item.label}</small><strong>{item.evidence}</strong></div>
              </article>
            ))}
          </div>
        </div>

        <div className="case01-block case01-positioning-conclusion">
          <span>CASE 01 / 项目结论</span>
          <p>{page.conclusion}</p>
        </div>
      </Container>
    </section>
  );
}

export function Case01Page({ showCaseNavigator = true }: { showCaseNavigator?: boolean }) {
  const page = getPageContent("case01") as Case01Content;
  const [page04, page05, page06, page07, page08, page09, page10, page11, page12] = page.casePages;
  const sideNavigation = [
    { id: page04.id, index: page04.index, label: page04.label },
    { id: page05.id, index: page05.index, label: page05.label },
    { id: page06.id, index: page06.index, label: page06.label },
    { id: page07.id, index: page07.index, label: page07.label },
    { id: page08.id, index: page08.index, label: page08.label },
    { id: page09.id, index: page09.index, label: page09.label },
    { id: page10.id, index: page10.index, label: page10.label },
    { id: page11.id, index: page11.index, label: page11.label },
    { id: page12.id, index: page12.index, label: page12.label },
  ];

  return (
    <div className="case01-page">
      <CaseHeader project={page.title} background={page.subtitle} status={page.status} />
      <CaseSideNav title="CASE01" items={sideNavigation} />
      <div className="case01-reading-flow">
        <Page04 page={page04} />
        <Page05 page={page05} />
        <Page06 page={page06} />
        <Page07 page={page07} />
        <Page08 page={page08} />
        <Page09 page={page09} />
        <Page10 page={page10} />
        <Page11 page={page11} />
        <Page12 page={page12} />
      </div>
      {showCaseNavigator && <CaseNavigator currentId="case01" />}
    </div>
  );
}
