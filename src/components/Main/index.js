import "./main.css";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Main = () => {
  return (
    <main id="main-content">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Main;
