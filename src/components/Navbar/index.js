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
          <li className="nav-link">
            <a>Projects</a>
          </li>
          <li className="nav-link">
            <a>About Me</a>
          </li>
          <li className="nav-link">
            <a>Skills</a>
          </li>
          <li className="nav-link contact-link contact-btn">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
