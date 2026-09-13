import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/common/Typography";
import { getPageContent } from "@/content/loader";
import type { PortfolioPageContent } from "@/content/schema";

type CareerStep = { year: string; title: string; detail: string };
type BusinessInsight = { index: string; title: string; sources: string[]; result: string };
type ProductAdvantage = { index: string; title: string; tags: string[]; description: string; productValue: string };

type AboutPageContent = PortfolioPageContent & {
  englishSubtitle: string;
  experience: { value: string; label: string; conclusion: string };
  careerPath: CareerStep[];
  businessInsights: BusinessInsight[];
  productAdvantages: ProductAdvantage[];
};

export function AboutMePage() {
  const page = getPageContent("about") as AboutPageContent;

  return (
    <div className="about-proof-page">
      <Container className="about-proof-layout">
        <header className="about-proof-header">
          <div className="about-proof-meta">
            <span>02 / 15</span>
            <span>{page.status}</span>
          </div>
          <div className="about-proof-title-row">
            <div>
              <Eyebrow>{page.eyebrow}</Eyebrow>
              <h1>{page.title}</h1>
              <p className="about-proof-english">{page.englishSubtitle}</p>
            </div>
            <p className="about-proof-lead">{page.subtitle}</p>
          </div>
        </header>

        <section className="about-career-section" aria-labelledby="career-path-title">
          <div className="about-section-label">
            <span>01</span>
            <div><p>ENGINEERING EXPERIENCE</p><h2 id="career-path-title">工程经历路径</h2></div>
          </div>
          <div>
            <div className="about-experience-summary">
              <strong>{page.experience.value}</strong>
              <span>{page.experience.label}</span>
              <p>{page.experience.conclusion}</p>
            </div>
            <ol className="about-career-timeline">
              {page.careerPath.map((step) => (
                <li key={`${step.year}-${step.title}`}>
                  <time>{step.year}</time><i aria-hidden="true" /><strong>{step.title}</strong><p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-insight-section" aria-labelledby="business-insight-title">
          <div className="about-section-label">
            <span>02</span>
            <div><p>BUSINESS UNDERSTANDING</p><h2 id="business-insight-title">工程经验让我理解</h2></div>
          </div>
          <div className="about-insight-grid">
            {page.businessInsights.map((insight) => (
              <article key={insight.index} className="about-insight-card">
                <div><span>{insight.index}</span><h3>{insight.title}</h3></div>
                <ul aria-label={`${insight.title}的经验来源`}>
                  {insight.sources.map((source) => <li key={source}>{source}</li>)}
                </ul>
                <p>{insight.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-advantage-section" aria-labelledby="product-advantage-title">
          <div className="about-section-label">
            <span>03</span>
            <div><p>PRODUCT ADVANTAGE</p><h2 id="product-advantage-title">工程背景带来的产品优势</h2></div>
          </div>
          <div className="about-advantage-grid">
            {page.productAdvantages.map((advantage) => (
              <article className="about-advantage-card" key={advantage.index}>
                <div className="about-advantage-heading"><span>{advantage.index}</span><h3>{advantage.title}</h3></div>
                <ul aria-label={`${advantage.title}的工程经验来源`}>
                  {advantage.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <p>{advantage.description}</p>
                <div className="about-advantage-value"><span>产品价值</span><p>{advantage.productValue}</p></div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
