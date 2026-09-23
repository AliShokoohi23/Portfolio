import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Github from "./Github";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="page-section" style={{ position: "relative" }}>
      <Particle />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <p className="section-label">About Me</p>
          <h1 className="section-title">Know Who I Am</h1>
          <p className="section-subtitle">
            A passionate developer focused on building impactful software.
          </p>
        </div>

        <div className="about-intro-grid">
          <Aboutcard />
          <div className="about-img-wrapper">
            <img src={laptopImg} alt="about" />
          </div>
        </div>

        <div className="section-header">
          <p className="section-label">Technologies</p>
          <h2 className="section-title">Professional Skillset</h2>
        </div>
        <Techstack />

        <div className="section-header">
          <p className="section-label">Tools</p>
          <h2 className="section-title">Tools I Use</h2>
        </div>
        <Toolstack />

        <Github />
      </motion.div>
    </div>
  );
}

export default About;
