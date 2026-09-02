import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getRouteById, type RouteId } from "@/config/portfolio.config";
import type { PortfolioPageContent } from "./schema";

const contentDirectory = path.join(process.cwd(), "src", "content", "pages");

export function getPageContent(routeId: RouteId): PortfolioPageContent {
  const route = getRouteById(routeId);
  const source = fs.readFileSync(path.join(contentDirectory, route.contentFile), "utf8");
  const { data, content } = matter(source);

  return {
    ...(data as Omit<PortfolioPageContent, "body">),
    body: content.trim(),
  };
}
