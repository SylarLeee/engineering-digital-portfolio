import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getActiveRoutes } from "@/config/portfolio.config";
import { Container } from "@/components/layout/Container";

export function CaseNavigator({ currentId }: { currentId: string }) {
  const cases = getActiveRoutes().filter((route) => route.group === "case");
  const currentIndex = cases.findIndex((route) => route.id === currentId);
  if (currentIndex === -1) return null;
  const previous = cases[(currentIndex - 1 + cases.length) % cases.length];
  const next = cases[(currentIndex + 1) % cases.length];
  return <nav className="case-navigator print:hidden" aria-label="案例切换"><Container><Link href={previous.path}><ArrowLeft size={16} />{previous.label}</Link><span>{currentIndex + 1} / {cases.length}</span><Link href={next.path}>{next.label}<ArrowRight size={16} /></Link></Container></nav>;
}
