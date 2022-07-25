import "./Hero.css";
import planetGreen from "../../../../assets/planet-green.svg";
import planetEarth from "../../../../assets/planet-earth.svg";
import planetPurple from "../../../../assets/planet-purple.svg";
import planetOrange from "../../../../assets/planet-orange.svg";
import sittingAstronaut from "../../../../assets/astronaut-sitting.svg";
import alienShip from "../../../../assets/alien-ship.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  {
    /*******************************
     **  Refs for load animation  **
     ******************************/
  }
  let subtitleRef = useRef(null);
  let heroPRef = useRef(null);
  let heroBtns = useRef(null);

  useEffect(() => {
    {
      /**************************
       **  Subtitle animation  **
       *************************/
    }
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.2 }
    );
    {
      /**************************
       **   P tag animation    **
       *************************/
    }
    gsap.fromTo(
      heroPRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );
    {
      /**************************
       **  Buttons animation  **
       *************************/
    }
    gsap.fromTo(
      heroBtns.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );
  }, []);
  return (
    <section className="section" id="hero-section">
      <div className="hero">
        {/****************
         **  Main Text  **
         ****************/}
        <h1 className="title">Victor.</h1>
        <h2 className="subtitle" ref={subtitleRef}>
          Front-end <b>Developer</b>
        </h2>
        <p className="hero-p" ref={heroPRef}>
          Discover the secrets of a successful website
        </p>
        {/****************
         **  Buttons  **
         ****************/}
        <div className="hero-btns" ref={heroBtns}>
          <a
            href="#projects-section"
            className="contact-btn contact-hero focus-link"
          >
            Continue
          </a>
          <a
            href="#contact"
            className="contact-btn contact-hero focus-link secondary-btn"
          >
            Contact
          </a>
        </div>
        {/*******************************
         ** Planets & Astronaut images **
         ******************************/}
        <img
          src={planetGreen}
          alt="Green planet with ring"
          className="planet planet-green"
        />
        <img
          src={planetEarth}
          alt="Planet earth"
          className="planet planet-earth"
        />
        <img
          src={planetPurple}
          alt="Purple planet with a ring"
          className="planet planet-purple"
        />
        <img src={planetOrange} alt="Orange planet" className="planet-orange" />
        <img src={sittingAstronaut} alt="" className="hero-astronaut" />
        <img src={alienShip} alt="" className="alien-ship" />
        {/****************
         **    Stars    **
         ****************/}
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
      </div>
    </section>
  );
};

export default Hero;
