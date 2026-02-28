import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

import Projects from "@/components/Projects";
import WorkShowcase from "@/components/WorkShowcase";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider">
          <About />
        </div>
        <div className="section-divider">
          <Skills />
        </div>
        <div className="section-divider">
          <Projects />
        </div>
        <div className="section-divider">
          <WorkShowcase />
        </div>
        <div className="section-divider">
          <Education />
        </div>
        <div className="section-divider">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
