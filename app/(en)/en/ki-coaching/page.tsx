import Coaching from "@/components/site/views/Coaching"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/ki-coaching", "AI coaching and training for teams – foorgun.ai", "Want to use AI in everyday work but don't know where to start? Coaching, training and ongoing support.")

export default function Page() {
  return <Coaching lang="en" />
}
