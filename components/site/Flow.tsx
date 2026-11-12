"use client"

import Link from "next/link"
import { useEffect, useRef, type ReactNode } from "react"

export type FlowNode = { href: string; who: string; title: string; text: ReactNode; more: string }

// Signatur-Element: vier Leistungen als Workflow-Knoten, verbunden durch eine
// gestrichelte Leitung, auf der ein Signal entlangläuft (nur Desktop).
export default function Flow({ nodes }: { nodes: FlowNode[] }) {
  const flowRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const flow = flowRef.current
    const path = pathRef.current
    const dot = dotRef.current
    if (!flow || !path || !dot) return

    const draw = () => {
      if (window.innerWidth <= 960) return
      const fr = flow.getBoundingClientRect()
      const pts = Array.from(flow.querySelectorAll<HTMLElement>(".node")).map((el) => {
        const r = el.getBoundingClientRect()
        return { inx: r.left - fr.left, outx: r.right - fr.left, y: r.top - fr.top + r.height / 2 }
      })
      let d = ""
      let p = `M${pts[0].outx} ${pts[0].y}`
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1], m = (a.outx + b.inx) / 2
        const seg = ` C${m} ${a.y} ${m} ${b.y} ${b.inx} ${b.y}`
        d += (i ? " " : `M${a.outx} ${a.y}`) + seg
        if (i < pts.length - 2) d += ` M${b.outx} ${b.y}`
        p += seg
        if (i < pts.length - 2) p += ` L${b.outx} ${b.y}`
      }
      path.setAttribute("d", d)
      dot.style.setProperty("--wire", `path('${p}')`)
    }

    draw()
    window.addEventListener("resize", draw)
    document.fonts?.ready.then(draw)
    return () => window.removeEventListener("resize", draw)
  }, [])

  return (
    <div className="flow" ref={flowRef}>
      <svg className="wire" aria-hidden="true">
        <path ref={pathRef} d="" />
        <circle ref={dotRef} className="pulse" r="7" cx="0" cy="0" />
      </svg>
      <div className="nodes" style={{ ["--n" as string]: nodes.length }}>
        {nodes.map((n) => (
          <Link key={n.href} className="node" href={n.href}>
            <span className="port in" />
            <span className="port out" />
            <span className="who">{n.who}</span>
            <h3>{n.title}</h3>
            <p>{n.text}</p>
            <span className="more">{n.more}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
