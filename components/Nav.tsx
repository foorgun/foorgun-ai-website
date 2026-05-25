export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-mono text-accent text-base tracking-tight">
          foorgun.ai
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="font-mono text-xs text-white-muted hover:text-white transition-colors duration-150"
          >
            Services
          </a>
          <a
            href="#process"
            className="font-mono text-xs text-white-muted hover:text-white transition-colors duration-150"
          >
            Process
          </a>
          <a
            href="#testimonials"
            className="font-mono text-xs text-white-muted hover:text-white transition-colors duration-150"
          >
            Testimonials
          </a>
        </div>

        <a
          href="#contact"
          className="font-mono text-sm font-medium px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90 transition-opacity duration-150"
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}
