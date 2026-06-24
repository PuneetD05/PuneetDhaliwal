import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <ProjectsGrid />
      <Skills />
      <Contact />
    </main>
  );
}
