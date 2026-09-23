"use client";

import { useEffect, useState } from "react";

export type CaseSideNavItem = {
  id: string;
  index: string;
  label: string;
};

export function CaseSideNav({
  title,
  items,
}: {
  title: string;
  items: CaseSideNavItem[];
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const sections = items
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));

      const current = sections.reduce((active, section) => {
        return section.getBoundingClientRect().top <= 180 ? section : active;
      }, sections[0]);

      if (current) setActiveId(current.id);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <nav className="case-side-nav" aria-label={`${title} 页面导航`}>
      <span className="case-side-nav-title">{title}</span>
      <ol>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={isActive ? "location" : undefined}>
                <span>{item.index}</span>
                <em>{item.label}</em>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
