import "./ProjectCard.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ title, techStack, info, image, alt, live, github }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <p className="project-card-title">{title}</p>
        <div className="tech-stack">
          {techStack.map((tech, id) => {
            return (
              <span key={id} className="tech">
                {tech}
              </span>
            );
          })}
        </div>
        <p className="project-description block-of-text">{info}</p>
      </div>
      <img src={image} alt={alt} className="project-card-img" />
      <div className="project-links">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FiExternalLink />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
