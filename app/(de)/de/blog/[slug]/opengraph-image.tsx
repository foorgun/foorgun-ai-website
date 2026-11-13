import { ogImage, ogSize } from "@/components/site/og"
import { postBySlug, postsFor } from "@/components/site/blog"
import { clusterLabel } from "@/components/site/clusters"

export const size = ogSize
export const contentType = "image/png"
export const alt = "foorgun.ai Blog"

export function generateStaticParams() {
  return postsFor("de").map((p) => ({ slug: p.slug }))
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = postBySlug("de", params.slug)
  return ogImage({ title: post?.title ?? "foorgun.ai", kicker: post ? clusterLabel(post.cluster, "de") : undefined })
}
