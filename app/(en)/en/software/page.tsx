import Software from "@/components/site/views/Software"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/software", "Software & platforms: internal software, CRM, APIs, cloud – foorgun.ai", "Internal software, CRM, client portals, APIs and cloud infrastructure – built around how you work, with automations from day one. From €3,000.")

export default function Page() {
  return <Software lang="en" />
}
