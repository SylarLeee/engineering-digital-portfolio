import { BodyText, Eyebrow, SectionHeading } from "./Typography";

export function SectionIntro({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="section-intro">
      <div>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<SectionHeading>{title}</SectionHeading></div>
      {description && <BodyText>{description}</BodyText>}
    </div>
  );
}
