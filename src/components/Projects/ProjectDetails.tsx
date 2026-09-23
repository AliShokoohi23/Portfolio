import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projectsData";
import Particle from "../Particle";

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-section" style={{ position: "relative", textAlign: "center" }}>
        <Particle />
        <div style={{ paddingTop: "150px" }}>
          <h1 className="section-title">Project Not Found</h1>
          <button onClick={() => navigate("/project")} className="project-link project-link-details" style={{ marginTop: "20px" }}>
            <BsArrowLeft /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section" style={{ position: "relative" }}>
      <Particle />
      <motion.div
        className="project-details-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "100px 20px 50px 20px" }}
      >
        <button 
          onClick={() => navigate("/project")} 
          className="project-link project-link-details" 
          style={{ marginBottom: "30px", padding: "8px 15px", display: "inline-flex", alignItems: "center", gap: "5px" }}
        >
          <BsArrowLeft /> Back
        </button>

        <h1 className="section-title" style={{ textAlign: "left", marginBottom: "10px" }}>
          {project.title}
        </h1>
        
        <div className="project-card-tags" style={{ marginBottom: "30px", justifyContent: "flex-start" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-details-media" style={{ marginBottom: "40px" }}>
          {project.media.length > 0 ? (
            <div className="media-grid" style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
              {project.media.map((item, index) => (
                <div key={index} className="media-item" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  {item.type === 'video' ? (
                    <video controls src={item.url} style={{ width: "100%", display: "block" }} />
                  ) : (
                    <img src={item.url} alt={item.caption || project.title} style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "400px" }} />
                  )}
                  {item.caption && (
                    <p style={{ padding: "10px", textAlign: "center", margin: 0, background: "rgba(0,0,0,0.5)", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      {item.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <img 
              src={project.mainImage} 
              alt={project.title} 
              style={{ width: "100%", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.1)" }} 
            />
          )}
        </div>

        <div className="project-details-content" style={{ background: "rgba(10, 10, 15, 0.5)", padding: "30px", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <h2 style={{ color: "var(--text-primary)", marginBottom: "20px", fontSize: "1.8rem" }}>About the Project</h2>
          {project.extendedDescription.map((paragraph, index) => (
            <p key={index} style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
              {paragraph}
            </p>
          ))}

          <div className="project-card-links" style={{ marginTop: "40px", justifyContent: "flex-start" }}>
            {project.ghLink && (
              <a href={project.ghLink} target="_blank" rel="noreferrer" className="project-link project-link-github">
                <BsGithub /> View Source Code
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link project-link-demo">
                <CgWebsite /> Live Demonstration
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetails;
