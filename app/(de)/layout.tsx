import SiteRoot, { rootMetadata } from "@/components/site/SiteRoot"

export const metadata = rootMetadata

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteRoot lang="de">{children}</SiteRoot>
}
