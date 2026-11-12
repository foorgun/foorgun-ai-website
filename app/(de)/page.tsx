import Home from "@/components/site/views/Home"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/", "foorgun.ai – Bau ein Unternehmen, das für dich arbeitet", "Furkan Çetin hilft Unternehmen, wiederkehrende Abläufe mit KI zu automatisieren – dazu Software & Plattformen und KI-Coaching.")

export default function Page() {
  return <Home lang="de" />
}
