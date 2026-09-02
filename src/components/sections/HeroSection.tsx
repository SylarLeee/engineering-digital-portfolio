import Link from "next/link";
import { ArrowDown, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { DisplayHeading, Eyebrow } from "@/components/common/Typography";

export type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  status?: string;
};

export function HeroSection({ eyebrow, title, subtitle, status }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <Container className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>{eyebrow ?? "ENGINEERING DIGITAL PORTFOLIO"}</Eyebrow>
          <DisplayHeading>{title}</DisplayHeading>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions print:hidden">
            <Button asChild><Link href="#system">查看系统结构 <ArrowDown size={16} /></Link></Button>
            <Button asChild variant="outline"><Link href="/case01">进入案例壳层</Link></Button>
          </div>
        </div>
        <div className="hero-system" aria-label="作品集系统分层示意">
          <div className="visual-toolbar"><span /><span /><span /><em>{status ?? "SYSTEM READY"}</em></div>
          <div className="visual-axis"><span>BUSINESS</span><span>PRODUCT</span><span>AI</span></div>
          <div className="visual-core">
            <Layers3 size={22} />
            <strong>PORTFOLIO<br />ENGINE</strong>
            <small>CONTENT → COMPONENT → PAGE</small>
          </div>
          <div className="visual-metrics">
            <span><strong>01</strong>Single engine</span>
            <span><strong>02</strong>Content versions</span>
            <span><strong>∞</strong>Future cases</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
