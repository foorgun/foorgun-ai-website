import Shell from "../Shell"
import ClusterArticles from "../ClusterArticles"
import JsonLd, { serviceSchema } from "../JsonLd"
import { CALL } from "../config"
import { UI, type Lang } from "../i18n"
import { Cta, Facts, Faq, Hl, PageHero, Section, Steps } from "../blocks"

export const FDE_META = {
  de: { title: "Forward Deployed Engineering für Unternehmen – foorgun.ai", description: "Forward Deployed Engineering: Ich arbeite direkt in deinen Abläufen mit, verstehe das Problem vor Ort und baue die KI- oder Automationslösung, bis sie im Alltag läuft." },
  en: { title: "Forward Deployed Engineering for businesses – foorgun.ai", description: "Forward deployed engineering: I work directly inside your processes, understand the problem on the ground and build the AI or automation solution until it runs day to day." },
}

const T = {
  de: {
    title: <>Forward Deployed Engineering: <em className="hl">gebaut, wo die Arbeit passiert.</em></>,
    lead: <>Kein Berater, der Folien schickt. Keine Agentur, die irgendwo im Hintergrund baut. Ich arbeite <Hl>direkt in deinen Abläufen</Hl> mit, verstehe das Problem vor Ort und baue die Lösung, <Hl>bis sie im Alltag läuft.</Hl></>,
    a2: "Was ist das?",
    whatTitle: "Was ist ein Forward Deployed Engineer?",
    what: [
      <>Der Begriff kommt aus Softwarefirmen wie Palantir: Engineers, die nicht in der Zentrale sitzen, sondern beim Kunden – dort, wo die Software tatsächlich eingesetzt wird.</>,
      <>Heute setzen auch KI-Anbieter wie OpenAI und Anthropic Forward Deployed Engineers ein. Der Grund ist einfach: Ein starkes KI-Modell allein löst noch kein Problem im Unternehmen. Jemand muss <Hl>den Ablauf verstehen, die Lösung bauen und sie in den Alltag bringen.</Hl></>,
      <>Genau so arbeite ich – nur für Unternehmen, die sich kein eigenes Team dafür leisten wollen.</>,
    ],
    compareTitle: "Der Unterschied",
    compare: [["Klassische Beratung", "Analysiert und empfiehlt. Umsetzen musst du selbst."], ["Agentur", "Baut nach Lastenheft – oft weit weg vom echten Arbeitsalltag."], ["Forward Deployed Engineering", "Versteht den Ablauf vor Ort, baut selbst und bleibt dran, bis es läuft."]] as [string, string][],
    stepsTitle: "So läuft ein Einsatz ab",
    steps: [["Mitlaufen", "Ich schaue mir an, wie du wirklich arbeitest – nicht, wie es im Handbuch steht."], ["Kleinste Lösung", "Ich baue das Kleinste, das spürbar entlastet. In Tagen, nicht in Monaten."], ["Im Alltag testen", "Die Lösung läuft mit echten Fällen. Was hakt, wird sofort angepasst."], ["Übergeben und ausbauen", "Dokumentation, Einweisung – und dann der nächste Ablauf."]] as [string, string][],
    faq: [["Arbeitest du vor Ort oder remote?", "Meist remote, per Video und Bildschirmfreigabe. Vor Ort ist nach Absprache möglich."], ["Mit welchen Technologien arbeitest du?", "Mit dem, was passt: n8n, Make, Power Platform, Claude, OpenAI, Supabase – und deinen bestehenden Tools."], ["Wie lange dauert ein Einsatz?", "Das hängt vom Ablauf ab. Ein erster Automations-Pilot ist oft in 14 Tagen live."], ["Was unterscheidet das von einer normalen Automation?", "Der Fokus liegt nicht auf einem einzelnen Workflow, sondern darauf, dass die Lösung in deinem Alltag wirklich ankommt."]] as [string, string][],
    ctaTitle: "Wo hakt es bei dir im Alltag?",
    ctaText: "In 15 Minuten schauen wir, ob ein Einsatz bei dir sinnvoll ist – ehrlich, auch wenn die Antwort Nein ist.",
  },
  en: {
    title: <>Forward deployed engineering: <em className="hl">built where the work happens.</em></>,
    lead: <>Not a consultant who sends slides. Not an agency building somewhere in the background. I work <Hl>directly inside your processes</Hl>, understand the problem on the ground and build the solution <Hl>until it runs day to day.</Hl></>,
    a2: "What is it?",
    whatTitle: "What is a forward deployed engineer?",
    what: [
      <>The term comes from software companies like Palantir: engineers who don&apos;t sit at headquarters but with the customer – where the software is actually used.</>,
      <>Today, AI providers such as OpenAI and Anthropic also employ forward deployed engineers. The reason is simple: a strong AI model alone doesn&apos;t solve a business problem. Someone has to <Hl>understand the process, build the solution and get it into daily use.</Hl></>,
      <>That&apos;s exactly how I work – for businesses that don&apos;t want to build their own team for it.</>,
    ],
    compareTitle: "The difference",
    compare: [["Classic consulting", "Analyses and recommends. Implementation is up to you."], ["Agency", "Builds to a spec – often far from day-to-day reality."], ["Forward deployed engineering", "Understands the process on the ground, builds it and stays until it runs."]] as [string, string][],
    stepsTitle: "How an engagement works",
    steps: [["Shadowing", "I look at how you really work – not how the handbook says you do."], ["Smallest solution", "I build the smallest thing that takes real work off your plate. In days, not months."], ["Test in daily use", "The solution runs with real cases. Whatever gets stuck is adjusted right away."], ["Handover and expand", "Documentation, onboarding – and then the next process."]] as [string, string][],
    faq: [["Do you work on site or remotely?", "Mostly remotely, via video and screen sharing. On site is possible by arrangement."], ["Which technologies do you use?", "Whatever fits: n8n, Make, Power Platform, Claude, OpenAI, Supabase – and your existing tools."], ["How long does an engagement take?", "It depends on the process. A first automation pilot is often live within 14 days."], ["How is this different from regular automation?", "The focus isn't a single workflow, but making sure the solution actually lands in your daily work."]] as [string, string][],
    ctaTitle: "Where do things get stuck day to day?",
    ctaText: "In 15 minutes we'll see whether an engagement makes sense for you – honestly, even if the answer is no.",
  },
}

export default function Fde({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <Shell lang={lang}>
      <JsonLd data={serviceSchema(lang, "/forward-deployed-engineering", FDE_META[lang].title, FDE_META[lang].description)} />
      <PageHero title={t.title} lead={t.lead} actions={[{ href: CALL, label: UI[lang].ctaPrimary }, { href: "#was", label: t.a2 }]} />
      <section className="rule" id="was"><div className="wrap split"><h2>{t.whatTitle}</h2><div className="prose">{t.what.map((p, i) => <p key={i}>{p}</p>)}</div></div></section>
      <section className="rule"><div className="wrap split"><h2>{t.compareTitle}</h2><Facts rows={t.compare} /></div></section>
      <Section><h2>{t.stepsTitle}</h2><Steps items={t.steps} /></Section>
      <ClusterArticles lang={lang} cluster="fde" />
      <Section><h2>{UI[lang].faq}</h2><Faq items={t.faq} /></Section>
      <Cta lang={lang} title={t.ctaTitle} text={t.ctaText} />
    </Shell>
  )
}
