import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  imgPath: string;
  title: string;
  description: string;
  tags: string[];
  ghLink?: string;
  demoLink?: string;
}

function ProjectCards(props: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="project-card-img-wrapper">
        <img className="project-card-img" src={props.imgPath} alt={props.title} />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{props.title}</h3>
        <p className="project-card-desc">{props.description}</p>
        <div className="project-card-tags">
          {props.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-card-links">
          <button onClick={() => navigate(`/project/${props.id}`)} className="project-link project-link-details">
            <HiOutlineInformationCircle /> Details
          </button>
          
          {props.ghLink && (
            <a href={props.ghLink} target="_blank" rel="noreferrer" className="project-link project-link-github">
              <BsGithub /> GitHub
            </a>
          )}
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noreferrer" className="project-link project-link-demo">
              <CgWebsite /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCards;
