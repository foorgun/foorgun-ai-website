import PowerAutomate, { PA_META, PA_PATH } from "@/components/site/views/PowerAutomate"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", PA_PATH, PA_META.en.title, PA_META.en.description)

export default function Page() {
  return <PowerAutomate lang="en" />
}
