import Home from "@/components/site/views/Home"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/", "foorgun.ai – Build a business that works for you", "Furkan Çetin helps businesses automate recurring processes with AI – plus software & platforms and AI coaching.")

export default function Page() {
  return <Home lang="en" />
}
