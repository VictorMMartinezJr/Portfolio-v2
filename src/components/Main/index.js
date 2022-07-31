import "./main.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Main = () => {
  // Check if user has reduced motion on
  const reducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  return (
    <main id="main-content">
      <Hero reducedMotion={reducedMotion} />
      <Projects />
      <Skills reducedMotion={reducedMotion} />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
