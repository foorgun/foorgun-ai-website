import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Stats from "@/components/Stats";
import IntegrationMarquee from "@/components/IntegrationMarquee";
import WhatIDo from "@/components/WhatIDo";
import Process from "@/components/Process";
import FitCheck from "@/components/FitCheck";
import Testimonials from "@/components/Testimonials";
import CheckSection from "@/components/CheckSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Testimonials />
      <Problem />
      <Stats />
      <Approach />
      <IntegrationMarquee />
      <WhatIDo />
      <Process />
      <FitCheck />
      <CheckSection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
