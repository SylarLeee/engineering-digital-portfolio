import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { DisplayHeading, Eyebrow } from "@/components/common/Typography";
import type { HeroContent } from "@/content/schema";

export type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  englishTitle?: string;
  subtitle: string;
  status?: string;
  hero?: HeroContent;
  capabilityTags?: string[];
  valueProposition?: { en: string; zh: string };
  valuePath?: CoverValuePath[];
  featuredCases?: CoverFeaturedCase[];
  coverVisual?: CoverVisual;
  coverMode?: boolean;
};

export type CoverVisual = {
  image: string;
  imageAlt: string;
  sourceLabel: string;
  targetLabel: string;
  systemNodes: string[];
};

export type CoverValuePath = { value: string; detail: string };
export type CoverFeaturedCase = { index: string; title: string; subtitle: string; href: string };

const defaultPillars = [
  { code: "01", label: "ENGINEERING", detail: "Domain knowledge" },
  { code: "02", label: "PRODUCT", detail: "System design" },
  { code: "03", label: "AI", detail: "Governed workflow" },
];

const defaultMetrics = [
  { value: "6Y+", label: "Engineering experience" },
  { value: "B2B", label: "Product systems" },
  { value: "AI", label: "Knowledge workflow" },
];

export function HeroSection({
  eyebrow,
  title,
  englishTitle,
  subtitle,
  status,
  hero,
  capabilityTags,
  valueProposition,
  valuePath,
  featuredCases,
  coverVisual,
  coverMode = false,
}: HeroSectionProps) {
  const pillars = hero?.pillars ?? defaultPillars;
  const metrics = hero?.metrics ?? defaultMetrics;
  const coreTitle = hero?.coreTitle ?? ["DOMAIN", "TO", "PRODUCT"];
  const visualTags = pillars.map((pillar) => pillar.label);
  const coverValuePath = valuePath ?? [];
  const coverFeaturedCases = featuredCases ?? [];

  return (
    <section className={`hero-section${coverMode ? " hero-section--cover" : ""}`}>
      <Container className="hero-layout">
        <div className="hero-main-grid">
          <div className="hero-copy">
            <Eyebrow>{eyebrow ?? "ENGINEERING DIGITAL PORTFOLIO"}</Eyebrow>
            <DisplayHeading>
              {title.split("，").map((line, index, lines) => (
                <span key={line}>{line}{index < lines.length - 1 ? "，" : ""}</span>
              ))}
            </DisplayHeading>
            {coverMode ? (
              <>
                {englishTitle ? <p className="cover-english-title">{englishTitle}</p> : null}
                <div className="cover-capability-lockup" aria-label="核心能力方向">
                  <p>{capabilityTags?.join(" × ")}</p>
                  <span>{subtitle}</span>
                </div>
                <div className="cover-value-proposition">
                  <strong>{valueProposition?.zh}</strong>
                  <p>{valueProposition?.en}</p>
                </div>
              </>
            ) : (
              <>
                <p className="hero-subtitle">{subtitle}</p>
                <div className="hero-actions print:hidden">
                  <Button asChild>
                    <Link href={hero?.primaryAction?.href ?? "/about"}>
                      {hero?.primaryAction?.label ?? "了解我的路径"} <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={hero?.secondaryAction?.href ?? "/case01"}>
                      {hero?.secondaryAction?.label ?? "查看核心案例"}
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className={`hero-system${coverMode ? " hero-system--translation" : ""}`} aria-label="从真实工程现场到数字产品系统的能力转化">
            <div className="visual-toolbar">
              <span className="visual-toolbar-label">{coverMode ? "现实工程 → 数字产品" : "CAPABILITY MODEL"}</span>
              <em>{hero?.pageIndex ?? status ?? "01 / COVER"}</em>
            </div>
            {coverMode && coverVisual ? (
              <div className="cover-translation-visual">
                <figure>
                  <Image src={coverVisual.image} alt={coverVisual.imageAlt} fill sizes="(max-width: 640px) 100vw, 340px" priority />
                  <figcaption>{coverVisual.sourceLabel}</figcaption>
                </figure>
                <div className="cover-translation-bridge" aria-hidden="true"><ArrowDown size={16} /></div>
                <div className="cover-product-system">
                  <strong>{coverVisual.targetLabel}</strong>
                  <div>
                    {coverVisual.systemNodes.map((node, index) => <span key={node}><em>0{index + 1}</em>{node}</span>)}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="visual-tags">
                  {visualTags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="visual-model">
                  <div className="visual-model-core">
                    <strong>{coreTitle[0]}</strong>
                    <ArrowDown size={18} aria-hidden="true" />
                    <strong>{coreTitle[coreTitle.length - 1]}</strong>
                  </div>
                </div>
                <div className="visual-metrics">
                  {metrics.map((metric) => (
                    <span key={`${metric.value}-${metric.label}`}>
                      <strong>{metric.value}</strong>
                      {metric.label}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {coverMode && (
          <div className="cover-lower-grid">
            <div className="cover-value-path" aria-label="价值转化路径">
              <p>价值转化 <span>VALUE CHAIN</span></p>
              <div>
                {coverValuePath.map((item, index) => (
                  <Fragment key={item.value}>
                    <span><strong>{item.value}</strong><small>{item.detail}</small></span>
                    {index < coverValuePath.length - 1 && <ArrowRight size={15} aria-hidden="true" />}
                  </Fragment>
                ))}
              </div>
            </div>
            <nav className="cover-featured-cases" aria-label="精选案例">
              <p>核心案例 <span>FEATURED CASES</span></p>
              <div>
                {coverFeaturedCases.map((item) => (
                  <Link href={item.href} key={item.index}>
                    <span>{item.index}</span>
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </Container>
    </section>
  );
}
