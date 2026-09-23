import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

const openToWorkItems = [
  {
    label: "目标方向",
    value: "工程数字化产品 · 行业产品 · 工程BA",
    icon: BriefcaseBusiness,
  },
  {
    label: "意向城市",
    value: "重庆优先 · 广州 / 深圳",
    icon: MapPin,
  },
  {
    label: "到岗时间",
    value: "可随时到岗",
    icon: Clock3,
  },
];

export function ContactPage() {
  return (
    <div className="contact-page">
      <Container className="contact-page-shell">
        <header className="contact-page-meta">
          <span>CONTACT</span>
          <span>15 / 15</span>
        </header>

        <div className="contact-page-layout">
          <section className="contact-intro" aria-labelledby="contact-page-title">
            <p className="contact-positioning">工程业务 × B端产品 × AI工作流</p>
            <h1 id="contact-page-title">下一站：工程数字化产品</h1>
            <div className="contact-intro-copy">
              <p>我来自工程现场，正在将对真实业务流程的理解，转化为数字产品设计与人机协作能力。</p>
              <p>如果你的团队正在解决复杂工程业务、B端系统或专业工作流问题，欢迎交流。</p>
            </div>

            <section className="contact-open-work" aria-labelledby="open-to-work-title">
              <header>
                <span className="contact-status-dot" aria-hidden="true" />
                <h2 id="open-to-work-title">OPEN TO WORK</h2>
              </header>
              <div>
                {openToWorkItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.label}>
                      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </article>
                  );
                })}
              </div>
            </section>
          </section>

          <aside className="contact-card" aria-label="李澍恺的联系方式">
            <header>
              <span>CONTACT</span>
              <UserRound size={24} strokeWidth={1.7} aria-hidden="true" />
            </header>

            <div className="contact-card-identity">
              <h2>李澍恺</h2>
              <p>Engineering Digital Product</p>
            </div>

            <dl className="contact-card-details">
              <div>
                <dt><Mail size={17} aria-hidden="true" />Email</dt>
                <dd><a href="mailto:shukai-lee@foxmail.com">shukai-lee@foxmail.com</a></dd>
              </div>
              <div>
                <dt><Phone size={17} aria-hidden="true" />Phone / WeChat</dt>
                <dd><a href="tel:13760734124">13760734124</a></dd>
              </div>
            </dl>

            <a className="contact-email-cta" href="mailto:shukai-lee@foxmail.com">
              Email Me <ArrowRight size={17} aria-hidden="true" />
            </a>

            <p className="contact-card-note">重庆优先 · 可随时到岗</p>
          </aside>
        </div>
      </Container>
    </div>
  );
}
