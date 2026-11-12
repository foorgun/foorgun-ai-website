import type { Lang } from "./i18n"

/** Themen-Cluster: jede Pillar-Seite sammelt ihre Artikel. */
export const CLUSTERS = {
  automation: { path: "/automation", label: { de: "Automation", en: "Automation" } },
  "ki-coaching": { path: "/ki-coaching", label: { de: "KI im Arbeitsalltag", en: "AI at work" } },
  prozessmanagement: { path: "/prozessmanagement", label: { de: "Prozessmanagement", en: "Process management" } },
  fde: { path: "/forward-deployed-engineering", label: { de: "Forward Deployed Engineering", en: "Forward Deployed Engineering" } },
} as const

export type ClusterId = keyof typeof CLUSTERS
export const clusterLabel = (id: ClusterId, lang: Lang) => CLUSTERS[id].label[lang]
