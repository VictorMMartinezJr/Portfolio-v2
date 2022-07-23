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
          <p className="name">Victor Martinez</p>
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
          <li className="nav-link">Projects</li>
          <li className="nav-link">About Me</li>
          <li className="nav-link">Skills</li>
          <li className="nav-link contact-link">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
