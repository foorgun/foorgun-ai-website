import Legal, { LEGAL_META } from "@/components/site/views/Legal"
import { meta } from "@/components/site/i18n"

const m = LEGAL_META.impressum.de
export const metadata = meta("de", "/impressum", m.title, m.description)

export default function Page() {
  return <Legal lang="de" kind="impressum" />
}
