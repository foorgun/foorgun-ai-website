import Image from "next/image"
import type { ReactNode } from "react"
import { CALL, EMAIL, HAS_WA, WHATSAPP } from "./config"
import { UI, type Lang } from "./i18n"

export const Hl = ({ children }: { children: ReactNode }) => (
  <strong className="hl">{children}</strong>
)

export function Section({ id, className = "rule", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section className={className} id={id}>
      <div className="wrap">{children}</div>
    </section>
  )
}

export function PageHero({ title, lead, actions, sub }: { title: ReactNode; lead: ReactNode; actions: { href: string; label: string }[]; sub?: string }) {
  return (
    <section className="hero">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        <Actions items={actions} />
        {sub && <p className="hero-sub">{sub}</p>}
      </div>
    </section>
  )
}

export function Actions({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div className="actions">
      {items.map((a, i) => (
        <a key={a.href + i} className={i === 0 ? "btn" : "btn ghost"} href={a.href}>
          {a.label}
        </a>
      ))}
    </div>
  )
}

export function Facts({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="facts">
      {rows.map(([a, b]) => (
        <div key={a}>
          <dt>{a}</dt>
          <dd>{b}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Steps({ items }: { items: [string, string][] }) {
  return (
    <ol className={`steps${items.length === 3 ? " three" : ""}`}>
      {items.map(([a, b]) => (
        <li key={a}>
          <h3>{a}</h3>
          <p>{b}</p>
        </li>
      ))}
    </ol>
  )
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

export function Quotes({ items }: { items: string[] }) {
  return (
    <div className="quotes">
      {items.map((q) => (
        <blockquote key={q}>„{q}“</blockquote>
      ))}
    </div>
  )
}

export function Proof({ items }: { items: [string, string][] }) {
  return (
    <div className="proof">
      {items.map(([a, b]) => (
        <article key={a}>
          <h3>{a}</h3>
          <p>{b}</p>
        </article>
      ))}
    </div>
  )
}

export function Package({ title, items, children }: { title: string; items: string[]; children: ReactNode }) {
  return (
    <div className="package">
      <div className="incl">
        <h3>{title}</h3>
        <ul>
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
      <div className="price">{children}</div>
    </div>
  )
}

const TESTIS = {
  daniela: {
    quote: (
      <>
        Furkan is really good at understanding what the business needs and finding{" "}
        <Hl>the most practical solutions that actually work</Hl>. Having worked with him for the past
        year, I&apos;ve found him to be reliable, proactive, and always thinking of ways to make things
        better and more efficient.
      </>
    ),
    name: "Daniela Dávila",
    role: "COO, BAZZAAL",
    img: "/testimonials/daniela-davila.jpg",
  },
  sandra: {
    quote: (
      <>
        Furkan automated our entire content pipeline. Our team <Hl>saves hours every week</Hl> and the
        results speak for themselves.
      </>
    ),
    name: "Sandra Schmidt",
    role: "Founder, ViUnlimited",
    img: "/testimonials/sandra-schmidt.webp",
  },
  patrick: {
    quote: (
      <>
        Exactly the kind of technical partner you want — <Hl>delivers what he promises</Hl>, no fluff.
      </>
    ),
    name: "Patrick Wings",
    role: "Owner, Digital Marketing Services",
    img: "/testimonials/patrick-wings.avif",
  },
}

const LOGOS = [
  { name: "BAZZAAL", src: "/logos/bazzaal.png", w: 199, h: 31 },
  { name: "ViUnlimited", src: "/logos/viunlimited.png", w: 326, h: 161 },
  { name: "ABM Becker & Cetin", src: "/logos/abm-becker-cetin.png", w: 252, h: 128 },
  { name: "Patrick Wings", src: "/logos/patrick-wings.png", w: 282, h: 278 },
]

export function Testimonials({ lang, keys, logos = false }: { lang: Lang; keys: (keyof typeof TESTIS)[]; logos?: boolean }) {
  return (
    <Section>
      <h2>{UI[lang].testimonials}</h2>
      <div className={`testis${keys.length === 2 ? " two" : ""}`}>
        {keys.map((k) => {
          const t = TESTIS[k]
          return (
            <figure className="testi" key={k}>
              <blockquote>„{t.quote}“</blockquote>
              <figcaption>
                <Image src={t.img} alt="" width={88} height={88} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          )
        })}
      </div>
      {logos && (
        <div className="logos">
          <small>{UI[lang].logos}</small>
          {LOGOS.map((l) => (
            <Image key={l.name} src={l.src} alt={l.name} width={l.w} height={l.h} />
          ))}
        </div>
      )}
    </Section>
  )
}

export function Cta({ lang, title, text, primary }: { lang: Lang; title: string; text: string; primary?: string }) {
  const t = UI[lang]
  return (
    <section className="cta" id="kontakt">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Actions
          items={[
            { href: CALL, label: primary ?? t.ctaPrimary },
            HAS_WA
              ? { href: WHATSAPP, label: t.ctaWhatsApp }
              : { href: `mailto:${EMAIL}`, label: t.ctaEmail },
          ]}
        />
      </div>
    </section>
  )
}
