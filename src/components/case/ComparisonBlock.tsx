export function ComparisonBlock({ before, after }: { before: { title: string; items: string[] }; after: { title: string; items: string[] } }) {
  return <div className="comparison-grid"><div className="comparison-before"><span>BEFORE</span><h3>{before.title}</h3><ul>{before.items.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="comparison-after"><span>AFTER</span><h3>{after.title}</h3><ul>{after.items.map((item) => <li key={item}>{item}</li>)}</ul></div></div>;
}
