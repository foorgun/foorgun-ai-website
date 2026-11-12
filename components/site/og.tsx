import { ImageResponse } from "next/og"
import fs from "fs"
import path from "path"

export const ogSize = { width: 1200, height: 630 }

const font = (f: string) => fs.readFileSync(path.join(process.cwd(), "assets", "fonts", f))

/** Vorschaubild für Links (LinkedIn, WhatsApp …) im Stil der Seite. */
export function ogImage({ title, kicker }: { title: string; kicker?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FBFAF7", padding: "64px 72px", borderBottom: "24px solid #C4521A", fontFamily: "Bricolage" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1, color: "#0C0C0C" }}>
          foorgun<span style={{ color: "#C4521A" }}>.ai</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {kicker && <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#C4521A" }}>{kicker}</div>}
          <div style={{ display: "flex", fontSize: title.length > 60 ? 60 : 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#0C0C0C", maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#5C5A55" }}>Furkan Çetin · AI & Intelligent Automation Engineer</div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Bricolage", data: font("BricolageGrotesque-Bold.ttf"), weight: 700, style: "normal" },
        { name: "Bricolage", data: font("BricolageGrotesque-SemiBold.ttf"), weight: 600, style: "normal" },
      ],
    }
  )
}
