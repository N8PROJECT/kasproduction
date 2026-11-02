import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="hwrap">
        <Header />
        <Hero />
      </div>
      <main>
        <Intro />
        <Services />
        <Capabilities />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
