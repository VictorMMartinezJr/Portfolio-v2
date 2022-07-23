import "./Hero.css";
import planetGreen from "../../../../assets/planet-green.svg";
import planetEarth from "../../../../assets/planet-earth.svg";
import planetPurple from "../../../../assets/planet-purple.svg";
import planetOrange from "../../../../assets/planet-orange.svg";
import sittingAstronaut from "../../../../assets/astronaut-sitting.svg";
import alienShip from "../../../../assets/alien-ship.svg";

const Hero = () => {
  return (
    <section className="section" id="hero-section">
      <div className="hero">
        {/****************
         **  Main Text  **
         ****************/}
        <h1 className="title">Victor.</h1>
        <h2 className="subtitle">
          Front-end <b>Developer</b>
        </h2>
        <p className="hero-p">Discover the secrets of a successful website</p>
        <a href="#" className="contact-btn contact-hero">
          Contact
        </a>
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
