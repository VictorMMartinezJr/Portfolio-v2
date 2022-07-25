import { useState } from "react";
import Astronaut from "../../assets/nav-astronaut.svg";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/****************
         ** Logo & Name **
         ****************/}
        <div className="navbar-name">
          <img src={Astronaut} alt="" className="navbar-logo" />
          <p className="name">VictorMtzCodes</p>
          <a
            href="#main-content"
            className="skip-link"
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
         ** Links **
         ****************/}
        <ul className={`navbar-links ${navOpen ? "active" : ""}`}>
          <a href="#" className="nav-link">
            <li>Projects</li>
          </a>
          <a href="#" className="nav-link">
            <li>About Me</li>
          </a>
          <a href="#" className="nav-link">
            <li>Skills</li>
          </a>
          <button className="nav-link contact-link contact-btn">
            <li>Contact</li>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
