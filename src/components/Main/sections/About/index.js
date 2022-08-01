import "./About.css";

const About = () => {
  return (
    <section className="section" id="about-section">
      <h1 className="section-title">About</h1>
      <div className="about-content container">
        <div className="about-text block-of-text">
          <p className="about-p">
            A front-end web developer based in Atlanta, GA with a passion for
            the development of the user interface of a website. During my
            process of building web applications, I like to focus on
            accessibility, page speed, mobile responsiveness, and writing clean
            code.
          </p>
          <p className="about-p">
            Making sure your web applications' load times are optimal and
            accessible to everyone regardless of the device they're using or
            disability they may have, is part of my main focus because it drives
            user engagement.
          </p>
        </div>
        <img
          src="assets/astronaut-about.svg"
          alt="An astronaut reading an HTML book with a pile of books next to him"
          className="about-img"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default About;
