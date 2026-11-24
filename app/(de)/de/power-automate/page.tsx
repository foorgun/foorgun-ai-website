import PowerAutomate, { PA_META, PA_PATH } from "@/components/site/views/PowerAutomate"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", PA_PATH, PA_META.de.title, PA_META.de.description)

export default function Page() {
  return <PowerAutomate lang="de" />
}
