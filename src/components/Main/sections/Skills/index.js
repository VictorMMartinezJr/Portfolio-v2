import "./Skills.css";
import skillsData from "../../../data/SkillsData.json";

const Skills = () => {
  return (
    <section className="section" id="skills-section">
      <h2 className="section-title skills-title">Skills</h2>
      <div className="container skills-container">
        <div className="skills">
          {skillsData.map((skill, id) => {
            return (
              <p className="skill-name" key={id}>
                {skill.skillName}
              </p>
            );
          })}
        </div>
        <img
          src="assets/skills-assets/astronaut-skills.svg"
          alt=""
          className="skills-astronaut"
        />
      </div>
    </section>
  );
};

export default Skills;
