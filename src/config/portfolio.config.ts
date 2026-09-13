export type PortfolioVersion = "short" | "deep";

export type PortfolioRoute = {
  id: string;
  path: string;
  anchor: string;
  label: string;
  shortLabel?: string;
  contentFile: string;
  group: "profile" | "case" | "closing";
  caseId?: "case01" | "case02";
};

export const routeRegistry = {
  home: { id: "home", path: "/", anchor: "cover", label: "首页", shortLabel: "Cover", contentFile: "home.md", group: "profile" },
  about: { id: "about", path: "/about", anchor: "about", label: "关于我", shortLabel: "About", contentFile: "about.md", group: "profile" },
  background: { id: "background", path: "/background", anchor: "background", label: "工程背景", shortLabel: "Background", contentFile: "background.md", group: "profile" },
  case01: { id: "case01", path: "/case01", anchor: "case01", label: "Case 01", shortLabel: "Case 01", contentFile: "case01.md", group: "case", caseId: "case01" },
  case02: { id: "case02", path: "/case02", anchor: "case02", label: "Case 02", shortLabel: "Case 02", contentFile: "case02.md", group: "case", caseId: "case02" },
  summary: { id: "summary", path: "/summary", anchor: "summary", label: "总结", shortLabel: "Summary", contentFile: "summary.md", group: "closing" },
  contact: { id: "contact", path: "/contact", anchor: "contact", label: "联系", shortLabel: "Contact", contentFile: "contact.md", group: "closing" },
} satisfies Record<string, PortfolioRoute>;

export type RouteId = keyof typeof routeRegistry;
export type RegisteredPortfolioRoute = PortfolioRoute & { id: RouteId };

export const portfolioVersions: Record<PortfolioVersion, { label: string; pages: RouteId[] }> = {
  short: {
    label: "投递版",
    pages: ["home", "about", "background", "case01", "case02", "summary", "contact"],
  },
  deep: {
    label: "Master Deep Dive",
    pages: ["home", "about", "background", "case01", "case02", "summary", "contact"],
  },
};

export const activePortfolioVersion: PortfolioVersion =
  process.env.NEXT_PUBLIC_PORTFOLIO_VERSION === "deep" ? "deep" : "short";

export function getActiveRoutes(): RegisteredPortfolioRoute[] {
  return portfolioVersions[activePortfolioVersion].pages.map((id) => routeRegistry[id] as RegisteredPortfolioRoute);
}

export function getRouteById(id: RouteId) {
  return routeRegistry[id];
}

export function getPortfolioAnchor(id: RouteId) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}/#${routeRegistry[id].anchor}`;
}

export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base || path.startsWith("#")) return path;
  return path === "/" ? `${base}/` : `${base}${path}`;
}
