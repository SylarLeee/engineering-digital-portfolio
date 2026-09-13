"use client";

import { useEffect, useState } from "react";

export type Case01SideNavItem = {
  id: string;
  index: string;
  label: string;
};

export function Case01SideNav({ items }: { items: Case01SideNavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "page04");

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
    <nav className="case01-side-nav" aria-label="Case01 章节导航">
      <span className="case01-side-nav-title">CASE01</span>
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
