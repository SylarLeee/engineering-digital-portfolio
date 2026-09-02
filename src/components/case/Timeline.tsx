export type TimelineItem = { period: string; title: string; description: string };

export function Timeline({ items }: { items: TimelineItem[] }) {
  return <ol className="timeline">{items.map((item) => <li key={`${item.period}-${item.title}`}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>;
}
