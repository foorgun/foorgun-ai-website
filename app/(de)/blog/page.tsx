import BlogIndex from "@/components/site/views/BlogIndex"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/blog", "Blog – KI, Automation und Prozesse | foorgun.ai", "Anleitungen und Einordnungen zu KI, Automation, Prozessmanagement und Forward Deployed Engineering – für Unternehmen, ohne Hype.")

export default function Page() {
  return <BlogIndex lang="de" />
}
