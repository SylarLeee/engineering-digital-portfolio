import type { RouteId } from "@/config/portfolio.config";
import { getPageContent } from "@/content/loader";
import { HeroSection } from "@/components/sections/HeroSection";
import { CaseHeader } from "@/components/case/CaseHeader";
import { ContentRenderer } from "@/components/sections/ContentRenderer";
import { CaseNavigator } from "@/components/case/CaseNavigator";
import { Case01Page } from "@/components/pages/Case01Page";
import { Case02Page } from "@/components/pages/Case02Page";

export function PortfolioPage({ routeId, showCaseNavigator = true }: { routeId: RouteId; showCaseNavigator?: boolean }) {
  if (routeId === "case01") return <Case01Page showCaseNavigator={showCaseNavigator} />;
  if (routeId === "case02") return <Case02Page showCaseNavigator={showCaseNavigator} />;
  const page = getPageContent(routeId);
  return <>{page.kind === "case" ? <CaseHeader project={page.title} background={page.subtitle} status={page.status} /> : <HeroSection eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} status={page.status} hero={page.hero} />}<ContentRenderer sections={page.sections} />{page.kind === "case" && showCaseNavigator && <CaseNavigator currentId={page.id} />}</>;
}
