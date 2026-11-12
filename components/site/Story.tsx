"use client"

import Image from "next/image"
import { useState, type KeyboardEvent, type ReactNode } from "react"

export type Chapter = {
  /** Kurzname, erscheint auf dem Reiter rechts und als Label der Punkte */
  tab: string
  title: ReactNode
  body: ReactNode
  photo: { src: string; width: number; height: number; alt: string }
  caption?: string
}

type Labels = { title: string; prev: string; next: string }

export default function Story({ chapters, labels, id }: { chapters: Chapter[]; labels: Labels; id?: string }) {
  const [i, setI] = useState(0)
  const last = chapters.length - 1
  const go = (n: number) => setI((n + chapters.length) % chapters.length)
  const c = chapters[i]

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") go(i + 1)
    if (e.key === "ArrowLeft") go(i - 1)
  }

  return (
    <section className="about story" id={id}>
      <div className="wrap">
        <h2>{labels.title}</h2>

        <div
          className="story-card"
          role="group"
          aria-roledescription="carousel"
          aria-label={labels.title}
          tabIndex={0}
          onKeyDown={onKey}
        >
          <span className="story-tab" aria-hidden="true">{c.tab}</span>

          <figure className={`polaroid tilt-${i % 3}`} key={`p${i}`}>
            <svg className="clip" viewBox="0 0 28 74" aria-hidden="true">
              <path d="M9 64V14a6 6 0 0 1 12 0v46a9 9 0 0 1-18 0V10a10 10 0 0 1 20 0" />
            </svg>
            <Image
              src={c.photo.src}
              width={c.photo.width}
              height={c.photo.height}
              alt={c.photo.alt}
              sizes="(max-width: 960px) 80vw, 380px"
            />
            {c.caption && <figcaption>{c.caption}</figcaption>}
          </figure>

          <div className="story-text" key={`t${i}`} aria-live="polite">
            <h3>{c.title}</h3>
            <div className="story-body">{c.body}</div>
          </div>
        </div>

        <div className="story-nav">
          <button onClick={() => go(i - 1)} aria-label={labels.prev}>‹</button>
          {chapters.map((ch, n) => (
            <button
              key={ch.tab}
              className="dot"
              aria-label={ch.tab}
              aria-current={n === i ? "step" : undefined}
              onClick={() => setI(n)}
            />
          ))}
          <button onClick={() => go(i + 1)} aria-label={i === last ? chapters[0].tab : labels.next}>›</button>
        </div>
      </div>
    </section>
  )
}
