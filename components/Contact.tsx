export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-8">
            Get in touch
          </p>
          <h2 className="font-sans font-bold text-5xl md:text-6xl leading-[1.0] tracking-tight text-white mb-8">
            Let&apos;s talk about what{" "}
            <em className="not-italic text-accent">
              you&apos;re still<br className="hidden sm:block" /> doing by hand.
            </em>
          </h2>
          <p className="text-white-mid leading-relaxed mb-12 font-light text-lg max-w-xl">
            Book a free 30-minute discovery call. No pitch, no obligation — just
            an honest look at what could run automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Replace href with your Calendly link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-mono text-sm font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-150"
            >
              Book a call →
            </a>
            <a
              href="mailto:hello@foorgun.ai"
              className="inline-flex items-center gap-2 border border-line text-white-mid font-mono text-sm px-8 py-4 hover:border-white/20 hover:text-white transition-colors duration-150"
            >
              hello@foorgun.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
