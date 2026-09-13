import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { activePortfolioVersion, getActiveRoutes, portfolioVersions } from "@/config/portfolio.config";
import { Container } from "./Container";

export function Header() {
  const routes = getActiveRoutes();
  return (
    <header className="site-header print:hidden">
      <Container className="header-inner">
        <Link href="/" className="brand" aria-label="返回封面">
          <span className="brand-mark">ED</span>
          <span className="brand-copy">
            <strong>Engineering Digital</strong>
            <small>Product Portfolio · 2026</small>
          </span>
        </Link>
        <nav aria-label="主导航" className="main-nav">
          {routes.map((route, index) => (
            <Link key={route.id} href={route.path}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {route.shortLabel ?? route.label}
            </Link>
          ))}
        </nav>
        <div className="header-status">
          <span className="status-dot" />
          {portfolioVersions[activePortfolioVersion].label}
          <ArrowUpRight size={14} aria-hidden="true" />
        </div>
      </Container>
    </header>
  );
}
