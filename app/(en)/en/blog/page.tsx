import BlogIndex from "@/components/site/views/BlogIndex"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/blog", "Blog – AI, automation and processes | foorgun.ai", "Guides and perspectives on AI, automation, process management and forward deployed engineering – for businesses, without the hype.")

export default function Page() {
  return <BlogIndex lang="en" />
}
