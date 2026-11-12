import Fde, { FDE_META } from "@/components/site/views/Fde"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/forward-deployed-engineering", FDE_META.de.title, FDE_META.de.description)

export default function Page() {
  return <Fde lang="de" />
}
