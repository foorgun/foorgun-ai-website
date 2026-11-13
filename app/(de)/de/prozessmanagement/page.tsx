import Process, { PROCESS_META } from "@/components/site/views/Process"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/prozessmanagement", PROCESS_META.de.title, PROCESS_META.de.description)

export default function Page() {
  return <Process lang="de" />
}
