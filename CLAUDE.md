# CLAUDE.md — foorgun.ai Website

## Always Do First

- Read this entire file before writing any code  
- Check existing file structure before creating new files  
- Never overwrite files without reading them first  
- Run `npm run dev` to preview before considering a task done

---

## Project Overview

**Client:** foorgun.ai — AI & Automation Consultancy  
**Owner:** Furkan Cetin, Ulm, Germany  
**Stack:** Next.js 14 · Tailwind CSS · TypeScript  
**Hosting:** Cloudflare Pages  
**Repo:** GitHub

---

## Brand Assets

### Colors

| Token | Hex | Usage |
| :---- | :---- | :---- |
| Background | `#0C0C0C` | Page background |
| Surface | `#141414` | Cards, sections |
| Surface 2 | `#1C1C1C` | Borders, elevated cards |
| Accent | `#C4521A` | CTAs, highlights, links |
| Accent dim | `rgba(196,82,26,0.12)` | Subtle accent backgrounds |
| White | `#F5F3EE` | Primary text |
| White mid | `rgba(245,243,238,0.6)` | Secondary text |
| White muted | `rgba(245,243,238,0.25)` | Placeholder, labels |
| Line | `rgba(255,255,255,0.08)` | Borders, dividers |

### Typography

- **Headings:** DM Serif Display (Google Fonts) — italic for emphasis  
- **Body:** DM Sans (Google Fonts) — weight 300 for body, 500 for labels  
- **Mono:** DM Mono (Google Fonts) — eyebrows, tags, code

### Logo

- Text logo: `foorgun.ai` in DM Mono, color: `#C4521A`  
- No icon/symbol — text only

### Photo

- File: `/public/furkan.jpg`  
- Usage: Hero section, right side  
- If not present: use a dark placeholder div with initials "FC"

---

## Site Structure

/

├── Nav

├── Hero

├── What I Do (3 cards)

├── Testimonials (3 cards)

└── Contact

### Section Details

**Nav**

- Left: `foorgun.ai` logo  
- Right: `Book a call` button (accent color, links to \#contact)

**Hero**

- Left: Headline \+ subline \+ CTA  
- Right: Photo `/public/furkan.jpg`  
- Headline: "I turn manual work into automated systems."  
- Subline: "Operations, marketing, content — if your team does it manually and repeatedly, there's a smarter way."  
- CTA: "Book a call →"

**What I Do**

- 3 cards: Automation Systems · AI Integration · System Design  
- Dark card background, accent left border

**Testimonials**

- 3 cards, grid layout, large quote mark  
- Soojin Joung — CEO, BAZZAAL  
- Owner — ViUnlimited  
- Patrick Wings — Digital Marketing Services

**Contact**

- Email: [hello@foorgun.ai](mailto:hello@foorgun.ai)  
- CTA: Book a call (Calendly placeholder)

---

## Output Details

- All components in `/components` folder  
- Page in `/app/page.tsx`  
- Global styles in `/app/globals.css`  
- Fonts loaded via `next/font/google`  
- Images via `next/image`  
- No external UI libraries — Tailwind only  
- Mobile responsive — mobile first  
- No animations for now — keep it fast

---

## Hard Rules

- **Never use light backgrounds** — everything stays dark  
- **Never use blue** — accent is always `#C4521A` (terracotta)  
- **No gradients** unless very subtle (background only)  
- **No stock photos** — only the provided photo of Furkan  
- **No Lorem ipsum** — use real content from this file  
- **No external component libraries** (no shadcn, no MUI, no Radix)  
- **No inline styles** — Tailwind classes only  
- **Keep it fast** — no heavy dependencies, no animations library  
- **Deploy-ready** — must build without errors (`npm run build`)

---

## Reference Inspirations

- linear.app — clean, dark, minimal  
- basement.studio — editorial, bold typography  
- Our own presentation style: dark bg, terracotta accent, DM Serif Display headings

---

## Commands

npm run dev      \# Start dev server

npm run build    \# Build for production

npm run lint     \# Check for errors

---

## Deploy (Cloudflare Pages)

- Connect GitHub repo to Cloudflare Pages  
- Build command: `npm run build`  
- Output directory: `.next`  
- Node version: 18+

