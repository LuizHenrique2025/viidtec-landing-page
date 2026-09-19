import { AnimatedSections } from "@/components/animated-sections";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Differentials } from "@/components/differentials";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AnimatedSections>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Process />
        <Projects />
        <Cta />
        <Faq />
        <Contact />
        <Footer />
      </AnimatedSections>
      </main>
    </>
  );
}


