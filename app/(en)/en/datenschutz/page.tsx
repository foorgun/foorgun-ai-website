import Legal, { LEGAL_META } from "@/components/site/views/Legal"
import { meta } from "@/components/site/i18n"

const m = LEGAL_META.datenschutz.en
export const metadata = meta("en", "/datenschutz", m.title, m.description)

export default function Page() {
  return <Legal lang="en" kind="datenschutz" />
}
