import { Container } from "@/components/layout/Container";
import { Eyebrow, DisplayHeading } from "@/components/common/Typography";

export type CaseHeaderProps = {
  project: string;
  background?: string;
  role?: string;
  outcome?: string;
  status?: string;
};

export function CaseHeader({ project, background, role, outcome, status = "CONTENT SLOT" }: CaseHeaderProps) {
  const facts = [
    ["BACKGROUND", background],
    ["ROLE", role],
    ["OUTCOME", outcome],
  ].filter(([, value]) => value);

  return (
    <section className="case-header">
      <Container>
        <div className="case-title-row">
          <div><Eyebrow>PRODUCT CASE STUDY</Eyebrow><DisplayHeading>{project}</DisplayHeading></div>
          <span className="case-status">{status}</span>
        </div>
        {facts.length > 0 && <dl className="case-facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
      </Container>
    </section>
  );
}
