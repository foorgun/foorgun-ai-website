import Websites from "@/components/site/views/Websites"
import { meta } from "@/components/site/i18n"

export const metadata = meta("en", "/websites", "Websites with online booking for salons and studios – foorgun.ai", "Your own website with online booking for salons, barbershops and studios. No monthly platform fees, ready in 7 days.")

export default function Page() {
  return <Websites lang="en" />
}
