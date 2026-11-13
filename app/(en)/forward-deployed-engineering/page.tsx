import Fde, { FDE_META } from "@/components/site/views/Fde"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/forward-deployed-engineering", FDE_META.en.title, FDE_META.en.description)

export default function Page() {
  return <Fde lang="en" />
}
