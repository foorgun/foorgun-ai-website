import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import IntegrationMarquee from "@/components/IntegrationMarquee";
import WhatIDo from "@/components/WhatIDo";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <main className="overflow-x-hidden">
        <Nav />
        <Hero />
        <Stats />
        <IntegrationMarquee />
        <WhatIDo />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </LangProvider>
  );
}
