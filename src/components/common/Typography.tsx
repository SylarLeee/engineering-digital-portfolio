import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("type-label", className)}>{children}</p>;
}

export function DisplayHeading({ children, className }: { children: ReactNode; className?: string }) {
  return <h1 className={cn("type-display", className)}>{children}</h1>;
}

export function SectionHeading({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("type-section", className)} {...props}>{children}</h2>;
}

export function BodyText({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("type-body", className)}>{children}</p>;
}

export function Caption({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("type-caption", className)}>{children}</p>;
}
