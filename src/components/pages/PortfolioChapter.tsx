import type { PortfolioRoute } from "@/config/portfolio.config";

type PortfolioChapterProps = {
  route: PortfolioRoute;
  children: React.ReactNode;
};

export function PortfolioChapter({ route, children }: PortfolioChapterProps) {
  return (
    <div className="portfolio-chapter" id={route.anchor} data-page={route.id}>
      {children}
    </div>
  );
}
