import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div>
          <p className="footer-kicker">ENGINEERING × PRODUCT × AI</p>
          <p className="footer-title">复杂工程知识，转化为可理解、可验证的数字产品。</p>
        </div>
        <div className="footer-links print:hidden">
          <Link href="/about">关于</Link>
          <Link href="/summary">总结</Link>
          <Link href="/contact">联系</Link>
        </div>
        <p className="footer-meta">Portfolio Engine V2.0 · Phase 1 System</p>
      </Container>
    </footer>
  );
}
