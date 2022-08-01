import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="navbar container">
        {/****************
         ** Logo & Name **
         ****************/}
        <div className="navbar-name">
          <img
            src="./assets/nav-astronaut.svg"
            alt="Astronaut working on a computer"
            className="navbar-logo"
            aria-hidden="true"
          />
          <p className="name">VictorMtzCodes</p>
          {/****************
           ** Hidden Link **
           ****************/}
          <a
            href="#main-content"
            className="skip-link focus-link"
            aria-label="Skip to main content"
          >
            Skip to main content
          </a>
        </div>
        {/****************
         ** Burger Icon **
         ****************/}
        <div className="burger" onClick={() => setNavOpen(!navOpen)}>
          <div className={`burger-line line1 ${navOpen ? "active" : ""}`}></div>
          <div className={`burger-line line2 ${navOpen ? "active" : ""}`}></div>
          <div className={`burger-line line3 ${navOpen ? "active" : ""}`}></div>
        </div>
        {/****************
         **    Links    **
         ****************/}
        <ul className={`navbar-links ${navOpen ? "active" : ""}`}>
          <a
            href="#projects-section"
            className="nav-link focus-link"
            onClick={() => setNavOpen(false)}
          >
            <li>Projects</li>
          </a>
          <a
            href="#skills-section"
            className="nav-link focus-link"
            onClick={() => setNavOpen(false)}
          >
            <li>Skills</li>
          </a>
          <a
            href="#about-section"
            className="nav-link focus-link"
            onClick={() => setNavOpen(false)}
          >
            <li>About Me</li>
          </a>
          <a
            href="#contact-section"
            className="nav-link contact-link main-btn focus-link"
            onClick={() => setNavOpen(false)}
          >
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
