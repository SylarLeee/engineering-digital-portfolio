import {
  HeroSection,
  type CoverFeaturedCase,
  type CoverValuePath,
  type CoverVisual,
} from "@/components/sections/HeroSection";
import { getPageContent } from "@/content/loader";
import type { PortfolioPageContent } from "@/content/schema";

type HomePageContent = PortfolioPageContent & {
  englishTitle: string;
  capabilityTags: string[];
  valueProposition: { en: string; zh: string };
  valuePath: CoverValuePath[];
  featuredCases: CoverFeaturedCase[];
  coverVisual: CoverVisual;
};

export function CoverPage() {
  const page = getPageContent("home") as HomePageContent;

  return (
    <HeroSection
      eyebrow={page.eyebrow}
      title={page.title}
      englishTitle={page.englishTitle}
      subtitle={page.subtitle}
      status={page.status}
      hero={page.hero}
      capabilityTags={page.capabilityTags}
      valueProposition={page.valueProposition}
      valuePath={page.valuePath}
      featuredCases={page.featuredCases}
      coverVisual={page.coverVisual}
      coverMode
    />
  );
}
