import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/common/Typography";
import { getPageContent } from "@/content/loader";
import type { PortfolioPageContent } from "@/content/schema";

type CapabilityItem = { title: string; detail: string };
type CapabilityLayer = {
  index: string;
  code: string;
  label: string;
  title: string;
  statement: string;
  items: CapabilityItem[];
};

type BackgroundPageContent = PortfolioPageContent & {
  englishSubtitle: string;
  logicPath: string[];
  capabilityLayers: CapabilityLayer[];
};

export function EngineeringBackgroundPage({ embedded = false }: { embedded?: boolean }) {
  const page = getPageContent("background") as BackgroundPageContent;

  return (
    <div className={`capability-migration-page${embedded ? " capability-migration-page--embedded" : ""}`}>
      <Container className="capability-migration-layout">
        <header className="capability-migration-header">
          <div className="capability-migration-meta">
            <span>03 / 15</span>
            <span>{page.status}</span>
          </div>
          <div className="capability-migration-title-row">
            <div>
              <Eyebrow>{page.eyebrow}</Eyebrow>
              <h1>{page.title}</h1>
              <p className="capability-migration-english">{page.englishSubtitle}</p>
            </div>
            <p className="capability-migration-lead">{page.subtitle}</p>
          </div>
          <div className="capability-logic-path" aria-label="能力形成路径">
            {page.logicPath.map((step, index) => (
              <Fragment key={step}>
                <span><em>0{index + 1}</em>{step}</span>
                {index < page.logicPath.length - 1 ? <ArrowRight size={16} aria-hidden="true" /> : null}
              </Fragment>
            ))}
          </div>
        </header>

        <section className="capability-layer-map" aria-label="工程经验到产品能力的三层映射图">
          {page.capabilityLayers.map((layer, layerIndex) => (
            <Fragment key={layer.index}>
              <article className={`capability-layer capability-layer--${layer.code.toLowerCase()}`}>
                <div className="capability-layer-index">
                  <span>{layer.index}</span>
                  <em>{layer.code}</em>
                </div>
                <div className="capability-layer-heading">
                  <p>{layer.label}</p>
                  <h2>{layer.title}</h2>
                  <span>{layer.statement}</span>
                </div>
                <div className="capability-layer-items">
                  {layer.items.map((item, itemIndex) => (
                    <Fragment key={item.title}>
                      <div>
                        <small>{String(itemIndex + 1).padStart(2, "0")}</small>
                        <strong>{item.title}</strong>
                        <p>{item.detail}</p>
                      </div>
                      {layer.code === "OUTPUT" && itemIndex < layer.items.length - 1 ? <b aria-hidden="true">×</b> : null}
                    </Fragment>
                  ))}
                </div>
              </article>
              {layerIndex < page.capabilityLayers.length - 1 ? (
                <div className="capability-layer-connector" aria-hidden="true">
                  <span>{layerIndex === 0 ? "STRUCTURE" : "SYNTHESIZE"}</span>
                  <ArrowDown size={17} />
                </div>
              ) : null}
            </Fragment>
          ))}
        </section>
      </Container>
    </div>
  );
}
