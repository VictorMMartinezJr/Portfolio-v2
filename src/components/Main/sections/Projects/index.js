import ProjectCard from "./ProjectCard";
import projectData from "../../../data/ProjectData.json";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="section" id="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects">
        {projectData.map((project, id) => {
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
    </section>
  );
};

export default Projects;
