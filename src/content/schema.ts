export type BaseSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
};

export type ArchitectureSection = BaseSection & {
  type: "architecture";
  layers: Array<{ index: string; name: string; detail: string }>;
};

export type WorkflowSection = BaseSection & {
  type: "workflow";
  workflows: Array<{
    id: string;
    name: string;
    purpose: string;
    input: string;
    output: string;
    nodes: string[];
  }>;
};

export type PrincipleSection = BaseSection & {
  type: "principles";
  items: Array<{ label: string; title: string; description: string }>;
};

export type PlaceholderSection = BaseSection & {
  type: "placeholder";
  note: string;
};

export type PortfolioSection =
  | ArchitectureSection
  | WorkflowSection
  | PrincipleSection
  | PlaceholderSection;

export type HeroContent = {
  pageIndex?: string;
  role?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  pillars?: Array<{ code: string; label: string; detail: string }>;
  coreTitle?: string[];
  coreCaption?: string;
  metrics?: Array<{ value: string; label: string }>;
};

export type PortfolioPageContent = {
  id: string;
  route: string;
  kind: "landing" | "profile" | "case" | "closing";
  eyebrow?: string;
  title: string;
  subtitle: string;
  status?: string;
  hero?: HeroContent;
  sections: PortfolioSection[];
  body?: string;
};
