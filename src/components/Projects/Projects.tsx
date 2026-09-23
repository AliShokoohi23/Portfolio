import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projectsData";

function Projects() {
  return (
    <div className="page-section" style={{ position: "relative" }}>
      <Particle />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-subtitle">
            A collection of projects I've built — from full-stack platforms to mobile apps, AI algorithms, and embedded systems.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              imgPath={project.mainImage}
              title={project.title}
              description={project.shortDescription}
              tags={project.tags}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
