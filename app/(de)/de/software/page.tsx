import Software from "@/components/site/views/Software"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/software", "Software & Plattformen: interne Software, CRM, APIs, Cloud – foorgun.ai", "Interne Software, CRM, Kundenportale, APIs und Cloud-Infrastruktur – gebaut für deine Abläufe, mit Automationen von Anfang an. Ab 3.000 €.")

export default function Page() {
  return <Software lang="de" />
}
