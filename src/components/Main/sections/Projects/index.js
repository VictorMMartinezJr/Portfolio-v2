import ProjectCard from "./ProjectCard";
import projectData from "../../../data/ProjectData.json";
import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  const [loadNum, setLoadNum] = useState(4);
  const handleLoadMore = () => {
    if (loadNum >= projectData.length) return;
    setLoadNum(loadNum + 4);
  };
  return (
    <section className="section" id="projects-section">
      <h2
        className="section-title projects-section__h2"
        aria-label="Projects Section"
      >
        Projects
      </h2>
      <div className="projects container">
        {projectData.slice(0, loadNum).map((project, id) => {
          return (
            <ProjectCard
              key={id}
              title={project.title}
              techStack={project.techStack}
              info={project.description}
              image={project.img}
              live={project.liveSite}
              github={project.github}
            />
          );
        })}
      </div>
      <button className="main-btn load-more-btn" onClick={handleLoadMore}>
        {loadNum >= projectData.length ? "No More Projects" : "Load More"}
      </button>
    </section>
  );
};

export default Projects;
