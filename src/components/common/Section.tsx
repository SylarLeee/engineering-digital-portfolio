import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  theme?: "light" | "dark";
  bleed?: boolean;
};

export function Section({ className, theme = "light", bleed = false, children, ...props }: SectionProps) {
  return (
    <section className={cn("portfolio-section", theme === "dark" && "theme-dark", className)} {...props}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
