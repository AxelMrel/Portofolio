import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Practices from "@/components/Practices";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <main className="min-h-screen">
          <Hero />
          <TechMarquee />
          <Services />
          <Projects />
          <Process />
          <Practices />
          <Experience />
          <Faq />
          <Cta />
        </main>
      </div>
      <WhatsAppButton />
      <Footer />
      <RevealObserver />
    </>
  );
}
