import type { ReactNode } from "react";
import { getActiveRoutes, type RouteId } from "@/config/portfolio.config";
import { AboutMePage } from "@/components/pages/AboutMePage";
import { CoverPage } from "@/components/pages/CoverPage";
import { EngineeringBackgroundPage } from "@/components/pages/EngineeringBackgroundPage";
import { PortfolioChapter } from "@/components/pages/PortfolioChapter";
import { PortfolioPage } from "@/components/pages/PortfolioPage";

const chapterContent: Record<RouteId, ReactNode> = {
  home: <CoverPage />,
  about: <AboutMePage />,
  background: <EngineeringBackgroundPage embedded />,
  case01: <PortfolioPage routeId="case01" showCaseNavigator={false} />,
  case02: <PortfolioPage routeId="case02" showCaseNavigator={false} />,
  summary: <PortfolioPage routeId="summary" />,
  contact: <PortfolioPage routeId="contact" />,
};

export function OnePagePortfolio() {
  const routes = getActiveRoutes();

  return (
    <div className="one-page-portfolio">
      {routes.map((route) => (
        <PortfolioChapter
          route={route}
          key={route.id}
        >
          {chapterContent[route.id]}
        </PortfolioChapter>
      ))}
    </div>
  );
}
