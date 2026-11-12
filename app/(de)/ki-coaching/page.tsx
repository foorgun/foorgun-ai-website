import Coaching from "@/components/site/views/Coaching"
import { meta } from "@/components/site/i18n"

export const metadata = meta("de", "/ki-coaching", "KI-Coaching und Schulungen für Teams – foorgun.ai", "Du willst KI im Arbeitsalltag nutzen, weißt aber nicht, wo du anfangen sollst? Coaching, Schulungen und Begleitung.")

export default function Page() {
  return <Coaching lang="de" />
}
