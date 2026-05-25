const stats = [
  { value: "20+", label: "automations built" },
  { value: "100+", label: "hours saved per client weekly" },
  { value: "100%", label: "custom built for your business" },
];

export default function Stats() {
  return (
    <section className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
        {stats.map((s) => (
          <div key={s.value} className="py-12 sm:px-12 first:pl-0 last:pr-0">
            <p className="font-sans font-extrabold text-5xl text-white mb-3 tracking-tight">
              {s.value}
            </p>
            <p className="font-mono text-xs text-white-muted uppercase tracking-wider">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
