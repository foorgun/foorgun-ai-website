import { Zap, Sparkles, Link2, Layers } from "lucide-react";

const IconLightning = () => <Zap width="20" height="20" strokeWidth={1.8} />;
const IconBot      = () => <Sparkles width="20" height="20" strokeWidth={1.8} />;
const IconWebhook  = () => <Link2 width="20" height="20" strokeWidth={1.8} />;
const IconLayers   = () => <Layers width="20" height="20" strokeWidth={1.8} />;

const services = [
  {
    icon: <IconLightning />,
    title: "Automation Systems",
    description:
      "Your team spends hours on tasks that should run themselves. We build end-to-end workflows that handle the repetitive work — so your people focus on what actually matters.",
  },
  {
    icon: <IconBot />,
    title: "AI Agents",
    description:
      "Autonomous agents that read, decide, and act on your behalf — 24/7, across email, chat, forms, and phone. Complex requests get escalated. Everything else runs automatically.",
  },
  {
    icon: <IconWebhook />,
    title: "AI Integration",
    description:
      "AI connected to the tools you already use. Drafting, classifying, routing, summarizing — embedded directly into your existing stack, without rebuilding everything from scratch.",
  },
  {
    icon: <IconLayers />,
    title: "System Design",
    description:
      "Before building, we map. Clear data architecture, clean integrations, solid foundations — so nothing breaks when the business grows.",
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Here&apos;s what we work on
          </h2>
          <p className="text-white-mid font-light">
            Where I step in to make your systems smarter.
          </p>
        </div>

        {/* 2×2 on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-surface p-8 flex flex-col gap-6 hover:bg-surface-2 transition-colors duration-200"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-accent/10 text-accent border border-accent/20">
                {s.icon}
              </div>
              <h3 className="font-sans font-semibold text-xl text-white">{s.title}</h3>
              <p className="text-white-mid text-sm leading-relaxed font-light">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
