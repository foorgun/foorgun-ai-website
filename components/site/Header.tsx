"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { CALL } from "./config"
import { counterpart, href, UI, type Lang } from "./i18n"

export default function Header({ lang, alt }: { lang: Lang; alt?: string }) {
  const pathname = usePathname() || "/"
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const t = UI[lang]
  const cp = counterpart(pathname)
  const other = alt ? { lang: cp.lang, path: alt } : cp

  return (
    <header className="top">
      <div className="wrap">
        <Link className="logo" href={href(lang, "/")} onClick={close} aria-label="foorgun.ai">
          <Image src="/logos/foorgun-logo-dark.png" alt="foorgun.ai" width={637} height={95} priority />
        </Link>
        <div className="top-right">
          <Link className="lang lang-mobile" href={other.path} hrefLang={other.lang} aria-label={t.switchLabel}>
            {other.lang.toUpperCase()}
          </Link>
          <button className="menu-toggle" aria-expanded={open} aria-controls="nav" onClick={() => setOpen((o) => !o)}>
            {t.menu}
          </button>
          <nav className={`nav${open ? " open" : ""}`} id="nav">
            {t.nav.map((p) => {
              const h = href(lang, p.path)
              return (
                <Link key={p.path} href={h} aria-current={pathname === h ? "page" : undefined} onClick={close}>
                  {p.label}
                </Link>
              )
            })}
            <span className="nav-sep" aria-hidden="true" />
            <Link
              className="nav-blog"
              href={href(lang, "/blog")}
              aria-current={pathname.startsWith(href(lang, "/blog")) ? "page" : undefined}
              onClick={close}
            >
              {t.blog}
            </Link>
            <Link className="lang lang-desktop" href={other.path} hrefLang={other.lang} aria-label={t.switchLabel} onClick={close}>
              <span className={lang === "en" ? "on" : ""}>EN</span>
              <span className={lang === "de" ? "on" : ""}>DE</span>
            </Link>
            <a className="btn small" href={CALL} onClick={close}>
              {t.book}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
