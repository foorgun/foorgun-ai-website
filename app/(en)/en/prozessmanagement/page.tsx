import Process, { PROCESS_META } from "@/components/site/views/Process"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/prozessmanagement", PROCESS_META.en.title, PROCESS_META.en.description)

export default function Page() {
  return <Process lang="en" />
}
