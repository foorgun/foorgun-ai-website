import Websites from "@/components/site/views/Websites"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/websites", "Website mit Online-Buchung für Salons und Studios – foorgun.ai", "Eigene Website mit Online-Terminbuchung für Salons, Barbershops und Studios. Ohne monatliche Plattformgebühren, fertig in 7 Tagen.")

export default function Page() {
  return <Websites lang="de" />
}
