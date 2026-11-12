import Automation from "@/components/site/views/Automation"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/automation", "Business automation – foorgun.ai", "One recurring process automated in 14 days: with n8n and AI, at a fixed price.")

export default function Page() {
  return <Automation lang="en" />
}
