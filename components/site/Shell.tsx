import Link from "next/link"
import type { ReactNode } from "react"
import BookingModal from "./BookingModal"
import Header from "./Header"
import { EMAIL } from "./config"
import { href, UI, type Lang } from "./i18n"

export default function Shell({ lang, children, alt }: { lang: Lang; children: ReactNode; alt?: string }) {
  const f = UI[lang].footer
  return (
    <>
      <Header lang={lang} alt={alt} />
      <main>{children}</main>
      <footer>
        <div className="wrap">
          <span>© 2026 foorgun.ai · Furkan Çetin · {EMAIL}</span>
          <nav>
            <Link href={href(lang, "/websites")}>{f.websites}</Link>
            <Link href={href(lang, "/prozessmanagement")}>{f.process}</Link>
            <Link href={href(lang, "/forward-deployed-engineering")}>{f.fde}</Link>
            <Link href={href(lang, "/blog")}>{f.blog}</Link>
            <Link href={`${href(lang, "/")}#ki-check`}>{f.check}</Link>
            <Link href={href(lang, "/impressum")}>{f.imprint}</Link>
            <Link href={href(lang, "/datenschutz")}>{f.privacy}</Link>
          </nav>
        </div>
      </footer>
      <BookingModal lang={lang} />
    </>
  )
}
