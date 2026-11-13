import Automation from "@/components/site/views/Automation"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/automation", "Automation für Unternehmen – foorgun.ai", "Ein wiederkehrender Ablauf automatisiert in 14 Tagen: mit n8n und KI, zum Festpreis.")

export default function Page() {
  return <Automation lang="de" />
}
