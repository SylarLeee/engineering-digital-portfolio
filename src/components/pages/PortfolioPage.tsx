import type { RouteId } from "@/config/portfolio.config";
import { getPageContent } from "@/content/loader";
import { HeroSection } from "@/components/sections/HeroSection";
import { CaseHeader } from "@/components/case/CaseHeader";
import { ContentRenderer } from "@/components/sections/ContentRenderer";
import { CaseNavigator } from "@/components/case/CaseNavigator";

export function PortfolioPage({ routeId }: { routeId: RouteId }) {
  const page = getPageContent(routeId);
  return <>{page.kind === "case" ? <CaseHeader project={page.title} background={page.subtitle} status={page.status} /> : <HeroSection eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} status={page.status} />}<ContentRenderer sections={page.sections} />{page.kind === "case" && <CaseNavigator currentId={page.id} />}</>;
}
