const steps = [
  {
    num: "1",
    title: "Discovery call",
    description:
      "You walk me through your workflows. I find where automation creates the most leverage — and tell you exactly what's possible.",
  },
  {
    num: "2",
    title: "System design",
    description:
      "I map out the exact tools, connections, and logic needed before writing a single line. No surprises later.",
  },
  {
    num: "3",
    title: "Implementation",
    description:
      "I build, test, and hand over everything. Fully working, fully documented, ready to run on day one.",
  },
  {
    num: "4",
    title: "Track & optimize",
    description:
      "We monitor performance, catch edge cases, and refine until the system runs itself. I stick around.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            How it works
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">
            Our process
          </h2>
          <p className="text-white-mid font-light">
            Our way &amp; order of doing things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          {steps.map((s) => (
            <div key={s.num} className="relative bg-bg p-10 overflow-hidden">
              <span
                className="absolute -top-6 -right-2 font-sans font-extrabold text-[10rem] leading-none text-white/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                {s.num}
              </span>
              <div className="relative">
                <h3 className="font-sans font-semibold text-xl text-white mb-4">{s.title}</h3>
                <p className="text-white-mid text-sm leading-relaxed font-light max-w-sm">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
